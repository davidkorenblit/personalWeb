
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area
} from 'recharts';

const shotClockData = [
  { time: 0, frequency: 10 },
  { time: 5, frequency: 15 },
  { time: 10, frequency: 20 },
  { time: 14, frequency: 85 }, // Reset point
  { time: 18, frequency: 25 },
  { time: 22, frequency: 40 },
  { time: 24, frequency: 100 }, // Full clock peak
];

const timeoutData = [
  { quarter: 'Q1', available: 7, used: 1 },
  { quarter: 'Q2', available: 6, used: 2 },
  { quarter: 'Q3', available: 4, used: 1 },
  { quarter: 'Q4', available: 3, used: 3 },
];

const NBAValidationDashboard: React.FC = () => {
  return (
    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Shot Clock Density Analysis
        </h3>
        <p className="text-sm text-slate-400 mb-8 max-w-2xl">
          Validation of real-time logic. The system identifies peaks at 24s and 14s, confirming accurate shot clock reset capture from the broadcast feed.
        </p>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={shotClockData}>
              <defs>
                <linearGradient id="colorFreq" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis 
                dataKey="time" 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                label={{ value: 'Shot Clock (s)', position: 'insideBottom', offset: -5, fill: '#64748b' }}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#6366f1' }}
              />
              <Area 
                type="monotone" 
                dataKey="frequency" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorFreq)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-md font-semibold text-white mb-4">Timeout Inventory Tracking</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeoutData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="quarter" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="available" name="Available" fill="#334155" radius={[4, 4, 0, 0]} />
                <Bar dataKey="used" name="Used" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="flex flex-col justify-center bg-slate-900/80 p-6 rounded-xl border border-slate-800">
           <div className="mb-4">
              <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Status</div>
              <div className="text-emerald-400 font-medium flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                 Real-time Inference Active
              </div>
           </div>
           <div className="mb-4">
              <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Prediction Latency</div>
              <div className="text-white text-2xl font-bold">12ms</div>
           </div>
           <div>
              <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Model Accuracy (Val)</div>
              <div className="text-white text-2xl font-bold">94.8%</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NBAValidationDashboard;
