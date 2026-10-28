// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects-amp-more",
          title: "projects &amp; more",
          description: "Selected research, engineering and teaching work, plus talks and notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-ws-2026-27-i-am-building-the-browser-based-exercise-track-for-fundamentals-of-network-theory-at-the-university-of-luxembourg-try-the-notebooks",
          title: 'WS 2026/27: I am building the browser-based exercise track for Fundamentals of Network...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-doctoral-thesis-at-the-university-of-luxembourg-committee-thomas-engel-supervisor-fazel-ansari-co-supervisor-luis-leiva-chair-shen-yin-reviewer-and-benoît-iung-reviewer",
          title: 'I successfully defended my doctoral thesis at the University of Luxembourg. Committee: Thomas...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-ai-austria-meetup-slides-notebook-and-papers-blog-post",
          title: 'I gave a talk at the AI Austria Meetup. Slides, notebook and papers:...',
          description: "",
          section: "News",},{id: "news-i-attended-the-ai-talent-matchmaking-event-at-the-luxembourg-chamber-of-commerce",
          title: 'I attended the AI Talent Matchmaking Event at the Luxembourg Chamber of Commerce....',
          description: "",
          section: "News",},{id: "projects-production-line-simulator",
          title: 'Production Line Simulator',
          description: "A parametric production-line simulator with known causal structure, built as ground truth for causal machine learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_production_line_simulator/";
            },},{id: "projects-recognising-surgical-instruments",
          title: 'Recognising surgical instruments',
          description: "Object detection and data fusion that help staff pre-sort surgical instruments and pack sterilisation trays.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_instrument_recognition/";
            },},{id: "projects-supervision-pick-and-place-simulation-for-root-cause-analysis",
          title: 'Supervision: Pick-and-place simulation for root cause analysis',
          description: "A master&#39;s thesis that built a simulated assembly line to test root cause methods with known faults.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_pick_and_place_rca/";
            },},{id: "projects-lerobot-workstation",
          title: 'LeRobot workstation',
          description: "Open-source robot arms for pick-and-place and inspection, controlled by AI agents through MCP and MQTT.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_lerobot_workstation/";
            },},{id: "projects-composite-airbag-case",
          title: 'Composite airbag case',
          description: "A woven glass-fibre/PA6 case that replaces a steel knee-airbag case at half the mass, designed with explicit LS-DYNA simulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_composite_airbag_case/";
            },},{id: "projects-rulix",
          title: 'RULix',
          description: "A foundation model for zero-shot remaining useful life prediction, pre-trained only on synthetic run-to-failure data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_remaining_useful_life/";
            },},{id: "projects-image-anomaly-detection",
          title: 'Image anomaly detection',
          description: "Comparing unsupervised anomaly detection and supervised classification for visual quality checks on a high-speed line.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_image_anomaly_detection/";
            },},{id: "projects-language-models-for-maintenance",
          title: 'Language models for maintenance',
          description: "An offline assistant that answers operators&#39; maintenance questions from machine documentation, with small models that run on site.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_maintenance_language_models/";
            },},{id: "projects-reading-list-research-questions-and-academic-writing",
          title: 'Reading list: Research questions and academic writing',
          description: "Papers and guides on finding a good research question and on writing it up.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_reading_list_research/";
            },},{id: "projects-prima-causa",
          title: 'PriMa-Causa',
          description: "A causal foundation model that ranks maintenance actions by their effect on production-line performance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_prima_causa/";
            },},{id: "projects-network-based-root-cause-analysis",
          title: 'Network-based root cause analysis',
          description: "Finding the causes of efficiency losses on a high-precision production line with network science.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_root_cause_networks/";
            },},{id: "projects-inspecting-invisible-adhesive-joints",
          title: 'Inspecting invisible adhesive joints',
          description: "Short-wave infrared imaging and deep learning for quality checks in high-speed manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_swir_inspection/";
            },},{id: "projects-euro-ncap-mpdb-crash-simulation",
          title: 'Euro NCAP MPDB crash simulation',
          description: "Setting up the 2020 Euro NCAP barrier test in LS-DYNA and comparing it with car-to-car crashes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_mpdb_crash/";
            },},{id: "projects-formula-student-crash-box",
          title: 'Formula Student crash box',
          description: "An aluminium impact attenuator for a Formula Student race car, simulated in LS-DYNA.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_formula_student_crashbox/";
            },},{id: "projects-cfd-case-studies",
          title: 'CFD case studies',
          description: "Four flow and heat transfer cases in ANSYS Fluent and CFX, from meshing to validation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_cfd_cases/";
            },},{id: "projects-fundamentals-of-network-theory",
          title: 'Fundamentals of Network Theory',
          description: "Browser-based Python exercises for a university course.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_network_theory_teaching/";
            },},{id: "projects-talk-tabular-foundation-models",
          title: 'Talk: Tabular foundation models',
          description: "Slides, notebook and reading list from my talk at AI Austria, September 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_talk_tabular_foundation_models/";
            },},{id: "projects-note-your-reference-manager-as-an-agent-tool",
          title: 'Note: Your reference manager as an agent tool',
          description: "How a searchable paper library helps an AI agent move from what a paper claims to what its code does.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_note_reference_manager/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
