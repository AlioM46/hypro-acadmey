import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  imageSrc: string | null;
  title: string | null;
  desc: string | null;
  lang: 'en' | 'ar';
  onClose: () => void;
}

export default function Lightbox({ imageSrc, title, desc, lang, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full border border-slate-200 p-6 relative flex flex-col items-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-800 hover:text-brand-blue p-2 bg-transparent border-none cursor-pointer"
            >
              <X size={24} />
            </button>
            <img
              src={imageSrc}
              alt="Accreditation Certificate"
              className="max-h-[70vh] w-auto object-contain border border-slate-100"
            />
            <div className="mt-4 text-center font-sans">
              <h5 className="font-extrabold text-sm text-slate-900">
                {title || (lang === 'en' ? 'Official Institutional Credential' : 'وثيقة الاعتماد المؤسساتي الرسمية')}
              </h5>
              <p className="text-slate-500 text-xs mt-1">
                {desc || (lang === 'en' 
                  ? 'Verified by TVET authorities, crafts syndicates, and corporate training divisions.' 
                  : 'معتمدة وموثقة من قبل هيئات التدريب المهني، نقابات الحرفيين، ووكالات الصيانة.')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
