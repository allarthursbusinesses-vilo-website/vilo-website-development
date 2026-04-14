'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Zap, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#050505]">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link href="/" className="flex items-center gap-2 justify-center mb-10 group">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap size={24} fill="white" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">CREATOR ENGINE</span>
        </Link>

        <GlassCard className="p-8" hover={false}>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-400 text-sm">Sign in to your creator dashboard</p>
          </div>

          <div className="space-y-4">
            <button className="w-full py-3 px-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition">
              <Github size={20} /> Continue with GitHub
            </button>
            <button className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition text-white">
              <Mail size={20} /> Continue with Email
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? <Link href="#" className="text-purple-400 font-bold hover:text-purple-300">Start 7-day trial</Link>
            </p>
          </div>
        </GlassCard>

        <p className="text-center mt-8 text-xs text-gray-600 px-6">
          By continuing, you agree to Creator Engine's Terms of Service and Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
}
