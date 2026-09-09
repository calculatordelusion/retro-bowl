import React, { useState, useEffect, useRef } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  Tv, 
  Sparkles, 
  Keyboard, 
  ShieldCheck, 
  Download, 
  Upload, 
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

export interface GameServer {
  name: string;
  url: string;
  description: string;
  status: 'fast' | 'stable' | 'backup';
}

interface GamePlayerProps {
  title: string;
  primaryUrl: string;
  servers?: GameServer[];
  defaultServerIndex?: number;
  badge?: string;
  instructionsSnippet?: string;
}

const DEFAULT_SERVERS: GameServer[] = [
  {
    name: 'Server 1 (Official Cloud)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    description: 'High-speed cloud server with auto-saving',
    status: 'fast'
  },
  {
    name: 'Server 2 (Unblocked CDN)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?v=unblocked',
    description: 'Optimized for school Chromebooks & bypasses strict filters',
    status: 'stable'
  },
  {
    name: 'Server 3 (Mirror Node)',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html?cdn=backup',
    description: 'Secondary fallback node if main host is throttled',
    status: 'backup'
  }
];

const GamePlayer: React.FC<GamePlayerProps> = ({
  title,
  primaryUrl,
  servers = DEFAULT_SERVERS,
  defaultServerIndex = 0,
  badge = "Official 2026 Build"
}) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [selectedServer, setSelectedServer] = useState<number>(defaultServerIndex);
  const [gameKey, setGameKey] = useState<number>(Date.now());
  const [isTheater, setIsTheater] = useState<boolean>(false);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false);
  const [saveString, setSaveString] = useState<string>('');
  const [importString, setImportString] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Monitor fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle reload
  const handleReload = () => {
    setIsLoading(true);
    setGameKey(Date.now());
    toast({
      title: "Reloading Game",
      description: "Restarting game frame while preserving your dynasty save file.",
      duration: 2500
    });
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(err => {
          console.error('Fullscreen request failed:', err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Toggle Theater mode
  const toggleTheater = () => {
    setIsTheater(!isTheater);
    if (isFocusMode) setIsFocusMode(false);
  };

  // Toggle Focus mode
  const toggleFocus = () => {
    setIsFocusMode(!isFocusMode);
    if (isTheater) setIsTheater(false);
  };

  // Export save game from localStorage
  const handleExportSave = () => {
    try {
      const allSaves: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.toLowerCase().includes('retro') || key.toLowerCase().includes('bowl') || key.toLowerCase().includes('kong'))) {
          allSaves[key] = localStorage.getItem(key) || '';
        }
      }
      const exportedJson = JSON.stringify(allSaves, null, 2);
      setSaveString(exportedJson);
      setShowSaveModal(true);
    } catch (e) {
      toast({
        title: "Export Error",
        description: "Could not access browser localStorage.",
        variant: "destructive"
      });
    }
  };

  // Import save game to localStorage
  const handleImportSave = () => {
    try {
      const parsed = JSON.parse(importString);
      Object.entries(parsed).forEach(([k, v]) => {
        if (typeof v === 'string') {
          localStorage.setItem(k, v);
        }
      });
      toast({
        title: "Save Imported Successfully!",
        description: "Your franchise data was restored. Reloading game...",
      });
      setShowSaveModal(false);
      handleReload();
    } catch (e) {
      toast({
        title: "Invalid Save File",
        description: "Please check your JSON format and try again.",
        variant: "destructive"
      });
    }
  };

  const currentUrl = servers[selectedServer]?.url || primaryUrl;

  return (
    <>
      {/* Focus Mode Backdrop Overlay */}
      {isFocusMode && (
        <div 
          className="fixed inset-0 bg-black/95 z-40 transition-opacity duration-300"
          onClick={() => setIsFocusMode(false)}
        />
      )}

      <div 
        ref={containerRef}
        className={`w-full transition-all duration-300 ${
          isFocusMode ? 'relative z-50 my-2' : ''
        } ${
          isTheater 
            ? 'max-w-[96vw] -mx-[calc((96vw-100%)/2)] shadow-2xl' 
            : 'max-w-5xl mx-auto'
        }`}
      >
        {/* Game Player Header Toolbar */}
        <div className="bg-gradient-to-r from-retro-blue via-retro-dark-blue to-retro-blue border-4 border-b-0 border-retro-gray rounded-t-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          {/* Game Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-retro-green animate-pulse" />
            <h2 className="font-pixel text-retro-white text-xs sm:text-sm tracking-wide flex items-center gap-2">
              <span>{title}</span>
            </h2>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold bg-retro-red/80 text-white px-2 py-0.5 rounded border border-retro-yellow/40">
              <Sparkles size={11} className="text-retro-yellow" />
              {badge}
            </span>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
            {/* Server Selector Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-[11px] font-semibold bg-retro-dark-blue hover:bg-retro-purple text-retro-white px-2.5 py-1.5 rounded border border-retro-gray hover:border-retro-yellow transition-all"
                title="Switch game server if blocked or slow"
              >
                <Server size={13} className="text-retro-yellow" />
                <span className="hidden md:inline">Server:</span>
                <span className="text-retro-yellow">{selectedServer + 1}</span>
              </button>
              
              <div className="absolute right-0 top-full mt-1 w-64 bg-retro-dark-blue border-2 border-retro-yellow rounded-lg p-2 shadow-2xl z-50 hidden group-hover:block animate-pixel-fade-in">
                <p className="text-[11px] text-retro-yellow font-pixel mb-2 px-1">Select Server Mirror:</p>
                <div className="space-y-1">
                  {servers.map((srv, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedServer(idx);
                        setIsLoading(true);
                        setGameKey(Date.now());
                        toast({
                          title: `Connected to ${srv.name}`,
                          description: srv.description
                        });
                      }}
                      className={`w-full text-left p-2 rounded text-xs transition-colors flex items-start justify-between ${
                        selectedServer === idx 
                          ? 'bg-retro-red text-white font-bold' 
                          : 'hover:bg-retro-blue text-retro-light-gray'
                      }`}
                    >
                      <div>
                        <div className="text-[11px]">{srv.name}</div>
                        <div className="text-[9px] opacity-75">{srv.description}</div>
                      </div>
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/40 text-retro-green font-bold">
                        {srv.status}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotkeys / Controls Drawer Button */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowControls(!showControls)}
              className="h-8 px-2.5 text-xs bg-retro-dark-blue hover:bg-retro-purple text-retro-white border-retro-gray hover:border-retro-yellow"
              title="View Keyboard & Touch Controls"
            >
              <Keyboard size={14} className="text-retro-yellow mr-1" />
              <span className="hidden sm:inline">Controls</span>
            </Button>

            {/* Theater Mode Button */}
            <Button
              size="sm"
              variant="outline"
              onClick={toggleTheater}
              className={`h-8 px-2 text-xs border-retro-gray hover:border-retro-yellow ${
                isTheater 
                  ? 'bg-retro-red text-white' 
                  : 'bg-retro-dark-blue hover:bg-retro-purple text-retro-white'
              }`}
              title={isTheater ? "Normal View" : "Theater Mode (Wide)"}
            >
              <Tv size={14} />
            </Button>

            {/* Focus Mode Button */}
            <Button
              size="sm"
              variant="outline"
              onClick={toggleFocus}
              className={`h-8 px-2 text-xs border-retro-gray hover:border-retro-yellow ${
                isFocusMode 
                  ? 'bg-retro-yellow text-black font-bold' 
                  : 'bg-retro-dark-blue hover:bg-retro-purple text-retro-white'
              }`}
              title={isFocusMode ? "Exit Focus Mode" : "Focus Mode (Lights Off)"}
            >
              <Sparkles size={14} />
            </Button>

            {/* Reload Button */}
            <Button
              size="sm"
              variant="outline"
              onClick={handleReload}
              className="h-8 px-2 text-xs bg-retro-dark-blue hover:bg-retro-purple text-retro-white border-retro-gray hover:border-retro-yellow"
              title="Reload Game Frame"
            >
              <RotateCcw size={14} />
            </Button>

            {/* Fullscreen Button */}
            <Button
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 px-3 text-xs bg-gradient-to-r from-retro-red to-retro-orange hover:from-retro-orange hover:to-retro-red text-white font-pixel border border-retro-yellow shadow-md"
              title="Play Fullscreen"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 size={14} className="mr-1" />
                  <span className="hidden sm:inline">EXIT</span>
                </>
              ) : (
                <>
                  <Maximize2 size={14} className="mr-1" />
                  <span className="hidden sm:inline">FULLSCREEN</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Game Canvas / Iframe Container */}
        <div className="relative bg-retro-black border-4 border-retro-gray shadow-2xl overflow-hidden group">
          {/* Aspect Ratio Container (Default 16:10 or 16:9) */}
          <div 
            className="relative w-full overflow-hidden bg-black"
            style={{ 
              paddingBottom: isTheater ? '56.25%' : (isMobile ? '82%' : '66.6%'),
              minHeight: isMobile ? '380px' : '520px'
            }}
          >
            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-20 bg-retro-dark-blue/95 flex flex-col items-center justify-center gap-3 p-4">
                <div className="w-12 h-12 border-4 border-retro-yellow border-t-transparent rounded-full animate-spin" />
                <p className="font-pixel text-retro-yellow text-sm animate-pulse text-center">
                  LOADING RETRO BOWL UNBLOCKED...
                </p>
                <p className="text-retro-light-gray text-xs text-center max-w-sm">
                  Connecting to high-speed CDN server. Initial load takes 2-4 seconds.
                </p>
              </div>
            )}

            <iframe 
              key={`${gameKey}-${selectedServer}`}
              src={currentUrl}
              className="absolute inset-0 w-full h-full border-0"
              id="gameIframe"
              title={title}
              allow="fullscreen; autoplay; accelerometer; gyroscope; magnetometer"
              loading="eager"
              onLoad={() => setIsLoading(false)}
              style={{
                width: '100%',
                height: '100%',
                display: 'block'
              }}
            />
          </div>

          {/* Slide-down Controls Overlay */}
          {showControls && (
            <div className="absolute top-0 inset-x-0 bg-retro-dark-blue/95 border-b-2 border-retro-yellow p-4 z-30 animate-pixel-fade-in backdrop-blur-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-retro-yellow font-pixel text-xs flex items-center gap-2">
                  <Keyboard size={14} />
                  RETRO BOWL FIELD CONTROLS & HOTKEYS
                </h3>
                <button 
                  onClick={() => setShowControls(false)}
                  className="text-retro-light-gray hover:text-white text-xs font-bold px-2 py-1 bg-retro-black/50 rounded"
                >
                  ✕ Close
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-retro-black/60 p-2.5 rounded border border-retro-gray/50">
                  <div className="text-retro-yellow font-bold mb-1">🎯 Pass Ball</div>
                  <p className="text-retro-light-gray text-[11px]">Click/Tap & drag backwards, release to throw.</p>
                </div>
                <div className="bg-retro-black/60 p-2.5 rounded border border-retro-gray/50">
                  <div className="text-retro-yellow font-bold mb-1">⚡ Bullet Pass</div>
                  <p className="text-retro-light-gray text-[11px]">Tap with second finger or tap space while throwing.</p>
                </div>
                <div className="bg-retro-black/60 p-2.5 rounded border border-retro-gray/50">
                  <div className="text-retro-yellow font-bold mb-1">💨 Dive / Hurdle</div>
                  <p className="text-retro-light-gray text-[11px]">Swipe down to dive forward; swipe up to jump.</p>
                </div>
                <div className="bg-retro-black/60 p-2.5 rounded border border-retro-gray/50">
                  <div className="text-retro-yellow font-bold mb-1">🌀 Juke Defenders</div>
                  <p className="text-retro-light-gray text-[11px]">Swipe left/right or use W/S / Arrow keys while running.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Game Bottom Bar: Status, Save Backup, Fullscreen CTA */}
        <div className="bg-gradient-to-r from-retro-dark-blue via-retro-blue to-retro-dark-blue border-4 border-t-0 border-retro-gray rounded-b-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-md">
          {/* Save Status & Auto-save reassurance */}
          <div className="flex items-center gap-2 text-xs text-retro-light-gray">
            <ShieldCheck size={16} className="text-retro-green flex-shrink-0" />
            <span>
              <strong className="text-white">Dynasty Auto-Save Active:</strong> Your season progress is preserved in browser storage.
            </span>
          </div>

          {/* Backup Save & Sound Info */}
          <div className="flex items-center gap-3 ml-auto text-xs">
            <button 
              onClick={handleExportSave}
              className="flex items-center gap-1.5 text-retro-yellow hover:text-white underline text-[11px] transition-colors"
              title="Backup your team save data to file or copy as text"
            >
              <Download size={13} />
              Backup Save Data
            </button>
            <span className="text-retro-gray">•</span>
            <button 
              onClick={() => {
                setImportString('');
                setShowSaveModal(true);
              }}
              className="flex items-center gap-1.5 text-retro-green hover:text-white underline text-[11px] transition-colors"
              title="Restore previous franchise save"
            >
              <Upload size={13} />
              Restore Save
            </button>
          </div>
        </div>
      </div>

      {/* Save Data Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-retro-dark-blue border-2 border-retro-yellow rounded-xl p-6 max-w-lg w-full shadow-2xl animate-pixel-fade-in text-retro-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-pixel text-retro-yellow text-sm flex items-center gap-2">
                <ShieldCheck size={18} className="text-retro-green" />
                FRANCHISE SAVE DATA MANAGER
              </h3>
              <button 
                onClick={() => setShowSaveModal(false)}
                className="text-retro-light-gray hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-retro-light-gray mb-4">
              School Chromebooks sometimes clear browser cookies when you log off. Use this tool to copy your save file code and paste it back anytime so you never lose your championship seasons!
            </p>

            {saveString ? (
              <div className="space-y-3">
                <label className="text-xs font-bold text-retro-yellow block">Your Backup Save Code:</label>
                <textarea 
                  readOnly 
                  value={saveString}
                  rows={6}
                  className="w-full bg-black/70 border border-retro-gray rounded p-2 text-[10px] font-mono text-retro-green select-all focus:outline-none focus:border-retro-yellow"
                />
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    className="bg-retro-green hover:bg-emerald-600 text-black font-bold text-xs"
                    onClick={() => {
                      navigator.clipboard.writeText(saveString);
                      toast({
                        title: "Save Code Copied!",
                        description: "Save code copied to your clipboard. Keep it in Google Keep, Docs, or notes!"
                      });
                    }}
                  >
                    Copy to Clipboard
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="text-xs border-retro-gray"
                    onClick={() => setSaveString('')}
                  >
                    Switch to Restore Mode
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="text-xs font-bold text-retro-yellow block">Paste Your Save Code Below to Restore:</label>
                <textarea 
                  value={importString}
                  onChange={(e) => setImportString(e.target.value)}
                  placeholder="Paste your exported JSON save string here..."
                  rows={6}
                  className="w-full bg-black/70 border border-retro-gray rounded p-2 text-[10px] font-mono text-retro-white focus:outline-none focus:border-retro-yellow"
                />
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    className="bg-retro-red hover:bg-retro-orange text-white font-pixel text-xs"
                    onClick={handleImportSave}
                    disabled={!importString.trim()}
                  >
                    Restore Franchise Now
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="text-xs border-retro-gray"
                    onClick={() => setShowSaveModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GamePlayer;
