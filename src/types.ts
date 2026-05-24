export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CodeSnippet {
  code: string;
  language: string;
  fileName?: string;
  explanation?: string;
}

export interface LessonSection {
  title: string;
  type: 'text' | 'code' | 'callout' | 'real-world';
  content: string; // MDX / markdown-like text
  codeSnippet?: CodeSnippet;
  calloutType?: 'info' | 'tip' | 'warning' | 'danger';
}

export interface CapstoneProject {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate';
  skillsApplied: string[];
  steps: string[];
  starterCode?: string;
  mockupDescription: string;
  badgeUrl: string;
}

export interface Lesson {
  id: string; // 'part-1', etc.
  partNumber: number;
  title: string;
  estimatedReadTime: string;
  topics: string[];
  keyTopicsExplanation: string;
  sections: LessonSection[];
  quiz: QuizQuestion[];
  keyTakeaways: string[];
  codeTemplate?: string;
  codeSolution?: string;
  expectedOutput?: string;
}

export interface Course {
  id: string; // 'csharp', 'java', 'python', 'javascript', 'react', 'nextjs'
  name: string;
  tagline: string;
  primaryUse: string;
  duration: string;
  difficulty: 'Beginner' | 'Beginner-Intermediate' | 'Intermediate';
  lessonsCount: number;
  color: string; // CSS color string e.g., 'var(--csharp)'
  textColor: string; // hex or tailwind class for the icon/badge
  description: string;
  whyLearn: string[];
  realWorldUseCases: string[];
  whoIsThisFor: string[];
  capstone: CapstoneProject;
  lessons: Lesson[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: 'Tutorials' | 'Comparisons' | 'Career Guides' | 'Cheatsheets' | 'Project Ideas';
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  tags: string[];
}
