
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, EXPERIENCES, SKILLS, PUBLICATIONS, EDUCATION, MEDIA, SOCIAL_LINKS, PROFILE_IMAGE, GALLERY, PATENTS } from '../constants';
import { ExternalLink, Github, Linkedin, MapPin, ChevronRight, FileText, ArrowUpRight, Newspaper, X, Eye, BookOpen, ChevronLeft, ChevronRight as ChevronRightIcon, Download, ZoomIn, ZoomOut, User, Maximize2, ImageOff, Bot, Mail, ShieldCheck, Sparkles, Cpu, Camera, Database, Zap, Code2, Layout, Box } from 'lucide-react';
import { MediaItem, GalleryItem } from '../types';

// Premium Bio-Digital Core Replacement for Bot Icon
export const BioDigitalCore = ({ size = "w-full h-full", glowColor = "rgba(132, 204, 22, 0.5)" }) => (
  <div className={`relative ${size} flex items-center justify-center`}>
    {/* Outer Organic Membrane */}
    <div className="absolute inset-0 border border-lime-500/20 rounded-full animate-[pulse_4s_ease-in-out_infinite] scale-90"></div>
    {/* Inner Neural Core */}
    <div className="relative w-1/2 h-1/2 bg-gradient-to-tr from-lime-500 to-sky-400 rounded-full shadow-[0_0_30px_rgba(132,204,22,0.6)] animate-pulse">
      <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
    </div>
    {/* Orbiting Electrons/Data Points */}
    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]"></div>
    </div>
    <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
       <div className="absolute bottom-4 left-4 w-1 h-1 bg-lime-400 rounded-full shadow-[0_0_8px_#a3e635]"></div>
    </div>
  </div>
);

export const RecentLearningSection = () => (
  <div className="space-y-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="group bg-white/5 border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Database size={80} className="text-white" />
        </div>
        <div className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest border bg-lime-500/10 text-lime-400 border-lime-500/20 w-fit mb-8">
          Deep Dive // 2025
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-lime-400 transition-colors">Database Architecture</h3>
        <p className="text-lg text-slate-400 leading-relaxed font-light">
          Mastering relational modeling, indexing strategies, and high-throughput data pipelines for managing massive biological datasets.
        </p>
      </div>

      <div className="group bg-white/5 border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Zap size={80} className="text-white" />
        </div>
        <div className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest border bg-sky-500/10 text-sky-400 border-sky-500/20 w-fit mb-8">
          In Progress
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-sky-400 transition-colors">MySQL Optimization</h3>
        <p className="text-lg text-slate-400 leading-relaxed font-light">
          Advanced query tuning and schema design to ensure milliseconds-level response times for social consumer platform backends.
        </p>
      </div>
    </div>
  </div>
);

export const FavoriteToolsSection = () => {
  const tools = [
    { name: "Google Antigravity", desc: "Advanced physics engine orchestration.", icon: <Box className="text-lime-400" /> },
    { name: "Claude Code", desc: "Elite logic & reasoning for complex codebases.", icon: <Zap className="text-sky-400" /> },
    { name: "Cursor Agent", desc: "AI-native IDE for rapid prototype scaling.", icon: <Layout className="text-purple-400" /> },
    { name: "VS Code", desc: "The foundational environment for all vibes.", icon: <Code2 className="text-blue-400" /> },
    { name: "ChatGPT", desc: "Strategic brainstorming and logic verification.", icon: <Sparkles className="text-emerald-400" /> },
    { name: "R Studio", desc: "Statistical depth for biological data synthesis.", icon: <Database className="text-orange-400" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {tools.map((tool, i) => (
        <div key={i} className="group bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 hover:border-white/10 transition-all shadow-xl">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
            {tool.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
          <p className="text-slate-500 text-sm font-light leading-relaxed">{tool.desc}</p>
        </div>
      ))}
    </div>
  );
};

export const AboutSection = () => {
  const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImg = localStorage.getItem('vibe_profile_img');
    if (savedImg && savedImg.length > 100) { // Simple check to ensure it's data
      setImgSrc(savedImg);
    } else {
      setImgSrc(PROFILE_IMAGE);
    }

    const handleStorageChange = () => {
      const updatedImg = localStorage.getItem('vibe_profile_img');
      if (updatedImg && updatedImg.length > 100) {
        setImgSrc(updatedImg);
        setImgError(false);
      } else {
        setImgSrc(PROFILE_IMAGE);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profile-update', handleStorageChange as EventListener);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profile-update', handleStorageChange as EventListener);
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem('vibe_profile_img', base64String);
        setImgSrc(base64String);
        setImgError(false);
        window.dispatchEvent(new Event('profile-update'));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2">
        
        {/* Left Content Block: Typography and Badges */}
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
             <div className="flex flex-col">
               <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl xl:text-[5.5rem] font-black tracking-tighter text-white leading-[0.85] uppercase transition-all duration-500 hover:tracking-tight group cursor-default">
                 BIOENGINEER.<br />
                 VIBE CODER.<br />
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-400 to-sky-500">
                   FOUNDER.
                 </span>
               </h1>
             </div>
             
             <div className="flex items-center gap-4 pt-4">
               <div className="h-[1px] w-12 bg-slate-800" />
               <p className="text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] font-bold">
                 PROTOCOL VERIFIED // GOBINATH
               </p>
             </div>
          </div>

          <div className="space-y-6 max-w-xl">
            <div className="relative border-l-2 border-lime-500/40 pl-6 md:pl-8">
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light italic">
                "I build <strong className="text-white font-bold">social consumer products</strong> powered by <strong className="text-lime-400 font-bold">automated AI workflows</strong>. My work exists at the intersection of bioprocess, tissue engineering, drug delivery and high-performance automation."
              </p>
            </div>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light pl-6 md:pl-8">
              Currently scaling consumer products into seamless experiences for nightlife and a hiring platform.
            </p>
          </div>

          {/* Status Badges - Properly fitted flex wrap */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pl-6 md:pl-8">
             <StatusBadge color="bg-lime-500" text="Biotech Precision" />
             <StatusBadge color="bg-sky-500" text="Agentic Automation" />
             <StatusBadge color="bg-orange-500" text="Consumer Product" />
          </div>
        </div>

        {/* Right Block: Circular Image Portal */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleImageUpload}
          />
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none aspect-square group cursor-pointer"
          >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 via-emerald-500/10 to-sky-500/20 rounded-full blur-[80px] opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              
              {/* Image Circle Container */}
              <div className="relative w-full h-full rounded-full border border-white/10 bg-slate-950/60 backdrop-blur-3xl overflow-hidden flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10 group-hover:ring-lime-500/40 transition-all duration-700">
                  {(!imgError && imgSrc) ? (
                    <img 
                        src={imgSrc} 
                        alt="Gobinath" 
                        className="w-full h-full object-cover grayscale-[10%] contrast-[110%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                        onError={() => {
                            // If first load fails and it's not the default path, try default
                            if (imgSrc !== PROFILE_IMAGE) {
                              setImgSrc(PROFILE_IMAGE);
                            } else {
                              setImgError(true);
                            }
                        }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-800 p-8 text-center select-none bg-slate-900">
                      <div className="w-24 h-24 mb-4">
                        <BioDigitalCore />
                      </div>
                      <span className="text-[10px] font-mono text-lime-500/40 uppercase tracking-[0.5em] font-black">IMAGE OFFLINE</span>
                    </div>
                  )}
                  
                  {/* Photo Re-Sync UI Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[6px]">
                    <div className="bg-white/10 p-5 rounded-3xl border border-white/10 flex flex-col items-center gap-3 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                       <Camera size={28} className="text-lime-400" />
                       <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em] font-bold">RE-SYNC VAULT</span>
                    </div>
                  </div>

                  {/* High-Tech Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%),linear-gradient(90deg,rgba(255,0,0,0.002),rgba(0,255,0,0.002),rgba(0,0,255,0.002))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40" />
              </div>

              {/* Status "ACTIVE" Pulse Dot */}
              <div className="absolute bottom-[8%] right-[8%] z-30 translate-x-1/2 translate-y-1/2">
                 <div className="relative">
                    <div className="absolute inset-0 bg-lime-500/60 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-10 h-10 md:w-14 md:h-14 bg-lime-400 border-[8px] md:border-[10px] border-slate-950 rounded-full shadow-2xl flex items-center justify-center">
                      <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full opacity-80 animate-ping"></div>
                    </div>
                 </div>
              </div>

              {/* Unique ID Tag */}
              <div className="absolute -top-4 right-10 hidden lg:block">
                 <div className="bg-black/95 backdrop-blur-3xl border border-white/10 px-4 py-2 rounded-2xl shadow-3xl">
                    <p className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.5em] font-black">CORE-ID: 001X</p>
                 </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ color, text }: { color: string; text: string }) => (
  <div className="bg-slate-900/90 border border-white/5 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl text-slate-200 text-[10px] md:text-xs font-mono tracking-[0.1em] flex items-center gap-3 hover:border-white/20 hover:bg-white/10 transition-all cursor-default shadow-lg group shrink-0 uppercase">
    <div className={`w-2 h-2 rounded-full ${color} animate-pulse shadow-[0_0_12px_${color}] group-hover:scale-125 transition-transform`}></div>
    {text}
  </div>
);

export const ProjectsSection = () => (
  <div className="space-y-12 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, i) => (
        <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/10 hover:border-lime-500/20 transition-all duration-500 flex flex-col h-full shadow-2xl shadow-black/50">
          <div className="flex justify-between items-start mb-10">
            <span className="text-[10px] font-mono font-bold text-lime-400 bg-lime-500/10 px-4 py-2 rounded-xl border border-lime-500/20 uppercase tracking-[0.2em]">{project.type}</span>
            {project.link && (
              <a href={project.link} target="_blank" className="text-slate-500 hover:text-white transition-all transform hover:rotate-12">
                <ArrowUpRight size={28} />
              </a>
            )}
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-lime-400 transition-colors leading-tight">{project.title}</h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] bg-black/40 border border-white/5 px-4 py-2 rounded-xl text-slate-500 font-mono tracking-wider uppercase group-hover:text-slate-300 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PatentsSection = () => (
  <div className="space-y-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {PATENTS.map((patent, i) => (
      <div key={i} className="group relative bg-white/5 border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/10 hover:border-sky-500/20 transition-all duration-500 shadow-2xl">
        <div className="flex justify-between items-start mb-8">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20 text-sky-400">
                <ShieldCheck size={28} />
              </div>
              <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-4 py-2 rounded-xl border border-sky-500/20 uppercase tracking-[0.2em]">Intellectual Property</span>
           </div>
           <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{patent.year}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-sky-400 transition-colors">{patent.title}</h3>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">{patent.description}</p>
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
           <span className="text-sm font-mono text-amber-500 uppercase tracking-widest">{patent.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export const ExperienceSection = () => (
  <div className="space-y-14 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {EXPERIENCES.map((exp, i) => (
      <div key={i} className="relative pl-12 border-l border-slate-800 hover:border-lime-500/30 transition-colors duration-500 group">
        <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-slate-800 rounded-full ring-4 ring-slate-950 group-hover:bg-lime-500 group-hover:scale-150 transition-all" />
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white group-hover:text-lime-400 transition-colors">{exp.role}</h3>
          <div className="text-sm font-mono text-lime-500/80 mt-2 uppercase tracking-widest">{exp.company} // {exp.period}</div>
        </div>
        <ul className="space-y-4">
          {exp.highlights.map((h, j) => (
            <li key={j} className="text-lg text-slate-400 leading-relaxed flex items-start gap-5 font-light">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2.5 shrink-0 group-hover:bg-lime-500/40 transition-colors" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const EducationSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {EDUCATION.map((edu, i) => (
      <div key={i} className="group bg-white/5 border border-white/5 rounded-[2.5rem] p-10 transition-all hover:bg-white/10 hover:border-white/20 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{edu.degree}</h3>
        <div className="mb-8">
            {edu.link ? (
                <a 
                  href={edu.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lime-400 font-mono text-xs hover:text-lime-300 inline-flex items-center gap-2 tracking-widest uppercase"
                >
                  {edu.institution}
                  <ExternalLink size={12} />
                </a>
            ) : (
                <p className="text-lime-400 font-mono text-xs tracking-widest uppercase">{edu.institution}</p>
            )}
        </div>
        <span className="inline-block text-[10px] bg-black/40 border border-white/5 px-4 py-2 rounded-xl text-slate-500 font-mono tracking-widest uppercase">
           {edu.period}
        </span>
      </div>
    ))}
  </div>
);

export const SkillsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {SKILLS.map((cat, i) => (
      <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-lime-500/20 transition-all duration-500">
        <h4 className="text-[10px] font-bold text-lime-500/60 uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-6">{cat.category}</h4>
        <div className="flex flex-wrap gap-3">
          {cat.skills.map(skill => (
            <span key={skill} className="text-sm font-mono text-slate-400 bg-black/40 px-5 py-3 rounded-xl hover:bg-lime-500/10 hover:text-lime-400 transition-all cursor-default border border-transparent hover:border-lime-500/20">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const PublicationsSection = () => (
  <div className="space-y-6 mt-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {PUBLICATIONS.map((pub, i) => {
      const url = pub.link || (pub.doi ? `https://doi.org/${pub.doi}` : undefined);
      return (
        <div key={i} className="group relative flex gap-8 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500">
           <div className="shrink-0 pt-1 text-slate-700 group-hover:text-lime-500 transition-colors duration-500">
             <FileText size={32} />
           </div>
           <div className="flex-1 pr-12">
             <h4 className="text-xl font-bold text-slate-200 mb-2 leading-tight group-hover:text-white transition-colors">
               {url ? (
                 <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-lime-400">
                   {pub.title}
                 </a>
               ) : (
                 pub.title
               )}
             </h4>
             {pub.highlight && (
               <p className="text-sm text-slate-400 font-light mb-4 italic leading-relaxed">"{pub.highlight}"</p>
             )}
             <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
               <span className="text-lime-500/70">{pub.journal}</span>
               <span>{pub.year}</span>
               {pub.doi && <span className="opacity-40">DOI: {pub.doi.split('/')[1]}</span>}
             </div>
           </div>
           {url && (
             <a href={url} target="_blank" rel="noopener noreferrer" className="absolute top-10 right-10 text-slate-700 hover:text-lime-400 transition-all transform hover:scale-125">
               <ArrowUpRight size={28} />
             </a>
           )}
        </div>
      );
    })}
  </div>
);

// Fix: Explicitly type GalleryThumbnail as React.FC to avoid 'key' prop error during mapping
const GalleryThumbnail: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => {
  const [imgSrc, setImgSrc] = useState(item.imageUrl);
  const [error, setError] = useState(false);

  return (
    <div 
      className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900 cursor-pointer shadow-2xl"
      onClick={!error ? onClick : undefined}
    >
      {!error ? (
        <img 
          src={imgSrc} 
          alt={item.title} 
          onError={() => {
              setError(true);
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-white/5">
           <ImageOff size={28} className="text-slate-700 mb-3" />
           <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Archive Link Missing</p>
        </div>
      )}
      
      {!error && (
        <div className="absolute inset-0 bg-gradient-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <p className="text-lime-400 text-[10px] font-mono uppercase tracking-[0.4em] mb-2">{item.category}</p>
          <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
        </div>
      )}
    </div>
  );
};

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleClose = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
        {GALLERY.map((item) => (
           <GalleryThumbnail key={item.id} item={item} onClick={() => setSelectedImage(item)} />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
           <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300" onClick={handleClose}/>
           <div className="relative z-10 max-w-5xl w-full flex flex-col items-center animate-in zoom-in-95 duration-500">
              <button onClick={handleClose} className="absolute -top-16 right-0 p-3 text-slate-400 hover:text-white transition-colors">
                <X size={40} />
              </button>
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 bg-slate-900">
                 <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-h-[75vh] w-auto object-contain" />
              </div>
              <div className="mt-10 text-center max-w-2xl">
                 <h3 className="text-3xl font-bold text-white mb-4">{selectedImage.title}</h3>
                 <p className="text-slate-400 text-lg font-light leading-relaxed">{selectedImage.description}</p>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export const MediaSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
    {MEDIA.map((item, i) => (
      <div key={i} className="group relative flex flex-col rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-lime-500/20 transition-all duration-500 overflow-hidden shadow-2xl">
         <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-white/5">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
            ) : (
              <div className="w-full h-full flex items-center justify-center"><Newspaper size={48} className="text-slate-800" /></div>
            )}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] font-mono font-bold text-slate-950 bg-lime-400 px-4 py-2 rounded-xl shadow-2xl uppercase tracking-widest">{item.type}</span>
            </div>
         </div>
         <div className="p-10 flex-1 flex flex-col">
           <div className="text-[10px] text-slate-500 font-mono mb-4 flex items-center gap-3 tracking-[0.2em] uppercase">
             <span>{item.source}</span>
             <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
             <span>{item.date}</span>
           </div>
           <h4 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-lime-400 transition-colors">{item.title}</h4>
           {item.description && <p className="text-base text-slate-400 leading-relaxed mb-10 font-light line-clamp-3">{item.description}</p>}
           <div className="mt-auto">
             <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full py-4 rounded-2xl bg-slate-800 hover:bg-lime-500 hover:text-slate-950 text-slate-200 text-sm font-bold transition-all items-center justify-center gap-3 group/btn shadow-xl">
               Launch Source <ArrowUpRight size={18} />
             </a>
           </div>
         </div>
      </div>
    ))}
  </div>
);

export const ContactSection = () => (
  <div className="mt-10 p-16 bg-gradient-to-br from-lime-500/5 to-sky-600/10 rounded-[3rem] border border-white/5 text-center animate-in fade-in slide-in-from-bottom-6 duration-700 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Direct Synchronization</h3>
    <p className="text-slate-400 mb-12 text-xl font-light max-w-xl mx-auto leading-relaxed">The best way to reach out for high-impact collaborations, product ventures, or deep-tech research.</p>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex-1 px-8 py-5 bg-lime-500 hover:bg-lime-400 text-slate-950 rounded-[1.5rem] text-lg font-black transition-all shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3">
        <Mail size={22} /> Email Protocol
      </a>
      <a href={`https://${SOCIAL_LINKS.linkedin}`} target="_blank" className="flex-1 px-8 py-5 bg-[#0077b5] hover:bg-[#00a0dc] text-white rounded-[1.5rem] text-lg font-black transition-all shadow-[0_0_30px_rgba(0,119,181,0.3)] hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3">
        <Linkedin size={22} /> LinkedIn Sync
      </a>
      <a href={`https://${SOCIAL_LINKS.github}`} target="_blank" className="flex-1 px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-[1.5rem] text-lg font-black transition-all flex items-center justify-center gap-4 hover:border-lime-500/30 uppercase tracking-widest">
        <Github size={22} /> Access Git
      </a>
    </div>
  </div>
);
