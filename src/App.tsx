import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeView from './components/home/HomeView';
import CoursesIndexView from './components/courses/CoursesIndexView';
import CourseHubView from './components/courses/CourseHubView';
import IndividualLessonView from './components/lesson/IndividualLessonView';
import CapstoneView from './components/courses/CapstoneView';
import BlogView from './components/blog/BlogView';
import BlogPostView from './components/blog/BlogPostView';
import AboutView from './components/about/AboutView';
import ContactView from './components/contact/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParams, setViewParams] = useState<any>({});

  // Reset scroll on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentView, viewParams]);

  const navigate = (view: string, params: any = {}) => {
    setCurrentView(view);
    setViewParams(params);
  };

  // Render correct child view
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView navigate={navigate} />;
      case 'courses':
        return <CoursesIndexView navigate={navigate} />;
      case 'course-hub':
        return <CourseHubView courseId={viewParams.courseId} navigate={navigate} />;
      case 'lesson':
        return (
          <IndividualLessonView 
            courseId={viewParams.courseId} 
            lessonId={viewParams.lessonId} 
            navigate={navigate} 
          />
        );
      case 'capstone':
        return <CapstoneView courseId={viewParams.courseId} navigate={navigate} />;
      case 'blog':
        return <BlogView navigate={navigate} />;
      case 'blog-post':
        return <BlogPostView slug={viewParams.slug} navigate={navigate} />;
      case 'about':
        return <AboutView navigate={navigate} />;
      case 'contact':
        return <ContactView navigate={navigate} />;
      default:
        return <HomeView navigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-[#22D3A0]/30 selection:text-[#FAFAFA]">
      {/* Sticky Navigation header */}
      <Navbar currentView={currentView} navigate={navigate} />
      
      {/* Dynamic main active workspace body */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Navigation footer lines */}
      <Footer navigate={navigate} />
    </div>
  );
}
