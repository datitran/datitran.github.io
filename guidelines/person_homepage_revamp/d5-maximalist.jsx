// Direction 5 — "Maximalist Display"
// Bold, loud, confident. Black background, milk-white ink, hot pink one-shot
// accent. Massive condensed display headline that breaks the grid. Fat
// ticker marquees between sections. Personality forward, almost like a
// fashion-week site for an AI guy. Built for memorability.

const D5 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const bg = "#0a0a0a";
  const ink = "#f6f4ef";
  const accent = "#ff3d8a";
  const muted = "rgba(246,244,239,0.55)";
  const rule = "rgba(246,244,239,0.14)";
  const display = '"Fraunces", "Instrument Serif", serif';
  const sans = '"Inter", sans-serif';

  const Marquee = ({ items, color = ink }) => (
    <div style={{ overflow: "hidden", padding: "18px 0", borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
      <div style={{ display: "flex", gap: 56, whiteSpace: "nowrap", color, fontFamily: display, fontSize: 56, fontWeight: 300, letterSpacing: "-0.02em" }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
            {it} <span style={{ color: accent }}>★</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div data-screen-label="D5 Maximalist" style={{ background: bg, color: ink, fontFamily: sans, fontSize: 15, lineHeight: 1.55 }}>
      <nav style={{ padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${rule}` }}>
        <span style={{ fontFamily: display, fontSize: 26, fontWeight: 300, letterSpacing: "-0.02em" }}>Dat<span style={{ color: accent }}>.</span></span>
        <div style={{ display: "flex", gap: 28, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {["Work", "Services", "Writing", "Talks", "Contact"].map((l) => <a key={l} href="#" style={{ color: ink, textDecoration: "none" }}>{l}</a>)}
        </div>
        <a href="#" style={{ color: accent, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>● booking q3 →</a>
      </nav>

      <section style={{ padding: "60px 40px 0", position: "relative" }}>
        <h1 style={{
          fontFamily: display, fontWeight: 300, fontSize: 280, lineHeight: 0.82,
          letterSpacing: "-0.06em", margin: 0,
        }}>
          <span style={{ display: "block" }}>Hi,<span style={{ fontStyle: "italic" }}> I'm</span></span>
          <span style={{ display: "block", color: accent }}>Dat.</span>
        </h1>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 60, alignItems: "end", paddingBottom: 60 }}>
          <p style={{ fontSize: 28, lineHeight: 1.3, margin: 0, maxWidth: 720, fontWeight: 300, letterSpacing: "-0.01em" }}>
            <span style={{ background: accent, color: bg, padding: "2px 8px", fontWeight: 500 }}>Technologist &amp; org-builder.</span> Former Head of AI at Axel Springer. Founder of Dat Tran Ventures. I work where humans, machines and money meet — and I tell the truth about all three.
          </p>
          <div style={{
            aspectRatio: "3/4",
            background: `url(assets/leadership.jpg) center/cover`,
            filter: "grayscale(1) contrast(1.1)",
            outline: `4px solid ${accent}`,
            outlineOffset: -4,
          }} />
        </div>
      </section>

      <Marquee items={["AI strategy", "Keynotes", "Due diligence", "Sparring", "Open source", "Mentorship"]} />

      {/* Services */}
      <section style={{ padding: "80px 40px" }}>
        <h2 style={{ fontFamily: display, fontWeight: 300, fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.95, margin: "0 0 40px" }}>
          What I <span style={{ fontStyle: "italic", color: accent }}>do.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, border: `1px solid ${rule}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} style={{
              padding: 32,
              borderRight: i % 2 === 0 ? `1px solid ${rule}` : "none",
              borderBottom: i < 2 ? `1px solid ${rule}` : "none",
              minHeight: 240,
            }}>
              <div style={{ fontFamily: display, fontSize: 64, fontStyle: "italic", color: accent, lineHeight: 1 }}>{s.glyph}</div>
              <h3 style={{ fontFamily: display, fontWeight: 400, fontSize: 36, letterSpacing: "-0.02em", margin: "12px 0 12px", lineHeight: 1.05 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 16, color: muted, maxWidth: 460 }}>{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={COMPANIES} color={accent} />

      {/* Projects */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 40 }}>
          <h2 style={{ fontFamily: display, fontWeight: 300, fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            The <span style={{ fontStyle: "italic", color: accent }}>work.</span>
          </h2>
          <span style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>← scroll, or see all 12</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {PROJECTS.slice(0, 6).map((p, i) => (
            <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none" }}>
              <div style={{
                aspectRatio: "1/1",
                background: `url(${p.img}) center/cover`,
                outline: `3px solid ${i === 1 ? accent : "transparent"}`,
                outlineOffset: -3,
              }} />
              <div style={{ marginTop: 12, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted, display: "flex", justifyContent: "space-between" }}>
                <span>{p.org}</span><span>{p.year}</span>
              </div>
              <h4 style={{ fontFamily: display, fontWeight: 400, fontSize: 28, letterSpacing: "-0.02em", margin: "6px 0 4px", lineHeight: 1.05 }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: muted }}>{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: "80px 40px", background: accent, color: bg }}>
        <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>★ What people say ★</div>
        <blockquote style={{ fontFamily: display, fontWeight: 300, fontSize: 88, lineHeight: 1, letterSpacing: "-0.03em", margin: 0 }}>
          “The rare blend of <span style={{ fontStyle: "italic" }}>deep technical chops</span> and senior leadership judgement.”
        </blockquote>
        <div style={{ marginTop: 32, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>{TESTIMONIALS[0].name} · {TESTIMONIALS[0].role}</div>
      </section>

      {/* Writing + Talks */}
      <section style={{ padding: "80px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <div>
          <h3 style={{ fontFamily: display, fontWeight: 300, fontSize: 56, letterSpacing: "-0.03em", margin: "0 0 20px" }}>Writing.</h3>
          {WRITING.slice(0, 5).map((w, i) => (
            <a key={i} href="#" style={{ display: "block", color: ink, textDecoration: "none", padding: "14px 0", borderTop: `1px solid ${rule}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>{w.outlet} · {w.date}</div>
              <div style={{ fontFamily: display, fontSize: 22, marginTop: 4 }}>{w.title}</div>
            </a>
          ))}
        </div>
        <div>
          <h3 style={{ fontFamily: display, fontWeight: 300, fontSize: 56, letterSpacing: "-0.03em", margin: "0 0 20px" }}>Talks.</h3>
          {TALKS.slice(0, 5).map((t, i) => (
            <a key={i} href="#" style={{ display: "block", color: ink, textDecoration: "none", padding: "14px 0", borderTop: `1px solid ${rule}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>{t.kind} · {t.venue} · {t.year}</div>
              <div style={{ fontFamily: display, fontSize: 22, marginTop: 4 }}>{t.title}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "120px 40px 80px", textAlign: "center" }}>
        <h2 style={{ fontFamily: display, fontWeight: 300, fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.05em", margin: 0 }}>
          Say <span style={{ color: accent, fontStyle: "italic" }}>hi.</span>
        </h2>
        <a href={`mailto:${DAT.email}`} style={{
          marginTop: 40, display: "inline-block", fontSize: 22, color: ink,
          padding: "20px 40px", border: `2px solid ${ink}`, textDecoration: "none",
        }}>{DAT.email} →</a>
      </section>
    </div>
  );
};

window.D5 = D5;
