import { Sparkles, Heart, Github, Twitter, Linkedin } from 'lucide-react';
import type { PageName } from '../types';

interface FooterProps {
  navigate: (page: PageName) => void;
}

export function Footer({ navigate }: FooterProps) {
  const links: { label: string; page: PageName }[] = [
    { label: 'Home', page: 'landing' },
    { label: 'Profile', page: 'profile' },
    { label: 'Analysis', page: 'analysis' },
    { label: 'Roadmap', page: 'roadmap' },
    { label: 'Dashboard', page: 'dashboard' },
    { label: 'About', page: 'about' },
  ];

  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                SkillBridge <span className="text-primary-400">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-ink-400">
              Bridging the career guidance gap for students from rural and
              underserved communities through AI-powered personalized learning
              roadmaps and skill analysis.
            </p>
            <div className="flex gap-3 mt-6">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-ink-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Mission
            </h4>
            <p className="text-sm text-ink-400 leading-relaxed">
              Empowering 10 million students by 2030 with accessible,
              personalized career guidance — regardless of geography or
              background.
            </p>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © 2026 SkillBridge AI. Built for social impact.
          </p>
          <p className="text-sm text-ink-500 flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-primary-500 fill-primary-500" /> for underserved communities
          </p>
        </div>
      </div>
    </footer>
  );
}
