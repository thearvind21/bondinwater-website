import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const hasCompletedRef = useRef(false);

  const completePreloader = () => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setProgress(100);
    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onComplete, 650);
    }, 450);
  };

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    if (mq.matches) {
      setProgress(100);
      setIsLoaded(true);
      onComplete();
      return;
    }

    const startTime = Date.now();
    const MIN_DISPLAY_TIME = 1500; // Elegant minimum presentation time (target ~1.5 - 2.2s)
    let assetsLoaded = false;

    // Track critical font and hero image loading
    const checkAssetsReady = async () => {
      try {
        // 1. Font readiness
        if ('fonts' in document) {
          await document.fonts.ready;
        }
        setProgress(50);

        // 2. Critical Hero and Emblem Image Readiness
        const imagesToLoad = [
          '/brand/bondinwater-original-emblem.png',
          '/assets/generated/hero-koi-pond.jpg',
        ];

        let loadedCount = 0;
        await Promise.all(
          imagesToLoad.map(
            (src) =>
              new Promise<void>((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = img.onerror = () => {
                  loadedCount++;
                  setProgress(50 + Math.round((loadedCount / imagesToLoad.length) * 45));
                  resolve();
                };
              })
          )
        );

        assetsLoaded = true;
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

        setTimeout(() => {
          completePreloader();
        }, remaining);
      } catch {
        completePreloader();
      }
    };

    checkAssetsReady();

    // Hard fallback safety timeout to ensure visitor is never trapped
    const safetyTimeout = setTimeout(() => {
      completePreloader();
    }, 2400);

    return () => clearTimeout(safetyTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07150C] text-white select-none overflow-hidden"
          role="dialog"
          aria-label="Loading BondInWater"
          aria-live="polite"
        >
          {/* Subtle deep forest water gradient surface */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#143021]/60 via-[#0A1A10]/85 to-[#061109] pointer-events-none" />

          {/* Centred Brand Composition: One circular frame enclosing the emblem */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            {/* The Centered Circular Frame enclosing the Original Emblem */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center mb-7">
              {/* Single Circular Frame that gently draws on and illuminates */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                viewBox="0 0 176 176"
                aria-hidden="true"
              >
                {/* Base subtle circular track */}
                <circle
                  cx="88"
                  cy="88"
                  r="84"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.2"
                />
                {/* Drawn highlight stroke */}
                {!reducedMotion && (
                  <motion.circle
                    cx="88"
                    cy="88"
                    r="84"
                    fill="none"
                    stroke="rgba(37, 172, 218, 0.65)"
                    strokeWidth="1.5"
                    strokeDasharray="528"
                    initial={{ strokeDashoffset: 528 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </svg>

              {/* Gentle single circular aura illumination */}
              <div className="absolute inset-0 rounded-full border border-[#25ACDA]/20 shadow-[0_0_24px_rgba(37,172,218,0.12)] pointer-events-none" />

              {/* The Original BondInWater Emblem with internal light sheen animation */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                {/* Base Original Emblem artwork - exact proportions and colours */}
                <img
                  src="/brand/bondinwater-original-emblem.png"
                  alt="BondInWater Emblem"
                  className="w-full h-full object-contain relative z-10 select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(37,172,218,0.15)]"
                />

                {/* Internal Aqua Highlight & Flowing Light — constrained strictly inside the emblem silhouette */}
                {!reducedMotion && (
                  <div
                    className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                    style={{
                      maskImage: "url('/brand/bondinwater-original-emblem.png')",
                      WebkitMaskImage: "url('/brand/bondinwater-original-emblem.png')",
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                    }}
                    aria-hidden="true"
                  >
                    {/* 1. Subtle flowing-light pulse within the original emblem silhouette */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 50%, rgba(37, 172, 218, 0.45) 0%, rgba(22, 105, 187, 0.2) 65%, transparent 100%)',
                        mixBlendMode: 'screen',
                      }}
                      animate={{
                        opacity: [0.18, 0.58, 0.18],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* 2. Soft aqua highlight travelling smoothly along the emblem curves */}
                    <motion.div
                      className="absolute w-[220%] h-[220%] -top-[60%] -left-[60%]"
                      style={{
                        background:
                          'linear-gradient(135deg, transparent 38%, rgba(37, 172, 218, 0.3) 46%, rgba(180, 240, 255, 0.85) 50%, rgba(37, 172, 218, 0.35) 54%, transparent 62%)',
                        mixBlendMode: 'screen',
                      }}
                      animate={{
                        x: ['-45%', '55%'],
                        y: ['-45%', '55%'],
                      }}
                      transition={{
                        duration: 2.3,
                        repeat: Infinity,
                        repeatDelay: 0.7,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                    />

                    {/* 3. Secondary flowing water-light ripple within the silhouette */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(37, 172, 218, 0.3) 0%, transparent 70%)',
                        mixBlendMode: 'screen',
                      }}
                      animate={{
                        opacity: [0.1, 0.4, 0.1],
                        y: ['8%', '-5%', '8%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Live Text Wordmark */}
            <h2 className="text-lg sm:text-xl font-light tracking-[0.35em] text-white uppercase mb-2 font-sans">
              B O N D I N W A T E R
            </h2>

            {/* Subtitle / Tagline */}
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#8CA595] uppercase font-sans mb-8">
              CREATING LIVING ECOSYSTEMS
            </p>

            {/* Minimalist Progress Line Tied to Actual Asset Readiness */}
            <div className="w-44 sm:w-56 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#25ACDA]/70 via-[#B4644E] to-[#B4644E]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          {/* Quick Skip for accessibility and instant review */}
          <button
            onClick={completePreloader}
            className="absolute bottom-6 right-6 text-xs text-white/40 hover:text-white/80 transition-colors tracking-widest uppercase font-mono px-3 py-1.5 rounded border border-white/10 hover:border-white/30"
          >
            Skip Intro [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
