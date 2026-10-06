import React, { useState } from 'react';
import { Video, Mic, VideoOff, MicOff, Play, ShieldAlert } from 'lucide-react';

const MockInterview = () => {
  const [started, setStarted] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  if (started) {
    return (
      <div className="h-[calc(100vh-8rem)] bg-slate-900 rounded-2xl overflow-hidden relative flex flex-col">
        {/* Main Video Area (AI Interviewer) */}
        <div className="flex-1 bg-slate-800 flex items-center justify-center relative">
          <div className="text-slate-400 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center mb-4 overflow-hidden border-2 border-blue-500">
               <img src="https://ui-avatars.com/api/?name=AI&background=0D8ABC&color=fff" alt="AI Interviewer" />
            </div>
            <div className="animate-pulse flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur px-6 py-3 rounded-full text-white text-center max-w-xl">
            "Hi Alex. Let's start with your recent project on the sentiment analysis dashboard. Can you explain the architecture?"
          </div>
        </div>

        {/* User Self View */}
        <div className="absolute bottom-6 right-6 w-48 h-36 bg-slate-700 rounded-xl overflow-hidden border-2 border-slate-600 shadow-xl flex items-center justify-center text-slate-500 text-sm">
          {camOn ? "Camera Output" : <VideoOff />}
        </div>

        {/* Controls */}
        <div className="h-20 bg-slate-950 flex items-center justify-center gap-4">
          <button onClick={() => setMicOn(!micOn)} className={`p-4 rounded-full ${micOn ? 'bg-slate-700 text-white' : 'bg-red-500 text-white'}`}>
            {micOn ? <Mic size={20} /> : <MicOff size={20} />}
          </button>
          <button onClick={() => setCamOn(!camOn)} className={`p-4 rounded-full ${camOn ? 'bg-slate-700 text-white' : 'bg-red-500 text-white'}`}>
            {camOn ? <Video size={20} /> : <VideoOff size={20} />}
          </button>
          <button onClick={() => setStarted(false)} className="px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 ml-4">
            End Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-8 text-white">
          <Video size={48} className="text-blue-400 mb-4" />
          <h1 className="text-3xl font-bold mb-2">AI Mock Interview</h1>
          <p className="text-slate-400">Practice your technical and behavioral communication skills with our AI interviewer.</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-blue-800 text-sm">
            <ShieldAlert size={20} className="shrink-0" />
            <p>Your audio and video are processed locally in your browser for this prototype. We do NOT analyze facial expressions or emotions—only your technical correctness and communication clarity.</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Target Role</label>
                <select className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50">
                  <option>Software Engineer (Frontend)</option>
                  <option>Backend Developer</option>
                  <option>Data Scientist</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Focus Area</label>
                <select className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50">
                  <option>Project Deep Dive</option>
                  <option>DSA & Problem Solving</option>
                  <option>System Design</option>
                  <option>Behavioral & HR</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-sm text-slate-500 mb-4">Please grant camera and microphone permissions when prompted.</p>
            <button 
              onClick={() => setStarted(true)}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full justify-center"
            >
              <Play size={20} />
              Start Mock Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
