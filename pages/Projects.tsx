
import React from 'react';
import { Github, ExternalLink, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const allProjects = [
    {
      id: 'nba-ai',
      title: 'NBA AI Assistant Coach',
      category: 'Machine Learning',
      description: 'Real-time decision support system for NBA timeout optimization using Scikit-learn and computer vision data.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'OpenCV'],
      github: 'https://github.com/davidkorenblit',
    },
    {
      id: 'nutrition',
      title: 'Nutrition Tracker Pro',
      category: 'Full Stack',
      description: 'A production-ready full-stack application for managing dietary goals and metabolic tracking.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'JWT'],
      video: 'https://www.youtube.com/embed/ZZTpMEuCRvA',
      github: 'https://github.com/davidkorenblit',
    },
    {
      id: 'tech-news',
      title: 'Tech News AI',
      category: 'NLP / ETL',
      description: 'Automated ETL pipeline that scrapes tech articles and classifies them into meaningful categories using fine-tuned models.',
      tech: ['Python', 'Scrapy', 'Transformers', 'FastAPI'],
      github: 'https://github.com/davidkorenblit',
    },
    {
      id: 'chess-pred',
      title: 'Chess Victory Prediction',
      category: 'Data Science',
      description: 'Predicting game outcomes based on opening sequences and ELO ratings using logistic regression and ensemble methods.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Sklearn'],
      github: 'https://github.com/davidkorenblit',
    },
    {
      id: 'fantasy-fb',
      title: 'Fantasy Football Analyzer',
      category: 'Data Engineering',
      description: 'Real-time data fetcher and analyst for performance metrics using external APIs to optimize roster selection.',
      tech: ['Python', 'Pandas', 'Requests', 'FastAPI'],
      github: 'https://github.com/davidkorenblit',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Engineering Projects</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          A collection of systems ranging from real-time AI assistants to robust full-stack production applications.
        </p>
      </header>

      <div className="space-y-32">
        {allProjects.map((project, idx) => (
          <div key={project.id} className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              {project.video ? (
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.video} 
                    title={project.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="bg-slate-900"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 shadow-2xl flex items-center justify-center">
                   <div className="text-center p-8">
                      <div className="mb-4 inline-block p-4 rounded-full bg-slate-800">
                         <Github size={48} className="text-indigo-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-500 text-sm">Visual assets available on GitHub repository</p>
                   </div>
                </div>
              )}
            </div>

            <div className={`lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="space-y-6">
                <div>
                  <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs">{project.category}</span>
                  <h2 className="text-3xl font-bold text-white mt-1">{project.title}</h2>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-900 text-slate-300 border border-slate-800 rounded-md text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium"
                  >
                    <Github size={20} /> View Source
                  </a>
                  {project.video && (
                    <a 
                      href={project.video.replace('embed/', 'watch?v=')} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium"
                    >
                      <Play size={20} /> Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
