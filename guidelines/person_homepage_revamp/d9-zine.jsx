// Direction 9 — "Zine"
// Punchy, hand-cut, riso-print feel. Off-white paper, thick black ink, two
// risograph spot colors (electric blue, fluoro pink) that overlap. Stickers,
// rotated tags, halftone, photocopy texture in spirit. Loud and human — the
// opposite of corporate.

const D9 = ({ data }) => {
  const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = data;
  const paper = "#fbf6ee";
  const ink = "#0e0e0e";
  const blue = "#1f4dff";
  const pink = "#ff3da7";
  const rule = "#0e0e0e";
  const sans = '"Inter", sans-serif';
  const display = '"Fraunces", serif';

  const Sticker = ({ children, color = pink, rot = -3, style: s = {} }) => (
    <span style={{
      display: "inline-block", background: color, color: "#fff",
      padding: "6px 14px", fontSize: 13, fontWeight: 700,
      letterSpacing: "0.04em", textTransform: "uppercase",
      transform: `rotate(${rot}deg)`, boxShadow: `4px 4px 0 ${ink}`,
      ...s,
    }}>{children}</span>
  );

  return (
    <div data-screen-label="D9 Zine" style={{ background: paper, color: ink, fontFamily: sans, fontSize: 15 }}>
      <header style={{ padding: "16px 32px", borderBottom: `4px solid ${ink}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: display, fontWeight: 700, fontSize: 28, fontStyle: "italic" }}>DAT!</div>
        <div style={{ display: "flex", gap: 14, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {["About", "Work", "Writing", "Talks", "Contact"].map((l) => <a key={l} href="#" style={{ color: ink, textDecoration: "underline", textDecorationThickness: 2 }}>{l}</a>)}
        </div>
        <Sticker color={blue} rot={-2}>● open for hire</Sticker>
      </header>

      <section style={{ padding: "60px 32px 40px", borderBottom: `4px solid ${ink}`, position: "relative" }}>
        <Sticker color={pink} rot={-6} style={{ position: "absolute", top: 24, right: 60 }}>NEW! VOL.III</Sticker>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>The Dat Tran Personal Magazine №III</div>
        <h1 style={{
          fontFamily: display, fontWeight: 700, fontSize: 240, lineHeight: 0.78, letterSpacing: "-0.05em", margin: "20px 0",
        }}>
          HI<span style={{ color: pink }}>!</span><br/>I'M <span style={{ color: blue, fontStyle: "italic" }}>DAT</span>.
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 30, alignItems: "end" }}>
          <p style={{ fontSize: 22, lineHeight: 1.35, margin: 0, fontWeight: 500, maxWidth: 720 }}>
            I work in the <span style={{ background: pink, color: "#fff", padding: "0 6px" }}>intersection</span> between <span style={{ background: blue, color: "#fff", padding: "0 6px" }}>humans</span> and <span style={{ background: ink, color: paper, padding: "0 6px" }}>machines</span>. I run an AI advisory, give keynotes, ship open source — and try to keep it human in the process.
          </p>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "3/4", background: `url(assets/leadership.jpg) center/cover`, filter: "grayscale(1) contrast(1.3)", border: `4px solid ${ink}`, transform: "rotate(2deg)", boxShadow: `8px 8px 0 ${blue}` }} />
            <Sticker rot={-8} style={{ position: "absolute", bottom: -16, left: -10 }}>← that's me!</Sticker>
          </div>
        </div>
      </section>

      {/* Stats — like a cover banner */}
      <section style={{ padding: "20px 32px", background: ink, color: paper, display: "flex", justifyContent: "space-between", overflow: "hidden", borderBottom: `4px solid ${ink}` }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontFamily: display, fontWeight: 700, fontSize: 56, letterSpacing: "-0.02em", color: i % 2 === 0 ? pink : blue, lineHeight: 1 }}>{s.value}</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", maxWidth: 140 }}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* Services as a "menu" */}
      <section style={{ padding: "60px 32px", borderBottom: `4px solid ${ink}` }}>
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 88, letterSpacing: "-0.03em", margin: "0 0 30px", fontStyle: "italic" }}>
          What's <span style={{ color: pink }}>on the menu</span>:
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `4px solid ${ink}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} style={{ padding: 28, borderRight: i % 2 === 0 ? `4px solid ${ink}` : "none", borderBottom: i < 2 ? `4px solid ${ink}` : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: display, fontWeight: 700, fontSize: 56, color: i % 2 === 0 ? pink : blue, lineHeight: 1 }}>№ {s.glyph}</span>
                <Sticker color={i % 2 === 0 ? blue : pink} rot={i % 2 === 0 ? 3 : -3}>book it</Sticker>
              </div>
              <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 32, margin: "12px 0 8px" }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: "60px 32px", borderBottom: `4px solid ${ink}` }}>
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 88, letterSpacing: "-0.03em", margin: "0 0 30px" }}>
          STUFF I'VE <span style={{ fontStyle: "italic", color: blue }}>MADE</span>.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PROJECTS.slice(0, 6).map((p, i) => (
            <a key={p.title} href={p.href} style={{ color: ink, textDecoration: "none", display: "block", border: `4px solid ${ink}`, background: paper, padding: 12, transform: i % 2 === 0 ? "rotate(-0.6deg)" : "rotate(0.5deg)", boxShadow: `6px 6px 0 ${i % 3 === 0 ? pink : blue}` }}>
              <div style={{ aspectRatio: "4/3", background: `url(${p.img}) center/cover`, filter: "contrast(1.1)" }} />
              <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.org} · {p.year}</div>
              <h4 style={{ fontFamily: display, fontWeight: 700, fontSize: 22, margin: "4px 0 6px" }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Writing as table */}
      <section style={{ padding: "60px 32px", borderBottom: `4px solid ${ink}` }}>
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 88, letterSpacing: "-0.03em", margin: "0 0 24px" }}>
          BACK <span style={{ color: pink, fontStyle: "italic" }}>ISSUES</span>.
        </h2>
        <div style={{ border: `4px solid ${ink}` }}>
          {WRITING.slice(0, 6).map((w, i) => (
            <a key={i} href="#" style={{
              display: "grid", gridTemplateColumns: "60px 1fr 200px 100px", gap: 16,
              padding: "16px 18px", borderBottom: i < 5 ? `2px solid ${ink}` : "none",
              color: ink, textDecoration: "none", alignItems: "baseline",
              background: i % 2 === 0 ? paper : "rgba(31,77,255,0.06)",
            }}>
              <span style={{ fontFamily: display, fontWeight: 700, fontSize: 28, color: pink, fontStyle: "italic" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{w.title}</span>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{w.outlet}</span>
              <span style={{ fontSize: 12, textAlign: "right" }}>{w.date}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "80px 32px", textAlign: "center" }}>
        <Sticker color={blue} rot={-5}>letters to the editor</Sticker>
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 200, letterSpacing: "-0.05em", lineHeight: 0.85, margin: "20px 0", fontStyle: "italic" }}>
          WRITE<span style={{ color: pink }}>!</span> ME<span style={{ color: blue }}>!</span>
        </h2>
        <a href={`mailto:${DAT.email}`} style={{ fontFamily: display, fontWeight: 700, fontSize: 32, color: ink, textDecoration: "underline", textDecorationThickness: 4, textDecorationColor: pink }}>{DAT.email}</a>
      </section>
    </div>
  );
};

window.D9 = D9;
