import React from 'react';
import { Language } from '../types';
import { Film, Sparkles, Layers, Sliders, CheckCircle2, Video, Camera, Users, Zap, Shield } from 'lucide-react';

interface WorkflowSectionProps {
  lang: Language;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ lang }) => {
  const steps = [
    {
      num: '01',
      titleEn: 'Creative Direction & Prompt Architecture',
      titleUr: 'تخلیقی سمت اور پرامپٹ سٹرکچر',
      descEn: 'Deconstructing brand goals into camera angles, lens parameters, lighting moods, and multi-layered token prompts.',
      descUr: 'برانڈ کے وژن کو سینیمیٹک کیمرہ اینگلز، سٹوڈیو لائٹنگ، اور جامع اے آئی پرامپٹس میں ڈھالنا۔',
      tools: 'Midjourney v6.1 · Claude 3.5 · Flux.1',
    },
    {
      num: '02',
      titleEn: 'Motion Generation & Physics Synthesis',
      titleUr: 'کیمرہ موشن اور ویڈیو اینیمیشن',
      descEn: 'Animating key visual frames with camera dolly, panning, dynamic physics, liquid splash, and speed ramps.',
      descUr: 'کی فریمز میں حقیقت پسندانہ کیمرہ موومنٹ، فلوئڈ ڈائنامکس، اور ہائی ڈیفینیشن ویڈیو جنریشن۔',
      tools: 'Runway Gen-3 Alpha · Kling AI · Luma',
    },
    {
      num: '03',
      titleEn: 'AI Voice, Soundscapes & Audio Scoring',
      titleUr: 'اے آئی آواز، ساؤنڈ ایفیکٹس اور میوزک',
      descEn: 'Layering hyper-realistic multi-lingual AI voiceovers, atmospheric sound design, foley effects, and tailored scores.',
      descUr: 'قدرتی انسانی لہجے میں وائس اوور، بیک گراؤنڈ سینیمیٹک میوزک اور ساؤنڈ ڈیزائن۔',
      tools: 'ElevenLabs Turbo · Suno AI · Udio',
    },
    {
      num: '04',
      titleEn: '4K AI Upscaling & Commercial Mastering',
      titleUr: '4K الٹرا ایچ ڈی اپ اسکیلنگ اور ایکسپورٹ',
      descEn: 'Cleaning artifacts, upscaling to pristine 4K/8K resolution, color grading, and delivering ready-to-air master video files.',
      descUr: 'ویڈیو کی کوالٹی 4K اور 8K میں اپ اسکیل کرنا، کلر گریڈنگ، اور اشتہار کے لیے فائنل فائلز۔',
      tools: 'Topaz Video AI · Magnific AI · DaVinci',
    },
  ];

  const services = [
    {
      icon: Film,
      titleEn: 'AI Brand Video Commercials',
      titleUr: 'اے آئی برانڈ کمرشل ویڈیوز',
      descEn: 'Broadcast-quality ads that replace $30k+ physical production sets with cutting-edge generative video pipelines.',
      descUr: 'بڑے سٹوڈیو بجٹس کے بغیر ٹی وی اور سوشل میڈیا کے لیے اعلیٰ معیار کے ویڈیو اشتہارات۔',
    },
    {
      icon: Camera,
      titleEn: 'Virtual Product Photography',
      titleUr: 'ورچوئل پروڈکٹ فوٹوگرافی',
      descEn: 'Studio-grade e-commerce & social visuals for perfumes, electronics, fashion, and beverages in any imaginary setting.',
      descUr: 'پرفیوم، بیوریجز، گھڑیاں اور الیکٹرانکس کی سٹوڈیو کوالٹی فوٹوگرافی بغیر کسی مہنگے کیمرہ سیٹ اپ کے۔',
    },
    {
      icon: Users,
      titleEn: 'AI Virtual Brand Ambassadors',
      titleUr: 'ورچوئل ماڈلز اور انفلوئنسرز',
      descEn: 'Persistent, consistent digital human models tailored to your brand identity for unlimited campaigns.',
      descUr: 'آپ کے برانڈ کے لیے مستقل چہرے والا ڈیجیٹل ماڈل جو ہر نئے سیزن اور لباس کی تشہیر کر سکے۔',
    },
    {
      icon: Zap,
      titleEn: 'Viral Short-Form Reels & TikToks',
      titleUr: 'وائرل ریلز اور ٹک ٹاک ویڈیوز',
      descEn: 'High-retention 9:16 videos with magnetic visual hooks designed to drive massive organic reach and clicks.',
      descUr: 'سوشل میڈیا پر تیزی سے وائرل ہونے والے ہکس، اٹریکٹیو ویژولز اور اینیمیٹڈ اسٹوری ٹیلنگ۔',
    },
  ];

  return (
    <section id="workflow" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            {lang === 'ur' ? 'ورک فلو اور صلاحیتیں' : 'END-TO-END CREATIVE PIPELINE'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'ur'
              ? 'کس طرح ایک خیال سے شاندار اے آئی ویڈیو بنتی ہے'
              : 'How I Engineer High-Impact AI Content'}
            </h2>
          <p className="text-sm text-slate-400 mt-3">
            {lang === 'ur'
              ? 'ہر کمرشل اور ویژول مرحلہ وار سخت کوالٹی کنٹرول کے ساتھ تیار کیا جاتا ہے تاکہ آپ کے برانڈ کو معیاری نتائج ملیں۔'
              : 'Combining the world’s leading generative engines with meticulous art direction for commercial-ready production.'}
          </p>
        </div>

        {/* 4 Pipeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-900/50 border border-white/10 hover:border-amber-400/30 rounded-2xl p-6 relative group transition-all duration-300"
            >
              <div className="text-2xl font-black text-amber-400/40 group-hover:text-amber-400 transition-colors font-mono mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {lang === 'ur' ? step.titleUr : step.titleEn}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {lang === 'ur' ? step.descUr : step.descEn}
              </p>
              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                {step.tools}
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services" className="pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
                {lang === 'ur' ? 'کلائنٹس کے لیے سروسز' : 'WHAT I OFFER CLIENTS'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {lang === 'ur' ? 'برانڈز اور کلائنٹس کے لیے خصوصی خدمات' : 'Specialized Production Services'}
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>{lang === 'ur' ? 'اپنی ضرورت بتائیں اور کوٹیشن حاصل کریں' : 'Request Pricing & Timeline'}</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-white/10 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {lang === 'ur' ? srv.titleUr : srv.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ur' ? srv.descUr : srv.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
