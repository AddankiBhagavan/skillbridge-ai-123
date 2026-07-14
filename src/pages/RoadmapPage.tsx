import {
  Map,
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Zap,
} from 'lucide-react';
import type { PageName } from '../types';
import { roadmap } from '../data/mockData';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ProgressBar } from '../components/ProgressBar';

interface RoadmapPageProps {
  navigate: (page: PageName) => void;
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'success' as const,
    line: 'bg-green-500',
  },
  'in-progress': {
    icon: Zap,
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    badge: 'primary' as const,
    line: 'bg-primary-500',
  },
  upcoming: {
    icon: Circle,
    color: 'text-ink-400',
    bg: 'bg-ink-50',
    border: 'border-ink-200',
    badge: 'neutral' as const,
    line: 'bg-ink-200',
  },
} as const;

export function RoadmapPage({ navigate }: RoadmapPageProps) {
  const totalHours = roadmap.months.reduce((sum, m) => sum + m.estimatedHours, 0);
  const completedMonths = roadmap.months.filter((m) => m.status === 'completed').length;
  const overallProgress = Math.round(
    (roadmap.months.reduce((sum, m) => sum + m.progress, 0) / (roadmap.totalMonths * 100)) * 100
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-secondary-50/30 via-white to-white">
      <div className="container-custom">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <Badge variant="primary" size="md">
              <Map className="w-3.5 h-3.5" />
              Step 3 of 3 — Your Personalized Plan
            </Badge>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900">
              6-Month <span className="gradient-text">Learning Roadmap</span>
            </h1>
            <p className="mt-3 text-ink-500 text-lg max-w-2xl mx-auto">
              A structured, month-by-month plan to take you from your current skills to job-ready.
            </p>
          </div>
        </Reveal>

        {/* Overview stats */}
        <Reveal delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Calendar, label: 'Duration', value: '6 Months', color: 'primary' },
              { icon: Clock, label: 'Total Hours', value: `${totalHours} hrs`, color: 'secondary' },
              { icon: CheckCircle2, label: 'Completed', value: `${completedMonths} / ${roadmap.totalMonths}`, color: 'primary' },
              { icon: TrendingUp, label: 'Overall Progress', value: `${overallProgress}%`, color: 'secondary' },
            ].map((stat, i) => (
              <Card key={i} className="p-5 text-center">
                <stat.icon className="w-6 h-6 mx-auto text-primary-500 mb-2" />
                <div className="text-2xl font-bold text-ink-900">{stat.value}</div>
                <div className="text-xs text-ink-500 mt-1">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Reveal>

        {/* Overall progress bar */}
        <Reveal delay={150}>
          <Card className="p-6 mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-ink-800">Overall Roadmap Progress</span>
              <span className="text-sm font-bold text-primary-600">{overallProgress}%</span>
            </div>
            <ProgressBar value={overallProgress} color="primary" height="lg" showValue={false} />
          </Card>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-ink-200" />

          {roadmap.months.map((month, i) => {
            const config = statusConfig[month.status];
            const StatusIcon = config.icon;

            return (
              <Reveal key={month.month} delay={i * 100}>
                <div className="relative pl-16 lg:pl-20 pb-8">
                  {/* Timeline node */}
                  <div
                    className={`absolute left-0 top-2 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl ${config.bg} border-2 ${config.border} flex items-center justify-center shadow-sm`}
                  >
                    <StatusIcon className={`w-6 h-6 lg:w-7 lg:h-7 ${config.color}`} />
                  </div>

                  <Card hover className={`p-6 lg:p-8 ${month.status === 'in-progress' ? 'ring-2 ring-primary-300' : ''}`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-ink-400 uppercase tracking-wider">
                            Month {month.month}
                          </span>
                          <Badge variant={config.badge} size="sm">
                            {month.status === 'completed' && 'Completed'}
                            {month.status === 'in-progress' && 'In Progress'}
                            {month.status === 'upcoming' && 'Upcoming'}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-ink-900">{month.title}</h3>
                        <p className="text-sm text-ink-500 mt-1">{month.focus}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-ink-500 bg-ink-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                        <Clock className="w-4 h-4" />
                        {month.estimatedHours} hrs
                      </div>
                    </div>

                    {/* Progress bar for this month */}
                    {month.status !== 'upcoming' && (
                      <div className="mb-5">
                        <ProgressBar
                          value={month.progress}
                          label="Module Progress"
                          color={month.status === 'completed' ? 'primary' : 'secondary'}
                          height="sm"
                        />
                      </div>
                    )}

                    {/* Skills to learn */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Skills to Learn
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {month.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary-50 text-primary-700 text-xs font-medium border border-primary-100"
                          >
                            <BookOpen className="w-3 h-3" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Milestones
                      </p>
                      <ul className="space-y-2">
                        {month.milestones.map((milestone, mi) => (
                          <li key={mi} className="flex items-start gap-2.5 text-sm">
                            {month.status === 'completed' ? (
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <Target className="w-4 h-4 text-ink-300 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={month.status === 'completed' ? 'text-ink-600' : 'text-ink-700'}>
                              {milestone}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources */}
                    <div className="pt-4 border-t border-ink-100">
                      <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Key Resources
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {month.resources.map((resource, ri) => (
                          <span
                            key={ri}
                            className="text-xs px-2.5 py-1 rounded-lg bg-ink-50 text-ink-600 border border-ink-100"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-secondary-600 to-primary-700 text-white text-center mt-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Track your progress in real time
            </h3>
            <p className="text-secondary-50 mb-6 max-w-xl mx-auto">
              Head to your dashboard to log completed skills, maintain your streak, and earn achievement badges.
            </p>
            <button
              onClick={() => navigate('dashboard')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Go to Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
