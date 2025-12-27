
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, BrainCircuit, Database, Cpu, Globe, Rocket } from 'lucide-react';
import NBAValidationDashboard from '../components/NBAValidationDashboard';

const Home: React.FC = () => {
  const skills = [
    { name: 'Python', icon: <Code2 size={16} />, color: 'text-blue-400' },
    { name: 'FastAPI', icon: <Rocket size={16} />, color: 'text-emerald-400' },
    { name: 'Scikit-learn', icon: <BrainCircuit size={16} />, color: 'text-orange-400' },
    { name: 'C++', icon: <Cpu size={16} />, color: 'text-indigo-400' },
    { name: 'PostgreSQL', icon: <Database size={16} />, color: 'text-sky-400' },
    { name: 'React', icon: <Globe size={16} />, color: 'text-cyan-400' },
    { name: 'Gemini API', icon: <BrainCircuit size={16} />, color: 'text-purple-400' },
    { name: 'Docker', icon: <Rocket size={16} />, color: 'text-blue-500' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              David <span className="text-indigo-500">Kornblit</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-8">
              B.Sc. Computer Science student at Multidisciplinary College Jerusalem (2022-2026), 
              specializing in <span className="text-white font-medium">AI & Data-driven systems</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-all">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Flagship Project Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <span className="text-indigo-500 font-bold uppercase tracking-widest text-sm">Flagship Project</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">NBA AI Assistant Coach</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                A real-time decision support system utilizing <span className="text-white">Scikit-learn</span> for NBA timeout optimization. 
                The system analyzes game flow, momentum shifts, and lineup efficiency to provide optimal coaching suggestions.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
               <h3 className="text-white font-semibold mb-2">Technical Insight</h3>
               <p className="text-slate-400 text-sm italic">
                "The system validates data integrity, such as tracking timeout inventory and confirming Shot Clock logic 
                (identifying peaks at 24s and 14s through computer vision-derived timestamps)."
               </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Python', 'Scikit-learn', 'Computer Vision', 'Data Validation'].map((t) => (
                <span key={t} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-medium uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <NBAValidationDashboard />
        </div>
      </section>

      {/* Skills Marquee/Grid */}
      <section className="bg-slate-900/30 py-20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-12">Core Technical Proficiency</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all group">
                <div className={`${skill.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <span className="text-slate-300 text-xs font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to innovate with data?</h2>
        <p className="text-slate-400 mb-8">
          I'm currently looking for internship opportunities in Software Engineering and AI Research starting in late 2024.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-indigo-50 transition-all">
          Contact Me <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
