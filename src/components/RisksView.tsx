import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Sliders,
  Scale
} from 'lucide-react';
import { RiskAndBarrier } from '../types/research';

interface RisksViewProps {
  risks: RiskAndBarrier[];
}

export const RisksView: React.FC<RisksViewProps> = ({ risks }) => {
  const severityBadge = {
    Critical: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    High: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    Medium: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  };

  const probabilityBadge = {
    High: 'text-rose-400',
    Medium: 'text-amber-400',
    Low: 'text-slate-400',
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Risk Taxonomy & De-Risking Mitigations
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Pre-mortem risk assessment across regulatory, technical, distribution, and market dynamics.
          </p>
        </div>
      </div>

      {/* Risks Table/Cards */}
      <div className="space-y-4">
        {risks.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all space-y-4"
          >
            {/* Header: Category, Severity, Probability */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono font-semibold border border-slate-700">
                  {item.category}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-mono font-medium ${severityBadge[item.severity] || severityBadge.High}`}>
                  Impact: {item.severity}
                </span>
              </div>

              <span className="text-xs font-mono text-slate-400">
                Probability: <span className={`font-semibold ${probabilityBadge[item.probability] || 'text-slate-300'}`}>{item.probability}</span>
              </span>
            </div>

            {/* Risk Statement */}
            <p className="text-sm font-semibold text-slate-200 leading-snug">
              {item.risk}
            </p>

            {/* Mitigation Strategy */}
            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block mb-1 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" /> De-Risking Action / Mitigation Strategy
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.mitigationStrategy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
