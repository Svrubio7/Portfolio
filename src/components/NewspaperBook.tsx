"use client";

import { motion } from "framer-motion";
import { Children, ReactNode, useEffect, useRef, useState } from "react";

/**
 * Boundary-triggered page flip with full mobile support:
 *  • Wheel (desktop): scrolls the inner page until edge, then flips on next tick.
 *  • Swipe (mobile):  same behaviour using touch events.
 *  • Keyboard:        ←/→ and PageUp/PageDown.
 *  • Buttons:         left/right floating arrow buttons + page indicator.
 *  • Uses dvh (dynamic viewport) so iOS Safari's URL bar doesn't cut content.
 */
export default function NewspaperBook({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  const numPages = childArray.length;

  const [currentPage, setCurrentPage] = useState(0);
  const isFlippingRef = useRef(false);
  const currentPageRef = useRef(0);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const flip = (direction: 1 | -1) => {
      if (isFlippingRef.current) return;
      const cur = currentPageRef.current;
      const next = cur + direction;
      if (next < 0 || next >= numPages) return;
      isFlippingRef.current = true;
      setCurrentPage(next);
      setTimeout(() => {
        isFlippingRef.current = false;
      }, 1700);
    };

    // Wheel handler (desktop / trackpad)
    const handleWheel = (e: WheelEvent) => {
      if (isFlippingRef.current) {
        e.preventDefault();
        return;
      }
      const inner = innerRefs.current[currentPageRef.current];
      if (!inner) return;

      const atBottom =
        inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 5;
      const atTop = inner.scrollTop <= 1;

      if (e.deltaY > 0 && atBottom && currentPageRef.current < numPages - 1) {
        e.preventDefault();
        flip(1);
      } else if (e.deltaY < 0 && atTop && currentPageRef.current > 0) {
        e.preventDefault();
        flip(-1);
      }
    };

    // Touch handlers (mobile / tablet)
    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;
    let touchInnerScrollAtStart = 0;

    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      touchStartY = t.clientY;
      touchStartX = t.clientX;
      touchStartTime = Date.now();
      const inner = innerRefs.current[currentPageRef.current];
      touchInnerScrollAtStart = inner ? inner.scrollTop : 0;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isFlippingRef.current) return;
      const t = e.changedTouches[0];
      const dy = touchStartY - t.clientY; // > 0 = swipe up
      const dx = touchStartX - t.clientX;
      const dt = Date.now() - touchStartTime;

      const inner = innerRefs.current[currentPageRef.current];
      if (!inner) return;
      const atBottom =
        inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 5;
      const atTop = inner.scrollTop <= 1;
      const innerDidScroll = Math.abs(inner.scrollTop - touchInnerScrollAtStart) > 5;

      // Horizontal swipe always flips (clear intent: turn page)
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 700) {
        if (dx > 0 && currentPageRef.current < numPages - 1) flip(1);
        else if (dx < 0 && currentPageRef.current > 0) flip(-1);
        return;
      }

      // Vertical swipe at edge flips (avoid accidental flip if user was scrolling)
      if (Math.abs(dy) > 60 && dt < 700 && !innerDidScroll) {
        if (dy > 0 && atBottom && currentPageRef.current < numPages - 1) flip(1);
        else if (dy < 0 && atTop && currentPageRef.current > 0) flip(-1);
      }
    };

    // Keyboard navigation
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        flip(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        flip(-1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    };
  }, [numPages]);

  const goNext = () => {
    if (isFlippingRef.current || currentPage >= numPages - 1) return;
    isFlippingRef.current = true;
    setCurrentPage((p) => p + 1);
    setTimeout(() => {
      isFlippingRef.current = false;
    }, 1700);
  };

  const goPrev = () => {
    if (isFlippingRef.current || currentPage <= 0) return;
    isFlippingRef.current = true;
    setCurrentPage((p) => p - 1);
    setTimeout(() => {
      isFlippingRef.current = false;
    }, 1700);
  };

  return (
    <div
      className="fixed inset-0 z-[1] overflow-hidden bg-paper-edge"
      style={{ perspective: "2400px", height: "100dvh" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(40,30,20,0.18) 100%)",
        }}
      />

      <div
        className="absolute top-0 bottom-0 left-0 w-3 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to right, rgba(20,15,10,0.45), rgba(20,15,10,0))",
        }}
      />

      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {childArray.map((child, i) => {
          const isFlipped = i < currentPage;
          return (
            <motion.div
              key={i}
              animate={{ rotateY: isFlipped ? -180 : 0 }}
              transition={{
                duration: 1.6,
                ease: [0.32, 0.72, 0.24, 1],
              }}
              style={{
                position: "absolute",
                inset: 0,
                transformOrigin: "left center",
                backfaceVisibility: "hidden",
                zIndex: numPages - i,
                willChange: "transform",
                boxShadow: isFlipped
                  ? "0 0 0 rgba(0,0,0,0)"
                  : "0 5px 25px rgba(20,10,0,0.15)",
              }}
              className="bg-paper paper-texture overflow-hidden"
            >
              <div
                ref={(el) => {
                  innerRefs.current[i] = el;
                }}
                className="w-full h-full overflow-y-auto overflow-x-hidden"
                style={{
                  WebkitOverflowScrolling: "touch",
                  overscrollBehavior: "contain",
                }}
              >
                {child}
              </div>

              {i < numPages - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-2 pointer-events-none bg-gradient-to-l from-ink/12 to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Page indicator */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-paper/90 backdrop-blur-sm border border-ink/30 px-3 py-1.5 rounded-full shadow-sm">
        {Array.from({ length: numPages }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-ink"
            style={{
              opacity: i === currentPage ? 1 : 0.3,
              transform: `scale(${i === currentPage ? 1.5 : 1})`,
              transition: "all 0.4s ease",
            }}
          />
        ))}
        <span className="smcp text-[10px] text-ink-soft ml-1 normal-case tracking-wide">
          §{currentPage + 1} of {numPages}
        </span>
      </div>

      {/* Next button — bigger touch target on mobile */}
      {currentPage < numPages - 1 && (
        <button
          onClick={goNext}
          aria-label="Next page"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-paper/90 backdrop-blur-sm border border-ink/40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-ink hover:bg-paper hover:scale-110 active:scale-95 transition-all shadow-md text-xl sm:text-2xl font-display"
        >
          →
        </button>
      )}

      {/* Prev button */}
      {currentPage > 0 && (
        <button
          onClick={goPrev}
          aria-label="Previous page"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-paper/90 backdrop-blur-sm border border-ink/40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-ink hover:bg-paper hover:scale-110 active:scale-95 transition-all shadow-md text-xl sm:text-2xl font-display"
        >
          ←
        </button>
      )}

      {/* Bottom hint — mobile and desktop variants */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 smcp text-[10px] text-ink-soft bg-paper/70 backdrop-blur-sm border border-ink/20 px-3 py-1 rounded-full pointer-events-none whitespace-nowrap max-w-[92vw]"
      >
        <span className="hidden sm:inline">
          scroll to bottom of page → flip · ← → keys also work
        </span>
        <span className="sm:hidden">swipe to flip</span>
      </motion.div>
    </div>
  );
}
