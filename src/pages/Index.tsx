
import React from 'react';
import Layout from '@/components/layout/Layout';
import GameEmbed from '@/components/game/GameEmbed';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Star, PenTool, Maximize2, Award, Zap, Gamepad, Smartphone } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const Index = () => {
  const playFullScreen = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });

    // Request fullscreen for the iframe
    const gameIframe = document.getElementById('gameIframe') as HTMLIFrameElement;
    if (gameIframe) {
      if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen().catch(err => {
          console.error('Could not enter fullscreen mode:', err);
        });
      } else if ((gameIframe as any).webkitRequestFullscreen) {
        (gameIframe as any).webkitRequestFullscreen();
      } else if ((gameIframe as any).mozRequestFullScreen) {
        (gameIframe as any).mozRequestFullScreen();
      } else if ((gameIframe as any).msRequestFullscreen) {
        (gameIframe as any).msRequestFullscreen();
      }
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Retro Bowl Unblocked",
    "description": "Experience the thrill of American football in this pixel art sports game. Build your dream team, devise winning strategies, and become a champion!",
    "genre": ["Sports", "American Football", "Simulation", "Retro"],
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Layout>
      <SEO 
        title="Play Retro Bowl Unblocked Free Online - Official 2025 Version"
        description="🏈 Play Retro Bowl Unblocked free! The #1 unblocked football game for 2025. Build your NFL dynasty, manage rosters, call plays & dominate championships. Works at school/work - no downloads, instant access on any device!"
        keywords="retro bowl unblocked, retro bowl unblocked games, play retro bowl unblocked, retro bowl free online, unblocked football games, retro bowl at school, nfl retro game, browser football game, retro bowl 2025, retro bowl no download, american football game, retro bowl unblocked wtf, retro bowl unblocked 66, retro bowl unblocked 76"
        canonicalUrl="https://retrobowlunblocked.biz/"
        ogImage="/images/retro-bowl-unblocked.jpg"
        jsonLd={jsonLd}
      />
      
      <div className="w-full">
        <article itemScope itemType="https://schema.org/Game">
        <section className="text-center mb-6 animate-pixel-fade-in px-4">
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-3xl mb-4" itemProp="name">
            🏈 Play Retro Bowl Unblocked Free Online - 2025 Official Version
          </h1>
          <p className="text-retro-light-gray max-w-2xl mx-auto mb-6" itemProp="description">
            Experience authentic American football action in the #1 unblocked football game of 2025! Build your NFL dynasty, draft star players, call strategic plays, and lead your team to championship glory. Play instantly at school or work with no downloads required - just pure retro football fun!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FeatureTag icon={<Trophy size={16} />} text="Win Championships" />
            <FeatureTag icon={<Users size={16} />} text="Build Your Team" />
            <FeatureTag icon={<Star size={16} />} text="Score Touchdowns" />
            <FeatureTag icon={<PenTool size={16} />} text="Retro Pixel Art" />
          </div>
        </section>

        <GameEmbed />
        
        <div className="flex justify-center my-6 px-4">
          <Button 
            className="animate-glow-pulse relative bg-retro-red hover:bg-retro-orange text-white px-6 py-3 rounded-md font-pixel text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-retro-yellow"
            onClick={playFullScreen}
          >
            <div className="flex items-center gap-2">
              <Maximize2 size={18} />
              PLAY FULL SCREEN
            </div>
          </Button>
        </div>
        
        <section className="max-w-4xl mx-auto my-12 animate-pixel-fade-in px-4" itemScope itemType="https://schema.org/Article">
          <div className="text-center mb-8">
            <h2 className="text-retro-yellow font-pixel text-xl mb-2" itemProp="headline">Why Retro Bowl Unblocked is the #1 Free Football Game in 2025</h2>
            <p className="text-retro-light-gray max-w-2xl mx-auto" itemProp="description">Discover why millions of players choose Retro Bowl Unblocked - combining nostalgic 8-bit graphics with addictive modern football gameplay, deep team management, and authentic NFL simulation</p>
            <meta itemProp="author" content="Retro Bowl Unblocked Team" />
            <meta itemProp="datePublished" content="2024-01-15" />
            <meta itemProp="dateModified" content="2025-11-12" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-retro-dark-blue to-retro-blue rounded-lg p-6 shadow-lg border border-retro-gray hover:border-retro-yellow transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-retro-black p-3 rounded-lg inline-block mb-3">
                    <Trophy className="text-retro-red" size={28} />
                  </div>
                  <h3 className="text-retro-white font-pixel text-lg mb-2">Authentic Football Simulation</h3>
                </div>
                <p className="text-retro-light-gray mb-4 flex-grow">
                  Retro Bowl Unblocked delivers authentic American football action with nostalgic 8-bit pixel art graphics. Take complete control as head coach and general manager - call strategic plays, throw precision passes, manage the clock, and execute game-winning drives. Experience realistic football physics and challenging AI opponents that adapt to your play style.
                </p>
                <ul className="space-y-2 text-retro-light-gray text-sm">
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-green rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Simple but challenging gameplay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-green rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Authentic football simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-green rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Perfect balance of skill and strategy
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-retro-dark-blue to-retro-red rounded-lg p-6 shadow-lg border border-retro-gray hover:border-retro-yellow transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-retro-black p-3 rounded-lg inline-block mb-3">
                    <Trophy className="text-retro-yellow" size={28} />
                  </div>
                  <h3 className="text-retro-white font-pixel text-lg mb-2">Deep Dynasty Management</h3>
                </div>
                <p className="text-retro-light-gray mb-4 flex-grow">
                  Master the art of NFL franchise building! Scout college prospects, execute draft day strategies, negotiate player contracts, and manage the salary cap. Develop rookies into Hall of Fame superstars, handle player morale and injuries, upgrade team facilities, and make critical trade deadline decisions. Create a championship dynasty that dominates for decades!
                </p>
                <ul className="space-y-2 text-retro-light-gray text-sm">
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-yellow rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Scout and draft star players
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-yellow rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Develop rookies into superstars
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-yellow rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Strategic salary cap management
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <GameFeatureCard 
              icon={<Award className="text-retro-green" size={24} />}
              title="Season Mode"
              description="Lead your team through a full season, manage your roster, and aim for the playoffs and championship."
              color="from-retro-dark-blue to-retro-green"
            />
            <GameFeatureCard 
              icon={<Gamepad className="text-retro-blue" size={24} />}
              title="Intuitive Controls"
              description="Simple touch or keyboard controls make it easy to play, but difficult to master."
              color="from-retro-dark-blue to-retro-blue"
            />
            <GameFeatureCard 
              icon={<Smartphone className="text-retro-purple" size={24} />}
              title="Play Anywhere"
              description="Enjoy the game on any device with a browser - desktop, tablet, or mobile."
              color="from-retro-dark-blue to-retro-purple"
            />
          </div>
          
          <div className="bg-retro-dark-gray p-6 rounded-lg mt-8 text-center">
            <h3 className="text-retro-yellow font-pixel text-lg mb-4">Ready to become a champion?</h3>
            <p className="text-retro-light-gray mb-6">
              Take control of your team, make strategic decisions, and experience the thrill of victory in Retro Bowl. 
              Are you up for the challenge?
            </p>
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-retro-red via-retro-yellow to-retro-green opacity-70 blur-lg animate-pulse-slow rounded-lg"></div>
              <Button 
                className="relative animate-button-pulse bg-retro-red hover:bg-retro-yellow text-white px-8 py-4 rounded-md font-pixel text-sm uppercase tracking-wider border-2 border-transparent hover:border-retro-blue"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>PLAY NOW</span>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto my-8 bg-retro-dark-gray rounded-lg p-6 animate-pixel-fade-in mx-4">
          <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">How To Play Retro Bowl Unblocked - Complete Beginner's Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InstructionCard 
              number="1" 
              title="Draft & Build Your Roster" 
              description="Start by drafting talented college players in the annual NFL draft. Scout prospects carefully, identify future stars, and build a balanced roster with star quarterbacks, reliable offensive linemen, explosive running backs, and lockdown defenders. Make strategic trades and free agent signings to fill roster gaps."
            />
            <InstructionCard 
              number="2" 
              title="Manage & Train Your Dynasty" 
              description="Invest in player development and facility upgrades. Train rookies to unlock their full potential, manage veteran contracts, handle player morale and injuries, balance the salary cap, and make tough roster decisions. Keep your team motivated and hungry for championships."
            />
            <InstructionCard 
              number="3" 
              title="Dominate On Game Day" 
              description="Take the field and call plays like a pro! Master passing mechanics, read defensive formations, execute running plays, manage the game clock, and drive your team down the field. Score touchdowns, win crucial playoff games, and capture the ultimate prize - the championship trophy!"
            />
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto my-8 px-4 animate-pixel-fade-in">
          <div className="bg-gradient-to-br from-retro-dark-blue to-retro-purple rounded-lg p-6 border border-retro-yellow">
            <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">🎮 What Makes Retro Bowl Unblocked Different?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-retro-light-gray">
              <div className="bg-retro-black bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-retro-white font-medium mb-2">✅ Truly Unblocked</h3>
                <p className="text-sm">Play anywhere - school, work, public WiFi. No restrictions, no firewalls, no VPN needed. Instant access from any browser without downloads or installations.</p>
              </div>
              <div className="bg-retro-black bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-retro-white font-medium mb-2">🎯 100% Free Forever</h3>
                <p className="text-sm">Zero costs, no hidden fees, no premium subscriptions, no ads blocking gameplay. Full game features available to everyone completely free.</p>
              </div>
              <div className="bg-retro-black bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-retro-white font-medium mb-2">📱 Cross-Platform Gaming</h3>
                <p className="text-sm">Seamlessly play on desktop, laptop, tablet, or mobile. Responsive controls optimized for touch screens and keyboard. Your progress syncs across devices.</p>
              </div>
              <div className="bg-retro-black bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-retro-white font-medium mb-2">⚡ Instant Loading</h3>
                <p className="text-sm">Lightning-fast load times with no downloads. Click and play immediately. Optimized for low-bandwidth connections and older devices.</p>
              </div>
              <div className="bg-retro-black bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-retro-white font-medium mb-2">🏆 Regular Updates</h3>
                <p className="text-sm">Constantly updated with new features, gameplay improvements, and bug fixes. Stay current with 2025's latest football gaming innovations.</p>
              </div>
              <div className="bg-retro-black bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-retro-white font-medium mb-2">💾 Auto-Save Progress</h3>
                <p className="text-sm">Never lose your dynasty! Automatic cloud-style saving via browser storage. Pick up right where you left off, even after closing your browser.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto my-8 px-4 animate-pixel-fade-in">
          <div className="bg-retro-dark-gray rounded-lg p-6">
            <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">🏈 Master the Game - Pro Tips for Success</h2>
            <div className="space-y-4 text-retro-light-gray">
              <div className="border-l-4 border-retro-green pl-4">
                <h3 className="text-retro-white font-medium mb-1">Draft Strategy</h3>
                <p className="text-sm">Focus on offensive line and quarterback first. A great QB with protection wins championships. Don't overspend on running backs early - find value in later rounds.</p>
              </div>
              <div className="border-l-4 border-retro-blue pl-4">
                <h3 className="text-retro-white font-medium mb-1">Salary Cap Management</h3>
                <p className="text-sm">Balance star power with depth. Keep 30-40% cap space for key positions. Let aging veterans go before they decline. Draft and develop rookies on cheap contracts.</p>
              </div>
              <div className="border-l-4 border-retro-yellow pl-4">
                <h3 className="text-retro-white font-medium mb-1">Game Day Execution</h3>
                <p className="text-sm">Master timing on pass plays. Read the defense pre-snap. Mix run and pass to keep defenses guessing. Clock management wins close games - know when to hurry up or run clock.</p>
              </div>
              <div className="border-l-4 border-retro-red pl-4">
                <h3 className="text-retro-white font-medium mb-1">Dynasty Building</h3>
                <p className="text-sm">Think long-term. Build through the draft, not free agency. Develop team chemistry. Invest in facilities for faster player development. Win consistently, not just once.</p>
              </div>
            </div>
          </div>
        </section>
        </article>
      </div>
    </Layout>
  );
};

const FeatureTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="bg-retro-blue px-4 py-2 rounded-full flex items-center gap-2 text-retro-white text-xs">
    {icon}
    <span>{text}</span>
  </div>
);

const GameFeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => (
  <div className={`bg-gradient-to-br ${color} rounded-lg p-5 border border-retro-gray hover:border-retro-yellow transition-all duration-300 h-full flex flex-col`}>
    <div className="bg-retro-black p-3 rounded-lg inline-flex items-center justify-center mb-3 mx-auto">
      {icon}
    </div>
    <h3 className="text-retro-white font-medium mb-2 text-center">{title}</h3>
    <p className="text-retro-light-gray text-sm mt-auto text-center">{description}</p>
  </div>
);

const InstructionCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-4 border border-retro-gray hover:border-retro-yellow transition-colors duration-200">
    <div className="w-10 h-10 bg-retro-red rounded-full flex items-center justify-center mb-3 mx-auto">
      <span className="font-pixel text-retro-white">{number}</span>
    </div>
    <h3 className="text-retro-white font-medium text-center mb-2">{title}</h3>
    <p className="text-retro-light-gray text-sm text-center">{description}</p>
  </div>
);

export default Index;
