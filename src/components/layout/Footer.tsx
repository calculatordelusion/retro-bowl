import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ShieldCheck, Gamepad2, School, BookOpen, Star, HelpCircle } from 'lucide-react';
import NewsletterForm from '@/components/newsletter/NewsletterForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-retro-blue via-retro-dark-blue to-black border-t-4 border-retro-purple text-retro-light-gray mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-retro-red rounded-lg border-2 border-retro-yellow flex items-center justify-center font-pixel text-white text-xs">
                RB
              </div>
              <span className="font-pixel text-retro-yellow text-base">
                Retro Bowl Unblocked
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-4 text-retro-light-gray pr-4">
              The premier web destination for playing <strong>Retro Bowl Unblocked</strong> online in 2026. Experience authentic 8-bit football action, lead your NFL franchise, recruit 5-star prospects, and dominate the playoffs with zero downloads or restrictions.
            </p>
            <div className="flex items-center gap-2 text-xs text-retro-green bg-retro-black/60 p-2.5 rounded-lg border border-retro-gray/50 inline-flex">
              <ShieldCheck size={16} />
              <span>100% Free, Safe & Chromebook School-Friendly</span>
            </div>
          </div>

          {/* Column 1: Game Editions */}
          <div>
            <h4 className="font-pixel text-retro-yellow text-xs mb-4 uppercase tracking-wider flex items-center gap-1.5">
              <Gamepad2 size={14} className="text-retro-yellow" />
              Game Modes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-retro-yellow transition-colors">
                  Retro Bowl (Official 2026)
                </Link>
              </li>
              <li>
                <Link to="/retro-bowl-college" className="hover:text-retro-yellow transition-colors flex items-center gap-1">
                  <span>Retro Bowl College</span>
                  <span className="text-[9px] bg-retro-green/80 text-black px-1 rounded font-bold">HOT</span>
                </Link>
              </li>
              <li>
                <Link to="/retro-bowl-25" className="hover:text-retro-yellow transition-colors flex items-center gap-1">
                  <span>Retro Bowl 25 Edition</span>
                  <span className="text-[9px] bg-retro-orange text-black px-1 rounded font-bold">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/unblocked-at-school" className="hover:text-retro-yellow transition-colors">
                  Play at School (76 / 66)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Strategy & Guides */}
          <div>
            <h4 className="font-pixel text-retro-yellow text-xs mb-4 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen size={14} className="text-retro-green" />
              Guides & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/playbook" className="hover:text-retro-yellow transition-colors">
                  Offensive Playbook & Routes
                </Link>
              </li>
              <li>
                <Link to="/cheats-and-secrets" className="hover:text-retro-yellow transition-colors">
                  Cheats & Coaching Credits
                </Link>
              </li>
              <li>
                <Link to="/team-management" className="hover:text-retro-yellow transition-colors">
                  Team Management Guide
                </Link>
              </li>
              <li>
                <Link to="/tips-and-tricks" className="hover:text-retro-yellow transition-colors">
                  Dynasty Tips & Tricks
                </Link>
              </li>
              <li>
                <Link to="/controls" className="hover:text-retro-yellow transition-colors">
                  Controls & Hotkeys
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-retro-yellow transition-colors">
                  Achievements Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Information */}
          <div>
            <h4 className="font-pixel text-retro-yellow text-xs mb-4 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle size={14} className="text-retro-red" />
              Information
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/faq" className="hover:text-retro-yellow transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-retro-yellow transition-colors">
                  About the Project
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-retro-yellow transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-retro-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/dmca" className="hover:text-retro-yellow transition-colors">
                  DMCA Copyright Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="bg-retro-black/70 border border-retro-gray/50 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-pixel text-retro-yellow text-xs sm:text-sm mb-1">
              JOIN THE RETRO BOWL DYNASTY CLUB
            </h4>
            <p className="text-xs text-retro-light-gray">
              Receive secret playbook releases, draft prospect scouting reports, and unblocked mirror domain alerts.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <NewsletterForm />
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-retro-gray/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-retro-light-gray/70 gap-3">
          <p>
            &copy; {currentYear} Retro Bowl Unblocked. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Retro Bowl is a trademark of New Star Games Ltd. This is an independent fan resource and unblocked portal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
