// ============================================================
// content.js — Complete bilingual content for the entire portfolio
// German (de) is primary, English (en) is secondary.
// Every section of every component pulls from here via useContent().
// ============================================================

const shared = {
  name: "Shubham Karne",
  firstName: "Shubham",
  brandName: "Shubham Karne",
  phone: "+49 15510 691557",
  emails: {
    primary: "shubham.karne111@gmail.com",
    secondary: "shubham.karne111@gmail.com",
  },
  resumeUrl: "/Shubham_Karne_Resume.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/shubham-karne-50b040202",
    email: "mailto:shubham.karne111@gmail.com",
    phone: "tel:+4915510691557",
  },
  emailjsConfig: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
  },
};

export const content = {
  de: {
    ...shared,
    nav: ["Über mich", "Fähigkeiten", "Prozess", "Projekte", "Erfahrung", "Zertifikate", "Kontakt"],

    personalInfo: {
      ...shared,
      title: "Maschinenbauingenieur | Antriebsstrang & Qualitätswesen",
      location: "Brandenburg an der Havel, Deutschland",
      summary:
        "M.Sc.-Student im Maschinenbau an der TH Brandenburg mit fundierten Kenntnissen in technischer Thermodynamik, Strömungsmechanik und Antriebsstrangsystemen sowie über 14 Monaten Industrieerfahrung in Qualitätswesen und Produktentwicklung. Erfahren in GD&T-Prüfung, CAD (CATIA, Creo, SolidWorks), CAE-Simulation und Hydrauliksystemdesign, mit einer eingereichten Patentanmeldung für ein automatisches Reifendruck-Regulierungssystem.",
    },

    heroContent: {
      greeting: "Hallo, ich bin Shubham Karne",
      titleHighlight: "Maschinenbauingenieur — Antriebsstrang & Präzisionssysteme",
      subtitle:
        "Ich entwickle präzise Qualitätssysteme und Antriebsstranglösungen — von GD&T-Inspektionen über Hydrauliksysteme bis zur CAE-Simulation und Antriebsstrangentwicklung.",
      ctaPrimary: { text: "Meine Arbeiten", href: "#projects" },
      ctaSecondary: {
        text: "Kontaktieren Sie mich",
        href: "mailto:shubham.karne111@gmail.com?subject=Kontaktanfrage – Portfolio&body=Hallo Shubham,%0D%0A%0D%0Aich bin auf Ihr Portfolio gestoßen und würde gerne eine Möglichkeit mit Ihnen besprechen.%0D%0A%0D%0AMit freundlichen Grüßen,",
      },
      ctaResume: { text: "Lebenslauf herunterladen", href: "/Shubham_Karne_Resume.pdf" },
    },

    aboutContent: {
      heading: "Hallo!",
      bio: `Hallo, mein Name ist <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shubham Karne</span>, ein Maschinenbau-Masterstudent an der TH Brandenburg mit einem Hintergrund, der präzise Qualitätssicherung und praxisnahes Produktdesign verbindet, auf dem Weg zu R&D- und Fahrzeugentwicklungsrollen bei einem Premium-Automobilhersteller.`,
      techStack: ["GD&T", "CATIA / Creo", "CAE-Simulation"],
    },

    skillsContent: {
      badge: "Meine Vorgehensweise",
      heading: "So verwandle ich technische Probleme in zuverlässige Lösungen",
      description:
        "Ich folge einem strukturierten, präzisionsorientierten Ansatz, um von technischen Anforderungen zu produktionsreifen, qualitätsgesicherten Komponenten und Systemen zu gelangen.",
      cards: [
        {
          number: "01",
          title: "Analysieren",
          text: "Ich beginne damit, funktionale Anforderungen, Toleranzen und technische Randbedingungen zu verstehen, um eine solide technische Grundlage zu schaffen.",
        },
        {
          number: "02",
          title: "Konstruieren",
          text: "Entwicklung von CAD-Modellen und Systemlayouts mit CATIA, Creo und SolidWorks, mit GD&T-Referenzierung von Anfang an integriert.",
        },
        {
          number: "03",
          title: "Validieren",
          text: "Durchführung von Simulationen, Maßprüfungen und Messsystemanalysen zur Leistungsverifizierung vor der Produktion.",
        },
        {
          number: "04",
          title: "Liefern",
          text: "Sorgfältige Qualitätsdokumentation, Kalibrierungskoordination und Ursachenanalyse, gefolgt von kontinuierlicher Prozessverbesserung.",
        },
      ],
      endText: "Bereit loszulegen!",
    },

    technicalSkills: {
      categories: [
        {
          title: "Qualität & Messtechnik",
          skills: [
            { name: "GD&T", level: 92 },
            { name: "Maßprüfung", level: 90 },
            { name: "MSA", level: 85 },
            { name: "Kalibrierungskoordination", level: 85 },
          ],
        },
        {
          title: "CAD & Konstruktion",
          skills: [
            { name: "PTC Creo", level: 90 },
            { name: "SolidWorks", level: 85 },
            { name: "CATIA V6 (3DEXPERIENCE)", level: 75 },
            { name: "AutoCAD", level: 80 },
          ],
        },
        {
          title: "Simulation & CAE",
          skills: [
            { name: "ANSYS (Grundlagen)", level: 65 },
            { name: "HyperMesh (Altair Associate Specialist)", level: 78 },
            { name: "MATLAB / Simulink", level: 70 },
          ],
        },
        {
          title: "Fertigung & Systeme",
          skills: [
            { name: "Stücklistenerstellung", level: 88 },
            { name: "Hydrauliksysteme (bis 80 bar)", level: 85 },
            { name: "Ursachenanalyse", level: 88 },
            { name: "Qualitätsdokumentation", level: 90 },
          ],
        },
        {
          title: "Software & IT",
          skills: [
            { name: "MS Office (Fortgeschritten)", level: 92 },
            { name: "Python (NumPy / SciPy)", level: 70 },
            { name: "SAP S/4HANA (MM/PP)", level: 68 },
            { name: "Datenbankmanagement", level: 65 },
          ],
        },
        {
          title: "Sprachen",
          skills: [
            { name: "Englisch (Fließend, C1)", level: 95 },
            { name: "Deutsch (A2)", level: 45 },
            { name: "Marathi (Muttersprache)", level: 100 },
            { name: "Hindi (Muttersprache)", level: 100 },
          ],
        },
      ],
    },

    contentCreation: {
      badge: "Innovation & Wirkung",
      heading: "Technische Highlights",
      description: "Messbare Ergebnisse und Innovation aus meiner Industrie- und akademischen Arbeit.",
      categories: [
        {
          title: "Patent angemeldet",
          description: "Automatisches Reifendruck-Regulierungssystem für Militärfahrzeuge, beim indischen Patentamt eingereicht und derzeit in Prüfung.",
          stats: "Verteidigungssektor",
          icon: "📋",
        },
        {
          title: "Qualitätswirkung",
          description: "Verbesserung der Fehlererkennung um ~20% und Reduzierung der Nacharbeitsquote um ~15% durch strukturierte GD&T-Prüfung und MSA-Koordination bei der Atlas Copco Group.",
          stats: "150+ Komponenten/Monat",
          icon: "🎯",
        },
        {
          title: "Konstruktionslieferung",
          description: "Lieferung von Hydraulik- und Dosiersystemdesigns bis 80 bar für wichtige Industriekunden bei gleichzeitiger Verwaltung von 3+ parallelen Projekten.",
          stats: "~90% Pünktliche Lieferung",
          icon: "⚙️",
        },
        {
          title: "EV-Technologie-Grundlage",
          description: "B.Tech-Honours in Elektrofahrzeugtechnik, jetzt fortführend in breiter angelegtem, CAE-fokussiertem M.Sc.-Studium und Forschung an der TH Brandenburg.",
          stats: "20 ECTS Honours-Zertifikat",
          icon: "⚡",
        },
      ],
    },

    leadershipList: [
      {
        title: "VDI (Verein Deutscher Ingenieure) Mitglied",
        description: "Aktives Mitglied von Deutschlands führendem Ingenieurverband, im Austausch mit der professionellen Maschinenbau-Community.",
        role: "Mitglied",
        badge: "Professionell",
      },
      {
        title: "WPA Wissenschaftliches Projekt — EV vs. ICE Felgen-Topologieoptimierung",
        description: "Eigenständiges wissenschaftliches Projekt an der TH Brandenburg zum Vergleich topologieoptimierter Leichtmetallfelgen-Designs für Elektro- und Verbrennungsfahrzeuge.",
        role: "Forscher",
        badge: "Forschung",
      },
      {
        title: "Braitenberg-Fahrzeugschwarm — Autonome Mobile Systeme",
        description: "Implementierung eines Schwarms von Braitenberg-Fahrzeugen zur Untersuchung emergenten, sensorgesteuerten Verhaltens in einfachen autonomen Agenten.",
        role: "Projektmitwirkender",
        badge: "Robotik",
      },
      {
        title: "Modellierung & Simulation eines EV-Antriebsstrangs",
        description: "Modellierung und Simulation des dynamischen Verhaltens eines Elektrofahrzeug-Antriebsstrangsystems im Rahmen des Studiums an der TH Brandenburg.",
        role: "Projektmitwirkender",
        badge: "Simulation",
      },
    ],

    internshipsList: [
      {
        organization: "Atlas Copco Group, Pune, Indien",
        role: "Qualitätssicherungsingenieur",
        duration: "Jul 2025 – Sep 2025",
        skills: ["GD&T-Prüfung", "Abweichungsanalyse", "MSA-Koordination", "Kalibrierung"],
        tech: ["150+ Komponenten/Monat", "~20% verbesserte Fehlererkennung", "~15% Nacharbeitsreduktion"],
      },
      {
        organization: "Prorites Equipments Pvt. Ltd., Pune, Indien",
        role: "Design- und Entwicklungsingenieur",
        duration: "Mai 2024 – März 2025",
        skills: ["Hydrauliksystemdesign (2–80 bar)", "Stücklistenerstellung", "Änderungsmanagement", "PTC Creo"],
        tech: ["HPCL Mangalore", "Ab-Mauri", "~90% pünktliche Lieferung", "~20% schnellere Iterationszyklen"],
      },
    ],

    softSkillsList: [
      { name: "Präzision & Liebe zum Detail", icon: "🔍", desc: "Geschult durch GD&T-Prüfung und dimensionale Qualitätsarbeit an über 150 Komponenten monatlich." },
      { name: "Teamübergreifende Koordination", icon: "🤝", desc: "Koordination von Messsystemanalysen über 3 Fertigungsteams zur Angleichung der Qualitätsstandards." },
      { name: "Problemlösung", icon: "🧩", desc: "Strukturierte Ursachenanalyse und Abweichungsuntersuchung zur schnellen Behebung von Produktionsproblemen." },
      { name: "Projektmanagement", icon: "📊", desc: "Verwaltung von 3+ parallelen Konstruktionsprojekten mit einer Pünktlichkeitsquote von ~90%." },
      { name: "Technische Kommunikation", icon: "💬", desc: "Klare Dokumentation von Qualitätsberichten, Kalibrierungsprotokollen und technischen Änderungsanträgen." },
      { name: "Anpassungsfähigkeit", icon: "🌟", desc: "Nahtloser Übergang von industrieller Hydraulik zu EV-fokussierter akademischer Forschung." },
      { name: "Innovation", icon: "💡", desc: "Patentanmeldung für ein automatisches Reifendruck-Regulierungssystem eingereicht." },
      { name: "Zeitmanagement", icon: "⏰", desc: "Parallele Bewältigung von M.Sc.-Studium, wissenschaftlichen Projekten und Karriereentwicklung." },
    ],

    projects: [
      {
        id: "tire-pressure-patent",
        number: "01",
        badge: "📋 Patent angemeldet",
        title: "Automatisches Reifendruck-Regulierungssystem",
        description:
          "Entwicklung eines vollautomatischen Reifendruck-Regulierungssystems für Militärfahrzeuge, das eine gleichzeitige Reifenbefüllung bei wechselndem Gelände und Lastbedingungen ermöglicht. Durchführung von Design- und Leistungssimulationen über mehrere Betriebsszenarien (Last, Gelände, Temperatur). Patentanmeldung beim indischen Patentamt eingereicht; Prüfung läuft.",
        techTags: ["PTC Creo", "Systemdesign", "Leistungssimulation", "Verteidigungstechnik"],
        links: {},
        isFlagship: true,
      },
      {
        id: "wpa-rim-topology",
        number: "02",
        badge: null,
        title: "EV vs. ICE Leichtmetallfelgen-Topologieoptimierung",
        description:
          "Wissenschaftliches Projekt an der TH Brandenburg zum Vergleich topologieoptimierter Leichtmetallfelgen-Designs für Elektro- vs. Verbrennungsfahrzeuge, mit Bewertung struktureller und masseeffizienter Kompromisse relevant für EV-Plattformen.",
        techTags: ["Topologieoptimierung", "CAD", "EV-Technik", "Strukturanalyse"],
        links: {},
        isFlagship: false,
      },
      {
        id: "ev-drivetrain-modeling",
        number: "03",
        badge: null,
        title: "Modellierung & Simulation eines EV-Antriebsstrangs",
        description:
          "Studienprojekt zur Modellierung und Simulation des dynamischen Verhaltens eines Elektrofahrzeug-Antriebsstrangsystems, mit Fokus auf Systemleistung unter variierenden Betriebsbedingungen.",
        techTags: ["MATLAB/Simulink", "Dynamische Systeme", "EV-Antriebsstrang"],
        links: {},
        isFlagship: false,
      },
      {
        id: "braitenberg-swarm",
        number: "04",
        badge: null,
        title: "Braitenberg-Fahrzeugschwarm",
        description:
          "Projekt für autonome mobile Systeme zur Implementierung eines Schwarms von Braitenberg-Fahrzeugen zur Untersuchung emergenten, sensorgesteuerten Verhaltens in einfachen autonomen Agenten.",
        techTags: ["Autonome Systeme", "Sensorgesteuerte Regelung", "Robotik"],
        links: {},
        isFlagship: false,
      },
    ],

    certificates: {
      featured: [
        { name: "Altair HyperMesh Associate Specialist", issuer: "Altair", icon: "🧮" },
        { name: "MATLAB Onramp", issuer: "MathWorks", icon: "📈" },
        { name: "Tulip App Design", issuer: "Tulip", icon: "📱" },
        { name: "EV-Technologie Honours-Zertifikat (20 ECTS)", issuer: "PCCOE Pune", icon: "⚡" },
        { name: "VDI-Mitgliedschaft", issuer: "Verein Deutscher Ingenieure", icon: "🎓" },
      ],
      viewAllUrl: "/Shubham_Karne_Resume.pdf",
    },

    education: {
      degree: "M.Sc. Maschinenbau",
      institution: "Technische Hochschule Brandenburg",
      cgpa: "Laufend",
      graduation: "2027",
      twelfth: "B.Tech Maschinenbau mit Honours (Elektrofahrzeuge) — PCCOE Pune, CGPA 7.56",
      tenth: "Note: Auszeichnung",
    },

    footerContent: {
      taglines: ["Maschinenbau & Antriebsstrangsysteme", "GD&T · CAD · Qualitätswesen", "Präzisionsorientiertes Design"],
      credential: "M.Sc. Maschinenbau · TH Brandenburg",
      copyright: `© ${new Date().getFullYear()} Shubham Karne | Erstellt mit React`,
    },

    sectionHeaders: {
      internships: {
        title: "Berufserfahrung",
        subtitle: "Branchenrollen, in denen ich Präzisionstechnik-Prinzipien auf reale Produktionssysteme angewendet habe.",
        fullTime: "Vollzeit",
        skillsGained: "Erworbene Fähigkeiten:",
        technologies: "Technologien:",
      },
      leadership: {
        badge: "Aktivitäten",
        title: "Engagement & Mitwirkung",
        subtitle: "Koordination von Veranstaltungen, Leitung von Teamabläufen und Teilnahme an Technologie-Gipfeln.",
      },
      certificates: {
        badge: "Zertifizierungen",
        subtitle: "Branchenweit anerkannte Zertifizierungen, die meine technische Expertise bestätigen.",
        viewAll: "Alle Zertifikate ansehen",
      },
      softSkills: {
        badge: "Kernkompetenzen",
        title: "Professionelle Soft Skills",
        subtitle: "Wesentliche Eigenschaften, die mich zu einem effektiven Ingenieur, Koordinator und Kommunikator machen.",
      },
      technicalSkills: {
        badge: "Technischer Stack",
        title: "Mein Skillset",
        subtitle: "Ein umfassender Überblick über meine Programmiersprachen, Frameworks, Datenbanken und technischen Konzepte.",
      },
      projects: {
        badge: "Ausgewählte Projekte",
        titleLine1: "Arbeit, die für sich",
        titleLine2: "selbst spricht",
        subtitle: "Eine Auswahl an Projekten, die meine Expertise in mechanischem Design, EV-Systemen und Präzisionstechnik zeigen.",
        connectLinkedin: "Auf LinkedIn vernetzen",
      },
      hero: {
        playStory: "Meine Geschichte abspielen",
        playAgain: "Erneut abspielen",
        pause: "Pause",
        videoFallback: "Ihr Browser unterstützt das Video-Tag nicht.",
      },
      contentCreator: {
        downloadResume: "Vollständigen Lebenslauf herunterladen",
      },
      footer: {
        connectLinkedin: "Auf LinkedIn vernetzen",
      },
    },

    contact: {
      title: "Kontakt",
      message: "Lassen Sie mich von Ihrer nächsten Herausforderung hören. Ich bin offen für Abschlussarbeiten, Werkstudent-Positionen und R&D-Rollen bei Premium-Automobilherstellern.",
      headline: "Kontakt",
      reachMe: "Erreichen Sie mich",
      linkedinCta: "Auf LinkedIn vernetzen",
      firstNamePlaceholder: "Vorname",
      lastNamePlaceholder: "Nachname",
      emailPlaceholder: "E-Mail",
      messagePlaceholder: "Schreiben Sie hier Ihre Nachricht",
      permissionLabel: "Ich erlaube die Kontaktaufnahme über diese E-Mail-Adresse.",
      responseNote: "Ihre Nachricht geht direkt an mein Postfach. Ich antworte in der Regel innerhalb von 24–48 Stunden.",
      urgentPrefix: "Für dringende Anfragen erreichen Sie mich unter",
      urgentJoiner: "oder",
      sending: "Wird gesendet...",
      success: "Erfolgreich gesendet ✓",
      error: "Fehlgeschlagen — Erneut versuchen",
      submit: "Nachricht senden",
    },
  },

  en: {
    ...shared,
    nav: ["About", "Skills", "Process", "Projects", "Experience", "Certificates", "Contact"],

    personalInfo: {
      ...shared,
      title: "Mechanical Engineer | Powertrain & Quality Engineering",
      location: "Brandenburg an der Havel, Germany",
      summary:
        "M.Sc. Mechanical Engineering student at TH Brandenburg with a strong foundation in technical thermodynamics, fluid mechanics, and powertrain systems, plus 14+ months of industry experience in quality engineering and product design. Skilled in GD&T inspection, CAD (CATIA, Creo, SolidWorks), CAE simulation, and hydraulic system design, with a patent application filed for an automatic tire pressure regulation system.",
    },

    heroContent: {
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
    },

    aboutContent: {
      heading: "Hello!",
      bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shubham Karne</span>, a Mechanical Engineering M.Sc. student at TH Brandenburg with a background bridging precision quality assurance and hands-on product design, working toward R&D and vehicle development roles at a premium automotive OEM.`,
      techStack: ["GD&T", "CATIA / Creo", "CAE Simulation"],
    },

    skillsContent: {
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
    },

    technicalSkills: {
      categories: [
        {
          title: "Quality & Metrology",
          skills: [
            { name: "GD&T", level: 92 },
            { name: "Dimensional Inspection", level: 90 },
            { name: "MSA", level: 85 },
            { name: "Calibration Coordination", level: 85 },
          ],
        },
        {
          title: "CAD & Design",
          skills: [
            { name: "PTC Creo", level: 90 },
            { name: "SolidWorks", level: 85 },
            { name: "CATIA V6 (3DEXPERIENCE)", level: 75 },
            { name: "AutoCAD", level: 80 },
          ],
        },
        {
          title: "Simulation & CAE",
          skills: [
            { name: "ANSYS (Fundamentals)", level: 65 },
            { name: "HyperMesh (Altair Associate Specialist)", level: 78 },
            { name: "MATLAB / Simulink", level: 70 },
          ],
        },
        {
          title: "Manufacturing & Systems",
          skills: [
            { name: "BOM Creation", level: 88 },
            { name: "Hydraulic Systems (up to 80 bar)", level: 85 },
            { name: "Root-Cause Analysis", level: 88 },
            { name: "Quality Documentation", level: 90 },
          ],
        },
        {
          title: "Software & IT",
          skills: [
            { name: "MS Office (Advanced)", level: 92 },
            { name: "Python (NumPy / SciPy)", level: 70 },
            { name: "SAP S/4HANA (MM/PP)", level: 68 },
            { name: "Database Management", level: 65 },
          ],
        },
        {
          title: "Languages",
          skills: [
            { name: "English (Fluent, C1)", level: 95 },
            { name: "German (A2)", level: 45 },
            { name: "Marathi (Native)", level: 100 },
            { name: "Hindi (Native)", level: 100 },
          ],
        },
      ],
    },

    contentCreation: {
      badge: "Innovation & Impact",
      heading: "Engineering Highlights",
      description: "Measurable results and innovation from my industry and academic work.",
      categories: [
        {
          title: "Patent Filed",
          description: "Automatic tire pressure regulation system for military vehicles, filed with the Indian Patent Office and currently under examination.",
          stats: "Defense Sector",
          icon: "📋",
        },
        {
          title: "Quality Impact",
          description: "Improved defect detection by ~20% and reduced rework rate by ~15% through structured GD&T inspection and MSA coordination at Atlas Copco Group.",
          stats: "150+ Components/Month",
          icon: "🎯",
        },
        {
          title: "Design Delivery",
          description: "Delivered hydraulic and dosing system designs up to 80 bar for major industrial clients while managing 3+ concurrent projects.",
          stats: "~90% On-Time Delivery",
          icon: "⚙️",
        },
        {
          title: "EV Technology Foundation",
          description: "B.Tech Honours in Electric Vehicle Technology, now advancing into broader powertrain and CAE-focused M.Sc. coursework and research at TH Brandenburg.",
          stats: "20 ECTS Honours Certificate",
          icon: "⚡",
        },
      ],
    },

    leadershipList: [
      {
        title: "VDI (Verein Deutscher Ingenieure) Member",
        description: "Active member of Germany's leading engineering association, engaging with the professional mechanical engineering community.",
        role: "Member",
        badge: "Professional",
      },
      {
        title: "WPA Scientific Project — EV vs. ICE Rim Topology Optimization",
        description: "Independent scientific project at TH Brandenburg comparing topology-optimized alloy wheel rim designs for electric and internal combustion vehicles.",
        role: "Researcher",
        badge: "Research",
      },
      {
        title: "Braitenberg Vehicle Swarm — Autonomous Mobile Systems",
        description: "Implemented a swarm of Braitenberg vehicles to explore emergent, sensor-driven behavior in simple autonomous agents.",
        role: "Project Contributor",
        badge: "Robotics",
      },
      {
        title: "Modeling & Simulation of an EV Drivetrain",
        description: "Modeled and simulated the dynamic behavior of an electric vehicle drivetrain system as part of coursework at TH Brandenburg.",
        role: "Project Contributor",
        badge: "Simulation",
      },
    ],

    internshipsList: [
      {
        organization: "Atlas Copco Group, Pune, India",
        role: "Quality Assurance Engineer",
        duration: "Jul 2025 – Sep 2025",
        skills: ["GD&T Inspection", "Deviation Analysis", "MSA Coordination", "Calibration"],
        tech: ["150+ components/month", "~20% defect detection improvement", "~15% rework reduction"],
      },
      {
        organization: "Prorites Equipments Pvt. Ltd., Pune, India",
        role: "Design & Development Engineer",
        duration: "May 2024 – Mar 2025",
        skills: ["Hydraulic System Design (2–80 bar)", "BOM Creation", "Engineering Change Management", "PTC Creo"],
        tech: ["HPCL Mangalore", "Ab-Mauri", "~90% on-time delivery", "~20% faster iteration cycles"],
      },
    ],

    softSkillsList: [
      { name: "Precision & Attention to Detail", icon: "🔍", desc: "Trained through GD&T inspection and dimensional quality work across 150+ components monthly." },
      { name: "Cross-Team Coordination", icon: "🤝", desc: "Coordinated Measurement System Analysis across 3 manufacturing teams to align quality standards." },
      { name: "Problem Solving", icon: "🧩", desc: "Structured root-cause analysis and deviation investigation to resolve production issues quickly." },
      { name: "Project Management", icon: "📊", desc: "Managed 3+ concurrent design projects with a ~90% on-time delivery rate." },
      { name: "Technical Communication", icon: "💬", desc: "Clear documentation of quality reports, calibration protocols, and engineering change requests." },
      { name: "Adaptability", icon: "🌟", desc: "Transitioned from industrial hydraulics to EV-focused academic research with ease." },
      { name: "Innovation", icon: "💡", desc: "Filed a patent application for an automatic tire pressure regulation system." },
      { name: "Time Management", icon: "⏰", desc: "Balancing M.Sc. coursework, scientific projects, and career development in parallel." },
    ],

    projects: [
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
    ],

    certificates: {
      featured: [
        { name: "Altair HyperMesh Associate Specialist", issuer: "Altair", icon: "🧮" },
        { name: "MATLAB Onramp", issuer: "MathWorks", icon: "📈" },
        { name: "Tulip App Design", issuer: "Tulip", icon: "📱" },
        { name: "EV Technology Honours Certificate (20 ECTS)", issuer: "PCCOE Pune", icon: "⚡" },
        { name: "VDI Membership", issuer: "Verein Deutscher Ingenieure", icon: "🎓" },
      ],
      viewAllUrl: "/Shubham_Karne_Resume.pdf",
    },

    education: {
      degree: "M.Sc. Mechanical Engineering",
      institution: "Technische Hochschule Brandenburg",
      cgpa: "In Progress",
      graduation: "2027",
      twelfth: "B.Tech Mechanical Engineering with Honours (Electric Vehicles) — PCCOE Pune, CGPA 7.56",
      tenth: "Grade: Distinction",
    },

    footerContent: {
      taglines: ["Mechanical Engineering & Powertrain Systems", "GD&T · CAD · Quality Engineering", "Precision-Driven Design"],
      credential: "M.Sc. Mechanical Engineering · TH Brandenburg",
      copyright: `© ${new Date().getFullYear()} Shubham Karne | Built with React`,
    },

    sectionHeaders: {
      internships: {
        title: "Work Experience",
        subtitle: "Industry roles where I applied precision engineering principles to real production systems.",
        fullTime: "Full-Time",
        skillsGained: "Skills Gained:",
        technologies: "Technologies:",
      },
      leadership: {
        badge: "Activities",
        title: "Leadership & Engagement",
        subtitle: "Coordinating events, leading team operations, and participating in tech summits.",
      },
      certificates: {
        badge: "Certifications",
        subtitle: "Industry-recognized certifications that validate my technical expertise.",
        viewAll: "View All Certificates",
      },
      softSkills: {
        badge: "Core Competencies",
        title: "Professional Soft Skills",
        subtitle: "Essential traits that make me an effective engineer, coordinator, and communicator.",
      },
      technicalSkills: {
        badge: "Technical Stack",
        title: "My Skillset",
        subtitle: "A comprehensive overview of my programming languages, frameworks, databases, and engineering concepts.",
      },
      projects: {
        badge: "Featured Projects",
        titleLine1: "Work that speaks",
        titleLine2: "for itself",
        subtitle: "A selection of projects that showcase my expertise in mechanical design, EV systems, and precision engineering.",
        connectLinkedin: "Connect on LinkedIn",
      },
      hero: {
        playStory: "Play My Story",
        playAgain: "Play Again",
        pause: "Pause",
        videoFallback: "Your browser does not support the video tag.",
      },
      contentCreator: {
        downloadResume: "Download My Full Resume",
      },
      footer: {
        connectLinkedin: "Connect on LinkedIn",
      },
    },

    contact: {
      title: "Get In Touch",
      message: "Let me know about your next challenge. I'm open to thesis positions, working student roles, and R&D opportunities at premium automotive OEMs.",
      headline: "Contact",
      reachMe: "Reach Me",
      linkedinCta: "Connect on LinkedIn",
      firstNamePlaceholder: "First Name",
      lastNamePlaceholder: "Last Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Type your message here",
      permissionLabel: "I give permission to contact me at this email address.",
      responseNote: "Your message will be sent directly to my inbox. I typically respond within 24-48 hours.",
      urgentPrefix: "For urgent inquiries, reach me at",
      urgentJoiner: "or",
      sending: "Sending...",
      success: "Sent Successfully ✓",
      error: "Failed — Try Again",
      submit: "Send Message",
    },
  },
};

export const getContent = (language = "de") => content[language] || content.de;
