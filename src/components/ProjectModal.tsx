import React, { useEffect, useState } from 'react';
import { Project, Language } from '../types';
import { ProjectArtwork } from './ProjectArtwork';
import { X, MessageSquare, Sparkles, Copy, Check, Clock, TrendingUp, Cpu, MessageCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onInquire,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'prompt' | 'workflow'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(project.promptSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello! I saw your project "${project.title}" in your AI portfolio. I'd like to get a quote for a similar commercial project.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#090c13] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {project.category.toUpperCase()}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300 font-medium">{project.client}</span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-400">{project.completionDate}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="بند کریں / Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Media Showcase */}
          <div className="w-full">
            <ProjectArtwork
              type={project.artworkType}
              customUrl={project.thumbnailUrl}
              title={project.title}
              aspectRatio="16:9"
              showPlayButton={project.category === 'video' || project.category === 'commercial' || project.category === 'social'}
            />
          </div>

          {/* Title & Key Highlight */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {lang === 'ur' ? project.titleUrdu : project.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {project.client} · {project.completionDate}
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
              <span className="text-xs text-slate-400 block">
                {lang === 'ur' ? 'کلیدی نتیجہ' : 'Key Performance'}
              </span>
              <span className="text-sm sm:text-base font-bold text-emerald-400 tabular-nums">
                {lang === 'ur' ? project.metrics.highlightUrdu : project.metrics.highlight}
              </span>
            </div>
          </div>

          {/* Tabs: Overview, Prompt Engineering, Workflow */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'overview'
                  ? 'bg-amber-400 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'ur' ? 'کیس اسٹڈی تفصیل' : 'Project Overview'}
            </button>
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'prompt'
                  ? 'bg-amber-400 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ur' ? 'پرامپٹ ریسیپی' : 'Prompt Recipe'}</span>
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'workflow'
                  ? 'bg-amber-400 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'ur' ? 'ٹولز اور طریقہ کار' : 'Tools & Pipeline'}</span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {lang === 'ur' ? project.descriptionUrdu : project.description}
              </p>

              {/* Client Feedback Quote */}
              {project.clientFeedback && (
                <div className="p-4 bg-slate-900/80 border border-white/10 rounded-xl">
                  <p className="text-xs sm:text-sm text-slate-200 italic mb-2">
                    &quot;{lang === 'ur' ? project.clientFeedback.quoteUrdu : project.clientFeedback.quote}&quot;
                  </p>
                  <div className="text-xs text-amber-400 font-semibold">
                    {project.clientFeedback.clientName}
                    <span className="text-slate-400 font-normal"> · {project.clientFeedback.clientCompany}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{lang === 'ur' ? 'اصل اے آئی پرامپٹ سٹرکچر' : 'Original Generative Prompt & Tokens'}</span>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-amber-400 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-md transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (lang === 'ur' ? 'کاپی ہوگیا!' : 'Copied!') : (lang === 'ur' ? 'پرامپٹ کاپی کریں' : 'Copy Prompt')}</span>
                </button>
              </div>

              <div className="p-4 bg-black/60 border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-amber-200/90 leading-relaxed overflow-x-auto">
                {project.promptSnippet}
              </div>

              <p className="text-xs text-slate-400">
                {lang === 'ur'
                  ? 'یہ پرامپٹ لائٹنگ، کیمرہ فوکل لینتھ، شیڈو اور رینڈرنگ ریشو کو کنٹرول کرنے کے لیے تیار کیا گیا ہے۔'
                  : 'Engineered with strict negative constraints, camera focal parameters, and lighting direction to achieve commercial-level consistency.'}
              </p>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'ur' ? 'استعمال شدہ اے آئی ماڈلز' : 'AI Models & Engines'}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map((t) => (
                      <span key={t} className="text-xs font-mono text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'ur' ? 'مکمل ہونے کی مدت' : 'Turnaround Speed'}
                  </span>
                  <div className="text-sm font-semibold text-white mt-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{project.metrics.turnaround}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs: Inquire about similar project */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              {lang === 'ur'
                ? 'اپنے برانڈ یا کاروبار کے لیے ایسا ہی پروجیکٹ بنوانا چاہتے ہیں؟'
                : 'Need a custom AI campaign or visual series for your brand?'}
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/30 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ur' ? 'واٹس ایپ پر پوچھیں' : 'Chat on WhatsApp'}</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shadow-md shadow-amber-400/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'ur' ? 'کوٹیشن حاصل کریں' : 'Request Quotation'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
