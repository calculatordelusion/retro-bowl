import React from 'react';
import GamePlayer, { GameServer } from './GamePlayer';

const RETRO_BOWL_SERVERS: GameServer[] = [
  {
    name: 'Server 1 (Official Fast CDN)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    description: 'Direct high-speed HTML5 cloud node with automatic local saving',
    status: 'fast'
  },
  {
    name: 'Server 2 (High-Speed Mirror)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?cdn=mirror',
    description: 'School firewall bypass mirror optimized for low latency',
    status: 'stable'
  },
  {
    name: 'Server 3 (Cloud Fallback)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?cdn=backup',
    description: 'Alternative node if primary school network throttles connection',
    status: 'backup'
  }
];

const GameEmbed: React.FC = () => {
  return (
    <GamePlayer 
      title="Retro Bowl Unblocked - Official 2026 Season"
      primaryUrl="https://game316009.konggames.com/gamez/0031/6009/live/index.html"
      servers={RETRO_BOWL_SERVERS}
      badge="Official 2026 Build"
    />
  );
};

export default GameEmbed;
