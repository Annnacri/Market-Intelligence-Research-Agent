export type EvidenceType = 'fact' | 'estimate' | 'assumption';

export interface EvidenceSource {
  id: string;
  claim: string;
  type: EvidenceType;
  sourceTitle: string;
  sourceUrl: string;
  domain?: string;
  snippet?: string;
  confidence: 'High' | 'Medium' | 'Low';
}

export interface MarketOpportunity {
  headline: string;
  summary: string;
  marketSize: {
    tam: string;
    sam: string;
    som: string;
    growthRateCagr: string;
  };
  marketTiming: {
    status: 'Early/Pioneer' | 'Hyper-Growth' | 'Consolidating' | 'Disruption Phase';
    whyNow: string[];
  };
  macroTailwinds: string[];
}

export interface BuyerPersona {
  role: string;
  companyProfile: string;
  primaryKPIs: string[];
  budgetAuthority: string;
  buyingTriggers: string[];
}

export interface TargetAudience {
  primaryICP: string;
  secondarySegments: string[];
  personas: BuyerPersona[];
  willingnessToPayNotes: string;
}

export interface CustomerProblem {
  id: string;
  problem: string;
  severity: 'Critical' | 'High' | 'Moderate';
  impactDescription: string;
  currentWorkaround: string;
  frictionCost: string;
}

export interface CompetitorAnalysis {
  name: string;
  website: string;
  category: 'Direct' | 'Indirect' | 'Legacy incumbent';
  pricingModel: string;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  vulnerabilityToAttack: string;
}

export interface SaaSOpportunity {
  id: string;
  title: string;
  automationScope: string;
  workflowReplaced: string;
  defensibilityMoat: string;
  potentialEfficiencyGain: string;
}

export interface RevenueModel {
  recommendedModel: 'Usage-based' | 'Tiered Seat SaaS' | 'Outcome-based Fee' | 'Hybrid Platform';
  pricingTiers: {
    name: string;
    price: string;
    targetTier: string;
    includedValue: string;
  }[];
  projectedUnitEconomics: {
    estimatedACV: string;
    projectedCAC: string;
    estimatedLTV: string;
    paybackPeriod: string;
  };
}

export interface RiskAndBarrier {
  category: 'Regulatory' | 'Technical' | 'Distribution' | 'Competitor Response' | 'Unit Economics';
  risk: string;
  severity: 'Critical' | 'High' | 'Medium';
  probability: 'High' | 'Medium' | 'Low';
  mitigationStrategy: string;
}

export interface CEOBriefing {
  executiveSummary: string;
  strategicVerdict: 'PURSUE AGGRESSIVELY' | 'VALIDATE FIRST (PILOT)' | 'PIVOT ANGLE' | 'REJECT / UNFAVORABLE';
  confidenceScore: number; // 0 - 100
  keyMilestones: {
    timeline: string;
    milestone: string;
    deRiskGoal: string;
  }[];
  strategicMoatAssessment: string;
  immediateDirectives: string[];
}

export interface ResearchDossier {
  id: string;
  title: string;
  sector: string;
  query: string;
  conductedAt: string;
  status: 'completed' | 'in_progress' | 'draft';
  opportunity: MarketOpportunity;
  evidenceList: EvidenceSource[];
  targetAudience: TargetAudience;
  customerProblems: CustomerProblem[];
  competitors: CompetitorAnalysis[];
  saasOpportunities: SaaSOpportunity[];
  revenueModel: RevenueModel;
  risks: RiskAndBarrier[];
  ceoBriefing: CEOBriefing;
  searchQueriesExecuted?: string[];
}

export interface CEODialogueMessage {
  id: string;
  sender: 'ceo' | 'researcher';
  message: string;
  timestamp: string;
  citations?: { title: string; url: string }[];
}
