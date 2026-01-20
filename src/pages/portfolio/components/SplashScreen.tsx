
import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Content */}
      <div className={`text-center transform transition-all duration-1000 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
      }`}>
        {/* Name in District font style */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black tracking-tight leading-none">
            <span className="block font-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '900', letterSpacing: '-0.05em' }}>KAUSHIK</span>
            <span className="block font-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '900', letterSpacing: '-0.05em' }}>YEDDANAPUDI</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-black font-bold tracking-wide">
          Business Analyst | Data & Product Analytics
        </p>
        
        {/* Loading animation */}
        <div className="mt-12">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
