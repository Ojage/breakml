import React from 'react';
import { Zap } from 'lucide-react';

interface ProcessingOverlayProps {
  isVisible: boolean;
}

export const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-12 max-w-lg mx-4 text-center shadow-2xl border-4 border-orange-300">
        <div className="text-6xl mb-6 animate-bounce">🌍</div>
        <Zap className="w-20 h-20 text-orange-600 mx-auto mb-6 animate-spin" />
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Processing Your Request
        </h3>
        <p className="text-gray-600 mb-6 text-lg">
          Our AI is analyzing your problem and gathering relevant data from across the globe...
        </p>
        <div className="flex items-center justify-center space-x-3 text-sm text-gray-500">
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};