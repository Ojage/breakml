import { useState, useEffect } from 'react';

export const useAnimations = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set<string>());

  useEffect(() => {
    const elements = ['hero', 'features', 'outputs', 'workflow'];
    elements.forEach((element, index) => {
      setTimeout(() => {
        setAnimatedElements(prev => new Set([...prev, element]));
      }, index * 200);
    });
  }, []);

  return { animatedElements };
};