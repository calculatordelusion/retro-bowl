import React, { useState } from 'react';
import { DollarSign, Shield, Zap, AlertCircle, Award, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PositionData {
  id: string;
  name: string;
  category: 'Offense' | 'Defense' | 'Special';
  stars: number;
  baseSalaryMultiplier: number;
}

const INITIAL_ROSTER: PositionData[] = [
  { id: 'qb', name: 'Quarterback (QB)', category: 'Offense', stars: 4.5, baseSalaryMultiplier: 10 },
  { id: 'rb', name: 'Running Back (RB)', category: 'Offense', stars: 4.0, baseSalaryMultiplier: 6.5 },
  { id: 'wr1', name: 'Wide Receiver 1 (WR1)', category: 'Offense', stars: 4.5, baseSalaryMultiplier: 7.2 },
  { id: 'wr2', name: 'Wide Receiver 2 (WR2)', category: 'Offense', stars: 3.5, baseSalaryMultiplier: 6.8 },
  { id: 'te', name: 'Tight End (TE)', category: 'Offense', stars: 3.5, baseSalaryMultiplier: 5.5 },
  { id: 'ol', name: 'Offensive Lineman (OL)', category: 'Offense', stars: 3.0, baseSalaryMultiplier: 4.0 },
  { id: 'dl', name: 'Defensive Lineman (DL)', category: 'Defense', stars: 4.0, baseSalaryMultiplier: 5.8 },
  { id: 'lb', name: 'Linebacker (LB)', category: 'Defense', stars: 4.0, baseSalaryMultiplier: 6.0 },
  { id: 'db', name: 'Defensive Back (DB)', category: 'Defense', stars: 4.5, baseSalaryMultiplier: 6.2 },
  { id: 'k', name: 'Kicker (K)', category: 'Special', stars: 2.5, baseSalaryMultiplier: 3.0 },
];

const SalaryCapCalculator = () => {
  const [capCeiling, setCapCeiling] = useState<number>(200); // in millions
  const [roster, setRoster] = useState<PositionData[]>(INITIAL_ROSTER);

  // Calculate salary for an individual player based on stars and multiplier
  const getSalary = (player: PositionData): number => {
    return Math.round(player.stars * player.baseSalaryMultiplier);
  };

  const handleStarChange = (id: string, newStars: number) => {
    setRoster(prev => prev.map(p => p.id === id ? { ...p, stars: Math.max(1, Math.min(5, newStars)) } : p));
  };

  const totalPayroll = roster.reduce((sum, p) => sum + getSalary(p), 0);
  const remainingCap = capCeiling - totalPayroll;
  const isOverCap = remainingCap < 0;

  // Calculate star averages
  const offensePlayers = roster.filter(p => p.category === 'Offense');
  const defensePlayers = roster.filter(p => p.category === 'Defense');
  const avgOffense = (offensePlayers.reduce((acc, p) => acc + p.stars, 0) / offensePlayers.length).toFixed(1);
  const avgDefense = (defensePlayers.reduce((acc, p) => acc + p.stars, 0) / defensePlayers.length).toFixed(1);
  const overallRating = ((Number(avgOffense) + Number(avgDefense)) / 2).toFixed(1);

  // Grade calculation
  let grade = 'B';
  let gradeColor = 'text-retro-yellow';
  if (isOverCap) {
    grade = 'CAP VIOLATION';
    gradeColor = 'text-retro-red';
  } else if (Number(overallRating) >= 4.5) {
    grade = 'S Tier (Dynasty Champion)';
    gradeColor = 'text-retro-green';
  } else if (Number(overallRating) >= 4.0) {
    grade = 'A Tier (Super Bowl Contender)';
    gradeColor = 'text-retro-yellow';
  } else if (Number(overallRating) >= 3.0) {
    grade = 'B Tier (Playoff Hopeful)';
    gradeColor = 'text-retro-orange';
  } else {
    grade = 'C Tier (Rebuilding Team)';
    gradeColor = 'text-retro-light-gray';
  }

  const resetRoster = () => {
    setRoster(INITIAL_ROSTER);
    setCapCeiling(200);
  };

  return (
    <div className="bg-gradient-to-br from-retro-dark-blue to-retro-blue border-2 border-retro-gray rounded-xl p-6 shadow-2xl my-8 animate-pixel-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-retro-gray/50 pb-4">
        <div>
          <h3 className="font-pixel text-retro-yellow text-sm sm:text-base flex items-center gap-2">
            <DollarSign className="text-retro-green" size={20} />
            RETRO BOWL SALARY CAP & DYNASTY CALCULATOR
          </h3>
          <p className="text-retro-light-gray text-xs mt-1">
            Build your championship roster, balance player salaries, and avoid cap penalty cuts before the trade deadline.
          </p>
        </div>

        {/* Cap Ceiling Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-retro-light-gray font-bold">Salary Cap:</span>
          {[200, 225, 250, 300].map(cap => (
            <button
              key={cap}
              onClick={() => setCapCeiling(cap)}
              className={`px-2.5 py-1 text-xs font-pixel rounded transition-all ${
                capCeiling === cap 
                  ? 'bg-retro-red text-white border border-retro-yellow shadow' 
                  : 'bg-retro-black/50 text-retro-light-gray hover:text-white border border-retro-gray/50'
              }`}
            >
              ${cap}M
            </button>
          ))}
          <Button size="sm" variant="ghost" onClick={resetRoster} className="h-8 px-2 text-retro-light-gray" title="Reset Roster">
            <RefreshCw size={14} />
          </Button>
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-retro-black/60 border border-retro-gray rounded-lg p-3 text-center">
          <span className="text-[11px] text-retro-light-gray uppercase block font-bold">Total Payroll</span>
          <span className="font-pixel text-base text-retro-white">${totalPayroll}M</span>
        </div>

        <div className={`bg-retro-black/60 border rounded-lg p-3 text-center ${isOverCap ? 'border-retro-red' : 'border-retro-green'}`}>
          <span className="text-[11px] text-retro-light-gray uppercase block font-bold">Remaining Cap</span>
          <span className={`font-pixel text-base ${isOverCap ? 'text-retro-red animate-pulse' : 'text-retro-green'}`}>
            {isOverCap ? `-$${Math.abs(remainingCap)}M` : `+$${remainingCap}M`}
          </span>
        </div>

        <div className="bg-retro-black/60 border border-retro-gray rounded-lg p-3 text-center">
          <span className="text-[11px] text-retro-light-gray uppercase block font-bold">Offense / Defense</span>
          <span className="font-pixel text-xs text-retro-yellow">
            ★ {avgOffense} / ★ {avgDefense}
          </span>
        </div>

        <div className="bg-retro-black/60 border border-retro-gray rounded-lg p-3 text-center">
          <span className="text-[11px] text-retro-light-gray uppercase block font-bold">Dynasty Status</span>
          <span className={`font-pixel text-xs ${gradeColor} truncate block`}>
            {grade}
          </span>
        </div>
      </div>

      {/* Cap Warning Notification */}
      {isOverCap && (
        <div className="bg-retro-red/20 border border-retro-red rounded-lg p-3 mb-6 flex items-center gap-3 text-xs text-retro-red">
          <AlertCircle size={18} className="flex-shrink-0" />
          <span>
            <strong>Cap Room Exceeded by ${Math.abs(remainingCap)}M!</strong> You must trade away an aging veteran or draft a rookie before advancing to Week 1.
          </span>
        </div>
      )}

      {/* Player Positions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {roster.map(player => {
          const salary = getSalary(player);
          return (
            <div 
              key={player.id}
              className="bg-retro-black/40 border border-retro-gray/60 hover:border-retro-yellow rounded-lg p-3 flex items-center justify-between gap-3 transition-colors"
            >
              <div>
                <div className="text-xs font-bold text-retro-white flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${player.category === 'Offense' ? 'bg-retro-yellow' : player.category === 'Defense' ? 'bg-retro-blue' : 'bg-retro-green'}`} />
                  {player.name}
                </div>
                <div className="text-[11px] text-retro-light-gray mt-0.5">
                  Contract: <strong className="text-retro-green">${salary}M / yr</strong>
                </div>
              </div>

              {/* Star Rating Controls */}
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => handleStarChange(player.id, player.stars - 0.5)}
                  className="w-6 h-6 rounded bg-retro-dark-blue hover:bg-retro-purple text-retro-white text-xs font-bold border border-retro-gray flex items-center justify-center"
                  disabled={player.stars <= 1}
                >
                  -
                </button>
                <span className="font-pixel text-[11px] text-retro-yellow w-12 text-center">
                  ★ {player.stars.toFixed(1)}
                </span>
                <button 
                  onClick={() => handleStarChange(player.id, player.stars + 0.5)}
                  className="w-6 h-6 rounded bg-retro-dark-blue hover:bg-retro-purple text-retro-white text-xs font-bold border border-retro-gray flex items-center justify-center"
                  disabled={player.stars >= 5}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Strategy Recommendation */}
      <div className="mt-6 bg-black/40 border-l-4 border-retro-yellow p-4 rounded-r-lg text-xs text-retro-light-gray">
        <h4 className="text-retro-yellow font-bold uppercase mb-1 flex items-center gap-2">
          <Award size={14} className="text-retro-green" />
          General Manager Pro Strategy Tip:
        </h4>
        <p>
          Never invest more than $45M in your kicker or multiple offensive linemen. The highest ROI build in Retro Bowl is a <strong>5-star QB</strong>, two <strong>4.5-star WRs</strong>, one <strong>4-star TE</strong>, and heavy investments in <strong>Defensive Backs (DBs)</strong> to generate drive-killing turnovers on Extreme difficulty.
        </p>
      </div>
    </div>
  );
};

export default SalaryCapCalculator;
