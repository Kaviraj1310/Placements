import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import StudentLayout from './components/layout/StudentLayout';
import AdminLayout from './components/layout/AdminLayout';
import StudentDashboard from './pages/student/Dashboard';
import RoadmapPage from './pages/student/Roadmap';
import AssessmentPage from './pages/student/Assessment';
import PracticeHub from './pages/student/Practice';
import DSAPatterns from './pages/student/DSAPatterns';
import MockInterview from './pages/student/MockInterview';
import AdminDashboard from './pages/admin/Dashboard';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const [role, setRole] = useState<'student' | 'admin'>('student');

  return (
    <Router>
      <div className="fixed top-0 z-50 w-full bg-indigo-600 text-white p-2 text-center text-sm font-medium flex justify-center items-center gap-4">
        <span>Prototype Mode: Viewing as {role === 'student' ? 'Student' : 'Admin'}</span>
        <button 
          onClick={() => setRole(role === 'student' ? 'admin' : 'student')}
          className="bg-white text-indigo-600 px-3 py-1 rounded text-xs hover:bg-indigo-50 transition-colors"
        >
          Switch to {role === 'student' ? 'Admin' : 'Student'}
        </button>
      </div>

      <div className="pt-10 h-screen w-full">
        <Routes>
          {role === 'student' ? (
            <Route path="/" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="roadmap" element={<RoadmapPage />} />
              <Route path="assessment" element={<AssessmentPage />} />
              <Route path="practice" element={<PracticeHub />} />
              <Route path="dsa-patterns" element={<DSAPatterns />} />
              <Route path="mock-interview" element={<MockInterview />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          ) : (
            <Route path="/" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          )}
        </Routes>
      </div>
      
      {role === 'student' && <ChatbotWidget />}
    </Router>
  );
}

export default App;
