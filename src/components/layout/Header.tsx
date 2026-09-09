import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, GraduationCap, Zap, Flame, BookOpen, Gamepad2, School, Github, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Play', path: '/', icon: <Trophy size={14} className="text-retro-yellow" /> },
    { name: 'College', path: '/retro-bowl-college', icon: <GraduationCap size={14} className="text-retro-green" />, badge: 'HOT' },
    { name: 'RB 25', path: '/retro-bowl-25', icon: <Zap size={14} className="text-retro-orange" />, badge: 'NEW' },
    { name: 'GitHub Mirror', path: '/retro-bowl-github', icon: <Github size={14} className="text-white" /> },
    { name: 'Retro Goal', path: '/retro-goal', icon: <Trophy size={14} className="text-emerald-400" /> },
    { name: '2-Player', path: '/retro-ping-pong', icon: <Users size={14} className="text-purple-400" /> },
    { name: 'Best Teams', path: '/best-teams', icon: <Star size={14} className="text-retro-yellow" /> },
    { name: 'Playbook', path: '/playbook', icon: <BookOpen size={14} className="text-blue-400" /> },
    { name: 'Cheats', path: '/cheats-and-secrets', icon: <Flame size={14} className="text-retro-red" /> },
  ];

  return (
    <div className="fixed top-2 sm:top-3 left-0 right-0 z-50 px-2 sm:px-4 max-w-7xl mx-auto w-full transition-all duration-300 pointer-events-none">
      <header className={`pointer-events-auto bg-retro-dark-blue/90 backdrop-blur-xl border-2 transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? 'border-retro-yellow shadow-[0_12px_40px_rgba(255,204,0,0.2)] bg-retro-dark-blue/95' 
          : 'border-retro-purple/80 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
      }`}>
        <div className="px-3 sm:px-5 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2.5 group flex-shrink-0"
              onClick={handleNavClick}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-retro-red to-retro-orange rounded-lg border-2 border-retro-yellow flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="font-pixel text-[10px] sm:text-xs text-retro-white">RB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-pixel text-retro-yellow text-xs sm:text-sm group-hover:text-white transition-colors tracking-wide">
                  RETRO BOWL
                </span>
                <span className="text-[8px] sm:text-[9px] text-retro-light-gray font-bold tracking-widest uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-retro-green animate-pulse" />
                  UNBLOCKED 2026
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-retro-red text-white shadow-md border border-retro-yellow/60'
                        : 'text-retro-light-gray hover:text-retro-white hover:bg-retro-blue/80'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[8px] font-pixel bg-retro-yellow text-black px-1 rounded font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Play CTA */}
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/">
                <Button size="sm" className="bg-gradient-to-r from-retro-green to-emerald-600 hover:from-emerald-600 hover:to-retro-green text-black font-pixel text-[10px] px-3 py-1 border border-retro-yellow/50 shadow-md">
                  PLAY NOW
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="xl:hidden text-retro-white hover:bg-retro-purple/50 rounded-lg h-8 w-8"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <nav className="xl:hidden mt-2 pt-2.5 border-t border-retro-purple/60 pb-1 animate-pixel-fade-in grid grid-cols-2 gap-1 sm:grid-cols-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between p-2 rounded-lg text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-retro-red text-white'
                        : 'text-retro-light-gray hover:bg-retro-blue hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      {item.icon}
                      <span className="truncate">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[8px] font-pixel bg-retro-yellow text-black px-1 rounded font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
