import React, { useEffect, useState } from 'react';


const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 
      ${!isVisible ? 'opacity-0 invisible transition-all duration-300' : ''}`}>
      <div className="flex flex-col items-center gap-8">
        <div className="w-36 h-auto relative animate-[pulse_1.5s_infinite]">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-full h-auto"
          />
        </div>
        
        <div className="w-48 h-[3px] bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#fc6767] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="font-['Poppins'] text-gray-700 text-sm tracking-wider opacity-80">
          Loading... {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;