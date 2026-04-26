// Direction 8 — "Card OS"
// Site as a tiled deck of cards (Notion / Things / Things-app feel). Soft
// neutrals, one bold cobalt accent, friendly rounded corners but tight
// info density. Each section is a card. Conveys "I have my act together."

const D8 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const bg = "#eef0f4";
  const card = "#ffffff";
  const ink = "#13192a";
  const muted = "#5a637a";
  const accent = "#2451ff";
  const rule = "rgba(19,25,42,0.08)";
  const sans = '"Inter", sans-serif';

  const Card = ({ children, style: s = {}, span = 4, rows = 1 }) => (
    <div style={{ gridColumn: `span ${span}`, gridRow: `span ${rows}`, background: card, borderRadius: 18, padding: 24, boxShadow: "0 1px 0 rgba(19,25,42,0.04), 0 8px 24px rgba(19,25,42,0.04)", ...s }}>
      {children}
    </div>
  );

  return (
    <div data-screen-label="D8 Card OS" style={{ background: bg, color: ink, fontFamily: sans, fontSize: 14, lineHeight: 1.5, padding: "24px 24px 60px" }}>
      {/* nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>D</div>
          dat-tran.com
        </div>
        <div style={{ display: "flex", gap: 6, background: card, padding: 4, borderRadius: 12, boxShadow: "0 1px 0 rgba(19,25,42,0.04)" }}>
          {["Overview", "Work", "Writing", "Talks", "Contact"].map((l, i) => (
            <a key={l} href="#" style={{ padding: "6px 12px", borderRadius: 8, fontSize: 13, color: i === 0 ? "#fff" : ink, background: i === 0 ? accent : "transparent", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <a href={`mailto:${DAT.email}`} style={{ fontSize: 13, color: ink, padding: "8px 14px", background: card, borderRadius: 10, textDecoration: "none", boxShadow: "0 1px 0 rgba(19,25,42,0.04)" }}>● Available · book a call</a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        {/* Hero card */}
        <Card span={8} rows={2} style={{ padding: 36, background: `linear-gradient(135deg, ${ink} 0%, #1f2a4a 100%)`, color: "#fff", borderRadius: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6 }}>Hi —</div>
          <h1 style={{ fontWeight: 800, fontSize: 76, letterSpacing: "-0.04em", lineHeight: 0.95, margin: "12px 0 20px" }}>
            I'm Dat. I build &amp; lead AI orgs that <span style={{ color: "#9bb1ff", fontStyle: "italic", fontWeight: 300 }}>actually ship.</span>
          </h1>
          <p style={{ fontSize: 17, opacity: 0.85, maxWidth: 560, margin: 0 }}>
            Former Head of AI at Axel Springer. Founder of Dat Tran Ventures. Today I help companies turn ML strategy into production reality.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
            <a href={`mailto:${DAT.email}`} style={{ background: accent, color: "#fff", padding: "12px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Get in touch →</a>
            <a href="#" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "12px 18px", borderRadius: 10, fontSize: 13, textDecoration: "none" }}>View CV</a>
          </div>
        </Card>

        {/* Portrait card */}
        <Card span={4} rows={2} style={{ padding: 0, overflow: "hidden", borderRadius: 24 }}>
          <div style={{ width: "100%", height: "100%", minHeight: 360, background: `url(assets/leadership.jpg) center/cover` }} />
        </Card>

        {/* Stats cards */}
        {STATS.map((s) => (
          <Card key={s.label} span={3}>
            <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: muted }}>{s.label}</div>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginTop: 6 }}>{s.value}</div>
          </Card>
        ))}

        {/* Services — 4 cards */}
        <Card span={12} style={{ padding: 0 }}>
          <div style={{ padding: "20px 24px", borderBottom: `1px solid ${rule}`, display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>How we work together</div>
            <div style={{ fontSize: 12, color: muted }}>4 service tracks</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {SERVICES.map((s, i) => (
              <div key={s.id} style={{ padding: 22, borderRight: i < 3 ? `1px solid ${rule}` : "none" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#eaeefb", color: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{s.glyph}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "14px 0 6px" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: muted, lineHeight: 1.55 }}>{s.blurb}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects */}
        <Card span={12} style={{ padding: 0 }}>
          <div style={{ padding: "20px 24px", borderBottom: `1px solid ${rule}`, display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Selected work</div>
            <a href="#" style={{ fontSize: 12, color: accent, textDecoration: "none" }}>See all 12 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", padding: 16, gap: 12 }}>
            {PROJECTS.slice(0, 6).map((p) => (
              <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none", borderRadius: 14, overflow: "hidden", border: `1px solid ${rule}`, display: "block" }}>
                <div style={{ aspectRatio: "16/10", background: `url(${p.img}) center/cover` }} />
                <div style={{ padding: 14 }}>
                  <div style={{ fontSize: 11, color: muted, letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
                    <span>{p.org}</span><span>{p.year}</span>
                  </div>
                  <h4 style={{ margin: "6px 0 4px", fontSize: 16, fontWeight: 700 }}>{p.title}</h4>
                  <p style={{ margin: 0, fontSize: 12, color: muted, lineHeight: 1.5 }}>{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </Card>

        {/* Writing */}
        <Card span={6}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Writing</div>
            <span style={{ fontSize: 12, color: muted }}>{WRITING.length}+ articles</span>
          </div>
          {WRITING.slice(0, 5).map((w, i) => (
            <a key={i} href="#" style={{ display: "block", padding: "12px 0", borderTop: `1px solid ${rule}`, color: ink, textDecoration: "none" }}>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.35 }}>{w.title}</div>
              <div style={{ fontSize: 11, color: muted, marginTop: 2 }}>{w.outlet} · {w.date}</div>
            </a>
          ))}
        </Card>

        {/* Talks */}
        <Card span={6}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Talks &amp; podcasts</div>
            <span style={{ fontSize: 12, color: muted }}>{TALKS.length}+ appearances</span>
          </div>
          {TALKS.slice(0, 5).map((t, i) => (
            <a key={i} href="#" style={{ display: "block", padding: "12px 0", borderTop: `1px solid ${rule}`, color: ink, textDecoration: "none" }}>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.35 }}>{t.title}</div>
              <div style={{ fontSize: 11, color: muted, marginTop: 2 }}>● {t.kind} · {t.venue} · {t.year}</div>
            </a>
          ))}
        </Card>

        {/* Testimonial card */}
        <Card span={8} style={{ background: ink, color: "#fff" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9bb1ff", marginBottom: 14 }}>Signal</div>
          <p style={{ fontSize: 22, lineHeight: 1.4, margin: 0, fontWeight: 500, letterSpacing: "-0.01em" }}>"{TESTIMONIALS[0].quote}"</p>
          <div style={{ marginTop: 16, fontSize: 12, opacity: 0.7 }}>— {TESTIMONIALS[0].name}, {TESTIMONIALS[0].role}</div>
        </Card>

        {/* Contact card */}
        <Card span={4} style={{ background: accent, color: "#fff" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85 }}>Contact</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", margin: "10px 0 14px", lineHeight: 1.1 }}>Let's chat.</h3>
          <a href={`mailto:${DAT.email}`} style={{ display: "block", color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none", marginBottom: 14 }}>{DAT.email} →</a>
          <div style={{ fontSize: 12, opacity: 0.85 }}>LinkedIn · GitHub · Medium</div>
        </Card>

        {/* Companies */}
        <Card span={12}>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: muted, marginBottom: 14 }}>Worked with &amp; spoken at</div>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${COMPANIES.length}, 1fr)`, gap: 12 }}>
            {COMPANIES.map((c) => (
              <div key={c} style={{ padding: "16px 8px", textAlign: "center", fontSize: 14, fontWeight: 600, background: bg, borderRadius: 10 }}>{c}</div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

window.D8 = D8;
