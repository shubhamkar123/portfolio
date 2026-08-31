// ============================================================
// portfolioData.js — Centralized configuration for Shubham Karne's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shubham Karne",
  firstName: "Shubham",
  brandName: "Shubham Karne",
  title: "Mechanical Engineer | Powertrain & Quality Engineering",
  location: "Brandenburg an der Havel, Germany",
  phone: "+49 15510 691557",
  emails: {
    primary: "shubham.karne111@gmail.com",
    secondary: "shubham.karne111@gmail.com",
  },
  summary:
    "M.Sc. Mechanical Engineering student at TH Brandenburg with a strong foundation in technical thermodynamics, fluid mechanics, and powertrain systems, plus 14+ months of industry experience in quality engineering and product design. Skilled in GD&T inspection, CAD (CATIA, Creo, SolidWorks), CAE simulation, and hydraulic system design, with a patent application filed for an automatic tire pressure regulation system.",
  resumeUrl: "/Shubham_Karne_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/shubham-karne-50b040202",
  email: "mailto:shubham.karne111@gmail.com",
  phone: "tel:+4915510691557",
};

export const heroContent = {
  greeting: "Hi, I'm Shubham Karne",
  titleHighlight: "Mechanical Engineer — Powertrain & Precision Systems",
  subtitle:
    "I engineer precision quality systems and powertrain solutions — from GD&T inspection to hydraulic systems, CAE simulation, and drivetrain design.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shubham.karne111@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Shubham,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Shubham_Karne_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shubham Karne</span>, a Mechanical Engineering M.Sc. student at TH Brandenburg with a background bridging precision quality assurance and hands-on product design, working toward R&D and vehicle development roles at a premium automotive OEM.`,
  techStack: ["GD&T", "CATIA / Creo", "CAE Simulation"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn engineering problems into reliable solutions",
  description:
    "I follow a structured, precision-driven approach to move from technical requirements to production-ready, quality-assured components and systems.",
  cards: [
    {
      number: "01",
      title: "Analyze",
      text: "I start by understanding functional requirements, tolerances, and technical constraints to build a solid engineering foundation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Developing CAD models and system layouts using CATIA, Creo, and SolidWorks with GD&T referencing built in from the start.",
    },
    {
      number: "03",
      title: "Validate",
      text: "Running simulations, dimensional inspections, and measurement system analysis to verify performance before production.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "Rigorous quality documentation, calibration coordination, and root-cause resolution, followed by ongoing process improvement.",
    },
  ],
  endText: "Ready to build!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Quality & Metrology",
      skills: [
        { name: "GD&T", level: 92 },
        { name: "Dimensional Inspection", level: 90 },
        { name: "MSA", level: 85 },
        { name: "Calibration Coordination", level: 85 }
      ]
    },
    {
      title: "CAD & Design",
      skills: [
        { name: "PTC Creo", level: 90 },
        { name: "SolidWorks", level: 85 },
        { name: "CATIA V6 (3DEXPERIENCE)", level: 75 },
        { name: "AutoCAD", level: 80 }
      ]
    },
    {
      title: "Simulation & CAE",
      skills: [
        { name: "ANSYS (Fundamentals)", level: 65 },
        { name: "HyperMesh (Altair Associate Specialist)", level: 78 },
        { name: "MATLAB / Simulink", level: 70 }
      ]
    },
    {
      title: "Manufacturing & Systems",
      skills: [
        { name: "BOM Creation", level: 88 },
        { name: "Hydraulic Systems (up to 80 bar)", level: 85 },
        { name: "Root-Cause Analysis", level: 88 },
        { name: "Quality Documentation", level: 90 }
      ]
    },
    {
      title: "Software & IT",
      skills: [
        { name: "MS Office (Advanced)", level: 92 },
        { name: "Python (NumPy / SciPy)", level: 70 },
        { name: "SAP S/4HANA (MM/PP)", level: 68 },
        { name: "Database Management", level: 65 }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "English (Fluent, B2)", level: 95 },
        { name: "German (A2)", level: 45 },
        { name: "Marathi (Native)", level: 100 },
        { name: "Hindi (Native)", level: 100 }
      ]
    }
  ]
};

// Highlight / Innovation Data (replaces "Content Creation")
export const contentCreation = {
  badge: "Innovation & Impact",
  heading: "Engineering Highlights",
  description: "Measurable results and innovation from my industry and academic work.",
  categories: [
    {
      title: "Patent Filed",
      description: "Automatic tire pressure regulation system for military vehicles, filed with the Indian Patent Office and currently under examination.",
      stats: "Defense Sector",
      icon: "📋"
    },
    {
      title: "Quality Impact",
      description: "Improved defect detection by ~20% and reduced rework rate by ~15% through structured GD&T inspection and MSA coordination at Atlas Copco Group.",
      stats: "150+ Components/Month",
      icon: "🎯"
    },
    {
      title: "Design Delivery",
      description: "Delivered hydraulic and dosing system designs up to 80 bar for major industrial clients while managing 3+ concurrent projects.",
      stats: "~90% On-Time Delivery",
      icon: "⚙️"
    },
    {
      title: "EV Technology Foundation",
      description: "B.Tech Honours in Electric Vehicle Technology, now advancing into broader powertrain and CAE-focused M.Sc. coursework and research at TH Brandenburg.",
      stats: "20 ECTS Honours Certificate",
      icon: "⚡"
    }
  ]
};

// Leadership / Affiliations Data
export const leadershipList = [
  {
    title: "VDI (Verein Deutscher Ingenieure) Member",
    description: "Active member of Germany's leading engineering association, engaging with the professional mechanical engineering community.",
    role: "Member",
    badge: "Professional"
  },
  {
    title: "WPA Scientific Project — EV vs. ICE Rim Topology Optimization",
    description: "Independent scientific project at TH Brandenburg comparing topology-optimized alloy wheel rim designs for electric and internal combustion vehicles.",
    role: "Researcher",
    badge: "Research"
  },
  {
    title: "Braitenberg Vehicle Swarm — Autonomous Mobile Systems",
    description: "Implemented a swarm of Braitenberg vehicles to explore emergent, sensor-driven behavior in simple autonomous agents.",
    role: "Project Contributor",
    badge: "Robotics"
  },
  {
    title: "Modeling & Simulation of an EV Drivetrain",
    description: "Modeled and simulated the dynamic behavior of an electric vehicle drivetrain system as part of coursework at TH Brandenburg.",
    role: "Project Contributor",
    badge: "Simulation"
  }
];

// Professional Experience Data (rendered by the Internships/Experience component)
export const internshipsList = [
  {
    organization: "Atlas Copco Group, Pune, India",
    role: "Quality Assurance Engineer",
    duration: "Jul 2025 – Sep 2025",
    skills: ["GD&T Inspection", "Deviation Analysis", "MSA Coordination", "Calibration"],
    tech: ["150+ components/month", "~20% defect detection improvement", "~15% rework reduction"]
  },
  {
    organization: "Prorites Equipments Pvt. Ltd., Pune, India",
    role: "Design & Development Engineer",
    duration: "May 2024 – Mar 2025",
    skills: ["Hydraulic System Design (2–80 bar)", "BOM Creation", "Engineering Change Management", "PTC Creo"],
    tech: ["HPCL Mangalore", "Ab-Mauri", "~90% on-time delivery", "~20% faster iteration cycles"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Precision & Attention to Detail", icon: "🔍", desc: "Trained through GD&T inspection and dimensional quality work across 150+ components monthly." },
  { name: "Cross-Team Coordination", icon: "🤝", desc: "Coordinated Measurement System Analysis across 3 manufacturing teams to align quality standards." },
  { name: "Problem Solving", icon: "🧩", desc: "Structured root-cause analysis and deviation investigation to resolve production issues quickly." },
  { name: "Project Management", icon: "📊", desc: "Managed 3+ concurrent design projects with a ~90% on-time delivery rate." },
  { name: "Technical Communication", icon: "💬", desc: "Clear documentation of quality reports, calibration protocols, and engineering change requests." },
  { name: "Adaptability", icon: "🌟", desc: "Transitioned from industrial hydraulics to EV-focused academic research with ease." },
  { name: "Innovation", icon: "💡", desc: "Filed a patent application for an automatic tire pressure regulation system." },
  { name: "Time Management", icon: "⏰", desc: "Balancing M.Sc. coursework, scientific projects, and career development in parallel." }
];

export const projects = [
  {
    id: "tire-pressure-patent",
    number: "01",
    badge: "📋 Patent Filed",
    title: "Automatic Tire Pressure Regulation System",
    description:
      "Designed a fully automatic tire pressure regulation system for military vehicles, enabling simultaneous tire inflation across changing terrain and load conditions. Ran design and performance simulations across multiple operating scenarios (load, terrain, temperature). Patent application filed with the Indian Patent Office; examination ongoing.",
    techTags: ["PTC Creo", "System Design", "Performance Simulation", "Defense Engineering"],
    links: {},
    isFlagship: true,
  },
  {
    id: "wpa-rim-topology",
    number: "02",
    badge: null,
    title: "EV vs. ICE Alloy Wheel Rim Topology Optimization",
    description:
      "Scientific project at TH Brandenburg comparing topology-optimized alloy wheel rim designs for electric vs. internal combustion vehicles, evaluating structural and mass-efficiency trade-offs relevant to EV platforms.",
    techTags: ["Topology Optimization", "CAD", "EV Engineering", "Structural Analysis"],
    links: {},
    isFlagship: false,
  },
  {
    id: "ev-drivetrain-modeling",
    number: "03",
    badge: null,
    title: "Modeling & Simulation of an EV Drivetrain",
    description:
      "Coursework project modeling and simulating the dynamic behavior of an electric vehicle drivetrain system, covering system-level performance under varying operating conditions.",
    techTags: ["MATLAB/Simulink", "Dynamic Systems", "EV Drivetrain"],
    links: {},
    isFlagship: false,
  },
  {
    id: "braitenberg-swarm",
    number: "04",
    badge: null,
    title: "Braitenberg Vehicle Swarm",
    description:
      "Autonomous Mobile Systems project implementing a swarm of Braitenberg vehicles to explore emergent, sensor-driven behavior in simple autonomous agents.",
    techTags: ["Autonomous Systems", "Sensor-Driven Control", "Robotics"],
    links: {},
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Altair HyperMesh Associate Specialist",
      issuer: "Altair",
      icon: "🧮",
    },
    {
      name: "MATLAB Onramp",
      issuer: "MathWorks",
      icon: "📈",
    },
    {
      name: "Tulip App Design",
      issuer: "Tulip",
      icon: "📱",
    },
    {
      name: "EV Technology Honours Certificate (20 ECTS)",
      issuer: "PCCOE Pune",
      icon: "⚡",
    },
    {
      name: "VDI Membership",
      issuer: "Verein Deutscher Ingenieure",
      icon: "🎓",
    },
  ],
  viewAllUrl: "/Shubham_Karne_Resume.pdf",
};

export const education = {
  degree: "M.Sc. Mechanical Engineering",
  institution: "Technische Hochschule Brandenburg",
  cgpa: "In Progress",
  graduation: "2027",
  twelfth: "B.Tech Mechanical Engineering with Honours (Electric Vehicles) — PCCOE Pune, CGPA 7.56",
  tenth: "Grade: Distinction",
};

export const footerContent = {
  taglines: [
    "Mechanical Engineering & Powertrain Systems",
    "GD&T · CAD · Quality Engineering",
    "Precision-Driven Design",
  ],
  credential: "M.Sc. Mechanical Engineering · TH Brandenburg",
  copyright: `© ${new Date().getFullYear()} Shubham Karne | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
