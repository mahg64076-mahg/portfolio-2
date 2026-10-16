import React, { useState, useEffect } from 'react';
import { Project, Language } from './types';
import { INITIAL_PROJECTS } from './data/initialProjects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/AddProjectModal';
import { WorkflowSection } from './components/WorkflowSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('ur');
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('creator_ai_projects_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Error loading projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [prefilledTitle, setPrefilledTitle] = useState<string>('');

  // Persist projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('creator_ai_projects_v1', JSON.stringify(projects));
    } catch (e) {
      console.error('Error saving projects to localStorage', e);
    }
  }, [projects]);

  // Sync document direction and lang
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ur' ? 'en' : 'ur'));
  };

  const handleAddProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const handleInquireProject = (title: string) => {
    setPrefilledTitle(title);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200 ${
        lang === 'ur' ? 'font-urdu' : ''
      }`}
      dir={lang === 'ur' ? 'rtl' : 'ltr'}
    >
      {/* Top Navigation Bar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Split Screen Hero with KPI strip */}
        <Hero
          lang={lang}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onSelectSampleProject={() => setSelectedProject(projects[0] || null)}
        />

        {/* Bento Project Grid */}
        <ProjectGrid
          projects={projects}
          lang={lang}
          onSelectProject={(p) => setSelectedProject(p)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onDeleteProject={handleDeleteProject}
        />

        {/* AI Workflow & Services */}
        <WorkflowSection lang={lang} />

        {/* Client Contact & WhatsApp Inquiry */}
        <ContactSection
          lang={lang}
          prefilledProjectTitle={prefilledTitle}
          onClearPrefill={() => setPrefilledTitle('')}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Case Study / Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireProject}
      />

      {/* Add New Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        lang={lang}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
}
