// Direction 2 — "Editorial"
// Confident publication aesthetic. Big Fraunces serif + Inter body, generous
// whitespace, asymmetric grid, drop-cap, marginalia. Warm cream paper.
// One muted ink (deep plum) + a soft red highlight. Reads like a long-form
// magazine profile of Dat — not a developer site. Emphasizes warmth and
// authority over technical signaling.

const D2 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const paper = "#f6f1ea";
  const ink = "#1a1816";
  const muted = "#6b5f54";
  const accent = "#b4452f"; // terracotta
  const rule = "rgba(26,24,22,0.15)";

  const serif = '"Fraunces", "Instrument Serif", Georgia, serif';
  const sans = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';

  return (
    <div data-screen-label="D2 Editorial" style={{
      background: paper, color: ink, fontFamily: sans, fontSize: 15, lineHeight: 1.6,
    }}>
      {/* MASTHEAD */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "26px 56px", borderBottom: `1px solid ${rule}`, fontSize: 11,
        letterSpacing: "0.18em", textTransform: "uppercase", color: muted,
      }}>
        <span>Vol. III · Issue 04 · 2026</span>
        <span style={{ fontFamily: serif, fontSize: 22, letterSpacing: "0.02em", textTransform: "none", color: ink, fontWeight: 500 }}>
          Dat<span style={{ color: accent }}>.</span>
        </span>
        <span>Berlin · 11° clear</span>
      </div>

      {/* NAV */}
      <nav style={{
        display: "flex", justifyContent: "center", gap: 40, padding: "16px 56px",
        borderBottom: `2px solid ${ink}`, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
      }}>
        {["Profile", "Services", "Work", "Writing", "Talks", "Contact"].map((l) => (
          <a key={l} href="#" style={{ textDecoration: "none", color: ink }}>{l}</a>
        ))}
      </nav>

      {/* HERO — magazine cover */}
      <section style={{ padding: "72px 56px 64px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "end" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
            The Profile · No. 04
          </div>
          <h1 style={{
            fontFamily: serif, fontWeight: 400, fontSize: 128, lineHeight: 0.9,
            letterSpacing: "-0.04em", margin: "20px 0 0",
          }}>
            <span style={{ fontStyle: "italic", color: accent }}>Dat</span> Tran<span style={{ color: accent }}>.</span>
          </h1>
          <p style={{
            fontFamily: serif, fontWeight: 300, fontStyle: "italic",
            fontSize: 28, lineHeight: 1.25, margin: "24px 0 0", color: muted, maxWidth: 520,
          }}>
            The technologist who turns AI hype into things that actually ship — on stages, in boardrooms, and quietly, in code.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 24, alignItems: "center", fontSize: 12, color: muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <span>Words &amp; portrait</span>
            <span>·</span>
            <span>Self, mostly</span>
            <span>·</span>
            <span style={{ color: accent }}>● Available for work</span>
          </div>
        </div>
        <div style={{
          aspectRatio: "4/5",
          background: `url(assets/leadership.jpg) center/cover`,
          filter: "saturate(0.85) contrast(1.04)",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", bottom: -1, right: -1, background: paper,
            padding: "12px 18px", fontSize: 11, letterSpacing: "0.12em",
            textTransform: "uppercase", color: muted, borderTop: `1px solid ${ink}`, borderLeft: `1px solid ${ink}`,
          }}>
            Photographed live · Berlin
          </div>
        </div>
      </section>

      {/* MARQUEE QUOTE */}
      <section style={{ padding: "0 56px 64px" }}>
        <div style={{
          borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}`, padding: "40px 0",
          fontFamily: serif, fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.03em", textAlign: "center",
        }}>
          “I work in the <em style={{ color: accent }}>intersection</em> between<br/>humans &amp; machines.”
        </div>
      </section>

      {/* PROFILE / ABOUT */}
      <section style={{ padding: "0 56px 80px", display: "grid", gridTemplateColumns: "200px 1fr 1fr", gap: 48 }}>
        <aside style={{ fontSize: 12, color: muted, lineHeight: 1.7 }}>
          <div style={{ fontWeight: 600, color: ink, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            At a glance
          </div>
          {STATS.map((s) => (
            <div key={s.label} style={{ marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${rule}` }}>
              <div style={{ fontFamily: serif, fontSize: 32, color: ink, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </aside>
        <div style={{ gridColumn: "2 / span 2" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
            § One · The story so far
          </div>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "16px 0 24px" }}>
            A technologist who ships, then explains.
          </h2>
          <div style={{ columnCount: 2, columnGap: 36, fontSize: 15, lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>
              <span style={{ fontFamily: serif, fontSize: 60, lineHeight: 0.9, float: "left", marginRight: 8, marginTop: 4, color: accent }}>D</span>
              at is a seasoned technology and business leader with experience creating, transforming and leading both large and small organizations. As former <strong>Head of AI at Axel Springer</strong>, he established the AI division and shaped the group's tech-oriented mindset through open-source work and the first group-wide TechCon.
            </p>
            <p>
              At <strong>idealo</strong>, he led a data team that turned a cost center into a profit center — driving CRM, optimizing user experience, and contributing to one of Germany's most-watched OSS portfolios.
            </p>
            <p>
              Today, through <strong>Dat Tran Ventures</strong>, he advises companies like Beiersdorf, Bertelsmann and Axel Springer on AI, digital transformation, and tech strategy. His writing and talks reach a community of {DAT.followers} on LinkedIn alone, where he regularly shares insights on AI and tech leadership.
            </p>
            <p>
              He is, by his own admission, a pragmatist with a soft spot for the weird corners of computer vision — the raccoons, the chancellors, the hotel-photo aesthetics scoring.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "64px 56px", borderTop: `1px solid ${ink}`, background: "#efe7d9" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
          § Two · How we work together
        </div>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "16px 0 40px", maxWidth: 800 }}>
          Four ways to bring me in.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: `1px solid ${ink}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} style={{
              padding: "28px 24px",
              borderBottom: `1px solid ${ink}`,
              borderRight: i % 2 === 0 ? `1px solid ${ink}` : "none",
              display: "grid", gridTemplateColumns: "60px 1fr", gap: 16,
            }}>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 36, color: accent, lineHeight: 1 }}>{s.glyph}</div>
              <div>
                <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: 24, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: muted, lineHeight: 1.55 }}>{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={{ padding: "80px 56px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 36 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
              § Three · Selected work
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 48, letterSpacing: "-0.03em", margin: "12px 0 0" }}>
              From the archive.
            </h2>
          </div>
          <a href="#" style={{ fontSize: 13, color: ink, textDecoration: "none", borderBottom: `1px solid ${accent}` }}>See all 12 →</a>
        </div>

        {/* big feature + grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, marginBottom: 32 }}>
          <a href={PROJECTS[0].href} style={{ color: ink, textDecoration: "none" }}>
            <div style={{
              aspectRatio: "16/10",
              background: `url(${PROJECTS[0].img}) center/cover`,
            }} />
            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>
              <span>{PROJECTS[0].org}</span><span>{PROJECTS[0].year} · {PROJECTS[0].tag}</span>
            </div>
            <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 36, letterSpacing: "-0.02em", margin: "10px 0 6px", lineHeight: 1.05 }}>
              {PROJECTS[0].title}
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: muted, maxWidth: 520 }}>{PROJECTS[0].blurb}</p>
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {PROJECTS.slice(1, 4).map((p) => (
              <a key={p.title} href={p.href} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, color: ink, textDecoration: "none", paddingBottom: 16, borderBottom: `1px solid ${rule}` }}>
                <div style={{ aspectRatio: "1/1", background: `url(${p.img}) center/cover` }} />
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>
                    {p.org} · {p.year}
                  </div>
                  <h4 style={{ fontFamily: serif, fontWeight: 500, fontSize: 20, margin: "4px 0 4px", lineHeight: 1.1 }}>{p.title}</h4>
                  <p style={{ margin: 0, fontSize: 13, color: muted, lineHeight: 1.5 }}>{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
          {PROJECTS.slice(4).map((p) => (
            <a key={p.title} href={p.href} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 18, color: ink, textDecoration: "none" }}>
              <div style={{ aspectRatio: "4/3", background: `url(${p.img}) center/cover` }} />
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>
                  {p.org} · {p.year}
                </div>
                <h4 style={{ fontFamily: serif, fontWeight: 500, fontSize: 22, margin: "4px 0 4px", lineHeight: 1.1 }}>{p.title}</h4>
                <p style={{ margin: 0, fontSize: 13, color: muted, lineHeight: 1.5 }}>{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WRITING */}
      <section style={{ padding: "64px 56px", borderTop: `1px solid ${ink}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
              § Four · The Writing
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 48, letterSpacing: "-0.03em", margin: "12px 0 16px", lineHeight: 1.05 }}>
              Notes on AI, leadership &amp; the messy middle.
            </h2>
            <p style={{ fontSize: 14, color: muted, margin: 0 }}>
              On NVIDIA Developer, Towards Data Science, idealo Tech, and Dev.to.
            </p>
          </div>
          <div>
            {WRITING.slice(0, 6).map((w, i) => (
              <a key={i} href="#" style={{
                display: "grid", gridTemplateColumns: "1fr 200px 80px",
                padding: "20px 0", borderTop: `1px solid ${rule}`,
                gap: 24, color: ink, textDecoration: "none", alignItems: "baseline",
              }}>
                <span style={{ fontFamily: serif, fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{w.title}</span>
                <span style={{ fontSize: 12, color: muted, letterSpacing: "0.04em", textTransform: "uppercase" }}>{w.outlet}</span>
                <span style={{ fontSize: 12, color: muted, textAlign: "right" }}>{w.date}</span>
              </a>
            ))}
            <div style={{ borderTop: `1px solid ${rule}`, paddingTop: 18, fontSize: 13, color: muted }}>
              … and {WRITING.length - 6 + 18}+ more in the archive.
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE / TESTIMONIAL */}
      <section style={{ padding: "80px 56px", background: ink, color: paper }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600, marginBottom: 32 }}>
          § Five · What people say
        </div>
        <blockquote style={{
          fontFamily: serif, fontWeight: 300, fontStyle: "italic",
          fontSize: 56, lineHeight: 1.1, letterSpacing: "-0.02em",
          margin: 0, maxWidth: 1100,
        }}>
          “Dat is the rare blend of <span style={{ color: accent, fontStyle: "normal" }}>deep technical chops</span> and senior leadership judgement. He set up our AI division from scratch and shipped open source the whole field uses.”
        </blockquote>
        <div style={{ marginTop: 32, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246,241,234,0.6)" }}>
          {TESTIMONIALS[0].name} · {TESTIMONIALS[0].role}
        </div>

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div key={i} style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 18 }}>
              <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22, lineHeight: 1.4, margin: 0 }}>
                {t.quote}
              </p>
              <div style={{ marginTop: 14, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246,241,234,0.6)" }}>
                {t.name} · {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TALKS */}
      <section style={{ padding: "80px 56px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
          § Six · On stage &amp; on air
        </div>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 48, letterSpacing: "-0.03em", margin: "12px 0 32px" }}>
          Recent talks &amp; podcasts.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {TALKS.slice(0, 8).map((t, i) => (
            <div key={i} style={{
              padding: 18, border: `1px solid ${rule}`, background: "#fff",
              minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
                  {t.kind}
                </div>
                <div style={{ fontFamily: serif, fontSize: 18, lineHeight: 1.2, margin: "10px 0 8px" }}>{t.title}</div>
              </div>
              <div style={{ fontSize: 11, color: muted, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {t.venue} · {t.year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "0 56px 64px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, fontWeight: 600, marginBottom: 18 }}>
          Companies &amp; venues
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${COMPANIES.length}, 1fr)`,
          borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}`,
        }}>
          {COMPANIES.map((c, i) => (
            <div key={c} style={{
              padding: "28px 8px", textAlign: "center",
              fontFamily: serif, fontSize: 22, fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.01em",
              borderRight: i < COMPANIES.length - 1 ? `1px solid ${rule}` : "none",
            }}>{c}</div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "120px 56px 80px", textAlign: "center", borderTop: `2px solid ${ink}` }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>
          § Seven · Get in touch
        </div>
        <h2 style={{
          fontFamily: serif, fontWeight: 400, fontSize: 120, lineHeight: 0.95,
          letterSpacing: "-0.04em", margin: "24px 0 12px",
        }}>
          <span style={{ fontStyle: "italic", color: accent }}>Hello</span>, then?
        </h2>
        <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 24, color: muted, margin: "0 auto 36px", maxWidth: 600 }}>
          For consulting, keynotes, due-diligence and the occasional sparring session.
        </p>
        <a href={`mailto:${DAT.email}`} style={{
          display: "inline-block", fontSize: 18, fontWeight: 500, color: ink,
          padding: "16px 36px", border: `2px solid ${ink}`, textDecoration: "none",
          letterSpacing: "0.02em",
        }}>
          {DAT.email} →
        </a>

        <div style={{ marginTop: 80, paddingTop: 24, borderTop: `1px solid ${rule}`, display: "flex", justifyContent: "space-between", fontSize: 11, color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <span>© Dat Tran 2016–2026</span>
          <span>LinkedIn · GitHub · Medium · Twitter</span>
          <span>Imprint · Privacy</span>
        </div>
      </section>
    </div>
  );
};

window.D2 = D2;
