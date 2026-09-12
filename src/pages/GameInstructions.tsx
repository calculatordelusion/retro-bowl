import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Gamepad2, Target, BookOpen, Trophy, Compass, CheckCircle2, Shield, AlertCircle } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Link } from 'react-router-dom';

const GameInstructions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Retro Bowl Unblocked: Complete Beginner to Pro Rulebook",
    "description": "The complete field manual for Retro Bowl Unblocked. Master downs, passing, running, kicking, scoring, and overtime rules.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Understand the Downs System",
        "text": "Your offense has 4 downs (plays) to advance the football 10 yards. Reaching the yellow first-down marker resets the count to 1st & 10."
      },
      {
        "@type": "HowToStep",
        "name": "Aim and Throw",
        "text": "Drag back with your mouse or finger in the opposite direction of the pass to set arc trajectory and throw power, then release to fire."
      },
      {
        "@type": "HowToStep",
        "name": "Scoring and 2-Point Decisions",
        "text": "Touchdowns award 6 points. Choose between a safe 1-point kick or a high-value 2-point conversion pass from the 2-yard line."
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="How to Play Retro Bowl (2026) 🏈 Rules & Field Manual"
        description="Complete Retro Bowl gameplay instructions! Learn the downs system, passing arcs, running lanes, scoring rules & overtime mechanics."
        keywords="how to play retro bowl, retro bowl instructions, retro bowl rules, retro bowl downs system, retro bowl scoring, retro bowl tutorial"
        canonicalUrl="https://retrobowlunblocked.live/game-instructions"
        ogType="article"
        jsonLd={jsonLd}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-retro-red/20 text-retro-red px-3 py-1 rounded-full text-xs font-bold border border-retro-red/40 mb-3">
              <BookOpen size={14} className="text-retro-yellow" />
              OFFICIAL RULEBOOK & FIELD MANUAL • 2026 EDITION
            </div>
            <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
              🏈 RETRO BOWL COMPLETE GAME INSTRUCTIONS
            </h1>
            <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              From your very first snap to raising the Retro Bowl trophy. Learn the official downs system, on-field mechanics, red zone decision matrix, and overtime formats.
            </p>
          </div>

          {/* AEO Featured Snippet Box */}
          <DirectAnswerBox 
            question="How do you play Retro Bowl Unblocked?"
            answer="In Retro Bowl, you play as the offensive coordinator and general manager. On offense, click and drag backwards to aim and throw passes to receivers, or hand the ball off to your running back by tapping them. You have 4 downs to advance 10 yards. Score touchdowns (6 pts) and convert 2-point attempts (2 pts). On defense, the game simulates results based on your defensive players' star ratings."
            keyTakeaway="Always aim passes slightly ahead of receivers to lead them into open grass."
          />

          {/* Scoring Rules Matrix */}
          <section className="my-10 bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
            <h2 className="font-pixel text-retro-yellow text-sm sm:text-base mb-4 text-center">
              📊 RETRO BOWL SCORING VALUE MATRIX
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[10px]">
                    <th className="p-3">Play Result</th>
                    <th className="p-3">Points Awarded</th>
                    <th className="p-3">Risk Level</th>
                    <th className="p-3">Strategic Advice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Touchdown (TD)</td>
                    <td className="p-3 font-bold text-retro-green">6 Points</td>
                    <td className="p-3 text-retro-yellow">Standard Goal</td>
                    <td className="p-3">Always aim for the end zone; field goals should be a last resort.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">2-Point Conversion</td>
                    <td className="p-3 font-bold text-retro-green">2 Points</td>
                    <td className="p-3 text-retro-green font-bold">Low Risk (95% win rate)</td>
                    <td className="p-3">Mathematically superior to kicking extra points. Target your TE.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Point After Touchdown (PAT Kick)</td>
                    <td className="p-3 font-bold text-retro-yellow">1 Point</td>
                    <td className="p-3 text-retro-green">Very Low Risk</td>
                    <td className="p-3">Only use if a 1-point lead wins the game with 00:00 on the clock.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Field Goal (FG)</td>
                    <td className="p-3 font-bold text-retro-yellow">3 Points</td>
                    <td className="p-3 text-retro-orange">Medium Risk (Wind affects aim)</td>
                    <td className="p-3">Use on 4th down when outside the red zone with under 0:05 remaining.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Safety</td>
                    <td className="p-3 font-bold text-retro-blue">2 Points + Possession</td>
                    <td className="p-3 text-retro-red">Defensive Turnover</td>
                    <td className="p-3">Occurs when opposing ball carrier is tackled inside their own end zone.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Step-by-Step Gameplay Rules */}
          <div className="space-y-6 my-10 text-xs sm:text-sm text-retro-light-gray">
            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="font-pixel text-retro-yellow text-xs sm:text-sm mb-2">
                1. The Downs & Distance System
              </h3>
              <p className="leading-relaxed mb-3">
                Your offense starts at <strong>1st & 10</strong>. You have four plays (downs) to advance the football at least 10 yards. The yellow line on the field marks the first down. If you gain 10 or more yards, the down count resets to 1st down.
              </p>
              <div className="bg-black/50 p-3 rounded border border-retro-gray/50 text-xs text-white">
                <strong className="text-retro-yellow">4th Down Golden Rule:</strong> If you are past the 50-yard line and need 3 yards or fewer, <strong>never punt</strong>. Execute a quick dive or tight end slant to keep your championship drive alive.
              </div>
            </div>

            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="font-pixel text-retro-yellow text-xs sm:text-sm mb-2">
                2. Passing & The Trajectory Arc
              </h3>
              <p className="leading-relaxed mb-3">
                Your quarterback will drop back automatically when the ball is snapped. Click/touch and drag backwards to reveal the dotted white passing arc. The length of your pullback controls arm strength, while the angle controls release direction.
              </p>
              <div className="bg-black/50 p-3 rounded border border-retro-gray/50 text-xs text-white">
                <strong className="text-retro-green">Leading Receivers:</strong> Receivers run at full speed. Do not aim directly where the receiver is standing—aim <strong>2 to 4 yards ahead</strong> of where their route is cutting so they catch the ball in full stride!
              </div>
            </div>

            <div className="bg-retro-dark-blue p-5 rounded-xl border border-retro-gray">
              <h3 className="font-pixel text-retro-yellow text-xs sm:text-sm mb-2">
                3. Overtime Rules (Regular Season vs Playoff)
              </h3>
              <p className="leading-relaxed mb-3">
                If the score is tied at the end of four quarters:
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-retro-green mt-0.5 flex-shrink-0" />
                  <span><strong>Regular Season Overtime:</strong> A single overtime period is played. A coin toss determines possession. A touchdown on the first drive ends the game immediately. If the game remains tied, it ends in a draw.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-retro-green mt-0.5 flex-shrink-0" />
                  <span><strong>Playoff Overtime:</strong> Play continues until a winner is determined. Both teams receive an opportunity to possess the football unless the team with the first possession scores a touchdown on their opening drive.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Link */}
          <div className="text-center my-8">
            <Link to="/">
              <span className="bg-gradient-to-r from-retro-green to-emerald-600 hover:from-emerald-600 hover:to-retro-green text-black font-pixel text-xs sm:text-sm px-6 py-3 rounded-lg border-2 border-retro-yellow shadow-xl font-bold inline-block transition-transform hover:scale-105">
                🏈 START PLAYING RETRO BOWL NOW &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GameInstructions;
