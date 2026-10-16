import React, { useState, useEffect } from 'react';
import { Language, ContactFormData } from '../types';
import { MessageCircle, Mail, Send, Check, Copy, Phone, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  prefilledProjectTitle?: string;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledProjectTitle,
  onClearPrefill,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    clientName: '',
    email: '',
    whatsapp: '',
    projectType: 'AI Commercial Video',
    budget: '$1,000 - $2,500',
    timeline: 'Standard (3-5 Days)',
    message: '',
  });

  const [whatsappNumber, setWhatsappNumber] = useState(() => {
    return localStorage.getItem('creator_whatsapp') || '+923001234567';
  });
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const creatorEmail = 'mahg64076@gmail.com';

  useEffect(() => {
    if (prefilledProjectTitle) {
      setFormData((prev) => ({
        ...prev,
        message:
          lang === 'ur'
            ? `سلام! میں آپ کے پروجیکٹ "${prefilledProjectTitle}" کے حوالے سے بات کرنا چاہتا ہوں اور اپنے برانڈ کے لیے اس طرح کا کام کروانا چاہتا ہوں۔`
            : `Hello! I saw your project "${prefilledProjectTitle}" in your AI portfolio and would like to get a quotation for a similar deliverable.`,
      }));
    }
  }, [prefilledProjectTitle, lang]);

  const handlePhoneSave = (newNum: string) => {
    setWhatsappNumber(newNum);
    localStorage.setItem('creator_whatsapp', newNum);
    setIsEditingPhone(false);
  };

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry from AI Portfolio*\n` +
      `*Client:* ${formData.clientName || 'Prospective Client'}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Client Contact:* ${formData.email || formData.whatsapp || 'N/A'}\n` +
      `*Details:* ${formData.message || 'I would like to discuss an AI content creation project.'}`
    );
    return `https://wa.me/${cleanPhone || '923001234567'}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Open WhatsApp directly or mailto
    const waUrl = generateWhatsAppUrl();
    window.open(waUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(creatorEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            {lang === 'ur' ? 'کلائنٹ رابطہ اور پراجیکٹ انکوائری' : 'START YOUR PROJECT'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'ur' ? 'اپنے برانڈ کے لیے شاندار اے آئی مواد بنوائیں' : 'Let\'s Create Something Extraordinary'}
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            {lang === 'ur'
              ? 'اپنے مطلوبہ پروجیکٹ کی تفصیلات بھیجیں یا براہ راست واٹس ایپ پر چیٹ کریں۔ 24 گھنٹوں میں تفصیلی جواب اور پلان دیا جائے گا۔'
              : 'Share your brief below for an instant project review, or connect directly on WhatsApp for same-day response.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct WhatsApp & Creator Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {lang === 'ur' ? 'سب سے تیز رابطہ (فوری جواب)' : 'Fastest Response · Live Chat'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'ur' ? 'براہِ راست واٹس ایپ چیٹ' : 'Direct WhatsApp Chat'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {lang === 'ur'
                  ? 'کلائنٹس عام طور پر فوری ریٹس، ویڈیوز کے نمونے اور پروجیکٹ کی تفصیلات براہ راست واٹس ایپ پر طے کرتے ہیں۔'
                  : 'Get immediate pricing quotes, discuss concept references, and review video drafts in real-time.'}
              </p>

              {/* Creator WhatsApp Number Editor */}
              <div className="mb-6 p-3 bg-black/40 rounded-xl border border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>{lang === 'ur' ? 'واٹس ایپ نمبر:' : 'WhatsApp Number:'}</span>
                  <button
                    type="button"
                    onClick={() => setIsEditingPhone(!isEditingPhone)}
                    className="text-amber-400 hover:underline text-[11px]"
                  >
                    {isEditingPhone ? (lang === 'ur' ? 'مکمل' : 'Done') : (lang === 'ur' ? 'نمبر تبدیل کریں' : 'Edit Number')}
                  </button>
                </div>
                {isEditingPhone ? (
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      defaultValue={whatsappNumber}
                      onBlur={(e) => handlePhoneSave(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handlePhoneSave((e.target as HTMLInputElement).value);
                      }}
                      className="w-full px-2 py-1 bg-slate-900 border border-amber-400/50 rounded text-white text-xs"
                      autoFocus
                    />
                  </div>
                ) : (
                  <div className="text-white font-mono font-medium">{whatsappNumber}</div>
                )}
              </div>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-lg shadow-emerald-400/20 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>{lang === 'ur' ? 'ابھی واٹس ایپ پر میسج بھیجیں' : 'Chat on WhatsApp Now'}</span>
              </a>
            </div>

            {/* Email & Details Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold text-white">
                    {lang === 'ur' ? 'آفیشل ای میل ایڈریس' : 'Direct Email'}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? (lang === 'ur' ? 'کاپی ہوگیا!' : 'Copied!') : (lang === 'ur' ? 'ای میل کاپی کریں' : 'Copy')}</span>
                </button>
              </div>

              <div className="text-sm font-mono text-slate-200 bg-black/40 p-3 rounded-lg border border-white/5">
                {creatorEmail}
              </div>

              <div className="pt-2 text-xs text-slate-400 space-y-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'ur' ? 'جواب دینے کا اوسط وقت: 2 گھنٹے' : 'Average Response Time: Under 2 Hours'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'ur' ? 'این ڈی اے (NDA) اور رازداری کی مکمل گارنٹی' : 'Confidentiality & Non-Disclosure by default'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-1">
                {lang === 'ur' ? 'پروجیکٹ کی تفصیلات ارسال کریں' : 'Submit Project Brief'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {lang === 'ur'
                  ? 'فارم پُر کریں اور اپنے پراجیکٹ کا براہ راست کوٹیشن حاصل کریں۔'
                  : 'Fill in your project requirements for a tailored timeline and proposal.'}
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-semibold text-emerald-200">
                      {lang === 'ur' ? 'شکریہ! آپ کا پیغام بھیج دیا گیا ہے' : 'Inquiry Ready!'}
                    </strong>
                    <span>
                      {lang === 'ur'
                        ? 'آپ کا پیغام واٹس ایپ ونڈو میں اوپن ہو چکا ہے تاکہ آپ فوری بات چیت کر سکیں۔'
                        : 'WhatsApp was opened with your pre-filled inquiry. You will receive a direct reply shortly.'}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'ur' ? 'آپ کا نام' : 'Your Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. John Doe / Tariq"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'ur' ? 'ای میل یا واٹس ایپ نمبر' : 'Email or WhatsApp'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@brand.com or +1..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'ur' ? 'پروجیکٹ کی قسم' : 'Project Type'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs transition-colors"
                    >
                      <option value="AI Commercial Video">{lang === 'ur' ? 'کمرشل ویڈیو اشتہار' : 'AI Brand Video'}</option>
                      <option value="Product Photography">{lang === 'ur' ? 'پروڈکٹ فوٹو شوٹ' : 'Product Visuals'}</option>
                      <option value="Viral Reels Series">{lang === 'ur' ? 'وائرل ریلز سیریز' : 'Viral Reels Series'}</option>
                      <option value="Virtual AI Model">{lang === 'ur' ? 'ورچوئل برانڈ ماڈل' : 'Virtual AI Model'}</option>
                      <option value="Full Campaign">{lang === 'ur' ? 'مکمل برانڈ کمپین' : 'Full Brand Campaign'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'ur' ? 'تخمینی بجٹ' : 'Target Budget'}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs transition-colors"
                    >
                      <option value="Under $500">Under $500 (Basic Reel)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (Commercial)</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000 (Multi-Video)</option>
                      <option value="$3,000+">$3,000+ (Full Campaign)</option>
                      <option value="Custom / In PKR">Custom / In PKR</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'ur' ? 'ڈیلیوری کا وقت' : 'Timeline'}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs transition-colors"
                    >
                      <option value="Rush 24-48 Hours">Rush (24-48 Hours)</option>
                      <option value="Standard 3-5 Days">Standard (3-5 Days)</option>
                      <option value="1-2 Weeks">1-2 Weeks</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-slate-300">
                      {lang === 'ur' ? 'پروجیکٹ کی تفصیلات اور وژن' : 'Project Details & Vision'} *
                    </label>
                    {prefilledProjectTitle && (
                      <button
                        type="button"
                        onClick={onClearPrefill}
                        className="text-[11px] text-amber-400 hover:underline"
                      >
                        {lang === 'ur' ? 'ری سیٹ کریں' : 'Clear Prefill'}
                      </button>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ur'
                        ? 'اپنے برانڈ، مطلوبہ ویڈیو کی تفصیل یا کسی پروجیکٹ کے ریفرنس کے بارے میں بتائیں...'
                        : 'Describe your product, target audience, reference style, or questions...'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400">
                    {lang === 'ur'
                      ? 'سبمٹ کرنے پر فوری واٹس ایپ اور ای میل میسج تیار ہوگا'
                      : 'Submitting connects you directly with the creator with pre-filled context.'}
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-lg shadow-amber-400/20 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'ur' ? 'انکوائری بھیجیں' : 'Send Project Inquiry'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
