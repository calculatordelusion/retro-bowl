import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/seo/SEO';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Gamepad2, Keyboard, Smartphone, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ControlsGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Control Retro Bowl on PC, Chromebook, and Mobile",
    "description": "Comprehensive guide to all keyboard hotkeys, mouse mechanics, and touchscreen gestures in Retro Bowl Unblocked.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Passing the Ball",
        "text": "Click/Tap and drag backwards away from the target receiver. Adjust power trajectory, then release."
      },
      {
        "@type": "HowToStep",
        "name": "Throwing a Bullet Pass",
        "text": "While drawing back your pass, press Spacebar (or tap with a second finger on touchscreens) before releasing."
      },
      {
        "@type": "HowToStep",
        "name": "Diving and Hurdling",
        "text": "Press Down Arrow / S key or swipe down to dive forward. Press Up Arrow / W key or swipe up to hurdle."
      },
      {
        "@type": "HowToStep",
        "name": "Juking Left and Right",
        "text": "Use Left/Right arrows or swipe left/right while running with the ball carrier."
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the keyboard controls for Retro Bowl on PC and Chromebook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Left Mouse Click & Drag to aim and throw passes. SPACEBAR to toggle between high lob and bullet pass. W / Up Arrow to hurdle. S / Down Arrow to dive forward. A / D or Left / Right Arrows to juke defenders."
        }
      },
      {
        "@type": "Question",
        "name": "How do you dive in Retro Bowl on PC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On PC or Chromebook, press the Down Arrow or S key while running with the ball to perform a forward dive. This protects against fumbles and gains an extra 1 to 2 yards."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Bowl Controls (PC, Chromebook & Mobile) 🎮 Hotkeys Guide"
        description="Complete Retro Bowl controls guide! Keyboard hotkeys for PC & Chromebook, mouse aim mechanics, touch gestures, bullet passes & jukes."
        keywords="retro bowl controls, retro bowl controls pc, retro bowl controls chromebook, how to dive in retro bowl, retro bowl bullet pass controls, retro bowl keybinds"
        canonicalUrl="https://retrobowlunblocked.live/controls"
        jsonLd={{ ...jsonLd, ...faqJsonLd }}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <section className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/40 mb-3">
            <Keyboard size={14} />
            FIELD CONTROLS & HOTKEYS • ALL PLATFORMS
          </div>
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-4xl mb-4 leading-tight">
            🎮 RETRO BOWL CONTROLS & HOTKEYS GUIDE
          </h1>
          <p className="text-retro-light-gray text-sm sm:text-base leading-relaxed">
            Full control mapping for desktop PC, school Chromebooks, Mac trackpads, and mobile touchscreens. Master dives, hurdles, bullet passes, and lateral jukes.
          </p>
        </section>

        {/* AEO Featured Snippet Box */}
        <DirectAnswerBox 
          question="What are the keyboard controls for Retro Bowl on PC and Chromebook?"
          answer="The controls for Retro Bowl on PC and Chromebook are: (1) Aim & Pass: Left Click and drag backward, release to throw, (2) Bullet Pass: Press SPACEBAR while aiming, (3) Dive: Press DOWN ARROW or S, (4) Jump / Hurdle: Press UP ARROW or W, (5) Juke: Press LEFT / RIGHT ARROWS or A / D, and (6) Audible: Click the Audible button before the snap."
          keyTakeaway="Press Down Arrow right before contact to dive forward and prevent fumbles."
        />

        {/* GEO Controls Comparison Table */}
        <section className="my-12 bg-retro-dark-blue border-2 border-retro-gray rounded-xl p-6 shadow-xl">
          <h2 className="text-retro-yellow font-pixel text-lg sm:text-xl mb-4 text-center">
            📋 CROSS-PLATFORM CONTROLS DIRECTORY
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-retro-blue border-b-2 border-retro-yellow text-retro-white font-pixel text-[11px]">
                  <th className="p-3">Action</th>
                  <th className="p-3">PC & Chromebook Keyboard</th>
                  <th className="p-3">Mouse / Trackpad</th>
                  <th className="p-3">Mobile & Tablet Touch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-retro-gray/40 text-retro-light-gray">
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Pass Ball</td>
                  <td className="p-3 text-retro-yellow font-bold">Left Click + Drag Back</td>
                  <td className="p-3">Click and drag backwards</td>
                  <td className="p-3 text-retro-green font-bold">Touch and drag back</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Bullet Pass</td>
                  <td className="p-3 text-retro-yellow font-bold">SPACEBAR (while aiming)</td>
                  <td className="p-3">Right Click / Middle Click</td>
                  <td className="p-3 text-retro-green font-bold">Tap with 2nd finger</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Dive Forward</td>
                  <td className="p-3 text-retro-yellow font-bold">Down Arrow / S Key</td>
                  <td className="p-3">Quick swipe downward</td>
                  <td className="p-3 text-retro-green font-bold">Swipe Down</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Jump / Hurdle</td>
                  <td className="p-3 text-retro-yellow font-bold">Up Arrow / W Key</td>
                  <td className="p-3">Quick swipe upward</td>
                  <td className="p-3 text-retro-green font-bold">Swipe Up</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Side Juke</td>
                  <td className="p-3 text-retro-yellow font-bold">A / D or Left / Right Arrows</td>
                  <td className="p-3">Drag horizontally</td>
                  <td className="p-3 text-retro-green font-bold">Swipe Left / Right</td>
                </tr>
                <tr className="hover:bg-retro-black/40">
                  <td className="p-3 font-bold text-retro-white">Call Timeout</td>
                  <td className="p-3 text-retro-yellow font-bold">T Key or Click Timeout icon</td>
                  <td className="p-3">Click on Timeout clock</td>
                  <td className="p-3 text-retro-green font-bold">Tap Timeout icon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Action Link to Play */}
        <div className="text-center my-8">
          <Link to="/">
            <span className="bg-gradient-to-r from-retro-red to-retro-orange hover:from-retro-orange hover:to-retro-red text-white font-pixel text-sm px-6 py-3 rounded-lg border-2 border-retro-yellow shadow-xl inline-block transition-transform hover:scale-105">
              🏈 PLAY WITH THESE CONTROLS NOW &rarr;
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ControlsGuide;
