# Deployment Guide - BTX Furniture

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Code

1. **Ensure all changes are committed**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Set Up Supabase

1. Go to [supabase.com](https://supabase.com)
2. Create a new project (or use existing)
3. Go to Project Settings → API
4. Copy your:
   - Project URL (e.g., `https://xxxxx.supabase.co`)
   - Anon/Public Key (starts with `eyJ...`)

### Step 3: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"

2. **Import Repository**
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Vite (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)

4. **Add Environment Variables** ⚠️ IMPORTANT
   Click "Environment Variables" and add:
   
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site is live! 🎉

### Step 4: Set Up Database

1. Go to your Supabase project
2. Open SQL Editor
3. Copy contents of `supabase-schema.sql`
4. Paste and run in SQL Editor
5. Tables are now created!

## 🔧 Troubleshooting

### Build Error: "npm run build exited with 1"

**Solution 1: Check Environment Variables**
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Variable names must be EXACT (case-sensitive)
- Click "Redeploy" after adding variables

**Solution 2: Test Build Locally**
```bash
npm run build
```
If it fails locally, check the error message.

**Solution 3: Clear Cache**
- Go to Vercel Dashboard → Deployments
- Click "..." menu → "Redeploy"
- Check "Clear cache" option
- Click "Redeploy"

### TypeScript Errors

The project has strict mode disabled, but if you get TS errors:
```bash
npm run build
```
Check the specific error and fix in the code.

### Missing Dependencies

```bash
npm install
npm run build
```

## 🔄 Continuous Deployment

Once set up, Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Vercel will automatically build and deploy! ✨

## 🌐 Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-10 minutes)

## 📊 Monitoring

- **Build Logs**: Vercel Dashboard → Deployments → Click deployment
- **Runtime Logs**: Vercel Dashboard → Your Project → Logs
- **Analytics**: Vercel Dashboard → Your Project → Analytics

## 🔐 Security Checklist

- [ ] Environment variables set in Vercel
- [ ] Supabase RLS policies enabled
- [ ] Admin password changed from default
- [ ] CORS configured in Supabase
- [ ] API keys are anon keys (not service keys)

## 📞 Support

If you encounter issues:
1. Check Vercel build logs
2. Test build locally with `npm run build`
3. Verify environment variables
4. Check Supabase connection

Happy deploying! 🚀
