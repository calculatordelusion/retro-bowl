import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/seo/SEO';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Trophy, Star, Shield, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamRow {
  rank: number;
  team: string;
  conference: string;
  offense: string;
  defense: string;
  tier: 'S Tier' | 'A Tier' | 'B Tier' | 'Rebuild';
  capRoom: string;
  verdict: string;
}

const TEAMS_DATA: TeamRow[] = [
  { rank: 1, team: 'Kansas City (KC)', conference: 'AFC West', offense: '5.0 ★', defense: '4.5 ★', tier: 'S Tier', capRoom: '$18M', verdict: 'The easiest Year 1 championship squad. Elite QB arm power and speed.' },
  { rank: 2, team: 'San Francisco (SF)', conference: 'NFC West', offense: '4.5 ★', defense: '5.0 ★', tier: 'S Tier', capRoom: '$15M', verdict: 'Stifling defense that creates multiple pick-sixes every game.' },
  { rank: 3, team: 'Baltimore (BAL)', conference: 'AFC North', offense: '4.5 ★', defense: '4.5 ★', tier: 'S Tier', capRoom: '$22M', verdict: 'Supreme rushing attack with a mobile QB and dominant linebackers.' },
  { rank: 4, team: 'Detroit (DET)', conference: 'NFC North', offense: '5.0 ★', defense: '4.0 ★', tier: 'S Tier', capRoom: '$24M', verdict: 'Explosive deep passing game and physical offensive line protection.' },
  { rank: 5, team: 'Philadelphia (PHI)', conference: 'NFC East', offense: '4.5 ★', defense: '4.0 ★', tier: 'A Tier', capRoom: '$20M', verdict: 'Unstoppable goal-line sneak efficiency and star receiver tandem.' },
  { rank: 6, team: 'Buffalo (BUF)', conference: 'AFC East', offense: '4.5 ★', defense: '4.0 ★', tier: 'A Tier', capRoom: '$19M', verdict: 'Heavy artillery passing offense built to outscore opponents.' },
  { rank: 7, team: 'Houston (HOU)', conference: 'AFC South', offense: '4.0 ★', defense: '4.0 ★', tier: 'A Tier', capRoom: '$38M', verdict: 'Tremendous young core with high cap space to sign free agent stars.' },
  { rank: 8, team: 'Green Bay (GB)', conference: 'NFC North', offense: '4.0 ★', defense: '4.0 ★', tier: 'A Tier', capRoom: '$28M', verdict: 'Young, speedy receiving corps that burns single-safety coverage.' },
  { rank: 9, team: 'Miami (MIA)', conference: 'AFC East', offense: '4.5 ★', defense: '3.0 ★', tier: 'B Tier', capRoom: '$14M', verdict: 'Blistering speed at WR1 and WR2; defense needs draft reinforcement.' },
  { rank: 10, team: 'Cincinnati (CIN)', conference: 'AFC North', offense: '4.5 ★', defense: '3.0 ★', tier: 'B Tier', capRoom: '$16M', verdict: 'Elite aerial assault; struggles against physical defensive fronts.' },
  { rank: 11, team: 'LA Rams (LAR)', conference: 'NFC West', offense: '4.0 ★', defense: '3.5 ★', tier: 'B Tier', capRoom: '$25M', verdict: 'Solid veteran playmakers with good draft capital.' },
  { rank: 12, team: 'Carolina (CAR)', conference: 'NFC South', offense: '2.0 ★', defense: '1.5 ★', tier: 'Rebuild', capRoom: '$65M', verdict: 'The ultimate rebuild challenge. Huge cap space and early draft picks.' },
  { rank: 13, team: 'New England (NE)', conference: 'AFC East', offense: '2.0 ★', defense: '2.5 ★', tier: 'Rebuild', capRoom: '$58M', verdict: 'Disciplined defense but desperate for wide receiver playmakers.' },
  { rank: 14, team: 'Washington (WAS)', conference: 'NFC East', offense: '2.5 ★', defense: '2.0 ★', tier: 'Rebuild', capRoom: '$62M', verdict: 'High ceiling rookie QB foundation ready for a rapid 2-year turnaround.' },
];

const BestTeams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Retro Bowl Best Teams & Official Franchise Tier List (2026)",
    "description": "Complete ranking of the best teams to start with in Retro Bowl Unblocked. Detailed breakdown of star ratings, salary cap space, and rebuilding dynasties.",
    "author": {
      "@type": "Organization",
      "name": "Retro Bowl Unblocked Team"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best team to pick in Retro Bowl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best team to pick for an immediate championship is Kansas City or San Francisco. Both teams feature 4.5 to 5-star offensive and defensive ratings right out of the box, allowing you to dominate even on Hard and Extreme difficulties."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best team for a rebuilding challenge in Retro Bowl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Carolina, New England, and Washington offer the most satisfying rebuilding challenges. They start with 1.5 to 2.5 star ratings but offer over $55M to $65M in available cap space and high Round 1 draft picks."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Bowl Best Teams to Pick (2026) 🏆 Franchise Tier List"
        description="Discover the best teams to pick in Retro Bowl Unblocked! Complete 2026 team ratings, offense & defense star ranks, cap space & rebuild challenges."
        keywords="retro bowl best teams, best team to pick in retro bowl, retro bowl team ratings, retro bowl tier list, retro bowl best franchise, worst team in retro bowl"
        canonicalUrl="https://retrobowlunblocked.biz/best-teams"
        jsonLd={{ ...jsonLd, ...faqJsonLd }}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-8">
        {/* Page Hero */}
        <section className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-retro-yellow/20 text-retro-yellow px-3 py-1 rounded-full text-xs font-bold border border-retro-yellow/40 mb-3">
            <Trophy size={14} />
            2026 OFFICIAL FRANCHISE RANKINGS • ALL 32 TEAMS
          </div>
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
            🏆 RETRO BOWL BEST TEAMS TO PICK (2026 TIER LIST)
          </h1>
          <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed">
            Wondering which NFL franchise to lead? From immediate Year 1 Super Bowl juggernauts to thrilling 5-year turnaround challenges, here is the definitive Retro Bowl team tier list.
          </p>
        </section>

        {/* AEO Featured Snippet Box */}
        <DirectAnswerBox 
          question="What is the best team to pick in Retro Bowl?"
          answer="The best overall team to pick in Retro Bowl is Kansas City or San Francisco. Kansas City provides the league's top-rated passing attack with a 5-star quarterback and elite receiving speed, while San Francisco boasts a 5-star defense that forces turnovers on Extreme difficulty. For rebuilding players, Carolina and Washington offer over $60M in cap room and top draft picks."
          keyTakeaway="Pick Kansas City or San Francisco for instant rings; pick Carolina or Washington for deep dynasty rebuilding."
        />

        {/* GEO Team Rankings Table */}
        <section className="my-12 bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
          <h2 className="text-retro-yellow font-pixel text-lg sm:text-xl mb-4 text-center">
            📊 OFFICIAL RETRO BOWL TEAM RATINGS & TIER DIRECTORY
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[11px]">
                  <th className="p-3">Rank</th>
                  <th className="p-3">Team & Division</th>
                  <th className="p-3">Offense</th>
                  <th className="p-3">Defense</th>
                  <th className="p-3">Tier</th>
                  <th className="p-3">Starting Cap</th>
                  <th className="p-3">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                {TEAMS_DATA.map(t => (
                  <tr key={t.team} className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-retro-yellow font-pixel text-xs">{t.rank}</td>
                    <td className="p-3 font-bold text-white">
                      <div>{t.team}</div>
                      <div className="text-[10px] text-retro-light-gray font-normal">{t.conference}</div>
                    </td>
                    <td className="p-3 text-retro-green font-bold">{t.offense}</td>
                    <td className="p-3 text-retro-blue font-bold">{t.defense}</td>
                    <td className="p-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        t.tier === 'S Tier' 
                          ? 'bg-retro-green text-black' 
                          : t.tier === 'A Tier' 
                            ? 'bg-retro-yellow text-black' 
                            : t.tier === 'B Tier' 
                              ? 'bg-retro-orange text-white' 
                              : 'bg-retro-red text-white'
                      }`}>
                        {t.tier}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-white">{t.capRoom}</td>
                    <td className="p-3 text-retro-light-gray text-[11px]">{t.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Rebuilding vs Contending Advice */}
        <section className="my-12 max-w-4xl mx-auto space-y-6 text-retro-light-gray">
          <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">
            🏈 How to Choose Your Starting Franchise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="text-retro-yellow font-bold text-sm mb-2">Option A: The Instant Ring Strategy</h3>
              <p className="leading-relaxed">
                If you are playing on Extreme difficulty and want immediate playoff success, pick an <strong>S-Tier squad</strong> like Kansas City or San Francisco. You start with elite stars, meaning you won't need to spend your early Coaching Credits on free agent bailouts.
              </p>
            </div>
            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="text-retro-yellow font-bold text-sm mb-2">Option B: The Rebuilder Dynasty Strategy</h3>
              <p className="leading-relaxed">
                True Retro Bowl veterans love taking a 1.5-star team like Carolina from the bottom to 10 consecutive championship rings. You gain top Round 1 picks and have the financial flexibility to build the exact team archetype you want.
              </p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link to="/">
              <span className="bg-gradient-to-r from-retro-green to-emerald-600 hover:from-emerald-600 hover:to-retro-green text-black font-pixel text-xs px-6 py-3 rounded-lg border border-retro-yellow shadow-xl font-bold inline-block transition-colors">
                🏈 SELECT YOUR TEAM & PLAY NOW &rarr;
              </span>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BestTeams;
