import React, { useState } from 'react';
import { Project, Language } from '../types';
import { X, Plus, Sparkles, Check, Image as ImageIcon } from 'lucide-react';

interface AddProjectModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onAddProject: (newProject: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  lang,
  onClose,
  onAddProject,
}) => {
  const [title, setTitle] = useState('');
  const [titleUrdu, setTitleUrdu] = useState('');
  const [client, setClient] = useState('');
  const [category, setCategory] = useState<'video' | 'visuals' | 'commercial' | 'social' | 'copywriting'>('video');
  const [description, setDescription] = useState('');
  const [descriptionUrdu, setDescriptionUrdu] = useState('');
  const [toolsInput, setToolsInput] = useState('Midjourney v6.1, Runway Gen-3, ElevenLabs');
  const [highlight, setHighlight] = useState('1.2M Views & Viral Reach');
  const [highlightUrdu, setHighlightUrdu] = useState('۱.۲ ملین وائرل ویوز');
  const [turnaround, setTurnaround] = useState('48 Hours');
  const [artworkType, setArtworkType] = useState<'perfume' | 'supercar' | 'fashion' | 'beverage' | 'cyberpunk' | 'concept'>('concept');
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [promptSnippet, setPromptSnippet] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() && !titleUrdu.trim()) return;

    const parsedTools = toolsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: title.trim() || titleUrdu.trim(),
      titleUrdu: titleUrdu.trim() || title.trim(),
      client: client.trim() || (lang === 'ur' ? 'انڈیپینڈنٹ برانڈ' : 'Independent Brand'),
      category,
      description: description.trim() || 'AI-generated commercial media asset engineered with cutting-edge generative pipelines.',
      descriptionUrdu: descriptionUrdu.trim() || 'جدید ترین جنریٹیو اے آئی کے ذریعے تیار کردہ کمرشل پروجیکٹ۔',
      tools: parsedTools.length > 0 ? parsedTools : ['Midjourney v6.1', 'Runway Gen-3'],
      metrics: {
        highlight: highlight.trim() || 'Commercial Master Asset',
        highlightUrdu: highlightUrdu.trim() || 'کمرشل کوالٹی پروڈکٹ',
        turnaround: turnaround.trim() || '24-48 Hours',
      },
      thumbnailUrl: customImageUrl.trim(),
      artworkType,
      promptSnippet: promptSnippet.trim() || 'Cinematic lighting, 8k ultra-detailed, anamorphic master render --ar 16:9',
      completionDate: 'Recently Added',
      featured: false,
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#090c13] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'ur' ? 'نیا اے آئی پروجیکٹ شامل کریں' : 'Add New AI Project'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'ur'
                  ? 'یہ پراجیکٹ فوری طور پر آپ کے پورٹ فولیو میں محفوظ اور ڈسپلے ہو جائے گا۔'
                  : 'Add your latest AI visual or video to showcase to prospective clients.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Title in English and Urdu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'ur' ? 'پروجیکٹ کا نام (انگریزی)' : 'Project Title (English)'} *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Lumina Aura: Luxury Watch Commercial"
                className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'ur' ? 'پروجیکٹ کا نام (اردو)' : 'Project Title (Urdu optional)'}
              </label>
              <input
                type="text"
                value={titleUrdu}
                onChange={(e) => setTitleUrdu(e.target.value)}
                placeholder="مثال: لگژری برانڈ کمرشل اشتہار"
                className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                dir="rtl"
              />
            </div>
          </div>

          {/* Client & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'ur' ? 'کلائنٹ یا کمپنی کا نام' : 'Client / Brand Name'}
              </label>
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g. Zenith Media / Global Brand"
                className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'ur' ? 'کیٹیگری' : 'Category'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="video">{lang === 'ur' ? 'اے آئی ویڈیو اور سینما' : 'AI Video & Cinema'}</option>
                <option value="commercial">{lang === 'ur' ? 'کمرشل برانڈ اشتہار' : 'Brand Commercial'}</option>
                <option value="visuals">{lang === 'ur' ? 'فوٹو ریئلسٹک ویژولز' : 'Photoreal Visuals'}</option>
                <option value="social">{lang === 'ur' ? 'سوشل وائرل ریلز' : 'Viral Reels & Social'}</option>
                <option value="copywriting">{lang === 'ur' ? 'پرامپٹ اور کمپین' : 'Campaign & Prompting'}</option>
              </select>
            </div>
          </div>

          {/* Artwork Style Preset or Custom Image URL */}
          <div className="space-y-2 pt-1">
            <label className="block text-xs font-medium text-slate-300">
              {lang === 'ur' ? 'ویژول اسٹائل تھیم منتخب کریں' : 'Choose Visual Art Style Theme'}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {(
                [
                  { key: 'perfume', label: 'Perfume / Gold' },
                  { key: 'supercar', label: 'Automotive' },
                  { key: 'fashion', label: 'Fashion Look' },
                  { key: 'beverage', label: 'Liquid Splash' },
                  { key: 'cyberpunk', label: 'Sci-Fi Mega' },
                  { key: 'concept', label: '3D Concept' },
                ] as const
              ).map((preset) => (
                <button
                  type="button"
                  key={preset.key}
                  onClick={() => setArtworkType(preset.key)}
                  className={`py-2 px-2 text-[11px] rounded-lg border font-medium transition-all ${
                    artworkType === preset.key
                      ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                      : 'border-white/10 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="pt-1">
              <label className="block text-xs font-medium text-slate-400 mb-1">
                {lang === 'ur' ? 'یا اپنا کسٹم امیج URL درج کریں (اختیاری)' : 'Or Custom Image URL (optional)'}
              </label>
              <input
                type="url"
                value={customImageUrl}
                onChange={(e) => setCustomImageUrl(e.target.value)}
                placeholder="https://... (direct image link)"
                className="w-full px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 text-xs transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {lang === 'ur' ? 'پراجیکٹ کی تفصیل' : 'Project Description'}
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain the client requirement, visual concept, and outcome..."
              className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Tools & Metric */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'ur' ? 'استعمال شدہ ٹولز (کوما سے الگ کریں)' : 'Tools Used (comma separated)'}
              </label>
              <input
                type="text"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                placeholder="Midjourney, Kling, Runway, ElevenLabs"
                className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'ur' ? 'اہم نتیجہ یا میٹرک (مثلاً: 2M Views)' : 'Highlight Metric (e.g. 2M Views)'}
              </label>
              <input
                type="text"
                value={highlight}
                onChange={(e) => setHighlight(e.target.value)}
                placeholder="2.4M Views & 40% Conversion"
                className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Prompt Snippet */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {lang === 'ur' ? 'اے آئی پرامپٹ ریسیپی (اختیاری)' : 'AI Prompt Recipe (optional)'}
            </label>
            <textarea
              rows={2}
              value={promptSnippet}
              onChange={(e) => setPromptSnippet(e.target.value)}
              placeholder="Cinematic commercial shot, dramatic lighting, 8k resolution..."
              className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-amber-200/90 font-mono text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              {lang === 'ur' ? 'منسوخ کریں' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md shadow-amber-400/20"
            >
              {lang === 'ur' ? 'پروجیکٹ شامل کریں' : 'Save & Publish Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
