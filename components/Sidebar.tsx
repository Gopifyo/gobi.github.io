
import React, { useState } from 'react';
import { Plus, User, Briefcase, Code2, FlaskConical, Link as LinkIcon, X, Github, Linkedin, Mail, GraduationCap, Newspaper, Image as ImageIcon, ShieldCheck, BrainCircuit, Wrench } from 'lucide-react';
import { SOCIAL_LINKS, PROFILE_IMAGE } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
  onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, onReset }) => {
  const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        w-[320px] bg-slate-950 flex flex-col shrink-0
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        border-r border-white/5
      `}>
        
        {/* Mobile Close Button & Header */}
        <div className="flex items-center justify-between p-6 md:hidden border-b border-white/5">
           <span className="text-base font-bold text-slate-400">Vault Modules</span>
           <button 
             onClick={onClose}
             type="button"
             className="p-2 text-slate-400 hover:text-white border border-white/10 rounded-lg transition-colors"
           >
             <X size={24} />
           </button>
        </div>

        {/* New Chat Button */}
        <div className="p-6">
          <button 
            onClick={onReset}
            type="button"
            className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl border border-white/10 hover:border-lime-500/50 hover:bg-white/5 text-slate-100 text-base font-medium transition-all text-left shadow-lg shadow-black/20 group"
          >
            <Plus size={20} className="text-lime-500 group-hover:text-lime-400" />
            New Session
          </button>
        </div>

        {/* Navigation / History - REORDERED FOR HIGH IMPACT */}
        <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-none">
          <div className="mb-6 space-y-2">
            <div className="px-5 py-3 text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">Interface Logs</div>
            
            {/* 1. Identity */}
            <NavButton icon={<User size={20} />} label="Who is Gobinath?" onClick={() => onNavigate('About')} />
            
            {/* 2. Direct Innovation (Projects & Patents) */}
            <NavButton icon={<Code2 size={20} />} label="What has been built?" onClick={() => onNavigate('Projects')} />
            <NavButton icon={<ShieldCheck size={20} />} label="What patents are filed?" onClick={() => onNavigate('Patents')} />
            
            {/* 3. Proof of Work (Experience & Skills) */}
            <NavButton icon={<Briefcase size={20} />} label="Where has he worked?" onClick={() => onNavigate('Experience')} />
            <NavButton icon={<LinkIcon size={20} />} label="What is the technical stack?" onClick={() => onNavigate('Skills')} />
            
            {/* 4. Validation (Publications & Media) */}
            <NavButton icon={<FlaskConical size={20} />} label="What are his publications?" onClick={() => onNavigate('Publications')} />
            <NavButton icon={<Newspaper size={20} />} label="What is the media footprint?" onClick={() => onNavigate('Media')} />
            
            {/* 5. Continuous Growth & Tooling */}
            <NavButton icon={<BrainCircuit size={20} />} label="Recent Learning: DB, MySQL" onClick={() => onNavigate('Learning')} />
            <NavButton icon={<Wrench size={20} />} label="Favorite Tools: Claude, Cursor" onClick={() => onNavigate('Tools')} />
            
            {/* 6. Engagement & Background */}
            <NavButton icon={<ImageIcon size={20} />} label="Can I see the visual vault?" onClick={() => onNavigate('Gallery')} />
            <NavButton icon={<GraduationCap size={20} />} label="What is his background?" onClick={() => onNavigate('Education')} />
            
            {/* 7. Action */}
            <NavButton icon={<Mail size={20} />} label="Best way to contact him?" onClick={() => onNavigate('Contact')} />
          </div>
        </div>

        {/* User / Footer */}
        <div className="border-t border-white/5 p-8 bg-slate-950">
          <div className="flex items-center gap-5 cursor-default group">
             {!imgError ? (
                 <img 
                   src={imgSrc} 
                   alt="Profile" 
                   className="w-12 h-12 rounded-2xl object-cover shadow-xl shadow-lime-500/10 border border-white/10" 
                   onError={() => {
                       setImgError(true);
                   }}
                 />
             ) : (
                 <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-white/10">
                    <span className="text-sm font-bold text-lime-500">G</span>
                 </div>
             )}
             <div className="flex-1 overflow-hidden">
               <div className="text-lg text-slate-100 font-bold tracking-tight truncate uppercase">Gobinath</div>
               <div className="text-[10px] text-slate-500 font-mono tracking-widest truncate uppercase">Bioengineer</div>
             </div>
          </div>
          <div className="flex justify-between mt-8">
             <SocialIcon href={`https://${SOCIAL_LINKS.github}`} icon={<Github size={20} />} />
             <SocialIcon href={`https://${SOCIAL_LINKS.linkedin}`} icon={<Linkedin size={20} />} />
             <SocialIcon href={`mailto:${SOCIAL_LINKS.email}`} icon={<Mail size={20} />} />
          </div>
        </div>
      </div>
    </>
  );
};

const NavButton = ({ icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    type="button"
    className="flex items-center gap-5 w-full px-5 py-4 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-100 text-sm transition-all text-left group truncate"
  >
    <span className="text-slate-600 group-hover:text-lime-500 transition-colors group-hover:scale-110 duration-300">{icon}</span>
    <span className="truncate font-light tracking-wide">{label}</span>
  </button>
);

const SocialIcon = ({ href, icon }: { href: string; icon: any }) => (
  <a href={href} target="_blank" className="p-2 text-slate-600 hover:text-lime-500 transition-colors bg-white/5 rounded-lg border border-transparent hover:border-lime-500/20">
    {icon}
  </a>
);

export default Sidebar;
