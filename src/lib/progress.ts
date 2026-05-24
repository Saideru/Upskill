export interface CourseProgress {
  [courseId: string]: {
    completedLessons: string[]; // List of lesson ids e.g., ['part-1', 'part-2']
    capstoneCompleted: boolean;
  };
}

export interface UserStreak {
  count: number;
  lastActiveDate: string; // YYYY-MM-DD
}

const PROGRESS_KEY = 'upskill_course_progress';
const STREAK_KEY = 'upskill_user_streak';

export function getProgress(): CourseProgress {
  if (typeof window === 'undefined') return {};
  const data = localStorage.getItem(PROGRESS_KEY);
  return data ? JSON.parse(data) : {};
}

export function saveProgress(progress: CourseProgress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function toggleLessonCompletion(courseId: string, lessonId: string): CourseProgress {
  const progress = getProgress();
  if (!progress[courseId]) {
    progress[courseId] = { completedLessons: [], capstoneCompleted: false };
  }
  
  const completed = progress[courseId].completedLessons;
  const index = completed.indexOf(lessonId);
  if (index > -1) {
    completed.splice(index, 1);
  } else {
    completed.push(lessonId);
    // Trigger streak check on completion of a lesson
    updateStreak();
  }
  
  saveProgress(progress);
  return progress;
}

export function isLessonCompleted(courseId: string, lessonId: string): boolean {
  const progress = getProgress();
  return !!(progress[courseId]?.completedLessons.includes(lessonId));
}

export function toggleCapstoneCompletion(courseId: string): CourseProgress {
  const progress = getProgress();
  if (!progress[courseId]) {
    progress[courseId] = { completedLessons: [], capstoneCompleted: false };
  }
  
  progress[courseId].capstoneCompleted = !progress[courseId].capstoneCompleted;
  if (progress[courseId].capstoneCompleted) {
    updateStreak();
  }
  
  saveProgress(progress);
  return progress;
}

export function isCapstoneCompleted(courseId: string): boolean {
  const progress = getProgress();
  return !!(progress[courseId]?.capstoneCompleted);
}

export function getStreak(): UserStreak {
  if (typeof window === 'undefined') return { count: 0, lastActiveDate: '' };
  const data = localStorage.getItem(STREAK_KEY);
  return data ? JSON.parse(data) : { count: 0, lastActiveDate: '' };
}

export function updateStreak(): UserStreak {
  const streak = getStreak();
  const today = new Date().toISOString().split('T')[0];
  
  if (streak.lastActiveDate === today) {
    return streak; // Already active today
  }
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  if (streak.lastActiveDate === yesterdayStr) {
    streak.count += 1;
  } else {
    streak.count = 1; // Break in streak, reset to 1
  }
  
  streak.lastActiveDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  return streak;
}
