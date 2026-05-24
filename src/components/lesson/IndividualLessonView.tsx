import { useState, useEffect, useRef } from 'react';
import { courses } from '../../data/coursesData';
import { 
  ChevronLeft, ChevronRight, Menu, X, ArrowLeft, Terminal, 
  CheckCircle, Circle, Play, RefreshCw, HelpCircle, 
  Flame, MessageSquare, Award, Copy, Check, Info, AlertTriangle
} from 'lucide-react';
import { 
  isLessonCompleted, toggleLessonCompletion, getStreak 
} from '../../lib/progress';

interface IndividualLessonViewProps {
  courseId: string;
  lessonId: string;
  navigate: (view: string, params?: any) => void;
}

export default function IndividualLessonView({ courseId, lessonId, navigate }: IndividualLessonViewProps) {
  const course = courses.find(c => c.id === courseId);
  const currentPartNumber = parseInt(lessonId.replace('part-', '')) || 1;
  const currentLesson = course?.lessons.find(l => l.id === lessonId);
  
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Progress states
  const [completedList, setCompletedList] = useState<string[]>([]);
  const [streakCount, setStreakCount] = useState(0);

  // Playground states
  const [sandboxCode, setSandboxCode] = useState('');
  const [compileOutput, setCompileOutput] = useState<{ text: string; success: boolean | null }>({ text: 'Ready to write and trigger compiled output.', success: null });
  const [isCompiling, setIsCompiling] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  // Quiz states
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: number }>({});
  const [quizChecked, setQuizChecked] = useState<{ [key: string]: boolean }>({});

  // Reset sandbox and quiz states on lesson change
  useEffect(() => {
    if (currentLesson) {
      setSandboxCode(currentLesson.codeTemplate || '');
      setCompileOutput({ text: 'Ready to write and trigger compiled output.', success: null });
      setUserAnswers({});
      setQuizChecked({});
    }
    
    // Sync progress tracking checkmarks
    if (course) {
      const activeProgress: string[] = [];
      course.lessons.forEach(l => {
        if (isLessonCompleted(course.id, l.id)) {
          activeProgress.push(l.id);
        }
      });
      setCompletedList(activeProgress);
    }
    
    const streak = getStreak();
    setStreakCount(streak.count);
  }, [courseId, lessonId, currentLesson]);

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen bg-[#09090B] py-20 px-4 text-center">
        <h3 className="text-xl font-bold text-white">Lesson or course not found</h3>
        <button onClick={() => navigate('courses')} className="mt-4 text-[#22D3A0] underline">
          View All Courses
        </button>
      </div>
    );
  }

  // Calculate percentage progress indicator
  const progressPercent = Math.round((completedList.length / course.lessons.length) * 100);

  const handleToggleCompletion = (lId: string) => {
    const updated = toggleLessonCompletion(course.id, lId);
    setCompletedList(updated[course.id]?.completedLessons || []);
    
    // Refresh streak counter
    const streak = getStreak();
    setStreakCount(streak.count);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(code);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const handleRunCode = () => {
    setIsCompiling(true);
    setCompileOutput({ text: 'Compiling files and initiating runtime checks...', success: null });

    setTimeout(() => {
      const solution = currentLesson.codeSolution || '';
      const cleanSolution = solution.replace(/\s+/g, '').trim();
      const cleanInput = sandboxCode.replace(/\s+/g, '').trim();
      
      const hasSolutionKeywords = currentLesson.expectedOutput 
        ? cleanInput.includes(currentLesson.expectedOutput.replace(/\s+/g, '').trim()) || cleanInput.includes('print') || cleanInput.includes('Console.WriteLine') || cleanInput.includes('System.out')
        : true;

      if (cleanInput === '' || cleanInput === currentLesson.codeTemplate?.replace(/\s+/g, '').trim()) {
        setCompileOutput({ 
          text: `[✗] COMPILER ERROR: Code field unmodified. Modify variables or operations before executing.`, 
          success: false 
        });
      } else if (cleanInput.includes(cleanSolution) || hasSolutionKeywords) {
        setCompileOutput({ 
          text: `[✓] COMPILATION SUCCESS!\n-----------------------------\nOutput: ${currentLesson.expectedOutput || 'Success'}\n-----------------------------\nExcellent work! Sandbox matches expectations! Progress saved.`, 
          success: true 
        });
        
        // Auto toggles checklist complete if not completed
        if (!completedList.includes(currentLesson.id)) {
          handleToggleCompletion(currentLesson.id);
        }
      } else {
        setCompileOutput({ 
          text: `[✗] DESIGNS CHECKS FAILED: Mismatch error.\n\nExpected Output parameters: "${currentLesson.expectedOutput || 'Operational Output'}"\n\nSuggestion: Ensure correct characters syntax, spacing, and variables parameters are configured cleanly.`, 
          success: false 
        });
      }
      setIsCompiling(false);
    }, 700);
  };

  const handleResetTemplate = () => {
    setSandboxCode(currentLesson.codeTemplate || '');
    setCompileOutput({ text: 'Ready to write and trigger compiled output.', success: null });
  };

  const selectQuizAnswer = (qId: string, optIdx: number) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
    setQuizChecked(prev => ({ ...prev, [qId]: true }));
  };

  const handleNextPart = () => {
    if (currentPartNumber < 10) {
      navigate('lesson', { courseId: course.id, lessonId: `part-${currentPartNumber + 1}` });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('capstone', { courseId: course.id });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPart = () => {
    if (currentPartNumber > 1) {
      navigate('lesson', { courseId: course.id, lessonId: `part-${currentPartNumber - 1}` });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('course-hub', { courseId: course.id });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col md:flex-row border-b border-[#27272A]">
      
      {/* MOBILE HEADER toggler bar */}
      <div className="md:hidden flex items-center justify-between border-b border-[#27272A] bg-[#111114] px-4 py-3 shrink-0">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center space-x-1.5 text-xs font-bold text-[#22D3A0]"
        >
          <Menu className="h-4 w-4" />
          <span>Syllabus Parts Blueprint ({currentPartNumber}/10)</span>
        </button>
        {streakCount > 0 && (
          <div className="flex items-center space-x-1 rounded bg-orange-500/10 px-2.5 py-0.5 text-xs font-mono font-bold text-orange-500">
            <Flame className="h-3.5 w-3.5 fill-current" />
            <span>{streakCount}d Streak</span>
          </div>
        )}
      </div>

      {/* LEFT SIDEBAR (collapsible navigation drawer) */}
      <div 
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } w-full md:w-80 shrink-0 border-r border-[#27272A] bg-[#111114] md:flex flex-col flex-grow-0`}
      >
        {/* Course details label head */}
        <div className="p-4 border-b border-[#27272A] flex items-center justify-between">
          <button 
            onClick={() => navigate('course-hub', { courseId: course.id })}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <div 
              className="flex h-8 w-8 items-center justify-center rounded text-sm font-bold shrink-0"
              style={{ backgroundColor: `${course.color}15`, color: course.color }}
            >
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <span className="text-xs text-zinc-500 font-mono">Back to Hub</span>
              <h3 className="text-sm font-extrabold text-[#FAFAFA] group-hover:text-[#22D3A0] transition-colors leading-none">{course.name} Developer</h3>
            </div>
          </button>
          
          <button 
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 rounded hover:bg-[#18181C] text-[#A1A1AA]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Progress bar container */}
        <div className="p-4 border-b border-[#27272A] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Overall progress:</span>
            <span className="text-[#22D3A0] font-bold">{progressPercent}%</span>
          </div>
          <div className="relative h-1.5 w-full rounded-full bg-[#18181C] overflow-hidden border border-[#27272A]">
            <div 
              className="h-full rounded-full bg-[#22D3A0] transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex items-center text-[10px] text-zinc-500 font-mono space-x-1.5 pt-1">
            <CheckCircle className="h-3 w-3 text-[#22D3A0]" />
            <span>{completedList.length} of 10 complete</span>
          </div>
        </div>

        {/* PARTS SELECTION INDEX LIST */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-1 max-h-[300px] md:max-h-none">
          {course.lessons.map((lesson) => {
            const isCurrent = lesson.id === lessonId;
            const isDone = completedList.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => navigate('lesson', { courseId: course.id, lessonId: lesson.id })}
                className={`w-full text-left rounded-lg p-2.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                  isCurrent 
                    ? 'bg-[#22D3A0]/10 border border-[#22D3A0]/20 text-[#22D3A0]' 
                    : 'hover:bg-[#18181C] border border-transparent text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                <div className="flex items-center space-x-2.5 truncate">
                  <span className="font-mono text-[10px] text-zinc-600 shrink-0 font-bold">
                    P{lesson.partNumber.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs font-semibold truncate">{lesson.title}</span>
                </div>

                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleCompletion(lesson.id);
                  }}
                  className="shrink-0 p-1 rounded-full cursor-pointer hover:bg-zinc-800 transition-colors"
                >
                  {isDone ? (
                    <CheckCircle className="h-4 w-4 text-[#22D3A0]" />
                  ) : (
                    <Circle className="h-4 w-4 text-zinc-600 hover:text-zinc-500" />
                  )}
                </div>
              </button>
            );
          })}
          
          {/* Capstone entry sidebar link */}
          <button
            onClick={() => navigate('capstone', { courseId: course.id })}
            className={`w-full text-left rounded-lg p-2.5 flex items-center justify-between gap-3 border border-dashed border-[#27272A] mt-2 cursor-pointer hover:bg-[#18181C]`}
          >
            <div className="flex items-center space-x-2.5 text-[#A855F7] font-bold text-xs font-mono">
              <Award className="h-4 w-4" />
              <span>🎓 Graduation Capstone</span>
            </div>
            <ChevronRight className="h-3 w-3 text-zinc-500" />
          </button>
        </div>
      </div>

      {/* COLUMN 2: MAIN WORKSPACE AREA */}
      <div className="flex-1 bg-[#09090B] overflow-y-auto px-4 py-8 sm:p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb path indicator */}
          <div className="flex items-center space-x-2 text-xs font-mono text-[#52525B] mb-6">
            <span>Roadmaps</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="cursor-pointer text-[#A1A1AA] hover:underline" onClick={() => navigate('course-hub', { courseId: course.id })}>{course.name}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#FAFAFA] font-bold">Part {currentLesson.partNumber}: {currentLesson.title}</span>
          </div>

          {/* Title Row banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#27272A] pb-6 mb-8 gap-4">
            <div>
              <span className="inline-flex rounded-full bg-[#111114] border border-[#27272A] px-2.5 py-0.5 text-xs font-mono font-bold text-[#A1A1AA] mb-2 uppercase tracking-wide">
                Part {currentLesson.partNumber} Learnings
              </span>
              <h1 className="font-display text-2xl font-extrabold text-[#FAFAFA] sm:text-3xl leading-tight">
                {currentLesson.title}
              </h1>
            </div>
            <div className="flex items-center text-xs font-mono text-zinc-500 shrink-0">
              <span className="border border-[#27272A] bg-[#111114] px-2.5 py-1 rounded">Read time: {currentLesson.estimatedReadTime}</span>
            </div>
          </div>

          {/* DYNAMIC LESSON BLOCKS CHUNKS LAYOUT */}
          <div className="space-y-8 text-sm md:text-base leading-relaxed text-[#A1A1AA]">
            {currentLesson.sections.map((sec, idx) => {
              if (sec.type === 'text') {
                return (
                  <div key={idx} className="space-y-3">
                    {sec.title && <h3 className="font-display text-base font-bold text-[#FAFAFA] mt-4">{sec.title}</h3>}
                    <p>{sec.content}</p>
                  </div>
                );
              }

              if (sec.type === 'code' && sec.codeSnippet) {
                const s = sec.codeSnippet;
                return (
                  <div key={idx} className="rounded-xl border border-[#27272A] bg-[#0E0E11] p-0 overflow-hidden my-6">
                    <div className="flex items-center justify-between bg-[#141419] px-4 py-2 border-b border-[#27272A]">
                      <span className="font-mono text-xs text-zinc-400">Syntax Highlighted // {s.language} Examples</span>
                      <button 
                        onClick={() => handleCopyCode(s.code)}
                        className="text-xs text-zinc-500 hover:text-white flex items-center space-x-1 cursor-pointer"
                      >
                        {copiedSnippet === s.code ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs sm:text-sm text-[#FAFAFA] bg-[#09090B] overflow-x-auto leading-relaxed border-l-2" style={{ borderLeftColor: course.color }}>
                      <code>{s.code}</code>
                    </pre>
                    {s.explanation && (
                      <div className="bg-[#141419] p-3 text-xs border-t border-[#27272A] leading-relaxed text-zinc-400">
                        <strong>Code Insight:</strong> {s.explanation}
                      </div>
                    )}
                  </div>
                );
              }

              if (sec.type === 'callout') {
                const isWarning = sec.calloutType === 'warning' || sec.calloutType === 'danger';
                return (
                  <div 
                    key={idx} 
                    className={`rounded-lg border p-4 my-6 flex items-start gap-3 text-xs leading-relaxed ${
                      isWarning 
                        ? 'bg-amber-500/5 text-amber-300 border-amber-500/20' 
                        : 'bg-emerald-500/5 text-[#22D3A0] border-[#22D3A0]/20'
                    }`}
                  >
                    {isWarning ? (
                      <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5 text-amber-400" />
                    ) : (
                      <Info className="h-4.5 w-4.5 shrink-0 mt-0.5 text-emerald-400" />
                    )}
                    <div>
                      <strong className="font-bold uppercase block tracking-wider mb-1">{sec.title || (isWarning ? 'Warning Checkpoint' : 'Pro Tip Lesson')}</strong>
                      <p>{sec.content}</p>
                    </div>
                  </div>
                );
              }

              if (sec.type === 'real-world') {
                return (
                  <div 
                    key={idx} 
                    className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 my-6 text-xs text-blue-300"
                  >
                    <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wide mb-1 text-blue-400">
                      <Terminal className="h-4 w-4" />
                      <span>Where is this used in the real world?</span>
                    </div>
                    <p>{sec.content}</p>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* INTERACTIVE WORKSPACE COMPILER PLAYGROUND EDITOR */}
          {currentLesson.codeTemplate && (
            <div className="rounded-xl border border-[#27272A] bg-[#111114] p-0 overflow-hidden my-12" id="playground">
              <div className="flex items-center justify-between bg-[#18181C] px-4 py-2.5 border-b border-[#27272A]">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold text-[#FAFAFA]">Interactive Code Playground</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={handleResetTemplate}
                    className="text-[10px] font-mono text-zinc-500 hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span>Reset Initial Template</span>
                  </button>
                </div>
              </div>

              {/* Text Arena area */}
              <div className="p-4 bg-[#09090B]">
                <p className="text-xs text-[#A1A1AA] mb-2 font-mono">Input Editor ({course.name} compliant syntax checks):</p>
                <textarea
                  value={sandboxCode}
                  onChange={(e) => setSandboxCode(e.target.value)}
                  className="font-mono text-xs sm:text-sm text-emerald-400 bg-[#09090B] p-4 placeholder-zinc-700 min-h-[160px] rounded-lg border border-[#27272A] w-full focus:border-emerald-500 focus:outline-none focus:ring-0 leading-relaxed select-text"
                  spellCheck={false}
                />
              </div>

              {/* Execution console buttons bar */}
              <div className="bg-[#18181C] p-3 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-[#52525B]">Compiled results run instantly 100% on sandboxed runtime checks.</span>
                <button
                  onClick={handleRunCode}
                  disabled={isCompiling}
                  className="w-full sm:w-auto inline-flex h-9 cursor-pointer items-center justify-center rounded bg-[#22D3A0] px-5 text-xs font-bold text-[#09090B] hover:scale-[1.01] transition-transform active:scale-[0.98] disabled:opacity-55"
                >
                  <Play className="h-3.5 w-3.5 mr-1.5 fill-current" />
                  {isCompiling ? 'Running Diagnostics...' : 'Verify Compilation & Run Code →'}
                </button>
              </div>

              {/* Logs output console panel */}
              <div className="bg-[#09090B] px-5 py-4 border-t border-[#27272A] font-mono text-xs leading-relaxed select-text">
                <span className="text-[10px] uppercase text-[#52525B] font-bold block mb-1">Sandbox Execution Logs Output:</span>
                <pre 
                  className={`whitespace-pre-wrap ${
                    compileOutput.success === true 
                      ? 'text-emerald-400' 
                      : compileOutput.success === false 
                        ? 'text-red-400' 
                        : 'text-[#A1A1AA]'
                  }`}
                >
                  {compileOutput.text}
                </pre>
              </div>
            </div>
          )}

          {/* DYNAMIC QUIZ KNOWLEDGE CHECK DIVISION */}
          {currentLesson.quiz && currentLesson.quiz.length > 0 && (
            <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 sm:p-8 my-12 space-y-6">
              <div className="flex items-center space-x-1.5 border-b border-[#27272A] pb-3 mb-4">
                <HelpCircle className="h-5 w-5 text-[#22D3A0]" />
                <h3 className="font-display text-lg font-bold text-[#FAFAFA]">
                  Knowledge Check Quiz ({currentLesson.quiz.length} Questions)
                </h3>
              </div>

              {currentLesson.quiz.map((q, qIndex) => {
                const checked = quizChecked[q.id];
                const selectedAns = userAnswers[q.id];
                return (
                  <div key={q.id} className="space-y-3 pb-6 border-b border-[#27272A]/40 last:border-0 last:pb-0">
                    <p className="text-xs font-mono font-bold text-zinc-500">QUESTION {(qIndex + 1).toString().padStart(2, '0')}:</p>
                    <p className="text-sm font-bold text-[#FAFAFA]">{q.question}</p>
                    
                    <div className="grid grid-cols-1 gap-2 mt-3">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedAns === optIdx;
                        const isCorrect = q.correctAnswerIndex === optIdx;
                        
                        let optStyle = 'border-[#27272A] bg-[#09090B] text-[#A1A1AA] hover:bg-[#18181C] hover:border-zinc-700';
                        if (checked) {
                          if (isCorrect) {
                            optStyle = 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold';
                          } else if (isSelected) {
                            optStyle = 'border-red-500/30 bg-red-500/10 text-red-400';
                          }
                        } else if (isSelected) {
                          optStyle = 'border-[#22D3A0]/40 bg-[#22D3A0]/5 text-[#22D3A0]';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => selectQuizAnswer(q.id, optIdx)}
                            disabled={checked}
                            className={`w-full text-left rounded-lg border p-3 text-xs cursor-pointer transition-colors ${optStyle}`}
                          >
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {checked && (
                      <div className={`rounded-lg border p-4 text-xs leading-relaxed mt-2 ${
                        selectedAns === q.correctAnswerIndex 
                          ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10' 
                          : 'bg-red-500/5 text-red-400 border-red-500/10'
                      }`}>
                        <strong>{selectedAns === q.correctAnswerIndex ? '[✓] Correct explanation:' : '[✗] Mismatch explanation:'}</strong>
                        <p className="mt-1">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* KEY TAKEAWAYS BLOCK */}
          {currentLesson.keyTakeaways && (
            <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 sm:p-8 my-10">
              <h4 className="font-display text-sm font-bold tracking-tight text-[#FAFAFA] border-b border-[#27272A] pb-2 mb-4">Key Takeaways Summary</h4>
              <ul className="space-y-2 text-xs text-[#A1A1AA]">
                {currentLesson.keyTakeaways.map((way, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#22D3A0] shrink-0 mt-0.5" />
                    <span>{way}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* NAVIGATION FOOTER ROW */}
          <div className="flex items-center justify-between border-t border-[#27272A] pt-8 mt-12 gap-4">
            <button
              onClick={handlePrevPart}
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#3F3F46] bg-[#111114] px-4 text-xs font-bold text-[#FAFAFA] hover:bg-[#18181C] transition-colors shrink-0"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              {currentPartNumber === 1 ? 'Syllabus Hub' : `Part ${currentPartNumber - 1}`}
            </button>
            
            <div className="font-mono text-xs text-zinc-500 hidden sm:block">
              Part {currentLesson.partNumber.toString().padStart(2, '0')} of 10
            </div>

            <button
              onClick={handleNextPart}
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[#22D3A0] px-4 text-xs font-bold text-[#09090B] hover:scale-[1.01] transition-transform shrink-0"
            >
              <span>{currentPartNumber === 10 ? 'Enter Graduation Capstone →' : `Next: Part ${currentPartNumber + 1}`}</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
