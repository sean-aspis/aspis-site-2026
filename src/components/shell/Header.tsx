'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS, NAV_ORDER, ROUTES, EXTERNAL, type NavGroup } from '@/data/nav';

const CLOSE_DELAY = 180; // ms — lets the cursor cross the gap to the panel

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [drawerGroup, setDrawerGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedBy = useRef<'hover' | 'click' | null>(null);
  const suppressHoverUntil = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Header compaction: 76px → 62px on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation. Adjusted during render rather than in an
  // effect: the menus must not paint open for a frame on the new route, and
  // React re-runs this render before committing anything to the DOM.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setDrawer(false);
    setDrawerGroup(null);
  }

  // Body scroll lock while the mobile drawer is open.
  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawer]);

  // Escape closes; focus trap for the drawer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const wasOpen = open;
        setOpen(null);
        setDrawer(false);
        setDrawerGroup(null);
        openedBy.current = null;
        if (wasOpen) {
          // Returning focus to the trigger fires its onFocus, which would
          // re-open the panel Escape just closed. The same suppression window
          // that stops hover re-opening after a link click covers this.
          suppressHoverUntil.current = Date.now() + 400;
          const i = NAV_ORDER.indexOf(wasOpen as (typeof NAV_ORDER)[number]);
          headerRef.current
            ?.querySelector<HTMLElement>(`[data-nav-index="${i}"]`)
            ?.focus();
        }
        return;
      }
      if (e.key !== 'Tab' || !drawer || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawer, open]);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(null);
      openedBy.current = null;
    }, CLOSE_DELAY);
  }, []);

  /**
   * Hover opens — but not in the moment right after a link was clicked. The
   * panel unmounts under a stationary cursor, which fires a fresh mouseenter
   * on whatever lands beneath it; without this guard the menu springs back
   * open on the page you just navigated to.
   */
  const openPanel = useCallback((k: string) => {
    if (Date.now() < suppressHoverUntil.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen((cur) => {
      if (cur !== k) openedBy.current = 'hover';
      return k;
    });
  }, []);

  /** Every link inside the menu calls this so navigation is never blocked. */
  const closeAll = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    suppressHoverUntil.current = Date.now() + 400;
    openedBy.current = null;
    setOpen(null);
    setDrawer(false);
    setDrawerGroup(null);
  }, []);

  /**
   * Click on a trigger. Hover has usually already opened the panel by the time
   * the click lands, so a plain toggle would close it again the instant a
   * mouse user clicks. Only a click on a panel that a *click* opened closes it;
   * that also gives touch devices (no hover) a correct open/close tap.
   */
  const onTriggerClick = useCallback(
    (k: string) => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (open === k && openedBy.current === 'click') {
        setOpen(null);
        openedBy.current = null;
        return;
      }
      openedBy.current = 'click';
      setOpen(k);
    },
    [open]
  );

  // Keyboard nav across the five triggers.
  const onNavKey = (e: React.KeyboardEvent, index: number) => {
    const keys = [...NAV_ORDER];
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const next = (index + (e.key === 'ArrowRight' ? 1 : keys.length - 1)) % keys.length;
      const btn = headerRef.current?.querySelector<HTMLElement>(
        `[data-nav-index="${next}"]`
      );
      btn?.focus();
      if (open) setOpen(keys[next]);
    }
    if (e.key === 'ArrowDown' && open === keys[index]) {
      e.preventDefault();
      const panel = document.getElementById(NAV_GROUPS[keys[index]].panelId);
      panel?.querySelector<HTMLElement>('a')?.focus();
    }
  };

  // Desktop and mobile navigation are both rendered; globals.css decides
  // which is visible. Breakpoints live there, not here.
  const headerHeight = scrolled ? 62 : 76;
  const logoHeight = scrolled ? 26 : 32;

  const activeGroup = (g: NavGroup) =>
    g.columns.some((c) => c.items.some((i) => i.href === pathname));

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(5,7,14,.90)',
        backdropFilter: 'blur(20px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        className="container"
        style={{
          height: headerHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          transition: 'height .18s ease',
        }}
      >
        <Link href="/" onClick={closeAll} style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
          <Image
            src="/assets/aspis-logo-horizontal-electric.png"
            alt="ASPIS Cyber Security"
            width={430}
            height={72}
            priority
            style={{ height: logoHeight, width: 'auto', display: 'block', transition: 'height .18s ease' }}
          />
        </Link>

        <div className="nav-desktop">
          <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {NAV_ORDER.map((k, i) => {
                const g = NAV_GROUPS[k];
                const isOpen = open === k;
                return (
                  <button
                    key={k}
                    type="button"
                    data-nav-index={i}
                    data-open={isOpen || activeGroup(g)}
                    aria-expanded={isOpen}
                    aria-controls={g.panelId}
                    onClick={() => onTriggerClick(k)}
                    onMouseEnter={() => openPanel(k)}
                    onFocus={() => openPanel(k)}
                    onKeyDown={(e) => onNavKey(e, i)}
                    className="nav-trigger"
                  >
                    {g.label}
                    <span aria-hidden style={{ fontSize: 8, opacity: 0.7 }}>
                      ▾
                    </span>
                  </button>
                );
              })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto' }}>
            <a
              href={EXTERNAL.shieldMe}
              target="_blank"
              rel="noreferrer"
              className="lnk-soft nav-shieldme"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '.04em',
                whiteSpace: 'nowrap',
              }}
            >
              ShieldMe ↗
            </a>
            <a href={EXTERNAL.manageIt} target="_blank" rel="noreferrer" className="btn-ghost">
              Log In
            </a>
            <Link href={ROUTES.contact} className="btn-primary" onClick={closeAll}>
              Request a Demo
            </Link>
          </div>
        </div>

        <div className="nav-mobile">
          <button
            type="button"
            aria-expanded={drawer}
            aria-controls="mobile-drawer"
            onClick={() => {
              setDrawer((d) => !d);
              setDrawerGroup(null);
            }}
            style={{
              background: 'transparent',
              border: '1px solid var(--line-strong)',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: 11.5,
              letterSpacing: '.1em',
              padding: '9px 14px',
              cursor: 'pointer',
            }}
          >
            {drawer ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Desktop mega panels */}
      {NAV_ORDER.map((k) => {
          const g = NAV_GROUPS[k];
          if (open !== k) return null;
          return (
            <div
              key={k}
              id={g.panelId}
              onMouseEnter={() => openPanel(k)}
              onMouseLeave={scheduleClose}
              style={{
                borderTop: '1px solid var(--line)',
                background: 'var(--mega)',
                animation: 'menuIn .18s ease-out both',
              }}
            >
              <div
                className="container"
                style={{
                  paddingTop: 30,
                  paddingBottom: 22,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill,minmax(min(230px,100%),1fr))',
                  gap: 30,
                }}
              >
                {g.columns.map((col) => (
                  <div key={col.title}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '.18em',
                        color: 'var(--cyan)',
                        paddingBottom: 12,
                        marginBottom: 6,
                        borderBottom: '1px solid rgba(103,232,249,.25)',
                      }}
                    >
                      {col.title}
                    </div>
                    {col.items.map((i) => (
                      <Link
                        key={i.name}
                        href={i.href}
                        className="mega-item"
                        onClick={closeAll}
                        aria-current={pathname === i.href ? 'page' : undefined}
                      >
                        <span className="mega-name">{i.name}</span>
                        <span className="mega-desc">{i.desc}</span>
                      </Link>
                    ))}
                  </div>
                ))}

                {g.stack && (
                  <div
                    style={{
                      border: '1px solid rgba(122,160,255,.16)',
                      background: 'rgba(16,23,51,.45)',
                      padding: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                      justifyContent: 'center',
                    }}
                  >
                    {g.stack.map((s) => (
                      <span key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span
                          style={{
                            width: 26,
                            height: 26,
                            border: '1px solid rgba(103,232,249,.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 9,
                            color: 'var(--cyan)',
                            flex: '0 0 auto',
                          }}
                        >
                          {s.n}
                        </span>
                        <span style={{ minWidth: 0 }}>
                          <span
                            style={{
                              display: 'block',
                              fontFamily: 'var(--font-display)',
                              fontSize: 14.5,
                              fontWeight: 600,
                            }}
                          >
                            {s.name}
                          </span>
                          <span
                            style={{
                              display: 'block',
                              fontFamily: 'var(--font-mono)',
                              fontSize: 9.5,
                              letterSpacing: '.12em',
                              color: 'var(--cyan)',
                            }}
                          >
                            {s.verb}
                          </span>
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                {g.promo && (
                  <div
                    style={{
                      border: '1px solid rgba(122,160,255,.18)',
                      background: 'linear-gradient(180deg,rgba(63,107,255,.16),rgba(10,15,30,.4))',
                      padding: 22,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 17,
                        fontWeight: 700,
                        letterSpacing: '-.02em',
                        lineHeight: 1.25,
                      }}
                    >
                      Secure the Conversation.
                      <br />
                      Secure the Device.
                      <br />
                      <span style={{ color: 'var(--cyan)' }}>Control the Data.</span>
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        fontSize: 12.5,
                        color: 'var(--text-body)',
                      }}
                    >
                      <span>Secure communications</span>
                      <span>Mobile Threat Defense</span>
                      <span>Centralized governance</span>
                      <span>Communications intelligence</span>
                    </span>
                    <Link
                      href={ROUTES.why}
                      onClick={closeAll}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10.5,
                        letterSpacing: '.12em',
                        color: 'var(--cyan)',
                      }}
                    >
                      WHY ASPIS →
                    </Link>
                  </div>
                )}
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--hairline)',
                  background: 'rgba(10,15,30,.5)',
                }}
              >
                <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
                  <Link
                    href={g.footer.href}
                    onClick={closeAll}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '.12em',
                      color: 'var(--cyan)',
                    }}
                  >
                    {g.footer.label}
                  </Link>
                </div>
              </div>
          </div>
        );
      })}

      {/* Mobile drawer with drill-down */}
      {drawer && (
        <nav
          id="mobile-drawer"
          ref={drawerRef}
          aria-label="Primary"
          style={{
            borderTop: '1px solid var(--line)',
            background: 'var(--surface-0)',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto',
            padding: '16px clamp(20px,5vw,32px) 30px',
          }}
        >
          {!drawerGroup && (
            <div style={{ display: 'grid', gap: 0 }}>
              {NAV_ORDER.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setDrawerGroup(k)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--hairline)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {NAV_GROUPS[k].label}
                  <span style={{ color: 'var(--cyan)', fontSize: 15 }}>›</span>
                </button>
              ))}
            </div>
          )}

          {drawerGroup && (
            <div style={{ display: 'grid', gap: 0 }}>
              <button
                type="button"
                onClick={() => setDrawerGroup(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 0 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.12em',
                  color: 'var(--cyan)',
                }}
              >
                ← BACK
              </button>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: '-.02em',
                  marginBottom: 14,
                }}
              >
                {NAV_GROUPS[drawerGroup].label}
              </span>
              {NAV_GROUPS[drawerGroup].columns.map((col) => (
                <div key={col.title} style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '.16em',
                      color: 'var(--cyan)',
                      paddingBottom: 8,
                      borderBottom: '1px solid rgba(103,232,249,.22)',
                      marginBottom: 4,
                    }}
                  >
                    {col.title}
                  </div>
                  {col.items.map((i) => (
                    <Link
                      key={i.name}
                      href={i.href}
                      onClick={closeAll}
                      aria-current={pathname === i.href ? 'page' : undefined}
                      style={{
                        display: 'block',
                        padding: '11px 0',
                        borderBottom: '1px solid var(--line-soft)',
                        fontSize: 15,
                        color: '#DCE4F5',
                      }}
                    >
                      {i.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div
            style={{
              display: 'grid',
              gap: 10,
              marginTop: 22,
              paddingTop: 18,
              borderTop: '1px solid rgba(122,160,255,.12)',
            }}
          >
            <Link
              href={ROUTES.contact}
              onClick={closeAll}
              style={{
                background: 'linear-gradient(100deg,#3F6BFF,#5FA8FF)',
                color: '#04060E',
                fontFamily: 'var(--font-display)',
                fontSize: 15,
                fontWeight: 700,
                padding: '14px 20px',
                textAlign: 'center',
              }}
            >
              Request a Demo
            </Link>
            <a
              href={EXTERNAL.manageIt}
              target="_blank"
              rel="noreferrer"
              style={{
                border: '1px solid var(--line-strong)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: 15,
                fontWeight: 600,
                padding: '13px 20px',
                textAlign: 'center',
              }}
            >
              Log In to ManageiT ↗
            </a>
            <a
              href={EXTERNAL.shieldMe}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12.5,
                letterSpacing: '.06em',
                textAlign: 'center',
                padding: '6px 0',
              }}
            >
              ShieldMe ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
