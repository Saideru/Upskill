import { useState, useEffect, FormEvent } from 'react';
import { courses } from '../../data/coursesData';
import { 
  ArrowLeft, Terminal, Award, CheckSquare, Square, 
  ExternalLink, Github, MessageSquare, Download, CheckCircle, 
  Sparkles, HelpCircle, Save, Send
} from 'lucide-react';
import { 
  isCapstoneCompleted, toggleCapstoneCompletion, getStreak 
} from '../../lib/progress';

interface CapstoneViewProps {
  courseId: string;
  navigate: (view: string, params?: any) => void;
}

export default function CapstoneView({ courseId, navigate }: CapstoneViewProps) {
  const course = courses.find(c => c.id === courseId);
  
  // Dynamic localStorage Checklist states
  const [checklist, setChecklist] = useState<boolean[]>([]);
  const [completeAlert, setCompleteAlert] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');
  const [studentNotes, setStudentNotes] = useState('');
  const [isDoneState, setIsDoneState] = useState(false);

  useEffect(() => {
    if (course) {
      const isDone = isCapstoneCompleted(course.id);
      setIsDoneState(isDone);
      
      // Load or initialize checkbox status from localStorage
      const localChecklist = localStorage.getItem(`upskill_capstone_chk_${course.id}`);
      if (localChecklist) {
        setChecklist(JSON.parse(localChecklist));
      } else {
        const initial = new Array(course.capstone.steps.length).fill(false);
        setChecklist(initial);
      }
    }
  }, [courseId, course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#09090B] py-20 px-4 text-center">
        <h3 className="text-xl font-bold text-white">Course capstone not found</h3>
        <button onClick={() => navigate('courses')} className="mt-4 text-[#22D3A0] underline">
          View All Courses
        </button>
      </div>
    );
  }

  const handleStepToggle = (index: number) => {
    const updated = [...checklist];
    updated[index] = !updated[index];
    setChecklist(updated);
    localStorage.setItem(`upskill_capstone_chk_${course.id}`, JSON.stringify(updated));
  };

  const handleSubmitProject = (e: FormEvent) => {
    e.preventDefault();
    if (!isDoneState) {
      toggleCapstoneCompletion(course.id);
      setIsDoneState(true);
    }
    setCompleteAlert(true);
  };

  const handleResetCapstone = () => {
    if (isDoneState) {
      toggleCapstoneCompletion(course.id);
      setIsDoneState(false);
    }
    const initial = new Array(course.capstone.steps.length).fill(false);
    setChecklist(initial);
    localStorage.removeItem(`upskill_capstone_chk_${course.id}`);
    setCompleteAlert(false);
    setGithubUrl('');
    setStudentNotes('');
  };

  // Check if all steps complete
  const allChecked = checklist.length > 0 && checklist.every(chk => chk === true);

  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        
        {/* Breadcrumb line navigation */}
        <button 
          onClick={() => navigate('course-hub', { courseId: course.id })} 
          className="inline-flex cursor-pointer items-center space-x-1.5 text-xs font-mono font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Syllabus Hub</span>
        </button>

        {/* HEADER BLOCK CONTAINER */}
        <div className="border border-[#27272A] bg-[#111114] rounded-2xl p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-[#A855F7]/5 blur-3xl -z-10" />
          
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
                style={{ backgroundColor: `${course.color}15`, color: course.color }}
              >
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-[#A855F7] font-bold">Graduation Capstone Level</span>
            </div>

            <h1 className="font-display text-2xl font-extrabold text-[#FAFAFA] sm:text-4xl">
              Capstone: {course.capstone.title}
            </h1>
            
            <p className="text-sm text-[#A1A1AA] mt-4 leading-relaxed">
              Consolidate every skill gained from Part 1 through Part 9 inside your track. Structure classes, persistent streams, diagnostic logs, and build your Graduation Project portfolio.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {course.capstone.skillsApplied.map((skill, index) => (
                <span key={index} className="bg-[#18181C] border border-[#27272A] px-2.5 py-1 rounded text-xs font-mono text-[#A1A1AA]">
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CHECKLIST LIST GUIDELINES (left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6">
              <div className="flex items-center justify-between border-b border-[#27272A]/70 pb-3 mb-4">
                <h3 className="font-display text-sm font-bold text-[#FAFAFA] flex items-center">
                  <CheckSquare className="h-4 w-4 text-[#22D3A0] mr-1.5" />
                  <span>Build Steps Checklist</span>
                </h3>
                {allChecked && <span className="text-[10px] font-bold font-mono text-[#22D3A0] bg-[#22D3A0]/10 px-2 py-0.5 rounded uppercase">All Steps Checked</span>}
              </div>

              <div className="space-y-3">
                {course.capstone.steps.map((step, idx) => {
                  const checked = checklist[idx];
                  return (
                    <div 
                      key={idx}
                      onClick={() => handleStepToggle(idx)}
                      className={`flex items-start space-x-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                        checked 
                          ? 'border-[#22D3A0]/20 bg-[#22D3A0]/5 text-[#22D3A0]' 
                          : 'border-[#27272A] bg-[#09090B] text-[#A1A1AA] hover:bg-[#111114]'
                      }`}
                    >
                      <button className="shrink-0 mt-0.5 cursor-pointer">
                        {checked ? (
                          <CheckCircle className="h-4.5 w-4.5 text-[#22D3A0]" />
                        ) : (
                          <Square className="h-4.5 w-4.5 text-zinc-600" />
                        )}
                      </button>
                      <div className="text-xs sm:text-sm">
                        <span className="font-mono font-bold text-[10px] uppercase block mb-0.5 text-[#52525B]">Step {(idx+1).toString().padStart(2,'0')}:</span>
                        <p>{step}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Design Spec Mockup text section */}
            <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 space-y-2">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FAFAFA]">Aesthetic Mockup Blueprint:</h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed italic border-l-2 p-2 bg-[#09090B] border-zinc-700">
                "{course.capstone.mockupDescription}"
              </p>
            </div>
          </div>

          {/* GRADUATION TRIGGER AND BADGE DRAWER (right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SUBMISSION FORM OR BADGE STATUS */}
            {isDoneState ? (
              <div className="rounded-xl border border-emerald-500/30 bg-[#111114] p-6 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-[#22D3A0]" />
                
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-[#22D3A0] mb-2 scale-[1.05]">
                  <Award className="h-9 w-9 animate-bounce" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#22D3A0] tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded">Graduation Achieved</span>
                  <h3 className="font-display text-lg font-bold text-white pt-2">Congratulations, Graduate!</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    You have officially completed the UPSKILL {course.name} Developer Roadmap. Claim your Graduation verification token:
                  </p>
                </div>

                {/* Printable completion Badge card layout */}
                <div className="rounded-xl border border-[#27272A] bg-[#0E0E11] p-4 text-center select-none shadow-xl border-dashed">
                  <span className="text-[9px] font-mono font-bold text-[#52525B] lock">UPSKILL OFFICIAL CERTIFICATE BADGE</span>
                  <div className="h-28 w-28 mx-auto my-3 rounded-full flex items-center justify-center text-white font-extrabold relative" style={{ background: `linear-gradient(135deg, ${course.color}, #09090B)` }}>
                    <div className="absolute inset-1.5 rounded-full bg-[#111114] border-2 border-[#27272A] flex flex-col items-center justify-center">
                      <Terminal className="h-6 w-6 mb-1" style={{ color: course.color }} />
                      <span className="text-xs font-display font-black leading-none">{course.name}</span>
                      <span className="text-[8px] uppercase font-mono tracking-widest mt-1 text-[#22D3A0]">PASSED</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono block text-[#FAFAFA] font-bold">VERIFIED BADGE</span>
                  <span className="text-[9px] text-[#52525B] font-mono font-semibold">TOKEN ID: {course.name}_CAD_{course.difficulty === 'Beginner' ? 'BGN' : 'INT'}</span>
                </div>

                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      alert(`Successfully downloading custom ${course.name} completion verification badge!`);
                    }}
                    className="w-full inline-flex h-9 cursor-pointer items-center justify-center rounded bg-[#22D3A0] px-4 text-xs font-bold text-[#09090B] hover:scale-[1.01] transition-all"
                  >
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Download PNG Badge
                  </button>
                  <button 
                    onClick={handleResetCapstone}
                    className="w-full inline-flex h-9 cursor-pointer items-center justify-center rounded border border-[#27272A] bg-[#18181C] px-4 text-xs font-semibold text-[#A1A1AA] hover:bg-[#27272A] transition-colors"
                  >
                    Reset and Re-Build Capstone
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 space-y-5">
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#FAFAFA]">Submit Project & Graduate</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Ready to claim your {course.name} Developer Graduation Badge? Populate your codes or GitHub parameters below:
                  </p>
                </div>

                <form onSubmit={handleSubmitProject} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">GitHub Repository Link:</label>
                    <div className="relative">
                      <Github className="absolute left-3 top-3 h-4 w-4 text-zinc-600" />
                      <input 
                        type="url"
                        placeholder="https://github.com/yourname/my-app"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        required
                        className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-[#3F3F46] bg-[#09090B] text-white focus:border-[#22D3A0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">Capstones Note / Implementation steps:</label>
                    <textarea 
                      placeholder="e.g. Completed LINQ filters and configured JSON stream saving successfully..."
                      value={studentNotes}
                      onChange={(e) => setStudentNotes(e.target.value)}
                      className="w-full p-3 min-h-[80px] text-xs rounded-lg border border-[#3F3F46] bg-[#09090B] text-white focus:border-[#22D3A0] focus:outline-none placeholder-zinc-700 leading-relaxed"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={!allChecked}
                    className="w-full inline-flex h-10 items-center justify-center rounded bg-[#22D3A0] text-[#09090B] text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5 mr-1.5" />
                    Submit Portfolio Project
                  </button>
                </form>

                <div className="border-t border-[#27272A] pt-3 text-[10px] text-zinc-500 flex items-center space-x-1 justify-center">
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>Check off all checklist steps above to enable submission.</span>
                </div>
              </div>
            )}

            {/* Starter Code Block container */}
            <div className="rounded-xl border border-[#27272A] bg-[#0E0E11] p-0 overflow-hidden">
              <div className="flex items-center justify-between bg-[#141419] px-4 py-2.5 border-b border-[#27272A]">
                <span className="font-mono text-[10px] text-zinc-400">Main Program // Starter Boilerplate</span>
              </div>
              <pre className="p-4 font-mono text-[11px] text-[#FAFAFA] bg-[#09090B] overflow-x-auto leading-relaxed select-text">
                <code>{course.capstone.starterCode || `// Starter Code`}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
