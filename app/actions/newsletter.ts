"use server"

import { db, subscribers } from "@/lib/db"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { ActionState, newsletterSubscriptionSchema } from "@/lib/types"
import arcjet, { detectBot, slidingWindow } from "@arcjet/next"
import { headers } from "next/headers"

// Initialize Arcjet for newsletter signup protection
const aj = arcjet({
  key: process.env.ARCJET_API_KEY!,
  rules: [
    detectBot({
      mode: "LIVE",
      allow: [], // Block all bots
    }),
    slidingWindow({
      mode: "LIVE",
      interval: "1h", // 1 hour interval
      max: 5, // Max 5 signup attempts per hour per IP
    }),
  ],
});

// Define the interface but don't export it directly
interface NewsletterState extends ActionState {
  email?: string;
  name?: string;
}

// Create an async function to return the initial state instead of exporting the object directly
export async function getInitialNewsletterState(): Promise<NewsletterState> {
  return {
    status: "idle",
    message: "",
  };
}

/**
 * Server action to subscribe a user to the newsletter
 * For use with useActionState in React 19
 */
export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {

  // Get request details for Arcjet
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "127.0.0.1";

  // Create a mock request object for Arcjet
  const request = new Request("https://your-domain.com/api/newsletter/subscribe", {
    method: "POST",
    headers: {
      "x-forwarded-for": ip,
      "user-agent": headersList.get("user-agent") || "",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: formData.get("email") as string,
      name: formData.get("name") as string,
    }),
  });

  // Run Arcjet protection
  const decision = await aj.protect(request);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return {
        status: "error",
        message: "Too many signup attempts. Please try again later.",
      };
    } else if (decision.reason.isBot()) {
      return {
        status: "error",
        message: "Signup blocked due to suspicious activity.",
      };
    } else if (decision.reason.isEmail()) {
      return {
        status: "error",
        message: "Please use a valid email address.",
      };
    } else {
      return {
        status: "error",
        message: "Signup blocked for security reasons.",
      };
    }
  }

  // Parse the form data
  const email = formData.get("email") as string
  const name = formData.get("name") as string

  // Validate the input with Zod schema
  const validationResult = newsletterSubscriptionSchema.safeParse({ email, name });
  if (!validationResult.success) {
    return {
      status: "error",
      message: validationResult.error.errors[0]?.message || "Invalid input data",
    }
  }

  try {
    // Check if email already exists
    const existingSubscriber = await db.select().from(subscribers).where(eq(subscribers.email, email))

    if (existingSubscriber.length > 0) {
      return {
        status: "error",
        message: "You are already subscribed to our newsletter",
        email,
        name,
      }
    }

    // Insert new subscriber
    await db.insert(subscribers).values({
      email,
      name: name || null,
    })

    revalidatePath("/")

    return {
      status: "success",
      message: "Thank you for subscribing to our newsletter!",
      email,
      name,
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      status: "error",
      message: "An error occurred while subscribing. Please try again.",
    }
  }
}

/**
 * Server action to get all newsletter subscribers
 */
export async function getSubscribers(): Promise<Array<typeof subscribers.$inferSelect>> {  
  try {
    const allSubscribers = await db.select().from(subscribers).orderBy(subscribers.createdAt)
    return allSubscribers
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return []
  }
}
