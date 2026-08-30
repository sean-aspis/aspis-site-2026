'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Client-side navigation swaps the document without moving focus, so after
 * following a link the caret sits on <body>: a keyboard user has to tab back
 * through the whole header to reach the new page, and a screen-reader user
 * gets no signal that anything changed.
 *
 * On each route change this moves focus to the new page's <h1> and announces
 * its text. The heading is given tabindex="-1" only for the moment it is
 * focused, so it never enters the tab order, and focus-visible styling is
 * suppressed because the user did not tab to it themselves.
 *
 * The first render is skipped — a full page load already starts focus at the
 * top of the document.
 */
export default function RouteFocus() {
  const pathname = usePathname();
  const first = useRef(true);
  const liveRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const h1 = document.querySelector<HTMLElement>('main h1');
    const target = h1 ?? document.getElementById('main');
    if (!target) return;

    target.setAttribute('tabindex', '-1');
    target.style.outline = 'none';
    target.focus({ preventScroll: true });
    const drop = () => {
      target.removeAttribute('tabindex');
      target.style.removeProperty('outline');
      target.removeEventListener('blur', drop);
    };
    target.addEventListener('blur', drop);

    if (liveRef.current) {
      const title = (h1?.textContent || document.title).trim().replace(/\s+/g, ' ');
      liveRef.current.textContent = `${title} — page loaded`;
    }
  }, [pathname]);

  return (
    <p
      ref={liveRef}
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        margin: -1,
        padding: 0,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    />
  );
}
