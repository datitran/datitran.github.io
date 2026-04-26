// Direction 4 — "Index Card"
// The site as a giant alphabetical/numbered index. Inspired by personal
// directories, library catalogs, Susan Kare's icons. Off-white, navy ink,
// warm yellow card highlight. Massive numbered list as the spine of the
// page. Almost no decoration — typography does all the work.

const D4 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const paper = "#f7f5ef";
  const ink = "#0d2240";
  const accent = "#f4c542";
  const muted = "#5a6478";
  const rule = "rgba(13,34,64,0.18)";
  const sans = '"Inter", system-ui, sans-serif';
  const serif = '"Fraunces", Georgia, serif';

  const NumRow = ({ n, kicker, title, right, href }) => (
    <a href={href || "#"} style={{
      display: "grid", gridTemplateColumns: "100px 180px 1fr auto",
      padding: "22px 0", borderTop: `1px solid ${rule}`,
      color: ink, textDecoration: "none", alignItems: "baseline", gap: 24,
    }}>
      <span style={{ fontFamily: serif, fontSize: 32, color: accent, letterSpacing: "-0.02em" }}>{n}</span>
      <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>{kicker}</span>
      <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</span>
      <span style={{ fontSize: 12, color: muted }}>{right}</span>
    </a>
  );

  return (
    <div data-screen-label="D4 Index Card" style={{ background: paper, color: ink, fontFamily: sans, fontSize: 15, lineHeight: 1.55 }}>
      <div style={{ padding: "28px 56px", borderBottom: `2px solid ${ink}`, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ fontFamily: serif, fontSize: 28, letterSpacing: "-0.02em" }}>Dat Tran <span style={{ color: accent }}>·</span> Index</div>
        <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>Berlin · 2026 · v.III</div>
      </div>

      {/* Hero */}
      <section style={{ padding: "100px 56px 80px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 24 }}>
          File 001 · Personal directory
        </div>
        <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.05em", margin: 0 }}>
          Dat<br/><span style={{ fontStyle: "italic" }}>Tran.</span>
        </h1>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <p style={{ fontSize: 22, lineHeight: 1.45, margin: 0, maxWidth: 540 }}>
            Technologist, AI-org builder and keynote speaker. I help companies turn AI strategy into things that actually ship. Most days I am in <span style={{ background: accent, padding: "0 4px" }}>Berlin</span>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: "#fff", padding: 18, border: `1px solid ${rule}` }}>
                <div style={{ fontFamily: serif, fontSize: 36, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: muted, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 56px 60px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>§ A · About</div>
        <p style={{ fontFamily: serif, fontSize: 32, lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, maxWidth: 1000 }}>
          Former Head of AI at <em>Axel Springer</em>, where I built the AI division and shipped open source the field still uses. Before that, Head of Data at <em>idealo</em>. Now founder of <em>Dat Tran Ventures</em>, advising Beiersdorf, Bertelsmann and Axel Springer on AI strategy.
        </p>
      </section>

      <section style={{ padding: "60px 56px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>§ B · Services</div>
        {SERVICES.map((s, i) => (
          <NumRow key={s.id} n={`B.${i + 1}`} kicker={s.title} title={s.blurb} right="Inquire →" />
        ))}
      </section>

      <section style={{ padding: "60px 56px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>§ C · Selected work</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PROJECTS.slice(0, 6).map((p, i) => (
            <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none", background: "#fff", border: `1px solid ${rule}`, padding: 16 }}>
              <div style={{ aspectRatio: "4/3", background: `url(${p.img}) center/cover`, marginBottom: 14 }} />
              <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted }}>C.{i + 1} · {p.org} · {p.year}</div>
              <h4 style={{ fontFamily: serif, fontSize: 22, margin: "6px 0 6px", letterSpacing: "-0.01em" }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: muted, lineHeight: 1.5 }}>{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 56px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>§ D · Writing</div>
        {WRITING.slice(0, 6).map((w, i) => (
          <NumRow key={i} n={`D.${i + 1}`} kicker={w.outlet} title={w.title} right={w.date} />
        ))}
      </section>

      <section style={{ padding: "60px 56px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>§ E · Talks</div>
        {TALKS.slice(0, 6).map((t, i) => (
          <NumRow key={i} n={`E.${i + 1}`} kicker={`${t.kind} · ${t.venue}`} title={t.title} right={t.year} />
        ))}
      </section>

      <section style={{ padding: "60px 56px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>§ F · Words about me</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: "#fff", padding: 20, border: `1px solid ${rule}` }}>
              <div style={{ fontFamily: serif, fontSize: 40, color: accent, lineHeight: 0.6, marginBottom: 8 }}>“</div>
              <p style={{ margin: 0, fontFamily: serif, fontSize: 18, lineHeight: 1.4 }}>{t.quote}</p>
              <div style={{ marginTop: 14, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: muted }}>{t.name} · {t.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 56px", textAlign: "center", borderTop: `2px solid ${ink}`, background: "#fff" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: muted }}>§ G · Contact</div>
        <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.95, margin: "20px 0 24px" }}>
          <span style={{ background: accent, padding: "0 12px" }}>{DAT.email}</span>
        </h2>
        <p style={{ fontSize: 14, color: muted, margin: 0 }}>LinkedIn · GitHub · Medium · Twitter · © 2026</p>
      </section>
    </div>
  );
};

window.D4 = D4;
