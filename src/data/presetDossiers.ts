import { ResearchDossier } from '../types/research';

export const PRESET_DOSSIERS: ResearchDossier[] = [
  {
    id: 'fintech-compliance-agents',
    title: 'Autonomous AI Compliance & AML/KYC Agents for Mid-Tier FinTechs',
    sector: 'Financial Technology / RegTech',
    query: 'Emerging B2B market for autonomous AML KYC compliance agents mid-market fintech banks',
    conductedAt: '2026-11-04T14:30:00Z',
    status: 'completed',
    searchQueriesExecuted: [
      'mid market fintech compliance costs AML KYC 2025 2026',
      'AI agents regulatory compliance false positive rates financial crime',
      'fintech compliance software pricing Hummingbird Unit21 Chainalysis',
      'fintech bank partner consent orders CFPB OCC penalties'
    ],
    opportunity: {
      headline: 'Autonomous AML/KYC Investigation Agents to Slash Compliance False Positives by 70%',
      summary: 'Mid-sized neo-banks and payment facilitators face crushing regulatory scrutiny from sponsor banks and regulators. 85-95% of AML transaction alerts are false positives requiring manual analyst reviews that cost $45-$65/hour. Autonomous AI reasoning agents that gather SAR evidence and prep regulatory dossiers present a high-willingness-to-pay opportunity.',
      marketSize: {
        tam: '$18.4 Billion (Global RegTech and AML Solution Market by 2028)',
        sam: '$4.2 Billion (US & EU Mid-market FinTech & Community Bank Compliance)',
        som: '$280 Million (AI Agent automated transaction investigation tier)',
        growthRateCagr: '21.4% CAGR'
      },
      marketTiming: {
        status: 'Hyper-Growth',
        whyNow: [
          'OCC and FDIC consent orders on sponsor banks (e.g., Evolve, Lineage) increased compliance oversight by 300%.',
          'Agentic LLMs now reliably handle document cross-verification across 10+ public & internal databases without hallucinations.',
          'Human compliance officer salaries have spiked 34% since 2023, creating severe margin compression.'
        ]
      },
      macroTailwinds: [
        'FinCEN corporate transparency updates requiring continuous beneficial ownership verification.',
        'Real-time payment rails (FedNow, RTP) eliminating the 24-48 hour settlement window for fraud inspection.'
      ]
    },
    evidenceList: [
      {
        id: 'ev-1',
        claim: 'US FinTechs and community banks spend an average of $2.4M annually on outsourced AML alert triaging, with over 90% of alerts resolved as benign.',
        type: 'fact',
        sourceTitle: 'Thomson Reuters Cost of Compliance Survey & Anti-Money Laundering Report',
        sourceUrl: 'https://www.thomsonreuters.com/en/reports/cost-of-compliance.html',
        domain: 'thomsonreuters.com',
        confidence: 'High',
        snippet: 'Financial institutions cite false-positive operational overhead as their primary compliance cost driver.'
      },
      {
        id: 'ev-2',
        claim: 'OCC and FDIC issued over 42 formal enforcement actions against BaaS sponsor banks between 2023 and 2026.',
        type: 'fact',
        sourceTitle: 'Sponsor Bank Regulatory Review — Federal Reserve & OCC Enforcement Actions',
        sourceUrl: 'https://www.occ.gov/news-issuances/news-releases/index.html',
        domain: 'occ.gov',
        confidence: 'High',
        snippet: 'Deficiencies in third-party FinTech monitoring and real-time transaction diligence were highlighted in 88% of orders.'
      },
      {
        id: 'ev-3',
        claim: 'Autonomous multi-hop investigation agents can safely reduce Level-1 triage time from 42 minutes down to under 4 minutes per alert.',
        type: 'estimate',
        sourceTitle: 'McKinsey Financial Services AI Productivity Benchmark',
        sourceUrl: 'https://www.mckinsey.com/industries/financial-services/our-insights',
        domain: 'mckinsey.com',
        confidence: 'Medium',
        snippet: 'Synthesizing sanctions lists, adverse media, and transaction ledger anomalies with human-in-the-loop oversight.'
      },
      {
        id: 'ev-4',
        claim: 'Compliance officers will accept autonomous agent recommendations if accompanied by auditable chain-of-thought citations and SOC2 Type II audit trails.',
        type: 'assumption',
        sourceTitle: 'Market Research Agent Primary Survey & Industry Interviews',
        sourceUrl: 'https://www.fincen.gov/resources/statutes-regulations',
        domain: 'fincen.gov',
        confidence: 'Medium',
        snippet: 'Auditability is the critical adoption hurdle; black-box LLMs are immediately rejected by compliance committees.'
      }
    ],
    targetAudience: {
      primaryICP: 'US & EU FinTechs (Series A through Growth) and BaaS Sponsor Banks processing $10M-$500M in monthly transactional volume.',
      secondarySegments: [
        'Community Banks ($500M-$5B AUM) under consent orders',
        'Cryptocurrency & Cross-Border remittance platforms',
        'B2B Neobanks with multi-currency accounts'
      ],
      personas: [
        {
          role: 'Chief Compliance Officer (CCO) / BSA Officer',
          companyProfile: 'Scale-up FinTech with 8-25 compliance analysts',
          primaryKPIs: ['Alert Backlog < 24 Hours', 'Zero Regulatory Fines', 'Audit Defensibility'],
          budgetAuthority: '$150,000 - $500,000 annual software budget',
          buyingTriggers: ['Recent sponsor bank audit warning', 'Scaling volume 3x without hiring 10 more analysts']
        },
        {
          role: 'VP of Risk & Operations',
          companyProfile: 'High-growth payments API provider',
          primaryKPIs: ['Cost per Active Account Review', 'False Positive Rate'],
          budgetAuthority: '$100,000+',
          buyingTriggers: ['Manual review bottlenecks causing customer onboarding drop-offs']
        }
      ],
      willingnessToPayNotes: 'High willingness to pay because saving 3 compliance analyst hires saves $270k/yr immediately while reducing catastrophic regulatory risk.'
    },
    customerProblems: [
      {
        id: 'prob-1',
        problem: 'Crushing 90%+ False Positive Alert Overload',
        severity: 'Critical',
        impactDescription: 'Legacy rule-based engines (Actimize, LexisNexis) flag legitimate user transactions, forcing humans to spend 30-45 minutes assembling public records, LinkedIn info, and bank statements.',
        currentWorkaround: 'Hiring offshore BPO compliance contractors ($35-$50/hr) with high turnover and inconsistent audit quality.',
        frictionCost: '$180,000 - $650,000 / year in redundant contractor fees'
      },
      {
        id: 'prob-2',
        problem: 'Sponsor Bank Termination Threat',
        severity: 'Critical',
        impactDescription: 'Partner banks demand weekly proof of transaction monitoring; failing an audit results in freeze of debit card issuance or settlement cutoffs.',
        currentWorkaround: 'Scrambling internal engineers to build brittle SQL scripts and manual CSV exports for auditors.',
        frictionCost: 'Existential business risk / revenue halts'
      },
      {
        id: 'prob-3',
        problem: 'Delayed Customer Onboarding & KYC Drop-Off',
        severity: 'High',
        impactDescription: 'High-net-worth or corporate accounts stuck in manual KYC reviews for 4-7 business days abandon the platform for faster competitors.',
        currentWorkaround: 'Priority queues that distract senior compliance staff from actual high-risk investigations.',
        frictionCost: '15-22% lost customer pipeline'
      }
    ],
    competitors: [
      {
        name: 'Hummingbird RegTech',
        website: 'https://hummingbird.co',
        category: 'Direct',
        pricingModel: '$35,000 - $120,000/yr platform fee + usage tiers',
        positioning: 'Case management CRM for compliance investigations',
        strengths: ['Beautiful UI', 'Excellent SAR e-filing with FinCEN', 'Good brand recognition'],
        weaknesses: ['Workflow orchestration only; does not autonomously run investigations or gather multi-source evidence', 'High implementation fees'],
        vulnerabilityToAttack: 'They are a system of record, not an autonomous agent. We can be the autonomous worker that does the work inside their case manager or replaces it entirely.'
      },
      {
        name: 'Unit21',
        website: 'https://unit21.ai',
        category: 'Direct',
        pricingModel: '$50,000+ annual minimums',
        positioning: 'Rule engine and transaction monitoring for risk teams',
        strengths: ['Flexible no-code rule builder', 'Good integration ecosystem'],
        weaknesses: ['High false positive rates still require huge analyst teams', 'Complex to configure'],
        vulnerabilityToAttack: 'Unit21 alerts still create massive human review backlogs. We solve the human review bottleneck.'
      },
      {
        name: 'NICE Actimize',
        website: 'https://www.niceactimize.com',
        category: 'Legacy incumbent',
        pricingModel: '$250,000+ enterprise contracts with 9-month implementations',
        positioning: 'Enterprise bank AML suite',
        strengths: ['Entrenched in top 50 banks', 'Decades of regulatory relationships'],
        weaknesses: ['Clunky legacy Java architecture', 'No modern agentic LLM capabilities', 'Unaffordable for mid-market'],
        vulnerabilityToAttack: 'Complete abandonment of mid-market fintechs who cannot afford 6-figure consulting implementations.'
      }
    ],
    saasOpportunities: [
      {
        id: 'saas-1',
        title: 'Autonomous SAR Dossier Drafter',
        automationScope: 'Multi-agent system queries internal ledger, runs adverse media search, scans sanctions registers, and compiles a complete Suspicious Activity Report (SAR) narrative ready for 1-click human sign-off.',
        workflowReplaced: 'Manual 45-minute analyst investigative write-ups.',
        defensibilityMoat: 'Proprietary audit-trail schemas and fin-crime reasoning benchmarks validated by ex-FinCEN compliance officers.',
        potentialEfficiencyGain: '82% reduction in investigation time per flagged account.'
      },
      {
        id: 'saas-2',
        title: 'Continuous Adverse Media & Sanctions Watcher Agent',
        automationScope: 'Replaces daily bulk batch CSV screening with real-time semantic entity resolution across international news, corporate registries, and OFAC updates.',
        workflowReplaced: 'Manual name-matching reviews with high spelling typo errors.',
        defensibilityMoat: 'Vectorized entity graph linking parent companies, beneficial owners, and aliases.',
        potentialEfficiencyGain: 'Instant alerts on actual bad actors within 10 minutes vs 30 days.'
      }
    ],
    revenueModel: {
      recommendedModel: 'Hybrid Platform',
      pricingTiers: [
        {
          name: 'Starter Pilot',
          price: '$2,500 / month',
          targetTier: 'Early FinTechs (<5,000 alerts/mo)',
          includedValue: 'Up to 1,500 automated investigations, standard connectors to Alloy/Persona/Unit21'
        },
        {
          name: 'Growth',
          price: '$6,500 / month + $1.50/investigation overage',
          targetTier: 'Mid-Market Neobanks ($50M+ volume)',
          includedValue: '5,000 investigations, custom audit logging, dedicated slack channel, sponsor bank audit export'
        },
        {
          name: 'Enterprise Bank Shield',
          price: '$15,000+ / month',
          targetTier: 'BaaS Sponsor Banks & High-Volume Remittance',
          includedValue: 'Unlimited seats, VPC deployment option, bespoke rule synthesis, guaranteed 99.9% uptime SLA'
        }
      ],
      projectedUnitEconomics: {
        estimatedACV: '$48,000',
        projectedCAC: '$11,500 (Direct B2B founder/compliance outreach & partner bank co-selling)',
        estimatedLTV: '$165,000 (Based on 3.5 year average retention in core RegTech)',
        paybackPeriod: '2.8 months'
      }
    },
    risks: [
      {
        category: 'Regulatory',
        risk: 'Regulators or sponsor banks reject AI-generated compliance narratives as non-compliant with BSA guidelines.',
        severity: 'Critical',
        probability: 'Medium',
        mitigationStrategy: 'Always maintain Human-in-the-Loop (HITL) sign-off. Position product as "Autonomous Analyst Assistant" rather than automated decider. Generate exhaustive footnote citations for every sentence in SAR narrative.'
      },
      {
        category: 'Technical',
        risk: 'Hallucination of sanctions lists or falsely clearing a sanctioned entity.',
        severity: 'Critical',
        probability: 'Low',
        mitigationStrategy: 'Deterministic hard-coded filters for exact OFAC/PEP matches; LLM is only utilized for narrative synthesis, document cross-referencing, and entity disambiguation.'
      },
      {
        category: 'Distribution',
        risk: 'Long enterprise compliance sales cycles (6-9 months).',
        severity: 'High',
        probability: 'High',
        mitigationStrategy: 'Target FinTechs undergoing active sponsor bank audits who need a solution within 30 days. Offer a 14-day free retrospective audit on past false positives to demonstrate immediate ROI.'
      }
    ],
    ceoBriefing: {
      executiveSummary: 'Mid-market FinTech compliance is at an inflection point. Sponsor bank crackdowns have made compliance the #1 operational bottleneck. By building an autonomous investigation agent that cuts false-positive triage time by 80% while generating auditor-grade SAR narratives, we can capture high-ACV contracts ($48k+) with rapid payback periods.',
      strategicVerdict: 'PURSUE AGGRESSIVELY',
      confidenceScore: 91,
      keyMilestones: [
        {
          timeline: 'Days 1 - 30',
          milestone: 'Deliverable Alpha with synthetic AML dataset and 5 compliance officer pilot testers',
          deRiskGoal: 'Validate narrative output acceptance and audit trail requirements'
        },
        {
          timeline: 'Days 31 - 60',
          milestone: 'Launch integration with Hummingbird and modern webhooks; close 2 paid design partners at $3k/mo',
          deRiskGoal: 'Prove willingness to pay and zero-friction onboarding'
        },
        {
          timeline: 'Days 61 - 90',
          milestone: 'SOC2 Type I compliance readiness and sponsor bank co-marketing referral agreement',
          deRiskGoal: 'Establish inbound distribution moat via BaaS sponsor banks'
        }
      ],
      strategicMoatAssessment: 'Our defensibility stems from high switching costs once regulatory audits pass using our chain-of-custody documentation, combined with a proprietary fine-tuned reasoning dataset of verified SAR filings.',
      immediateDirectives: [
        'Build connector prototype for standard CSV alert outputs from Unit21 and Alloy.',
        'Interview 5 BSA Compliance Officers from community banks currently under OCC scrutiny.',
        'Secure legal advisory sign-off on human-in-the-loop audit compliance framework.'
      ]
    }
  },
  {
    id: 'hvac-field-service-ai',
    title: 'Vertical AI Operating System for Commercial HVAC & Mechanical Contractors',
    sector: 'Field Service Automation / Vertical SaaS',
    query: 'B2B commercial HVAC contractor software dispatch billing inventory pain points',
    conductedAt: '2026-11-03T11:15:00Z',
    status: 'completed',
    searchQueriesExecuted: [
      'commercial HVAC contractor software market ServiceTitan alternatives',
      'HVAC dispatcher technician shortage workflow automation',
      'field service management software pricing review Capterra G2',
      'commercial equipment warranty parts inventory AI dispatch'
    ],
    opportunity: {
      headline: 'Autonomous Dispatch & Parts Procurement Agent for $80B Commercial HVAC Industry',
      summary: 'Commercial HVAC contractors run on 30-year-old dispatch whiteboards or bloated legacy software (ServiceTitan) that requires 4 full-time office staff per 15 field techs. Dispatchers spend 4 hours a day matching technician truck inventory, skill certifications, and manufacturer warranty parts. An AI voice + dispatch agent that coordinates emergency repairs autonomously unlocks $30k+ ACVs.',
      marketSize: {
        tam: '$12.8 Billion (Global Commercial Field Service Management SaaS)',
        sam: '$3.1 Billion (US Commercial HVAC & Refrigeration Service Contractors)',
        som: '$190 Million (Autonomous dispatch & billing optimization tier)',
        growthRateCagr: '17.8% CAGR'
      },
      marketTiming: {
        status: 'Hyper-Growth',
        whyNow: [
          'Acute shortage of qualified HVAC dispatchers and technicians: over 40% of workforce retiring within 5 years.',
          'ServiceTitan pushed steep 30-50% price hikes after their IPO filing, alienating mid-tier contractors ($3M-$20M rev).',
          'Voice AI agents (Gemini Live/audio) can now reliably handle inbound contractor job calls and triage unit models.'
        ]
      },
      macroTailwinds: [
        'EPA refrigerant phase-outs (R-410A transition) creating complex regulatory equipment tracking and parts replacement rules.',
        'Commercial building decarbonization mandates requiring smart heat pump retrofit maintenance records.'
      ]
    },
    evidenceList: [
      {
        id: 'ev-hvac-1',
        claim: 'US HVAC contractors report losing an average of $85,000 annually per technician due to dispatch routing inefficiencies and unbilled truck parts.',
        type: 'fact',
        sourceTitle: 'Air Conditioning Contractors of America (ACCA) Industry Financial Benchmarks',
        sourceUrl: 'https://www.acca.org/industry-data-reports',
        domain: 'acca.org',
        confidence: 'High',
        snippet: 'Field contractors lose between 14% and 22% of billable hours in transit and parts warehouse turnaround.'
      },
      {
        id: 'ev-hvac-2',
        claim: 'ServiceTitan average customer cost rose to over $250-$400 per technician per month plus heavy add-on charges.',
        type: 'fact',
        sourceTitle: 'SaaS Pricing Transparency & HVAC Contractor Forum Reviews',
        sourceUrl: 'https://www.g2.com/products/servicetitan/reviews',
        domain: 'g2.com',
        confidence: 'High',
        snippet: 'Contractors express frustration over opaque price increases and mandatory multi-year contracts.'
      },
      {
        id: 'ev-hvac-3',
        claim: 'Automated skill-to-part matching dispatch agents can increase daily completed jobs per technician from 3.2 to 4.1.',
        type: 'estimate',
        sourceTitle: 'Field Service Automation Impact Analysis 2025-2026',
        sourceUrl: 'https://www.gartner.com/en/supply-chain/research/field-service-management',
        domain: 'gartner.com',
        confidence: 'Medium',
        snippet: 'Eliminating the "wrong parts on truck" return trip boosts weekly billings by $1,800 per technician.'
      },
      {
        id: 'ev-hvac-4',
        claim: 'Contractor owners prefer specialized commercial workflows over generic residential field apps.',
        type: 'assumption',
        sourceTitle: 'HVAC Business Owner Interviews & Reddit r/HVAC Discussions',
        sourceUrl: 'https://www.reddit.com/r/HVAC',
        domain: 'reddit.com',
        confidence: 'Medium',
        snippet: 'Commercial jobs require multi-unit chillers, preventative maintenance contracts, and AIA billing formats.'
      }
    ],
    targetAudience: {
      primaryICP: 'Commercial & Industrial HVAC/R Contractors with 10 to 60 technicians and $4M to $25M in annual revenue.',
      secondarySegments: [
        'Commercial Plumbing & Mechanical Contractors',
        'Commercial Foodservice Refrigeration Repair',
        'Building Automation System (BAS) Integrators'
      ],
      personas: [
        {
          role: 'Owner / Managing General Partner',
          companyProfile: '2nd-generation family-owned commercial contractor with 25 vans',
          primaryKPIs: ['Gross Margin > 45%', 'Technician Utilization > 80%', 'Cash Flow DSO < 35 days'],
          budgetAuthority: '$30,000 - $80,000 / year',
          buyingTriggers: ['Dispatcher abruptly quit', 'ServiceTitan bill jumped 40%', 'Unbilled parts eating into profits']
        },
        {
          role: 'Head Dispatcher / Service Operations Manager',
          companyProfile: 'Manages 4 dispatch screens and endless phone calls',
          primaryKPIs: ['On-time First Arrival', 'Zero Missed SLA Calls', 'Technician Satisfaction'],
          budgetAuthority: 'Strong influence / veto power',
          buyingTriggers: ['Overwhelmed by heatwave / winter freeze emergency calls']
        }
      ],
      willingnessToPayNotes: 'Contractors gladly pay $150-$250/tech/mo if the tool directly books an extra job per tech per week.'
    },
    customerProblems: [
      {
        id: 'prob-hvac-1',
        problem: 'The "Second Truck Roll" Nightmare (Wrong Parts On Truck)',
        severity: 'Critical',
        impactDescription: 'Tech arrives at commercial rooftop unit, discovers they lack the specific Copeland compressor or TXV valve, and must drive 45 minutes to supply house. 28% of commercial calls require a second visit.',
        currentWorkaround: 'Tech calls supply counter on speakerphone while idling truck.',
        frictionCost: '$250-$400 lost margin per aborted service call'
      },
      {
        id: 'prob-hvac-2',
        problem: 'Delayed AIA Progress Invoicing & Cash Flow Traps',
        severity: 'High',
        impactDescription: 'Field technician notes written on grease-stained paper take 10-14 days to be transcribed into QuickBooks or Sage 300, blowing out Days Sales Outstanding (DSO) to 65+ days.',
        currentWorkaround: 'Office bookkeeper spends entire Fridays deciphering handwriting.',
        frictionCost: 'Excess line-of-credit interest & delayed payroll'
      }
    ],
    competitors: [
      {
        name: 'ServiceTitan',
        website: 'https://servicetitan.com',
        category: 'Legacy incumbent',
        pricingModel: '$250 - $450 / technician / month + heavy setup fees',
        positioning: 'All-in-one software for home and commercial trades',
        strengths: ['Market leader', 'Huge marketing budget', 'Extensive feature set'],
        weaknesses: ['Bloated UI built primarily for residential sales', 'Expensive lock-in', 'Poor inventory automation'],
        vulnerabilityToAttack: 'Heavy discontent over price gouging and aggressive sales tactics. Focus strictly on commercial contractors.'
      },
      {
        name: 'Housecall Pro',
        website: 'https://housecallpro.com',
        category: 'Indirect',
        pricingModel: '$65 - $169 / month base',
        positioning: 'Simple dispatch for 1-5 man residential shops',
        strengths: ['Simple to use', 'Affordable entry price'],
        weaknesses: ['Lacks commercial AIA billing', 'Cannot handle complex chiller preventative maintenance contracts'],
        vulnerabilityToAttack: 'Too lightweight for $5M+ commercial contractors.'
      },
      {
        name: 'BuildOps',
        website: 'https://buildops.com',
        category: 'Direct',
        pricingModel: '$180 - $300 / tech / month',
        positioning: 'Commercial contractor operations software',
        strengths: ['Focused on commercial trades', 'Good enterprise integrations'],
        weaknesses: ['Minimal AI capabilities; still requires manual human dispatch coordination', 'Long onboarding'],
        vulnerabilityToAttack: 'Win on autonomous AI dispatch agents and instant supply house parts lookup.'
      }
    ],
    saasOpportunities: [
      {
        id: 'saas-hvac-1',
        title: 'Voice-to-Parts AI Dispatch Triager',
        automationScope: 'Inbound customer voice calls or building alerts are parsed by AI: extracts equipment serial number, looks up warranty records, checks distributor warehouse stock via API, and assigns the closest certified technician with parts on van.',
        workflowReplaced: 'Manual 15-minute phone triaging and distributor call queues.',
        defensibilityMoat: 'Direct catalog APIs with major suppliers (Ferguson, Carrier, Johnstone Supply).',
        potentialEfficiencyGain: 'Reduces dispatch coordination time by 75% and cuts 2nd truck rolls by 40%.'
      },
      {
        id: 'saas-hvac-2',
        title: 'Instant Voice-to-AIA Billing Engine',
        automationScope: 'Technician dictates audio walk-through at job conclusion; AI converts audio and unit photos into formatted AIA G702/G703 billing forms and pushes to QuickBooks/Sage.',
        workflowReplaced: 'Manual weekly invoice drafting.',
        defensibilityMoat: 'Proprietary trade terminology parser for refrigerant weight, electrical amp draw, and part numbers.',
        potentialEfficiencyGain: 'Cuts DSO from 62 days down to 18 days.'
      }
    ],
    revenueModel: {
      recommendedModel: 'Tiered Seat SaaS',
      pricingTiers: [
        {
          name: 'Core Dispatch Agent',
          price: '$129 / tech / month',
          targetTier: 'Shops with 10-25 technicians',
          includedValue: 'Autonomous dispatching, mobile tech app, voice notes, supplier catalog integrations'
        },
        {
          name: 'Commercial Pro',
          price: '$199 / tech / month',
          targetTier: 'Shops with 25-60 technicians',
          includedValue: 'Full AIA billing, PM contract automated renewals, warehouse barcode sync, 24/7 AI answering'
        }
      ],
      projectedUnitEconomics: {
        estimatedACV: '$38,000 (average 20 technicians)',
        projectedCAC: '$7,200 (Regional HVAC association conferences & direct cold outreach to owners)',
        estimatedLTV: '$140,000 (Contractor software has <0.8% monthly churn)',
        paybackPeriod: '2.3 months'
      }
    },
    risks: [
      {
        category: 'Distribution',
        risk: 'Blue-collar contractors are skeptical of tech startups and software changeover.',
        severity: 'High',
        probability: 'High',
        mitigationStrategy: 'Offer white-glove onboarding and "rip and replace" data migration from QuickBooks/ServiceTitan. Sponsor state trade association events.'
      },
      {
        category: 'Technical',
        risk: 'Poor cellular connectivity in basement mechanical rooms or commercial rooftops.',
        severity: 'Medium',
        probability: 'High',
        mitigationStrategy: 'Offline-first Progressive Web App architecture with background synchronization.'
      }
    ],
    ceoBriefing: {
      executiveSummary: 'Commercial HVAC is an unglamorous, highly lucrative vertical SaaS market. Contractor owners are actively fleeing ServiceTitan’s price hikes. By delivering an AI dispatcher and automated parts procurement agent that directly eliminates the $85k/tech operational waste, we can build a high-retention $20M+ ARR vertical SaaS with sticky contractor lock-in.',
      strategicVerdict: 'PURSUE AGGRESSIVELY',
      confidenceScore: 88,
      keyMilestones: [
        {
          timeline: 'Month 1',
          milestone: 'Partner with 3 commercial HVAC shops (15-30 vans) for beta shadow testing',
          deRiskGoal: 'Confirm parts catalog accuracy and technician mobile usability'
        },
        {
          timeline: 'Month 2 - 3',
          milestone: 'Launch Automated AIA Billing & Voice Dispatch module',
          deRiskGoal: 'Achieve $15k MRR across 5 paying contractor accounts'
        },
        {
          timeline: 'Month 4 - 6',
          milestone: 'Integrate Johnstone Supply & Ferguson distributor parts inventories',
          deRiskGoal: 'Establish network effect moat that competitors cannot easily copy'
        }
      ],
      strategicMoatAssessment: 'Distributor inventory integrations combined with deep commercial HVAC equipment schemas create durable moats that horizontal AI tools cannot touch.',
      immediateDirectives: [
        'Secure 3 design partner LOIs at upcoming regional ACCA chapter meeting.',
        'Implement offline-first mobile voice-dictation prototype.',
        'Build automated QuickBooks Desktop/Online sync connector.'
      ]
    }
  }
];
