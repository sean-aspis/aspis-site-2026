'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Back to top.
 *
 * Pages on this site run long — an industry page is eight to twelve thousand
 * pixels — so returning to the navigation was a scroll of its own. This is the
 * shortcut.
 *
 * Behaviour worth knowing about:
 *
 *  · It appears after 1.4 viewports of scrolling. Below that the header is
 *    still close enough that the control would be noise.
 *  · It hides again within ~180px of the footer's top edge, so it never sits on
 *    top of the footer's links or a page's final call to action. That is the
 *    reason for the footer measurement rather than a fixed offset.
 *  · Scrolling is `behavior: 'smooth'` only when the visitor has not asked for
 *    reduced motion; under `prefers-reduced-motion` it jumps, and the fade-in
 *    is disabled by the global reduced-motion rule.
 *  · After scrolling it moves focus to the skip link so a keyboard user lands
 *    at the top of the document rather than being returned to a button that is
 *    no longer visible. `scroll` is passed as false so the focus call does not
 *    fight the scroll that is already running.
 *  · Scroll and resize are read through rAF rather than on every event, and the
 *    listeners are passive.
 */
const SHOW_AFTER = 1.4; // viewports
const FOOTER_MARGIN = 180; // px of clearance kept above the footer

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  const measure = useCallback(() => {
    ticking.current = false;
    const y = window.scrollY;
    const vh = window.innerHeight;

    if (y < vh * SHOW_AFTER) {
      setVisible(false);
      return;
    }

    // Hide before the button would overlap the footer.
    const footer = document.querySelector('footer');
    if (footer) {
      const top = footer.getBoundingClientRect().top;
      if (top < vh - FOOTER_MARGIN) {
        setVisible(false);
        return;
      }
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(measure);
    };
    // Initial position via the same rAF path rather than a direct call: on a
    // reload part-way down a page the button must appear, but setting state
    // synchronously inside an effect is what the lint rule is there to stop.
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [measure]);

  const toTop = useCallback(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    document.querySelector<HTMLAnchorElement>('.skip-link')?.focus({ preventScroll: true });
  }, []);

  return (
    <button
      type="button"
      onClick={toTop}
      className="back-to-top"
      data-back-to-top
      data-visible={visible ? 'true' : 'false'}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden focusable="false">
        <path
          d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
      <span className="back-to-top-label">TOP</span>
    </button>
  );
}
