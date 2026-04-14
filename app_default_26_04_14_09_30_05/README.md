# Creator Engine 🚀

Creator Engine is a premium, high-performance SaaS platform built for elite content creators. It streamlines content repurposing using AI, manages brand assets in a secure vault, and tracks seven-figure brand deals through an integrated CRM.

## ✨ Features

- **AI Repurposing Engine**: Transform YouTube videos into TikToks, Twitter threads, and blog posts using GPT-4o logic.
- **Glassmorphic UI**: High-end visual design with mesh gradients and Framer Motion transitions.
- **Content Vault**: A secure, fast file management system for brand assets.
- **Sponsor CRM**: A dedicated pipeline to track brand deals from outreach to payment.
- **Auth Ready**: Integrated with Supabase Auth (GitHub/Email).
- **Pro Dashboard**: Real-time analytics and job tracking.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend/Auth**: Supabase
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- A Supabase project (optional for UI-only testing)

### Installation

1. Clone the repository:
    git clone https://github.com/yourusername/creator-engine.git

2. Install dependencies:
    npm install

3. Set up environment variables:
    cp .env.example .env.local
    # Add your Supabase credentials if using the backend features

4. Run the development server:
    npm run dev

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (GlassCard, Sidebar, etc.).
- `lib/`: Utility functions and Supabase client.
- `styles/`: Global CSS and Tailwind configurations.
- `public/`: Static assets and images.

## 🎨 Design System

The application uses a custom "Premium Dark" theme:
- **Background**: `#050505` (Deep Black)
- **Primary**: `bg-purple-600` (Modern Purple)
- **Glass**: `rgba(255, 255, 255, 0.03)` with `16px` blur
- **Animations**: Spring-based transitions using Framer Motion

## 🔧 Troubleshooting

- **Framer Motion Errors**: Ensure you are using `use client` in components that utilize motion.
- **Next.js Version**: This project uses Next.js 14 features like the App Router.
- **Tailwind Config**: If custom glass effects aren't showing, check `globals.css` for CSS variable definitions.

## 📄 License

MIT License - feel free to use this for your own SaaS projects!
