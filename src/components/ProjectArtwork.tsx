import React from 'react';
import { Sparkles, Film, Play, Camera, Layers, Box } from 'lucide-react';

interface ProjectArtworkProps {
  type: 'perfume' | 'supercar' | 'fashion' | 'beverage' | 'cyberpunk' | 'concept';
  customUrl?: string;
  title: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  showPlayButton?: boolean;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({
  type,
  customUrl,
  title,
  aspectRatio = '4:3',
  showPlayButton = false,
}) => {
  const [imgError, setImgError] = React.useState(false);

  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-video'
      : aspectRatio === '1:1'
      ? 'aspect-square'
      : 'aspect-[4/3]';

  if (customUrl && !imgError) {
    return (
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-slate-900 rounded-xl group`}>
        <img
          src={customUrl}
          alt={title}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>
    );
  }

  // Domain-crafted procedural visual art panels
  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-[#0b0e14] border border-white/10 group select-none`}
    >
      {/* Background gradients based on project type */}
      {type === 'perfume' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/25 via-[#0e1017] to-[#06070a]">
          {/* Obsidian stone pedestal & glowing crystal perfume */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-3/5 h-3/5 text-amber-400/90 drop-shadow-[0_0_35px_rgba(245,158,11,0.45)] transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Flacon Cap */}
              <rect x="80" y="20" width="40" height="25" rx="3" fill="#d97706" />
              <rect x="75" y="45" width="50" height="12" rx="2" fill="#78350f" />
              {/* Bottle Neck */}
              <rect x="88" y="57" width="24" height="15" fill="#f59e0b" fillOpacity="0.8" />
              {/* Faceted Glass Body */}
              <polygon points="50,72 150,72 170,200 30,200" fill="url(#perfumeGrad)" stroke="#f59e0b" strokeWidth="1.5" />
              {/* Interior Liquid Amber */}
              <polygon points="58,95 142,95 158,190 42,190" fill="#f59e0b" fillOpacity="0.45" />
              {/* Facet Refraction lines */}
              <line x1="100" y1="72" x2="100" y2="200" stroke="#fde68a" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="72" x2="100" y2="140" stroke="#fde68a" strokeWidth="1" strokeOpacity="0.6" />
              <line x1="150" y1="72" x2="100" y2="140" stroke="#fde68a" strokeWidth="1" strokeOpacity="0.6" />
              {/* Gold Dust Particles */}
              <circle cx="90" cy="120" r="2" fill="#fef08a" />
              <circle cx="115" cy="140" r="2.5" fill="#fef08a" />
              <circle cx="78" cy="160" r="1.5" fill="#fef08a" />
              <circle cx="125" cy="105" r="1.8" fill="#fef08a" />
              <defs>
                <linearGradient id="perfumeGrad" x1="100" y1="72" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1e1b18" />
                  <stop offset="0.6" stopColor="#451a03" />
                  <stop offset="1" stopColor="#0a0a0c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Subtle floor reflection */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 h-3 bg-amber-500/20 blur-md rounded-full" />
        </div>
      )}

      {type === 'supercar' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/25 via-[#0a101d] to-[#04070e]">
          {/* Aerodynamic Hypercar silhouette and laser headlights */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-4/5 h-4/5 text-cyan-400 drop-shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 260 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Car roof and cockpit canopy */}
              <path
                d="M 60 100 Q 95 40 160 42 Q 195 50 220 95 Z"
                fill="url(#cockpitGrad)"
                stroke="#06b6d4"
                strokeWidth="1.2"
              />
              {/* Sleek lower body */}
              <path
                d="M 25 105 Q 40 85 85 90 L 195 90 Q 235 95 245 110 L 250 120 L 20 120 Z"
                fill="#0f172a"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              {/* Headlight beam lines */}
              <polygon points="230,105 255,108 260,118 240,115" fill="#38bdf8" fillOpacity="0.9" />
              <line x1="245" y1="108" x2="260" y2="108" stroke="#e0f2fe" strokeWidth="2" />
              {/* Neon Underglow light */}
              <line x1="50" y1="126" x2="220" y2="126" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
              {/* Speed stream lines */}
              <line x1="10" y1="60" x2="50" y2="60" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="6 8" strokeOpacity="0.5" />
              <line x1="20" y1="75" x2="70" y2="75" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="10 12" strokeOpacity="0.4" />
              <defs>
                <linearGradient id="cockpitGrad" x1="140" y1="40" x2="140" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#082f49" />
                  <stop offset="1" stopColor="#020617" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-3 bg-cyan-400/25 blur-md rounded-full" />
        </div>
      )}

      {type === 'fashion' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-[#110e19] to-[#08060c]">
          {/* Fashion silhouette & editorial lighting */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-3/5 h-3/5 text-fuchsia-400 drop-shadow-[0_0_35px_rgba(217,70,239,0.4)] transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Editorial Head Profile */}
              <circle cx="100" cy="65" r="32" fill="#2d1339" stroke="#e879f9" strokeWidth="1.5" />
              {/* High Fashion Choker & collar */}
              <path d="M 85 96 L 115 96 L 110 110 L 90 110 Z" fill="#d946ef" />
              {/* Haute couture angular coat silhouette */}
              <polygon points="50,115 150,115 175,230 25,230" fill="url(#fashionCoat)" stroke="#f0abfc" strokeWidth="1.2" />
              {/* Lapels */}
              <polygon points="100,115 125,180 100,195 75,180" fill="#4a044e" stroke="#e879f9" strokeWidth="1" />
              <circle cx="100" cy="55" r="2" fill="#fae8ff" />
              <defs>
                <linearGradient id="fashionCoat" x1="100" y1="115" x2="100" y2="230" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b0764" />
                  <stop offset="1" stopColor="#090510" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-40 h-3 bg-fuchsia-500/20 blur-md rounded-full" />
        </div>
      )}

      {type === 'beverage' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/25 via-[#081512] to-[#040907]">
          {/* Beverage can with frozen splash droplets */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-3/5 h-3/5 text-emerald-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Can Rim */}
              <ellipse cx="100" cy="45" rx="36" ry="12" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
              {/* Can Cylinder */}
              <path d="M 64 45 L 64 185 A 36 12 0 0 0 136 185 L 136 45" fill="url(#canGrad)" stroke="#10b981" strokeWidth="1.5" />
              {/* Lime slice flying */}
              <circle cx="145" cy="90" r="18" fill="#065f46" stroke="#a7f3d0" strokeWidth="1.5" />
              <circle cx="145" cy="90" r="14" fill="#10b981" fillOpacity="0.4" />
              {/* Droplets */}
              <circle cx="50" cy="70" r="3.5" fill="#a7f3d0" />
              <circle cx="45" cy="115" r="4" fill="#a7f3d0" />
              <circle cx="155" cy="140" r="3" fill="#a7f3d0" />
              <circle cx="60" cy="160" r="2.5" fill="#a7f3d0" />
              <circle cx="140" cy="60" r="2.5" fill="#a7f3d0" />
              <defs>
                <linearGradient id="canGrad" x1="100" y1="45" x2="100" y2="185" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#064e3b" />
                  <stop offset="0.5" stopColor="#047857" />
                  <stop offset="1" stopColor="#022c22" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-40 h-3 bg-emerald-500/20 blur-md rounded-full" />
        </div>
      )}

      {type === 'cyberpunk' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/30 via-[#0d0f22] to-[#050610]">
          {/* Cyberpunk monolith towers and flying drone vehicles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-4/5 h-4/5 text-indigo-400 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 240 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Distant skyline */}
              <rect x="20" y="70" width="30" height="90" fill="#1e1b4b" />
              <rect x="60" y="40" width="45" height="120" fill="#312e81" stroke="#818cf8" strokeWidth="0.8" />
              <rect x="115" y="55" width="35" height="105" fill="#1e1b4b" />
              <rect x="160" y="30" width="50" height="130" fill="#312e81" stroke="#a5b4fc" strokeWidth="0.8" />
              {/* Glowing windows */}
              <line x1="70" y1="60" x2="95" y2="60" stroke="#f43f5e" strokeWidth="1.5" />
              <line x1="70" y1="80" x2="95" y2="80" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="170" y1="50" x2="200" y2="50" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="170" y1="75" x2="200" y2="75" stroke="#818cf8" strokeWidth="1.5" />
              {/* Flying vehicle with trace */}
              <polygon points="120,40 140,42 135,46 115,44" fill="#f43f5e" />
              <line x1="80" y1="42" x2="115" y2="42" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.7" />
            </svg>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-52 h-3 bg-indigo-500/20 blur-md rounded-full" />
        </div>
      )}

      {type === 'concept' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-[#14120e] to-[#070707]">
          {/* Sleek 3D geometric isometric core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-3/5 h-3/5 text-amber-400 drop-shadow-[0_0_35px_rgba(245,158,11,0.35)] transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Isometric Cube Faces */}
              {/* Top Face */}
              <polygon points="100,40 150,68 100,96 50,68" fill="#d97706" fillOpacity="0.8" stroke="#fef08a" strokeWidth="1.2" />
              {/* Left Face */}
              <polygon points="50,68 100,96 100,154 50,126" fill="#78350f" fillOpacity="0.9" stroke="#fef08a" strokeWidth="1.2" />
              {/* Right Face */}
              <polygon points="100,96 150,68 150,126 100,154" fill="#b45309" fillOpacity="0.9" stroke="#fef08a" strokeWidth="1.2" />
              {/* Floating orbit ring */}
              <ellipse cx="100" cy="96" rx="70" ry="24" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="160" cy="104" r="3" fill="#fde68a" />
              <circle cx="40" cy="88" r="3" fill="#fde68a" />
            </svg>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-44 h-3 bg-amber-400/20 blur-md rounded-full" />
        </div>
      )}

      {/* Grid overlay texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Gradient dark scrim for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-black/30 pointer-events-none" />

      {/* Central Play affordance (for videos/reels) */}
      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-lg shadow-black/60 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 ml-1 fill-white text-white" />
          </div>
        </div>
      )}

      {/* Discreet AI Production stamp in bottom corner */}
      <div className="absolute bottom-3 right-3 text-[10px] tracking-wider text-slate-400 bg-slate-900/80 px-2 py-1 rounded backdrop-blur-md border border-white/10 flex items-center gap-1.5">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>GENERATIVE AI 4K</span>
      </div>
    </div>
  );
};
