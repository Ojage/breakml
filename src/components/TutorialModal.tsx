import React from 'react';
import { X, ChevronRight, CheckCircle, Search, Database, BarChart3, FileText } from 'lucide-react';
import { TutorialStep } from '../hooks/useTutorial';

interface TutorialModalProps {
  isVisible: boolean;
  currentStep: number;
  steps: TutorialStep[];
  onNext: () => void;
  onClose: () => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({
  isVisible,
  currentStep,
  steps,
  onNext,
  onClose
}) => {
  if (!isVisible) return null;

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border-4 border-orange-300 overflow-hidden">
        {/* Tutorial Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{step.visual}</div>
              <div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-orange-100">Step {currentStep + 1} of {steps.length}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-orange-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tutorial Content */}
        <div className="p-8">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {step.description}
          </p>

          {/* Example Input for Step 2 */}
          {currentStep === 1 && step.example && (
            <div className="mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-orange-200">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Try this example:</label>
                <div className="relative">
                  <input
                    type="text"
                    value={step.example}
                    readOnly
                    className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl bg-white text-gray-800"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" />
                </div>
              </div>
            </div>
          )}

          {/* Progress Bar for Processing Steps */}
          {step.progress && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Processing Progress</span>
                <span className="text-sm text-orange-600">{step.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full transition-all duration-1000"
                  style={{width: `${step.progress}%`}}
                ></div>
              </div>
            </div>
          )}

          {/* Mock Results for Final Step */}
          {currentStep === 5 && (
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <Database className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900">Clean Dataset</h4>
                <p className="text-sm text-blue-700">15,000 rows processed</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <BarChart3 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-semibold text-purple-900">Insights</h4>
                <p className="text-sm text-purple-700">12 visualizations</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <FileText className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-green-900">Notebook</h4>
                <p className="text-sm text-green-700">Ready to run</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
            
            <button
              onClick={onNext}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>{step.action}</span>
              {currentStep < steps.length - 1 ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <CheckCircle className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};