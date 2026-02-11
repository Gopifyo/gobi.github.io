
import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) {
        onSend(value);
        setValue('');
      }
    }
  };

  return (
    <div className="relative w-full bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 focus-within:border-lime-500/30 focus-within:ring-1 focus-within:ring-lime-500/30 transition-all duration-300">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Send a message..."
        rows={1}
        className="w-full m-0 w-full resize-none border-0 bg-transparent p-5 pr-14 pl-5 text-slate-200 placeholder-slate-600 focus:ring-0 focus-visible:ring-0 md:pl-6 max-h-[200px] overflow-y-hidden text-base leading-relaxed"
        style={{ height: 'auto', minHeight: '64px' }}
        disabled={disabled}
      />
      <button 
        onClick={() => {
          if (value.trim() && !disabled) {
            onSend(value);
            setValue('');
          }
        }}
        disabled={!value.trim() || disabled}
        className="absolute bottom-3 right-3 p-2.5 rounded-xl text-slate-500 hover:bg-lime-500 hover:text-white disabled:hover:bg-transparent disabled:hover:text-slate-600 disabled:opacity-40 transition-all duration-200"
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
