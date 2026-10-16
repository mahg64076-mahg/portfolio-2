import React from 'react';
import { Language } from '../types';
import { ArrowUp, Sparkles, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05070a] text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{lang === 'ur' ? 'اورا اے آئی اسٹوڈیو' : 'AuraAI Studio'}</span>
            <span className="text-slate-500 font-normal text-xs ml-2">
              {lang === 'ur' ? 'اے آئی کنٹینٹ کرئیٹر پورٹ فولیو' : 'AI Content Creation & Production'}
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              {lang === 'ur' ? 'پروجیکٹس' : 'Portfolio'}
            </a>
            <a href="#workflow" className="hover:text-amber-400 transition-colors">
              {lang === 'ur' ? 'ورک فلو' : 'Pipeline'}
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              {lang === 'ur' ? 'سروسز' : 'Services'}
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              {lang === 'ur' ? 'رابطہ' : 'Contact'}
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <span>{lang === 'ur' ? 'اوپر جائیں' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AuraAI Studio. {lang === 'ur' ? 'تمام حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <span>{lang === 'ur' ? 'کمرشل اے آئی پروڈکشن' : 'Commercial Generative AI Production'}</span>
            <span aria-hidden="true">·</span>
            <span>4K / 8K Master Deliverables</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
