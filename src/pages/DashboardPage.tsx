import {
  LayoutDashboard,
  Flame,
  Target,
  CheckCircle2,
  Calendar,
  Award,
  Lock,
  TrendingUp,
  Clock,
  ArrowRight,
  BookOpen,
  Zap,
  BarChart3,
  Footprints,
  Atom,
  ShieldCheck,
  Server,
  Cloud,
  Trophy,
  HeartHandshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { PageName } from '../types';
import { dashboardData } from '../data/mockData';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ProgressRing } from '../components/ProgressRing';
import { ProgressBar } from '../components/ProgressBar';
import { BarChart } from '../components/BarChart';


interface DashboardPageProps {
  navigate: (page: PageName) => void;
}

const priorityVariant = {
  High: 'error',
  Medium: 'warning',
  Low: 'primary',
} as const;

export function DashboardPage({ navigate }: DashboardPageProps) {
  const d = dashboardData;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-ink-50">
      <div className="container-custom">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <LayoutDashboard className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                  Progress Dashboard
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-ink-900">
                Welcome back, <span className="gradient-text">Aarav</span>
              </h1>
              <p className="mt-2 text-ink-500">Keep up the momentum — you're on track!</p>
            </div>
            <button
              onClick={() => navigate('roadmap')}
              className="btn-secondary text-sm self-start"
            >
              View Roadmap
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

        {/* Top stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Overall progress ring */}
          <Reveal>
            <Card className="p-6 flex items-center gap-5">
              <ProgressRing value={d.overallProgress} size={90} strokeWidth={8} />
              <div>
                <p className="text-sm text-ink-500">Overall Progress</p>
                <p className="text-2xl font-bold text-ink-900">{d.overallProgress}%</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +12% this week
                </p>
              </div>
            </Card>
          </Reveal>

          {/* Skills completed */}
          <Reveal delay={100}>
            <Card className="p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-ink-500">Skills Completed</p>
                <p className="text-2xl font-bold text-ink-900">
                  {d.skillsCompleted}<span className="text-ink-400 text-lg">/{d.totalSkills}</span>
                </p>
                <p className="text-xs text-ink-500 mt-1">{d.totalSkills - d.skillsCompleted} to go</p>
              </div>
            </Card>
          </Reveal>

          {/* Learning streak */}
          <Reveal delay={200}>
            <Card className="p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center relative">
                <Flame className="w-7 h-7 text-accent-500" />
                <span className="absolute -top-1 -right-1 text-xs font-bold text-accent-600 bg-white rounded-full px-1.5 py-0.5 shadow">
                  {d.learningStreak}
                </span>
              </div>
              <div>
                <p className="text-sm text-ink-500">Learning Streak</p>
                <p className="text-2xl font-bold text-ink-900">{d.learningStreak} days</p>
                <p className="text-xs text-ink-500 mt-1">Best: {d.longestStreak} days</p>
              </div>
            </Card>
          </Reveal>

          {/* Weekly goal */}
          <Reveal delay={300}>
            <Card className="p-6 flex items-center gap-5">
              <ProgressRing value={d.weeklyGoalProgress} size={90} strokeWidth={8} sublabel="Weekly" />
              <div>
                <p className="text-sm text-ink-500">Weekly Goal</p>
                <p className="text-2xl font-bold text-ink-900">{d.weeklyGoalProgress}%</p>
                <p className="text-xs text-ink-500 mt-1">14 hrs / 20 hrs</p>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly activity chart */}
          <Reveal>
            <Card className="p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary-500" />
                  <h3 className="font-bold text-ink-900">Weekly Learning Activity</h3>
                </div>
                <Badge variant="success" size="sm">
                  <TrendingUp className="w-3 h-3" />
                  On Track
                </Badge>
              </div>
              <BarChart
                data={d.weeklyActivity.map((a) => ({ label: a.day, value: a.hours }))}
                unit="h"
                color="#10b981"
                height={220}
              />
            </Card>
          </Reveal>

          {/* Upcoming tasks */}
          <Reveal delay={100}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Calendar className="w-5 h-5 text-primary-500" />
                <h3 className="font-bold text-ink-900">Upcoming Tasks</h3>
              </div>
              <div className="space-y-3">
                {d.upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-ink-50 hover:bg-primary-50 transition-colors group"
                  >
                    <button className="mt-0.5 w-5 h-5 rounded-full border-2 border-ink-300 hover:border-primary-500 transition-colors flex-shrink-0 flex items-center justify-center" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink-800 leading-snug">{task.title}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Badge variant={priorityVariant[task.priority]} size="sm">
                          {task.priority}
                        </Badge>
                        <span className="text-xs text-ink-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Skills completed list + Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Skills completed */}
          <Reveal>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Target className="w-5 h-5 text-primary-500" />
                <h3 className="font-bold text-ink-900">Recently Completed Skills</h3>
              </div>
              <div className="space-y-3">
                {d.skillsCompletedList.slice().reverse().map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-ink-100 hover:border-primary-200 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink-800">{skill.name}</p>
                      <p className="text-xs text-ink-500">{skill.category}</p>
                    </div>
                    <span className="text-xs text-ink-400">{skill.date}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={100}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-primary-500" />
                <h3 className="font-bold text-ink-900">Achievement Badges</h3>
                <Badge variant="primary" size="sm" >
                  {d.achievements.filter((a) => a.earned).length} / {d.achievements.length}
                </Badge>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {d.achievements.map((achievement) => {
                  const iconMap: Record<string, LucideIcon> = {
                    Footprints,
                    Atom,
                    ShieldCheck,
                    Flame,
                    Server,
                    Cloud,
                    Trophy,
                    HeartHandshake,
                  };
                  const Icon = iconMap[achievement.icon] ?? Award;
                  return (
                    <div
                      key={achievement.id}
                      className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all ${
                        achievement.earned
                          ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200 hover:scale-105 cursor-pointer'
                          : 'bg-ink-50 border-ink-100 opacity-60'
                      }`}
                      title={achievement.description}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                          achievement.earned
                            ? 'bg-gradient-to-br from-primary-500 to-secondary-600 shadow-lg shadow-primary-500/30'
                            : 'bg-ink-200'
                        }`}
                      >
                        {achievement.earned ? (
                          <Icon className="w-6 h-6 text-white" />
                        ) : (
                          <Lock className="w-5 h-5 text-ink-400" />
                        )}
                      </div>
                      <p className={`text-xs font-bold leading-tight ${achievement.earned ? 'text-ink-800' : 'text-ink-400'}`}>
                        {achievement.title}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-[10px] text-ink-400 mt-0.5">{achievement.date}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Bottom: Progress breakdown */}
        <Reveal>
          <Card className="p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-primary-500" />
              <h3 className="font-bold text-ink-900 text-lg">Skill Category Breakdown</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Frontend Development', value: 100, color: 'primary' as const },
                { label: 'TypeScript', value: 100, color: 'primary' as const },
                { label: 'Backend (Node.js)', value: 65, color: 'secondary' as const },
                { label: 'Databases', value: 0, color: 'warning' as const },
                { label: 'Cloud & DevOps', value: 0, color: 'warning' as const },
                { label: 'System Design', value: 10, color: 'warning' as const },
              ].map((cat, i) => (
                <div key={i}>
                  <ProgressBar
                    value={cat.value}
                    label={cat.label}
                    color={cat.color}
                    height="md"
                  />
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-8 text-center">
            <p className="text-ink-500 mb-4">Want to revisit your career analysis or update your profile?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('analysis')} className="btn-secondary">
                <BookOpen className="w-4 h-4" />
                View Analysis
              </button>
              <button onClick={() => navigate('profile')} className="btn-primary">
                Update Profile
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
