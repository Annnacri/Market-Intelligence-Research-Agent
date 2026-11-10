import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Search, 
  ExternalLink, 
  Loader2, 
  CheckCircle, 
  HelpCircle, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

interface FactCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FactCheckModal: React.FC<FactCheckModalProps> = ({ isOpen, onClose }) => {
  const [claim, setClaim] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claim.trim() || isLoading) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/research/verify-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim }),
      });
      const data = await response.json();
      if (data.success) {
        setResult(data);
      }
    } catch (err) {
      console.error('Verification error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleClaims = [
    'ServiceTitan increased technician seat pricing to over $250-$400/month',
    'Financial institutions spend over $2M annually on false positive AML alert triaging',
    '85% of healthcare prior authorization claims are delayed beyond 72 hours'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Market Claim Fact-Checker</h3>
              <p className="text-xs text-slate-400">Classify as Fact, Estimate, or Assumption with live search grounding</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                Market Claim / Competitor Statistic to Verify:
              </label>
              <textarea
                rows={2}
                value={claim}
                onChange={(e) => setClaim(e.target.value)}
                placeholder="E.g., Global regtech market is expected to surpass $25B by 2028..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                required
              />
            </div>

            {/* Quick samples */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Try testing:</span>
              {sampleClaims.map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setClaim(sample)}
                  className="text-left w-full text-xs text-slate-400 hover:text-cyan-300 truncate block py-0.5 cursor-pointer"
                >
                  • "{sample}"
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={!claim.trim() || isLoading}
              className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-cyan-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Searching Independent Sources...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Verify with Google Search Grounding</span>
                </>
              )}
            </button>
          </form>

          {/* Verification Results */}
          {result && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold uppercase border ${
                  result.verification.classification === 'fact'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : result.verification.classification === 'estimate'
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                }`}>
                  Classification: {result.verification.classification}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Confidence: <span className="text-white font-bold">{result.verification.confidenceScore}%</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {result.verification.summary}
              </p>

              {result.verification.verifiedDetails && (
                <div className="bg-slate-900/80 p-3 rounded-lg text-xs text-slate-300">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">
                    Contextual Details:
                  </span>
                  {result.verification.verifiedDetails}
                </div>
              )}

              {/* Citations */}
              {result.citations && result.citations.length > 0 && (
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Authoritative Citations:
                  </span>
                  <div className="space-y-1">
                    {result.citations.map((c: any, idx: number) => (
                      <a
                        key={idx}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 truncate"
                      >
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{c.title || c.url}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
