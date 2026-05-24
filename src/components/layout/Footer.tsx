import { Terminal, Github, Twitter, MessageSquare, Youtube, Heart } from 'lucide-react';

interface FooterProps {
  navigate: (view: string, params?: any) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: 'All Courses', view: 'courses' },
    { label: 'Technical Blog', view: 'blog' },
    { label: 'Our Mission', view: 'about' },
    { label: 'Student Support', view: 'contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', view: 'contact' },
    { label: 'Terms of Service', view: 'contact' },
    { label: 'Contact Help', view: 'contact' }
  ];

  const handleLinkClick = (view: string, params?: any) => {
    navigate(view, params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272A] bg-[#09090B] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Tagline wordmark block info */}
          <div className="space-y-4 md:col-span-1">
            <div 
              onClick={() => handleLinkClick('home')} 
              className="flex cursor-pointer items-center space-x-2 font-display text-xl font-bold text-[#FAFAFA]"
            >
              <div className="flex items-center justify-center rounded bg-[#22D3A0] p-1 text-[#09090B]">
                <Terminal className="h-4 w-4" />
              </div>
              <span>UP<span className="text-[#22D3A0]">SKILL</span></span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Learn to Code. For Free. Forever.<br />
              Structured, beginner-friendly programming roadmap designed for high-scale tech skill advancement.
            </p>
            {/* Social linkages */}
            <div className="flex space-x-4 text-[#52525B]">
              <a href="https://www.facebook.com/siedel.cabrales.5" target="_blank" rel="noreferrer" className="hover:text-[#FAFAFA] transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="https://ph.linkedin.com/in/siedel-jeremy-cabrales-1029a6217" target="_blank" rel="noreferrer" className="hover:text-[#FAFAFA] transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#FAFAFA] mb-4">Curriculum</h3>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleLinkClick(link.view)} 
                    className="hover:text-[#22D3A0] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#FAFAFA] mb-4">Support & Legal</h3>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleLinkClick(link.view)} 
                    className="hover:text-[#22D3A0] transition-colors cursor-pointer text-left font-normal"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Donation / Philosophy Column */}
          <div className="space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#FAFAFA]-600 text-[#FAFAFA] mb-4">Founding Philosophy</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              UPSKILL is funded by donations, open-source sponsors, and career affiliates. Content remains 100% free with no paywall, no credit credentials, ever.
            </p>
            <div className="inline-flex items-center space-x-1.5 rounded-lg border border-[#27272A] bg-[#111114] px-3 py-1.5 text-xs text-[#22D3A0] font-semibold">
              <Heart className="h-3.5 w-3.5 fill-[#22D3A0] stroke-[#22D3A0]" />
              <span>Sponsor Open Education</span>
            </div>
          </div>

        </div>

        {/* Base line marker */}
        <div className="mt-12 border-t border-[#27272A] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#52525B] space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} UPSKILL Education. Open Source GPL-3.0 License.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built with dedication in the Philippines by</span>
            <button 
              onClick={() => handleLinkClick('about')}
              className="text-[#A1A1AA] hover:text-[#22D3A0] transition-colors cursor-pointer font-bold"
            >
              Siedel Cabrales
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
