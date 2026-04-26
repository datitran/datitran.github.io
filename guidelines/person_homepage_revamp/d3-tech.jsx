// Direction 3 — "Tech-forward dark"
// AI-engineer aesthetic done with restraint. Near-black background, off-white
// ink, a single electric-cyan accent. Geist Mono for code/labels, Inter for
// body, big tight Inter Black for display. Lots of fine 1px cyan/grey rules,
// ASCII-tinged details, a tiny "system" status bar at top, network/graph
// motifs, but no gradient-and-glow slop. Confident, current, AI-native.

const D3 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const bg = "#0b0c0d";
  const surface = "#111315";
  const ink = "#e8e6e1";
  const muted = "#7a7d80";
  const accent = "#6effd6"; // electric mint-cyan
  const rule = "rgba(255,255,255,0.08)";
  const mono = '"Geist Mono", "JetBrains Mono", ui-monospace, monospace';
  const sans = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';

  return (
    <div data-screen-label="D3 Tech-forward" style={{
      background: bg, color: ink, fontFamily: sans, fontSize: 14, lineHeight: 1.55,
    }}>
      {/* Status bar */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        padding: "10px 32px", fontFamily: mono, fontSize: 10,
        letterSpacing: "0.12em", textTransform: "uppercase", color: muted,
        borderBottom: `1px solid ${rule}`,
      }}>
        <span>SYS · dat-tran.com · build 2026.04</span>
        <span style={{ textAlign: "center" }}>52.5200° N, 13.4050° E · BERLIN</span>
        <span style={{ textAlign: "right", color: accent }}>● live · accepting briefs</span>
      </div>

      {/* NAV */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 32px", borderBottom: `1px solid ${rule}`, position: "sticky", top: 0, background: bg, zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="0.5" y="0.5" width="27" height="27" stroke={accent} />
            <path d="M6 14 L14 6 L22 14 L14 22 Z" stroke={accent} strokeWidth="1" fill="none" />
            <circle cx="14" cy="14" r="2" fill={accent} />
          </svg>
          <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.02em" }}>
            dat<span style={{ color: accent }}>·</span>tran
          </span>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: mono, fontSize: 12, letterSpacing: "0.04em" }}>
          {["index", "work", "writing", "talks", "contact"].map((l, i) => (
            <a key={l} href="#" style={{ color: ink, textDecoration: "none", opacity: 0.75 }}>
              <span style={{ color: muted }}>{String(i).padStart(2, "0")}</span> {l}
            </a>
          ))}
        </div>
        <a href="#" style={{
          fontFamily: mono, fontSize: 12, color: bg, background: accent,
          padding: "8px 16px", textDecoration: "none", letterSpacing: "0.04em",
        }}>book intro call →</a>
      </nav>

      {/* HERO */}
      <section style={{
        padding: "80px 32px 100px",
        backgroundImage: `linear-gradient(${rule} 1px, transparent 1px), linear-gradient(90deg, ${rule} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        backgroundPosition: "-1px -1px",
        position: "relative",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 24 }}>
              ┌── /home/dat/about.md
            </div>
            <h1 style={{
              fontFamily: sans, fontWeight: 900, fontSize: 104,
              lineHeight: 0.92, letterSpacing: "-0.045em", margin: 0,
            }}>
              I build &amp; lead<br/>
              <span style={{ fontStyle: "italic", fontWeight: 300, color: accent, fontFamily: '"Instrument Serif", serif', letterSpacing: "-0.03em" }}>AI organizations</span><br/>
              that actually ship.
            </h1>
            <p style={{ marginTop: 32, fontSize: 18, lineHeight: 1.55, maxWidth: 600, color: "rgba(232,230,225,0.78)" }}>
              I'm Dat — former Head of AI at Axel Springer, founder of Dat Tran Ventures.
              I help companies turn ML research into production, hire teams that don't break,
              and tell the difference between AI hype and the work.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 14 }}>
              <a href={`mailto:${DAT.email}`} style={{
                fontFamily: mono, fontSize: 13, padding: "12px 20px", background: accent, color: bg,
                textDecoration: "none", letterSpacing: "0.04em",
              }}>{DAT.email} →</a>
              <a href="#" style={{
                fontFamily: mono, fontSize: 13, padding: "12px 20px", border: `1px solid ${rule}`, color: ink,
                textDecoration: "none", letterSpacing: "0.04em",
              }}>view cv.pdf</a>
            </div>
          </div>

          {/* terminal-style id card */}
          <div style={{ background: surface, border: `1px solid ${rule}`, fontFamily: mono, fontSize: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", borderBottom: `1px solid ${rule}`, color: muted, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <span>~/identity.json</span>
              <span style={{ color: accent }}>● ok</span>
            </div>
            <div style={{ padding: 18, lineHeight: 1.9 }}>
              <div><span style={{ color: muted }}>name</span>     <span>= "Dat Tran"</span></div>
              <div><span style={{ color: muted }}>role</span>     <span>= "Founder, Dat Tran Ventures"</span></div>
              <div><span style={{ color: muted }}>prev</span>     <span>= ["Axel Springer", "idealo", "Pivotal"]</span></div>
              <div><span style={{ color: muted }}>focus</span>    <span>= ["AI strategy", "ML eng", "leadership"]</span></div>
              <div><span style={{ color: muted }}>writing</span>  <span>= "{WRITING.length}+ articles"</span></div>
              <div><span style={{ color: muted }}>talks</span>    <span>= "{TALKS.length}+ keynotes &amp; podcasts"</span></div>
              <div><span style={{ color: muted }}>net</span>      <span style={{ color: accent }}>= "{DAT.followers} followers · LinkedIn"</span></div>
              <div><span style={{ color: muted }}>status</span>   <span style={{ color: accent }}>= "available_q3"</span></div>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div style={{
          marginTop: 80, display: "grid", gridTemplateColumns: `repeat(${STATS.length}, 1fr)`,
          border: `1px solid ${rule}`, background: surface,
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "26px 22px",
              borderRight: i < STATS.length - 1 ? `1px solid ${rule}` : "none",
            }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>
                /{String(i + 1).padStart(2, "0")} {s.label}
              </div>
              <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 8 }}>
                <span style={{ color: accent }}>{s.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I DO / SERVICES */}
      <section style={{ padding: "80px 32px", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              §02 · services
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 56, letterSpacing: "-0.035em", lineHeight: 1, margin: "16px 0 0" }}>
              Four ways<br/>to bring me in.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "rgba(232,230,225,0.7)", lineHeight: 1.55, margin: "auto 0 0" }}>
            Engagements run from a single keynote to multi-quarter advisory. I work directly
            with execs, but also sleeves-up with engineering teams when the strategy needs to
            survive contact with reality.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: `1px solid ${rule}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} style={{
              padding: "28px 22px",
              borderRight: i < SERVICES.length - 1 ? `1px solid ${rule}` : "none",
              minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between",
              background: surface,
            }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.12em", marginBottom: 18 }}>
                  /{s.glyph} ──
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(232,230,225,0.65)", lineHeight: 1.6 }}>{s.blurb}</p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", fontFamily: mono, fontSize: 11, color: muted }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ padding: "4px 0", borderTop: `1px solid ${rule}` }}>
                    <span style={{ color: accent }}>+</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section style={{ padding: "80px 32px", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              §03 · selected work
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 56, letterSpacing: "-0.035em", lineHeight: 1, margin: "16px 0 0" }}>
              Things I helped ship.
            </h2>
          </div>
          <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: "0.1em" }}>
            12 entries · sorted by impact ↓
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {PROJECTS.map((p, i) => (
            <a key={p.title} href={p.href} style={{
              color: ink, textDecoration: "none", display: "block",
              border: `1px solid ${rule}`, background: surface,
              transition: "border-color .2s",
            }}>
              <div style={{
                aspectRatio: "16/10",
                background: `url(${p.img}) center/cover, ${bg}`,
                borderBottom: `1px solid ${rule}`,
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 12, left: 12, fontFamily: mono, fontSize: 10,
                  background: bg, color: accent, padding: "4px 8px", letterSpacing: "0.1em",
                }}>P_{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ fontFamily: mono, fontSize: 10, color: muted, letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
                  <span>{p.org}</span><span>{p.year}</span>
                </div>
                <h4 style={{ margin: "10px 0 6px", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.title}</h4>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(232,230,225,0.65)", lineHeight: 1.55 }}>{p.blurb}</p>
                <div style={{ marginTop: 14, fontFamily: mono, fontSize: 10, color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ↳ {p.tag}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WRITING + TALKS in two columns */}
      <section style={{ padding: "80px 32px", borderTop: `1px solid ${rule}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        <div style={{ paddingRight: 40, borderRight: `1px solid ${rule}` }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            §04 · writing
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 40, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "16px 0 24px" }}>
            Selected articles.
          </h2>
          {WRITING.slice(0, 6).map((w, i) => (
            <a key={i} href="#" style={{
              display: "block", padding: "16px 0", borderTop: `1px solid ${rule}`,
              color: ink, textDecoration: "none",
            }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: muted, letterSpacing: "0.08em", display: "flex", justifyContent: "space-between" }}>
                <span>{w.outlet}</span><span>{w.date}</span>
              </div>
              <div style={{ marginTop: 6, fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{w.title}</div>
            </a>
          ))}
        </div>
        <div style={{ paddingLeft: 40 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            §05 · talks &amp; podcasts
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 40, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "16px 0 24px" }}>
            On stage &amp; on air.
          </h2>
          {TALKS.slice(0, 6).map((t, i) => (
            <a key={i} href="#" style={{
              display: "grid", gridTemplateColumns: "1fr auto", gap: 16,
              padding: "16px 0", borderTop: `1px solid ${rule}`,
              color: ink, textDecoration: "none", alignItems: "baseline",
            }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10, color: muted, letterSpacing: "0.08em" }}>
                  <span style={{ color: accent }}>● {t.kind}</span> · {t.venue}
                </div>
                <div style={{ marginTop: 6, fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{t.title}</div>
              </div>
              <div style={{ fontFamily: mono, fontSize: 12, color: muted }}>{t.year}</div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 32px", borderTop: `1px solid ${rule}` }}>
        <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
          §06 · signal
        </div>
        <h2 style={{ fontWeight: 800, fontSize: 56, letterSpacing: "-0.035em", lineHeight: 1, margin: "0 0 40px" }}>
          What people say.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              padding: 24, background: surface, border: `1px solid ${rule}`, position: "relative",
            }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: accent, letterSpacing: "0.12em", marginBottom: 14 }}>
                ★★★★★
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>{t.quote}</p>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${rule}`, fontFamily: mono, fontSize: 11, color: muted, letterSpacing: "0.06em" }}>
                {t.name} · {t.role}
              </div>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div style={{ marginTop: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>
            // worked with &amp; spoken at
          </div>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${COMPANIES.length}, 1fr)`, border: `1px solid ${rule}`, background: surface }}>
            {COMPANIES.map((c, i) => (
              <div key={c} style={{
                padding: "26px 8px", textAlign: "center",
                fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.02em", color: ink,
                borderRight: i < COMPANIES.length - 1 ? `1px solid ${rule}` : "none",
              }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{
        padding: "100px 32px", borderTop: `1px solid ${rule}`,
        background: `radial-gradient(circle at 50% 0%, rgba(110,255,214,0.08), transparent 60%), ${bg}`,
      }}>
        <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            §07 · contact
          </div>
          <h2 style={{
            fontWeight: 800, fontSize: 104, letterSpacing: "-0.045em", lineHeight: 0.94, margin: "20px 0 24px",
          }}>
            Have a brief?<br/>
            <span style={{ color: accent }}>Send it over.</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(232,230,225,0.7)", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.55 }}>
            I read every message. Most replies inside 24 hours. If your idea is half-baked,
            even better — that's where the interesting work is.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href={`mailto:${DAT.email}`} style={{
              fontFamily: mono, fontSize: 14, padding: "16px 28px", background: accent, color: bg,
              textDecoration: "none", letterSpacing: "0.04em", fontWeight: 600,
            }}>{DAT.email} →</a>
            <a href={DAT.linkedin} style={{
              fontFamily: mono, fontSize: 14, padding: "16px 28px", border: `1px solid ${accent}`, color: accent,
              textDecoration: "none", letterSpacing: "0.04em",
            }}>LinkedIn ↗</a>
          </div>
        </div>

        {/* Footer system bar */}
        <div style={{
          marginTop: 100, paddingTop: 18, borderTop: `1px solid ${rule}`,
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          fontFamily: mono, fontSize: 10, color: muted, letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          <span>© Dat Tran · 2016–2026</span>
          <span style={{ textAlign: "center" }}>v3.0 · last edit 2026.04.26</span>
          <span style={{ textAlign: "right" }}>linkedin · github · medium · twitter</span>
        </div>
      </section>
    </div>
  );
};

window.D3 = D3;
