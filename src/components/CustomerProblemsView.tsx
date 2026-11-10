import React from 'react';
import { 
  AlertTriangle, 
  Flame, 
  DollarSign, 
  Wrench, 
  Clock, 
  TrendingDown 
} from 'lucide-react';
import { CustomerProblem } from '../types/research';

interface CustomerProblemsViewProps {
  problems: CustomerProblem[];
}

export const CustomerProblemsView: React.FC<CustomerProblemsViewProps> = ({ problems }) => {
  const severityBadge = {
    Critical: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    High: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    Moderate: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Unmet Needs & Ranked Customer Pain Points
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Empirical investigation into operational friction, current workarounds, and the financial cost of inaction.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-rose-950/40 text-rose-300 border border-rose-800/40">
            {problems.filter((p) => p.severity === 'Critical').length} Critical
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40">
            {problems.filter((p) => p.severity === 'High').length} High Priority
          </span>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {problems.map((prob, idx) => (
          <div
            key={prob.id || idx}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs font-bold flex items-center justify-center border border-slate-700">
                  {idx + 1}
                </span>
                <h4 className="text-base font-bold text-white">{prob.problem}</h4>
              </div>
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono font-medium self-start sm:self-auto ${severityBadge[prob.severity] || severityBadge.High}`}>
                Severity: {prob.severity}
              </span>
            </div>

            {/* Impact Description */}
            <p className="text-sm text-slate-300 leading-relaxed pl-0 sm:pl-8.5">
              {prob.impactDescription}
            </p>

            {/* Sub-grid: Current Workaround + Friction Cost */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-8.5">
              {/* Workaround */}
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/50">
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono uppercase font-semibold mb-1">
                  <Wrench className="w-3.5 h-3.5 text-amber-400" />
                  <span>Current Inefficient Workaround</span>
                </div>
                <p className="text-xs text-slate-300">
                  {prob.currentWorkaround}
                </p>
              </div>

              {/* Friction Cost */}
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-rose-900/20">
                <div className="flex items-center space-x-1.5 text-xs text-rose-400 font-mono uppercase font-semibold mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-rose-400" />
                  <span>Cost of Friction & Inaction</span>
                </div>
                <p className="text-xs font-mono font-semibold text-rose-300">
                  {prob.frictionCost}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
