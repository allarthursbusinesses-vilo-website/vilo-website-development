import { Sidebar } from '@/components/layout/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Sidebar />
      <main className="ml-64 min-h-screen relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
