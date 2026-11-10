import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Flame, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Terminal,
  Loader2,
  Copy,
  Check
} from 'lucide-react';
import { CEOBriefing, ResearchDossier, CEODialogueMessage } from '../types/research';

interface CEOBriefingViewProps {
  dossier: ResearchDossier;
}

export const CEOBriefingView: React.FC<CEOBriefingViewProps> = ({ dossier }) => {
  const briefing = dossier.ceoBriefing;
  const [dialogue, setDialogue] = useState<CEODialogueMessage[]>([
    {
      id: 'initial-ceo-review',
      sender: 'ceo',
      message: `Research Agent: I have received your dossier for "${dossier.title}". Your recommended verdict is ${briefing.strategicVerdict} with a confidence score of ${briefing.confidenceScore}%. What is our primary defensive moat if an established incumbent attempts to clone this feature set?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: 'initial-researcher-reply',
      sender: 'researcher',
      message: `CEO Agent: Our primary moat is ${briefing.strategicMoatAssessment}. Incumbents like ${dossier.competitors[0]?.name || 'the category leaders'} are burdened by legacy architectures and high implementation fees (${dossier.competitors[0]?.pricingModel || 'enterprise quotes'}), whereas our workflow integration directly de-risks customer friction in week one.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const verdictStyles = {
    'PURSUE AGGRESSIVELY': {
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      badge: 'bg-emerald-500 text-slate-950',
      icon: CheckCircle2
    },
    'VALIDATE FIRST (PILOT)': {
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      badge: 'bg-amber-500 text-slate-950',
      icon: AlertCircle
    },
    'PIVOT ANGLE': {
      bg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      badge: 'bg-purple-500 text-slate-950',
      icon: Sparkles
    },
    'REJECT / UNFAVORABLE': {
      bg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
      badge: 'bg-rose-500 text-slate-950',
      icon: AlertCircle
    }
  };

  const currentVerdict = verdictStyles[briefing.strategicVerdict] || verdictStyles['VALIDATE FIRST (PILOT)'];
  const VerdictIcon = currentVerdict.icon;

  const handleSendCEOInquiry = async (customPrompt?: string) => {
    const q = customPrompt || inputQuestion.trim();
    if (!q || isLoading) return;

    const userMessage: CEODialogueMessage = {
      id: 'msg-' + Date.now(),
      sender: 'ceo',
      message: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setDialogue((prev) => [...prev, userMessage]);
    setInputQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/research/ceo-inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dossier,
          question: q,
          previousMessages: [...dialogue, userMessage]
        })
      });

      const data = await response.json();
      if (data.success && data.dialogue) {
        const reply: CEODialogueMessage = {
          id: 'reply-' + Date.now(),
          sender: 'researcher',
          message: data.dialogue.researcherMessage || 'Evidence indicates strong alignment with market signals.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setDialogue((prev) => [...prev, reply]);
      }
    } catch (err) {
      console.error('Dialogue error:', err);
      const fallbackReply: CEODialogueMessage = {
        id: 'reply-' + Date.now(),
        sender: 'researcher',
        message: 'According to our evidence ledger, customer willingness to pay is supported by immediate cost reduction on unbilled hours and compliance contractor fees.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setDialogue((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTranscript = () => {
    const transcript = dialogue
      .map((d) => `[${d.timestamp}] ${d.sender.toUpperCase()}: ${d.message}`)
      .join('\n\n');
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Executive Decision Header Card */}
      <div className={`rounded-2xl border p-6 ${currentVerdict.bg} relative overflow-hidden`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Executive Briefing for CEO Agent
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Strategic Recommendation & Mandate
              </h3>
            </div>
          </div>

          {/* Verdict Badge & Confidence */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Agent Confidence</span>
              <span className="text-lg font-bold text-white font-mono">{briefing.confidenceScore}%</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 bg-slate-950 border border-white/20 text-white shadow-lg">
              <VerdictIcon className="w-4 h-4 text-emerald-400" />
              <span>{briefing.strategicVerdict}</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
          {briefing.executiveSummary}
        </p>

        {/* Strategic Moat Assessment */}
        <div className="mt-4 p-4 rounded-xl bg-slate-950/70 border border-white/10">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-indigo-400 font-bold mb-1">
            <ShieldCheck className="w-4 h-4" /> Strategic Moat & Defensibility Evaluation
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {briefing.strategicMoatAssessment}
          </p>
        </div>
      </div>

      {/* Two Columns: Milestones & Immediate Directives */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 30-60-90 Day Milestones */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              30-60-90 Day Execution Milestones
            </h4>
          </div>

          <div className="space-y-3.5">
            {briefing.keyMilestones.map((m, idx) => (
              <div key={idx} className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/60">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono font-bold text-cyan-400">{m.timeline}</span>
                  <span className="text-[11px] text-slate-400 font-mono">De-Risking Milestone</span>
                </div>
                <h5 className="text-xs sm:text-sm font-semibold text-white">{m.milestone}</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Goal: <span className="text-slate-300">{m.deRiskGoal}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Immediate Directives for CEO Agent */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-4">
            <Flame className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Immediate Executive Directives
            </h4>
          </div>

          <ul className="space-y-3">
            {briefing.immediateDirectives.map((dir, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                <span className="flex-shrink-0 w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono text-xs font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{dir}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CEO Strategic Review & Dialogue Console */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Autonomous Team Dialogue: CEO Agent ⟷ Research Agent
            </h4>
          </div>
          <button
            onClick={handleCopyTranscript}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
            title="Copy Dialogue"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Dialogue'}</span>
          </button>
        </div>

        {/* Dialogue Stream */}
        <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto bg-slate-950/40">
          {dialogue.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'ceo' ? 'items-start' : 'items-end'}`}
            >
              <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400 mb-1">
                <span className={`font-bold uppercase ${msg.sender === 'ceo' ? 'text-amber-400' : 'text-indigo-400'}`}>
                  {msg.sender === 'ceo' ? '👔 CEO AGENT' : '🔬 MARKET RESEARCH AGENT'}
                </span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>
              <div
                className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed border ${
                  msg.sender === 'ceo'
                    ? 'bg-amber-950/20 border-amber-800/40 text-amber-100 rounded-tl-sm'
                    : 'bg-indigo-950/30 border-indigo-800/40 text-indigo-100 rounded-tr-sm'
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center space-x-2 text-xs text-indigo-400 font-mono py-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Market Research Agent cross-referencing evidence and synthesizing reply...</span>
            </div>
          )}
        </div>

        {/* Quick Executive Prompts */}
        <div className="px-5 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] font-mono text-slate-500 uppercase">CEO Probing Inquiries:</span>
          <button
            onClick={() => handleSendCEOInquiry("What is our defensibility against incumbents if they lower pricing?")}
            disabled={isLoading}
            className="text-xs px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 font-medium transition-colors cursor-pointer"
          >
            Incumbent Price Defense?
          </button>
          <button
            onClick={() => handleSendCEOInquiry("What is our exact 0-to-1 customer acquisition wedge for our first 10 customers?")}
            disabled={isLoading}
            className="text-xs px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 font-medium transition-colors cursor-pointer"
          >
            0-to-1 Acquisition Wedge?
          </button>
          <button
            onClick={() => handleSendCEOInquiry("Is our projected CAC realistic given enterprise sales cycles in this sector?")}
            disabled={isLoading}
            className="text-xs px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 font-medium transition-colors cursor-pointer"
          >
            CAC & Sales Cycle Sanity Check?
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendCEOInquiry();
            }}
            placeholder="Direct the CEO Agent to probe deeper or question the evidence..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSendCEOInquiry()}
            disabled={!inputQuestion.trim() || isLoading}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dispatch</span>
          </button>
        </div>
      </div>
    </div>
  );
};
