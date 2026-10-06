import React from 'react';
import { Code2, BrainCircuit, Database, Server, Terminal, Play } from 'lucide-react';

const PracticeHub = () => {
  const categories = [
    {
      title: "Coding & DSA",
      icon: Code2,
      color: "text-blue-600",
      bg: "bg-blue-50",
      items: ["Daily Challenge", "Topic-wise Practice", "Company Specific"]
    },
    {
      title: "Aptitude",
      icon: BrainCircuit,
      color: "text-purple-600",
      bg: "bg-purple-50",
      items: ["Quantitative", "Logical Reasoning", "Verbal Ability"]
    },
    {
      title: "Core CS",
      icon: Database,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      items: ["DBMS & SQL", "Operating Systems", "Computer Networks", "OOP"]
    },
    {
      title: "System Design",
      icon: Server,
      color: "text-orange-600",
      bg: "bg-orange-50",
      items: ["Beginner Problems", "Scalability Concepts", "Guided Case Studies"]
    },
    {
      title: "Pseudocode",
      icon: Terminal,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      items: ["Output Prediction", "Code Tracing", "Debugging"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Practice Hub</h1>
          <p className="text-slate-500">Targeted practice based on your skill gaps.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Daily Challenge
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className={`w-12 h-12 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-4">{cat.title}</h2>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-slate-600 hover:text-blue-600 group/item">
                    <span className="text-sm font-medium">{item}</span>
                    <Play size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default PracticeHub;
