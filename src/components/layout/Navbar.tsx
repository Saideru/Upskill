import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Terminal, Flame, Info, Mail, Award, Newspaper } from 'lucide-react';
import { getStreak } from '../../lib/progress';

interface NavbarProps {
  currentView: string;
  navigate: (view: string, params?: any) => void;
}

export default function Navbar({ currentView, navigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    // Get streak on mount or when view changes
    const streak = getStreak();
    setStreakCount(streak.count);
  }, [currentView]);

  const navItems = [
    { label: 'Courses', view: 'courses', icon: BookOpen },
    { label: 'Blog', view: 'blog', icon: Newspaper },
    { label: 'About', view: 'about', icon: Info },
    { label: 'Contact', view: 'contact', icon: Mail }
  ];

  const handleLinkClick = (view: string, params?: any) => {
    navigate(view, params);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#27272A] bg-[#09090B]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Wordmark */}
          <div 
            onClick={() => handleLinkClick('home')} 
            className="flex cursor-pointer items-center gap-2 text-[#FAFAFA]"
          >
            <span className="font-mono font-bold text-xl tracking-tighter">UPSKILL</span>
            <span className="h-4 w-[1px] bg-[#27272A] mx-2"></span>
            <span className="text-xs text-[#A1A1AA] font-medium tracking-wide uppercase">Beta</span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.view === 'courses' && ['course-hub', 'lesson', 'capstone'].includes(currentView));
              return (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.view)}
                  className={`flex items-center space-x-1.5 text-sm font-medium transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#22D3A0]' 
                      : 'text-[#A1A1AA] hover:text-[#22D3A0]'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Trigger Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {streakCount > 0 && (
              <div 
                className="flex items-center space-x-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 h-8 text-xs font-semibold text-orange-400 transition-all cursor-help"
                title={`${streakCount} Days Active Learning Streak! Keep it up.`}
              >
                <Flame className="h-3.5 w-3.5 fill-current animate-pulse" />
                <span>{streakCount} Day{streakCount > 1 ? 's' : ''} Streak</span>
              </div>
            )}
            <button
              onClick={() => handleLinkClick('courses')}
              className="bg-[#22D3A0] text-[#09090B] px-5 py-2 rounded-lg font-bold hover:brightness-110 transition-all text-sm cursor-pointer"
            >
              Start Learning Free
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden items-center space-x-3">
            {streakCount > 0 && (
              <div className="flex items-center space-x-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 h-7 text-xs font-semibold text-orange-500">
                <Flame className="h-3 w-3 fill-current" />
                <span>{streakCount}d</span>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-[#A1A1AA] hover:bg-[#111114] hover:text-[#FAFAFA] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu list */}
      {isOpen && (
        <div className="border-b border-[#27272A] bg-[#111114] md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.view === 'courses' && ['course-hub', 'lesson', 'capstone'].includes(currentView));
              return (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.view)}
                  className={`flex w-full cursor-pointer items-center space-x-3 rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#22D3A0]/10 text-[#22D3A0]'
                      : 'text-[#A1A1AA] hover:bg-[#18181C] hover:text-[#FAFAFA]'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-[#27272A] mt-4 px-3">
              <button
                onClick={() => handleLinkClick('courses')}
                className="w-full cursor-pointer rounded-lg bg-[#22D3A0] py-2.5 text-center text-sm font-bold text-[#09090B] hover:brightness-110 transition-all"
              >
                Start Learning Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
