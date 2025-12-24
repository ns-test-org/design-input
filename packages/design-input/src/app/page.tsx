'use client';

import { useEffect, useState } from 'react';

const slogans = [
  "Turn chats into apps",
  "Prompt. Ship. Repeat.",
  "Build anything from a chat",
  "Ideas → Apps, instantly",
  "From zero to MVP in minutes",
  "Your cofounder in the command line",
  "Draft, iterate, deploy",
  "Ship faster than you can type",
  "Design in text, deliver in code",
  "Dream it. Prompt it. Run it.",
  "Chat-native app building",
  "From prompt to product",
  "One prompt, infinite apps",
  "Stop scaffolding. Start shipping.",
  "Prototype at the speed of thought",
  "Make conversations executable"
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Enhanced animated aurora background layers */}
      <div className="absolute inset-0 bg-aurora-layer-1" />
      <div className="absolute inset-0 bg-aurora-layer-2" />
      <div className="absolute inset-0 bg-aurora-layer-3" />
      
      {/* Floating particles overlay */}
      <div className="absolute inset-0 bg-particles" />
      
      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-center text-[clamp(28px,6vw,64px)] font-medium tracking-tight mb-4">
          Turn Chats into Apps
        </h1>
        
        {/* Rotating slogans */}
        <div className="mt-4 h-8 md:h-10 overflow-hidden flex items-center justify-center">
          <span
            className={`inline-block text-center text-[clamp(18px,3vw,32px)] font-light transition-all duration-[400ms] ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {slogans[currentIndex]}
          </span>
        </div>

        {/* Design Input Box */}
        <div className="mt-12 w-full max-w-2xl">
          <div className={`relative group transition-all duration-300 ${
            isFocused ? 'scale-[1.02]' : 'scale-100'
          }`}>
            {/* Glow effect on focus */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
              isFocused ? 'opacity-50' : ''
            }`} />
            
            {/* Input container */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 transition-opacity duration-300 ${
                isFocused ? 'opacity-20' : ''
              }`} />
              
              <div className="relative flex items-center gap-4 p-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <svg 
                    className="w-6 h-6 text-white/60" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                
                {/* Input field */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Describe what you want to build..."
                  className="flex-1 bg-transparent text-white placeholder-white/40 text-lg outline-none"
                />
                
                {/* Submit button */}
                <button 
                  className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    inputValue.trim() 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105' 
                      : 'bg-white/5 text-white/30 cursor-not-allowed'
                  }`}
                  disabled={!inputValue.trim()}
                >
                  Create
                </button>
              </div>
              
              {/* Character count */}
              {inputValue.length > 0 && (
                <div className="px-6 pb-4 text-xs text-white/40">
                  {inputValue.length} characters
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Start Prompting arrow pointing left - bottom left */}
      <div className="absolute left-6 md:left-8 bottom-[5%] z-20 flex items-center gap-3 arrow-point-left">
        <div className="flex items-center gap-2 text-white/80 font-medium text-sm md:text-base">
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 animate-bounce-horizontal" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Start prompting</span>
        </div>
      </div>
    </div>
  );
}

