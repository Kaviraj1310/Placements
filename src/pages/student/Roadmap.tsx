import React, { useState } from 'react';
import { Settings, RefreshCw, Clock, Map as MapIcon, ChevronRight } from 'lucide-react';
import { mockStudent } from '../../data/mockData';

const RoadmapPage = () => {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <MapIcon className="text-blue-600" /> Personalized Roadmap
        </h1>
        <button 
          onClick={() => setShowConfig(!showConfig)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Settings size={16} /> Configure
        </button>
      </div>

      {showConfig && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 animate-in fade-in slide-in-from-top-4">
          <h3 className="font-semibold text-slate-800 mb-4">Adjust Roadmap Parameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-xs text-slate-500 mb-1">Target Company</label>
              <select className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                <option>Microsoft</option>
                <option>Amazon</option>
                <option>Google</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Days Remaining</label>
              <input type="number" defaultValue={90} className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Hours/Day</label>
              <input type="number" defaultValue={2} className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <RefreshCw size={16} /> Regenerate Roadmap
          </button>
        </div>
      )}

      <div className="space-y-6">
        {Object.entries(mockStudent.roadmap).map(([day, tasks]) => (
          <div key={day} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800 capitalize">{day}</h3>
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Clock size={14}/> {tasks.reduce((acc, t) => acc + t.duration, 0)} mins total
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {tasks.map((task, idx) => (
                <div key={idx} className="p-4 px-6 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-sm">
                      {task.duration}m
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">{task.task}</div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
