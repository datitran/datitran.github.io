// Direction 7 — "Notebook"
// A personal site as a marked-up research notebook. Cream paper with a faint
// dot-grid background, navy ink, marginalia in the gutter, hand-drawn-feel
// underlines and brackets via SVG. Plays to the "researcher" facet of Dat's
// brand — curious, experimental, warm. Mixes Fraunces for warmth and a
// monospace for the lab-notebook code-comments vibe.

const D7 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const paper = "#f4efe4";
  const ink = "#1c2c44";
  const accent = "#c64a3b";
  const muted = "#6e6553";
  const rule = "rgba(28,44,68,0.18)";
  const serif = '"Fraunces", Georgia, serif';
  const mono = '"JetBrains Mono", monospace';
  const sans = '"Inter", sans-serif';

  const Underline = () => (
    <svg width="100%" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" style={{ display: "block", marginTop: -4 }}>
      <path d="M2 4 Q 50 1, 100 3 T 198 3" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );

  return (
    <div data-screen-label="D7 Notebook" style={{
      background: paper, color: ink, fontFamily: sans, fontSize: 15, lineHeight: 1.6,
      backgroundImage: "radial-gradient(rgba(28,44,68,0.1) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    }}>
      <header style={{ padding: "20px 56px", borderBottom: `2px solid ${ink}`, display: "flex", justifyContent: "space-between", alignItems: "baseline", background: paper }}>
        <div style={{ fontFamily: serif, fontSize: 24, fontStyle: "italic", letterSpacing: "-0.01em" }}>Dat's Notebook</div>
        <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: "0.08em" }}>// vol. 03 · entry 042 · apr 26, 2026</div>
      </header>

      <section style={{ padding: "60px 56px", display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 32, borderBottom: `1px solid ${rule}` }}>
        <aside style={{ fontFamily: mono, fontSize: 11, color: muted, lineHeight: 1.8 }}>
          <div style={{ color: accent }}>// fig. 01</div>
          <div>portrait of the<br/>author at a recent<br/>keynote in berlin.</div>
          <div style={{ marginTop: 16, color: accent }}>// note</div>
          <div>currently accepting<br/>briefs for q3.</div>
        </aside>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, color: muted, marginBottom: 16 }}>{`> entry: about_me.md`}</div>
          <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0 }}>
            Hello, I'm <span style={{ fontStyle: "italic", color: accent, position: "relative" }}>Dat<Underline/></span>.
          </h1>
          <p style={{ fontFamily: serif, fontSize: 22, fontStyle: "italic", color: muted, marginTop: 24, maxWidth: 520, lineHeight: 1.4 }}>
            A technologist working in the intersection between humans &amp; machines — and writing it all down.
          </p>
        </div>
        <div style={{ aspectRatio: "3/4", background: `url(assets/leadership.jpg) center/cover`, filter: "sepia(0.15)", border: `1px solid ${ink}`, transform: "rotate(1.2deg)", boxShadow: "6px 6px 0 rgba(28,44,68,0.1)" }} />
      </section>

      <section style={{ padding: "50px 56px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, borderBottom: `1px solid ${rule}` }}>
        <aside style={{ fontFamily: mono, fontSize: 11, color: muted }}>// chapter 01<br/>about</aside>
        <div>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 44, letterSpacing: "-0.02em", margin: "0 0 20px" }}>The story so far <span style={{ color: accent }}>—</span></h2>
          <div style={{ columnCount: 2, columnGap: 32, fontSize: 16, lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>I've spent fifteen years building things at the intersection of code, data and people. Most recently I was Head of AI at Axel Springer, where I established the AI division and shipped open source the field still uses.</p>
            <p>Before that, I led data at idealo and worked as a senior data scientist at Pivotal. Today I run Dat Tran Ventures and advise companies on AI strategy, hiring and the messy middle between research and production.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 56px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, borderBottom: `1px solid ${rule}` }}>
        <aside style={{ fontFamily: mono, fontSize: 11, color: muted }}>// chapter 02<br/>services</aside>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {SERVICES.map((s) => (
            <div key={s.id} style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 18 }}>
              <div style={{ fontFamily: mono, fontSize: 11, color: accent }}>// {s.glyph}</div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: 26, margin: "6px 0 8px", letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: muted, lineHeight: 1.6 }}>{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 56px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, borderBottom: `1px solid ${rule}` }}>
        <aside style={{ fontFamily: mono, fontSize: 11, color: muted }}>// chapter 03<br/>experiments</aside>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {PROJECTS.slice(0, 6).map((p, i) => (
            <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none", display: "block" }}>
              <div style={{ aspectRatio: "4/3", background: `url(${p.img}) center/cover`, border: `1px solid ${ink}`, transform: i % 2 === 0 ? "rotate(-0.6deg)" : "rotate(0.5deg)" }} />
              <div style={{ fontFamily: mono, fontSize: 10, color: muted, marginTop: 10 }}>// fig. {String(i + 2).padStart(2, "0")} · {p.org} · {p.year}</div>
              <h4 style={{ fontFamily: serif, fontWeight: 500, fontSize: 20, margin: "4px 0 4px", letterSpacing: "-0.01em" }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: muted }}>{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 56px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, borderBottom: `1px solid ${rule}` }}>
        <aside style={{ fontFamily: mono, fontSize: 11, color: muted }}>// chapter 04<br/>writing</aside>
        <div>
          {WRITING.slice(0, 6).map((w, i) => (
            <a key={i} href="#" style={{ display: "block", padding: "14px 0", borderTop: `1px dashed ${rule}`, color: ink, textDecoration: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 11, color: muted }}>
                <span>// {w.outlet}</span><span>{w.date}</span>
              </div>
              <div style={{ fontFamily: serif, fontSize: 22, marginTop: 4, letterSpacing: "-0.01em" }}>{w.title}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 56px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, borderBottom: `1px solid ${rule}` }}>
        <aside style={{ fontFamily: mono, fontSize: 11, color: muted }}>// chapter 05<br/>talks</aside>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {TALKS.slice(0, 6).map((t, i) => (
            <div key={i} style={{ borderTop: `1px dashed ${rule}`, padding: "12px 0" }}>
              <div style={{ fontFamily: mono, fontSize: 11, color: accent }}>● {t.kind} · {t.year}</div>
              <div style={{ fontFamily: serif, fontSize: 18, margin: "4px 0 2px" }}>{t.title}</div>
              <div style={{ fontSize: 12, color: muted }}>{t.venue}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 56px", textAlign: "center" }}>
        <div style={{ fontFamily: mono, fontSize: 11, color: muted, marginBottom: 12 }}>// closing entry</div>
        <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 88, letterSpacing: "-0.04em", margin: "0 0 20px", lineHeight: 0.95 }}>
          Want to <span style={{ fontStyle: "italic", color: accent }}>collaborate?</span>
        </h2>
        <a href={`mailto:${DAT.email}`} style={{ fontFamily: serif, fontSize: 28, color: ink, textDecoration: "none", borderBottom: `2px solid ${accent}` }}>{DAT.email}</a>
      </section>
    </div>
  );
};

window.D7 = D7;
