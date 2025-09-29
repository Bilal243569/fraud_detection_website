# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Database Setup**: Set up a PostgreSQL database (recommended: Neon, Supabase, or PlanetScale)

## Deployment Steps

### 1. Environment Variables

In your Vercel project dashboard, add these environment variables:

```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

#### Option B: Using Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository in Vercel dashboard
3. Vercel will automatically detect the configuration

### 3. Database Setup

After deployment, run the database migrations:

```bash
npm run db:push
```

## Project Structure

- `client/` - React frontend (Vite)
- `server/` - Express.js backend (local development only)
- `api/` - Vercel serverless functions
- `shared/` - Shared TypeScript types and schemas
- `dist/public/` - Built frontend assets

## Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Vite build configuration
- `drizzle.config.ts` - Database configuration

## Troubleshooting

### Build Errors
- Ensure all dependencies are in `dependencies`, not `devDependencies` if needed in production
- Check that TypeScript files compile without errors

### Database Connection
- Verify `DATABASE_URL` is set correctly in Vercel environment variables
- Ensure your database allows connections from Vercel's IP ranges

### API Routes
- API endpoints are now serverless functions in the `api/` directory
- Each `.js` file in `api/` becomes an endpoint (e.g., `api/health.js` → `/api/health`)

## Notes

- This configuration deploys the frontend as a static site
- Backend API routes are handled by Vercel serverless functions
- The original Express.js server is only used for local development
