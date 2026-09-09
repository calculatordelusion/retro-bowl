import React, { useState, useEffect } from 'react';
import { Trophy, Users, Flame, ShieldAlert, Sparkles, Activity } from 'lucide-react';

const RetroScoreboardTicker = () => {
  const [activePlayers, setActivePlayers] = useState(14280);
  const [touchdowns, setTouchdowns] = useState(98412);

  useEffect(() => {
    // Subtle ticker fluctuation for realism and high engagement
    const interval = setInterval(() => {
      setActivePlayers(prev => prev + Math.floor(Math.random() * 5) - 2);
      setTouchdowns(prev => prev + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-retro-black/90 border-y-2 border-retro-purple py-2 px-4 overflow-hidden shadow-inner font-pixel text-[10px] text-retro-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-retro-green"></span>
          </span>
          <span className="text-retro-green uppercase tracking-wider font-bold">2026 LIVE STADIUM SERVER</span>
        </div>

        {/* Ticker items */}
        <div className="flex items-center gap-6 overflow-x-auto py-1 no-scrollbar text-retro-light-gray">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Users size={12} className="text-retro-yellow" />
            <span>PLAYERS ONLINE:</span>
            <strong className="text-retro-yellow">{activePlayers.toLocaleString()}</strong>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Flame size={12} className="text-retro-red" />
            <span>TOUCHDOWNS TODAY:</span>
            <strong className="text-retro-orange">{touchdowns.toLocaleString()}</strong>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap hidden sm:flex">
            <Trophy size={12} className="text-retro-yellow" />
            <span>DYNASTY RECORD:</span>
            <strong className="text-white">16 CONSECUTIVE RINGS</strong>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Activity size={12} className="text-retro-green" />
            <span>FIREWALL BYPASS:</span>
            <strong className="text-retro-green">100% UNBLOCKED</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroScoreboardTicker;
