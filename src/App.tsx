import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Compass, 
  Globe2, 
  ShieldCheck, 
  Users, 
  AlertTriangle, 
  Swords, 
  Cpu, 
  Coins, 
  ShieldAlert, 
  Bot, 
  ChevronRight, 
  ExternalLink,
  Layers,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Share2
} from 'lucide-react';
import { PRESET_DOSSIERS } from './data/presetDossiers';
import { ResearchDossier } from './types/research';
import { Header } from './components/Header';
import { OpportunityView } from './components/OpportunityView';
import { EvidenceView } from './components/EvidenceView';
import { TargetAudienceView } from './components/TargetAudienceView';
import { CustomerProblemsView } from './components/CustomerProblemsView';
import { CompetitorMatrixView } from './components/CompetitorMatrixView';
import { SaaSOpportunitiesView } from './components/SaaSOpportunitiesView';
import { RevenueModelView } from './components/RevenueModelView';
import { RisksView } from './components/RisksView';
import { CEOBriefingView } from './components/CEOBriefingView';
import { InvestigationModal } from './components/InvestigationModal';
import { FactCheckModal } from './components/FactCheckModal';
import { exportDossierToMarkdown } from './utils/exportMarkdown';

type TabKey = 
  | 'opportunity' 
  | 'evidence' 
  | 'audience' 
  | 'problems' 
  | 'competitors' 
  | 'automation' 
  | 'revenue' 
  | 'risks' 
  | 'ceo-briefing';

export default function App() {
  const [dossiers, setDossiers] = useState<ResearchDossier[]>(PRESET_DOSSIERS);
  const [activeDossier, setActiveDossier] = useState<ResearchDossier>(PRESET_DOSSIERS[0]);
  const [activeTab, setActiveTab] = useState<TabKey>('opportunity');
  
  const [isInvestigationOpen, setIsInvestigationOpen] = useState(false);
  const [isFactCheckOpen, setIsFactCheckOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync presets from server if available
  useEffect(() => {
    fetch('/api/research/presets')
      .then((res) => res.json())
      .then((data) => {
        if (data?.dossiers?.length > 0) {
          setDossiers(data.dossiers);
          setActiveDossier((current) => current || data.dossiers[0]);
        }
      })
      .catch((err) => {
        console.log('Using local preset dossiers fallback:', err);
      });
  }, []);

  const handleRunInvestigation = async (query: string, sector: string, depth: 'fast' | 'deep') => {
    setIsSearching(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/research/investigate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, sector, depth }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to complete investigation');
      }

      const newDossier: ResearchDossier = data.dossier;
      setDossiers((prev) => [newDossier, ...prev]);
      setActiveDossier(newDossier);
      setActiveTab('opportunity');
    } catch (err: any) {
      console.error('Investigation failed:', err);
      setErrorMessage(err.message || 'Investigation failed. Please check network or API key.');
      throw err;
    } finally {
      setIsSearching(false);
    }
  };

  const handleExportMarkdown = () => {
    if (activeDossier) {
      exportDossierToMarkdown(activeDossier);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const tabs: { key: TabKey; label: string; icon: React.ElementType; badge?: string }[] = [
    { key: 'opportunity', label: '1. Opportunity', icon: Globe2 },
    { key: 'evidence', label: '2. Evidence & Sources', icon: ShieldCheck, badge: `${activeDossier?.evidenceList?.length || 0}` },
    { key: 'audience', label: '3. Target Audience', icon: Users },
    { key: 'problems', label: '4. Customer Problems', icon: AlertTriangle, badge: `${activeDossier?.customerProblems?.length || 0}` },
    { key: 'competitors', label: '5. Competitors', icon: Swords, badge: `${activeDossier?.competitors?.length || 0}` },
    { key: 'automation', label: '6. AI & SaaS Ops', icon: Cpu },
    { key: 'revenue', label: '7. Revenue Model', icon: Coins },
    { key: 'risks', label: '8. Risks & Barriers', icon: ShieldAlert },
    { key: 'ceo-briefing', label: '9. CEO Briefing', icon: Bot, badge: 'Direct' },
  ];

  const verdictColor = {
    'PURSUE AGGRESSIVELY': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    'VALIDATE FIRST (PILOT)': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    'PIVOT ANGLE': 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    'REJECT / UNFAVORABLE': 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  }[activeDossier?.ceoBriefing?.strategicVerdict || 'VALIDATE FIRST (PILOT)'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Bar Header */}
      <Header
        dossiers={dossiers}
        activeDossier={activeDossier}
        onSelectDossier={setActiveDossier}
        onOpenNewInvestigation={() => setIsInvestigationOpen(true)}
        onOpenFactChecker={() => setIsFactCheckOpen(true)}
        onExportMarkdown={handleExportMarkdown}
        onPrintReport={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Error notification banner if any */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-200 text-xs flex items-center justify-between">
            <span>{errorMessage}</span>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-rose-400 hover:text-white font-mono"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Active Investigation Headline Banner */}
        <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/80">
                  Sector: {activeDossier.sector}
                </span>
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border font-semibold ${verdictColor}`}>
                  CEO Recommendation: {activeDossier.ceoBriefing.strategicVerdict}
                </span>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                  Conducted: {new Date(activeDossier.conductedAt).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {activeDossier.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                Mission query: <span className="text-slate-300 font-mono">"{activeDossier.query}"</span>
              </p>
            </div>

            {/* Quick Metrics Pillar */}
            <div className="flex items-center gap-3 sm:gap-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-3 lg:pt-0 lg:pl-6 flex-shrink-0">
              {/* Confidence */}
              <div className="text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Confidence</span>
                <span className="text-xl font-bold font-mono text-indigo-400">
                  {activeDossier.ceoBriefing.confidenceScore}%
                </span>
              </div>

              {/* Verified Sources */}
              <div className="text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Verified Sources</span>
                <span className="text-xl font-bold font-mono text-emerald-400">
                  {activeDossier.evidenceList.length}
                </span>
              </div>

              {/* Target ACV */}
              <div className="text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Est. ACV</span>
                <span className="text-xl font-bold font-mono text-cyan-400">
                  {activeDossier.revenueModel.projectedUnitEconomics.estimatedACV}
                </span>
              </div>

              {/* CEO Direct Action CTA */}
              <button
                onClick={() => setActiveTab('ceo-briefing')}
                className="ml-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Bot className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Dispatch to CEO</span>
              </button>
            </div>

          </div>
        </div>

        {/* Tab Navigation Navigation Strip */}
        <div className="border-b border-slate-800 overflow-x-auto scrollbar-none">
          <nav className="flex space-x-1 sm:space-x-2 py-1 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content Display */}
        <div className="py-2">
          {activeTab === 'opportunity' && (
            <OpportunityView
              opportunity={activeDossier.opportunity}
              sector={activeDossier.sector}
            />
          )}

          {activeTab === 'evidence' && (
            <EvidenceView
              evidenceList={activeDossier.evidenceList}
              searchQueries={activeDossier.searchQueriesExecuted}
            />
          )}

          {activeTab === 'audience' && (
            <TargetAudienceView
              targetAudience={activeDossier.targetAudience}
            />
          )}

          {activeTab === 'problems' && (
            <CustomerProblemsView
              problems={activeDossier.customerProblems}
            />
          )}

          {activeTab === 'competitors' && (
            <CompetitorMatrixView
              competitors={activeDossier.competitors}
            />
          )}

          {activeTab === 'automation' && (
            <SaaSOpportunitiesView
              opportunities={activeDossier.saasOpportunities}
            />
          )}

          {activeTab === 'revenue' && (
            <RevenueModelView
              revenueModel={activeDossier.revenueModel}
            />
          )}

          {activeTab === 'risks' && (
            <RisksView
              risks={activeDossier.risks}
            />
          )}

          {activeTab === 'ceo-briefing' && (
            <CEOBriefingView
              dossier={activeDossier}
            />
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Market Research Agent (MRA-01) • Autonomous AI Business Team</span>
          <span>Google Search Grounded via Gemini 3.8 Flash • Real-Time Evidence Verification</span>
        </div>
      </footer>

      {/* Investigation Launcher Modal */}
      <InvestigationModal
        isOpen={isInvestigationOpen}
        onClose={() => setIsInvestigationOpen(false)}
        onRunInvestigation={handleRunInvestigation}
        isSearching={isSearching}
      />

      {/* Fact Checker Modal */}
      <FactCheckModal
        isOpen={isFactCheckOpen}
        onClose={() => setIsFactCheckOpen(false)}
      />
    </div>
  );
}
