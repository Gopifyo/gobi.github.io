import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ChatInput from './components/ChatInput';
import MessageBubble from './components/MessageBubble';
import BackgroundAnimation from './components/BackgroundAnimation';
import { BioDigitalCore } from './components/ContentRenderer';
import { PROJECTS, EXPERIENCES, SKILLS, EDUCATION, PUBLICATIONS, MEDIA, SOCIAL_LINKS, GALLERY, PATENTS, PROFILE_IMAGE } from './constants';
import { Menu, Sparkles, Bot, Wifi, Battery, User, TrendingUp, FlaskConical, Handshake, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export type MessageType = {
  id: string;
  role: 'user' | 'model';
  text?: string;
  component?: 'About' | 'Projects' | 'Experience' | 'Skills' | 'Publications' | 'Contact' | 'Education' | 'Media' | 'Gallery' | 'Patents' | 'Learning' | 'Tools';
  isStreaming?: boolean;
};

const App: React.FC = () => {
  // Desktop / Launcher State
  const [launchState, setLaunchState] = useState<'desktop' | 'launching' | 'running'>('desktop');
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [launcherImgSrc, setLauncherImgSrc] = useState(PROFILE_IMAGE);
  const [launcherImgError, setLauncherImgError] = useState(false);

  // Chat App State
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Clock for Desktop
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Initialize Welcome Message with Persona Context
  useEffect(() => {
    if (launchState === 'running') {
      let personaGreeting = "Hello. I am the Vibe Agent. Protocol synchronized for Gobinath's vault.";
      
      if (selectedPersona === 'investor') {
        personaGreeting = "Investor access granted. Intelligence bridge synchronized. Accessing product roadmap and patent archives.";
      } else if (selectedPersona === 'researcher') {
        personaGreeting = "Academic link established. Accessing publication datasets and laboratory protocols.";
      } else if (selectedPersona === 'collaborator') {
        personaGreeting = "Partnership protocol initiated. Synchronizing technical stack and project logs.";
      } else if (selectedPersona === 'curious') {
        personaGreeting = "Visitor access enabled. Welcome to the Bio-Digital vault. Loading overview.";
      }

      const initialMessages: MessageType[] = [
        { 
          id: 'welcome-1', 
          role: 'model', 
          text: personaGreeting,
          isStreaming: false 
        },
        {
          id: 'welcome-2', 
          role: 'model', 
          text: "Accessing primary identity module...",
          component: 'About',
          isStreaming: false
        }
      ];
      setMessages(initialMessages);
    }
  }, [launchState, selectedPersona]);

  // Auto-scroll logic
  useEffect(() => {
    if (launchState === 'running') {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, launchState]);

  const handleLaunch = (persona: string = 'curious') => {
    setSelectedPersona(persona);
    setLaunchState('launching');
    setTimeout(() => {
      setLaunchState('running');
    }, 800);
  };

  const handleUserMessage = async (text: string) => {
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, role: 'user', text }]);
    setIsTyping(true);

    // Simulated Intelligent Local Response
    setTimeout(() => {
      let component: MessageType['component'] | undefined;
      let responseText = "I've analyzed your request. Accessing the relevant vault module...";
      const lower = text.toLowerCase();

      if (lower.includes('project')) {
        component = 'Projects';
        responseText = "Retrieving the product and project matrix from Gobinath's archives.";
      } else if (lower.includes('patent')) {
        component = 'Patents';
        responseText = "Decrypting Intellectual Property records. Accessing patent data.";
      } else if (lower.includes('experience') || lower.includes('work')) {
        component = 'Experience';
        responseText = "Syncing professional timeline and career highlights.";
      } else if (lower.includes('skill') || lower.includes('stack')) {
        component = 'Skills';
        responseText = "Mapping the technical arsenal and core capabilities.";
      } else if (lower.includes('research') || lower.includes('publication')) {
        component = 'Publications';
        responseText = "Accessing scientific publications and research datasets.";
      } else if (lower.includes('media') || lower.includes('press')) {
        component = 'Media';
        responseText = "Loading global frequency logs and media footprint.";
      } else if (lower.includes('contact') || lower.includes('hire')) {
        component = 'Contact';
        responseText = "Establishing communication link. Channels are open.";
      } else if (lower.includes('about') || lower.includes('who')) {
        component = 'About';
        responseText = "Running primary identity synchronization. Here is the overview.";
      } else if (lower.includes('edu')) {
        component = 'Education';
        responseText = "Accessing academic core modules and educational background.";
      } else if (lower.includes('photo') || lower.includes('gallery') || lower.includes('visual')) {
        component = 'Gallery';
        responseText = "Opening visual archives and lab documentation.";
      } else if (lower.includes('learning') || lower.includes('database') || lower.includes('mysql')) {
        component = 'Learning';
        responseText = "Syncing recent knowledge acquisition logs for Database and MySQL optimization.";
      } else if (lower.includes('tool') || lower.includes('claude') || lower.includes('cursor')) {
        component = 'Tools';
        responseText = "Inventory check complete. Displaying favorite technical tools and development stack.";
      } else {
        responseText = "Command recognized. I am currently operating in direct-vault mode. You can ask about his projects, experience, patents, or tools.";
      }

      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText, 
        component 
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleNavigate = (section: string) => {
    setSidebarOpen(false);
    const config = {
      'About': { prompt: "Who is Gobinath?", text: "Running identity sync. Here is the profile overview.", component: 'About' as const },
      'Projects': { prompt: "Show me the projects.", text: "Check out the product and project matrix.", component: 'Projects' as const },
      'Patents': { prompt: "Tell me about your patents.", text: "Accessing Intellectual Property vault.", component: 'Patents' as const },
      'Experience': { prompt: "What is the work experience?", text: "Here is the professional timeline.", component: 'Experience' as const },
      'Education': { prompt: "Show education history.", text: "Here is the academic background.", component: 'Education' as const },
      'Skills': { prompt: "List technical skills.", text: "Here is the technical arsenal.", component: 'Skills' as const },
      'Publications': { prompt: "Show publications.", text: "Here are the scientific publications.", component: 'Publications' as const },
      'Media': { prompt: "Show media coverage.", text: "Here is the recent press coverage.", component: 'Media' as const },
      'Contact': { prompt: "How do I contact?", text: "Communication channels open.", component: 'Contact' as const },
      'Gallery': { prompt: "Show me the visual vault.", text: "Opening visual archives.", component: 'Gallery' as const },
      'Learning': { prompt: "What have you been learning lately?", text: "Accessing knowledge synchronization log.", component: 'Learning' as const },
      'Tools': { prompt: "What tools do you use?", text: "Displaying favorite tools and development stack.", component: 'Tools' as const },
    };
    const target = config[section as keyof typeof config];
    if (!target) return;

    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, role: 'user', text: target.prompt }]);
    setIsTyping(true);

    setTimeout(() => {
        const botMsgId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, { 
            id: botMsgId, 
            role: 'model', 
            text: target.text, 
            component: target.component,
            isStreaming: false 
        }]);
        setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
     setMessages([
      { id: 'welcome-1', role: 'model', text: "Session reset. Hello again.", isStreaming: false },
      { id: 'welcome-2', role: 'model', text: "Ready for new command.", component: 'About', isStreaming: false }
     ]);
     setSidebarOpen(false);
  };

  return (
    <div className="flex h-full w-full bg-slate-950 text-slate-100 font-sans overflow-hidden selection:bg-lime-500/30">
      <style>{`
        @keyframes blob-pulse {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.05) translate(2%, -1%); }
          66% { transform: scale(0.95) translate(-1%, 2%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes wave-pulse {
          0% { transform: scale(0.85); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(0.85); opacity: 0.6; }
        }
        @keyframes liquid-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .liquid-pulse {
          animation: blob-pulse 5s ease-in-out infinite;
        }
        .liquid-wave {
          animation: wave-pulse 3s ease-in-out infinite;
        }
        .liquid-rotate {
          animation: liquid-rotate 20s linear infinite;
        }
      `}</style>

      {/* Background Animation */}
      {launchState !== 'running' && <BackgroundAnimation />}

      {launchState !== 'running' ? (
        <div className="relative h-full w-full bg-slate-950 overflow-hidden font-sans select-none flex flex-col">
          {/* Status Bar */}
          <div className="absolute top-0 w-full h-10 bg-black/40 backdrop-blur-md border-b border-white/5 flex justify-between px-6 items-center z-20">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse shadow-lg shadow-lime-500/50" />
                 <span className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.2em] uppercase">Security Level: High</span>
               </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
              <Wifi size={14} /> <Battery size={14} />
              <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 py-12">
            <div 
              className={`
                flex flex-col items-center gap-8 md:gap-12 transition-all duration-700 w-full max-w-5xl
                ${launchState === 'launching' ? 'scale-150 opacity-0 blur-3xl' : 'scale-100 opacity-100'}
              `}
            >
              {/* Circle Liquid Voice Pulse Container */}
              <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
                <div className="absolute inset-0 liquid-wave bg-lime-500/20 rounded-full blur-2xl"></div>
                <div className="absolute inset-4 liquid-wave bg-sky-500/10 rounded-full blur-2xl [animation-delay:1.5s]"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-lime-500/40 via-transparent to-sky-500/40 rounded-full liquid-rotate blur-xl opacity-60"></div>
                <div className="relative w-28 h-28 md:w-44 md:h-44 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center z-10 liquid-pulse shadow-[0_0_60px_rgba(132,204,22,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.1),transparent_70%)] animate-pulse"></div>
                  <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border border-white/5">
                    {!launcherImgError ? (
                      <img 
                        src={launcherImgSrc} 
                        alt="Identity" 
                        className="w-full h-full object-cover grayscale-[10%] contrast-[110%] transition-all duration-1000"
                        onError={() => setLauncherImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                         <BioDigitalCore />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-6 flex items-end justify-center gap-1.5 h-10 md:h-12 w-32 overflow-hidden pointer-events-none opacity-60">
                   {[1,2,3,4,5,6,7].map(i => (
                     <div 
                       key={i} 
                       className="w-1.5 bg-lime-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.5)]" 
                       style={{ 
                         height: `${30 + Math.random() * 70}%`,
                         animationDuration: `${0.8 + Math.random() * 1.5}s`,
                         animationDelay: `${i * 0.1}s`
                       }}
                     ></div>
                   ))}
                </div>
              </div>

              <div className="text-center space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-5xl font-light tracking-tight leading-tight text-white/90">
                  Intelligence bridge between <br/>
                  <span className="italic font-black text-lime-400">biotech</span> and <span className="italic font-black text-white">social consumer products</span>,<br/>
                  <span className="italic font-black text-sky-400">AI automation.</span>
                </h2>
                
                <div className="pt-6 md:pt-10 space-y-8 md:space-y-12">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-[10px] font-mono tracking-[0.4em] text-slate-500 uppercase flex items-center justify-center gap-3">
                      <ShieldCheck size={12} className="text-lime-500" />
                      Identify Yourself
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4">
                      <PersonaButton 
                        icon={<TrendingUp size={18} />} 
                        label="Investor" 
                        selected={selectedPersona === 'investor'}
                        onClick={() => setSelectedPersona('investor')} 
                      />
                      <PersonaButton 
                        icon={<FlaskConical size={18} />} 
                        label="Researcher" 
                        selected={selectedPersona === 'researcher'}
                        onClick={() => setSelectedPersona('researcher')} 
                      />
                      <PersonaButton 
                        icon={<Handshake size={18} />} 
                        label="Collaborator" 
                        selected={selectedPersona === 'collaborator'}
                        onClick={() => setSelectedPersona('collaborator')} 
                      />
                      <PersonaButton 
                        icon={<Eye size={18} />} 
                        label="Curious" 
                        selected={selectedPersona === 'curious'}
                        onClick={() => setSelectedPersona('curious')} 
                      />
                    </div>
                  </div>

                  <button 
                    disabled={!selectedPersona}
                    onClick={() => handleLaunch(selectedPersona || 'curious')}
                    className={`
                      group relative px-12 md:px-16 py-4 md:py-5 rounded-full text-white font-mono tracking-[0.8em] text-[10px] md:text-xs uppercase transition-all overflow-hidden
                      ${selectedPersona 
                        ? 'bg-lime-500 hover:bg-lime-400 text-slate-950 shadow-[0_0_40px_rgba(132,204,22,0.3)] hover:scale-105 active:scale-95' 
                        : 'bg-white/5 text-slate-600 border border-white/10 cursor-not-allowed'}
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      CLICK TO ENTER
                      {selectedPersona && <ArrowRight size={14} className="animate-bounce-x" />}
                    </span>
                    {selectedPersona && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full bg-slate-950 text-slate-100 font-sans overflow-hidden selection:bg-lime-500/30 animate-in zoom-in-95 duration-500">
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
            onNavigate={handleNavigate}
            onReset={handleReset}
          />

          <main className="flex-1 relative flex flex-col h-full overflow-hidden">
            {/* Desktop Status Bar */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 md:px-8 bg-slate-950/50 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse shadow-lg shadow-lime-500/50" />
                   <span className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.4em] uppercase">Identity Link: Gobinath // Active</span>
                </div>
                <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"><Menu size={20}/></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto pb-40 md:pb-48 px-4 md:px-0 scroll-smooth">
              <div className="max-w-4xl mx-auto w-full">
                {messages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} />
                ))}
                {isTyping && (
                   <div className="w-full p-6 md:p-10 animate-in fade-in">
                     <div className="flex gap-4 md:gap-6 max-w-3xl mx-auto">
                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                          <Sparkles size={18} className="text-lime-500 animate-pulse" />
                        </div>
                        <span className="text-slate-500 text-sm font-mono tracking-widest pt-2 uppercase">Syncing Archive...</span>
                     </div>
                   </div>
                )}
                <div ref={scrollRef} className="h-4" />
              </div>
            </div>

            {/* Sticky Chat Input */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pt-8 pb-6 md:pb-10 px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <ChatInput onSend={handleUserMessage} disabled={isTyping} />
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

const PersonaButton = ({ icon, label, onClick, selected }: { icon: React.ReactNode, label: string, onClick: () => void, selected: boolean }) => (
  <button 
    onClick={onClick}
    className={`
      group flex flex-col items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-6 rounded-2xl md:rounded-3xl transition-all duration-300 border backdrop-blur-md relative overflow-hidden
      ${selected 
        ? 'bg-lime-500/10 border-lime-500/50 shadow-[0_0_25px_rgba(132,204,22,0.15)] scale-105' 
        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 scale-100'}
    `}
  >
    {selected && (
      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-lime-500 rounded-full shadow-[0_0_8px_#a3e635] animate-pulse"></div>
    )}
    <div className={`
      p-2.5 md:p-3.5 rounded-xl md:rounded-2xl transition-all duration-300
      ${selected ? 'bg-lime-500 text-slate-950' : 'bg-slate-900 text-slate-400 group-hover:text-white'}
    `}>
      {icon}
    </div>
    <span className={`
      text-[9px] md:text-[11px] font-mono uppercase tracking-[0.2em] transition-colors
      ${selected ? 'text-lime-400 font-bold' : 'text-slate-500 group-hover:text-slate-300'}
    `}>
      {label}
    </span>
  </button>
);

export default App;