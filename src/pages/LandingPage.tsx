import {
  ArrowRight,
  Brain,
  Target,
  Map,
  TrendingUp,
  Users,
  GraduationCap,
  Sparkles,
  LineChart,
  BookOpen,
  Compass,
  Heart,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import type { PageName } from '../types';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

interface LandingPageProps {
  navigate: (page: PageName) => void;
}

export function LandingPage({ navigate }: LandingPageProps) {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-40 -left-24 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <Badge variant="primary" size="md">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered Career Guidance for Every Student
              </Badge>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-ink-900 leading-[1.1] tracking-tight">
                Bridge the gap between
                <br />
                <span className="gradient-text">talent and opportunity</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-lg lg:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto">
                SkillBridge AI analyzes your interests, current skills, and
                career goals to deliver personalized career recommendations,
                skill gap analysis, and step-by-step learning roadmaps.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('profile')}
                  className="btn-primary text-base px-8 py-4"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('about')}
                  className="btn-secondary text-base px-8 py-4"
                >
                  Learn More
                </button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-ink-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  100% Free for Students
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  AI-Driven Insights
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  Personalized Roadmaps
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Stats bar ===== */}
      <section className="bg-ink-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10M+', label: 'Students Targeted', icon: Users },
              { value: '87%', label: 'Avg. Career Match', icon: Target },
              { value: '6 mo', label: 'Avg. Roadmap', icon: Map },
              { value: '500+', label: 'Learning Resources', icon: BookOpen },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <stat.icon className="w-7 h-7 mx-auto text-primary-400 mb-2" />
                  <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm text-ink-400 mt-1">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Problem Statement ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The Problem"
            title={
              <>
                Millions of students are <span className="gradient-text">left behind</span>
              </>
            }
            subtitle="Students from rural and underserved communities lack access to the personalized career guidance that their urban peers take for granted."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Compass,
                title: 'No Direction',
                description:
                  'Students don\'t know which skills to learn or which career path suits their interests and strengths.',
              },
              {
                icon: GraduationCap,
                title: 'No Guidance',
                description:
                  'Rural schools rarely have career counselors. Students make critical decisions without expert advice.',
              },
              {
                icon: TrendingUp,
                title: 'No Roadmap',
                description:
                  'Even motivated students lack a structured plan to bridge the gap from where they are to where they want to be.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <Card hover className="p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-ink-500 leading-relaxed">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="section-padding bg-gradient-to-b from-ink-50 to-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                From confusion to clarity in <span className="gradient-text">four steps</span>
              </>
            }
            subtitle="Our AI engine transforms your profile into a clear, actionable career plan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: '01',
                icon: Users,
                title: 'Build Your Profile',
                description: 'Enter your education, current skills, interests, and career aspirations.',
              },
              {
                step: '02',
                icon: Brain,
                title: 'AI Analysis',
                description: 'Our engine evaluates your profile against industry demands and skill requirements.',
              },
              {
                step: '03',
                icon: Target,
                title: 'Get Recommendations',
                description: 'Receive a personalized career match, skill gap analysis, and curated resources.',
              },
              {
                step: '04',
                icon: Map,
                title: 'Follow Your Roadmap',
                description: 'Track your progress through a structured 6-month learning plan with milestones.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="relative">
                  <Card hover className="p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-ink-100">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
                  </Card>
                  {/* Connector arrow */}
                  {i < 3 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-300 z-10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Everything you need to <span className="gradient-text">succeed</span>
              </>
            }
            subtitle="A comprehensive platform that guides you from self-discovery to job readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Brain, title: 'AI Career Matching', description: 'Our algorithm matches your profile to the best-fit career paths with a quantified match score.' },
              { icon: LineChart, title: 'Skill Gap Analysis', description: 'Identify exactly which skills you need to learn and how far you are from job-ready proficiency.' },
              { icon: Map, title: '6-Month Roadmaps', description: 'Follow a structured, month-by-month learning plan with clear milestones and estimated timelines.' },
              { icon: TrendingUp, title: 'Industry Demand Insights', description: 'See real-time demand trends and salary ranges for your recommended career path.' },
              { icon: BookOpen, title: 'Curated Resources', description: 'Access hand-picked free and paid learning resources from top providers worldwide.' },
              { icon: Target, title: 'Progress Tracking', description: 'Monitor your streak, completed skills, achievements, and upcoming tasks in a beautiful dashboard.' },
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card hover className="p-8 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{feature.title}</h3>
                  <p className="text-ink-500 leading-relaxed text-sm">{feature.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact Section ===== */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary-300 uppercase tracking-wider mb-3">
              Social Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Democratizing career guidance for the next billion
            </h2>
            <p className="mt-4 text-lg text-primary-100 leading-relaxed">
              When we guide one student, we uplift a family. When we guide a
              million, we transform a generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Geographic Equity', description: 'Students in remote villages get the same quality of career guidance as those in major cities.' },
              { icon: Heart, title: 'Inclusive Access', description: 'Designed for low-bandwidth environments and available completely free for all students.' },
              { icon: GraduationCap, title: 'Skill Empowerment', description: 'Every student gets a clear, actionable path from where they are to where they want to be.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 border border-white/20">
                    <item.icon className="w-8 h-8 text-primary-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-100 leading-relaxed text-sm">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-700 p-12 lg:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Your future starts with a single step
                </h2>
                <p className="mt-4 text-lg text-primary-50 max-w-2xl mx-auto">
                  Join thousands of students who are turning their potential into
                  a plan. It takes less than 5 minutes.
                </p>
                <button
                  onClick={() => navigate('profile')}
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Build My Profile
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
