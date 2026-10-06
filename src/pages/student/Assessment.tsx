import React, { useState } from 'react';
import { ShieldCheck, Play, Code, CheckCircle, Clock } from 'lucide-react';
import { mockStudent } from '../../data/mockData';

const AssessmentPage = () => {
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('coding');

  if (completed) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-200">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Assessment Completed!</h2>
          <p className="text-slate-500 mb-6">Your skills have been validated. Generating company-specific readiness score...</p>
          
          <div className="max-w-md mx-auto bg-slate-50 rounded-xl p-6 border border-slate-200 text-left">
            <h3 className="font-semibold text-slate-800 mb-4 border-b pb-2">Microsoft Readiness Score</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Overall Readiness</span>
                  <span className="font-bold text-blue-600">74%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                {Object.entries(mockStudent.readinessScores).slice(0,4).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-xs text-slate-500">{key}</div>
                    <div className="font-semibold text-slate-800">{value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setCompleted(false)}
            className="mt-8 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (inProgress) {
    return (
      <div className="h-full flex flex-col -m-4 md:-m-6 lg:-m-8 bg-slate-900 text-slate-200">
        <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
            <ShieldCheck size={18} />
            Assessment Integrity Mode Active
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-mono">
            <Clock size={16} /> 44:59
          </div>
          <button 
            onClick={() => setCompleted(true)}
            className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700"
          >
            Submit Assessment
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Problem Statement */}
          <div className="w-1/3 bg-slate-900 border-r border-slate-800 p-6 overflow-y-auto">
            <div className="flex gap-2 mb-6 border-b border-slate-800 pb-2">
              <button className={`pb-2 px-1 text-sm font-medium ${activeTab === 'coding' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`} onClick={() => setActiveTab('coding')}>Problem</button>
              <button className={`pb-2 px-1 text-sm font-medium ${activeTab === 'aptitude' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`} onClick={() => setActiveTab('aptitude')}>Aptitude (5)</button>
            </div>

            {activeTab === 'coding' ? (
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Two Sum</h2>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">Easy</span>
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs">Arrays</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
                </p>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-sm font-mono text-slate-300 mb-4">
                  Input: nums = [2,7,11,15], target = 9<br/>
                  Output: [0,1]
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm">1. If A is brother of B, B is sister of C, and C is father of D, how D is related to A?</p>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 border border-slate-700 cursor-pointer text-sm">
                    <input type="radio" name="q1" className="accent-blue-500" /> Brother
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 border border-slate-700 cursor-pointer text-sm">
                    <input type="radio" name="q1" className="accent-blue-500" /> Sister
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 border border-slate-700 cursor-pointer text-sm">
                    <input type="radio" name="q1" className="accent-blue-500" /> Nephew
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 border border-slate-700 cursor-pointer text-sm">
                    <input type="radio" name="q1" className="accent-blue-500" /> Cannot be determined
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Code Editor */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            <div className="h-10 border-b border-slate-800 flex items-center px-4 bg-[#2d2d2d]">
              <span className="text-xs text-slate-400 font-mono">solution.py</span>
            </div>
            <div className="flex-1 p-4 relative">
              <textarea 
                className="w-full h-full bg-transparent text-slate-300 font-mono text-sm resize-none focus:outline-none"
                defaultValue={`def twoSum(nums, target):\n    # Write your code here\n    pass`}
                spellCheck="false"
              />
            </div>
            <div className="h-14 border-t border-slate-800 bg-[#2d2d2d] flex items-center justify-end px-4 gap-3">
              <button className="px-4 py-1.5 bg-slate-700 text-slate-200 rounded text-sm font-medium hover:bg-slate-600">Run Code</button>
              <button className="px-4 py-1.5 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700">Submit Code</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-indigo-600 p-8 text-white text-center">
          <ShieldCheck size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl font-bold mb-2">Verified Skill Assessment</h1>
          <p className="text-indigo-100">Prove your skills to unlock company-specific readiness scores.</p>
        </div>
        
        <div className="p-8">
          <h3 className="font-semibold text-slate-800 mb-4 text-lg">What to expect:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm">1</div>
              <div>
                <strong className="block text-slate-800">Timed Sections</strong>
                <span className="text-slate-500 text-sm">45 minutes total covering Aptitude, CS Fundamentals, and Coding.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm">2</div>
              <div>
                <strong className="block text-slate-800">Assessment Integrity Mode</strong>
                <span className="text-slate-500 text-sm">Copy-pasting is disabled to ensure accurate skill validation.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm">3</div>
              <div>
                <strong className="block text-slate-800">Personalized Analytics</strong>
                <span className="text-slate-500 text-sm">Receive a detailed breakdown of your strong and weak areas compared to Microsoft requirements.</span>
              </div>
            </li>
          </ul>

          <div className="flex justify-center">
            <button 
              onClick={() => setInProgress(true)}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-200"
            >
              <Play size={20} />
              Start Assessment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
