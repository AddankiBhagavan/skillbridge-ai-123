// Central type definitions for SkillBridge AI

export interface NavLink {
  label: string;
  path: string;
}

export interface StudentProfile {
  fullName: string;
  educationLevel: string;
  currentSkills: string[];
  interests: string[];
  careerGoal: string;
}

export interface SkillGap {
  skill: string;
  currentLevel: number; // 0-100
  requiredLevel: number; // 0-100
  gap: number;
  priority: 'High' | 'Medium' | 'Low';
}

export interface Strength {
  skill: string;
  level: number;
  description: string;
}

export interface LearningResource {
  title: string;
  provider: string;
  type: 'Course' | 'Tutorial' | 'Book' | 'Video' | 'Project';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  url: string;
  free: boolean;
}

export interface CareerAnalysis {
  recommendedPath: string;
  matchScore: number;
  summary: string;
  skillGaps: SkillGap[];
  missingSkills: string[];
  strengths: Strength[];
  industryDemand: number;
  industryTrend: 'Growing' | 'Stable' | 'Emerging';
  averageSalary: string;
  resources: LearningResource[];
  alternativePaths: { title: string; match: number }[];
}

export interface RoadmapMonth {
  month: number;
  title: string;
  focus: string;
  skills: string[];
  milestones: string[];
  resources: string[];
  estimatedHours: number;
  progress: number;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Roadmap {
  totalMonths: number;
  months: RoadmapMonth[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
}

export interface UpcomingTask {
  id: string;
  title: string;
  category: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

export interface DashboardData {
  overallProgress: number;
  skillsCompleted: number;
  totalSkills: number;
  learningStreak: number;
  longestStreak: number;
  weeklyGoalProgress: number;
  skillsCompletedList: { name: string; date: string; category: string }[];
  upcomingTasks: UpcomingTask[];
  achievements: Achievement[];
  weeklyActivity: { day: string; hours: number }[];
}

export type PageName =
  | 'landing'
  | 'profile'
  | 'analysis'
  | 'roadmap'
  | 'dashboard'
  | 'about';
