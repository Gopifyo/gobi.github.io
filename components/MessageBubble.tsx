
import React, { useState } from 'react';
import { Bot, User } from 'lucide-react';
import { MessageType } from '../App';
import { AboutSection, ProjectsSection, ExperienceSection, SkillsSection, PublicationsSection, ContactSection, EducationSection, MediaSection, GallerySection, PatentsSection, RecentLearningSection, FavoriteToolsSection, BioDigitalCore } from './ContentRenderer';
import { PROFILE_IMAGE } from '../constants';

interface MessageBubbleProps {
  message: MessageType;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className={`
      w-full group
      ${isUser ? 'py-10' : 'py-6'}
    `}>
      <div className="text-lg gap-6 md:gap-8 md:max-w-4xl lg:max-w-[46rem] xl:max-w-[56rem] flex lg:px-0 m-auto">
        
        {/* Avatar */}
        <div className="w-[42px] flex flex-col relative items-end shrink-0">
          <div className={`
            relative h-11 w-11 rounded-xl flex items-center justify-center shadow-lg overflow-hidden
            ${isUser ? 'bg-slate-800 border border-white/5' : 'bg-slate-900 border border-lime-500/30 shadow-lime-500/20'}
          `}>
            {isUser ? (
              <User size={22} className="text-slate-400" />
            ) : (
              !imgError ? (
                  <img 
                    src={PROFILE_IMAGE} 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
              ) : (
                  <div className="w-8 h-8">
                    <BioDigitalCore />
                  </div>
              )
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 overflow-hidden min-w-0">
           {/* Message Container */}
           <div className={`
             ${isUser ? 'bg-slate-900/50 border border-white/5 rounded-3xl p-6 md:px-8 md:py-6 inline-block backdrop-blur-sm' : ''}
           `}>
             {/* Text Content */}
             {message.text && (
               <div className={`
                 prose prose-invert prose-lg prose-p:leading-relaxed prose-pre:bg-black/50 max-w-none whitespace-pre-wrap font-light
                 ${isUser ? 'text-slate-300' : 'text-slate-100'}
               `}>
                 {message.text}
               </div>
             )}
           </div>

           {/* Dynamic Component Content */}
           {!isUser && (
             <div className="mt-8">
                {message.component === 'About' && <AboutSection />}
                {message.component === 'Projects' && <ProjectsSection />}
                {message.component === 'Patents' && <PatentsSection />}
                {message.component === 'Experience' && <ExperienceSection />}
                {message.component === 'Education' && <EducationSection />}
                {message.component === 'Skills' && <SkillsSection />}
                {message.component === 'Publications' && <PublicationsSection />}
                {message.component === 'Media' && <MediaSection />}
                {message.component === 'Gallery' && <GallerySection />}
                {message.component === 'Contact' && <ContactSection />}
                {message.component === 'Learning' && <RecentLearningSection />}
                {message.component === 'Tools' && <FavoriteToolsSection />}
             </div>
           )}
           
           {/* Streaming Cursor */}
           {message.isStreaming && !message.component && (
             <span className="w-3 h-5 bg-lime-500 inline-block animate-pulse ml-1 align-middle rounded-sm shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
           )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
