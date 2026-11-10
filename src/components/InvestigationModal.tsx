import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Search, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Loader2, 
  Zap, 
  ArrowRight,
  Globe
} from 'lucide-react';

interface InvestigationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRunInvestigation: (query: string, sector: string, depth: 'fast' | 'deep') => Promise<void>;
  isSearching: boolean;
}

export const InvestigationModal: React.FC<InvestigationModalProps> = ({
  isOpen,
  onClose,
  onRunInvestigation,
  isSearching,
}) => {
  const [query, setQuery] = useState('');
  const [sector, setSector] = useState('B2B Enterprise SaaS');
  const [depth, setDepth] = useState<'fast' | 'deep'>('deep');
  const [researchStage, setResearchStage] = useState(0);

  if (!isOpen) return null;

  const sampleIdeas = [
    {
      title: 'Autonomous Legal Deposition & Discovery Summarizer for Insurance Defense',
      sector: 'LegalTech / Insurance'
    },
    {
      title: 'AI Prior-Authorization & Claim Denial Appeal Agent for Independent Clinics',
      sector: 'Healthcare IT / RevCycle'
    },
    {
      title: 'Multi-Agent Security Code Review & Automated Vulnerability Patching',
      sector: 'DevOps / Cybersecurity'
    },
    {
      title: 'Autonomous Dispatch & Parts Procurement for Commercial Refrigeration',
      sector: 'Field Service Automation'
    },
    {
      title: 'Scope 1-3 Carbon Accounting & CSRD Compliance for Mid-Market Manufacturers',
      sector: 'ClimateTech / ESG'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isSearching) return;

    // Simulate progress stages
    setResearchStage(1);
    const interval = setInterval(() => {
      setResearchStage((prev) => (prev < 4 ? prev + 1 : prev));
    }, 3200);

    try {
      await onRunInvestigation(query, sector, depth);
      clearInterval(interval);
      onClose();
    } catch {
      clearInterval(interval);
    }
  };

  const stages = [
    'Initializing Market Research Agent & Search Grounding API...',
    'Scouting public company filings, industry reports & pricing pages...',
    'Extracting competitor battlecards & quantifying customer friction cost...',
    'Tagging facts vs. estimates vs. assumptions & synthesizing unit economics...',
    'Formulating CEO Agent Strategic Briefing & Go/No-Go verdict...'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Deploy New Market Investigation</h3>
              <p className="text-xs text-slate-400">Autonomous search-grounded research for the CEO Agent</p>
            </div>
          </div>
          {!isSearching && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {isSearching ? (
            <div className="py-8 space-y-6 text-center">
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
                <Compass className="w-8 h-8 text-indigo-400 absolute inset-0 m-auto animate-pulse" />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  Investigating Market Opportunity...
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto truncate font-mono">
                  "{query}"
                </p>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-2 text-left max-w-md mx-auto bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {stages.map((stage, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs">
                    {researchStage > idx ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : researchStage === idx ? (
                      <Loader2 className="w-4 h-4 text-indigo-400 animate-spin flex-shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-700 flex-shrink-0 inline-block" />
                    )}
                    <span className={researchStage === idx ? 'text-white font-medium' : researchStage > idx ? 'text-slate-400' : 'text-slate-600'}>
                      {stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Research Query Input */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                  Research Mission / Business Opportunity Hypothesis *
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="E.g., Investigate the market for autonomous AI medical coding and billing denial management for private gastroenterology clinics..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Two columns: Sector & Depth */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1.5">
                    Target Sector / Industry
                  </label>
                  <input
                    type="text"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    placeholder="E.g., LegalTech, RegTech, Logistics, HealthTech"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1.5">
                    Investigation Depth
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDepth('fast')}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-colors cursor-pointer ${
                        depth === 'fast'
                          ? 'bg-slate-800 border-indigo-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Rapid Recon
                    </button>
                    <button
                      type="button"
                      onClick={() => setDepth('deep')}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-colors cursor-pointer ${
                        depth === 'deep'
                          ? 'bg-slate-800 border-indigo-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Exhaustive Dossier
                    </button>
                  </div>
                </div>
              </div>

              {/* Preset Discovery Ideas */}
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 block mb-2 font-semibold">
                  Or load high-potential research hypotheses:
                </span>
                <div className="space-y-1.5">
                  {sampleIdeas.map((idea, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setQuery(idea.title);
                        setSector(idea.sector);
                      }}
                      className="w-full text-left p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate pr-2">{idea.title}</span>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 flex-shrink-0">
                        {idea.sector}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Autonomous Investigation</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
