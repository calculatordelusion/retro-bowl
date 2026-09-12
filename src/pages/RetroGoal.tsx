import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/seo/SEO';
import GamePlayer, { GameServer } from '@/components/game/GamePlayer';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Trophy, Star, Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RETRO_GOAL_SERVERS: GameServer[] = [
  {
    name: 'Server 1 (Retro Goal Official Node)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?game=retro-goal',
    description: 'Direct high-speed HTML5 arcade node with career soccer management',
    status: 'fast'
  },
  {
    name: 'Server 2 (High-Speed Mirror)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?game=retro-goal&cdn=mirror',
    description: 'School firewall bypass mirror optimized for Chromebooks',
    status: 'stable'
  },
  {
    name: 'Server 3 (Fallback CDN)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    description: 'High-availability backup cloud node',
    status: 'backup'
  }
];

const RetroGoal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Retro Goal Unblocked",
    "alternateName": "Retro Goal Online",
    "description": "Play Retro Goal Unblocked free online. The official 16-bit arcade soccer/football companion game to Retro Bowl by New Star Games. Manage top football clubs, score world-class goals, and win international championships.",
    "genre": ["Sports", "Soccer", "Football", "Simulation", "Retro", "Arcade"],
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
      "ratingCount": "2910",
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
        "name": "What is Retro Goal Unblocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retro Goal Unblocked is an arcade soccer simulation game developed by New Star Games (the creators of Retro Bowl). It combines 16-bit nostalgic graphics with tactical football club management, transfer negotiations, and intuitive swipe/drag controls for passing, curling, and scoring."
        }
      },
      {
        "@type": "Question",
        "name": "How do you score headers and volleys in Retro Goal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cross the ball into the penalty box towards a forward. When the ball arrives at chest/head height, drag and release towards the top corners of the net to execute bullet headers, diving headers, and bicycle kick volleys."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Goal Unblocked [2026] ⚽ Play Free Arcade Soccer"
        description="Play Retro Goal Unblocked free online! Manage European football clubs, score world-class headers & win champions league trophies. 100% unblocked at school."
        keywords="retro goal unblocked, play retro goal free, retro goal online, retro goal game, retro goal chromebook, retro goal school, retro goal new star games"
        canonicalUrl="https://retrobowlunblocked.live/retro-goal"
        jsonLd={{ ...jsonLd, ...faqJsonLd }}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-retro-green/20 text-retro-green px-3 py-1 rounded-full text-xs font-bold border border-retro-green/40 mb-3">
            <Trophy size={14} />
            SOCCER ARCADE SISTER TITLE • BY NEW STAR GAMES
          </div>
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
            ⚽ RETRO GOAL UNBLOCKED
          </h1>
          <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed">
            Love Retro Bowl? Step onto the soccer pitch in <strong>Retro Goal Unblocked</strong>! Manage world-famous European clubs, scout wonderkids, negotiate star transfers, and score breathtaking 30-yard curlers.
          </p>
        </section>

        {/* Embedded Game Player */}
        <div className="mb-12">
          <GamePlayer 
            title="Retro Goal Unblocked - 2026 Edition"
            primaryUrl="https://game316009.konggames.com/gamez/0031/6009/live/index.html?game=retro-goal"
            servers={RETRO_GOAL_SERVERS}
            badge="Retro Goal"
          />
        </div>

        {/* AEO Featured Snippet Box */}
        <DirectAnswerBox 
          question="What is Retro Goal Unblocked?"
          answer="Retro Goal Unblocked is a 16-bit arcade soccer game developed by New Star Games. Taking the beloved franchise management formula of Retro Bowl into association football (soccer), players manage club finances, upgrade stadiums and training grounds, sign star strikers, and manually control scoring opportunities with intuitive drag-and-swipe touch/mouse controls."
          keyTakeaway="Retro Goal lets you compete across English, Spanish, German, and Italian leagues."
        />

        {/* GEO Comparative Analysis Table */}
        <section className="my-12 bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
          <h2 className="text-retro-yellow font-pixel text-lg sm:text-xl mb-4 text-center">
            📊 RETRO BOWL VS RETRO GOAL: HOW THEY COMPARE
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[11px]">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Retro Bowl</th>
                  <th className="p-3">Retro Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Sport</td>
                  <td className="p-3">American Football (Gridiron)</td>
                  <td className="p-3 text-retro-green font-bold">Association Football (Soccer)</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Graphic Art Style</td>
                  <td className="p-3">8-Bit NES / Tecmo Bowl Style</td>
                  <td className="p-3 text-retro-yellow font-bold">16-Bit SNES / Sega Genesis Style</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Gameplay Perspective</td>
                  <td className="p-3">Side-scrolling horizontal field</td>
                  <td className="p-3 text-retro-orange font-bold">Diagonal / Top-down attacking phases</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Franchise Control</td>
                  <td className="p-3">Drafting, Salary Cap, Trades</td>
                  <td className="p-3 text-retro-green font-bold">Transfer Window, Loan Deals, Facility Levelling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Tips for Retro Goal */}
        <section className="my-12 max-w-4xl mx-auto space-y-6 text-retro-light-gray">
          <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">
            🏆 Pro Tips for Championship Domination in Retro Goal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="text-retro-white font-bold text-sm mb-2 text-retro-yellow">
                Master the Corner Kick Curler
              </h3>
              <p className="leading-relaxed">
                Aim your corner kick curve towards the penalty spot just behind the penalty box crowd. Your arriving central midfielder can strike direct one-touch volleys into the side netting.
              </p>
            </div>
            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="text-retro-white font-bold text-sm mb-2 text-retro-yellow">
                Invest in Youth Academy First
              </h3>
              <p className="leading-relaxed">
                Senior transfers cost huge budget sums. Upgrading your Youth Academy produces 4-star homegrown wonderkids for virtually zero cost, keeping your wage bill well within club limits.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RetroGoal;
