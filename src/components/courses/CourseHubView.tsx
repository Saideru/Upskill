import { courses } from '../../data/coursesData';
import { 
  CheckCircle, ArrowLeft, Terminal, Play, HelpCircle, 
  Layers, Users, Award, ExternalLink
} from 'lucide-react';

interface CourseHubViewProps {
  courseId: string;
  navigate: (view: string, params?: any) => void;
}

export default function CourseHubView({ courseId, navigate }: CourseHubViewProps) {
  const course = courses.find((c) => c.id === courseId);

  // Return to lists if course missing
  if (!course) {
    return (
      <div className="min-h-screen bg-[#09090B] py-20 px-4 text-center">
        <h3 className="text-xl font-bold text-white">Course track not found</h3>
        <button 
          onClick={() => navigate('courses')}
          className="mt-4 text-[#22D3A0] underline"
        >
          View All Courses
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Breadcrumb row & Back button arrow */}
        <button 
          onClick={() => navigate('courses')} 
          className="inline-flex cursor-pointer items-center space-x-1.5 text-xs font-mono font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Courses</span>
        </button>

        {/* HERO SECTION CONTAINER */}
        <div className="relative rounded-2xl border border-[#27272A] bg-[#111114] p-8 md:p-12 mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl -z-10" style={{ backgroundColor: `${course.color}10` }} />
          
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
                style={{ backgroundColor: `${course.color}15`, color: course.color }}
              >
                <Terminal className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-[#A1A1AA]">{course.difficulty} Track</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold text-[#FAFAFA] sm:text-5xl">
              {course.name} Certification Program
            </h1>
            
            <p className="font-display text-sm md:text-base mt-2" style={{ color: course.color }}>
              "{course.tagline}"
            </p>

            <p className="text-sm text-[#A1A1AA] mt-4 leading-relaxed">
              {course.description}
            </p>

            {/* Quick badges info bar */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-zinc-400 border-t border-[#27272A]/80 pt-4 font-mono">
              <span>Duration: <strong className="text-emerald-400">{course.duration}</strong></span>
              <span>Lessons: <strong className="text-blue-400">{course.lessonsCount} Core Parts</strong></span>
              <span>Project: <strong className="text-purple-400">1 Portfolio Capstone</strong></span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => navigate('lesson', { courseId: course.id, lessonId: 'part-1' })}
                className="w-full sm:w-auto inline-flex h-11 cursor-pointer items-center justify-center rounded bg-[#22D3A0] px-6 text-sm font-bold text-[#09090B] hover:scale-[1.01] transition-transform"
              >
                <Play className="h-4 w-4 mr-1.5 fill-current" />
                Start Part 1 — Free
              </button>
              <button
                onClick={() => navigate('capstone', { courseId: course.id })}
                className="w-full sm:w-auto inline-flex h-11 cursor-pointer items-center justify-center rounded border border-[#3F3F46] bg-[#18181C] px-6 text-sm font-semibold text-[#FAFAFA] hover:bg-[#27272A] transition-colors"
              >
                Preview Final Project
              </button>
            </div>
          </div>
        </div>

        {/* WHY LEARN AND INSTRUCTOR NOTE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Why Learn Point List (left 7 cols) */}
          <div className="md:col-span-8 space-y-6">
            <h2 className="font-display text-lg font-bold text-[#FAFAFA] border-b border-[#27272A] pb-2">
              Why master {course.name}?
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {course.whyLearn.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-[#A1A1AA] leading-relaxed">
                  <CheckCircle className="h-5 w-5 text-[#22D3A0] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-sm font-bold text-[#FAFAFA] pt-4">Where is {course.name} used in the real world:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {course.realWorldUseCases.map((uc, i) => (
                <div key={i} className="rounded-lg border border-[#27272A] bg-[#111114] p-3 text-xs text-[#A1A1AA] font-semibold">
                  {uc}
                </div>
              ))}
            </div>
          </div>

          {/* Personas Fit details (right 4 cols) */}
          <div className="md:col-span-4 space-y-6 bg-[#111114] border border-[#27272A] rounded-xl p-6">
            <h3 className="font-display text-sm font-bold tracking-tight text-[#FAFAFA]">Who is this for?</h3>
            <ul className="space-y-4 text-xs text-[#A1A1AA]">
              {course.whoIsThisFor.map((item, id) => (
                <li key={id} className="flex items-start space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22D3A0] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#27272A] pt-4 mt-4 text-[11px] text-zinc-500">
              <span className="font-bold flex items-center mb-1 text-zinc-400">
                <HelpCircle className="h-3.5 w-3.5 mr-1" /> No experience required?
              </span>
              No upfront compiler experience or server credentials needed. We host code sandboxes client-side.
            </div>
          </div>

        </div>

        {/* CURRICULUM SYLLABUS LIST TABLE */}
        <section className="mb-12">
          <div className="flex items-center justify-between border-b border-[#27272A] pb-3 mb-6">
            <h2 className="font-display text-xl font-bold text-[#FAFAFA]">
              Full 10-Part Learning Syllabus
            </h2>
            <span className="font-mono text-xs text-zinc-500">100% Free Lessons</span>
          </div>

          <div className="rounded-xl border border-[#27272A] bg-[#111114] overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#27272A] bg-[#18181C] text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  <th className="py-3 px-4 w-16 text-center">Part</th>
                  <th className="py-3 px-4">Lesson Title & key topics</th>
                  <th className="py-3 px-4 w-28 text-center hidden sm:table-cell">Read Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A]/70">
                {course.lessons.map((lesson) => (
                  <tr 
                    key={lesson.id}
                    onClick={() => navigate('lesson', { courseId: course.id, lessonId: lesson.id })}
                    className="hover:bg-[#18181C] cursor-pointer group transition-colors"
                  >
                    <td className="py-4 px-4 font-mono font-bold text-center text-[#52525B] group-hover:text-[#22D3A0]">
                      {lesson.partNumber}
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#FAFAFA] group-hover:text-[#22D3A0] transition-colors">
                        {lesson.title}
                      </div>
                      <div className="text-xs text-[#A1A1AA] mt-1 flex flex-wrap gap-2">
                        {lesson.topics.map((item, idx) => (
                          <span key={idx} className="bg-[#18181C] px-2 py-0.5 rounded border border-[#27272A] text-[10px] font-mono text-[#A1A1AA] group-hover:border-zinc-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-center text-zinc-500 hidden sm:table-cell">
                      {lesson.estimatedReadTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CAPSTONE EXPLANATION BOTTOM FOOTER BANNER */}
        <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1 text-xs font-bold text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 rounded-full border border-[#A855F7]/20">
              <Award className="h-3 w-3" />
              <span>Incubates 1x Capstone project</span>
            </div>
            <h3 className="text-lg font-bold text-[#FAFAFA]">{course.capstone.title}</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-2xl">{course.capstone.description}</p>
          </div>

          <button 
            onClick={() => navigate('capstone', { courseId: course.id })}
            className="w-full md:w-auto inline-flex h-11 shrink-0 cursor-pointer items-center justify-center rounded bg-[#18181C] border border-[#27272A] px-5 py-2 text-xs font-bold text-white hover:bg-[#27272A] transition-colors"
          >
            <span>Preview Capstone Guide</span>
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
