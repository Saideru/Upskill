import { blogPosts } from '../../data/blogData';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

interface BlogPostViewProps {
  slug: string;
  navigate: (view: string, params?: any) => void;
}

export default function BlogPostView({ slug, navigate }: BlogPostViewProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#09090B] py-20 px-4 text-center">
        <h3 className="text-xl font-bold text-white">Publication article not found</h3>
        <button onClick={() => navigate('blog')} className="mt-4 text-[#22D3A0] underline">
          Reflect Back to Blog Index
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        
        {/* Back Link Button navigation */}
        <button 
          onClick={() => navigate('blog')} 
          className="inline-flex cursor-pointer items-center space-x-1.5 text-xs font-mono font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Publications</span>
        </button>

        {/* Dynamic header cards */}
        <div className="border-b border-[#27272A] pb-8 mb-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#22D3A0] uppercase">
            <span>{post.category}</span>
          </div>

          <h1 className="font-display text-2xl font-extrabold text-[#FAFAFA] sm:text-4.5xl leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
            <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" /> {post.date}</span>
            <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1" /> {post.readTime}</span>
          </div>
        </div>

        {/* MAIN BODY READ CONTENT */}
        <div className="text-sm sm:text-base leading-relaxed text-[#A1A1AA] space-y-6">
          <p className="font-bold text-[#FAFAFA] text-base border-l-2 pl-4 border-[#22D3A0] bg-[#111114] py-3.5 rounded-r">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line leading-loose text-zinc-300">
            {post.content}
          </div>

          <div className="pt-8 border-t border-[#27272A] mt-10">
            <h4 className="font-mono text-xs text-zinc-500 uppercase font-bold mb-3 flex items-center">
              <Tag className="h-4 w-4 mr-1 text-[#22D3A0]" />
              <span>Article Tags:</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-[#111114] border border-[#27272A] text-xs font-mono px-3 py-1 rounded text-[#A1A1AA]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AUTHOR CARD CONTAINER */}
        <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 mt-12 flex items-start space-x-4">
          <div className="h-12 w-12 rounded-full border border-zinc-700 bg-[#1E1E24] flex items-center justify-center text-xs font-mono font-bold text-[#22D3A0] shrink-0">
            SC
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#FAFAFA]">Written by {post.author.name}</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Siedel Cabrales is an IT college student based in the Philippines. He founded UPSKILL to simplify software compilation studies, offering high-fidelity, comprehensive reference material to programmers completely for free.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center rounded-xl border border-dashed border-[#27272A] p-6 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#A1A1AA]">Siedel\'s course tracks are open for learning now:</span>
          <button 
            onClick={() => navigate('courses')}
            className="inline-flex h-9 cursor-pointer items-center justify-center rounded bg-[#22D3A0] px-4 text-xs font-bold text-[#09090B] hover:scale-[1.01] transition-transform"
          >
            <span>Launch Free Lessons</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
