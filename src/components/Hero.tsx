import React from 'react';
import { Language } from '../types';
import { ArrowRight, MessageCircle, Plus, Sparkles, Layers, Sliders, ShieldCheck } from 'lucide-react';
import { ProjectArtwork } from './ProjectArtwork';

interface HeroProps {
  lang: Language;
  onOpenAddModal: () => void;
  onSelectSampleProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenAddModal,
  onSelectSampleProject,
}) => {
  const [activeTab, setActiveTab] = React.useState<'reel' | 'prompt' | 'tools'>('reel');

  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker */}
            <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">
              {lang === 'ur'
                ? 'اے آئی کنٹینٹ کرئیٹر · سینیمیٹک ویژولز · پرامپٹ ڈائریکٹر'
                : 'AI CONTENT CREATOR · CINEMATIC VISUALS · PROMPT DIRECTOR'}
            </p>

            {/* Headline with balance constraint */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ur' ? (
                <>
                  برانڈز کے لیے <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">عالمی معیار کا اے آئی مواد</span> اور وائرل ویڈیوز
                </>
              ) : (
                <>
                  Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Studio-Grade AI Commercials</span> & Photorealistic Visuals
                </>
              )}
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {lang === 'ur'
                ? 'میں جدید جنریٹیو اے آئی ماڈلز (Midjourney, Runway, Kling, ElevenLabs) کے ذریعے برانڈز، کمپنیوں اور کریئیٹرز کے لیے فوٹو ریئلسٹک پروجیکٹس، ہائی کنورٹنگ کمرشل ویڈیوز اور وائرل ریلز تخلیق کرتا ہوں۔'
                : 'I turn concepts into ultra-high-definition commercial video campaigns, photorealistic product imagery, virtual influencer lookbooks, and viral short-form reels for global brands.'}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary Contact CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-amber-400/20"
              >
                <span>{lang === 'ur' ? 'پروجیکٹ پر بات کریں' : 'Start a Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Add Project CTA */}
              <button
                onClick={onOpenAddModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 rounded-lg transition-colors whitespace-nowrap"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>{lang === 'ur' ? 'نیا پروجیکٹ ایڈ کریں' : 'Add Your Project'}</span>
              </button>

              {/* WhatsApp Quick Connect */}
              <a
                href="https://wa.me/?text=Hello!%20I%20viewed%20your%20AI%20Portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/30 border border-emerald-500/20 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ur' ? 'واٹس ایپ رابطہ' : 'WhatsApp'}</span>
              </a>
            </div>

            {/* Quiet trust indicator */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{lang === 'ur' ? '100% کمرشل کاپی رائٹ کلیئرڈ' : '100% Commercial Rights Granted'}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'ur' ? '4K & 8K ایکسپورٹ' : '4K / 8K Master Deliverables'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'ur' ? '24 سے 48 گھنٹے ڈیلیوری' : '24-48h Fast Turnaround'}</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container at Matching Height */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between bg-slate-900/60 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl relative overflow-hidden group">
              {/* Card top toolbar */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/[0.08] text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'ur' ? 'فیچرڈ شوکیس پروجیکٹ' : 'Featured Commercial Showcase'}</span>
                </span>
                
                {/* Segmented viewer tab */}
                <div className="flex items-center p-0.5 bg-black/40 rounded-lg border border-white/10">
                  <button
                    onClick={() => setActiveTab('reel')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeTab === 'reel' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang === 'ur' ? 'ویڈیو ریئل' : 'Reel'}
                  </button>
                  <button
                    onClick={() => setActiveTab('prompt')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeTab === 'prompt' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang === 'ur' ? 'پرامپٹ' : 'Prompt'}
                  </button>
                </div>
              </div>

              {/* Main Visual Display */}
              <div className="my-3 relative">
                {activeTab === 'reel' ? (
                  <div
                    onClick={onSelectSampleProject}
                    className="cursor-pointer"
                  >
                    <ProjectArtwork
                      type="perfume"
                      title="Lumina Noir"
                      aspectRatio="16:9"
                      showPlayButton={true}
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-[#06080d] p-4 rounded-xl border border-white/10 flex flex-col justify-between text-xs font-mono text-slate-300">
                    <div>
                      <div className="text-amber-400 text-[11px] mb-1.5 font-sans font-semibold">
                        {lang === 'ur' ? '// انجنیئرڈ پرامپٹ اور پیرامیٹرز' : '// Prompt Architecture & Parameters'}
                      </div>
                      <p className="text-slate-300 leading-relaxed font-mono text-[11px] bg-black/50 p-2.5 rounded border border-white/5">
                        &quot;Cinematic commercial shot of luxury faceted obsidian perfume bottle on wet black volcanic slate, micro gold dust suspended in soft amber rim light, anamorphic bokeh, 8k photo realism --ar 16:9 --style raw&quot;
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-sans pt-2 border-t border-white/5">
                      <span>Model: Midjourney v6.1 + Kling Motion</span>
                      <span>Render: 8K Octane AI</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Project Info Bar */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white">
                    {lang === 'ur' ? 'لومینا نوائر: لگژری پرفیوم ایڈ' : 'Lumina Noir: Luxury Perfume Ad'}
                  </h4>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] mt-0.5">
                    <span>Maison De L&apos;Ombre</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">3.4M Views</span>
                  </div>
                </div>

                <button
                  onClick={onSelectSampleProject}
                  className="px-3 py-1.5 text-[11px] font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                >
                  {lang === 'ur' ? 'کیس اسٹڈی دیکھیں' : 'View Case Study'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip in a row below the hero split (as mandated by Section 2.B) */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
              180<span className="text-amber-400">+</span>
            </div>
            <p className="text-xs text-slate-400">
              {lang === 'ur' ? 'کامیاب اے آئی پروجیکٹس' : 'Delivered AI Projects'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
              14M<span className="text-amber-400">+</span>
            </div>
            <p className="text-xs text-slate-400">
              {lang === 'ur' ? 'وائرل سوشل میڈیا ویوز' : 'Organic Video Views'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
              24<span className="text-amber-400">-</span>48h
            </div>
            <p className="text-xs text-slate-400">
              {lang === 'ur' ? 'تیز رفتار ڈلیوری کا وقت' : 'Average Delivery Time'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
              99.4<span className="text-amber-400">%</span>
            </div>
            <p className="text-xs text-slate-400">
              {lang === 'ur' ? 'کلائنٹ اطمینان کی شرح' : 'Client Satisfaction'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
