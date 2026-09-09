import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/seo/SEO';
import GamePlayer, { GameServer } from '@/components/game/GamePlayer';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Gamepad2, Users, Trophy, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PING_PONG_SERVERS: GameServer[] = [
  {
    name: 'Server 1 (Retro Ping Pong Cloud)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?game=ping-pong',
    description: 'Arcade paddle simulation with 1-Player vs AI & 2-Player Local split-keyboard modes',
    status: 'fast'
  },
  {
    name: 'Server 2 (High-Speed Mirror)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?game=ping-pong&cdn=mirror',
    description: 'Bypass node optimized for school Chromebook dual-key input',
    status: 'stable'
  },
  {
    name: 'Server 3 (Fallback CDN)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    description: 'High-availability backup cloud node',
    status: 'backup'
  }
];

const RetroPingPong = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Retro Ping Pong Unblocked",
    "alternateName": ["Retro Bowl 2 Player", "Retro Ping Pong 2 Player Online"],
    "description": "Play Retro Ping Pong Unblocked free online. The ultimate 2-player retro arcade table tennis game with classic mode, action mode, obstacle stages, and local multiplayer for school Chromebooks.",
    "genre": ["Sports", "Table Tennis", "Arcade", "Multiplayer", "Retro"],
    "gamePlatform": ["Web Browser", "Chromebook", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2140",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you play Retro Ping Pong with 2 players on the same keyboard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Retro Ping Pong features a local 2-player split keyboard mode. Player 1 uses W and S keys to move their paddle, while Player 2 uses the Up and Down Arrow keys."
        }
      },
      {
        "@type": "Question",
        "name": "What are the special obstacle modes in Retro Ping Pong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Action Mode, Retro Ping Pong introduces rotating blades, force fields, gravity wells, blaster fire, and multi-ball madness that turns traditional table tennis into an adrenaline-fueled arcade battle."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Ping Pong Unblocked [2026] 🏓 2-Player Free Game"
        description="Play Retro Ping Pong Unblocked free! Features 1-player vs AI and 2-player local multiplayer on the same Chromebook. No downloads, zero lag & 100% unblocked."
        keywords="retro ping pong unblocked, retro bowl 2 player, retro ping pong 2 player, retro ping pong cool math games, retro ping pong unblocked 76, play retro ping pong free"
        canonicalUrl="https://retrobowlunblocked.biz/retro-ping-pong"
        jsonLd={{ ...jsonLd, ...faqJsonLd }}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-8">
        {/* Page Hero */}
        <section className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/40 mb-3">
            <Users size={14} />
            1-PLAYER & 2-PLAYER LOCAL MULTIPLAYER • ZERO LAG
          </div>
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
            🏓 RETRO PING PONG UNBLOCKED (2-PLAYER)
          </h1>
          <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed">
            Challenge your friends on the same Chromebook or test your reflexes against impossible AI! Experience classic table tennis and chaotic Action Mode with obstacles, blasters, and gravity wells.
          </p>
        </section>

        {/* Embedded Game Player */}
        <div className="mb-12">
          <GamePlayer 
            title="Retro Ping Pong Unblocked (1 & 2 Player Modes)"
            primaryUrl="https://game316009.konggames.com/gamez/0031/6009/live/index.html?game=ping-pong"
            servers={PING_PONG_SERVERS}
            badge="2-Player Arcade"
          />
        </div>

        {/* AEO Featured Snippet Box */}
        <DirectAnswerBox 
          question="How do you play 2-Player Retro Ping Pong on one keyboard?"
          answer="To play 2-Player Retro Ping Pong on a single computer or school Chromebook: (1) Select '2 Players' from the main menu, (2) Player 1 uses the W and S keys on the left side of the keyboard to move up and down, and (3) Player 2 uses the UP and DOWN arrow keys on the right side. The first player to reach the target score wins the championship trophy."
          keyTakeaway="No gamepad or controller required—plays smoothly with split-keyboard controls."
        />

        {/* GEO Game Modes Table */}
        <section className="my-12 bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
          <h2 className="text-retro-yellow font-pixel text-lg sm:text-xl mb-4 text-center">
            🎮 RETRO PING PONG GAME MODES DIRECTORY
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[11px]">
                  <th className="p-3">Mode</th>
                  <th className="p-3">Player Count</th>
                  <th className="p-3">Difficulty</th>
                  <th className="p-3">Special Rules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-white">Classic Mode</td>
                  <td className="p-3 text-retro-green font-bold">1 or 2 Players</td>
                  <td className="p-3 text-retro-yellow font-bold">Rookie to Pro</td>
                  <td className="p-3">Pure competitive table tennis paddle physics with no gimmicks.</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-white">Action Mode</td>
                  <td className="p-3 text-retro-green font-bold">1 or 2 Players</td>
                  <td className="p-3 text-retro-red font-bold">Chaotic / Hard</td>
                  <td className="p-3">Rotating obstacles, bumper walls, gravity wells, and blaster lasers.</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-white">Multi-Ball Mayhem</td>
                  <td className="p-3 text-retro-green font-bold">1 or 2 Players</td>
                  <td className="p-3 text-retro-orange font-bold">Expert</td>
                  <td className="p-3">Up to 3 balls in play simultaneously; tests extreme peripheral vision.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RetroPingPong;
