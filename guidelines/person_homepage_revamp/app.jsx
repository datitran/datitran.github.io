// App — wraps all ten directions in a DesignCanvas so the user can compare
// them side-by-side, drag-reorder, and open any one fullscreen.

const data = {
  DAT: window.DAT, SERVICES: window.SERVICES, PROJECTS: window.PROJECTS,
  WRITING: window.WRITING, TALKS: window.TALKS, COMPANIES: window.COMPANIES,
  TESTIMONIALS: window.TESTIMONIALS, STATS: window.STATS,
};

const ART_W = 1280;
const ART_H = 2400;

const DIRECTIONS = [
  { id: "d1",  label: "A · Mono Evolved — refined brutalist, terminal-orange accent",      Comp: () => <window.D1  data={data} /> },
  { id: "d2",  label: "B · Editorial — magazine serif, warm cream, terracotta",            Comp: () => <window.D2  data={data} /> },
  { id: "d3",  label: "C · Tech-forward — near-black, electric mint, AI-engineer",         Comp: () => <window.D3  data={data} /> },
  { id: "d4",  label: "D · Index Card — directory-style, navy + warm yellow",              Comp: () => <window.D4  data={data} /> },
  { id: "d5",  label: "E · Maximalist Display — black + hot pink, fashion-week loud",      Comp: () => <window.D5  data={data} /> },
  { id: "d6",  label: "F · Swiss Grid — 12-col, Helvetica-feel, single red accent",        Comp: () => <window.D6  data={data} /> },
  { id: "d7",  label: "G · Notebook — researcher's lab journal, cream + navy + red",       Comp: () => <window.D7  data={data} /> },
  { id: "d8",  label: "H · Card OS — soft neutrals, cobalt accent, Notion-feel",           Comp: () => <window.D8  data={data} /> },
  { id: "d9",  label: "I · Zine — risograph, hand-cut, blue + fluoro pink",                Comp: () => <window.D9  data={data} /> },
  { id: "d10", label: "J · Studio — architectural calm, off-white + olive",                Comp: () => <window.D10 data={data} /> },
];

const App = () => (
  <DesignCanvas>
    <DCSection
      id="homepage-directions"
      title="Personal Homepage · Ten Directions"
      subtitle="Click an artboard's ⤢ to focus it fullscreen. Each direction is a complete homepage — scroll inside to explore. Drag to reorder."
    >
      {DIRECTIONS.map(({ id, label, Comp }) => (
        <DCArtboard key={id} id={id} label={label} width={ART_W} height={ART_H}>
          <div style={{ width: ART_W, overflowY: "auto", height: ART_H }}>
            <Comp />
          </div>
        </DCArtboard>
      ))}
    </DCSection>
  </DesignCanvas>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
