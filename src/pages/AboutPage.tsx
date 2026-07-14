import {
  Info,
  Sparkles,
  Heart,
  Rocket,
  ArrowRight,
  Globe,
  Users,
  GraduationCap,
  TrendingUp,
  Brain,
  Map,
  Target,
  Lightbulb,
} from 'lucide-react';
import type { PageName } from '../types';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

interface AboutPageProps {
  navigate: (page: PageName) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="container-custom relative text-center">
          <Reveal>
            <Badge variant="primary" size="md">
              <Info className="w-3.5 h-3.5" />
              About the Project
            </Badge>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-ink-900 leading-tight">
              SkillBridge <span className="gradient-text">AI</span>
            </h1>
            <p className="mt-4 text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed">
              An AI-powered career guidance platform built to democratize
              opportunity for students from rural and underserved communities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The Problem"
            title={
              <>
                The career guidance gap is <span className="gradient-text">real and widening</span>
              </>
            }
            subtitle="While urban students have access to career counselors, mentorship programs, and online resources, millions of students from rural areas are left to navigate their futures alone."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Globe, title: 'Geographic Divide', text: 'Over 70% of students in rural areas have never spoken to a career counselor.' },
              { icon: Users, title: 'Information Asymmetry', text: 'Students don\'t know what skills the job market needs or which paths exist.' },
              { icon: GraduationCap, title: 'High Dropout Risk', text: 'Without clear goals, motivation drops — leading to higher dropout rates.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card hover className="p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-ink-500 leading-relaxed text-sm">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-gradient-to-b from-ink-50 to-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Solution"
            title={
              <>
                AI-powered guidance, <span className="gradient-text">accessible to all</span>
              </>
            }
            subtitle="SkillBridge AI uses intelligent analysis to turn a student's profile into a clear, personalized career plan — no counselor required."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Brain, title: 'AI Career Matching', text: 'Analyzes interests, skills, and goals to recommend the best-fit career path with a match score.' },
              { icon: Target, title: 'Skill Gap Analysis', text: 'Identifies exactly which skills are missing and how far the student is from job-ready proficiency.' },
              { icon: Map, title: 'Personalized Roadmap', text: 'Generates a 6-month, month-by-month learning plan with milestones and curated resources.' },
              { icon: TrendingUp, title: 'Progress Dashboard', text: 'Tracks streaks, completed skills, achievements, and upcoming tasks to keep students motivated.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card hover className="p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary-300 uppercase tracking-wider mb-3">
              Social Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              One guided student uplifts an entire community
            </h2>
            <p className="mt-4 text-lg text-primary-100 leading-relaxed">
              We believe career guidance is a fundamental right, not a privilege.
              SkillBridge AI is our contribution to making it universal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Equal Access', text: 'Any student with a smartphone can get the same quality of career guidance as someone in a major city.' },
              { icon: Heart, title: 'Free Forever', text: 'The core platform is and always will be free for students. No paywalls, no hidden fees.' },
              { icon: Users, title: 'Community Driven', text: 'Built with input from educators, industry professionals, and students from underserved communities.' },
              { icon: GraduationCap, title: 'Lower Dropout Rates', text: 'Students with clear goals and roadmaps are 3x more likely to complete their education.' },
              { icon: TrendingUp, title: 'Economic Mobility', text: 'Skill development leads to jobs, and jobs transform families and communities.' },
              { icon: Sparkles, title: 'Scalable Impact', text: 'AI makes it possible to serve millions of students simultaneously at near-zero marginal cost.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Impact stats */}
          <Reveal delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
              {[
                { value: '10M+', label: 'Students by 2030' },
                { value: '500+', label: 'Curated Resources' },
                { value: '6 mo', label: 'Avg. Time to Job-Ready' },
                { value: '0₹', label: 'Cost for Students' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-300">{stat.value}</div>
                  <div className="text-sm text-primary-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Future Scope */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Future Scope"
            title={
              <>
                Where we're <span className="gradient-text">heading next</span>
              </>
            }
            subtitle="This hackathon prototype is just the beginning. Here's our vision for what SkillBridge AI will become."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Brain, title: 'LLM-Powered Career Chatbot', text: 'A conversational AI mentor that students can talk to in their local language for real-time guidance.' },
              { icon: Users, title: 'Peer & Mentor Matching', text: 'Connect students with mentors from their target industry and peers on similar learning paths.' },
              { icon: Rocket, title: 'Internship & Job Board', text: 'Partner with companies to surface real opportunities matched to each student\'s roadmap progress.' },
              { icon: Globe, title: 'Multilingual Support', text: 'Expand beyond English to Hindi, Tamil, Bengali, and other regional languages for true inclusivity.' },
              { icon: GraduationCap, title: 'School Integration', text: 'Partner with rural schools and NGOs to integrate SkillBridge into their curriculum.' },
              { icon: Target, title: 'Verified Skill Certificates', text: 'Issue blockchain-verified skill certificates as students complete roadmap milestones.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <Card hover className="p-6 h-full flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.text}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-ink-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Built With"
            title="Technology Stack"
            subtitle="Modern, scalable, and open — built with tools we love."
          />
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 rounded-xl bg-white border border-ink-200 text-ink-700 font-semibold shadow-sm hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-700 p-12 lg:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative">
                <Lightbulb className="w-12 h-12 text-primary-200 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Be part of the change
                </h2>
                <p className="text-primary-50 max-w-xl mx-auto mb-8">
                  Try the platform, share it with a student who needs it, or help us build the future of accessible career guidance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => navigate('profile')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Try It Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate('landing')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
