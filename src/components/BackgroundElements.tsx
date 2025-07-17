import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 transform rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-5 h-5 bg-green-400 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </>
  );
};