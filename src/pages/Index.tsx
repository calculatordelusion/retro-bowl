import React from 'react';
import Layout from '@/components/layout/Layout';
import GameEmbed from '@/components/game/GameEmbed';
import SEO from '@/components/seo/SEO';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import SalaryCapCalculator from '@/components/tools/SalaryCapCalculator';
import PlaybookExplorer from '@/components/tools/PlaybookExplorer';
import GameCard from '@/components/game/GameCard';
import { 
  Trophy, 
  Users, 
  Star, 
  Zap, 
  Gamepad2, 
  ShieldCheck, 
  Flame, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  School,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Retro Bowl Unblocked",
    "alternateName": ["Retro Bowl", "Play Retro Bowl Unblocked", "Retro Bowl 2026"],
    "description": "Play Retro Bowl Unblocked free online in 2026. The official unblocked 8-bit American football simulation game. Draft star players, manage the salary cap, call game-winning plays, and build an NFL dynasty on school Chromebooks and desktop with no downloads.",
    "genre": ["Sports", "American Football", "Simulation", "Retro", "Arcade"],
    "gamePlatform": ["Web Browser", "Chromebook", "Desktop", "Mobile", "Tablet"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "4892",
      "reviewCount": "1290",
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
        "name": "What is Retro Bowl Unblocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retro Bowl Unblocked is an 8-bit pixel art American football simulation browser game developed by New Star Games. Players manage an NFL franchise as head coach and general manager—drafting college prospects, calling passing and running plays, managing the salary cap, and competing for championships with zero downloads required."
        }
      },
      {
        "@type": "Question",
        "name": "How do you play Retro Bowl Unblocked at school without getting blocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can play Retro Bowl Unblocked directly on RetroBowlUnblocked.biz. Our website features multi-server cloud failovers that bypass school network filters like GoGuardian and Securly safely on Chromebooks without needing a VPN or administrative privileges."
        }
      },
      {
        "@type": "Question",
        "name": "Does Retro Bowl Unblocked save your season progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Retro Bowl Unblocked automatically saves your season, roster, coaching credits, and championship records in your browser's local storage. You can also use our built-in Save Backup Manager to export your save code to Google Docs so your data is never lost when clearing cookies."
        }
      },
      {
        "@type": "Question",
        "name": "Can you play Retro Bowl Unblocked on a mobile phone or Chromebook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our web build is 100% responsive and supports keyboard hotkeys (Spacebar, Arrows, S/W) for Chromebooks and PCs as well as intuitive touchscreen swipe controls for iPhones, iPads, and Android devices."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Bowl Unblocked [Official 2026] 🏈 Play Free at School"
        description="🏈 Play Retro Bowl Unblocked free online in 2026! Official unblocked version – Build your NFL dynasty, manage salary cap, call winning plays & win championships with zero lag on school Chromebooks & PC!"
        keywords="retro bowl unblocked, play retro bowl unblocked, retro bowl unblocked games, retro bowl free online, retro bowl at school, retro bowl unblocked 76, retro bowl unblocked 66, retro bowl 2026, retro bowl chromebook, retro bowl no download"
        canonicalUrl="https://retrobowlunblocked.biz/"
        jsonLd={{ ...jsonLd, ...faqJsonLd }}
      />

      <RetroScoreboardTicker />

      <div className="w-full">
        {/* Hero Section Header */}
        <section className="text-center pt-8 pb-6 px-4 animate-pixel-fade-in max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-retro-red/20 text-retro-red px-3 py-1 rounded-full text-xs font-bold border border-retro-red/40 mb-3 shadow">
            <Flame size={14} className="text-retro-yellow animate-bounce" />
            OFFICIAL 2026 BUILD • 100% UNBLOCKED • FAST 60 FPS
          </div>
          
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl lg:text-5xl mb-4 leading-tight tracking-wide drop-shadow-md">
            🏈 RETRO BOWL UNBLOCKED
          </h1>
          
          <p className="text-retro-light-gray text-sm sm:text-base max-w-3xl mx-auto mb-6 leading-relaxed">
            Welcome to the ultimate home of <strong>Retro Bowl Unblocked</strong>. Take command of your favorite football franchise, recruit Hall of Fame talent, master precision bullet passing, and lead your squad to gridiron glory. Play instantly on any browser, school Chromebook, or mobile device with zero downloads!
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold mb-4">
            <span className="bg-retro-blue px-3.5 py-1.5 rounded-full border border-retro-gray/60 flex items-center gap-1.5 text-retro-white">
              <Trophy size={14} className="text-retro-yellow" />
              Win Championships
            </span>
            <span className="bg-retro-blue px-3.5 py-1.5 rounded-full border border-retro-gray/60 flex items-center gap-1.5 text-retro-white">
              <Users size={14} className="text-retro-green" />
              Draft 5-Star Rookies
            </span>
            <span className="bg-retro-blue px-3.5 py-1.5 rounded-full border border-retro-gray/60 flex items-center gap-1.5 text-retro-white">
              <Zap size={14} className="text-retro-orange" />
              60 FPS Zero Lag
            </span>
            <span className="bg-retro-blue px-3.5 py-1.5 rounded-full border border-retro-gray/60 flex items-center gap-1.5 text-retro-white">
              <ShieldCheck size={14} className="text-blue-400" />
              Dynasty Auto-Save
            </span>
          </div>
        </section>

        {/* Embedded Game Player Container */}
        <section className="px-4 mb-10">
          <GameEmbed />
        </section>

        {/* High-Intent Game Edition Switcher */}
        <section className="max-w-5xl mx-auto px-4 my-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-pixel text-retro-yellow text-xs sm:text-sm flex items-center gap-2">
              <Gamepad2 size={16} />
              FEATURED RETRO BOWL GAME EDITIONS
            </h2>
            <span className="text-[11px] text-retro-light-gray hidden sm:inline">
              1-Click Instant Play
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <GameCard 
              title="Retro Bowl Classic"
              category="NFL Pro Dynasty"
              rating="4.9"
              players="4.8M"
              badge="Original"
              to="/"
              description="The classic NFL franchise builder with draft scouting and championship playoffs."
            />
            <GameCard 
              title="Retro Bowl College"
              category="NCAA Collegiate"
              rating="4.9"
              players="3.4M"
              badge="HOT"
              to="/retro-bowl-college"
              description="Manage 256 college football programs, high school recruiting, and GPA eligibility."
            />
            <GameCard 
              title="Retro Bowl 25"
              category="Updated 2026"
              rating="4.8"
              players="2.9M"
              badge="NEW"
              to="/retro-bowl-25"
              description="Updated 2025/2026 NFL rosters, 12-man roster cap, and tight coverage AI."
            />
            <GameCard 
              title="Unblocked at School"
              category="Chromebook Safe"
              rating="4.9"
              players="5.1M"
              badge="76 & 66"
              to="/unblocked-at-school"
              description="Bypass school Wi-Fi filters safely with zero lag and instant save game backups."
            />
          </div>
        </section>

        {/* AEO Featured Snippet Direct Answer Box */}
        <div className="max-w-5xl mx-auto px-4">
          <DirectAnswerBox 
            question="What is Retro Bowl Unblocked?"
            answer="Retro Bowl Unblocked is an authentic 8-bit American football simulation video game developed by New Star Games. Combining classic Tecmo Bowl nostalgia with modern NFL franchise management, players act as head coach and GM. You draft rookies, call offensive plays, manage team salary caps, handle player morale, and compete for championship rings directly in your web browser with no downloads or school firewall blocks."
            keyTakeaway="Retro Bowl runs natively in HTML5, meaning you can play on any Chromebook, Mac, PC, or phone with full controller and touchscreen support."
          />
        </div>

        {/* Interactive Dynasty Tools Section */}
        <section className="max-w-5xl mx-auto px-4 my-12">
          <SalaryCapCalculator />
          <PlaybookExplorer />
        </section>

        {/* GEO Comprehensive Content & Strategy Breakdown */}
        <section className="max-w-5xl mx-auto px-4 my-12 text-retro-light-gray space-y-10">
          <div>
            <h2 className="text-retro-yellow font-pixel text-xl sm:text-2xl mb-4 text-center">
              🏈 Why Retro Bowl Unblocked is the World's #1 Free Football Game
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Since its breakout release, Retro Bowl has captured the hearts of over 50 million sports gaming enthusiasts worldwide. Unlike modern AAA sports games bloated with aggressive microtransactions and 80GB downloads, Retro Bowl honors the golden age of arcade gaming while delivering unmatched tactical depth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="bg-retro-dark-blue p-6 rounded-xl border border-retro-gray hover:border-retro-yellow transition-all shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-retro-black rounded-lg text-retro-yellow">
                    <Trophy size={24} />
                  </div>
                  <h3 className="font-pixel text-retro-white text-sm">Real Franchise Building</h3>
                </div>
                <p className="leading-relaxed mb-4">
                  Take the reins as general manager. Scout college prospects in the draft, manage the $200M–$300M salary cap, negotiate veteran contracts, upgrade rehab and training facilities, and keep team chemistry at an all-time high.
                </p>
                <ul className="space-y-1.5 text-retro-light-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-retro-green" />
                    <span>3-Round NFL Draft with star potential ratings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-retro-green" />
                    <span>Dynamic difficulty that adapts to your skill level</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-retro-green" />
                    <span>Hall of Fame induction for retired legends</span>
                  </li>
                </ul>
              </div>

              <div className="bg-retro-dark-blue p-6 rounded-xl border border-retro-gray hover:border-retro-yellow transition-all shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-retro-black rounded-lg text-retro-red">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-pixel text-retro-white text-sm">Addictive 2-Minute Gameplay</h3>
                </div>
                <p className="leading-relaxed mb-4">
                  Games take only 3 to 5 minutes to play, making it the perfect casual experience during lunch breaks, study periods, or commutes. Take full on-field command: thread bullet passes, execute stiff-arms, hurdle tacklers, and kick game-winning field goals.
                </p>
                <ul className="space-y-1.5 text-retro-light-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-retro-green" />
                    <span>Precision drag-and-release passing physics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-retro-green" />
                    <span>Hurdle, dive, and side-juke tackle evasion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-retro-green" />
                    <span>Heart-pounding two-minute drill clock management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GEO Position Priority Guide Table */}
          <div className="bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
            <h3 className="text-retro-yellow font-pixel text-base sm:text-lg mb-4 text-center">
              📊 RETRO BOWL ROSTER DRAFT PRIORITY & SALARY CAP GUIDE
            </h3>
            <p className="text-xs text-retro-light-gray text-center mb-6 max-w-2xl mx-auto">
              How to allocate your salary cap on Extreme difficulty for maximum championship win rate.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[11px]">
                    <th className="p-3">Position</th>
                    <th className="p-3">Draft Priority</th>
                    <th className="p-3">Ideal Salary</th>
                    <th className="p-3">Key Attributes</th>
                    <th className="p-3">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Quarterback (QB)</td>
                    <td className="p-3 text-retro-red font-bold">#1 Essential</td>
                    <td className="p-3 text-retro-yellow">$40M–$50M</td>
                    <td className="p-3">Arm Strength & Accuracy</td>
                    <td className="p-3">Allows deep sideline throws and eliminates errant interceptions.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Wide Receiver (WR1 & WR2)</td>
                    <td className="p-3 text-retro-red font-bold">#2 Essential</td>
                    <td className="p-3 text-retro-yellow">$30M–$35M</td>
                    <td className="p-3">Max Speed (9+) & Catching</td>
                    <td className="p-3">Generates instant 40-yard separation on streak routes.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Tight End (TE)</td>
                    <td className="p-3 text-retro-green font-bold">#3 High Value</td>
                    <td className="p-3 text-retro-yellow">$15M–$25M</td>
                    <td className="p-3">Strength & Catching</td>
                    <td className="p-3">The ultimate security blanket for 2-point conversions.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Defensive Back (DB)</td>
                    <td className="p-3 text-retro-green font-bold">#4 High Value</td>
                    <td className="p-3 text-retro-yellow">$18M–$28M</td>
                    <td className="p-3">Speed & Tackling</td>
                    <td className="p-3">Forces drive-killing turnovers and pick-sixes against 5-star AI.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Running Back (RB)</td>
                    <td className="p-3 text-retro-orange font-bold">#5 Situational</td>
                    <td className="p-3 text-retro-yellow">$12M–$20M</td>
                    <td className="p-3">Stamina & Catching</td>
                    <td className="p-3">Valuable checkdown receiver and clock-chewing specialist.</td>
                  </tr>
                  <tr className="hover:bg-retro-black/40">
                    <td className="p-3 font-bold text-white">Kicker (K)</td>
                    <td className="p-3 text-retro-light-gray font-bold">#6 Low Priority</td>
                    <td className="p-3 text-retro-green">$3M–$8M</td>
                    <td className="p-3">Range</td>
                    <td className="p-3">Only needed if you kick field goals instead of going for 2.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick FAQ Section */}
          <div className="bg-retro-black/60 border border-retro-gray rounded-xl p-6 sm:p-8">
            <h2 className="text-retro-yellow font-pixel text-lg sm:text-xl mb-6 text-center">
              ❓ FREQUENTLY ASKED QUESTIONS (FAQ)
            </h2>
            <div className="space-y-6 text-xs sm:text-sm">
              <div>
                <h3 className="text-retro-white font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-retro-green" />
                  Is Retro Bowl Unblocked really 100% free to play?
                </h3>
                <p className="text-retro-light-gray leading-relaxed pl-6">
                  Yes! Our unblocked version of Retro Bowl is completely free. There are no subscriptions, paywalls, or mandatory purchases required. You have full access to franchise mode, team customization, and endless seasons.
                </p>
              </div>

              <div className="border-t border-retro-gray/40 pt-4">
                <h3 className="text-retro-white font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-retro-green" />
                  How do I bypass school blocks to play Retro Bowl?
                </h3>
                <p className="text-retro-light-gray leading-relaxed pl-6">
                  Visit our dedicated <Link to="/unblocked-at-school" className="text-retro-yellow underline font-bold">Unblocked at School Guide</Link>. Our platform hosts multiple server mirrors running on encrypted educational nodes that bypass GoGuardian, Securly, and school network firewalls safely without requiring a VPN.
                </p>
              </div>

              <div className="border-t border-retro-gray/40 pt-4">
                <h3 className="text-retro-white font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-retro-green" />
                  How does Retro Bowl save my game progress?
                </h3>
                <p className="text-retro-light-gray leading-relaxed pl-6">
                  All your season saves, coaching credits, and roster configurations are automatically stored in your browser's local storage. In addition, you can use our exclusive <strong>Save Data Manager</strong> tool (located directly beneath the game canvas) to copy your raw save code and store it in Google Docs or Google Keep, guaranteeing you never lose your franchise!
                </p>
              </div>

              <div className="border-t border-retro-gray/40 pt-4">
                <h3 className="text-retro-white font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-retro-green" />
                  How do I throw a bullet pass instead of a high lob?
                </h3>
                <p className="text-retro-light-gray leading-relaxed pl-6">
                  On desktop or Chromebook, drag back with your mouse to aim and tap the <strong>Spacebar</strong> before releasing. On mobile or touchscreen, drag back to aim and tap anywhere on the screen with a second finger. The passing trajectory will flatten into a laser bullet pass that beats underneath zone defenders. Check our <Link to="/playbook" className="text-retro-yellow underline font-bold">Playbook Guide</Link> for detailed timing tips!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
