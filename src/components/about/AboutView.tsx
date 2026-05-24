import { Terminal, Award, BookOpen, Heart, Github, Star, CheckCircle } from 'lucide-react';

interface AboutViewProps {
  navigate: (view: string, params?: any) => void;
}

export default function AboutView({ navigate }: AboutViewProps) {
  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
      <div className="mx-auto max-w-4xl relative">
        <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-[#22D3A0]/5 blur-3xl -z-10" />

        {/* PAGE INTRO */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-700 bg-[#111114] px-4 text-xs font-mono font-bold text-zinc-400 mb-4 uppercase">
            Our Mission & Philosophy
          </div>
          <h1 className="font-display text-4xl font-extrabold text-[#FAFAFA] sm:text-5xl">
            Learn to Code. For Free.<br />
            <span className="bg-gradient-to-r from-[#22D3A0] to-[#22D3EE] bg-clip-text text-transparent">Forever.</span>
          </h1>
          <p className="text-sm text-[#A1A1AA] mt-3">
            UPSKILL represents a direct commitment to volunteer, open education, created to bypass expensive academies and gatekept college systems.
          </p>
        </div>

        {/* FOUNDER STORY GRID STATEMENT */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Creator Profile Card (left 5 cols) */}
          <div className="md:col-span-5 rounded-xl border border-[#27272A] bg-[#111114] p-6 text-center space-y-4">
            <div className="relative inline-block">
              <div className="h-28 w-28 rounded-full border-2 border-[#22D3A0] bg-[#1E1E24] flex items-center justify-center mx-auto text-[#22D3A0] text-3xl font-mono font-bold tracking-tighter">
                SC
              </div>
              <span className="absolute bottom-1 right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-black text-[10px] font-bold border border-[#111114]" title="Active Volunteer Tutor">✓</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#FAFAFA]">Siedel Cabrales</h3>
              <p className="text-xs text-[#22D3A0] font-mono">Founder & Lead Volunteer Tutor</p>
            </div>

            {/* Quick profile tags lists */}
            <div className="border-t border-b border-[#27272A]/70 py-4 text-xs space-y-2.5 text-[#A1A1AA] text-left">
              <div className="flex items-center space-x-2">
                <span className="text-[#22D3A0] font-bold">🖥️</span>
                <span>IT Specialist / Web Developer (Fullstack)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#22D3A0] font-bold">🛠️</span>
                <span>Created UPSKILL Sandbox model</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#22D3A0] font-bold">💡</span>
                <span>Believes education must cost $0</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-2 text-[#52525B]">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Star className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Core Philosophy bio (right 7 cols) */}
          <div className="md:col-span-7 rounded-xl border border-[#27272A] bg-[#111114] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-500 block uppercase font-bold">The Creator\'s Story</span>
              <h2 className="text-xl font-bold text-[#FAFAFA]">A Note from Siedel:</h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed italic">
                "I've reached college education studying IT, yet there are few Professors that are good at teaching code. I want to help students start programming even without a college education — to open a path for them to explore modern Programming Languages with ease, and for free."
              </p>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                As a student, I saw firsthand how inconsistent and gatekept technical instructions are. Commercial bootcamps demand thousands of dollars, or lock tests behind credit cards. I built UPSKILL to be the open-source resource I wished I had—giving absolute beginners a tactile, sandboxed roadmap to build genuine muscle memory.
              </p>
            </div>

            <div className="border-t border-[#27272A] pt-4 mt-6 flex items-center justify-between text-xs text-zinc-500">
              <span className="font-mono">May 2026 // Manila, PH</span>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded uppercase">Volunteer Initiative</span>
            </div>
          </div>

        </section>

        {/* WHY FREE PHILOSOPHY DIVISION BLOCK */}
        <section className="rounded-xl border border-[#27272A] bg-[#111114] p-6 sm:p-10 mb-12 space-y-6">
          <h2 className="font-display text-lg font-bold text-[#FAFAFA] border-b border-[#27272A] pb-3 flex items-center">
            <Heart className="h-5 w-5 text-[#22D3A0] mr-2 fill-current" />
            <span>Why is UPSKILL 100% Free?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#A1A1AA] leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-bold text-white">1. Democratic Access for Everyone</h3>
              <p>
                We believe that learning to build software belongs with the public. Talent is distributed globally, but financial circumstances are not. Making programming accessible is our absolute priority.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-white">2. No Account Friction</h3>
              <p>
                Students shouldn't have to navigate marketing popups or enter credit cards just to run their first hello world program. You can complete all 60 lesson parts anonymously without registering.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-white">3. Supported by the Community</h3>
              <p>
                UPSKILL operates completely under volunteer efforts. Project hosting expenses are subsidized through job board listings, sponsor donations, and technical tools. We do not place paywalls on lessons.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-white">4. Powered by Hands-On Playgrounds</h3>
              <p>
                We value tactile experiments. By simulating compilers on-client, we enable everyone to write variables and run logical branches without heavy computer installations.
              </p>
            </div>
          </div>
        </section>

        {/* DIRECT COMMUNITY CTA STATEMENTS */}
        <div className="rounded-xl border border-[#27272A] bg-[#111114] p-8 text-center space-y-5">
          <h2 className="font-display text-xl sm:text-2xl font-black text-white">Open Source & Community Driven</h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl mx-auto">
            Want to help translate lessons, contribute practice quiz elements, or host community groups? UPSKILL is 100% open source on GitHub. Join our volunteer circle!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button 
              onClick={() => navigate('contact')}
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded bg-[#22D3A0] px-5 text-xs font-bold text-zinc-900 hover:scale-[1.01] transition-transform"
            >
              Contact Siedel Cabrales
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
