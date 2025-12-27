
import React from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Note: This is a demo implementation)');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">Let's connect.</h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-12">
            I'm currently open to internships and junior software engineering roles focused on AI, 
            Data Systems, and Full-Stack Development.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:davidkorenblit@email.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  davidkorenblit@email.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">LinkedIn</h4>
                <a href="https://linkedin.com/in/davidkorenblit" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  linkedin.com/in/davidkorenblit
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-slate-400">Jerusalem, Israel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
              <input 
                type="text" 
                required
                placeholder="Collaboration Opportunity"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
              <textarea 
                rows={5}
                required
                placeholder="How can I help you?"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
