import { Globe, Brain, Settings, BarChart3 } from 'lucide-react';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export const features: Feature[] = [
  {
    icon: Globe,
    title: "Auto-Scrape & Query",
    description: "Automatically scrapes open datasets, APIs, news, forums, and scientific journals relevant to your use case.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Brain,
    title: "Intelligent Selection",
    description: "Smart algorithms select and infer the most relevant data, even when your input is vague or incomplete.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Settings,
    title: "Auto-Preprocessing",
    description: "Removes noise, handles nulls, standardizes formats, and prepares your data for machine learning.",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: BarChart3,
    title: "EDA & Feature Engineering",
    description: "Runs exploratory data analysis and feature engineering autonomously to optimize your dataset.",
    color: "from-yellow-400 to-orange-500"
  }
];