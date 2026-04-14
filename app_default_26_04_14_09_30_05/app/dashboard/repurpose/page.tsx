'use client';
import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  Upload, 
  Youtube, 
  Link as LinkIcon, 
  FileText, 
  CheckCircle2, 
  PlayCircle,
  Scissors,
  Share2,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RepurposePage() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStart = () => {
    if (!url) return;
    setIsProcessing(true);
    // Simulate process
    setTimeout(() => setIsProcessing(false), 3000);
  };

  const assetTypes = [
    { name: 'TikTok Clips', icon: Scissors, count: '10-12' },
    { name: 'Twitter Threads', icon: LinkIcon, count: '3-4' },
    { name: 'Blog Posts', icon: FileText, count: '1' },
    { name: 'Newsletter', icon: Share2, count: '1' }
  ];

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h2 className="text-3xl font-bold">AI Repurposing Engine</h2>
        <p className="text-gray-400 text-lg">Input your long-form video, get a month's worth of content.</p>
      </div>

      <GlassCard className="border-dashed border-2 border-white/10 p-12 text-center" hover={false}>
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 bg-purple-600/20 text-purple-400 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Youtube size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Paste YouTube Link</h3>
            <p className="text-sm text-gray-500">We'll pull the video and transcript automatically</p>
          </div>
          
          <div className="relative group">
            <input 
              type="text" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-purple-500/50 transition-all text-white placeholder:text-gray-600"
            />
            {url && (
              <button 
                onClick={handleStart}
                disabled={isProcessing}
                className="absolute right-2 top-2 bottom-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900 text-white px-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
              >
                {isProcessing ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Process <Sparkles size={14} /></>
                )}
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-500">
            <span className="flex items-center gap-1"><CheckCircle2 size={12} /> HD Support</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Auto-Captions</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Multi-Language</span>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {assetTypes.map((type) => (
          <GlassCard key={type.name} className="flex flex-col items-start gap-4 p-5 hover:border-purple-500/30 transition-all cursor-pointer">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-purple-400">
              <type.icon size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">{type.name}</p>
              <p className="text-xs text-gray-500">{type.count} Assets Estimated</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="flex items-center justify-between p-6 bg-purple-600/10 border border-purple-500/20 rounded-3xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
            <Sparkles className="text-white" />
          </div>
          <div>
            <h4 className="font-bold">Smart Extraction Mode</h4>
            <p className="text-sm text-gray-400">Using GPT-4o for narrative hook detection.</p>
          </div>
        </div>
        <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition">
          Configure Rules
        </button>
      </div>

      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
          >
            <GlassCard className="max-w-lg w-full p-10 text-center" hover={false}>
              <div className="mb-8">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="text-purple-500" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Analyzing your video...</h3>
              <p className="text-gray-400 mb-8">Our AI is scanning for the best hooks and transcribing the content.</p>
              <div className="space-y-4">
                {['Extracting Transcript', 'Detecting Highlights', 'Generating Scripts'].map((step, i) => (
                  <div key={step} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{step}</span>
                    <span className="text-purple-400 font-bold">{i === 0 ? 'Complete' : 'Processing...'}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
