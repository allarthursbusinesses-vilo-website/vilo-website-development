'use client';
import { GlassCard } from '@/components/ui/GlassCard';
import { Search, FolderPlus, File, Image as ImageIcon, Video, MoreVertical, Download } from 'lucide-react';

const files = [
  { name: 'Brand Kit 2024.pdf', type: 'PDF', size: '12.4 MB', date: '2 days ago', icon: File },
  { name: 'Profile Headshot.png', type: 'Image', size: '2.1 MB', date: '5 days ago', icon: ImageIcon },
  { name: 'Intro_Template_Final.mp4', type: 'Video', size: '156.0 MB', date: '1 week ago', icon: Video },
  { name: 'Content Ideas.docx', type: 'Doc', size: '45 KB', date: '2 weeks ago', icon: File },
];

export default function VaultPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Vault</h1>
          <p className="text-gray-400">Manage all your brand assets in one high-speed cloud.</p>
        </div>
        <div className="flex gap-4">
          <button className="premium-glass px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/5 transition">
            <FolderPlus size={18} /> New Folder
          </button>
          <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition">
             Upload File
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input 
          type="text" 
          placeholder="Search files, folders, or assets..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 focus:outline-none focus:ring-2 ring-purple-500/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Brand Assets', 'Social Clips', 'Drafts', 'Client Work'].map((folder) => (
          <GlassCard key={folder} className="p-4 flex items-center gap-4 cursor-pointer hover:border-purple-500/40">
             <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center text-purple-400">
                <FolderPlus size={24} />
             </div>
             <div>
                <p className="font-bold text-sm">{folder}</p>
                <p className="text-xs text-gray-500">12 items</p>
             </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-0 overflow-hidden" hover={false}>
        <table className="w-full text-left">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase font-bold border-b border-white/5">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Size</th>
              <th className="px-6 py-4">Modified</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {files.map((file, i) => (
              <tr key={i} className="hover:bg-white/5 transition group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <file.icon size={18} className="text-gray-400" />
                    <span className="font-medium">{file.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{file.size}</td>
                <td className="px-6 py-4 text-gray-500">{file.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition">
                      <Download size={16} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </div>
  );
}
