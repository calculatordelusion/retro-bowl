import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Sparkles } from 'lucide-react';

interface GameCardProps {
  title: string;
  category: string;
  rating: string;
  players: string;
  badge?: string;
  to: string;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  category,
  rating,
  players,
  badge,
  to,
  description
}) => {
  return (
    <Link 
      to={to}
      className="group relative bg-gradient-to-b from-retro-blue to-retro-dark-blue border-2 border-retro-gray/80 hover:border-retro-yellow rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between overflow-hidden"
    >
      {badge && (
        <div className="absolute top-2 right-2 bg-retro-red text-white text-[9px] font-bold px-2 py-0.5 rounded border border-retro-yellow/40 flex items-center gap-1">
          <Sparkles size={9} />
          {badge}
        </div>
      )}

      <div>
        <div className="text-[10px] uppercase font-bold text-retro-light-gray tracking-wider mb-1">
          {category}
        </div>
        <h3 className="font-pixel text-xs sm:text-sm text-retro-white group-hover:text-retro-yellow transition-colors mb-2">
          {title}
        </h3>
        <p className="text-retro-light-gray text-xs line-clamp-2 mb-4">
          {description}
        </p>
      </div>

      <div className="border-t border-retro-gray/40 pt-3 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1 text-retro-yellow font-bold">
          <Star size={13} className="fill-retro-yellow" />
          <span>{rating}</span>
          <span className="text-retro-light-gray font-normal">({players})</span>
        </div>

        <span className="inline-flex items-center gap-1 bg-retro-yellow text-black font-bold px-2.5 py-1 rounded text-[10px] group-hover:bg-retro-green group-hover:text-white transition-colors">
          <Play size={10} className="fill-current" />
          PLAY NOW
        </span>
      </div>
    </Link>
  );
};

export default GameCard;
