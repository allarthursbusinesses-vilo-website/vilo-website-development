'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between premium-glass px-6 py-3 rounded-2xl border-white/5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap size={18} fill="white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">CREATOR ENGINE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/dashboard" className="hover:text-white transition">Showcase</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-sm font-medium hover:text-white transition text-gray-400">
            Log in
          </Link>
          <Link 
            href="/auth/login" 
            className="bg-white text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
