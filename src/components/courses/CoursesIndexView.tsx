import { useState } from 'react';
import { courses } from '../../data/coursesData';
import { 
  BookOpen, Clock, BarChart, ChevronDown, ChevronUp, Sparkles, AlertCircle
} from 'lucide-react';

interface CoursesIndexViewProps {
  navigate: (view: string, params?: any) => void;
}

type DifficultyFilter = 'all' | 'Beginner' | 'Beginner-Intermediate';

export default function CoursesIndexView({ navigate }: CoursesIndexViewProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const toggleCourseAccordion = (id: string) => {
    if (expandedCourseId === id) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(id);
    }
  };

  const filteredCourses = courses.filter(course => {
    if (selectedDifficulty === 'all') return true;
    return course.difficulty === selectedDifficulty;
  });

  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Grid banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#FAFAFA] sm:text-5xl">
            All Courses — Free, Forever.
          </h1>
          <p className="text-sm text-[#A1A1AA] mt-3">
            Structured roadmap tracks loaded with interactive code playgrounds and technical portfolios. No logins required to start.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#27272A] pb-6 mb-10">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#A1A1AA]">
            <span>Filter Tracks:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Difficulties', value: 'all' },
              { label: 'Beginner Only', value: 'Beginner' },
              { label: 'Beginner-Intermediate Only', value: 'Beginner-Intermediate' }
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedDifficulty(btn.value as DifficultyFilter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border cursor-pointer transition-all ${
                  selectedDifficulty === btn.value
                    ? 'bg-[#22D3A0] text-[#09090B] border-[#22D3A0]'
                    : 'bg-[#111114] text-[#A1A1AA] border-[#27272A] hover:bg-[#18181C]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Large Track Cards list */}
        <div className="space-y-6">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            return (
              <div 
                key={course.id}
                className="rounded-xl border border-[#27272A] bg-[#111114] overflow-hidden hover:border-[#3F3F46] hover:shadow-2xl transition-all duration-300"
              >
                {/* Header card area */}
                <div 
                  onClick={() => toggleCourseAccordion(course.id)} 
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl font-bold"
                      style={{ backgroundColor: `${course.color}15`, color: course.color }}
                    >
                      <span>{course.name[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 flex-wrap gap-y-1">
                        <h2 className="text-xl font-bold text-[#FAFAFA]">{course.name} Developer Roadmap</h2>
                        <span className="rounded-full bg-[#18181C] px-2.5 py-0.5 text-xs font-mono text-[#A1A1AA] border border-[#27272A]">
                          {course.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-[#A1A1AA] mt-1.5 leading-relaxed max-w-2xl">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 border-t border-[#27272A] md:border-0 pt-4 md:pt-0">
                    <div className="flex items-center space-x-4 text-xs font-mono text-[#A1A1AA]">
                      <span className="flex items-center"><Clock className="h-3.5 w-3.5 text-[#52525B] mr-1.5" />{course.duration}</span>
                      <span className="flex items-center"><BookOpen className="h-3.5 w-3.5 text-[#52525B] mr-1.5" />{course.lessonsCount} Parts</span>
                    </div>
                    <button 
                      className="mt-2 text-xs font-mono text-[#22D3A0] hover:underline flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Agenda' : 'Show Syllabus'}</span>
                      {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Accorion content */}
                {isExpanded && (
                  <div className="border-t border-[#27272A] bg-[#0E0E11]/85 p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#FAFAFA] mb-3">10-Part Learning Path Overview:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.lessons.map((lesson) => (
                          <div 
                            key={lesson.id} 
                            onClick={() => navigate('lesson', { courseId: course.id, lessonId: lesson.id })}
                            className="flex items-start space-x-3 rounded-lg border border-[#27272A] bg-[#111114] p-3 hover:border-[#22D3A0]/30 hover:bg-[#18181C] transition-all cursor-pointer group"
                          >
                            <span className="font-mono text-xs font-bold text-[#52525B] group-hover:text-[#22D3A0] mt-0.5">
                              P{lesson.partNumber.toString().padStart(2, '0')}
                            </span>
                            <div>
                              <h4 className="text-xs font-bold text-[#FAFAFA] group-hover:text-[#22D3A0] transition-colors">{lesson.title}</h4>
                              <p className="text-[10px] text-[#A1A1AA] mt-0.5 line-clamp-1">{lesson.topics.join(', ')}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capstone brief preview box */}
                    <div className="rounded-lg border border-dashed border-[#27272A] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center space-x-1 text-xs font-bold text-yellow-500 mb-1">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Includes Capstone Graduate Project:</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#FAFAFA]">{course.capstone.title}</h4>
                        <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">{course.capstone.description}</p>
                      </div>
                      
                      <button 
                        onClick={() => navigate('capstone', { courseId: course.id })}
                        className="rounded bg-[#18181C] border border-[#27272A] px-3.5 py-1.5 text-xs text-[#A1A1AA] font-bold hover:bg-[#27272A] transition-colors cursor-pointer shrink-0"
                      >
                        Preview Project Guide
                      </button>
                    </div>

                    {/* Footer Row action buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#27272A]">
                      <span className="text-xs text-[#52525B]">Full course free, no registration requirements</span>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => navigate('course-hub', { courseId: course.id })}
                          className="px-4 py-2 text-xs font-bold text-[#FAFAFA] border border-[#27272A] rounded-lg cursor-pointer hover:bg-[#18181C] transition-all"
                        >
                          View Syllabus Hub
                        </button>
                        <button
                          onClick={() => navigate('lesson', { courseId: course.id, lessonId: 'part-1' })}
                          className="px-4 py-2 text-xs font-bold text-[#09090B] bg-[#22D3A0] rounded-lg cursor-pointer hover:scale-[1.01] transition-transform"
                        >
                          Launch Track Part 1 →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty states warning */}
        {filteredCourses.length === 0 && (
          <div className="text-center rounded-xl border border-dashed border-[#27272A] p-12 max-w-md mx-auto">
            <AlertCircle className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-display text-sm font-bold text-[#FAFAFA]">No tracks resolve using this filter</h3>
            <p className="text-xs text-[#A1A1AA] mt-2">Try clearing your filters to inspect advanced programs.</p>
            <button 
              onClick={() => setSelectedDifficulty('all')}
              className="mt-4 text-xs font-mono text-[#22D3A0] hover:underline cursor-pointer"
            >
              Clear Difficulty Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
