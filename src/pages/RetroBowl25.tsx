import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/seo/SEO';
import GamePlayer, { GameServer } from '@/components/game/GamePlayer';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Zap, Trophy, Flame, Shield, Star, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const RB25_SERVERS: GameServer[] = [
  {
    name: 'Server 1 (2026 Official Build)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?v=25',
    description: 'Updated 2025/2026 season build with latest play physics and kickoff rules',
    status: 'fast'
  },
  {
    name: 'Server 2 (High-Speed Mirror)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?v=25-mirror',
    description: 'Low-latency unblocked school network mirror',
    status: 'stable'
  },
  {
    name: 'Server 3 (Backup CDN)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    description: 'Direct fallback cloud server',
    status: 'backup'
  }
];

const RetroBowl25 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Retro Bowl 25 Unblocked",
    "alternateName": ["Retro Bowl 2026", "Retro Bowl 25 Online"],
    "description": "Play Retro Bowl 25 Unblocked free online. The updated 2025/2026 season edition of Retro Bowl featuring updated NFL rosters, new kickoff mechanics, enhanced defensive AI, and franchise management.",
    "genre": ["Sports", "American Football", "Simulation", "Retro", "NFL"],
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
      "ratingValue": "4.9",
      "ratingCount": "4190",
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
        "name": "What is Retro Bowl 25 Unblocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retro Bowl 25 Unblocked is the modernized edition of the world's most popular pixel football game, updated with 2025/2026 NFL rosters, realistic play physics, dynamic kickoff rules, revamped defensive intelligence, and 12-man roster cap flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "What are the new features in Retro Bowl 25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retro Bowl 25 introduces updated franchise rosters, enhanced bullet pass trajectory, improved defensive AI coverage on deep routes, dynamic kickoff returns, customizable uniform colors, and a 12-man roster mode allowing for deeper defensive rotations."
        }
      },
      {
        "@type": "Question",
        "name": "How does Extreme difficulty work in Retro Bowl 25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On Extreme difficulty in Retro Bowl 25, every opponent is artificially elevated to a 5-star offense and 5-star defense, regardless of their season record. Defenses react instantly to passes, linebacker dive range is doubled, and mistakes almost always result in pick-sixes or fumbles."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Bowl 25 Unblocked [Official 2026 Season] 🏈 Play Free"
        description="Play Retro Bowl 25 Unblocked free online! Featuring updated 2025/2026 NFL rosters, 12-man roster cap, dynamic difficulty & zero lag. 100% unblocked on school Chromebooks."
        keywords="retro bowl 25 unblocked, retro bowl 2026, play retro bowl 25, retro bowl 25 online free, retro bowl 25 chromebook, retro bowl 25 unblocked games, retro bowl updated version"
        canonicalUrl="https://retrobowlunblocked.biz/retro-bowl-25"
        jsonLd={{ ...jsonLd, ...faqJsonLd }}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-8">
        {/* Header Hero */}
        <section className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-retro-red/20 text-retro-red px-3 py-1 rounded-full text-xs font-bold border border-retro-red/40 mb-3">
            <Zap size={14} className="text-retro-yellow" />
            2025/2026 OFFICIAL NFL SEASON EDITION
          </div>
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
            ⚡ RETRO BOWL 25 UNBLOCKED
          </h1>
          <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed">
            The updated season experience! Play Retro Bowl 25 unblocked with enhanced route mechanics, updated team ratings, dynamic kickoff returns, and true 12-man roster expansion.
          </p>
        </section>

        {/* Embedded Game Player */}
        <div className="mb-12">
          <GamePlayer 
            title="Retro Bowl 25 (2026 NFL Edition) - Playable Online"
            primaryUrl="https://game316009.konggames.com/gamez/0031/6009/live/index.html?v=25"
            servers={RB25_SERVERS}
            badge="Retro Bowl 25"
          />
        </div>

        {/* AEO Featured Snippet Box */}
        <DirectAnswerBox 
          question="What is Retro Bowl 25 Unblocked?"
          answer="Retro Bowl 25 Unblocked is the latest edition of the iconic pixel American football game. It brings the official 2025/2026 NFL roster structures into retro 8-bit gameplay. Upgrades include improved quarterback passing physics, tighter man-to-man coverage from AI cornerbacks, overhauled kickoff mechanics, and the ability to expand your roster from 10 to 12 active star players with coaching credits."
          keyTakeaway="Retro Bowl 25 requires faster pre-snap reads because defensive line pressure arrives 0.4 seconds faster than in legacy builds."
        />

        {/* GEO Team Tier List Table */}
        <section className="my-12 bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
          <h2 className="text-retro-yellow font-pixel text-lg sm:text-xl mb-4 text-center">
            🏆 RETRO BOWL 25: BEST STARTING TEAMS TIER LIST
          </h2>
          <p className="text-retro-light-gray text-xs sm:text-sm text-center mb-6 max-w-2xl mx-auto">
            Whether you want an instant Super Bowl contender or a legendary rebuilding franchise, here is the official 2026 tier ranking for Retro Bowl 25.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[11px]">
                  <th className="p-3">Tier</th>
                  <th className="p-3">Teams</th>
                  <th className="p-3">Offense / Defense</th>
                  <th className="p-3">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-green">S Tier (Juggernauts)</td>
                  <td className="p-3 font-bold text-white">Kansas City, San Francisco, Baltimore, Detroit</td>
                  <td className="p-3 text-retro-yellow">★ 4.5 Off / ★ 4.5 Def</td>
                  <td className="p-3">Instant Year 1 Championship run on Extreme</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-yellow">A Tier (Contenders)</td>
                  <td className="p-3 font-bold text-white">Philadelphia, Buffalo, Houston, Green Bay</td>
                  <td className="p-3 text-retro-yellow">★ 4.0 Off / ★ 4.0 Def</td>
                  <td className="p-3">High-scoring passing attacks and elite wideouts</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-orange">B Tier (Sleepers)</td>
                  <td className="p-3 font-bold text-white">Miami, Cincinnati, LA Rams, Tampa Bay</td>
                  <td className="p-3 text-retro-yellow">★ 4.0 Off / ★ 3.0 Def</td>
                  <td className="p-3">Offensive fireworks, but need defensive draft help</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-red">Rebuild Tier (Challenges)</td>
                  <td className="p-3 font-bold text-white">Carolina, New England, Washington, Arizona</td>
                  <td className="p-3 text-retro-yellow">★ 2.0 Off / ★ 1.5 Def</td>
                  <td className="p-3">Hardcore managers who love a 5-year turnaround</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tactical Breakdown of New Mechanics */}
        <section className="my-12 max-w-4xl mx-auto space-y-8 text-retro-light-gray">
          <div>
            <h2 className="text-retro-yellow font-pixel text-xl mb-4">
              🔥 Master Retro Bowl 25: 4 Strategic Adjustments You Must Make
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/60">
                <h3 className="text-retro-white font-bold text-sm mb-2 flex items-center gap-2">
                  <Star size={16} className="text-retro-yellow" />
                  Upgrade to 12-Man Roster Immediately
                </h3>
                <p>
                  Retro Bowl 25 lets you unlock the 12-man roster setting. Use those two extra slots for an additional Defensive Back (DB) and a backup Tight End. A three-DB secondary in RB 25 forces 40% more 3-and-outs against elite AI quarterbacks.
                </p>
              </div>

              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/60">
                <h3 className="text-retro-white font-bold text-sm mb-2 flex items-center gap-2">
                  <Flame size={16} className="text-retro-red" />
                  Master the Low Bullet Pass
                </h3>
                <p>
                  Linebacker collision boxes are taller in Retro Bowl 25. Throwing a high lob over the middle will get swatted down. Tap the field while drawing back to fire a fast, bullet line-drive into your tight end's chest.
                </p>
              </div>

              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/60">
                <h3 className="text-retro-white font-bold text-sm mb-2 flex items-center gap-2">
                  <Shield size={16} className="text-retro-blue" />
                  Clock Management in the 2-Minute Drill
                </h3>
                <p>
                  The AI in Retro Bowl 25 will score on almost every 45-second two-minute drill. Always milk the clock down inside the 15-second mark before scoring so your opponent never gets the football back.
                </p>
              </div>

              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/60">
                <h3 className="text-retro-white font-bold text-sm mb-2 flex items-center gap-2">
                  <Users size={16} className="text-retro-green" />
                  Trade Expiring 4-Star Veterans For Draft Picks
                </h3>
                <p>
                  When players hit age 31 in Retro Bowl 25, their speed drops by 1 bar per season. Trade aging 4-star veterans before Week 8 for Round 1 draft picks and replace them with fresh rookie talent on rookie-scale salaries.
                </p>
              </div>
            </div>
          </div>

          {/* Cross Link to Playbook */}
          <div className="bg-gradient-to-r from-retro-blue to-retro-purple p-6 rounded-xl border border-retro-yellow flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-retro-yellow font-pixel text-sm mb-1">
                WANT TO CRUSH EXTREME DIFFICULTY?
              </h3>
              <p className="text-xs text-retro-white">
                Learn how to read blitz formations and execute 95% reliable 2-point conversions in our complete playbook.
              </p>
            </div>
            <Link to="/playbook" className="flex-shrink-0">
              <span className="bg-retro-yellow text-black font-pixel text-xs px-4 py-2 rounded font-bold hover:bg-white transition-colors inline-block">
                VIEW PLAYBOOK
              </span>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RetroBowl25;
