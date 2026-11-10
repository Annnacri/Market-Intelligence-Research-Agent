import { ResearchDossier } from '../types/research';

export function exportDossierToMarkdown(dossier: ResearchDossier): void {
  const md = `# MARKET INTELLIGENCE EXECUTIVE DOSSIER
**Unit:** Research Agent (MRA-01) — Autonomous AI Business Team  
**Subject:** ${dossier.title}  
**Sector:** ${dossier.sector}  
**Date Conducted:** ${new Date(dossier.conductedAt).toLocaleDateString()}  
**Strategic Verdict for CEO Agent:** ${dossier.ceoBriefing.strategicVerdict} (Confidence: ${dossier.ceoBriefing.confidenceScore}%)

---

## 1. Executive Summary & Market Opportunity
**Headline:** ${dossier.opportunity.headline}  
**Thesis:** ${dossier.opportunity.summary}

### Market Sizing
- **TAM (Total Addressable Market):** ${dossier.opportunity.marketSize.tam}
- **SAM (Serviceable Addressable Market):** ${dossier.opportunity.marketSize.sam}
- **SOM (Serviceable Obtainable Market):** ${dossier.opportunity.marketSize.som}
- **Growth Rate (CAGR):** ${dossier.opportunity.marketSize.growthRateCagr}
- **Market Timing:** ${dossier.opportunity.marketTiming.status}

### "Why Now?" Catalysts:
${dossier.opportunity.marketTiming.whyNow.map((w) => `- ${w}`).join('\n')}

### Macro Tailwinds:
${dossier.opportunity.macroTailwinds.map((t) => `- ${t}`).join('\n')}

---

## 2. Evidence & Source Links
*Classified in strict adherence to Research Agent rules (Fact vs Estimate vs Assumption)*

${dossier.evidenceList.map((e, idx) => `
### [${e.type.toUpperCase()}] ${e.sourceTitle}
- **Claim:** "${e.claim}"
- **Source URL:** ${e.sourceUrl}
- **Confidence:** ${e.confidence}
${e.snippet ? `- **Context:** "${e.snippet}"` : ''}
`).join('\n')}

---

## 3. Target Audience & Customer Profile
- **Primary ICP:** ${dossier.targetAudience.primaryICP}
- **Secondary Segments:** ${dossier.targetAudience.secondarySegments.join(', ')}
- **Willingness to Pay:** ${dossier.targetAudience.willingnessToPayNotes}

### Buyer Personas:
${dossier.targetAudience.personas.map((p) => `
#### ${p.role} (${p.companyProfile})
- **Budget Authority:** ${p.budgetAuthority}
- **KPIs:** ${p.primaryKPIs.join(', ')}
- **Urgent Buying Triggers:** ${p.buyingTriggers.join(', ')}
`).join('\n')}

---

## 4. Customer Problems & Unmet Needs
${dossier.customerProblems.map((prob, idx) => `
### ${idx + 1}. ${prob.problem} [Severity: ${prob.severity}]
- **Impact:** ${prob.impactDescription}
- **Current Workaround:** ${prob.currentWorkaround}
- **Cost of Friction:** ${prob.frictionCost}
`).join('\n')}

---

## 5. Competitor Analysis & Vulnerabilities
${dossier.competitors.map((c) => `
### ${c.name} (${c.category})
- **Website:** ${c.website}
- **Positioning:** "${c.positioning}"
- **Pricing Model:** ${c.pricingModel}
- **Strengths:** ${c.strengths.join(', ')}
- **Weaknesses:** ${c.weaknesses.join(', ')}
- **Vulnerability to Attack:** ${c.vulnerabilityToAttack}
`).join('\n')}

---

## 6. AI Automation & SaaS Opportunities
${dossier.saasOpportunities.map((s, idx) => `
### ${idx + 1}. ${s.title}
- **Scope:** ${s.automationScope}
- **Replaces:** ${s.workflowReplaced}
- **Defensibility Moat:** ${s.defensibilityMoat}
- **Efficiency Gain:** ${s.potentialEfficiencyGain}
`).join('\n')}

---

## 7. Monetization & Projected Unit Economics
- **Recommended Model:** ${dossier.revenueModel.recommendedModel}
- **Estimated ACV:** ${dossier.revenueModel.projectedUnitEconomics.estimatedACV}
- **Projected CAC:** ${dossier.revenueModel.projectedUnitEconomics.projectedCAC}
- **Estimated LTV:** ${dossier.revenueModel.projectedUnitEconomics.estimatedLTV}
- **Payback Period:** ${dossier.revenueModel.projectedUnitEconomics.paybackPeriod}

### Proposed Tiers:
${dossier.revenueModel.pricingTiers.map((t) => `- **${t.name} (${t.price}):** Target: ${t.targetTier} | Includes: ${t.includedValue}`).join('\n')}

---

## 8. Risk Pre-Mortem & Mitigations
${dossier.risks.map((r) => `
### [${r.category}] Impact: ${r.severity} | Probability: ${r.probability}
- **Risk:** ${r.risk}
- **Mitigation:** ${r.mitigationStrategy}
`).join('\n')}

---

## 9. Recommendations for the CEO Agent
**Verdict:** ${dossier.ceoBriefing.strategicVerdict}  
**Confidence Score:** ${dossier.ceoBriefing.confidenceScore}%  
**Executive Summary:** ${dossier.ceoBriefing.executiveSummary}

### Strategic Moat:
${dossier.ceoBriefing.strategicMoatAssessment}

### 30-60-90 Execution Milestones:
${dossier.ceoBriefing.keyMilestones.map((m) => `- **${m.timeline}:** ${m.milestone} (De-risk goal: ${m.deRiskGoal})`).join('\n')}

### Immediate Directives:
${dossier.ceoBriefing.immediateDirectives.map((d, idx) => `${idx + 1}. ${d}`).join('\n')}
`;

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `CEO_BRIEFING_${dossier.id.toUpperCase()}.md`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
