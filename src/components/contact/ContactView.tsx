import { useState, FormEvent } from 'react';
import { 
  Mail, MessageSquare, ChevronDown, ChevronUp, CheckCircle, 
  Send, AlertTriangle, HelpCircle, Clock
} from 'lucide-react';

interface ContactViewProps {
  navigate: (view: string, params?: any) => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function ContactView({ navigate }: ContactViewProps) {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('Lesson Query');
  const [formMsg, setFormMsg] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ Expanded State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqList: FaqItem[] = [
    {
      question: "Is UPSKILL really free forever? Are there hidden costs?",
      answer: "Yes, UPSKILL is 100% free forever. There are no paywalls, hidden microtransactions, mock limits, or credit card requirements. We are backed entirely by volunteering IT students, open-source grants, and career support listings."
    },
    {
      question: "Do I need to sign up for an account to save my lesson completion progress?",
      answer: "No registration is required! Progressive checkmarks, continuities, and streak counters are stored instantly in your own browser's localStorage. You can clear and recover progress safely on-client."
    },
    {
      question: "How do I claim and download my Graduation Capstone completion badges?",
      answer: "When you access your Track's Capstone project page, inspect and check off are build steps. Fill out your GitHub repository links in the submission form and click Submit. Your official, personalized C#, Python, or React Developer Completion Badge will unlock instantly!"
    }
  ];

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
      <div className="mx-auto max-w-4xl">
        
        {/* Header Titles */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-700 bg-[#111114] px-4 text-xs font-mono font-bold text-zinc-400 mb-4 uppercase">
            <Mail className="h-4 w-4" />
            <span className="ml-1.5">Support Desk</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold text-[#FAFAFA] sm:text-5xl">
            Get in Touch with UPSKILL
          </h1>
          <p className="text-sm text-[#A1A1AA] mt-3">
            Have questions about compiler sandboxes, open source integrations, or graduation badges? Ask Siedel and our team.
          </p>
        </div>

        {/* SINGLE CENTERED COLUMN LAYOUT */}
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* CHIEF FAQ ACCORDIONS */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-[#27272A] pb-3 mb-4">
              <HelpCircle className="h-5 w-5 text-zinc-400" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#FAFAFA]">Common FAQs</h2>
            </div>

            <div className="space-y-3">
              {faqList.map((faq, i) => {
                const isOpen = expandedFaq === i;
                return (
                  <div 
                    key={i}
                    className="rounded-lg border border-[#27272A] bg-[#111114] overflow-hidden hover:border-[#3F3F46] transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#FAFAFA] hover:bg-[#18181C] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="h-4 w-4 text-[#22D3A0]" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 border-t border-[#27272A]/40 text-sm text-[#A1A1AA] leading-relaxed bg-[#0E0E12]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Support Community Discord Banner widget */}
          <div className="rounded-xl border border-[#27272A] bg-[#111114] p-6 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Join the Community</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Connect with hundreds of fellow programmers on Discord. Get instant compile tips, career suggestions, and share your capstone graduates badges.
            </p>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full inline-flex h-11 items-center justify-center rounded bg-[#18181C] border border-[#27272A] px-4 text-xs font-bold text-white hover:bg-[#27272A] transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-2 text-emerald-400" />
              Join the Discord Community
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
