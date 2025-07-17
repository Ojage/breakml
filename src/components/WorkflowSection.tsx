import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WorkflowSectionProps {
  isVisible: boolean;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ isVisible }) => {
  const workflowSteps = [
    {
      number: 1,
      title: "Describe Your Problem 💭",
      description: "Tell us what you want to predict or analyze",
      color: "from-blue-400 to-purple-500",
      hoverColor: "blue-600"
    },
    {
      number: 2,
      title: "AI Does the Work ⚡",
      description: "Automated scraping, cleaning, and analysis",
      color: "from-purple-400 to-pink-500",
      hoverColor: "purple-600"
    },
    {
      number: 3,
      title: "Get Results 🎁",
      description: "Clean data, insights, and ML-ready notebook",
      color: "from-green-400 to-teal-500",
      hoverColor: "green-600"
    }
  ];

  return (
    <section className={`py-24 bg-gradient-to-r from-green-50 to-teal-100 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">🌟</div>
          <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-6">
            How It Works
          </h3>
          <p className="text-2xl text-gray-700 font-medium">
            Simple input, powerful automation 🎯
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 text-center group">
                <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>
                <h4 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-${step.hoverColor} transition-colors`}>
                  {step.title}
                </h4>
                <p className="text-gray-700 text-lg">
                  {step.description}
                </p>
              </div>

              {index < workflowSteps.length - 1 && (
                <div className="flex items-center">
                  <ArrowRight className="w-12 h-12 text-orange-500 hidden md:block animate-pulse" />
                  <span className="text-4xl md:hidden animate-bounce">⬇️</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};