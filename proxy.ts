import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import arcjet, { detectBot, slidingWindow } from "@arcjet/next";

const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
  '/resources(.*)',
  '/projects(.*)',
]);

// Initialize Arcjet with basic security rules
const aj = arcjet({
  key: process.env.ARCJET_API_KEY!,
  rules: [
    // Bot detection
    detectBot({
      mode: "LIVE",
      allow: [], // Block all bots
    }),
    // Rate limiting for all requests
    slidingWindow({
      mode: "LIVE",
      interval: "1m", // 1 minute
      max: 100, // Max 100 requests per minute per IP
    }),
  ],
});

export const proxy = clerkMiddleware(async (auth, req) => {
  // First, run Arcjet security checks
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return new Response("Too many requests", { status: 429 });
    } else if (decision.reason.isBot()) {
      return new Response("Forbidden", { status: 403 });
    } else {
      return new Response("Forbidden", { status: 403 });
    }
  }

  // Then, handle Clerk authentication for protected routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};