import leadershipImg from '../static/leadership_dat_tran.jpg';
import employerBrandingImg from '../static/employer_branding_dat_tran.jpg';
import filterVisualizationImg from '../static/filter_visualization_aesthetic.jpg';
import objectDetectionImg from '../static/object_detection.jpg';
import raccoonDetectorImg from '../static/raccoon_detector.jpg';
import face2faceImg from '../static/face2face.jpg';
import jupyterRevealImg from '../static/jupyter_reveal.gif';

export const DAT = {
  name: "Dat Tran",
  short: "Dat",
  tagline: "Experienced technology and business leader. Entrepreneur. Researcher. (Keynote) Speaker. Mentor.",
  email: "hello@dat-tran.com",
  linkedin: "https://www.linkedin.com/in/dat-tran-a1602320/",
  github: "https://github.com/datitran",
  medium: "https://medium.com/@datitran",
  twitter: "https://x.com/datitran",
  followers: "76k+",
  photo: leadershipImg,
};

export const SERVICES = [
  {
    id: "tdd",
    title: "Tech due diligence",
    glyph: "01",
    blurb: "Code quality audits, architectural review, tech-stack and roadmap assessment for investors and acquirers.",
    bullets: ["Code & architecture review", "Tech stack assessment", "Roadmap critique"],
  },
  {
    id: "talks",
    title: "Keynote talks",
    glyph: "02",
    blurb: "Introductory and advanced AI talks for technical and non-technical audiences — Generative AI to classical ML.",
    bullets: ["Conferences & summits", "Internal company events", "Panels & podcasts"],
  },
  {
    id: "workshops",
    title: "Discovery & strategy workshops",
    glyph: "03",
    blurb: "Help your team find AI use cases tailored to your business and rank them by value, effort, and risk.",
    bullets: ["AI opportunity mapping", "Prioritization & scoring", "Roadmap design"],
  },
  {
    id: "sparring",
    title: "Sparring partner",
    glyph: "04",
    blurb: "On-call advisor for management and working-level teams — strategy, hiring, architecture, hard calls.",
    bullets: ["Exec sparring", "Hands-on review", "Hiring panels"],
  },
];

export const PROJECTS = [
  {
    title: "ForwardTacotron",
    org: "Axel Springer / AS Ideas",
    year: "2020",
    img: employerBrandingImg,
    blurb: "Single-pass neural speech synthesis. Powered Axel Springer's brand voice, featured by NVIDIA.",
    tag: "Speech / TTS",
    href: "https://github.com/as-ideas/ForwardTacotron",
  },
  {
    title: "Image Quality Assessment",
    org: "idealo",
    year: "2018",
    img: filterVisualizationImg,
    blurb: "CNNs predicting aesthetic & technical quality of hotel photos. Open-sourced and widely cited.",
    tag: "Computer Vision",
    href: "https://devblogs.nvidia.com/deep-learning-hotel-aesthetics-photos/",
  },
  {
    title: "Real-Time Object Recognition",
    org: "Personal",
    year: "2017",
    img: objectDetectionImg,
    blurb: "TensorFlow + OpenCV demo that became one of TDS' most-read computer vision tutorials.",
    tag: "Computer Vision",
    href: "https://towardsdatascience.com/building-a-real-time-object-recognition-app-with-tensorflow-and-opencv-b7a2b4ebdc32",
  },
  {
    title: "Raccoon Detector",
    org: "Personal",
    year: "2017",
    img: raccoonDetectorImg,
    blurb: "Trained an object detector on a dataset I collected and labelled myself. The internet's favourite raccoon.",
    tag: "Dataset / Vision",
    href: "https://github.com/datitran/raccoon_dataset",
  },
  {
    title: "Face2face",
    org: "Personal",
    year: "2017",
    img: face2faceImg,
    blurb: "Pix2Pix demo that translates webcam input into the German chancellor's face — early conditional GANs.",
    tag: "Generative",
    href: "https://github.com/datitran/face2face-demo",
  },
  {
    title: "jupyter2slides",
    org: "Personal",
    year: "2017",
    img: jupyterRevealImg,
    blurb: "Cloud-native presentation slides with Jupyter + Reveal.js. Featured on freeCodeCamp.",
    tag: "Tooling",
    href: "https://github.com/datitran/jupyter2slides",
  },
];

export const WRITING = [
  { title: "Building a Fast and Efficient Semantic Search System Using OpenVINO and Postgres", outlet: "Dev.to", date: "Oct 2024", href: "https://dev.to/datitran/building-a-fast-and-efficient-semantic-search-system-using-openvino-and-postgres-fd6" },
  { title: "Creating Robust Neural Speech Synthesis with ForwardTacotron", outlet: "NVIDIA Developer", date: "Aug 2020", href: "https://developer.nvidia.com/blog/creating-robust-neural-speech-synthesis-with-forwardtacotron/" },
  { title: "Deep Learning for Classifying Hotel Aesthetics Photos", outlet: "NVIDIA Developer", date: "Oct 2018", href: "https://devblogs.nvidia.com/deep-learning-hotel-aesthetics-photos/" },
  { title: "What is Minimum Viable (Data) Product?", outlet: "idealo Tech Blog", date: "Jun 2018", href: "https://medium.com/idealo-tech-blog/what-is-minimum-viable-data-product-49269e338d85" },
  { title: "Why the AI Hype Train is Already off the Rails", outlet: "Built to Adapt", date: "Aug 2017", href: "https://builttoadapt.io/why-the-ai-hype-train-is-already-off-the-rails-and-why-im-over-ai-already-e7314e972ef4" },
  { title: "How to train your own Object Detector with TensorFlow", outlet: "Towards Data Science", date: "Jul 2017", href: "https://towardsdatascience.com/how-to-train-your-own-object-detector-with-tensorflows-object-detector-api-bec72ecfe1d9" },
  { title: "My two cents on what makes a good data scientist", outlet: "Towards Data Science", date: "Jul 2017", href: "https://towardsdatascience.com/my-two-cents-on-what-makes-a-good-data-scientist-nowadays-fea67931766a" },
  { title: "Building a Real-Time Object Recognition App", outlet: "Towards Data Science", date: "Jun 2017", href: "https://towardsdatascience.com/building-a-real-time-object-recognition-app-with-tensorflow-and-opencv-b7a2b4ebdc32" },
];

export const TALKS = [
  { title: "Open Core, Pricing and AI product development", venue: "Beyond Coding Podcast", year: "2022", kind: "Podcast", href: "https://youtu.be/5DbJhv7ikIk" },
  { title: "How to Implement a Production-Ready Deep Learning Model in 12 Weeks", venue: "Øredev Conference", year: "2022", kind: "Keynote", href: "https://youtu.be/d6FoKcFmYpA" },
  { title: "Building a Data Science Team", venue: "DataTalks Club", year: "2020", kind: "Talk", href: "https://youtu.be/ScDIB-3O77A" },
  { title: "Demystifying AI", venue: "mindsnack — Axel Springer", year: "2020", kind: "Podcast", href: "https://soundcloud.com/mindsnack/demystifying-ai-dat-tran" },
  { title: "Training a Machine to See What's Beautiful", venue: "WeAreDevelopers Vienna", year: "2019", kind: "Keynote", href: "https://youtu.be/-iT21IY5Srs" },
  { title: "Becoming an AI-driven company", venue: "Digitale Leute Summit", year: "2019", kind: "Talk", href: "https://youtu.be/x5gQXDlalAU" },
  { title: "From ML Research to Production — the Autobahn Way", venue: "EGG Germany", year: "2019", kind: "Keynote", href: "https://youtu.be/xtEtZnOpjpc" },
  { title: "How you really get your data science models into production", venue: "PyData San Francisco", year: "2016", kind: "Talk", href: "https://youtu.be/HyjZFYDubf8" },
];

export const COMPANIES = [
  "Axel Springer", "idealo", "Pivotal", "Beiersdorf", "Bertelsmann", "NVIDIA", "AWS",
];

export const TESTIMONIALS = [
  {
    quote: "Dat is the rare blend of deep technical chops and senior leadership judgement. He set up our AI division from scratch and shipped open source the whole field uses.",
    name: "Former Axel Springer colleague",
    role: "VP, Engineering",
  },
  {
    quote: "Pragmatic, no-nonsense, and unusually good at translating between exec strategy and what an ML team can actually deliver next quarter.",
    name: "Consulting client",
    role: "CTO, fintech",
  },
  {
    quote: "Best keynote we had all year — funny, technical, and zero hype. Half the room found him on LinkedIn before he left the stage.",
    name: "Conference organizer",
    role: "Programme committee",
  },
];

export const STATS = [
  { label: "Years in tech leadership", value: "20+" },
  { label: "LinkedIn followers", value: "76k+" },
  { label: "Talks & podcasts", value: "100+" },
  { label: "GitHub stars", value: "5k+" },
];

export const OSS_REPOS = [
  { name: "ForwardTacotron", desc: "Single-pass neural speech synthesis.", stars: "583+", url: "https://github.com/as-ideas/ForwardTacotron" },
  { name: "TransformerTTS", desc: "Implementation of a non-autoregressive Transformer-based TTS.", stars: "1.1k+", url: "https://github.com/as-ideas/TransformerTTS" },
  { name: "raccoon_dataset", desc: "Custom-collected dataset + tutorial. The internet's favourite raccoon.", stars: "1.2k+", url: "https://github.com/datitran/raccoon_dataset" },
  { name: "object_detector_app", desc: "Real-time object recognition with TF + OpenCV.", stars: "1.3k+", url: "https://github.com/datitran/object_detector_app" },
  { name: "face2face-demo", desc: "Pix2Pix demo translating webcam into the German chancellor.", stars: "1.4k+", url: "https://github.com/datitran/face2face-demo" },
  { name: "jupyter2slides", desc: "Cloud-native presentations with Jupyter + Reveal.js.", stars: "600+", url: "https://github.com/datitran/jupyter2slides" },
];

export const MARQUEE_SERVICES = [
  "AI Strategy", "Keynote Talks", "Tech Due Diligence", "Sparring Partner", "Open Source", "Mentorship", "Workshops",
];
