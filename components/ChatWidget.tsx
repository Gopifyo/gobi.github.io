
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Loader2, Sparkles, Bot, User } from 'lucide-react';
import { EXPERIENCES, SKILLS, PUBLICATIONS, EDUCATION, PROJECTS, SOCIAL_LINKS, PROFILE_IMAGE } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Yo! I'm the Vibe Agent. I know everything about Gobinath's work in Agentic AI and Bio-engineering. Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session with Portfolio Context
  useEffect(() => {
    if (!process.env.API_KEY) return;

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = `
      You are the "Vibe Agent" for Gobinath Chithiravelu's personal portfolio.
      Your persona is professional, high-energy, and technical—matching his "Vibe Coder" brand.
      
      Here is Gobinath's complete profile data:
      - Projects: ${JSON.stringify(PROJECTS)}
      - Experience: ${JSON.stringify(EXPERIENCES)}
      - Skills: ${JSON.stringify(SKILLS)}
      - Education: ${JSON.stringify(EDUCATION)}
      - Publications: ${JSON.stringify(PUBLICATIONS)}
      - Socials: ${JSON.stringify(SOCIAL_LINKS)}

      Guidelines:
      1. Answer questions specifically about Gobinath based on this data.
      2. If asked about "Agentic AI" or "Social Consumer Products", emphasize his specific projects like "Vibe-Engage AI" and "Bio-Insight Agent".
      3. Keep responses concise (under 3-4 sentences) unless asked for deep detail.
      4. Use a slightly casual, tech-forward tone (e.g., "shipped," "scaled," "stack").
      5. If asked for contact info, provide his email: ${SOCIAL_LINKS.email}.
      6. Do not make up facts. If you don't know, suggest they contact him directly.
    `;

    try {
      const session = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction },
      });
      setChatSession(session);
    } catch (e) {
      console.error("Failed to init chat", e);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessageStream({ message: userMessage });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of result) {
        const text = chunk.text;
        if (text) {
            fullResponse += text;
            setMessages(prev => {
                const newMsgs = [...prev];
                newMsgs[newMsgs.length - 1].text = fullResponse;
                return newMsgs;
            });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "My neural link is a bit staticky right now. Try again in a sec." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const Avatar = ({ size = "w-8 h-8", iconSize = 18 }: { size?: string, iconSize?: number }) => {
    const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE);
    const [error, setError] = useState(false);

    return (
      <div className={`${size} rounded-lg overflow-hidden border border-teal-500/20 flex items-center justify-center bg-gray-900 shrink-0`}>
          {!error ? (
              <img 
                  src={imgSrc} 
                  alt="Agent" 
                  className="w-full h-full object-cover"
                  onError={() => {
                       setError(true);
                  }}
              />
          ) : (
              <Bot size={iconSize} className="text-teal-500" />
          )}
      </div>
    );
  };

  const ChatMessageAvatar = () => {
      const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE);
      const [error, setError] = useState(false);

      return (
        <div className="w-8 h-8 rounded-full border border-teal-500/20 overflow-hidden shrink-0 flex items-center justify-center bg-gray-900">
             {!error ? (
                 <img 
                    src={imgSrc} 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                    onError={() => {
                       setError(true);
                    }}
                 />
             ) : (
                 <Bot size={16} className="text-teal-500" />
             )}
        </div>
      );
  };

  const FloatingToggleIcon = () => {
    const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE);
    const [error, setError] = useState(false);

    if (error) return <MessageCircle size={28} className="fill-current" />;

    return (
      <img 
        src={imgSrc} 
        alt="Open Chat" 
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
        onError={() => setError(true)}
      />
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[90vw] md:w-[400px] h-[60vh] max-h-[600px] bg-gray-950/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-teal-500/10 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-teal-500/10 to-transparent border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar />
              <div>
                <h3 className="text-sm font-black text-white tracking-wide uppercase">Vibe Agent</h3>
                <p className="text-[10px] text-teal-400/80 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span> ONLINE
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && <ChatMessageAvatar />}
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-teal-500 text-gray-950 font-medium rounded-tr-sm' 
                      : 'bg-white/5 border border-white/5 text-gray-300 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                   <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center shrink-0">
                     <User size={14} className="text-gray-400" />
                   </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <ChatMessageAvatar />
                <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm">
                   <span className="flex gap-1">
                     <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                     <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                     <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                   </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-gray-950/50">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-teal-500/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my projects..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-gray-500"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-teal-500/10 hover:bg-teal-500 text-teal-500 hover:text-gray-900 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="mt-2 flex gap-2 justify-center">
              <button onClick={() => setInput("What is Agentic AI?")} className="text-[10px] text-gray-500 hover:text-teal-400 transition-colors">"What is Agentic AI?"</button>
              <button onClick={() => setInput("Tell me about your bio-engineering work")} className="text-[10px] text-gray-500 hover:text-teal-400 transition-colors">"Bio-engineering work?"</button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden border-2 ${
          isOpen ? 'bg-gray-800 text-white rotate-90 border-white/10' : 'bg-gradient-to-tr from-teal-500 to-blue-600 text-white border-transparent'
        }`}
      >
        <div className={`absolute inset-0 rounded-full bg-teal-400 opacity-20 animate-ping ${isOpen ? 'hidden' : 'block'}`}></div>
        {isOpen ? <X size={24} /> : <FloatingToggleIcon />}
      </button>
    </div>
  );
};

export default ChatWidget;
