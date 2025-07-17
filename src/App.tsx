import React from 'react';
import { useAnimations } from './hooks/useAnimations';
import { useTutorial } from './hooks/useTutorial';
import { useMLProcessing } from './hooks/useMLProcessing';
import { BackgroundElements } from './components/BackgroundElements';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { OutputsSection } from './components/OutputsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { Footer } from './components/Footer';
import { ProcessingOverlay } from './components/ProcessingOverlay';
import { TutorialModal } from './components/TutorialModal';

function App() {
  const { animatedElements } = useAnimations();
  const { 
    showTutorial, 
    tutorialStep, 
    tutorialSteps, 
    startTutorial, 
    nextTutorialStep, 
    closeTutorial 
  } = useTutorial();
  const { 
    mlProblem, 
    setMlProblem, 
    isProcessing, 
    handleSubmit 
  } = useMLProcessing();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      <BackgroundElements />

      <Header
        mlProblem={mlProblem}
        setMlProblem={setMlProblem}
        isProcessing={isProcessing}
        onSubmit={handleSubmit}
        onStartTutorial={startTutorial}
      />

      <HeroSection
        isVisible={animatedElements.has('hero')}
        onStartTutorial={startTutorial}
      />

      <FeaturesSection
        isVisible={animatedElements.has('features')}
      />

      <OutputsSection
        isVisible={animatedElements.has('outputs')}
      />

      <WorkflowSection
        isVisible={animatedElements.has('workflow')}
      />

      <Footer />

      <ProcessingOverlay isVisible={isProcessing} />

      <TutorialModal
        isVisible={showTutorial}
        currentStep={tutorialStep}
        steps={tutorialSteps}
        onNext={nextTutorialStep}
        onClose={closeTutorial}
      />
    </div>
  );
}

export default App;