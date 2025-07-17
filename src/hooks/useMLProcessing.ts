import { useState } from 'react';

export const useMLProcessing = () => {
  const [mlProblem, setMlProblem] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mlProblem.trim()) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return {
    mlProblem,
    setMlProblem,
    isProcessing,
    handleSubmit
  };
};