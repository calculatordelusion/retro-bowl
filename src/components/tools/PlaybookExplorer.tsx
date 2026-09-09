import React, { useState } from 'react';
import { Target, Zap, Shield, ArrowUpRight, Compass, Flame } from 'lucide-react';

interface RouteData {
  id: string;
  name: string;
  targetPos: string;
  difficulty: 'Easy' | 'Medium' | 'Expert';
  bestAgainst: string;
  passType: 'High Lob' | 'Bullet Pass' | 'Quick Release';
  successRate: string;
  description: string;
  coachingTip: string;
}

const ROUTES: RouteData[] = [
  {
    id: 'slant',
    name: 'Quick Slant Route',
    targetPos: 'WR1 / WR2 / Slot',
    difficulty: 'Easy',
    bestAgainst: 'Cover 0 Blitz & Soft Zone',
    passType: 'Bullet Pass',
    successRate: '94%',
    description: 'Receiver takes 2 steps upfield then cuts violently across the middle of the field.',
    coachingTip: 'Throw the instant the wideout plants their outside foot. Do not lead too far or the safety will contest the catch.'
  },
  {
    id: 'streak',
    name: 'Go / Streak Route (Hail Mary)',
    targetPos: 'Fast WR (Speed 9+)',
    difficulty: 'Medium',
    bestAgainst: 'Single High Safety (Cover 1) & Press Man',
    passType: 'High Lob',
    successRate: '88%',
    description: 'Receiver sprints full speed straight down the sideline looking to burn the corner.',
    coachingTip: 'Throw with maximum power to the deep sideline just as the WR gets a half-step ahead of the cornerback.'
  },
  {
    id: 'corner',
    name: 'Corner / Post-Corner Route',
    targetPos: 'TE / WR',
    difficulty: 'Medium',
    bestAgainst: 'Cover 2 Zone & Tampa 2',
    passType: 'Bullet Pass',
    successRate: '89%',
    description: 'Receiver angles inward towards the center, then cuts sharply towards the back pylon of the end zone.',
    coachingTip: 'Wait until the receiver clears the underneath linebacker before firing a bullet into the sideline pocket.'
  },
  {
    id: 'comeback',
    name: '12-Yard Comeback Route',
    targetPos: 'WR1',
    difficulty: 'Expert',
    bestAgainst: 'Deep Off-Coverage & Bail Technique',
    passType: 'Bullet Pass',
    successRate: '91%',
    description: 'Receiver pushes deep for 12-14 yards, stops on a dime, and works backwards towards the QB.',
    coachingTip: 'Release the ball BEFORE the receiver turns around. It lands right as they face the quarterback.'
  },
  {
    id: 'te-seam',
    name: 'Tight End Seam Buster',
    targetPos: 'Tight End (TE)',
    difficulty: 'Easy',
    bestAgainst: 'Cover 3 & Over-Aggressive Linebackers',
    passType: 'Bullet Pass',
    successRate: '96%',
    description: 'Tight End releases off the line and flies straight up the hash marks between the safeties.',
    coachingTip: 'The #1 money play for 2-point conversions! The TE almost always wins physical leverage on the goal line.'
  },
  {
    id: 'rb-wheel',
    name: 'Running Back Wheel / Flat',
    targetPos: 'Running Back (RB)',
    difficulty: 'Easy',
    bestAgainst: 'All-Out Blitz (Zero Safety Deep)',
    passType: 'Quick Release',
    successRate: '95%',
    description: 'Running back swings out of the backfield into the flat or turns up the sideline behind the blitz.',
    coachingTip: 'Your emergency check-down. If you see the defense blitzing 6 rushers, dump it to your RB immediately.'
  }
];

const PlaybookExplorer = () => {
  const [selectedRoute, setSelectedRoute] = useState<RouteData>(ROUTES[0]);

  return (
    <div className="bg-gradient-to-br from-retro-dark-blue to-retro-blue border-2 border-retro-gray rounded-xl p-6 shadow-2xl my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-retro-gray/50 pb-4">
        <div>
          <h3 className="font-pixel text-retro-yellow text-sm sm:text-base flex items-center gap-2">
            <Compass className="text-retro-orange" size={20} />
            INTERACTIVE RETRO BOWL PLAYBOOK ROUTE EXPLORER
          </h3>
          <p className="text-retro-light-gray text-xs mt-1">
            Analyze route trees, learn how to beat Cover 2/Cover 3 blitzes, and master high lob vs bullet pass mechanics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] bg-retro-green/20 text-retro-green px-2.5 py-1 rounded font-bold border border-retro-green/40">
            ✓ 2026 Updated Routes
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Route Selection List */}
        <div className="space-y-2">
          <h4 className="font-pixel text-xs text-retro-light-gray mb-3">SELECT ROUTE:</h4>
          {ROUTES.map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedRoute(r)}
              className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between ${
                selectedRoute.id === r.id
                  ? 'bg-retro-red text-white border-retro-yellow font-bold shadow-lg'
                  : 'bg-retro-black/50 border-retro-gray/50 text-retro-light-gray hover:bg-retro-blue hover:text-white'
              }`}
            >
              <div>
                <div className="text-xs">{r.name}</div>
                <div className="text-[10px] opacity-75">{r.targetPos}</div>
              </div>
              <span className="text-[10px] font-pixel text-retro-yellow">
                {r.successRate}
              </span>
            </button>
          ))}
        </div>

        {/* Route Tactical Details */}
        <div className="lg:col-span-2 bg-retro-black/60 border border-retro-gray rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h4 className="font-pixel text-retro-yellow text-sm sm:text-base flex items-center gap-2">
                <Flame size={18} className="text-retro-red" />
                {selectedRoute.name}
              </h4>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-retro-blue text-retro-white border border-retro-gray">
                Target: {selectedRoute.targetPos}
              </span>
            </div>

            <p className="text-retro-light-gray text-xs sm:text-sm mb-5 leading-relaxed">
              {selectedRoute.description}
            </p>

            {/* Tactical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-xs">
              <div className="bg-retro-dark-blue p-3 rounded-lg border border-retro-gray/50">
                <span className="text-retro-light-gray text-[10px] uppercase block font-bold">Best Against</span>
                <strong className="text-retro-yellow text-xs mt-0.5 block">{selectedRoute.bestAgainst}</strong>
              </div>

              <div className="bg-retro-dark-blue p-3 rounded-lg border border-retro-gray/50">
                <span className="text-retro-light-gray text-[10px] uppercase block font-bold">Recommended Throw</span>
                <strong className="text-retro-green text-xs mt-0.5 block">{selectedRoute.passType}</strong>
              </div>

              <div className="bg-retro-dark-blue p-3 rounded-lg border border-retro-gray/50">
                <span className="text-retro-light-gray text-[10px] uppercase block font-bold">Win Rate</span>
                <strong className="text-retro-orange text-xs mt-0.5 block">{selectedRoute.successRate} Completion</strong>
              </div>
            </div>
          </div>

          {/* Coaching Execution Tip Box */}
          <div className="bg-retro-blue/60 border-l-4 border-retro-green p-3.5 rounded-r-lg text-xs text-retro-white">
            <strong className="text-retro-green uppercase block mb-1 font-bold">
              🎯 Pro Quarterback Timing Cue:
            </strong>
            <p className="text-retro-light-gray">
              {selectedRoute.coachingTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybookExplorer;
