import React from 'react';
import { 
  BadgePercent, 
  DollarSign, 
  Layers, 
  Check, 
  TrendingUp, 
  Clock, 
  Coins 
} from 'lucide-react';
import { RevenueModel } from '../types/research';

interface RevenueModelViewProps {
  revenueModel: RevenueModel;
}

export const RevenueModelView: React.FC<RevenueModelViewProps> = ({ revenueModel }) => {
  const { projectedUnitEconomics } = revenueModel;

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Coins className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Monetization Strategy & Unit Economics
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Engineered pricing tiers, margin profile, and customer lifetime value projections.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Architecture:</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono font-bold">
            {revenueModel.recommendedModel}
          </span>
        </div>
      </div>

      {/* Unit Economics Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* ACV */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
            Estimated Annual Contract (ACV)
          </span>
          <div className="text-2xl font-bold text-white mt-1 font-mono">
            {projectedUnitEconomics.estimatedACV}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Target initial contract size</p>
        </div>

        {/* CAC */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
            Projected CAC
          </span>
          <div className="text-2xl font-bold text-amber-400 mt-1 font-mono">
            {projectedUnitEconomics.projectedCAC.split('(')[0].trim()}
          </div>
          <p className="text-[11px] text-slate-400 mt-1 truncate" title={projectedUnitEconomics.projectedCAC}>
            {projectedUnitEconomics.projectedCAC.includes('(') ? projectedUnitEconomics.projectedCAC.split('(')[1].replace(')', '') : 'Blended acquisition cost'}
          </p>
        </div>

        {/* LTV */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
            Estimated Customer LTV
          </span>
          <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">
            {projectedUnitEconomics.estimatedLTV.split('(')[0].trim()}
          </div>
          <p className="text-[11px] text-slate-400 mt-1 truncate" title={projectedUnitEconomics.estimatedLTV}>
            {projectedUnitEconomics.estimatedLTV.includes('(') ? projectedUnitEconomics.estimatedLTV.split('(')[1].replace(')', '') : '3-year retention projection'}
          </p>
        </div>

        {/* Payback */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
            CAC Payback Period
          </span>
          <div className="text-2xl font-bold text-cyan-400 mt-1 font-mono">
            {projectedUnitEconomics.paybackPeriod}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Capital recovery velocity</p>
        </div>
      </div>

      {/* Proposed Pricing Tiers */}
      <div>
        <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-indigo-400" /> Proposed Commercial Packaging
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {revenueModel.pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-5 flex flex-col justify-between transition-all ${
                idx === 1
                  ? 'bg-gradient-to-b from-indigo-950/40 to-slate-900 border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-900/80 border border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-base font-bold text-white">{tier.name}</h5>
                  {idx === 1 && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="text-xl font-bold text-white font-mono mt-1 mb-2">
                  {tier.price}
                </div>

                <div className="text-xs font-medium text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  Target: <span className="text-slate-300">{tier.targetTier}</span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Value Included:
                  </span>
                  <p>{tier.includedValue}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono text-center">
                SLA & Automated Backups Included
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
