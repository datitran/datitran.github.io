// Direction 10 — "Studio"
// Architectural / fashion-house calm. Heavy whitespace, photo-led, refined
// serif and tight sans. Off-white, near-black, single olive-mustard accent.
// Reads like the personal site of an architect or a creative director —
// confident, quiet, sells without selling.

const D10 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const paper = "#ebe7e0";
  const ink = "#1d1d1b";
  const muted = "#7a7670";
  const accent = "#a89251";
  const rule = "rgba(29,29,27,0.18)";
  const serif = '"Fraunces", "Instrument Serif", serif';
  const sans = '"Inter", sans-serif';

  return (
    <div data-screen-label="D10 Studio" style={{ background: paper, color: ink, fontFamily: sans, fontSize: 14, lineHeight: 1.55 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 64px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: serif, fontSize: 18, fontStyle: "italic", letterSpacing: 0, textTransform: "none" }}>Dat Tran <span style={{ color: accent }}>—</span> Studio</span>
        <div style={{ display: "flex", gap: 32 }}>
          {["Index", "Practice", "Work", "Words", "Stage", "Contact"].map((l) => <a key={l} href="#" style={{ color: ink, textDecoration: "none" }}>{l}</a>)}
        </div>
        <span style={{ color: accent }}>(En)</span>
      </nav>

      {/* Full-bleed hero photo with overlay text */}
      <section style={{ padding: "0 64px 80px" }}>
        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "16/9", background: `url(assets/leadership.jpg) center/cover`, filter: "grayscale(0.6) contrast(1.05)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 40, color: "#fff" }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85 }}>fig. i — at work, Berlin, 2025</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted }}>
            Index — i<br/>Personal practice<br/>Berlin, 2026
          </div>
          <div>
            <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
              A practice for<br/><em style={{ color: accent }}>technology, AI</em>,<br/>and the people who<br/>build with both.
            </h1>
            <p style={{ marginTop: 36, fontSize: 17, color: muted, maxWidth: 580, lineHeight: 1.6 }}>
              Dat Tran is a technologist and advisor based in Berlin. Former Head of AI at Axel Springer. Founder of Dat Tran Ventures. The studio works with companies on AI strategy, leadership and the difficult middle between research and production.
            </p>
          </div>
        </div>
      </section>

      {/* Practice / Services — long horizontal index */}
      <section style={{ padding: "0 64px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, borderTop: `1px solid ${ink}`, paddingTop: 36 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted }}>ii — Practice</div>
          <div>
            <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 56, letterSpacing: "-0.03em", margin: "0 0 32px", lineHeight: 1 }}>
              Four ways<br/><em style={{ color: accent }}>to engage.</em>
            </h2>
            {SERVICES.map((s, i) => (
              <div key={s.id} style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr", padding: "26px 0", borderTop: `1px solid ${rule}`, gap: 32, alignItems: "baseline" }}>
                <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22, color: accent }}>{s.glyph}</span>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 28, letterSpacing: "-0.02em", margin: 0 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: muted, lineHeight: 1.6 }}>{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work — large grid */}
      <section style={{ padding: "0 64px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, borderTop: `1px solid ${ink}`, paddingTop: 36, marginBottom: 36 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted }}>iii — Work</div>
          <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 56, letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>
            Selected projects, <em style={{ color: accent }}>2016–2024.</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, marginBottom: 32 }}>
          <a href={PROJECTS[0].href} style={{ color: ink, textDecoration: "none" }}>
            <div style={{ aspectRatio: "4/3", background: `url(${PROJECTS[0].img}) center/cover`, filter: "contrast(1.05)" }} />
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>
              <span>{PROJECTS[0].org}</span><span>{PROJECTS[0].year}</span>
            </div>
            <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 36, letterSpacing: "-0.02em", margin: "8px 0 6px" }}>{PROJECTS[0].title}</h3>
            <p style={{ margin: 0, fontSize: 15, color: muted, maxWidth: 560 }}>{PROJECTS[0].blurb}</p>
          </a>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
            {PROJECTS.slice(1, 3).map((p) => (
              <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none" }}>
                <div style={{ aspectRatio: "16/10", background: `url(${p.img}) center/cover` }} />
                <div style={{ marginTop: 14, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>{p.org} · {p.year}</div>
                <h4 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, letterSpacing: "-0.02em", margin: "4px 0 4px" }}>{p.title}</h4>
                <p style={{ margin: 0, fontSize: 13, color: muted }}>{p.blurb}</p>
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PROJECTS.slice(3, 6).map((p) => (
            <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none" }}>
              <div style={{ aspectRatio: "4/5", background: `url(${p.img}) center/cover` }} />
              <div style={{ marginTop: 12, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>{p.org} · {p.year}</div>
              <h4 style={{ fontFamily: serif, fontWeight: 400, fontSize: 22, letterSpacing: "-0.02em", margin: "4px 0 4px" }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: muted }}>{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: "100px 64px", borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}` }}>
        <blockquote style={{
          fontFamily: serif, fontWeight: 300, fontSize: 64, lineHeight: 1.15, letterSpacing: "-0.025em", margin: 0, maxWidth: 1100, fontStyle: "italic",
        }}>
          "Dat is the rare blend of <span style={{ color: accent, fontStyle: "normal" }}>deep technical chops</span> and senior leadership judgement."
        </blockquote>
        <div style={{ marginTop: 28, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>
          {TESTIMONIALS[0].name} — {TESTIMONIALS[0].role}
        </div>
      </section>

      {/* Words & Stage in two columns */}
      <section style={{ padding: "60px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted }}>iv — Words</div>
          <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 48, letterSpacing: "-0.03em", margin: "10px 0 24px" }}>Selected writing.</h2>
          {WRITING.slice(0, 5).map((w, i) => (
            <a key={i} href="#" style={{ display: "block", padding: "18px 0", borderTop: `1px solid ${rule}`, color: ink, textDecoration: "none" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>{w.outlet} · {w.date}</div>
              <div style={{ fontFamily: serif, fontSize: 22, marginTop: 4, letterSpacing: "-0.01em" }}>{w.title}</div>
            </a>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted }}>v — Stage</div>
          <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 48, letterSpacing: "-0.03em", margin: "10px 0 24px" }}>Recent appearances.</h2>
          {TALKS.slice(0, 5).map((t, i) => (
            <a key={i} href="#" style={{ display: "block", padding: "18px 0", borderTop: `1px solid ${rule}`, color: ink, textDecoration: "none" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}><span style={{ color: accent }}>● {t.kind}</span> · {t.venue} · {t.year}</div>
              <div style={{ fontFamily: serif, fontSize: 22, marginTop: 4, letterSpacing: "-0.01em" }}>{t.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Companies */}
      <section style={{ padding: "60px 64px", borderTop: `1px solid ${ink}` }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, marginBottom: 18 }}>vi — In good company</div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${COMPANIES.length}, 1fr)`, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
          {COMPANIES.map((c, i) => (
            <div key={c} style={{
              padding: "32px 8px", textAlign: "center",
              fontFamily: serif, fontWeight: 300, fontSize: 24, fontStyle: "italic", letterSpacing: "-0.01em",
              borderRight: i < COMPANIES.length - 1 ? `1px solid ${rule}` : "none",
            }}>{c}</div>
          ))}
        </div>
      </section>

      {/* Contact — quiet */}
      <section style={{ padding: "120px 64px", textAlign: "left", borderTop: `1px solid ${ink}` }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, marginBottom: 24 }}>vii — Contact</div>
        <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 120, letterSpacing: "-0.04em", lineHeight: 0.95, margin: "0 0 40px" }}>
          <em style={{ color: accent }}>Write</em> the studio.
        </h2>
        <a href={`mailto:${DAT.email}`} style={{ fontFamily: serif, fontSize: 36, color: ink, textDecoration: "none", borderBottom: `1px solid ${accent}`, paddingBottom: 4 }}>{DAT.email} →</a>
        <div style={{ marginTop: 80, paddingTop: 24, borderTop: `1px solid ${rule}`, display: "flex", justifyContent: "space-between", fontSize: 11, color: muted, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          <span>© Dat Tran 2016–2026</span>
          <span>Berlin · Studio of one</span>
          <span>Imprint · Privacy</span>
        </div>
      </section>
    </div>
  );
};

window.D10 = D10;
