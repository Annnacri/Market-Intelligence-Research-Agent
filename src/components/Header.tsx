import React from 'react';
import { 
  Compass, 
  Search, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  Printer, 
  Download,
  Bot
} from 'lucide-react';
import { ResearchDossier } from '../types/research';

interface HeaderProps {
  dossiers: ResearchDossier[];
  activeDossier: ResearchDossier | null;
  onSelectDossier: (dossier: ResearchDossier) => void;
  onOpenNewInvestigation: () => void;
  onOpenFactChecker: () => void;
  onExportMarkdown: () => void;
  onPrintReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  dossiers,
  activeDossier,
  onSelectDossier,
  onOpenNewInvestigation,
  onOpenFactChecker,
  onExportMarkdown,
  onPrintReport,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Agent Identity & Status */}
          <div className="flex items-center space-x-3.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-white tracking-wide">
                  RESEARCH AGENT <span className="text-indigo-400 font-mono text-xs px-2 py-0.5 bg-indigo-950/80 rounded border border-indigo-800/60">MRA-01</span>
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3 h-3" /> LIVE SEARCH GROUNDED
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <span>Autonomous AI Business Team</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Bot className="w-3 h-3 text-indigo-400" /> Reporting to CEO Agent
                </span>
              </p>
            </div>
          </div>

          {/* Dossier Selector & Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Active Dossier Picker */}
            <div className="relative flex items-center">
              <label htmlFor="dossier-select" className="sr-only">Active Investigation</label>
              <select
                id="dossier-select"
                value={activeDossier?.id || ''}
                onChange={(e) => {
                  const found = dossiers.find((d) => d.id === e.target.value);
                  if (found) onSelectDossier(found);
                }}
                className="bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-indigo-500 max-w-[240px] truncate"
              >
                {dossiers.map((d) => (
                  <option key={d.id} value={d.id}>
                    📁 {d.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Fact Checker quick button */}
            <button
              onClick={onOpenFactChecker}
              className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 flex items-center gap-1.5 transition-colors"
              title="Fast Fact-Check any statistic or competitor claim"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verify Claim</span>
            </button>

            {/* Export Markdown */}
            <button
              onClick={onExportMarkdown}
              className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 flex items-center gap-1.5 transition-colors"
              title="Download CEO Briefing in Markdown"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Export .MD</span>
            </button>

            {/* Print */}
            <button
              onClick={onPrintReport}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-800 transition-colors"
              title="Print Executive Dossier"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Launch New Research CTA */}
            <button
              onClick={onOpenNewInvestigation}
              className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Investigation</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
