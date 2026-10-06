export const mockStudent = {
  name: 'Alex Johnson',
  targetCompany: 'Microsoft',
  targetRole: 'Software Engineer',
  daysRemaining: 84,
  overallReadiness: 74,
  progressThisWeek: 6,
  studyStreak: 12,
  timeSpentThisWeek: 14.5,
  readinessScores: {
    DSA: 78,
    Coding: 76,
    Aptitude: 84,
    SQL: 72,
    DBMS: 68,
    OS: 51,
    CN: 57,
    OOP: 78,
    SystemDesign: 64,
    Interview: 70
  },
  topSkillGaps: ['Operating Systems', 'Computer Networks'],
  todaysPlan: [
    { title: 'DSA Pattern Learning (Sliding Window)', duration: '45 min', type: 'DSA', completed: true },
    { title: 'SQL Practice (Joins)', duration: '30 min', type: 'SQL', completed: false },
    { title: 'Aptitude Mock Test', duration: '30 min', type: 'Aptitude', completed: false },
    { title: 'Daily Coding Challenge', duration: '45 min', type: 'Coding', completed: false }
  ],
  roadmap: {
    monday: [
      { task: 'DSA - Arrays', duration: 45 },
      { task: 'SQL Queries', duration: 30 },
      { task: 'Aptitude Reasoning', duration: 30 },
      { task: 'Revision', duration: 15 }
    ],
    tuesday: [
      { task: 'Coding Practice', duration: 60 },
      { task: 'Operating Systems', duration: 30 },
      { task: 'Verbal Aptitude', duration: 30 }
    ]
  }
};

export const mockAdminStats = {
  totalStudents: 450,
  studentsAssessed: 380,
  averageReadiness: 62,
  placementReady: 120,
  needingIntervention: 85,
  skillGaps: [
    { skill: 'OS', score: 49, status: 'critical' },
    { skill: 'CN', score: 54, status: 'critical' },
    { skill: 'DBMS', score: 58, status: 'warning' },
    { skill: 'DSA', score: 67, status: 'fair' },
    { skill: 'Python', score: 82, status: 'good' }
  ]
};

export const dsaPatterns = [
  { id: 'sliding-window', name: 'Sliding Window', mastery: 85 },
  { id: 'two-pointers', name: 'Two Pointers', mastery: 92 },
  { id: 'fast-slow', name: 'Fast & Slow Pointers', mastery: 60 },
  { id: 'merge-intervals', name: 'Merge Intervals', mastery: 40 },
  { id: 'cyclic-sort', name: 'Cyclic Sort', mastery: 20 },
];
