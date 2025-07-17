import { Database, BarChart3, FileText } from 'lucide-react';

export interface Output {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  pattern: string;
}

export const outputs: Output[] = [
  {
    icon: Database,
    title: "Clean Dataset",
    description: "Preprocessed, analysis-ready data",
    pattern: "dots"
  },
  {
    icon: BarChart3,
    title: "Visualized Insights",
    description: "Charts and graphs revealing patterns",
    pattern: "waves"
  },
  {
    icon: FileText,
    title: "ML-Ready Notebook",
    description: "Code and recommendations included",
    pattern: "triangles"
  }
];