# BTX Furniture - Custom Furniture E-Commerce Platform

A modern, full-featured furniture e-commerce website built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Product Catalog** - Browse beautiful custom furniture pieces
- **Custom Design Requests** - Submit custom furniture design inquiries
- **Order Tracking** - Track your orders in real-time
- **Portfolio Gallery** - View completed projects with detailed information
- **Admin Dashboard** - Manage products, orders, and customer inquiries
- **Responsive Design** - Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL database, Authentication, Storage)
- **Routing**: React Router v6
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd btx-furniture
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run development server**
```bash
npm run dev
```

## 🚢 Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)
- Supabase project with credentials

### Steps

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Add Environment Variables**
   In Vercel project settings, add:
   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your Supabase anon/public key

4. **Deploy!** 🎉
   - Vercel will automatically build and deploy
   - Your site will be live at `your-project.vercel.app`

### Troubleshooting Build Errors

If you get "npm run build exited with 1":

1. **Check Environment Variables**
   - Make sure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set in Vercel
   - Variables must start with `VITE_` to be accessible in the app

2. **Check Build Logs**
   - Go to Vercel dashboard → Deployments → Click failed deployment
   - Check the build logs for specific errors

3. **Test Build Locally**
```bash
npm run build
```

4. **Common Fixes**
   - Clear Vercel cache and redeploy
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors

## 🗄️ Database Setup

See `supabase-schema.sql` for the complete database schema.

Run this SQL in your Supabase SQL editor to set up all tables.

## 👨‍💼 Admin Access

Default admin credentials (change in production):
- Email: admin@btxfurniture.com
- Password: Set via environment variable

Access admin dashboard at: `/admin/login`

## 📝 License

MIT License - feel free to use this project for your own purposes!
