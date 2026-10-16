import React from 'react';
import { Language } from '../types';
import { Plus, MessageSquare, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenAddModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenAddModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
          <span>{lang === 'ur' ? 'اورا اے آئی اسٹوڈیو' : 'AuraAI Studio'}</span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#projects"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ur' ? 'پروجیکٹس' : 'Projects'}
          </a>
          <a
            href="#workflow"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ur' ? 'ورک فلو اور ٹولز' : 'AI Workflow'}
          </a>
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ur' ? 'سروسز' : 'Services'}
          </a>
          <a
            href="#contact"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ur' ? 'رابطہ کریں' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action cluster */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="زبان تبدیل کریں / Change Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ur' ? 'English' : 'اردو'}</span>
          </button>

          {/* Add Project Button */}
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-amber-400/20"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>{lang === 'ur' ? 'نیا پروجیکٹ' : 'Add Project'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
