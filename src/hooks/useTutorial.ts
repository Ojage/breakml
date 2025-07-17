import { useState } from 'react';

export interface TutorialStep {
  title: string;
  description: string;
  action: string;
  visual: string;
  example?: string;
  progress?: number;
}

export const useTutorial = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  const tutorialSteps: TutorialStep[] = [
    {
      title: "Welcome to BreakML!",
      description: "Let me show you how we transform your ML problems into solutions automatically.",
      action: "Start Journey",
      visual: "🌍"
    },
    {
      title: "Describe Your Problem",
      description: "Simply type what you want to predict or analyze. Our AI understands natural language.",
      action: "Try It",
      visual: "💭",
      example: "Predict customer churn for my e-commerce business"
    },
    {
      title: "AI Data Collection",
      description: "We automatically scrape relevant datasets, APIs, and research papers from across the web.",
      action: "Watch Magic",
      visual: "🔍",
      progress: 25
    },
    {
      title: "Smart Preprocessing",
      description: "Our algorithms clean, standardize, and prepare your data without any manual work.",
      action: "See Process",
      visual: "⚡",
      progress: 60
    },
    {
      title: "Analysis & Insights",
      description: "Automated EDA reveals patterns and generates features for optimal model performance.",
      action: "View Results",
      visual: "📊",
      progress: 90
    },
    {
      title: "Your ML-Ready Package",
      description: "Get clean data, visualizations, and a complete notebook ready for modeling.",
      action: "Download",
      visual: "🎁",
      progress: 100
    }
  ];

  const startTutorial = () => {
    setShowTutorial(true);
    setTutorialStep(0);
  };

  const nextTutorialStep = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setShowTutorial(false);
      setTutorialStep(0);
    }
  };

  const closeTutorial = () => {
    setShowTutorial(false);
    setTutorialStep(0);
  };

  return {
    showTutorial,
    tutorialStep,
    tutorialSteps,
    startTutorial,
    nextTutorialStep,
    closeTutorial
  };
};