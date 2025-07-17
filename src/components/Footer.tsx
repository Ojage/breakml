import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <span className="text-3xl font-bold">
              Break<span className="text-yellow-400">ML</span>
            </span>
            <span className="text-3xl">🌍</span>
          </div>
          <div className="text-gray-300 text-xl">
            <p>Zero ML grunt work. Maximum insights. <span className="text-2xl">✨</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};