import leadershipImg from '../static/leadership_dat_tran.jpg';
import employerBrandingImg from '../static/employer_branding_dat_tran.jpg';
import filterVisualizationImg from '../static/filter_visualization_aesthetic.jpg';
import objectDetectionImg from '../static/object_detection.jpg';
import raccoonDetectorImg from '../static/raccoon_detector.jpg';
import face2faceImg from '../static/face2face.jpg';
import jupyterRevealImg from '../static/jupyter_reveal.gif';
import idealoHotelImg from '../static/idealo_hotel.jpg';
import apacheNifiImg from '../static/apache_nifi.jpg';
import readaloudWeltImg from '../static/readaloud_welt.jpg';
import idealoTeamImg from '../static/idealo_team_photo.jpg';
import speakerMicImg from '../static/speaker_microphone_le_featured.jpg';

export const DAT = {
  name: "Dat Tran",
  short: "Dat",
  tagline: "Experienced technology and business leader. Entrepreneur. Researcher. (Keynote) Speaker. Mentor.",
  email: "hello@dat-tran.com",
  linkedin: "https://www.linkedin.com/in/dat-tran-a1602320/",
  github: "https://github.com/datitran",
  medium: "https://medium.com/@datitran",
  twitter: "https://x.com/datitran",
  followers: "78k+",
  photo: leadershipImg,
};

export const SERVICES = [
  {
    id: "tdd",
    title: "Tech due diligence",
    glyph: "01",
    course: "Starter",
    audience: "Investors & acquirers",
    format: "1–2 weeks · remote",
    blurb: "Code quality audits, architectural review, tech-stack and roadmap assessment for investors and acquirers.",
    bullets: ["Code & architecture review", "Tech stack assessment", "Roadmap evaluation"],
    cta: "book a review",
    ctaSubject: "Tech due diligence — booking",
  },
  {
    id: "talks",
    title: "Keynote talks",
    glyph: "02",
    course: "Main",
    audience: "Conferences & companies",
    format: "30–60 min · in-person or remote",
    blurb: "Introductory and advanced AI talks for technical and non-technical audiences — Generative AI, classical ML to AI for business.",
    bullets: ["Conferences & summits", "Internal company events", "Panels & podcasts"],
    cta: "book a talk",
    ctaSubject: "Keynote talk — booking enquiry",
  },
  {
    id: "workshops",
    title: "Discovery & strategy workshops",
    glyph: "03",
    course: "Main",
    audience: "Product & exec teams",
    format: "½–2 days · on-site preferred",
    blurb: "Help your team find AI use cases tailored to your business and rank them by value, effort, and risk.",
    bullets: ["AI opportunity mapping", "Prioritization & scoring", "Roadmap design"],
    cta: "book a workshop",
    ctaSubject: "Discovery workshop — booking enquiry",
  },
  {
    id: "sparring",
    title: "Sparring partner",
    glyph: "04",
    course: "Chef's table",
    audience: "Founders & execs",
    format: "Retainer · monthly",
    blurb: "On-call advisor for management and working-level teams — strategy, hiring, architecture, hard calls.",
    bullets: ["Fractional CTO & exec sparring", "Hands-on review and delivery", "Talent assessment & hiring support"],
    cta: "book sparring",
    ctaSubject: "Sparring partner — engagement enquiry",
  },
];

export const PROJECTS = [
  {
    title: "ForwardTacotron",
    org: "Axel Springer",
    year: "2020",
    img: speakerMicImg,
    blurb: "Single-pass neural speech synthesis. Powered Axel Springer's brand voice, featured by NVIDIA.",
    tag: "Speech / TTS",
    href: "https://developer.nvidia.com/blog/creating-robust-neural-speech-synthesis-with-forwardtacotron/",
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
    href: "https://medium.com/data-science/building-a-real-time-object-recognition-app-with-tensorflow-and-opencv-b7a2b4ebdc32",
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

export const INDUSTRY_PROJECTS = [
  {
    title: "Computer Vision",
    org: "idealo",
    year: "2018",
    img: idealoHotelImg,
    headline: "Ranking 300M+ hotel images by aesthetic & technical quality",
    bullets: [
      "Used deep learning to automatically rank 300M+ hotel images at hotel.idealo.de — improving listings for small and mid-sized hotels",
      "Trained CNNs to auto-generate product galleries — cut content team workflow time by 75%",
    ],
    metrics: [{ k: "300M+", v: "images ranked" }, { k: "75%", v: "time saved" }],
  },
  {
    title: "CRM Automation",
    org: "idealo",
    year: "2017",
    img: apacheNifiImg,
    headline: "Apache NiFi pipeline that booked €6M over three years",
    bullets: [
      "Concepted and set up a data engineering flow with Apache NiFi to automate idealo's CRM workflow — €1M Y1, €2M Y2, €3M Y3",
      "Built a tree-based classifier predicting non-purchases three days ahead of actual sales data",
    ],
    metrics: [{ k: "€6M", v: "in 3 years" }, { k: "−3d", v: "early signal" }],
  },
  {
    title: "Tech Transformation",
    org: "Axel Springer",
    year: "2019",
    img: employerBrandingImg,
    headline: "Built tech culture, brand, and the group's first internal conference",
    bullets: [
      "Established and managed the Axel Springer Tech Blog and idealo's Tech Blog",
      "Devised and co-organized Axel Springer TechCon 2019 — first group-wide tech conference",
      "Face of the new employer branding for technology within the Axel Springer group",
      "Introduced extreme programming practices (pair programming, TDD, balanced teams) and lean product development",
    ],
    metrics: [{ k: "1st", v: "TechCon" }, { k: "XP", v: "ways of working" }],
  },
  {
    title: "Readaloud",
    org: "Axel Springer",
    year: "2020",
    img: readaloudWeltImg,
    headline: "Text-to-speech that synthesizes Welt.de articles in 5 months",
    bullets: [
      "Developed a TTS system to synthesize Welt.de articles",
      "Managed R&D directions and guided product development — MVP went live after 5 months",
      "Open-sourced TransformerTTS and ForwardTacotron, both widely adopted",
    ],
    metrics: [{ k: "5mo", v: "to MVP" }, { k: "2", v: "OSS releases" }],
  },
  {
    title: "Leadership",
    org: "idealo / Axel Springer",
    year: "2016–22",
    img: leadershipImg,
    headline: "Scaled teams, set up an AI division, hired the right people fast",
    bullets: [
      "Co-head of idealo's data team as Head of Product — grew unit from 12 → 25 in year 1, personally hired 6 in 9 months",
      "Led AI efforts for Axel Springer SE as Head of AI on group level — mission to turn the company AI-first",
    ],
    metrics: [{ k: "12→25", v: "team growth" }, { k: "6 in 9mo", v: "hires" }],
  },
  {
    title: "Mentoring",
    org: "Various",
    year: "ongoing",
    img: idealoTeamImg,
    headline: "1:1s, career plans, and coaching",
    bullets: [
      "Introduced individual career development plans with weekly 1:1s for faster, goal-oriented progression",
      "Mentored several students from online courses such as Springboard",
    ],
    metrics: [{ k: "1:1", v: "weekly" }, { k: "n+", v: "mentees" }],
  },
];

export const WRITING = [
  { title: "Building a Fast and Efficient Semantic Search System Using OpenVINO and Postgres", outlet: "Dev.to", date: "Oct 2024", href: "https://dev.to/datitran/building-a-fast-and-efficient-semantic-search-system-using-openvino-and-postgres-fd6" },
  { title: "Creating Robust Neural Speech Synthesis with ForwardTacotron", outlet: "NVIDIA Developer", date: "Aug 2020", href: "https://developer.nvidia.com/blog/creating-robust-neural-speech-synthesis-with-forwardtacotron/" },
  { title: "Deep Learning for Classifying Hotel Aesthetics Photos", outlet: "NVIDIA Developer", date: "Oct 2018", href: "https://devblogs.nvidia.com/deep-learning-hotel-aesthetics-photos/" },
  { title: "What is Minimum Viable (Data) Product?", outlet: "idealo Tech Blog", date: "Jun 2018", href: "https://medium.com/idealo-tech-blog/what-is-minimum-viable-data-product-49269e338d85" },
  { title: "Why the AI Hype Train is Already off the Rails", outlet: "Built to Adapt", date: "Aug 2017", href: "https://medium.com/built-to-adapt/why-the-ai-hype-train-is-already-off-the-rails-and-why-im-over-ai-already-e7314e972ef4" },
  { title: "How to train your own Object Detector with TensorFlow", outlet: "Towards Data Science", date: "Jul 2017", href: "https://medium.com/data-science/how-to-train-your-own-object-detector-with-tensorflows-object-detector-api-bec72ecfe1d9" },
  { title: "My two cents on what makes a good data scientist", outlet: "Towards Data Science", date: "Jul 2017", href: "https://medium.com/data-science/my-two-cents-on-what-makes-a-good-data-scientist-nowadays-fea67931766a" },
  { title: "Building a Real-Time Object Recognition App", outlet: "Towards Data Science", date: "Jun 2017", href: "https://medium.com/data-science/building-a-real-time-object-recognition-app-with-tensorflow-and-opencv-b7a2b4ebdc32" },
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
  { label: "LinkedIn followers", value: "78k+" },
  { label: "Talks & podcasts", value: "100+" },
  { label: "GitHub stars", value: "10k+" },
];

export const OSS_REPOS = [
  { name: "ForwardTacotron", ghRepo: "axelspringer/ForwardTacotron", org: "Axel Springer", year: "2020", desc: "Single-pass neural speech synthesis. Powered Axel Springer's brand voice, featured by NVIDIA.", stars: 579, lang: "Python", img: speakerMicImg, tag: "Speech / TTS", url: "https://github.com/as-ideas/ForwardTacotron" },
  { name: "Image Quality Assessment", ghRepo: "idealo/image-quality-assessment", org: "idealo", year: "2018", desc: "CNNs predicting aesthetic & technical quality of hotel photos. Open-sourced and widely cited.", stars: 2234, lang: "Python", img: filterVisualizationImg, tag: "Computer Vision", url: "https://github.com/idealo/image-quality-assessment" },
  { name: "Real-Time Object Recognition", ghRepo: "datitran/object_detector_app", org: "Personal", year: "2017", desc: "TensorFlow + OpenCV demo that became one of TDS' most-read computer vision tutorials.", stars: 1309, lang: "Python", img: objectDetectionImg, tag: "Computer Vision", url: "https://github.com/datitran/object_detector_app" },
  { name: "Raccoon Detector", ghRepo: "datitran/raccoon_dataset", org: "Personal", year: "2017", desc: "Trained an object detector on a dataset I collected and labelled myself. The internet's favourite raccoon.", stars: 1267, lang: "Jupyter", img: raccoonDetectorImg, tag: "Dataset / Vision", url: "https://github.com/datitran/raccoon_dataset" },
  { name: "Face2face", ghRepo: "datitran/face2face-demo", org: "Personal", year: "2017", desc: "Pix2Pix demo that translates webcam input into the German chancellor's face — early conditional GANs.", stars: 1460, lang: "Python", img: face2faceImg, tag: "Generative", url: "https://github.com/datitran/face2face-demo" },
  { name: "jupyter2slides", ghRepo: "datitran/jupyter2slides", org: "Personal", year: "2017", desc: "Cloud-native presentation slides with Jupyter + Reveal.js. Featured on freeCodeCamp.", stars: 791, lang: "JavaScript", img: jupyterRevealImg, tag: "Tooling", url: "https://github.com/datitran/jupyter2slides" },
];

export const MORE_PROJECTS = [
  { name: "TransformerTTS", ghRepo: "spring-media/TransformerTTS", org: "as-ideas", desc: "Implementation of a non-autoregressive Transformer-based TTS.", year: "2020", lang: "Python", stars: 1162, url: "https://github.com/as-ideas/TransformerTTS" },
  { name: "image-super-resolution", ghRepo: "idealo/image-super-resolution", org: "idealo", desc: "Super-scale images with Residual Dense and Adversarial Networks.", year: "2018", lang: "Python", stars: 4815, url: "https://github.com/idealo/image-super-resolution" },
  { name: "imagededup", ghRepo: "idealo/imagededup", org: "idealo", desc: "Finding duplicate images made easy.", year: "2019", lang: "Python", stars: 5623, url: "https://github.com/idealo/imagededup" },
  { name: "imageatm", ghRepo: "idealo/imageatm", org: "idealo", desc: "Image classification for everyone.", year: "2019", lang: "Python", stars: 216, url: "https://github.com/idealo/imageatm" },
  { name: "headliner", ghRepo: "spring-media/headliner", org: "as-ideas", desc: "Generating headlines from news articles using seq2seq.", year: "2019", lang: "Python", stars: 228, url: "https://github.com/as-ideas/headliner" },
  { name: "terraform-emr-pyspark", ghRepo: "idealo/terraform-emr-pyspark", org: "idealo", desc: "Quickstart PySpark with Anaconda on AWS/EMR using Terraform.", year: "2017", lang: "HCL", stars: 48, url: "https://github.com/idealo/terraform-emr-pyspark" },
  { name: "falcon-prediction-app", ghRepo: "idealo/falcon-prediction-app", org: "idealo", desc: "Simple ML web API example with Falcon.", year: "2017", lang: "Python", stars: 51, url: "https://github.com/idealo/falcon-prediction-app" },
];

export const MARQUEE_SERVICES = [
  "AI Strategy", "Keynote Talks", "Tech Due Diligence", "Sparring Partner", "Open Source", "Mentorship", "Workshops",
];
