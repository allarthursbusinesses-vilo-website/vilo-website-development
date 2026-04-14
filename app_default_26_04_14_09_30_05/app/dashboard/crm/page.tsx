'use client';
import { GlassCard } from '@/components/ui/GlassCard';
import { Plus, Filter, Mail, DollarSign, Calendar, ExternalLink } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const deals = [
  { company: 'Magic Mind', dealName: 'Newsletter Sponsoshirp', amount: 1500, status: 'Negotiation', color: 'bg-yellow-500' },
  { company: 'Surfshark', dealName: '3x YouTube Pre-rolls', amount: 9000, status: 'Contract Sent', color: 'bg-blue-500' },
  { company: 'NordVPN', dealName: 'Podcast Bundle', amount: 5500, status: 'Paid', color: 'bg-emerald-500' },
  { company: 'Skillshare', dealName: 'Dedicated Video', amount: 4000, status: 'Drafting', color: 'bg-purple-500' },
];

export default function CRMPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sponsor CRM</h1>
          <p className="text-gray-400">Track and manage your high-ticket brand deals.</p>
        </div>
        <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition">
          <Plus size={18} /> New Deal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="p-4" hover={false}>
          <p className="text-xs font-bold text-gray-500 uppercase mb-1">Pipeline Value</p>
          <p className="text-2xl font-bold">$24,500</p>
        </GlassCard>
        <GlassCard className="p-4" hover={false}>
          <p className="text-xs font-bold text-gray-500 uppercase mb-1">Active Deals</p>
          <p className="text-2xl font-bold">12</p>
        </GlassCard>
        <GlassCard className="p-4" hover={false}>
          <p className="text-xs font-bold text-gray-500 uppercase mb-1">Closed (30d)</p>
          <p className="text-2xl font-bold">$18,200</p>
        </GlassCard>
        <GlassCard className="p-4" hover={false}>
          <p className="text-xs font-bold text-gray-500 uppercase mb-1">Conversion Rate</p>
          <p className="text-2xl font-bold">68%</p>
        </GlassCard>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button className="px-4 py-2 bg-white/10 rounded-xl text-sm font-bold flex items-center gap-2">
          <Filter size={16} /> Filters
        </button>
        <button className="px-4 py-2 bg-white/5 rounded-xl text-sm text-gray-400 hover:bg-white/10 transition">
          All Stages
        </button>
        <button className="px-4 py-2 bg-white/5 rounded-xl text-sm text-gray-400 hover:bg-white/10 transition">
          This Month
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {deals.map((deal, i) => (
          <GlassCard key={i} className="p-5 border-white/5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className={`w-2 h-2 rounded-full ${deal.color}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{deal.status}</span>
            </div>
            <div>
              <h3 className="font-bold">{deal.company}</h3>
              <p className="text-sm text-gray-500">{deal.dealName}</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="font-bold text-lg">{formatCurrency(deal.amount)}</span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 transition">
                  <Mail size={16} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 transition">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
        <button className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-white/5 hover:border-white/10 transition-colors group h-full min-h-[180px]">
           <Plus size={32} className="text-gray-600 group-hover:text-gray-400 mb-2 transition-colors" />
           <p className="text-sm font-bold text-gray-600 group-hover:text-gray-400">Add Deal</p>
        </button>
      </div>
    </div>
  );
}
