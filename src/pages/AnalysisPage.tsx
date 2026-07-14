import {
  Brain,
  Target,
  TrendingUp,
  Zap,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Sparkles,
  ExternalLink,
  Star,
} from 'lucide-react';
import type { PageName } from '../types';
import { careerAnalysis } from '../data/mockData';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ProgressRing } from '../components/ProgressRing';
import { ProgressBar } from '../components/ProgressBar';
import { SectionHeading } from '../components/SectionHeading';

interface AnalysisPageProps {
  navigate: (page: PageName) => void;
}

const priorityColors = {
  High: 'error',
  Medium: 'warning',
  Low: 'primary',
} as const;

export function AnalysisPage({ navigate }: AnalysisPageProps) {
  const a = careerAnalysis;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-primary-50/30 via-white to-white">
      <div className="container-custom">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <Badge variant="primary" size="md">
              <Brain className="w-3.5 h-3.5" />
              Step 2 of 3 — AI Analysis Complete
            </Badge>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900">
              Your <span className="gradient-text">Career Analysis</span>
            </h1>
            <p className="mt-3 text-ink-500 text-lg max-w-2xl mx-auto">
              Our AI evaluated your profile against industry benchmarks. Here's your personalized result.
            </p>
          </div>
        </Reveal>

        {/* Top section: Match score + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Match score */}
          <Reveal>
            <Card className="p-8 h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-100">
              <p className="text-sm font-semibold text-ink-500 uppercase tracking-wider mb-4">
                Career Match Score
              </p>
              <ProgressRing value={a.matchScore} size={140} strokeWidth={12} />
              <p className="mt-4 text-lg font-bold text-ink-900">{a.recommendedPath}</p>
              <Badge variant="success" size="sm">
                <CheckCircle2 className="w-3 h-3" />
                Excellent Fit
              </Badge>
            </Card>
          </Reveal>

          {/* Summary */}
          <Reveal delay={100}>
            <Card className="p-8 lg:col-span-2 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-500" />
                <h3 className="font-bold text-ink-900">AI Summary</h3>
              </div>
              <p className="text-ink-600 leading-relaxed">{a.summary}</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-ink-50">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Industry Demand</p>
                    <p className="font-bold text-ink-900">{a.industryDemand}% · {a.industryTrend}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-ink-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Avg. Salary</p>
                    <p className="font-bold text-ink-900 text-sm">{a.averageSalary}</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Strengths + Missing skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Strengths */}
          <Reveal>
            <Card className="p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-ink-900 text-lg">Your Strengths</h3>
              </div>
              <div className="space-y-5">
                {a.strengths.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div>
                        <span className="font-semibold text-ink-800">{s.skill}</span>
                        <p className="text-xs text-ink-500 mt-0.5">{s.description}</p>
                      </div>
                      <span className="text-sm font-bold text-green-600">{s.level}%</span>
                    </div>
                    <ProgressBar value={s.level} color="primary" height="sm" showValue={false} />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Missing skills */}
          <Reveal delay={100}>
            <Card className="p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-ink-900 text-lg">Missing Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {a.missingSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 text-sm font-medium border border-amber-100"
                  >
                    <Zap className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">
                These are the skills the industry expects for your target role.
                Your 6-month roadmap will cover each of them.
              </p>
            </Card>
          </Reveal>
        </div>

        {/* Skill Gap Analysis */}
        <Reveal>
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="font-bold text-ink-900 text-lg">Skill Gap Analysis</h3>
            </div>

            <div className="space-y-5">
              {a.skillGaps.map((gap, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-ink-800 text-sm">{gap.skill}</span>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Badge variant={priorityColors[gap.priority]} size="sm">
                      {gap.priority} Priority
                    </Badge>
                  </div>
                  <div className="sm:col-span-5">
                    <div className="relative h-6 rounded-full bg-ink-100 overflow-hidden">
                      {/* Required level track */}
                      <div
                        className="absolute top-0 left-0 h-full bg-ink-200 rounded-full"
                        style={{ width: `${gap.requiredLevel}%` }}
                      />
                      {/* Current level fill */}
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000"
                        style={{ width: `${gap.currentLevel}%` }}
                      />
                      <div className="absolute inset-0 flex items-center justify-between px-3">
                        <span className="text-xs font-semibold text-white drop-shadow">
                          {gap.currentLevel}%
                        </span>
                        <span className="text-xs font-semibold text-ink-600">
                          Target: {gap.requiredLevel}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2 text-right">
                    <span className="text-sm font-bold text-amber-600">
                      Gap: {gap.gap}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-ink-100 text-xs text-ink-500">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-primary-500 to-secondary-500" />
                Your current level
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-ink-200" />
                Required level
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Industry Demand + Alternative paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Reveal>
            <Card className="p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary-600" />
                </div>
                <h3 className="font-bold text-ink-900 text-lg">Industry Demand</h3>
              </div>
              <div className="flex items-center gap-6">
                <ProgressRing value={a.industryDemand} size={110} strokeWidth={10} sublabel="Demand" />
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                    <span className="text-sm text-ink-600">Trend</span>
                    <Badge variant="success" size="sm">
                      <TrendingUp className="w-3 h-3" />
                      {a.industryTrend}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-ink-50">
                    <span className="text-sm text-ink-600">Salary Range</span>
                    <span className="text-sm font-bold text-ink-900">{a.averageSalary}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-600" />
                </div>
                <h3 className="font-bold text-ink-900 text-lg">Alternative Career Paths</h3>
              </div>
              <div className="space-y-4">
                {a.alternativePaths.map((path, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-medium text-ink-800 text-sm">{path.title}</span>
                      <span className="text-sm font-bold text-ink-600">{path.match}%</span>
                    </div>
                    <ProgressBar value={path.match} color="secondary" height="sm" showValue={false} />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Learning Resources */}
        <Reveal>
          <div className="mb-8">
            <SectionHeading
              eyebrow="Recommended"
              title="Curated Learning Resources"
              subtitle="Hand-picked resources to help you close your skill gaps — many are completely free."
              center={false}
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {a.resources.map((resource, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card hover className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                  </div>
                  {resource.free ? (
                    <Badge variant="success" size="sm">Free</Badge>
                  ) : (
                    <Badge variant="neutral" size="sm">Paid</Badge>
                  )}
                </div>
                <h4 className="font-bold text-ink-900 mb-1">{resource.title}</h4>
                <p className="text-sm text-ink-500 mb-3">by {resource.provider}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary" size="sm">{resource.type}</Badge>
                  <Badge variant="neutral" size="sm">{resource.level}</Badge>
                  <Badge variant="neutral" size="sm">{resource.duration}</Badge>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Access Resource
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* CTA to roadmap */}
        <Reveal>
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary-600 to-secondary-700 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to see your learning plan?
            </h3>
            <p className="text-primary-50 mb-6 max-w-xl mx-auto">
              We've built a 6-month roadmap that takes you from where you are to job-ready.
            </p>
            <button
              onClick={() => navigate('roadmap')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Roadmap
              <ArrowRight className="w-5 h-5" />
            </button>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
