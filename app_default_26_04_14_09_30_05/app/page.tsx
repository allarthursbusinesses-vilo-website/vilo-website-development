'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowRight, Zap, Layers, BarChart3, Star, Play, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
        
        <header className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full premium-glass text-xs md:text-sm font-medium border-white/10"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Used by 500+ Top Creators
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-[1.1] md:leading-tight"
          >
            Content creation, <br className="hidden md:block" /> at the speed of thought.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Transform your long-form videos into viral machines. The all-in-one suite for repurposing, asset management, and brand deal tracking.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 premium-glass font-bold rounded-2xl border-white/10 hover:border-white/20 transition flex items-center justify-center gap-2">
              <Play size={18} fill="white" /> Watch Demo
            </button>
          </motion.div>
        </header>

        {/* Floating Metrics */}
        <div className="max-w-7xl mx-auto mt-32 grid md:grid-cols-3 gap-6" id="features">
          <GlassCard>
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Repurposer</h3>
            <p className="text-gray-400">Turn one YouTube video into 20+ viral clips, Twitter threads, and SEO blogs in 60 seconds.</p>
          </GlassCard>
          
          <GlassCard>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Infinite Vault</h3>
            <p className="text-gray-400">Secure cloud storage for your brand kits, RAW footage, and media kits. High-speed sharing included.</p>
          </GlassCard>

          <GlassCard>
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 text-emerald-400">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Sponsor CRM</h3>
            <p className="text-gray-400">Stop losing money in emails. Track deal pipelines, automate outreach, and manage payments.</p>
          </GlassCard>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6" id="pricing">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing.</h2>
          <p className="text-gray-400">Choose the plan that fits your creator stage.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8 border-white/5">
            <h3 className="text-xl font-bold mb-2">Growth Plan</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['5 AI Video Repurposes/mo', '100GB Vault Storage', 'Basic CRM Access', 'Priority Support'].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-purple-500" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 premium-glass border-white/10 rounded-xl font-bold hover:bg-white/5 transition">
              Get Started
            </button>
          </GlassCard>

          <GlassCard className="p-8 border-purple-500/30 bg-purple-500/5 relative">
            <div className="absolute top-4 right-4 bg-purple-600 text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded">Popular</div>
            <h3 className="text-xl font-bold mb-2">Pro Engine</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">$79</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Repurposing', '1TB Vault Storage', 'Advanced Sponsor Analytics', 'API Access', '24/7 VIP Support'].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-purple-500" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition">
              Upgrade to Pro
            </button>
          </GlassCard>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-purple-500" />
            <span className="font-bold">CREATOR ENGINE</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
          <p className="text-sm text-gray-600">© 2024 Creator Engine Inc. Built for the modern creator.</p>
        </div>
      </footer>
    </div>
  );
}
