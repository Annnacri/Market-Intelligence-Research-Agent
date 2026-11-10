import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Filter, 
  CheckCircle, 
  HelpCircle, 
  AlertCircle,
  Search,
  Globe,
  Tag
} from 'lucide-react';
import { EvidenceSource, EvidenceType } from '../types/research';

interface EvidenceViewProps {
  evidenceList: EvidenceSource[];
  searchQueries?: string[];
}

export const EvidenceView: React.FC<EvidenceViewProps> = ({ evidenceList, searchQueries }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | EvidenceType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvidence = evidenceList.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter;
    const matchesSearch = 
      item.claim.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sourceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.snippet && item.snippet.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const countByType = {
    fact: evidenceList.filter((e) => e.type === 'fact').length,
    estimate: evidenceList.filter((e) => e.type === 'estimate').length,
    assumption: evidenceList.filter((e) => e.type === 'assumption').length,
  };

  const typeConfig = {
    fact: {
      label: 'Verified Fact',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Documented statistic, regulatory filing, verified pricing, or primary empirical evidence.',
      icon: CheckCircle
    },
    estimate: {
      label: 'Industry Estimate',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'Market analyst projection, TAM calculation, or economic forecast.',
      icon: HelpCircle
    },
    assumption: {
      label: 'Strategic Assumption',
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'Working product hypothesis requiring direct customer interview validation.',
      icon: AlertCircle
    }
  };

  return (
    <div className="space-y-6">
      {/* Evidence Integrity Policy Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Research Evidence & Grounding Ledger
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            In strict compliance with Research Rules: all claims are tagged as Facts, Estimates, or Assumptions with external sources.
          </p>
        </div>

        {/* Count Pill Summary */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-300">
            <span className="font-bold">{countByType.fact}</span> Facts
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-300">
            <span className="font-bold">{countByType.estimate}</span> Estimates
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-800/40 text-xs font-mono text-amber-300">
            <span className="font-bold">{countByType.assumption}</span> Assumptions
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Sources ({evidenceList.length})
          </button>
          <button
            onClick={() => setSelectedFilter('fact')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedFilter === 'fact'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-emerald-400'
            }`}
          >
            Facts ({countByType.fact})
          </button>
          <button
            onClick={() => setSelectedFilter('estimate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedFilter === 'estimate'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            Estimates ({countByType.estimate})
          </button>
          <button
            onClick={() => setSelectedFilter('assumption')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedFilter === 'assumption'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-amber-400'
            }`}
          >
            Assumptions ({countByType.assumption})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search claims & citations..."
            className="w-full sm:w-64 bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Evidence Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvidence.map((item) => {
          const config = typeConfig[item.type] || typeConfig.fact;
          const Icon = config.icon;

          return (
            <div
              key={item.id}
              className="bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-4 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header: Type pill + confidence */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono font-medium flex items-center gap-1 ${config.badge}`}>
                    <Icon className="w-3 h-3" />
                    {config.label}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Confidence: <span className={item.confidence === 'High' ? 'text-emerald-400' : 'text-slate-400'}>{item.confidence}</span>
                  </span>
                </div>

                {/* Claim Statement */}
                <p className="text-sm font-medium text-slate-200 leading-snug">
                  "{item.claim}"
                </p>

                {/* Snippet quote */}
                {item.snippet && (
                  <p className="mt-2 text-xs text-slate-400 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50">
                    "{item.snippet}"
                  </p>
                )}
              </div>

              {/* Source attribution footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                <div className="flex items-center space-x-1.5 truncate">
                  <Globe className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                  <span className="text-xs text-slate-400 font-medium truncate" title={item.sourceTitle}>
                    {item.sourceTitle}
                  </span>
                  {item.domain && (
                    <span className="text-[11px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono hidden sm:inline">
                      {item.domain}
                    </span>
                  )}
                </div>

                {item.sourceUrl && item.sourceUrl !== '#' && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 flex-shrink-0 font-medium transition-colors"
                  >
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredEvidence.length === 0 && (
        <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-xl">
          <p className="text-sm text-slate-400">No evidence items match your filter criteria.</p>
        </div>
      )}

      {/* Transparent Search Queries Audit Trail */}
      {searchQueries && searchQueries.length > 0 && (
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-2">
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-mono uppercase font-semibold text-slate-300">
              Autonomous Search Grounding Queries Executed
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {searchQueries.map((query, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-400 border border-slate-800 font-mono flex items-center gap-1.5"
              >
                <Tag className="w-3 h-3 text-slate-500" />
                {query}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
