import React, { useState } from 'react';
import { Project, ProjectCategory, Language } from '../types';
import { ProjectArtwork } from './ProjectArtwork';
import { Plus, Search, ExternalLink, Sparkles, Trash2 } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  lang: Language;
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  onDeleteProject: (projectId: string) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  lang,
  onSelectProject,
  onOpenAddModal,
  onDeleteProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ProjectCategory; labelEn: string; labelUr: string }[] = [
    { key: 'all', labelEn: 'All Works', labelUr: 'تمام کام' },
    { key: 'video', labelEn: 'AI Video & Cinema', labelUr: 'اے آئی ویڈیو اور سینما' },
    { key: 'commercial', labelEn: 'Brand Commercials', labelUr: 'کمرشل اشتہارات' },
    { key: 'visuals', labelEn: 'Photoreal Visuals', labelUr: 'فوٹو ریئل ویژولز' },
    { key: 'social', labelEn: 'Viral Reels & Social', labelUr: 'وائرل ریلز اور سوشل' },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.titleUrdu.includes(searchQuery) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              {lang === 'ur' ? 'منتخب شدہ پروجیکٹس اور کیس اسٹڈیز' : 'SELECTED PORTFOLIO & CASE STUDIES'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'ur' ? 'اے آئی کے ذریعے تخلیق کردہ پراجیکٹس' : 'High-Impact Generative AI Portfolio'}
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              {lang === 'ur'
                ? 'ہر پروجیکٹ ایک مخصوص کسٹمر نیڈ کے تحت جدید ترین ٹولز کی مدد سے تیار کیا گیا ہے۔ کلک کر کے مکمل تفصیلات دیکھیں۔'
                : 'Each case study represents a real commercial deliverable engineered with advanced prompting, motion generation, and multi-model workflows.'}
            </p>
          </div>

          {/* Quick Add Project Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm shadow-amber-400/20 whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'ur' ? 'نیا پراجیکٹ شامل کریں' : 'Add New Project'}</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Interactive Filter Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang === 'ur' ? cat.labelUr : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ur' ? 'ٹول یا نام سے سرچ کریں...' : 'Search by tool or name...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/80 border border-white/10 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid / Bento Box */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-white/10">
            <Sparkles className="w-8 h-8 text-amber-400/50 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white mb-1">
              {lang === 'ur' ? 'کوئی پروجیکٹ نہیں ملا' : 'No Projects Found'}
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
              {lang === 'ur'
                ? 'آپ کی تلاش کے مطابق کوئی پراجیکٹ موجود نہیں۔ اپنا نیا پراجیکٹ شامل کریں۔'
                : 'No projects match your current filter. You can add a new project anytime!'}
            </p>
            <button
              onClick={onOpenAddModal}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
            >
              {lang === 'ur' ? 'نیا پراجیکٹ ایڈ کریں' : 'Add Project Now'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const isLarge = project.featured && idx === 0;

              return (
                <div
                  key={project.id}
                  className={`group relative flex flex-col justify-between bg-slate-900/60 border border-white/10 hover:border-amber-400/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  <div>
                    {/* Visual Artwork Thumbnail */}
                    <div
                      onClick={() => onSelectProject(project)}
                      className="cursor-pointer relative overflow-hidden rounded-xl mb-4"
                    >
                      <ProjectArtwork
                        type={project.artworkType}
                        customUrl={project.thumbnailUrl}
                        title={project.title}
                        aspectRatio={isLarge ? '16:9' : '4:3'}
                        showPlayButton={project.category === 'video' || project.category === 'commercial' || project.category === 'social'}
                      />
                    </div>

                    {/* Zero-Pill Clean Metadata Header */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-amber-400/90 font-medium">
                          {project.client}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.completionDate}</span>
                      </div>

                      {/* Delete action if needed */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm(lang === 'ur' ? 'کیا آپ اس پروجیکٹ کو ڈیلیٹ کرنا چاہتے ہیں؟' : 'Delete this project?')) {
                            onDeleteProject(project.id);
                          }
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-red-400 rounded transition-opacity"
                        title={lang === 'ur' ? 'ڈیلیٹ کریں' : 'Delete project'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer leading-snug mb-2"
                    >
                      {lang === 'ur' ? project.titleUrdu : project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {lang === 'ur' ? project.descriptionUrdu : project.description}
                    </p>

                    {/* Tools Used (Clean unboxed inline text) */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mb-4">
                      <span className="text-slate-500 text-[11px]">
                        {lang === 'ur' ? 'ٹولز:' : 'Stack:'}
                      </span>
                      {project.tools.map((tool, tIdx) => (
                        <span key={tool} className="text-slate-300 text-[11px] font-mono">
                          {tool}
                          {tIdx < project.tools.length - 1 && <span className="text-slate-600 ml-1.5">/</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Metric & View Case Study Button */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-emerald-400 tabular-nums truncate">
                      {lang === 'ur' ? project.metrics.highlightUrdu : project.metrics.highlight}
                    </span>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>{lang === 'ur' ? 'تفصیلات دیکھیں' : 'View Details'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
