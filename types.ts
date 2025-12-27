
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  longDescription?: string;
  videoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Frontend' | 'Backend' | 'Data Science' | 'Tools';
}
