import React from 'react';
import { Search, Sparkles, ArrowRight, Zap, Play } from 'lucide-react';

interface HeaderProps {
  mlProblem: string;
  setMlProblem: (value: string) => void;
  isProcessing: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onStartTutorial: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mlProblem,
  setMlProblem,
  isProcessing,
  onSubmit,
  onStartTutorial
}) => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-lg border-b border-orange-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-3xl font-bold text-white">
              Break<span className="text-yellow-300">ML</span>
            </h1>
          </div>
          
          <form onSubmit={onSubmit} className="flex-1 max-w-2xl mx-8">
            <div className="relative group">
              <input
                type="text"
                value={mlProblem}
                onChange={(e) => setMlProblem(e.target.value)}
                placeholder="Describe your ML problem... 🌍"
                className="w-full px-6 py-4 pl-14 text-lg border-2 border-orange-300 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300/50 focus:border-yellow-400 shadow-xl transition-all duration-300 group-hover:shadow-2xl bg-white/95"
                disabled={isProcessing}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-orange-500 group-hover:text-orange-600 transition-colors" />
              <button
                type="submit"
                disabled={isProcessing || !mlProblem.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {isProcessing ? (
                  <>
                    <Zap className="w-5 h-5 animate-spin" />
                    <span className="font-semibold">Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="font-semibold">Analyze</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          <button
            onClick={onStartTutorial}
            className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Play className="w-5 h-5" />
            <span>Tutorial</span>
          </button>
        </div>
      </div>
    </div>
  );
};