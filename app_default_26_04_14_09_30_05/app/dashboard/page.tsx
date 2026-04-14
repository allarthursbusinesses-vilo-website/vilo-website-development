'use client';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  TrendingUp, 
  Youtube, 
  Instagram, 
  Twitter, 
  ArrowUpRight,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardOverview() {
  const stats = [
    { label: 'Total Views', value: '1.2M', change: '+12%', icon: TrendingUp },
    { label: 'YouTube Assets', value: '48', change: '+5', icon: Youtube },
    { label: 'Sponsorships', value: '$12,400', change: '+18%', icon: TrendingUp },
    { label: 'Clips Generated', value: '152', change: '+24', icon: Youtube },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
          <p className="text-gray-400">Here's what happened with your content today.</p>
        </div>
        <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition">
          <Plus size={18} /> New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-white/5 rounded-lg">
                <stat.icon size={20} className="text-purple-400" />
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2" hover={false}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Active Repurposing Jobs</h3>
            <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-gray-800 rounded-lg overflow-hidden relative">
                   <img src={`https://picsum.photos/seed/${item+10}/100/100`} alt="thumbnail" className="object-cover w-full h-full opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                   </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">The Future of AI in 2024</h4>
                  <p className="text-xs text-gray-500">Processing: 4 TikToks, 2 Threads</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-purple-400">65% Complete</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard hover={false}>
          <h3 className="font-bold text-lg mb-6">Recent Deals</h3>
          <div className="space-y-6">
            {[
              { company: 'Notion', amount: '$4,500', status: 'Invoiced' },
              { company: 'HelloFresh', amount: '$2,200', status: 'Signed' },
              { company: 'Squarespace', amount: '$3,800', status: 'Negotiating' },
            ].map((deal, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-xs">
                    {deal.company[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{deal.company}</p>
                    <p className="text-xs text-gray-500">{deal.status}</p>
                  </div>
                </div>
                <p className="text-sm font-bold">{deal.amount}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-sm font-bold hover:bg-white/5 transition">
            Open CRM
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
