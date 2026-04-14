'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Video, 
  HardDrive, 
  Users, 
  Settings, 
  LogOut,
  Zap,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Video, label: 'AI Repurposer', href: '/dashboard/repurpose' },
  { icon: HardDrive, label: 'Vault', href: '/dashboard/vault' },
  { icon: Users, label: 'Sponsor CRM', href: '/dashboard/crm' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/5 flex flex-col h-screen fixed left-0 top-0 bg-black/40 backdrop-blur-xl z-50">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Zap size={18} fill="white" />
          </div>
          <span className="font-bold tracking-tight">CREATOR ENGINE</span>
        </Link>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon size={20} className={isActive ? "text-purple-500" : "group-hover:text-purple-400"} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="premium-glass p-4 rounded-2xl border-purple-500/10">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Pro Plan</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full mb-2">
            <div className="bg-purple-600 h-full w-[75%] rounded-full" />
          </div>
          <p className="text-[11px] text-gray-500">75% of your AI tokens used</p>
        </div>

        <Link
          href="/auth/login"
          className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Log out</span>
        </Link>
      </div>
    </aside>
  );
};
