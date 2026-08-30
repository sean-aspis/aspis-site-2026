import type { SolutionContent } from '@/data/solutionContent';
import { BAND_WASH_IMAGE } from './derive';
import { FOOTNOTE, SECTION_H2 } from './styles';

/**
 * Capability groups — the substantive middle of an industry page.
 *
 * Each bullet traces to a statement in one of the ASPIS-published documents
 * named in the section lede. Nothing is asserted that the source does not
 * already assert, and the qualifiers ("availability varies by edition and
 * configuration") are part of the content, not decoration.
 */
export default function SolutionCapabilities({ content }: { content: SolutionContent }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <div className="eyebrow" style={{ color: 'var(--accent-text, var(--accent))', marginBottom: 20 }}>
          CAPABILITIES
        </div>
        <h2 style={{ ...SECTION_H2, margin: '0 0 18px', maxWidth: 740 }}>
          {content.capabilitiesTitle}
        </h2>
        <p className="lede" style={{ maxWidth: 680, margin: '0 0 clamp(30px,3.4vw,46px)' }}>
          {content.capabilitiesLede}
        </p>

        <div className="cap-grid">
          {content.capabilities.map((g, i) => (
            <div key={g.t} className="cap-group">
              <div className="cap-head">
                <span className="cap-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cap-title">{g.t}</h3>
              </div>
              <ul className="cap-list">
                {g.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={FOOTNOTE}>
          Capability availability varies by edition, configuration and deployment model.
        </p>
      </div>
    </section>
  );
}
