'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => (
  <motion.div 
    whileHover={hover ? { y: -5, scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)" } : {}}
    transition={{ type: "spring", stiffness: 300 }}
    className={cn(
      "premium-glass rounded-3xl p-6 relative overflow-hidden transition-colors",
      className
    )}
  >
    {children}
  </motion.div>
);
