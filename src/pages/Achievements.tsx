import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Trophy, Star, Medal, Crown, Award, Target, Flame, CheckCircle2, Sparkles, DollarSign } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Link } from 'react-router-dom';

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Complete Retro Bowl Achievements & Coaching Credits Guide (2026)",
    "description": "Full directory of all 26 Retro Bowl achievements with coaching credit rewards, difficulty ratings, and speedrunning strategies.",
    "url": "https://retrobowlunblocked.biz/achievements"
  };

  return (
    <Layout>
      <SEO
        title="Retro Bowl Achievements & Trophy Guide (2026) 🏆 CC Rewards"
        description="Unlock every Retro Bowl achievement! Complete directory of team, player & career milestones with exact Coaching Credit rewards and speedrun tips."
        keywords="retro bowl achievements, retro bowl trophies, retro bowl milestones, retro bowl coaching credits rewards, how to get retro bowl achievements"
        canonicalUrl="https://retrobowlunblocked.biz/achievements"
        ogType="article"
        jsonLd={jsonLd}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-retro-yellow/20 text-retro-yellow px-3 py-1 rounded-full text-xs font-bold border border-retro-yellow/40 mb-3">
              <Trophy size={14} />
              ALL 26 TROPHIES • OVER 1,800 COACHING CREDITS
            </div>
            <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
              🏆 RETRO BOWL ACHIEVEMENTS DIRECTORY
            </h1>
            <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Every championship milestone, player record, and career accomplishment decoded. Learn which achievements award the highest Coaching Credits to accelerate your dynasty build.
            </p>
          </div>

          {/* AEO Featured Snippet Box */}
          <DirectAnswerBox 
            question="How many achievements are there in Retro Bowl and what are the rewards?"
            answer="There are 26 official achievements in Retro Bowl, categorized into Team (8), Player (12), and Career (6) milestones. Completing all achievements rewards over 1,800 Coaching Credits (CC). The most valuable individual achievements are 'Coaching Legend' (200 CC for winning 5+ rings) and 'Dynasty' (150 CC for winning 3 consecutive championships)."
            keyTakeaway="Focus on the 8 Team Achievements in your first 3 seasons to quickly earn 600+ free Coaching Credits."
          />

          {/* Category Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray text-center">
              <Crown className="text-retro-yellow mx-auto mb-2" size={28} />
              <h3 className="font-pixel text-xs text-white mb-1">Team Milestones</h3>
              <p className="text-retro-light-gray text-xs mb-2">Championships, comebacks & undefeated runs</p>
              <span className="text-retro-green font-pixel text-xs font-bold">8 Trophies (575 CC)</span>
            </div>

            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray text-center">
              <Star className="text-retro-blue mx-auto mb-2" size={28} />
              <h3 className="font-pixel text-xs text-white mb-1">Player Records</h3>
              <p className="text-retro-light-gray text-xs mb-2">5,000-yd passing, MVPs & Hall of Fame</p>
              <span className="text-retro-green font-pixel text-xs font-bold">12 Trophies (590 CC)</span>
            </div>

            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray text-center">
              <Medal className="text-retro-red mx-auto mb-2" size={28} />
              <h3 className="font-pixel text-xs text-white mb-1">Career Legacy</h3>
              <p className="text-retro-light-gray text-xs mb-2">10-season coaching, 100 wins & max facilities</p>
              <span className="text-retro-green font-pixel text-xs font-bold">6 Trophies (700 CC)</span>
            </div>
          </div>

          {/* Trophy Lists */}
          <div className="space-y-8 my-10">
            {/* Team Trophies */}
            <div>
              <h2 className="text-retro-yellow font-pixel text-base sm:text-lg mb-4 flex items-center gap-2">
                <Crown size={18} className="text-retro-yellow" />
                Team Achievements (575 Total CC)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <AchievementCard title="Champion" req="Win your first Retro Bowl championship" cc="+50 CC" tier="Gold" />
                <AchievementCard title="Dynasty" req="Win 3 Retro Bowl championships in a row" cc="+150 CC" tier="Platinum" />
                <AchievementCard title="Perfect Season" req="Finish an entire season undefeated (17-0 + playoffs)" cc="+100 CC" tier="Gold" />
                <AchievementCard title="Comeback Kings" req="Win a game after trailing by 14+ points" cc="+25 CC" tier="Silver" />
                <AchievementCard title="Defensive Dominance" req="Hold opponents under 10 points for 5 straight games" cc="+75 CC" tier="Gold" />
                <AchievementCard title="Offensive Powerhouse" req="Score 40+ points in 3 consecutive games" cc="+75 CC" tier="Gold" />
                <AchievementCard title="Rebuilder" req="Take a 1-star rated franchise to the playoffs" cc="+50 CC" tier="Silver" />
                <AchievementCard title="Underdog Story" req="Win the Retro Bowl as a wildcard seed" cc="+100 CC" tier="Gold" />
              </div>
            </div>

            {/* Player Trophies */}
            <div>
              <h2 className="text-retro-yellow font-pixel text-base sm:text-lg mb-4 flex items-center gap-2">
                <Star size={18} className="text-retro-blue" />
                Player Achievements (590 Total CC)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <AchievementCard title="QB Legend" req="Throw for 5,000+ yards in a single regular season" cc="+50 CC" tier="Gold" />
                <AchievementCard title="Rushing King" req="Rush for 2,000+ yards with a single running back" cc="+50 CC" tier="Gold" />
                <AchievementCard title="TD Machine" req="Score 50+ total touchdowns with one player in a season" cc="+75 CC" tier="Gold" />
                <AchievementCard title="Defensive MVP" req="Record 10+ interceptions with one defensive back" cc="+50 CC" tier="Silver" />
                <AchievementCard title="League MVP" req="Have one of your star players win the official MVP award" cc="+50 CC" tier="Gold" />
                <AchievementCard title="Hall of Famer" req="Induct a retired veteran into your team Hall of Fame" cc="+100 CC" tier="Platinum" />
                <AchievementCard title="Perfect Game" req="Complete 100% of passes in a game (min. 15 attempts)" cc="+35 CC" tier="Silver" />
                <AchievementCard title="Long Distance" req="Complete an 80+ yard touchdown pass in a single play" cc="+20 CC" tier="Bronze" />
              </div>
            </div>

            {/* Career Trophies */}
            <div>
              <h2 className="text-retro-yellow font-pixel text-base sm:text-lg mb-4 flex items-center gap-2">
                <Medal size={18} className="text-retro-red" />
                Career Legacy Milestones (700 Total CC)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <AchievementCard title="Coaching Legend" req="Win 5+ Retro Bowl championships across your career" cc="+200 CC" tier="Platinum" />
                <AchievementCard title="Century Club" req="Win 100+ regular season and playoff games as head coach" cc="+100 CC" tier="Gold" />
                <AchievementCard title="Team Builder" req="Develop 10 different drafted players to a 5-star rating" cc="+75 CC" tier="Gold" />
                <AchievementCard title="Longevity" req="Complete 10 full seasons as head coach with your franchise" cc="+100 CC" tier="Gold" />
                <AchievementCard title="Franchise Builder" req="Upgrade Stadium, Training, and Rehab facilities to level 10" cc="+50 CC" tier="Silver" />
                <AchievementCard title="Fan Favorite" req="Achieve and maintain 100% fan approval for a full season" cc="+75 CC" tier="Gold" />
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="text-center my-8">
            <Link to="/">
              <span className="bg-gradient-to-r from-retro-green to-emerald-600 hover:from-emerald-600 hover:to-retro-green text-black font-pixel text-xs sm:text-sm px-6 py-3 rounded-lg border-2 border-retro-yellow shadow-xl font-bold inline-block transition-transform hover:scale-105">
                🏈 START COLLECTING TROPHIES IN GAME &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const AchievementCard = ({ title, req, cc, tier }: { title: string, req: string, cc: string, tier: string }) => (
  <div className="bg-retro-dark-blue p-4 rounded-xl border border-retro-gray/60 hover:border-retro-yellow transition-all flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <h4 className="font-pixel text-xs text-white">{title}</h4>
        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
          tier === 'Platinum' 
            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' 
            : tier === 'Gold' 
              ? 'bg-retro-yellow/20 text-retro-yellow border border-retro-yellow/40' 
              : 'bg-retro-blue text-white'
        }`}>
          {tier}
        </span>
      </div>
      <p className="text-retro-light-gray text-[11px] leading-relaxed mb-3">{req}</p>
    </div>
    <div className="border-t border-retro-gray/40 pt-2 flex items-center justify-between text-[11px]">
      <span className="text-retro-light-gray">Reward:</span>
      <span className="font-pixel text-retro-green font-bold flex items-center gap-1">
        <Sparkles size={11} className="text-retro-yellow" />
        {cc}
      </span>
    </div>
  </div>
);

export default Achievements;
