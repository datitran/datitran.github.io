// Full Zine homepage — Dat Tran personal site
// Direction: zine / risograph print, blue + fluoro pink spot colors,
// keeps original site's full section list (welcome, services, projects)
// plus about, companies, talks, open-source, contact.

const ZINE_DATA = window;
const { DAT, SERVICES, PROJECTS, WRITING, TALKS, COMPANIES, TESTIMONIALS, STATS } = ZINE_DATA;

const PAPER = "#fbf6ee";
const INK = "#0e0e0e";
const BLUE = "#1f4dff";
const PINK = "#ff3da7";
const RULE = INK;

const display = '"Fraunces", Georgia, serif';
const sans = '"Inter", system-ui, sans-serif';
const mono = '"JetBrains Mono", monospace';

const Sticker = ({ children, color = PINK, rot = -3, style: s = {} }) => (
  <span style={{
    display: "inline-block", background: color, color: "#fff",
    padding: "6px 14px", fontSize: 13, fontWeight: 700,
    letterSpacing: "0.04em", textTransform: "uppercase",
    transform: `rotate(${rot}deg)`, boxShadow: `4px 4px 0 ${INK}`,
    whiteSpace: "nowrap",
    ...s,
  }}>{children}</span>
);

const Marquee = ({ items, bg = INK, color = PAPER, accent = PINK }) => (
  <div style={{ overflow: "hidden", padding: "14px 0", background: bg, color, borderTop: `4px solid ${INK}`, borderBottom: `4px solid ${INK}` }}>
    <div style={{
      display: "inline-flex", gap: 40, whiteSpace: "nowrap",
      fontFamily: display, fontWeight: 700, fontSize: 38, fontStyle: "italic",
      letterSpacing: "-0.02em",
      animation: "zineScroll 40s linear infinite",
    }}>
      {[...items, ...items, ...items].map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
          {it} <span style={{ color: accent, fontStyle: "normal" }}>★</span>
        </span>
      ))}
    </div>
  </div>
);

const Nav = () => (
  <header style={{
    padding: "14px 32px", borderBottom: `4px solid ${INK}`,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: PAPER, position: "sticky", top: 0, zIndex: 50,
  }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 32, fontStyle: "italic", letterSpacing: "-0.02em" }}>
        DAT<span style={{ color: PINK }}>!</span>
      </div>
      <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(14,14,14,0.6)" }}>// vol. III · personal magazine</div>
    </div>
    <div style={{ display: "flex", gap: 18, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
      {[["About","#about"],["Services","#services"],["Work","#work"],["Writing","#writing"],["Talks","#talks"],["Open Source","#oss"],["Contact","#contact"]].map(([l,h]) => (
        <a key={l} href={h} style={{ color: INK, textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 4 }}>{l}</a>
      ))}
    </div>
    <Sticker color={BLUE} rot={-2}>● open for q3</Sticker>
  </header>
);

const Hero = () => (
  <section style={{ padding: "60px 32px 50px", borderBottom: `4px solid ${INK}`, position: "relative" }}>
    <Sticker color={PINK} rot={-6} style={{ position: "absolute", top: 28, right: 60 }}>NEW! VOL.III</Sticker>
    <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
      The Dat Tran Personal Magazine №III · Berlin · 2026
    </div>
    <h1 style={{
      fontFamily: display, fontWeight: 700, fontSize: 240, lineHeight: 0.78,
      letterSpacing: "-0.05em", margin: "20px 0 30px",
    }}>
      HI<span style={{ color: PINK }}>!</span><br />I'M <span style={{ color: BLUE, fontStyle: "italic" }}>DAT</span>.
    </h1>
    <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 40, alignItems: "end" }}>
      <div>
        <p style={{ fontSize: 24, lineHeight: 1.35, margin: 0, fontWeight: 500, maxWidth: 760 }}>
          This is my personal homepage. I work in the{" "}
          <span style={{ background: PINK, color: "#fff", padding: "0 6px" }}>intersection</span>{" "}
          between{" "}
          <span style={{ background: BLUE, color: "#fff", padding: "0 6px" }}>humans</span>{" "}
          and{" "}
          <span style={{ background: INK, color: PAPER, padding: "0 6px" }}>machines</span>.
          Feel free to contact me at{" "}
          <a href={`mailto:${DAT.email}`} style={{ color: INK, textDecoration: "underline", textDecorationColor: PINK, textDecorationThickness: 3 }}>
            {DAT.email}
          </a>{" "}for work-related inquiries.
        </p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Sticker color={BLUE} rot={-2}>AI advisory</Sticker>
          <Sticker color={PINK} rot={1}>keynote speaker</Sticker>
          <Sticker color={INK} rot={-1}>open source</Sticker>
          <Sticker color={BLUE} rot={2}>ex Axel Springer</Sticker>
          <Sticker color={PINK} rot={-2}>ex idealo</Sticker>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{
          aspectRatio: "3/4",
          background: `url(assets/leadership.jpg) center/cover`,
          filter: "grayscale(1) contrast(1.3)",
          border: `4px solid ${INK}`,
          transform: "rotate(2deg)",
          boxShadow: `8px 8px 0 ${BLUE}`,
        }} />
        <Sticker rot={-8} style={{ position: "absolute", bottom: -16, left: -10 }}>← that's me!</Sticker>
      </div>
    </div>
  </section>
);

const StatsBand = () => (
  <section style={{ padding: "26px 32px", background: INK, color: PAPER, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, borderBottom: `4px solid ${INK}` }}>
    {STATS.map((s, i) => (
      <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <span style={{ fontFamily: display, fontWeight: 700, fontSize: 64, letterSpacing: "-0.02em", color: i % 2 === 0 ? PINK : BLUE, lineHeight: 1 }}>{s.value}</span>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", maxWidth: 160 }}>{s.label}</span>
      </div>
    ))}
  </section>
);

const About = () => (
  <section id="about" style={{ padding: "70px 32px", borderBottom: `4px solid ${INK}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
      <Sticker color={BLUE} rot={-3}>chapter 01</Sticker>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", margin: 0, fontStyle: "italic" }}>
        About <span style={{ color: PINK }}>me</span>.
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, fontSize: 17, lineHeight: 1.7 }}>
      <div>
        <p style={{ marginTop: 0 }}>
          I'm a seasoned technology and business leader with extensive experience in creating, transforming and leading both large and small organizations. As the former{" "}
          <span style={{ background: PINK, color: "#fff", padding: "0 4px", fontWeight: 700 }}>Head of AI at Axel Springer SE</span>, I established and led their AI division — shipping open source the field still uses (TransformerTTS, ForwardTacotron) and organizing the first group-wide TechCon.
        </p>
        <p>
          At <a href="https://www.idealo.de/" style={{ color: INK, textDecoration: "underline", textDecorationColor: BLUE, textDecorationThickness: 2 }}>idealo.de</a>, I led a data team that turned the department from a cost center into a profit center — driving CRM campaigns, optimizing UX, and contributing to one of Germany's most-watched OSS portfolios.
        </p>
      </div>
      <div>
        <p style={{ marginTop: 0 }}>
          Through my consulting company,{" "}
          <span style={{ background: BLUE, color: "#fff", padding: "0 4px", fontWeight: 700 }}>Dat Tran Ventures</span>, I advise global companies — Beiersdorf, Bertelsmann, Axel Springer — on AI, digital transformation and tech strategy. Frontend, backend, cloud, DevOps: I help clients implement strategy and foster innovative tech cultures.
        </p>
        <p>
          My reach extends globally with a LinkedIn network of over <strong>76k+ followers</strong>, where I share insights on AI, tech leadership and digital transformation. I regularly contribute as a keynote speaker at PyData, WeAreDevelopers and Øredev — and as a mentor in machine learning and leadership.
        </p>
        <p style={{ marginBottom: 0 }}>
          For a deeper dive into my work, please{" "}
          <a href="#" style={{ color: INK, fontWeight: 700, textDecoration: "underline", textDecorationColor: PINK, textDecorationThickness: 3 }}>view my CV →</a>
        </p>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" style={{ padding: "70px 32px", borderBottom: `4px solid ${INK}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 30 }}>
      <Sticker color={PINK} rot={2}>chapter 02</Sticker>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", margin: 0, fontStyle: "italic" }}>
        What's <span style={{ color: PINK }}>on the menu</span>:
      </h2>
    </div>
    <p style={{ fontSize: 17, maxWidth: 760, marginTop: 0, marginBottom: 28 }}>I offer services in:</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `4px solid ${INK}` }}>
      {SERVICES.map((s, i) => (
        <div key={s.id} style={{
          padding: 28,
          borderRight: i % 2 === 0 ? `4px solid ${INK}` : "none",
          borderBottom: i < 2 ? `4px solid ${INK}` : "none",
          background: i % 2 === 0 ? PAPER : "rgba(31,77,255,0.04)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: display, fontWeight: 700, fontSize: 56, color: i % 2 === 0 ? PINK : BLUE, lineHeight: 1, fontStyle: "italic" }}>№ {s.glyph}</span>
            <Sticker color={i % 2 === 0 ? BLUE : PINK} rot={i % 2 === 0 ? 3 : -3}>book it</Sticker>
          </div>
          <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 32, margin: "14px 0 10px", letterSpacing: "-0.02em" }}>{s.title}</h3>
          <p style={{ margin: "0 0 12px", fontSize: 15, lineHeight: 1.6 }}>{s.blurb}</p>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.7 }}>
            {s.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Companies = () => (
  <section style={{ padding: "60px 32px", borderBottom: `4px solid ${INK}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
      <Sticker color={INK} rot={-3}>seen at / advised</Sticker>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 56, letterSpacing: "-0.03em", margin: 0 }}>
        In good <span style={{ fontStyle: "italic", color: BLUE }}>company</span>.
      </h2>
    </div>
    <div style={{
      display: "grid", gridTemplateColumns: `repeat(${COMPANIES.length}, 1fr)`,
      border: `4px solid ${INK}`,
    }}>
      {COMPANIES.map((c, i) => (
        <div key={c} style={{
          padding: "30px 10px", textAlign: "center",
          fontFamily: display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em",
          fontStyle: i % 2 === 0 ? "italic" : "normal",
          color: i % 3 === 0 ? PINK : i % 3 === 1 ? BLUE : INK,
          borderRight: i < COMPANIES.length - 1 ? `4px solid ${INK}` : "none",
          background: i % 2 === 0 ? PAPER : "rgba(255,61,167,0.05)",
        }}>{c}</div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="work" style={{ padding: "70px 32px", borderBottom: `4px solid ${INK}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 30 }}>
      <Sticker color={BLUE} rot={3}>chapter 03</Sticker>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", margin: 0 }}>
        STUFF I'VE <span style={{ fontStyle: "italic", color: BLUE }}>MADE</span>.
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
      {PROJECTS.map((p, i) => (
        <a key={p.title} href={p.href} target="_blank" rel="noreferrer noopener" style={{
          color: INK, textDecoration: "none", display: "block",
          border: `4px solid ${INK}`, background: PAPER, padding: 14,
          transform: i % 2 === 0 ? "rotate(-0.6deg)" : "rotate(0.5deg)",
          boxShadow: `6px 6px 0 ${i % 3 === 0 ? PINK : i % 3 === 1 ? BLUE : INK}`,
        }}>
          <div style={{ aspectRatio: "4/3", background: `url(${p.img}) center/cover`, filter: "contrast(1.1)" }} />
          <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <span>{p.org}</span><span>{p.year}</span>
          </div>
          <h4 style={{ fontFamily: display, fontWeight: 700, fontSize: 24, margin: "6px 0 6px", letterSpacing: "-0.02em" }}>{p.title}</h4>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{p.blurb}</p>
          <div style={{ marginTop: 12 }}>
            <Sticker color={i % 2 === 0 ? PINK : BLUE} rot={i % 2 === 0 ? -2 : 2}>{p.tag}</Sticker>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const PullQuote = () => (
  <section style={{ padding: "80px 32px", background: PINK, color: INK, borderBottom: `4px solid ${INK}` }}>
    <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
      ★ Letters from clients ★
    </div>
    <blockquote style={{ fontFamily: display, fontWeight: 700, fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, fontStyle: "italic" }}>
      "Dat is the rare blend of <span style={{ background: INK, color: PINK, padding: "0 8px", fontStyle: "normal" }}>deep technical chops</span> and senior leadership judgement."
    </blockquote>
    <div style={{ marginTop: 30, fontFamily: mono, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
      — {TESTIMONIALS[0].name}, {TESTIMONIALS[0].role}
    </div>
  </section>
);

const Writing = () => (
  <section id="writing" style={{ padding: "70px 32px", borderBottom: `4px solid ${INK}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
      <Sticker color={PINK} rot={-3}>chapter 04</Sticker>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", margin: 0 }}>
        BACK <span style={{ color: PINK, fontStyle: "italic" }}>ISSUES</span>.
      </h2>
    </div>
    <div style={{ border: `4px solid ${INK}` }}>
      {WRITING.map((w, i) => (
        <a key={i} href="#" style={{
          display: "grid", gridTemplateColumns: "70px 1fr 220px 110px", gap: 16,
          padding: "18px 20px", borderBottom: i < WRITING.length - 1 ? `2px solid ${INK}` : "none",
          color: INK, textDecoration: "none", alignItems: "baseline",
          background: i % 2 === 0 ? PAPER : "rgba(31,77,255,0.06)",
        }}>
          <span style={{ fontFamily: display, fontWeight: 700, fontSize: 30, color: PINK, fontStyle: "italic" }}>{String(i + 1).padStart(2, "0")}</span>
          <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>{w.title}</span>
          <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{w.outlet}</span>
          <span style={{ fontFamily: mono, fontSize: 12, textAlign: "right" }}>{w.date}</span>
        </a>
      ))}
    </div>
  </section>
);

const Talks = () => (
  <section id="talks" style={{ padding: "70px 32px", borderBottom: `4px solid ${INK}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 30 }}>
      <Sticker color={BLUE} rot={2}>chapter 05</Sticker>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", margin: 0 }}>
        ON <span style={{ color: BLUE, fontStyle: "italic" }}>STAGE</span>.
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `4px solid ${INK}` }}>
      {TALKS.map((t, i) => (
        <div key={i} style={{
          padding: "20px 22px",
          borderRight: i % 2 === 0 ? `2px solid ${INK}` : "none",
          borderBottom: i < TALKS.length - 2 ? `2px solid ${INK}` : "none",
          background: i % 2 === 0 ? PAPER : "rgba(255,61,167,0.05)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <Sticker color={t.kind === "Keynote" ? PINK : t.kind === "Podcast" ? BLUE : INK} rot={i % 2 === 0 ? -2 : 2}>● {t.kind}</Sticker>
            <span style={{ fontFamily: display, fontWeight: 700, fontSize: 28, fontStyle: "italic", color: i % 2 === 0 ? BLUE : PINK }}>{t.year}</span>
          </div>
          <div style={{ fontFamily: display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 4 }}>{t.title}</div>
          <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.venue}</div>
        </div>
      ))}
    </div>
  </section>
);

const OSS = () => {
  const repos = [
    { name: "ForwardTacotron", desc: "Single-pass neural speech synthesis. ⭐ 583+", url: "https://github.com/as-ideas/ForwardTacotron" },
    { name: "TransformerTTS", desc: "Implementation of a non-autoregressive Transformer-based TTS. ⭐ 1.1k+", url: "https://github.com/as-ideas/TransformerTTS" },
    { name: "raccoon_dataset", desc: "Custom-collected dataset + tutorial. The internet's favourite raccoon. ⭐ 1.2k+", url: "https://github.com/datitran/raccoon_dataset" },
    { name: "object_detector_app", desc: "Real-time object recognition with TF + OpenCV. ⭐ 1.3k+", url: "https://github.com/datitran/object_detector_app" },
    { name: "face2face-demo", desc: "Pix2Pix demo translating webcam → German chancellor. ⭐ 1.4k+", url: "https://github.com/datitran/face2face-demo" },
    { name: "jupyter2slides", desc: "Cloud-native presentations with Jupyter + Reveal.js. ⭐ 600+", url: "https://github.com/datitran/jupyter2slides" },
  ];
  return (
    <section id="oss" style={{ padding: "70px 32px", borderBottom: `4px solid ${INK}`, background: "rgba(31,77,255,0.04)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 30 }}>
        <Sticker color={INK} rot={-3}>chapter 06</Sticker>
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 96, letterSpacing: "-0.04em", margin: 0, fontStyle: "italic" }}>
          Free <span style={{ color: PINK }}>code</span>!
        </h2>
      </div>
      <p style={{ fontSize: 17, maxWidth: 760, marginTop: 0, marginBottom: 28, lineHeight: 1.6 }}>
        A handful of repositories I've shipped over the years — speech synthesis, computer vision, datasets, and the odd developer tool. All MIT, all on{" "}
        <a href={DAT.github} style={{ color: INK, fontWeight: 700, textDecoration: "underline", textDecorationColor: BLUE, textDecorationThickness: 3 }}>
          github.com/datitran
        </a>.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {repos.map((r, i) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer noopener" style={{
            color: INK, textDecoration: "none", display: "block",
            border: `4px solid ${INK}`, background: PAPER, padding: 18,
            boxShadow: `5px 5px 0 ${i % 2 === 0 ? PINK : BLUE}`,
          }}>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(14,14,14,0.55)" }}>// repo {String(i + 1).padStart(2, "0")}</div>
            <div style={{ fontFamily: mono, fontSize: 22, fontWeight: 700, marginTop: 4, letterSpacing: "-0.01em" }}>{r.name}</div>
            <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.5 }}>{r.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" style={{ padding: "100px 32px 60px", textAlign: "center", borderBottom: `4px solid ${INK}` }}>
    <Sticker color={BLUE} rot={-5}>letters to the editor</Sticker>
    <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 200, letterSpacing: "-0.05em", lineHeight: 0.85, margin: "24px 0", fontStyle: "italic" }}>
      WRITE<span style={{ color: PINK }}>!</span> ME<span style={{ color: BLUE }}>!</span>
    </h2>
    <a href={`mailto:${DAT.email}`} style={{ fontFamily: display, fontWeight: 700, fontSize: 36, color: INK, textDecoration: "underline", textDecorationThickness: 4, textDecorationColor: PINK, letterSpacing: "-0.01em" }}>
      {DAT.email}
    </a>
    <div style={{ marginTop: 50, display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
      <a href={DAT.linkedin} target="_blank" rel="noreferrer noopener"><Sticker color={BLUE} rot={-2}>LinkedIn ↗</Sticker></a>
      <a href={DAT.github} target="_blank" rel="noreferrer noopener"><Sticker color={INK} rot={1}>GitHub ↗</Sticker></a>
      <a href={DAT.medium} target="_blank" rel="noreferrer noopener"><Sticker color={PINK} rot={-1}>Medium ↗</Sticker></a>
      <a href={DAT.twitter} target="_blank" rel="noreferrer noopener"><Sticker color={BLUE} rot={2}>Twitter ↗</Sticker></a>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: "30px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, fontFamily: mono, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
    <span>© Dat Tran 2016–2026</span>
    <span>Hand-set in Berlin · Printed on the web</span>
    <span>
      <a href="#" style={{ color: INK, textDecoration: "underline", marginRight: 12 }}>Imprint</a>
      <a href="#" style={{ color: INK, textDecoration: "underline" }}>Privacy</a>
    </span>
  </footer>
);

const ZinePage = () => (
  <div data-screen-label="Zine Homepage" style={{ background: PAPER, color: INK, fontFamily: sans, fontSize: 15, lineHeight: 1.55 }}>
    <Nav />
    <Hero />
    <Marquee items={["AI Strategy", "Keynote Talks", "Tech Due Diligence", "Sparring Partner", "Open Source", "Mentorship", "Workshops"]} bg={INK} color={PAPER} accent={PINK} />
    <StatsBand />
    <About />
    <Services />
    <Companies />
    <Marquee items={COMPANIES} bg={PAPER} color={INK} accent={BLUE} />
    <Projects />
    <PullQuote />
    <Writing />
    <Talks />
    <OSS />
    <Contact />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ZinePage />);
