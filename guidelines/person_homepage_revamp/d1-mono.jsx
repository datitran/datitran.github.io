// Direction 1 — "Mono Evolved"
// Refined brutalist that keeps Dat's monospace DNA and pushes it further.
// JetBrains Mono everywhere. Cream paper background. Black ink. One single
// accent: a hot terminal-orange. Strong baseline grid, tight tracking,
// terminal-y prompts and brackets as decoration. Section labels rotate
// slightly (a nod to his current site) but the overall feel is tighter,
// more confident, and built like a developer's resume that takes itself
// seriously.

const D1 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const accent = "#ff5b1f";
  const ink = "#111110";
  const paper = "#f4f0e6";
  const rule = "rgba(17,17,16,0.18)";

  const styles = {
    root: {
      width: "100%",
      minHeight: "100%",
      background: paper,
      color: ink,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 13,
      lineHeight: 1.55,
      padding: "0",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 40px",
      borderBottom: `1px solid ${rule}`,
      fontSize: 12,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      position: "sticky",
      top: 0,
      background: paper,
      zIndex: 5,
    },
    navLogo: { display: "flex", alignItems: "center", gap: 10, fontWeight: 700 },
    navDot: { width: 10, height: 10, background: accent, borderRadius: 0 },
    navLinks: { display: "flex", gap: 28 },
    navLink: { textDecoration: "none", color: ink, opacity: 0.7 },
    section: { padding: "80px 40px", borderBottom: `1px solid ${rule}` },
    sectionTag: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 32,
    },
    sectionTagBracket: { color: ink, opacity: 0.4 },
  };

  const SectionTag = ({ n, children }) => (
    <div style={styles.sectionTag}>
      <span style={styles.sectionTagBracket}>[</span>
      <span>{n}</span>
      <span style={{ color: ink, opacity: 0.4 }}>·</span>
      <span>{children}</span>
      <span style={styles.sectionTagBracket}>]</span>
    </div>
  );

  return (
    <div style={styles.root} data-screen-label="D1 Mono Evolved">
      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navLogo}>
          <div style={styles.navDot} />
          <span>dat-tran.com</span>
        </div>
        <div style={styles.navLinks}>
          <a style={styles.navLink} href="#about">about</a>
          <a style={styles.navLink} href="#work">work</a>
          <a style={styles.navLink} href="#writing">writing</a>
          <a style={styles.navLink} href="#talks">talks</a>
          <a style={styles.navLink} href="#contact">contact</a>
        </div>
        <div style={{ display: "flex", gap: 14, opacity: 0.7 }}>
          <span>Berlin, DE</span>
          <span>·</span>
          <span style={{ color: accent }}>● available</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ ...styles.section, padding: "60px 40px 80px", borderBottom: `1px solid ${rule}` }}>
        <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.5, marginBottom: 28 }}>
          // personal homepage · v3.0 · last edit 2026-04-26
        </div>
        <h1 style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 700,
          fontSize: 86,
          letterSpacing: "-0.04em",
          lineHeight: 0.96,
          margin: "0 0 24px",
          maxWidth: 1100,
        }}>
          Hi, I'm Dat.<br />
          <span style={{ color: accent }}>$</span> I work in the<br />
          intersection of<br />
          humans &amp; machines<span style={{ color: accent, fontWeight: 400, marginLeft: 6 }}>_</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, marginTop: 60, alignItems: "start" }}>
          <div style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 560 }}>
            <p style={{ margin: 0 }}>
              I'm a technology &amp; business leader. Former Head of AI at Axel Springer.
              Founder of <strong>Dat Tran Ventures</strong>, where I advise companies like
              Beiersdorf, Bertelsmann and Axel Springer on AI strategy, digital transformation
              and tech culture.
            </p>
            <p style={{ marginTop: 16 }}>
              I write open source, give keynotes, and mentor folks at the intersection of
              ML research and production reality.
            </p>
          </div>
          <div style={{ borderLeft: `1px solid ${rule}`, paddingLeft: 28, fontSize: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px" }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>{s.value}</div>
                  <div style={{ opacity: 0.6, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* photo + caption block */}
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "end" }}>
          <div style={{
            aspectRatio: "3/4",
            background: `url(assets/leadership.jpg) center/cover, ${ink}`,
            filter: "grayscale(0.4) contrast(1.05)",
            borderRadius: 0,
          }} />
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>
              fig. 01 — Dat speaking at Digitale Leute Summit, Berlin
            </div>
            <div style={{ height: 1, background: rule, margin: "12px 0 16px" }} />
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Keynote Speaker", "AI Engineer", "Org Builder", "Open Source", "Mentor"].map((t) => (
                <span key={t} style={{
                  fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase",
                  border: `1px solid ${ink}`, padding: "6px 12px",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <SectionTag n="01">about</SectionTag>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.1 }}>
              Built &amp; led<br/>AI orgs that ship.
            </h2>
            <div style={{ marginTop: 24, fontSize: 12, opacity: 0.6, lineHeight: 1.7 }}>
              <div>2024— Dat Tran Ventures · Founder</div>
              <div>2019—2023 · Axel Springer · Head of AI</div>
              <div>2017—2019 · idealo · Head of Data</div>
              <div>2015—2017 · Pivotal · Senior Data Scientist</div>
            </div>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.75 }}>
            <p style={{ margin: 0 }}>
              At <strong>Axel Springer</strong>, I established and led the AI division — shaping
              the company's shift to a tech-oriented mindset through impactful open-source
              projects (TransformerTTS, ForwardTacotron) and the first group-wide tech
              conference, TechCon 2019.
            </p>
            <p>
              At <strong>idealo</strong>, I led a data team that turned a cost center into a
              profit center — monetizing data, optimizing CRM and contributing to one of
              Germany's most-watched OSS portfolios.
            </p>
            <p>
              Today, through <strong>Dat Tran Ventures</strong>, I advise global companies on
              AI, digital transformation and tech strategy — across frontend, backend, cloud
              and DevOps. My writing and talks reach a community of <strong>{DAT.followers}</strong> on
              LinkedIn alone.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <SectionTag n="02">services</SectionTag>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", borderTop: `1px solid ${ink}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} style={{
              padding: "32px 28px",
              borderBottom: `1px solid ${ink}`,
              borderRight: i % 2 === 0 ? `1px solid ${ink}` : "none",
              minHeight: 240,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, opacity: 0.5 }}>/{s.glyph}</span>
                  <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: accent }}>● open</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", margin: "16px 0 12px" }}>
                  {s.title}
                </h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, opacity: 0.85 }}>{s.blurb}</p>
              </div>
              <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {s.bullets.map((b) => (
                  <span key={b} style={{ fontSize: 11, opacity: 0.65 }}>· {b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section id="work" style={styles.section}>
        <SectionTag n="03">selected work</SectionTag>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <a key={p.title} href={p.href} style={{
              textDecoration: "none", color: ink, display: "block",
              border: `1px solid ${rule}`, background: "#fff",
            }}>
              <div style={{
                aspectRatio: "4/3",
                background: `url(${p.img}) center/cover, #ddd`,
                borderBottom: `1px solid ${rule}`,
              }} />
              <div style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, opacity: 0.55 }}>
                  <span>{p.org}</span>
                  <span>{p.year}</span>
                </div>
                <h4 style={{ margin: "8px 0 6px", fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {p.title}
                </h4>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, opacity: 0.8 }}>{p.blurb}</p>
                <div style={{ marginTop: 14, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: accent }}>
                  → {p.tag}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" style={styles.section}>
        <SectionTag n="04">writing</SectionTag>
        <div>
          {WRITING.map((w, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 200px 80px",
              padding: "18px 0",
              borderTop: `1px solid ${rule}`,
              alignItems: "baseline",
              gap: 16,
            }}>
              <span style={{ fontSize: 11, opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: 16, fontWeight: 500 }}>{w.title}</span>
              <span style={{ fontSize: 12, opacity: 0.7 }}>{w.outlet}</span>
              <span style={{ fontSize: 12, opacity: 0.5, textAlign: "right" }}>{w.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TALKS */}
      <section id="talks" style={styles.section}>
        <SectionTag n="05">talks &amp; podcasts</SectionTag>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
          {TALKS.map((t, i) => (
            <div key={i} style={{
              padding: "20px 24px 20px 0",
              borderTop: `1px solid ${rule}`,
              paddingRight: i % 2 === 0 ? 32 : 0,
              borderRight: i % 2 === 0 ? `1px solid ${rule}` : "none",
              paddingLeft: i % 2 === 1 ? 32 : 0,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, opacity: 0.55 }}>
                <span style={{ color: accent }}>● {t.kind}</span>
                <span>{t.year}</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 16, fontWeight: 500 }}>{t.title}</div>
              <div style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>{t.venue}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS / TRUSTED BY */}
      <section style={styles.section}>
        <SectionTag n="06">trusted by</SectionTag>
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${COMPANIES.length}, 1fr)`,
          borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
          marginBottom: 48,
        }}>
          {COMPANIES.map((c, i) => (
            <div key={c} style={{
              padding: "28px 12px", textAlign: "center", fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em",
              borderRight: i < COMPANIES.length - 1 ? `1px solid ${rule}` : "none",
            }}>{c}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ borderTop: `2px solid ${ink}`, paddingTop: 18 }}>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                <span style={{ color: accent }}>"</span>{t.quote}<span style={{ color: accent }}>"</span>
              </p>
              <div style={{ marginTop: 14, fontSize: 11, opacity: 0.7 }}>
                {t.name} · <span style={{ opacity: 0.6 }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...styles.section, background: ink, color: paper, borderBottom: "none" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, marginBottom: 28 }}>
          [ 07 · contact ]
        </div>
        <h2 style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
          Let's build<br/>something good.
        </h2>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "end" }}>
          <p style={{ margin: 0, opacity: 0.75, fontSize: 14, maxWidth: 480 }}>
            For consulting, keynotes, due-diligence and the occasional sparring session.
            I reply to most messages within a day.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <a href={`mailto:${DAT.email}`} style={{ color: paper, textDecoration: "none", borderBottom: `1px solid ${accent}`, paddingBottom: 6, display: "inline-flex", justifyContent: "space-between" }}>
              <span>{DAT.email}</span><span style={{ color: accent }}>↗</span>
            </a>
            <a href={DAT.linkedin} style={{ color: paper, textDecoration: "none", borderBottom: `1px solid rgba(255,255,255,0.2)`, paddingBottom: 6, display: "inline-flex", justifyContent: "space-between" }}>
              <span>LinkedIn · {DAT.followers} followers</span><span style={{ opacity: 0.5 }}>↗</span>
            </a>
            <a href={DAT.github} style={{ color: paper, textDecoration: "none", borderBottom: `1px solid rgba(255,255,255,0.2)`, paddingBottom: 6, display: "inline-flex", justifyContent: "space-between" }}>
              <span>GitHub · @datitran</span><span style={{ opacity: 0.5 }}>↗</span>
            </a>
          </div>
        </div>
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", justifyContent: "space-between", fontSize: 11, opacity: 0.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>© Dat Tran 2016–2026</span>
          <span>Berlin · Built with care</span>
        </div>
      </section>
    </div>
  );
};

window.D1 = D1;
