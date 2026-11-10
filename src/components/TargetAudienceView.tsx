import React from 'react';
import { 
  Users, 
  Target, 
  CreditCard, 
  Briefcase, 
  Award, 
  Flame, 
  Layers 
} from 'lucide-react';
import { TargetAudience } from '../types/research';

interface TargetAudienceViewProps {
  targetAudience: TargetAudience;
}

export const TargetAudienceView: React.FC<TargetAudienceViewProps> = ({ targetAudience }) => {
  return (
    <div className="space-y-6">
      {/* Primary ICP Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase text-indigo-400 font-semibold mb-2">
          <Target className="w-4 h-4" /> Primary Ideal Customer Profile (ICP)
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
          {targetAudience.primaryICP}
        </h3>
        
        {/* Willingness to Pay Note */}
        <div className="mt-4 p-4 rounded-xl bg-slate-950/70 border border-indigo-900/30 flex items-start gap-3">
          <CreditCard className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-mono uppercase font-semibold text-indigo-300">
              Willingness-to-Pay & Pricing Elasticity
            </span>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              {targetAudience.willingnessToPayNotes}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Segments */}
      {targetAudience.secondarySegments && targetAudience.secondarySegments.length > 0 && (
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-cyan-400 font-semibold mb-3">
            <Layers className="w-4 h-4" /> Adjacent & Secondary Market Segments
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {targetAudience.secondarySegments.map((segment, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{segment}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Buyer Personas Grid */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-4 h-4 text-white" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Key Decision Makers & Buyer Personas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {targetAudience.personas.map((persona, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 hover:border-slate-700 transition-colors"
            >
              {/* Persona Title & Profile */}
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">Persona {idx + 1}</span>
                <h4 className="text-base font-bold text-white mt-0.5">{persona.role}</h4>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                  {persona.companyProfile}
                </p>
              </div>

              {/* Budget Authority */}
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  Budget Authority / Sign-off
                </span>
                <span className="text-xs font-semibold text-emerald-400 font-mono">
                  {persona.budgetAuthority}
                </span>
              </div>

              {/* Primary KPIs */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2 flex items-center gap-1">
                  <Award className="w-3 h-3 text-cyan-400" /> Success Metrics & KPIs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {persona.primaryKPIs.map((kpi, kIdx) => (
                    <span 
                      key={kIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/60 font-medium"
                    >
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buying Triggers */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400" /> Buying Triggers / Urgent Catalyst
                </span>
                <ul className="space-y-1.5">
                  {persona.buyingTriggers.map((trigger, tIdx) => (
                    <li key={tIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 text-sm leading-none">•</span>
                      <span>{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
