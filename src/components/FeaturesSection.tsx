import React from 'react';
import { features } from '../data/features';

interface FeaturesSectionProps {
  isVisible: boolean;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ isVisible }) => {
  return (
    <section className={`py-24 bg-gradient-to-r from-orange-100 to-red-100 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">🎭</div>
          <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-6">
            Automated ML Pipeline
          </h3>
          <p className="text-2xl text-gray-700 font-medium">
            From raw problem description to model-ready data in minutes ⚡
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center group transform hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`mx-auto w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mb-8 shadow-xl group-hover:shadow-2xl`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};