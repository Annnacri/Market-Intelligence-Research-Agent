import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  Globe2, 
  Zap, 
  BarChart3, 
  Sparkles,
  ArrowUpRight,
  Target
} from 'lucide-react';
import { MarketOpportunity } from '../types/research';

interface OpportunityViewProps {
  opportunity: MarketOpportunity;
  sector: string;
}

export const OpportunityView: React.FC<OpportunityViewProps> = ({ opportunity, sector }) => {
  const timingBadgeColors = {
    'Early/Pioneer': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    'Hyper-Growth': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'Consolidating': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    'Disruption Phase': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
  };

  return (
    <div className="space-y-6">
      {/* Executive Opportunity Headline Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="text-xs uppercase tracking-wider font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Market Thesis & Opportunity
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-full border font-mono font-medium ${timingBadgeColors[opportunity.marketTiming.status] || 'bg-slate-800 text-slate-300'}`}>
            Timing: {opportunity.marketTiming.status}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          {opportunity.headline}
        </h2>

        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          {opportunity.summary}
        </p>
      </div>

      {/* Sizing Matrix: TAM / SAM / SOM / CAGR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* TAM */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-mono uppercase font-semibold">Total Addressable Market (TAM)</span>
            <Globe2 className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-xl font-bold text-white mt-1">
            {opportunity.marketSize.tam.split('(')[0].trim()}
          </div>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {opportunity.marketSize.tam.includes('(') 
              ? opportunity.marketSize.tam.split('(')[1].replace(')', '') 
              : 'Global total potential market demand'}
          </p>
        </div>

        {/* SAM */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-mono uppercase font-semibold">Serviceable Market (SAM)</span>
            <Target className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl font-bold text-white mt-1">
            {opportunity.marketSize.sam.split('(')[0].trim()}
          </div>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {opportunity.marketSize.sam.includes('(') 
              ? opportunity.marketSize.sam.split('(')[1].replace(')', '') 
              : 'Target segment addressable with initial offering'}
          </p>
        </div>

        {/* SOM */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-mono uppercase font-semibold">Serviceable Obtainable (SOM)</span>
            <Zap className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl font-bold text-emerald-400 mt-1">
            {opportunity.marketSize.som.split('(')[0].trim()}
          </div>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {opportunity.marketSize.som.includes('(') 
              ? opportunity.marketSize.som.split('(')[1].replace(')', '') 
              : 'Realistic capture in years 1-3'}
          </p>
        </div>

        {/* CAGR */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-mono uppercase font-semibold">Compound Annual Growth</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl font-bold text-amber-400 mt-1">
            {opportunity.marketSize.growthRateCagr}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Projected market expansion velocity
          </p>
        </div>
      </div>

      {/* Two Column: "Why Now?" Timing Catalysts + Macro Tailwinds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Why Now */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-3">
            <Clock className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Market Timing: Why Now?
            </h3>
          </div>
          <ul className="space-y-3">
            {opportunity.marketTiming.whyNow.map((reason, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-xs mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Macro Tailwinds */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Macro Tailwinds & Structural Shifts
            </h3>
          </div>
          <ul className="space-y-3">
            {opportunity.macroTailwinds.map((tailwind, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono text-xs mt-0.5">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="leading-relaxed">{tailwind}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
