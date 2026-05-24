import { useState, useEffect, FormEvent } from 'react';
import { 
  Terminal, Sparkles, Trophy, ShieldCheck, ArrowRight, BookOpen, 
  Layers, Users, CheckCircle, Code, ChevronRight, MessageSquare, Flame
} from 'lucide-react';
import { courses } from '../../data/coursesData';

interface HomeViewProps {
  navigate: (view: string, params?: any) => void;
}

export default function HomeView({ navigate }: HomeViewProps) {
  const [activeTab, setActiveTab] = useState('javascript');
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  // Simulated stats animated counter ticker simulation
  const [visitorCount, setVisitorCount] = useState(82490);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
    }
  };

  const selectedCourseTab = courses.find(c => c.id === activeTab) || courses[0];

  const testimonials = [
    {
      quote: "As a working mother, paying $5,000 for a coding bootcamp was out of the question. UPSKILL gave me the exact, structured parts I needed to build a React and Python expense capstone and secure a junior role in months.",
      author: "Maria Santos",
      role: "Self-taught Front-end Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "The interactive playgrounds make C# compile-flows extremely tactile. Being able to run tests directly inside absolute zero friction consoles is brilliant. Siedel is a legendary volunteer tutor.",
      author: "John Benedict",
      role: "CS Second-year Undergraduate student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "No account paywalls, no trialing credit constraints. I started C# Part 1 and transitioned to Unity writing game physics scripts. This platform is public education at its absolute finest.",
      author: "Kevin Ocampo",
      role: "Indie Game Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#09090B]">
      
      {/* SECTION B: Animated Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:py-32 border-b border-[#27272A] bg-grid-pattern">
        {/* Subtle Matrix glow circles */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#22D3A0]/10 blur-[120px]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mx-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3A01a] border border-[#22D3A033] text-[#22D3A0] text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22D3A0] animate-pulse"></span>
            100% Free Forever Education
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-[#FAFAFA] leading-tight">
            Learn to Code. <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3A0] to-[#60A5FA]">For Free. Forever.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] sm:text-lg text-[#A1A1AA] leading-relaxed mb-8">
            Structured, professional-grade tutorials for modern software development. <br/>
            No paywalls. No trials. No credit cards. Just pure education.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('courses')}
              className="bg-[#FAFAFA] text-[#09090B] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#E4E4E7] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
            >
              Browse All Courses →
            </button>
            <a
              href="#pick-language"
              className="border border-[#3F3F46] bg-[#111114] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#18181C] text-[#FAFAFA] transition-colors cursor-pointer"
            >
              View Roadmaps
            </a>
          </div>

          {/* Floaters matrix visual overlay simulated console strip */}
          <div className="relative mt-16 mx-auto max-w-4xl rounded-xl border border-[#27272A] bg-[#111114] p-2 shadow-2xl">
            <div className="flex items-center space-x-2 rounded-t-lg bg-[#09090B] px-4 py-2 border-b border-[#27272A]">
              <span className="h-3 w-3 rounded-full bg-red-500/85" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/85" />
              <span className="h-3 w-3 rounded-full bg-green-500/85" />
              <span className="font-mono text-xs text-[#52525B] ml-2">upskill_cli // interactive_curriculum_sandbox</span>
            </div>
            <div className="bg-[#09090B] p-4 text-left font-mono text-xs sm:text-sm text-[#A1A1AA] overflow-x-auto rounded-b-lg">
              <p className="text-emerald-400"># Downloading open-source lessons from github.com/siedelcabrales/upskill...</p>
              <p className="text-zinc-500">$ npx upskill start --language=python</p>
              <p className="text-[#FAFAFA]">{`>>> Load Part 1: Welcome to Python`}</p>
              <p className="text-yellow-400">STATUS: ACTIVE // STREAK: 3 Days Running</p>
              <p className="text-blue-400">{`[✓] 100% Client-Side Persistence Loaded. Select course to write code.`}</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION C: Trust Bar */}
      <div className="w-full py-6 border-y border-[#27272A] bg-[#0c0c0e]">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs font-bold text-[#52525B] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="text-base">🎓</span> <span className="text-[#FAFAFA]">{visitorCount.toLocaleString()}+</span> Learners
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">📖</span> <span className="text-[#FAFAFA]">60</span> Free Lessons
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">💻</span> <span className="text-[#FAFAFA]">6</span> Languages
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">✅</span> <span className="text-[#FAFAFA]">$0.00</span> Cost to You
          </div>
        </div>
      </div>

      {/* SECTION D: Language Selection Cards Grid */}
      <section id="pick-language" className="py-20 md:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-extrabold text-[#FAFAFA] sm:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="text-[#A1A1AA] mt-4 text-base">
            Every technical language contains 10 comprehensive lesson parts, custom interactive code compilers, code diagnostic tests, and an advanced Capstone Project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            return (
              <div 
                key={course.id}
                onClick={() => navigate('course-hub', { courseId: course.id })}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = course.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#27272A'; }}
                className="group relative flex flex-col justify-between rounded-xl border border-[#27272A] bg-[#111114] p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Icon + Title Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="flex h-11 w-11 items-center justify-center rounded-lg text-lg font-bold"
                      style={{ backgroundColor: `${course.color}15`, color: course.color }}
                    >
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="rounded-full bg-[#18181C] px-2.5 py-1 text-xs font-mono text-[#A1A1AA] border border-[#27272A]">
                        {course.difficulty}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#FAFAFA] flex items-center">
                    <span>{course.name}</span>
                    <span className="ml-2 text-xs font-mono px-2 py-0.5 rounded-full border border-zinc-700 font-normal text-zinc-400">
                      {course.lessonsCount} Parts
                    </span>
                  </h3>
                  
                  <p 
                    className="text-xs font-mono mt-1 mb-3"
                    style={{ color: course.color }}
                  >
                    Primary: {course.primaryUse}
                  </p>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {course.tagline}
                  </p>
                </div>

                <div className="border-t border-[#27272A] pt-4 mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#52525B]">Est: {course.duration}</span>
                  <button 
                    onClick={() => navigate('course-hub', { courseId: course.id })}
                    className="inline-flex cursor-pointer items-center space-x-1 text-xs font-bold text-[#22D3A0] group-hover:text-white transition-colors"
                  >
                    <span>View Track</span>
                    <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION E: How UPSKILL Works */}
      <section className="bg-[#111114] py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-[#27272A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-extrabold text-[#FAFAFA]">
              How UPSKILL Works
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-3">
              Designed from first principles to optimize retention, minimize friction, and develop real muscle memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="bg-[#09090B] rounded-xl border border-[#27272A] p-8 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-[#22D3A0] font-bold text-lg font-display">
                01
              </div>
              <h3 className="text-lg font-bold text-[#FAFAFA]">Select a Language</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Choose from our professional curriculum selection cards. Access zero-friction courses instantly without tedious signup or credit card capture.
              </p>
            </div>

            <div className="bg-[#09090B] rounded-xl border border-[#27272A] p-8 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 font-bold text-lg font-display">
                02
              </div>
              <h3 className="text-lg font-bold text-[#FAFAFA]">Execute Structured Roadmap</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Complete the standard 10-part lessons designed for clarity. Pass interactive code compile checkpoints and test your knowledge with mock quizzes.
              </p>
            </div>

            <div className="bg-[#09090B] rounded-xl border border-[#27272A] p-8 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 font-bold text-lg font-display">
                03
              </div>
              <h3 className="text-lg font-bold text-[#FAFAFA]">Deploy the Capstone</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Synthesize structural components by building the end-of-track Graduation Project. Gain verified confidence, share on Discord, and claim completion badges!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION F: Featured Lesson Preview (interactive content preview) */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl font-bold text-[#FAFAFA] sm:text-3xl">
            This is what you\'ll learn in your first 15 minutes:
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2">
            No fluff, no boring academic theories. Just modern, functional, developer-native code right from lesson one.
          </p>
        </div>

        {/* Tab selection indicators */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => handleTabSelect(course.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all cursor-pointer ${
                activeTab === course.id
                  ? 'bg-[#FAFAFA] text-[#09090B] border-[#FAFAFA]'
                  : 'bg-[#111114] text-[#A1A1AA] border-[#27272A] hover:bg-[#18181C]'
              }`}
            >
              {course.name}
            </button>
          ))}
        </div>

        {/* Selected tab curriculum overview card display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Theory card Left */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-[#27272A] bg-[#111114] p-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold mb-4" style={{ color: selectedCourseTab.color }}>
                <Code className="h-4 w-4" />
                <span>{selectedCourseTab.name} Track Preview</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#FAFAFA] mb-2">
                Part 1: {selectedCourseTab.lessons[0].title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                {selectedCourseTab.lessons[0].keyTopicsExplanation}
              </p>
              
              <div className="space-y-3 mt-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAFAFA]/75 py-2">Topics Covered:</span>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedCourseTab.lessons[0].topics.map((t, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-[#A1A1AA]">
                      <CheckCircle className="h-3 w-3 text-[#22D3A0]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#27272A] pt-4 mt-6">
              <button
                onClick={() => navigate('lesson', { courseId: selectedCourseTab.id, lessonId: 'part-1' })}
                className="w-full inline-flex h-10 cursor-pointer items-center justify-center rounded bg-[#22D3A0] px-4 text-xs font-bold text-[#09090B] hover:scale-[1.01] transition-transform"
              >
                Launch This Course First Lesson
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Code codeSnippet Right */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-[#27272A] bg-[#0E0E11] p-0 overflow-hidden">
            <div className="flex items-center justify-between bg-[#141419] px-4 py-2 border-b border-[#27272A]">
              <span className="font-mono text-xs text-[#A1A1AA]">
                {selectedCourseTab.lessons[0].title}.cs // Editor
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#27272A] text-zinc-400">
                {selectedCourseTab.lessonsCount} Parts
              </span>
            </div>
            <pre className="p-5 font-mono text-[#FAFAFA] text-xs sm:text-sm overflow-x-auto leading-relaxed bg-[#09090B] flex-grow">
              <code>
                {selectedCourseTab.lessons[0].sections.find(s => s.type === 'code')?.codeSnippet?.code || `print("Hello World")`}
              </code>
            </pre>
            <div className="bg-[#141419] px-5 py-3 border-t border-[#27272A] flex items-center justify-between">
              <span className="text-xs text-[#A1A1AA]">Estimated compilation: <strong className="text-[#22D3A0]">0.1s</strong></span>
              <span className="text-[11px] font-mono text-zinc-500">Pressing Launch starts the active editor sandbox</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION G: Community & Social Testimonials */}
      <section className="bg-[#111114] border-t border-b border-[#27272A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-extrabold text-[#FAFAFA]">
              Approved by Self-Taught Peers
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-3">
              Read how absolute beginners changed careers utilizing our curriculum, step capstones, and friendly community forums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div 
                key={i}
                className="bg-[#09090B] rounded-xl border border-[#27272A] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#22D3A0] space-x-1 mb-4">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 border-t border-[#27272A]/50 pt-4 mt-6">
                  <img 
                    src={test.avatar} 
                    alt={test.author} 
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full border border-[#27272A] object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#FAFAFA]">{test.author}</h4>
                    <p className="text-xs text-[#52525B]">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Discord CTA strip */}
          <div className="mt-12 text-center rounded-xl border border-[#27272A] bg-gradient-to-r from-[#22D3A0]/5 to-[#22D3EE]/5 p-6 max-w-3xl mx-auto">
            <p className="text-sm text-[#A1A1AA]">
              Stuck on a syntax bug or having computer setup problems? Don\'t stress. 
              Join our <strong className="text-[#FAFAFA]">UPSKILL Discord channel</strong> to get continuous peer feedback.
            </p>
            <div className="mt-4 flex justify-center">
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center rounded bg-emerald-500 px-4 text-xs font-bold text-[#09090B] hover:scale-[1.01] transition-transform"
              >
                Join our Discord Server Community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: Newsletter / Free Cheatsheet capture */}
      <section className="py-20 mx-auto max-w-4xl px-4 text-center">
        <div className="rounded-2xl border border-[#27272A] bg-[#111114] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-blue-500/5 blur-3xl -z-10" />
          
          <h2 className="font-display text-2xl font-bold text-[#FAFAFA] sm:text-3xl">
            Get the Ultimate Coding Cheatsheet Pack (Free)
          </h2>
          
          <p className="text-sm text-[#A1A1AA] mt-3 max-w-xl mx-auto">
            Subscribe to receive our structured Copiable ES6 Cheatsheet, Python standard library cheat cards, and weekly career search updates.
          </p>

          <div className="mt-8 max-w-md mx-auto">
            {newsletterSubscribed ? (
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-bold text-[#22D3A0] flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Success! Ultimate Coding Cheatsheet sent to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-grow rounded-lg border border-[#3F3F46] bg-[#09090B] px-4 py-2.5 text-sm font-medium text-[#FAFAFA] placeholder-[#52525B] focus:border-[#22D3A0] focus:ring-0 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#22D3A0] text-[#09090B] font-bold text-sm px-6 py-2.5 rounded-lg cursor-pointer hover:scale-[1.01] active:scale-[0.98] transition-transform"
                >
                  Download Free Pack
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#52525B] mt-3">
              We care about your privacy. Zero spam logs, unsubscribe instantly anytime.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
