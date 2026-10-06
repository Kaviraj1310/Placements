import React from 'react';
import { dsaPatterns } from '../../data/mockData';
import { Target, Lightbulb, ChevronRight, BookOpen, Code, Trophy } from 'lucide-react';

const DSAPatterns = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Master DSA Patterns</h1>
        <p className="text-purple-100 max-w-2xl text-lg mb-6">
          Don't memorize solutions. Learn the underlying patterns to solve any unseen problem in your interview.
        </p>
        <div className="flex gap-4">
          <div className="bg-white/10 rounded-lg p-3 px-5 backdrop-blur-sm">
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs uppercase tracking-wider text-purple-200">Core Patterns</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 px-5 backdrop-blur-sm">
            <div className="text-2xl font-bold">4</div>
            <div className="text-xs uppercase tracking-wider text-purple-200">Mastered</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dsaPatterns.map(pattern => (
          <div key={pattern.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            {pattern.mastery > 80 && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                <Trophy size={12} /> Mastered
              </div>
            )}
            
            <h3 className="text-lg font-bold text-slate-800 mb-2">{pattern.name}</h3>
            
            <div className="mb-4">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Mastery</span>
                <span>{pattern.mastery}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${pattern.mastery > 80 ? 'bg-green-500' : pattern.mastery > 50 ? 'bg-blue-500' : 'bg-orange-500'}`} 
                  style={{ width: `${pattern.mastery}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <button className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 text-sm font-medium text-slate-700 hover:bg-slate-100">
                <span className="flex items-center gap-2"><Lightbulb size={16} className="text-amber-500"/> How to recognize it</span>
                <ChevronRight size={16} className="text-slate-400" />
              </button>
              <button className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 text-sm font-medium text-slate-700 hover:bg-slate-100">
                <span className="flex items-center gap-2"><Code size={16} className="text-blue-500"/> Example Problem</span>
                <ChevronRight size={16} className="text-slate-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
          <Target className="text-blue-600" /> Let's Practice: Sliding Window
        </h3>
        <p className="text-blue-800 mb-4 text-sm">
          "Find the longest substring without repeating characters."
        </p>
        
        <div className="bg-white rounded-xl p-4 border border-blue-100 space-y-4">
          <div className="text-sm">Instead of diving into code, let's break it down:</div>
          
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="font-medium text-slate-700 text-sm">Step 1: Is it asking for a contiguous sequence (substring/subarray)?</div>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 bg-white border border-slate-300 rounded text-sm hover:bg-blue-50">Yes</button>
              <button className="px-3 py-1 bg-white border border-slate-300 rounded text-sm hover:bg-blue-50">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAPatterns;
