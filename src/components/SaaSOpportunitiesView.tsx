import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Repeat, 
  Layers 
} from 'lucide-react';
import { SaaSOpportunity } from '../types/research';

interface SaaSOpportunitiesViewProps {
  opportunities: SaaSOpportunity[];
}

export const SaaSOpportunitiesView: React.FC<SaaSOpportunitiesViewProps> = ({ opportunities }) => {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              AI Automation & Vertical SaaS Opportunities
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Autonomous agent capabilities, manual workflows targeted for replacement, and defensible data moats.
          </p>
        </div>
      </div>

      {/* Grid of SaaS Feature & Agentic Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {opportunities.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-cyan-950/60 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-800/40">
                  {idx + 1}
                </span>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
              </div>

              {/* Automation Scope */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.automationScope}
              </p>

              {/* Workflow Replaced */}
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/60 mb-3">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1 flex items-center gap-1">
                  <Repeat className="w-3 h-3 text-indigo-400" /> Human Labor / Workflow Replaced
                </span>
                <p className="text-xs text-slate-300">
                  {item.workflowReplaced}
                </p>
              </div>

              {/* Defensibility Moat */}
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Defensibility & Data Moat
                </span>
                <p className="text-xs text-slate-300">
                  {item.defensibilityMoat}
                </p>
              </div>
            </div>

            {/* Efficiency Gain Badge */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Efficiency Gain:</span>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/40 flex items-center gap-1">
                <Zap className="w-3 h-3" /> {item.potentialEfficiencyGain}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
