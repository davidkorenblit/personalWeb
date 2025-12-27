
import React from 'react';
import { Download, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Curriculum Vitae</h1>
          <p className="text-slate-400 italic">Specializing in Artificial Intelligence and Data Engineering</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20">
          <Download size={18} /> Download Resume
        </button>
      </div>

      <div className="grid gap-12">
        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          
          <div className="border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">B.Sc. Computer Science</h3>
                <span className="text-indigo-400 font-mono text-sm">2022 — 2026 (Expected)</span>
              </div>
              <p className="text-slate-300 font-medium mb-2">Multidisciplinary College Jerusalem (HMC)</p>
              <ul className="text-slate-400 space-y-2 list-disc list-inside">
                <li>Dean's List Honoree (GPA: 92/100)</li>
                <li>Specialization in Data Science and Machine Learning</li>
                <li>Coursework: Algorithms, Operating Systems, Statistics for CS, Deep Learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience / Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
              <Briefcase size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Key Projects & Experience</h2>
          </div>

          <div className="border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Lead Developer, NBA AI Assistant Coach</h3>
                <span className="text-emerald-400 font-mono text-sm">Jan 2024 — Present</span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Architected a real-time analytics engine to assist NBA coaching staff in timeout management.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Implemented CV-based shot clock detection with Scikit-learn validation.',
                  'Built predictive models for quarter-end momentum shifts.',
                  'Designed sub-15ms inference pipeline for live broadcast data.',
                  'Created automated data integrity dashboards for inventory tracking.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Project Lead, Nutrition Tracker Pro</h3>
                <span className="text-slate-500 font-mono text-sm">2023 — 2024</span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Full-stack production application developed to handle complex user dietary metrics.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Integrated FastAPI backend with PostgreSQL for relational data storage.',
                  'Implemented secure JWT authentication and route protection.',
                  'Designed responsive frontend using React and Tailwind CSS.',
                  'Optimized query performance for real-time macronutrient calculations.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-slate-600 mt-1 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-indigo-400 font-bold mb-4 uppercase text-xs tracking-widest">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'SQL', 'TypeScript', 'JavaScript'].map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-emerald-400 font-bold mb-4 uppercase text-xs tracking-widest">Backend & ML</h4>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'Scikit-learn', 'Pandas', 'Gemini API', 'PostgreSQL'].map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-purple-400 font-bold mb-4 uppercase text-xs tracking-widest">Tools & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Linux', 'Vercel', 'Jupyter'].map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
