import React from 'react';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  isVisible: boolean;
  onStartTutorial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, onStartTutorial }) => {
  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block text-8xl animate-bounce">🌍</span>
            <span className="inline-block text-6xl animate-pulse ml-4">⚡</span>
            <span className="inline-block text-7xl animate-bounce ml-4" style={{ animationDelay: '0.5s' }}>🚀</span>
          </div>

          <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 mb-8 animate-pulse">
            Zero <span className="text-yellow-500">ML</span> Grunt Work
          </h2>

          <p className="text-2xl text-gray-700 mb-12 leading-relaxed font-medium">
            BreakML lets you define your machine learning problem in plain English or pidgin; and does the data sourcing, cleaning, and prepping for you.
            Build smarter, <span className="text-orange-600 font-bold">faster</span>, and with zero grunt work.
          </p>

          <div className="flex items-center justify-center space-x-12 text-lg text-gray-600 mb-16">
            <div className="flex items-center space-x-3 group">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
              <span className="font-semibold">Auto-scraping active</span>
              <span className="text-2xl animate-bounce">🔍</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: '0.5s' }}></div>
              <span className="font-semibold">AI preprocessing ready</span>
              <span className="text-2xl animate-spin" style={{ animationDuration: '3s' }}>⚙️</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: '1s' }}></div>
              <span className="font-semibold">EDA engines online</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '1s' }}>📊</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <button
              onClick={onStartTutorial}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center space-x-3"
            >
              <Play className="w-6 h-6" />
              <span>See How It Works</span>
              <span className="text-2xl">🎬</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};