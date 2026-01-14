# 🔐 Security Plan - Digital Portfolio

> **Author:** Anchal  
> **Last Updated:** January 2026  
> **Status:** Active

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Authentication Architecture](#authentication-architecture)
3. [Secrets Management](#secrets-management)
4. [Authorization & Access Control](#authorization--access-control)
5. [Database Security](#database-security)
6. [Security Checklist](#security-checklist)
7. [Incident Response](#incident-response)
8. [Recommendations](#recommendations)

---

## 🎯 Executive Summary

This document outlines the security architecture, authentication mechanisms, and secrets handling practices for the Digital Portfolio application. The application uses a modern security stack with **Clerk** for authentication, **Neon** for database, and **Next.js** server-side protections.

### Current Security Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Authentication | Clerk | User identity & session management |
| Database | Neon (PostgreSQL) | Serverless PostgreSQL with SSL |
| Framework | Next.js 14+ | Server components & middleware protection |
| ORM | Drizzle | Type-safe database queries |
| Hosting | Vercel (recommended) | Edge security & DDoS protection |

---

## 🔑 Authentication Architecture

### How Login Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION FLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. User clicks "Sign In"                                       │
│         │                                                       │
│         ▼                                                       │
│  2. Clerk handles OAuth/Email authentication                    │
│         │                                                       │
│         ▼                                                       │
│  3. Clerk issues secure JWT token                               │
│         │                                                       │
│         ▼                                                       │
│  4. Next.js middleware validates token on each request          │
│         │                                                       │
│         ▼                                                       │
│  5. syncUser() syncs Clerk user to local database              │
│         │                                                       │
│         ▼                                                       │
│  6. User granted access based on role (user/admin)             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Authentication Provider: Clerk

**Why Clerk?**
- ✅ SOC 2 Type II compliant
- ✅ Built-in MFA support
- ✅ Session management & token rotation
- ✅ Social OAuth providers (Google, GitHub, etc.)
- ✅ Bot protection & rate limiting

### Middleware Protection

The application uses Next.js middleware to protect routes:

```typescript
// Protected Routes (require authentication)
- /admin/*        → Admin dashboard & management
- /resources/*    → Protected resources
- /projects/*     → Project management

// Public Routes (no authentication required)
- /               → Home page
- /about          → About page
- /blog           → Blog listing
- /blog/[slug]    → Individual blog posts
```

### User Synchronization

When a user logs in:

1. **Clerk authenticates** the user via OAuth or email/password
2. **`syncUser()` server action** is triggered
3. **Database record** is created/updated with:
   - Email (from Clerk)
   - Name (from Clerk profile)
   - Clerk ID (unique identifier)
   - Role (user/admin)
4. **First user** automatically becomes admin

### Session Security

| Feature | Implementation |
|---------|---------------|
| Session Duration | Managed by Clerk (configurable) |
| Token Storage | HTTP-only cookies |
| Token Refresh | Automatic via Clerk SDK |
| Session Revocation | Available via Clerk dashboard |

---

## 🔒 Secrets Management

### Environment Variables

The application uses the following secrets:

```plaintext
┌─────────────────────────────────────────────────────────────────┐
│                 REQUIRED ENVIRONMENT VARIABLES                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🔐 AUTHENTICATION (Clerk)                                      │
│  ├── NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY   [Public - Safe]       │
│  └── CLERK_SECRET_KEY                    [Secret - Protect!]   │
│                                                                 │
│  🗄️ DATABASE (Neon)                                             │
│  └── DATABASE_URL                        [Secret - Protect!]   │
│      OR individual variables:                                   │
│      ├── PGHOST                                                 │
│      ├── PGUSER                                                 │
│      ├── PGPASSWORD                      [Secret - Protect!]   │
│      └── PGDATABASE                                             │
│                                                                 │
│  🌐 CLERK URLS (Public)                                         │
│  ├── NEXT_PUBLIC_CLERK_SIGN_IN_URL                             │
│  ├── NEXT_PUBLIC_CLERK_SIGN_UP_URL                             │
│  └── NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Secrets Classification

| Variable | Classification | Exposure Risk |
|----------|---------------|---------------|
| `CLERK_SECRET_KEY` | 🔴 **CRITICAL** | Full account compromise |
| `DATABASE_URL` | 🔴 **CRITICAL** | Database access & data breach |
| `PGPASSWORD` | 🔴 **CRITICAL** | Database access |
| `NEXT_PUBLIC_*` | 🟢 **PUBLIC** | Safe for client exposure |

### Best Practices Implemented

✅ **Server-side only access** - Critical secrets only accessed in:
- Server Components
- Server Actions (`"use server"`)
- API Routes
- Middleware

✅ **No hardcoded secrets** - All secrets via environment variables

✅ **SSL/TLS for database** - `?sslmode=require` enforced

### Secrets Handling Checklist

| Practice | Status | Notes |
|----------|--------|-------|
| `.env` in `.gitignore` | ✅ | Prevents accidental commits |
| No secrets in client code | ✅ | Only `NEXT_PUBLIC_*` exposed |
| SSL database connections | ✅ | Enforced via connection string |
| Secrets in Vercel dashboard | 📋 | Configure for production |
| Rotate secrets quarterly | 📋 | Schedule rotation |
| Audit secret access logs | 📋 | Enable in Clerk & Neon dashboards |

---

## 👥 Authorization & Access Control

### Role-Based Access Control (RBAC)

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER ROLES                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  👤 USER (Default)                                              │
│  ├── View public pages                                          │
│  ├── Read blog posts                                            │
│  └── Subscribe to newsletter                                    │
│                                                                 │
│  👑 ADMIN                                                       │
│  ├── All user permissions                                       │
│  ├── Access /admin dashboard                                    │
│  ├── Create/Edit/Delete blog posts                             │
│  ├── Manage projects                                            │
│  ├── View subscriber list                                       │
│  └── Manage user roles                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Admin Verification Flow

```typescript
// Server-side admin check
export async function isAdmin(): Promise<boolean> {
  1. Get current user from Clerk
  2. Extract primary email
  3. Query database for user record
  4. Check if role === 'admin'
  5. Return boolean result
}
```

### First User Admin Assignment

The **first user** to sign up automatically becomes an admin:
- Prevents lockout scenarios
- Ensures initial access to admin panel
- Tracked via `is_first_user` column

---

## 🗄️ Database Security

### Connection Security

| Feature | Status |
|---------|--------|
| SSL/TLS Encryption | ✅ Enforced |
| Connection Pooling | ✅ Via Neon |
| Parameterized Queries | ✅ Via Drizzle ORM |
| SQL Injection Prevention | ✅ ORM-based queries |

### Data Protection

| Data Type | Protection |
|-----------|------------|
| User Emails | Stored in database, validated by Clerk |
| Passwords | **Not stored** - Handled by Clerk |
| Session Tokens | HTTP-only cookies via Clerk |
| User Roles | Server-side verification only |

### Database Schema Security

```sql
-- Users table with role-based access
users (
  id          SERIAL PRIMARY KEY,
  email       TEXT UNIQUE NOT NULL,
  clerk_id    TEXT UNIQUE NOT NULL,
  role        VARCHAR(20) DEFAULT 'user',
  is_first_user BOOLEAN DEFAULT false
)
```

---

## ✅ Security Checklist

### Pre-Deployment

- [ ] All `CLERK_SECRET_KEY` values set in production
- [ ] `DATABASE_URL` configured for production database
- [ ] `.env` file NOT committed to repository
- [ ] SSL certificates valid for custom domain
- [ ] CORS policies configured correctly
- [ ] Rate limiting enabled in Clerk dashboard

### Post-Deployment

- [ ] Test authentication flow end-to-end
- [ ] Verify admin access works correctly
- [ ] Confirm protected routes require login
- [ ] Check database connections are secure
- [ ] Enable security headers in Vercel

### Ongoing Maintenance

- [ ] Rotate `CLERK_SECRET_KEY` every 90 days
- [ ] Rotate database passwords quarterly
- [ ] Review access logs monthly
- [ ] Update dependencies for security patches
- [ ] Audit user roles and permissions

---

## 🚨 Incident Response

### If Secrets Are Compromised

#### CLERK_SECRET_KEY Compromised:
1. **Immediately** rotate key in Clerk dashboard
2. Update production environment variable
3. Redeploy application
4. Review Clerk audit logs for suspicious activity
5. Invalidate all active sessions

#### DATABASE_URL/PGPASSWORD Compromised:
1. **Immediately** change database password in Neon
2. Update all environment variables
3. Review database access logs
4. Check for unauthorized data access
5. Consider database backup restoration if needed

### Security Contact

For security concerns, contact:
- **Email:** anchal1234asr@gmail.com
- **Response Time:** Within 24 hours

---

## 💡 Recommendations

### Short-term (Implement Now)

1. **Enable MFA** in Clerk for admin accounts
2. **Set up alerts** in Clerk for suspicious login attempts
3. **Enable IP allowlisting** for database access in Neon
4. **Add security headers** via `next.config.ts`:

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

### Medium-term (Next 30 Days)

1. **Implement audit logging** for admin actions
2. **Add rate limiting** to public API endpoints
3. **Set up monitoring** for failed authentication attempts
4. **Create backup strategy** for database

### Long-term (Next 90 Days)

1. **Consider penetration testing** before major releases
2. **Implement CSP** (Content Security Policy)
3. **Add SAST/DAST** to CI/CD pipeline
4. **Document disaster recovery** procedures

---

## 📚 References

- [Clerk Security Documentation](https://clerk.com/docs/security/overview)
- [Neon Security Best Practices](https://neon.tech/docs/security)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

*This security plan should be reviewed and updated quarterly or after any significant architecture changes.*
