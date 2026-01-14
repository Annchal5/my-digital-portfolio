import * as dotenv from "dotenv";
import { resolve } from "path";

// Load environment variables FIRST before any DB imports
const envPath = resolve(process.cwd(), ".env");
const result = dotenv.config({ path: envPath });

// Also try .env.local
if (!process.env.DATABASE_URL && !process.env.PGHOST) {
  dotenv.config({ path: resolve(process.cwd(), ".env.local") });
}

console.log("Environment loaded from:", envPath);
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
console.log("PGHOST exists:", !!process.env.PGHOST);

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, serial, text, timestamp, json } from "drizzle-orm/pg-core";
import { eq, ilike } from "drizzle-orm";

// Define the projects table schema locally to avoid importing from lib/db
const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  image: text("image"),
  items: json("items").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Determine the database connection string
let connectionString: string;

if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL;
} else if (
  process.env.PGHOST &&
  process.env.PGUSER &&
  process.env.PGDATABASE &&
  process.env.PGPASSWORD
) {
  connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require`;
} else {
  console.error("No database credentials found");
  process.exit(1);
}

const sql = neon(connectionString);
const db = drizzle(sql);

// Cybersecurity projects based on skills mentioned in the about page
const cybersecurityProjects = [
  {
    title: "Enterprise SOC Operations Dashboard",
    description: "Real-time security monitoring platform processing 500+ daily SIEM alerts with automated threat correlation and incident prioritization using Splunk.",
    icon: "Eye",
    image: "/modern-soc-overview.png",
    items: [
      "Splunk SIEM integration with custom dashboards",
      "Automated alert triage reducing response time by 60%",
      "Real-time threat correlation across multiple data sources",
      "Incident escalation workflow automation",
      "KPI tracking for SOC analyst performance"
    ]
  },
  {
    title: "DLP Policy Optimization Framework",
    description: "Forcepoint DLP implementation that reduced false positives by 40% through intelligent policy tuning and machine learning-assisted classification.",
    icon: "Shield",
    image: "/digital-fortress.png",
    items: [
      "Custom DLP policies for sensitive data protection",
      "False positive reduction through policy refinement",
      "Data classification across email, web, and endpoints",
      "Compliance reporting for GDPR and ISO 27001",
      "User behavior analytics integration"
    ]
  },
  {
    title: "Vulnerability Management System",
    description: "Comprehensive vulnerability assessment and remediation tracking using Qualys, with risk-based prioritization aligned to business criticality.",
    icon: "Bug",
    image: "/network-security-dashboard.png",
    items: [
      "Qualys integration for continuous scanning",
      "CVSS-based risk scoring and prioritization",
      "Automated remediation ticket creation in ServiceNow",
      "Vulnerability trending and reporting dashboards",
      "Patch management coordination workflows"
    ]
  },
  {
    title: "Endpoint Detection & Response Platform",
    description: "CrowdStrike EDR deployment for enterprise endpoint protection with advanced threat hunting capabilities and automated response playbooks.",
    icon: "Fingerprint",
    image: "/digital-watchtower.png",
    items: [
      "CrowdStrike Falcon sensor deployment",
      "Real-time endpoint threat detection",
      "Automated malware quarantine and remediation",
      "Threat hunting queries and IOC correlation",
      "Integration with SIEM for unified visibility"
    ]
  },
  {
    title: "Cloud Security Posture Management",
    description: "Azure and AWS security configuration assessment ensuring compliance with CIS benchmarks and organizational security policies.",
    icon: "Cloud",
    image: "/secure-cloud-network.png",
    items: [
      "Multi-cloud security assessment (Azure, AWS)",
      "CIS benchmark compliance monitoring",
      "Identity and access management auditing",
      "Network security group analysis",
      "Security recommendations and remediation tracking"
    ]
  },
  {
    title: "Incident Response Automation Platform",
    description: "SOAR-integrated incident response system with automated playbooks for common security incidents, reducing MTTR by 50%.",
    icon: "Activity",
    image: "/interconnected-threat-analysis.png",
    items: [
      "Automated incident triage and classification",
      "Playbook-driven response for phishing, malware",
      "Integration with ticketing systems",
      "Evidence collection and chain of custody",
      "Post-incident reporting and lessons learned"
    ]
  }
];

async function seedCybersecurityProjects() {
  try {
    console.log("Starting cybersecurity projects seed...\n");

    // First, add the image column if it doesn't exist
    console.log("Ensuring image column exists...");
    try {
      await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS image TEXT`;
      console.log("✓ Image column ready\n");
    } catch (e) {
      console.log("Image column may already exist, continuing...\n");
    }

    // Delete "My Digital Portfolio" project if it exists
    console.log("Looking for 'My Digital Portfolio' project to delete...");
    const portfolioProjects = await db
      .select()
      .from(projects)
      .where(ilike(projects.title, '%digital portfolio%'));

    if (portfolioProjects.length > 0) {
      for (const proj of portfolioProjects) {
        await db.delete(projects).where(eq(projects.id, proj.id));
        console.log(`✓ Deleted project: "${proj.title}" (ID: ${proj.id})`);
      }
    } else {
      console.log("No 'Digital Portfolio' project found to delete.");
    }

    console.log("\n--- Inserting Cybersecurity Projects ---\n");

    // Insert new cybersecurity projects
    for (const project of cybersecurityProjects) {
      // Check if project with same title already exists
      const existing = await db
        .select()
        .from(projects)
        .where(eq(projects.title, project.title))
        .limit(1);

      if (existing.length > 0) {
        console.log(`⏭️  Skipping "${project.title}" - already exists`);
        continue;
      }

      const inserted = await db.insert(projects).values({
        title: project.title,
        description: project.description,
        icon: project.icon,
        image: project.image,
        items: project.items
      }).returning();

      console.log(`✓ Created project: "${project.title}" (ID: ${inserted[0].id})`);
    }

    console.log("\n✓ Cybersecurity projects seed completed successfully!");
    console.log("\nSummary:");
    console.log(`- ${cybersecurityProjects.length} cybersecurity projects processed`);

  } catch (error) {
    console.error("\nError seeding projects:", error);
    process.exit(1);
  }
}

seedCybersecurityProjects();
