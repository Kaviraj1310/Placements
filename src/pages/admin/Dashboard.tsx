import React from 'react';
import { mockAdminStats } from '../../data/mockData';
import { Users, Target, AlertTriangle, TrendingUp, Sparkles } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Institutional Overview</h1>
          <p className="text-slate-500">Computer Science Department • 2026 Batch</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm flex gap-2 items-center">
          Export Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={20}/></div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12 this week</span>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-1">{mockAdminStats.studentsAssessed} <span className="text-sm font-normal text-slate-400">/ {mockAdminStats.totalStudents}</span></div>
          <div className="text-sm text-slate-500 font-medium">Students Assessed</div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><TrendingUp size={20}/></div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-1">{mockAdminStats.averageReadiness}%</div>
          <div className="text-sm text-slate-500 font-medium">Average Cohort Readiness</div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Target size={20}/></div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-1">{mockAdminStats.placementReady}</div>
          <div className="text-sm text-slate-500 font-medium">Placement Ready ( >80% )</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-red-50 text-red-600 rounded-lg"><AlertTriangle size={20}/></div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-1">{mockAdminStats.needingIntervention}</div>
          <div className="text-sm text-slate-500 font-medium">Needs Intervention ( &lt;50% )</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skill Gap Analysis */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Department Skill Gaps</h2>
          
          <div className="space-y-4">
            {mockAdminStats.skillGaps.map(gap => (
              <div key={gap.skill} className="flex items-center gap-4">
                <div className="w-16 text-sm font-medium text-slate-700">{gap.skill}</div>
                <div className="flex-1">
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${gap.status === 'critical' ? 'bg-red-500' : gap.status === 'warning' ? 'bg-orange-500' : gap.status === 'fair' ? 'bg-yellow-500' : 'bg-green-500'}`}
                      style={{ width: `${gap.score}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-slate-700">{gap.score}%</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-4">
            <div className="mt-1"><Sparkles className="text-indigo-600" size={20} /></div>
            <div>
              <h4 className="font-semibold text-indigo-900 text-sm">AI Recommendation</h4>
              <p className="text-indigo-800 text-sm mt-1">
                OS (49%) and CN (54%) are the largest department-wide gaps. Consider conducting targeted workshops or allocating specific lab hours before the placement cycle begins.
              </p>
              <button className="mt-3 px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700">
                Create Training Program
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Admin Actions</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700">
                Schedule Global Assessment
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700">
                Manage Question Bank
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700">
                Send Announcement
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700">
                View Company Criteria
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
