import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Gamepad2, Trophy, Users, Target, ShieldCheck, CheckCircle2, Award, HeartHandshake, Laptop } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Retro Bowl Unblocked: Mission, Analytics & Editorial Standards",
    "description": "Learn about the Retro Bowl Unblocked team, our independent testing lab with over 15,000 simulated seasons, and our mission to provide clean, unblocked arcade gaming for school and desktop players.",
    "publisher": {
      "@type": "Organization",
      "name": "Retro Bowl Unblocked Analytics Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://retrobowlunblocked.biz/og-image.png"
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title="About Retro Bowl Unblocked (2026) 🏆 Mission & Analytics Team"
        description="Learn about Retro Bowl Unblocked! Discover our 15,000+ simulated seasons testing lab, independent editorial standards & commitment to 100% free unblocked gaming."
        keywords="about retro bowl unblocked, retro bowl analytics, retro bowl testing lab, who made retro bowl unblocked, retro bowl team"
        canonicalUrl="https://retrobowlunblocked.biz/about"
        ogType="article"
        jsonLd={jsonLd}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-retro-blue text-retro-white px-3 py-1 rounded-full text-xs font-bold border border-retro-gray mb-3">
              <ShieldCheck size={14} className="text-retro-green" />
              INDEPENDENT ANALYTICS & GAMING LAB • EST. 2024
            </div>
            <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
              🏆 ABOUT RETRO BOWL UNBLOCKED
            </h1>
            <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We are an independent team of retro gaming engineers, sports data analysts, and football enthusiasts dedicated to delivering the world's premier, ad-free, 60 FPS unblocked football gaming portal.
            </p>
          </div>

          {/* Mission & Core Values */}
          <div className="bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 sm:p-8 shadow-xl mb-10 text-xs sm:text-sm text-retro-light-gray leading-relaxed space-y-4">
            <h2 className="font-pixel text-retro-yellow text-sm sm:text-base mb-2">
              Our Core Philosophy: Gaming Without Barriers
            </h2>
            <p>
              In an era where modern sports video games are burdened by 90GB installs, mandatory online logins, and predatory microtransactions, <strong>Retro Bowl</strong> proved that pure, nostalgic 8-bit gameplay combined with deep franchise management is what true football fans genuinely crave.
            </p>
            <p>
              However, millions of students and workers who wish to play during their well-earned breaks find themselves restricted by aggressive school and corporate network firewalls like GoGuardian, Securly, and Fortinet. Furthermore, the few "unblocked" sites that did exist were riddled with intrusive pop-up ads, fake download buttons, and broken iframes that wiped user saves upon reload.
            </p>
            <p className="text-white font-bold">
              We built RetroBowlUnblocked.biz to fix this forever: providing a clean, blazing-fast, ad-free environment equipped with multi-server cloud failover and permanent save-game backup tools.
            </p>
          </div>

          {/* E-E-A-T Analytics Lab Box */}
          <div className="bg-retro-black/60 border-2 border-retro-yellow rounded-xl p-6 sm:p-8 shadow-2xl mb-10">
            <h2 className="font-pixel text-retro-yellow text-sm sm:text-base mb-4 flex items-center gap-2">
              <Award className="text-retro-green" size={22} />
              The Retro Bowl Testing Lab: 15,000+ Seasons Simulated
            </h2>
            <p className="text-xs sm:text-sm text-retro-light-gray leading-relaxed mb-6">
              Our guides, playbook route trees, and salary cap calculators are not based on guesswork. Our testing team runs automated Monte Carlo simulations and manual competitive seasons across Extreme difficulty to map the game's mathematical inner workings:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/50 text-center">
                <span className="font-pixel text-retro-yellow text-lg block mb-1">15,000+</span>
                <span className="text-white font-bold block mb-1">Simulated Seasons</span>
                <span className="text-retro-light-gray text-[11px]">Testing player aging, draft values, and coordinator traits.</span>
              </div>

              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/50 text-center">
                <span className="font-pixel text-retro-green text-lg block mb-1">99.8%</span>
                <span className="text-white font-bold block mb-1">Server Uptime</span>
                <span className="text-retro-light-gray text-[11px]">Triple-node cloud failover across GitHub and SSL proxies.</span>
              </div>

              <div className="bg-retro-dark-blue p-4 rounded-lg border border-retro-gray/50 text-center">
                <span className="font-pixel text-retro-orange text-lg block mb-1">60 FPS</span>
                <span className="text-white font-bold block mb-1">Hardware Acceleration</span>
                <span className="text-retro-light-gray text-[11px]">Calibrated for low-power school Chromebooks and mobile.</span>
              </div>
            </div>
          </div>

          {/* Editorial Standards & Community Commitment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-xs sm:text-sm text-retro-light-gray">
            <div className="bg-retro-dark-blue p-6 rounded-xl border border-retro-gray">
              <h3 className="font-pixel text-retro-yellow text-xs sm:text-sm mb-3 flex items-center gap-2">
                <HeartHandshake size={18} className="text-retro-green" />
                Editorial Integrity & Free Access
              </h3>
              <p className="leading-relaxed">
                We believe in 100% transparency. We never charge for strategy guides, never hide cheats behind paywalls, and never host deceptive ads. All guides are written by experienced dynasty coaches and updated continually for every new NFL season.
              </p>
            </div>

            <div className="bg-retro-dark-blue p-6 rounded-xl border border-retro-gray">
              <h3 className="font-pixel text-retro-yellow text-xs sm:text-sm mb-3 flex items-center gap-2">
                <Laptop size={18} className="text-blue-400" />
                Chromebook Hardware Research
              </h3>
              <p className="leading-relaxed">
                We maintain active testing setups on standard school Chromebooks (Intel Celeron, 4GB RAM) to ensure our HTML5 canvas code never stutters, drops frames, or overheats student devices during gameplay.
              </p>
            </div>
          </div>

          {/* Action Link */}
          <div className="text-center my-8">
            <Link to="/">
              <span className="bg-gradient-to-r from-retro-green to-emerald-600 hover:from-emerald-600 hover:to-retro-green text-black font-pixel text-xs sm:text-sm px-6 py-3 rounded-lg border-2 border-retro-yellow shadow-xl font-bold inline-block transition-transform hover:scale-105">
                🏈 EXPERIENCE RETRO BOWL UNBLOCKED &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
