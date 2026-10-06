import React from 'react';
import { mockStudent } from '../../data/mockData';
import { Target, Calendar, TrendingUp, Clock, AlertCircle, CheckCircle2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Good evening, {mockStudent.name}</h1>
          <p className="text-blue-100 flex items-center gap-2">
            <Target size={18} /> Target: {mockStudent.targetCompany} — {mockStudent.targetRole}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4 text-center">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold">{mockStudent.daysRemaining}</div>
            <div className="text-sm text-blue-100 uppercase tracking-wide">Days Left</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold">{mockStudent.overallReadiness}%</div>
            <div className="text-sm text-blue-100 uppercase tracking-wide">Readiness</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column (Stats & Gaps) */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">This Week's Progress</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">+{mockStudent.progressThisWeek}%</div>
                <div className="text-sm text-slate-500">Readiness increase</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><Calendar size={12}/> Streak</div>
                <div className="font-semibold text-slate-800">{mockStudent.studyStreak} days</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><Clock size={12}/> Time</div>
                <div className="font-semibold text-slate-800">{mockStudent.timeSpentThisWeek}h</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Critical Skill Gaps</h2>
            <ul className="space-y-3">
              {mockStudent.topSkillGaps.map(gap => (
                <li key={gap} className="flex items-center gap-3 text-red-600 bg-red-50 p-3 rounded-xl border border-red-100 text-sm font-medium">
                  <AlertCircle size={18} />
                  {gap}
                </li>
              ))}
            </ul>
            <Link to="/practice" className="mt-4 block text-center text-sm text-blue-600 font-medium hover:underline">
              Practice weak areas &rarr;
            </Link>
          </div>
        </div>

        {/* Middle Column (Today's Plan) */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Today's Plan</h2>
              <Link to="/roadmap" className="text-sm text-blue-600 hover:underline">View Roadmap</Link>
            </div>
            <div className="space-y-3">
              {mockStudent.todaysPlan.map((task, idx) => (
                <div key={idx} className={`p-4 rounded-xl border flex items-center justify-between ${task.completed ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200 hover:border-blue-300 transition-colors'}`}>
                  <div className="flex items-center gap-3">
                    {task.completed ? (
                      <CheckCircle2 className="text-green-500" size={24} />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                    )}
                    <div>
                      <div className={`font-medium ${task.completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>{task.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{task.type} • {task.duration}</div>
                    </div>
                  </div>
                  {!task.completed && (
                    <button className="text-slate-400 hover:text-blue-600">
                      <PlayCircle size={24} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/assessment" className="p-4 bg-white border border-slate-200 rounded-2xl text-center hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <CheckSquare size={24} />
              </div>
              <div className="font-medium text-slate-700 text-sm">Take Assessment</div>
            </Link>
            <Link to="/dsa-patterns" className="p-4 bg-white border border-slate-200 rounded-2xl text-center hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <div className="font-medium text-slate-700 text-sm">DSA Patterns</div>
            </Link>
            <Link to="/mock-interview" className="p-4 bg-white border border-slate-200 rounded-2xl text-center hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Video size={24} />
              </div>
              <div className="font-medium text-slate-700 text-sm">Mock Interview</div>
            </Link>
            <Link to="/practice" className="p-4 bg-white border border-slate-200 rounded-2xl text-center hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Dumbbell size={24} />
              </div>
              <div className="font-medium text-slate-700 text-sm">Practice Hub</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
