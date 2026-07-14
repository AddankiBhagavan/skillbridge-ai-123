import { Sparkles, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { PageName } from '../types';

interface NavbarProps {
  currentPage: PageName;
  navigate: (page: PageName) => void;
}

const navLinks: { label: string; page: PageName }[] = [
  { label: 'Home', page: 'landing' },
  { label: 'Profile', page: 'profile' },
  { label: 'Analysis', page: 'analysis' },
  { label: 'Roadmap', page: 'roadmap' },
  { label: 'Dashboard', page: 'dashboard' },
  { label: 'About', page: 'about' },
];

export function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageName) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-ink-900/5 border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('landing')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-ink-900">
            SkillBridge <span className="gradient-text">AI</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavigate(link.page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === link.page
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNavigate('profile')}
            className="btn-primary text-sm py-2.5 px-5"
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-ink-100 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-ink-100 animate-fade-in-down">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavigate(link.page)}
                className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                  currentPage === link.page
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-ink-600 hover:bg-ink-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('profile')}
              className="btn-primary text-sm mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
