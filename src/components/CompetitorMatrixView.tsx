import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  Crosshair, 
  ShieldAlert, 
  Check, 
  X, 
  DollarSign, 
  Swords 
} from 'lucide-react';
import { CompetitorAnalysis } from '../types/research';

interface CompetitorMatrixViewProps {
  competitors: CompetitorAnalysis[];
}

export const CompetitorMatrixView: React.FC<CompetitorMatrixViewProps> = ({ competitors }) => {
  const categoryBadge = {
    'Direct': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    'Indirect': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    'Legacy incumbent': 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Swords className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Competitive Landscape & Positioning Matrix
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Deconstructed pricing models, market positioning, incumbent vulnerabilities, and our strategic wedge.
          </p>
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Analyzed: <span className="text-white font-bold">{competitors.length} Key Competitors</span>
        </div>
      </div>

      {/* Competitor Battlecards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {competitors.map((comp, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all space-y-4"
          >
            <div>
              {/* Header: Name, Website, Category */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-base font-bold text-white">{comp.name}</h4>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border font-mono font-medium mt-1 inline-block ${categoryBadge[comp.category] || categoryBadge.Direct}`}>
                    {comp.category}
                  </span>
                </div>
                {comp.website && comp.website !== '#' && (
                  <a
                    href={comp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title={`Visit ${comp.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Positioning Quote */}
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60 text-xs text-slate-300 italic mb-3">
                "{comp.positioning}"
              </div>

              {/* Pricing Model */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1 flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-emerald-400" /> Pricing & Packaging
                </span>
                <p className="text-xs font-semibold text-emerald-400 font-mono bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-900/30">
                  {comp.pricingModel}
                </p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="space-y-3">
                {/* Strengths */}
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold block mb-1.5">
                    Key Strengths
                  </span>
                  <ul className="space-y-1">
                    {comp.strengths.map((s, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div>
                  <span className="text-[11px] font-mono text-rose-400 uppercase font-semibold block mb-1.5">
                    Weaknesses / Gaps
                  </span>
                  <ul className="space-y-1">
                    {comp.weaknesses.map((w, wIdx) => (
                      <li key={wIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <X className="w-3 h-3 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Attack Angle / Vulnerability */}
            <div className="pt-3 border-t border-slate-800/80 bg-slate-950/80 -mx-5 -mb-5 p-4 rounded-b-xl border-t border-slate-800">
              <span className="text-[11px] font-mono text-indigo-300 uppercase font-bold flex items-center gap-1 mb-1">
                <Crosshair className="w-3 h-3 text-indigo-400" /> Wedge / Vulnerability to Attack
              </span>
              <p className="text-xs text-slate-300 leading-snug">
                {comp.vulnerabilityToAttack}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
