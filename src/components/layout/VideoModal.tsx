import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  lang: 'en' | 'ar';
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoUrl, lang, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 z-55 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-4xl w-full border border-slate-200 p-2 relative"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-blue-300 p-2 bg-transparent border-none cursor-pointer flex items-center gap-1 font-bold text-xs"
            >
              <X size={20} />
              <span>{lang === 'en' ? 'Close' : 'إغلاق'}</span>
            </button>

            {/* Aspect Ratio video container */}
            <div className="aspect-video w-full bg-black">
              <video
                key={videoUrl}
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
