// Direction 6 — "Swiss Grid"
// Pure Helvetica/Inter, ruthless 12-column grid, almost no decoration.
// White background, black ink, single red accent for emphasis. Reads like a
// well-designed thesis or a Massimo Vignelli piece. Quiet but impossible to
// dismiss. Lets the work speak.

const D6 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const ink = "#0d0d0d";
  const muted = "#6b6b6b";
  const accent = "#d62b1f";
  const rule = "#0d0d0d";
  const sans = '"Inter", "Helvetica Neue", Helvetica, sans-serif';

  return (
    <div data-screen-label="D6 Swiss Grid" style={{ background: "#fff", color: ink, fontFamily: sans, fontSize: 14, lineHeight: 1.5 }}>
      <header style={{ padding: "16px 40px", borderBottom: `1px solid ${rule}`, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, alignItems: "baseline" }}>
        <div style={{ gridColumn: "1 / span 3", fontSize: 14, fontWeight: 700 }}>Dat Tran</div>
        <div style={{ gridColumn: "4 / span 3", fontSize: 12, color: muted }}>Technology &amp; AI Advisor</div>
        <nav style={{ gridColumn: "7 / span 5", display: "flex", gap: 24, fontSize: 12 }}>
          <a href="#" style={{ color: ink, textDecoration: "none" }}>01 About</a>
          <a href="#" style={{ color: ink, textDecoration: "none" }}>02 Services</a>
          <a href="#" style={{ color: ink, textDecoration: "none" }}>03 Work</a>
          <a href="#" style={{ color: ink, textDecoration: "none" }}>04 Writing</a>
          <a href="#" style={{ color: ink, textDecoration: "none" }}>05 Talks</a>
          <a href="#" style={{ color: ink, textDecoration: "none" }}>06 Contact</a>
        </nav>
        <div style={{ gridColumn: "12 / span 1", fontSize: 12, color: accent, textAlign: "right" }}>● Available</div>
      </header>

      {/* Hero */}
      <section style={{ padding: "60px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, borderBottom: `1px solid ${rule}` }}>
        <div style={{ gridColumn: "1 / span 1", fontSize: 11, color: muted }}>00</div>
        <div style={{ gridColumn: "2 / span 7" }}>
          <h1 style={{ fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            Dat Tran is a<br/>
            <span style={{ color: accent }}>technology</span> and<br/>
            business leader.
          </h1>
        </div>
        <div style={{ gridColumn: "9 / span 4", fontSize: 14, lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}>Former Head of AI, Axel Springer. Founder of Dat Tran Ventures. Advises Beiersdorf, Bertelsmann and Axel Springer on AI strategy and digital transformation.</p>
          <p style={{ marginTop: 12 }}>Based in Berlin. Speaks at PyData, WeAreDevelopers, Øredev. Reaches {DAT.followers} on LinkedIn.</p>
        </div>
      </section>

      {/* Stats row */}
      <section style={{ padding: "40px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, borderBottom: `1px solid ${rule}` }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ gridColumn: `${1 + i * 3} / span 3`, paddingRight: 16, borderRight: i < 3 ? `1px solid ${rule}` : "none" }}>
            <div style={{ fontSize: 11, color: muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em", marginTop: 8 }}>{s.value}</div>
          </div>
        ))}
      </section>

      {/* About */}
      <section style={{ padding: "60px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, borderBottom: `1px solid ${rule}` }}>
        <div style={{ gridColumn: "1 / span 1", fontSize: 11, color: muted }}>01</div>
        <h2 style={{ gridColumn: "2 / span 4", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>About</h2>
        <div style={{ gridColumn: "6 / span 7", fontSize: 16, lineHeight: 1.65 }}>
          <p style={{ margin: 0 }}>I'm a seasoned technology and business leader with experience creating, transforming and leading large and small organizations. As former Head of AI at <strong>Axel Springer</strong>, I established the AI division and shaped the company's tech-oriented mindset through open-source projects (TransformerTTS, ForwardTacotron) and the first group-wide TechCon.</p>
          <p>At <strong>idealo</strong>, I led a data team that turned a cost center into a profit center — driving CRM, optimizing UX, and contributing to one of Germany's most-watched OSS portfolios.</p>
          <p>Today, through <strong>Dat Tran Ventures</strong>, I advise companies on AI, digital transformation, and tech strategy, and reach a community of {DAT.followers} on LinkedIn.</p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, borderBottom: `1px solid ${rule}` }}>
        <div style={{ gridColumn: "1 / span 1", fontSize: 11, color: muted }}>02</div>
        <h2 style={{ gridColumn: "2 / span 4", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>Services</h2>
        <div style={{ gridColumn: "6 / span 7" }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} style={{ display: "grid", gridTemplateColumns: "60px 1fr 100px", gap: 16, padding: "20px 0", borderTop: i === 0 ? `1px solid ${rule}` : "none", borderBottom: `1px solid ${rule}`, alignItems: "baseline" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: accent, letterSpacing: "-0.02em" }}>{s.glyph}</div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: muted }}>{s.blurb}</p>
              </div>
              <a href="#" style={{ fontSize: 12, color: ink, textAlign: "right" }}>Inquire →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section style={{ padding: "60px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, borderBottom: `1px solid ${rule}` }}>
        <div style={{ gridColumn: "1 / span 1", fontSize: 11, color: muted }}>03</div>
        <h2 style={{ gridColumn: "2 / span 4", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>Selected work</h2>
        <div style={{ gridColumn: "6 / span 7", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {PROJECTS.slice(0, 6).map((p) => (
            <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none" }}>
              <div style={{ aspectRatio: "16/10", background: `url(${p.img}) center/cover`, marginBottom: 10 }} />
              <div style={{ fontSize: 11, color: muted }}>{p.org} · {p.year}</div>
              <h4 style={{ margin: "4px 0 4px", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: muted, lineHeight: 1.5 }}>{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Writing + Talks combined */}
      <section style={{ padding: "60px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, borderBottom: `1px solid ${rule}` }}>
        <div style={{ gridColumn: "1 / span 1", fontSize: 11, color: muted }}>04</div>
        <h2 style={{ gridColumn: "2 / span 4", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>Writing &amp; Talks</h2>
        <div style={{ gridColumn: "6 / span 7" }}>
          {[...WRITING.slice(0, 4).map((w) => ({...w, kind: "Article", venue: w.outlet, year: w.date})), ...TALKS.slice(0, 4)].map((it, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 200px 80px", gap: 16, padding: "14px 0", borderBottom: `1px solid ${rule}`, alignItems: "baseline" }}>
              <span style={{ fontSize: 11, color: accent, letterSpacing: "0.06em", textTransform: "uppercase" }}>{it.kind}</span>
              <span style={{ fontSize: 15, fontWeight: 500 }}>{it.title}</span>
              <span style={{ fontSize: 12, color: muted }}>{it.venue}</span>
              <span style={{ fontSize: 12, color: muted, textAlign: "right" }}>{it.year || it.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "60px 40px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        <div style={{ gridColumn: "1 / span 1", fontSize: 11, color: muted }}>05</div>
        <h2 style={{ gridColumn: "2 / span 4", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>Contact</h2>
        <div style={{ gridColumn: "6 / span 7" }}>
          <a href={`mailto:${DAT.email}`} style={{ fontSize: 48, fontWeight: 700, color: accent, textDecoration: "none", letterSpacing: "-0.02em", display: "block" }}>{DAT.email} →</a>
          <p style={{ marginTop: 16, fontSize: 14, color: muted }}>LinkedIn · GitHub · Medium · Twitter · © Dat Tran 2016–2026 · Berlin · Imprint · Privacy</p>
        </div>
      </section>
    </div>
  );
};

window.D6 = D6;
