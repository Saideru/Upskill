import { useState } from 'react';
import { blogPosts } from '../../data/blogData';
import { 
  Search, BookOpen, Clock, ArrowRight, Newspaper, ChevronRight
} from 'lucide-react';

interface BlogViewProps {
  navigate: (view: string, params?: any) => void;
}

type CategoryFilter = 'all' | 'Tutorials' | 'Comparisons' | 'Career Guides' | 'Cheatsheets' | 'Project Ideas';

export default function BlogView({ navigate }: BlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categoriesSet: CategoryFilter[] = [
    'all', 'Tutorials', 'Comparisons', 'Career Guides', 'Cheatsheets', 'Project Ideas'
  ];

  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-zinc-700 bg-[#111114] px-3 py-1 font-mono text-[10px] uppercase font-bold text-zinc-400 mb-4">
            <Newspaper className="h-4 w-4" />
            <span>UPSKILL Journal</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold text-[#FAFAFA] sm:text-5xl">
            Engineering Blog & Guides
          </h1>
          <p className="text-sm text-[#A1A1AA] mt-3">
            Deep-dives, cheatsheets, and straight-talking developer career roadmaps without the marketing boilerplate.
          </p>
        </div>

        {/* Searching & Filter Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Search form controls left (4 items) */}
          <div className="lg:col-span-4 p-5 rounded-xl border border-[#27272A] bg-[#111114] space-y-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-bold">Search Articles:</label>
              <div className="relative">
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-zinc-600" />
                <input 
                  type="text"
                  placeholder="e.g. static, Python, let..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#3F3F46] bg-[#09090B] text-white focus:border-[#22D3A0] focus:outline-none placeholder-zinc-700"
                />
              </div>
            </div>

            {/* Categories filters vertical */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-bold">Post Categories:</label>
              <div className="flex flex-col gap-1.5">
                {categoriesSet.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs font-semibold border transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#22D3A0]/10 border-[#22D3A0]/30 text-[#22D3A0]'
                        : 'bg-[#09090B] border-[#27272A] text-[#A1A1AA] hover:bg-[#18181C]'
                    }`}
                  >
                    {cat === 'all' ? 'All Posts' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[#27272A]/70 pt-4 text-[11px] text-zinc-500 leading-relaxed">
              <span>Articles are prepared by <strong>Siedel Cabrales</strong> to support developer career transition prep.</span>
            </div>
          </div>

          {/* Posts grid right (8 items list) */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredPosts.map((post) => (
              <article 
                key={post.slug}
                onClick={() => navigate('blog-post', { slug: post.slug })}
                className="group p-6 rounded-xl border border-[#27272A] bg-[#111114] hover:border-[#3F3F46] hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Meta tag categories line */}
                  <div className="flex items-center space-x-3 text-xs font-mono font-bold mb-3">
                    <span className="text-[#22D3A0] uppercase">{post.category}</span>
                    <span className="text-[#52525B]">•</span>
                    <span className="text-zinc-500">{post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#FAFAFA] group-hover:text-[#22D3A0] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-[#27272A]/50 pt-4 mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full border border-zinc-700 bg-[#1E1E24] flex items-center justify-center text-[9px] font-mono font-bold text-[#22D3A0] shrink-0">
                      SC
                    </div>
                    <span className="text-xs text-zinc-400">{post.author.name}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-[#52525B] group-hover:text-white transition-colors font-bold">
                    <span>{post.readTime}</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}

            {filteredPosts.length === 0 && (
              <div className="text-center rounded-xl border border-dashed border-[#27272A] py-16">
                <Newspaper className="h-8 w-8 text-zinc-600 mx-auto mb-3" />
                <h3 className="font-display text-sm font-bold text-[#FAFAFA]">No publications match your criteria</h3>
                <p className="text-xs text-[#A1A1AA] mt-1">Try modifying search tags or selecting All Posts category.</p>
                <button 
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="mt-4 text-xs font-mono text-[#22D3A0] hover:underline"
                >
                  Reset Blog Filters
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
