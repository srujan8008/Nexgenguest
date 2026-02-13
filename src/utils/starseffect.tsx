import React, { useEffect } from 'react';

const StarsEffect: React.FC = () => {
  useEffect(() => {
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer && starsContainer.children.length === 0) {
      const starCount = 50;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'absolute w-px h-px bg-slate-600 rounded-full opacity-30 animate-ping';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = '4s';
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div 
      id="stars-container" 
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30"
    />
  );
};

export default StarsEffect;