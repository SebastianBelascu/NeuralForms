'use client';

import { motion } from 'framer-motion';

export function HomePageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.8)_0%,rgba(0,0,0,0)_100%)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-1/4 top-1/4 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-500/30 blur-[100px] aspect-square w-[300px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute left-1/4 bottom-1/4 translate-y-1/2 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[100px] aspect-square w-[600px]"
      />
    </div>
  );
}
