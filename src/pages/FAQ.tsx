import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { HelpCircle, RefreshCw, MessageSquare, Settings, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import RetroScoreboardTicker from '@/components/game/RetroScoreboardTicker';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Retro Bowl Unblocked save my season and dynasty progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Retro Bowl automatically saves your active season, coaching credits, hall of fame, and roster records in your browser's local storage. Additionally, our website provides a Save Data Manager button that lets you export your raw save data to Google Docs or Google Keep so you never lose progress if cookies are cleared."
        }
      },
      {
        "@type": "Question",
        "name": "How do you throw a bullet pass in Retro Bowl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While drawing back your pass, tap the screen with a second finger on mobile/touchscreen, or press the Spacebar on your keyboard. The passing arc will flatten into a straight bullet trajectory that flies past jumping linebackers."
        }
      },
      {
        "@type": "Question",
        "name": "How do I play Retro Bowl on a school Chromebook without getting blocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can play Retro Bowl Unblocked directly on RetroBowlUnblocked.biz. If your school's network filter blocks a server, simply click the 'Server' button on our game player to switch to Server 2 or Server 3, which route through educational cloud proxies that bypass GoGuardian and Securly."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum salary cap in Retro Bowl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The default salary cap starts at $200 Million. You can spend 100 Coaching Credits in the Front Office screen to permanently expand your salary cap by +$25 Million up to $300 Million (or $375 Million in expanded modes)."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Retro Bowl Unblocked FAQ (2026) ❓ Answers, Saves & Help"
        description="Got questions about Retro Bowl Unblocked? Find answers on game saves, controls, bullet passes, school Chromebook unblocking, and salary cap cheats."
        keywords="retro bowl FAQ, retro bowl questions, how does retro bowl save, retro bowl school chromebook, retro bowl salary cap questions"
        canonicalUrl="https://retrobowlunblocked.biz/faq"
        jsonLd={jsonLd}
      />

      <RetroScoreboardTicker />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-retro-yellow font-pixel text-2xl sm:text-3xl mb-4 animate-pixel-fade-in">
              ❓ FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-retro-light-gray text-sm max-w-2xl mx-auto">
              Everything you need to know about playing, saving, optimizing, and dominating Retro Bowl Unblocked in 2026.
            </p>
          </div>

          <DirectAnswerBox 
            question="Does Retro Bowl Unblocked save my season and dynasty progress?"
            answer="Yes! Your franchise progress, player ratings, coaching credits, and championship rings are permanently stored in your browser's local storage. Furthermore, our website includes an integrated Save Backup Manager directly below the game screen so you can copy your save string to Google Docs or cloud notes anytime."
            keyTakeaway="Never worry about school cookie wipes again—use the Backup Save Data feature."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-retro-dark-blue p-4 rounded-xl border border-retro-gray text-center">
              <RefreshCw className="text-retro-yellow mx-auto mb-2" size={24} />
              <h3 className="font-pixel text-xs text-retro-white mb-1">Game Saves & Tech</h3>
              <p className="text-retro-light-gray text-xs">Storage, backups, and 60 FPS performance</p>
            </div>
            <div className="bg-retro-dark-blue p-4 rounded-xl border border-retro-gray text-center">
              <MessageSquare className="text-retro-green mx-auto mb-2" size={24} />
              <h3 className="font-pixel text-xs text-retro-white mb-1">Gameplay & Playbook</h3>
              <p className="text-retro-light-gray text-xs">Pass mechanics, routes, and coverages</p>
            </div>
            <div className="bg-retro-dark-blue p-4 rounded-xl border border-retro-gray text-center">
              <Settings className="text-retro-red mx-auto mb-2" size={24} />
              <h3 className="font-pixel text-xs text-retro-white mb-1">Franchise & Salary</h3>
              <p className="text-retro-light-gray text-xs">Cap limits, drafting, and trades</p>
            </div>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Does the game keep my save file when I close my browser?"
              answer="Yes! Your save state is preserved automatically via HTML5 localStorage. If you are playing on a school Chromebook that wipes cookies upon logout, make sure to use our Backup Save Data button to copy your save code to Google Docs before logging out."
            />
            
            <FAQItem 
              question="How do I throw a bullet pass instead of a high lob?"
              answer="On PC or Chromebook, pull back to aim with your mouse and tap the SPACEBAR before releasing. On mobile or touchscreen, tap the screen with a second finger while aiming. The throw arc will flatten into a rapid laser bullet pass."
            />
            
            <FAQItem 
              question="How do I get more Coaching Credits (CC) quickly?"
              answer="The best way to farm CC is to upgrade your Stadium facilities early. When your fan rating reaches 80% to 100%, you receive +3 Coaching Credits after every single regular season and playoff victory."
            />
            
            <FAQItem 
              question="How do I raise the team salary cap from $200M to $300M?"
              answer="In the Front Office screen, tap the Salary Cap card. You can purchase permanent cap increases of +$25 Million for 100 Coaching Credits. You can repeat this up to the maximum cap ceiling."
            />
            
            <FAQItem 
              question="What is the difference between Retro Bowl and Retro Bowl College?"
              answer="In Retro Bowl College, you manage collegiate athletic programs with 4-year eligibility limits, high school recruiting, scholarship budgets, and GPA academic rules instead of the NFL draft and pro salary cap. Visit our Retro Bowl College page to play!"
            />
            
            <FAQItem 
              question="Can I play on school Chromebooks without getting blocked by GoGuardian?"
              answer="Yes! We provide 3 multi-server failovers running on educational cloud mirrors. If Server 1 is restricted, simply switch to Server 2 or Server 3 using the server selector in our game header toolbar."
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/">
              <span className="bg-retro-yellow hover:bg-white text-black font-pixel text-xs px-6 py-3 rounded-lg shadow-lg font-bold inline-block transition-colors">
                🏈 RETURN TO RETRO BOWL GAME
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="bg-retro-dark-blue rounded-xl p-5 border border-retro-gray/70 hover:border-retro-yellow transition-colors">
    <h3 className="text-retro-yellow font-pixel text-xs sm:text-sm mb-2 flex items-start gap-2">
      <CheckCircle2 size={16} className="text-retro-green flex-shrink-0 mt-0.5" />
      <span>{question}</span>
    </h3>
    <p className="text-retro-light-gray text-xs sm:text-sm leading-relaxed pl-6">{answer}</p>
  </div>
);

export default FAQ;
