import React from 'react';
import { outputs } from '../data/outputs';

interface OutputsSectionProps {
  isVisible: boolean;
}

export const OutputsSection: React.FC<OutputsSectionProps> = ({ isVisible }) => {
  return (
    <section className={`py-24 bg-gradient-to-br from-yellow-50 to-orange-100 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">🎁</div>
          <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-6">
            What You Get
          </h3>
          <p className="text-2xl text-gray-700 font-medium">
            Everything you need to jumpstart your ML project 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {outputs.map((output, index) => {
            const IconComponent = output.icon;
            return (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-orange-200 hover:border-orange-400 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {output.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {output.description}
                </p>
                <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};