
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/50 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tighter text-teal-400">
          G.CHITHIRAVELU
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
          <a href="#research" className="hover:text-teal-400 transition-colors">Research</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
        </div>
        <a 
          href="mailto:gobinath.edu@gmail.com" 
          className="bg-teal-500 hover:bg-teal-400 text-gray-950 px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
        >
          Let's Collaborate
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
