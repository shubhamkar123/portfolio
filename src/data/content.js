// ============================================================
// content.js — Complete bilingual content for the entire portfolio
// German (de) is primary, English (en) is secondary.
// Every section of every component pulls from here via useContent().
// ============================================================

import rimGeometry from "../assets/projects/rim-geometry.jpg";
import rimMesh from "../assets/projects/rim-mesh.jpg";
import rimWorkflow from "../assets/projects/rim-workflow.jpg";

const rimImages = (captions) => [
  { src: rimGeometry, caption: captions[0] },
  { src: rimMesh, caption: captions[1] },
  { src: rimWorkflow, caption: captions[2] },
];

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
      title: "Konstruktions- & Entwicklungsingenieur Maschinenbau",
      location: "Brandenburg an der Havel, Deutschland",
      summary:
        "M.Sc.-Student im Maschinenbau an der TH Brandenburg mit über 14 Monaten Industrieerfahrung in Konstruktion und Entwicklung (Hydrauliksysteme bis 80 bar, CATIA V5) sowie Qualitätswesen (GD&T, MSA). Ich arbeite nach First Principles: zuerst Anforderungen und Physik, dann CAD, technische Zeichnungen mit GD&T und Validierung. Patentanmeldung für ein automatisches Reifendruck-Regulierungssystem eingereicht.",
    },

    heroContent: {
      greeting: "Hallo, ich bin Shubham Karne",
      titleHighlight: "Konstruktions- & Entwicklungsingenieur",
      subtitle:
        "Ich konstruiere mechanische Systeme nach First Principles: von Anforderungen und Lastfällen über CAD und GD&T-Zeichnungen bis zu FEM und Validierung.",
      ctaPrimary: { text: "Meine Arbeiten", href: "#projects" },
      ctaSecondary: {
        text: "Kontaktieren Sie mich",
        href: "mailto:shubham.karne111@gmail.com?subject=Kontaktanfrage – Portfolio&body=Hallo Shubham,%0D%0A%0D%0Aich bin auf Ihr Portfolio gestoßen und würde gerne eine Möglichkeit mit Ihnen besprechen.%0D%0A%0D%0AMit freundlichen Grüßen,",
      },
      ctaResume: { text: "Lebenslauf herunterladen", href: "/Shubham_Karne_Resume.pdf" },
    },

    aboutContent: {
      heading: "Hallo!",
      bio: `Hallo, mein Name ist <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shubham Karne</span>, ein Maschinenbau-Masterstudent an der TH Brandenburg mit über 14 Monaten Industrieerfahrung in Konstruktion (Hydrauliksysteme, CATIA V5) und Qualitätswesen (GD&T, MSA), auf dem Weg zu Konstruktions- und Fahrzeugentwicklungsrollen in der Automobilindustrie.`,
      techStack: ["CATIA V5 / V6 · NX", "GD&T-Zeichnungen", "FEM & Topologieopt."],
    },

    skillsContent: {
      badge: "Meine Vorgehensweise",
      heading: "Wie ich ein Konstruktionsproblem nach First Principles angehe",
      description:
        "Ich beginne mit der Funktion des Bauteils und der Physik dahinter, damit jedes CAD-Modell, jede Zeichnung und jede Simulation an einem erwarteten Ergebnis geprüft werden kann.",
      cards: [
        {
          number: "01",
          title: "Anforderungen & Physik",
          text: "Festlegen, was das Bauteil leisten muss: Lasten, Momente, Volumenströme, Drücke und Randbedingungen sowie die zugrunde liegenden physikalischen Gesetze.",
        },
        {
          number: "02",
          title: "Zuerst abschätzen",
          text: "Einfache Handrechnungen legen die erwartete Größenordnung fest, bevor CAD oder FEM beginnt. So fällt ein falsches Modell früh auf.",
        },
        {
          number: "03",
          title: "Konstruieren & Zeichnen",
          text: "CAD in CATIA V5, CATIA V6 oder NX, mit Fertigungszeichnungen, GD&T und Stücklisten, die die Fertigung bauen und prüfen kann.",
        },
        {
          number: "04",
          title: "Validieren",
          text: "FEM, Messung und MSA gegen die Abschätzung. Weichen sie ab, kläre ich die Ursache, bevor es weitergeht.",
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
            { name: "CATIA V5", level: 90 },
            { name: "Technische Zeichnungen & GD&T", level: 88 },
            { name: "SolidWorks", level: 85 },
            { name: "CATIA V6 (3DEXPERIENCE)", level: 75 },
            { name: "Siemens NX", level: 60 },
          ],
        },
        {
          title: "Simulation & CAE",
          skills: [
            { name: "ANSYS Mechanical (Statik, Topologieopt.)", level: 70 },
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
            { name: "Englisch (C1-Niveau, englischsprachige Ausbildung)", level: 95 },
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
        title: "WPA Wissenschaftliches Projekt: EV vs. ICE Felgen-Topologieoptimierung",
        description: "Eigenständiges wissenschaftliches Projekt an der TH Brandenburg zum Vergleich topologieoptimierter Leichtmetallfelgen-Designs für Elektro- und Verbrennungsfahrzeuge.",
        role: "Forscher",
        badge: "Forschung",
      },
      {
        title: "Braitenberg-Fahrzeugschwarm: Autonome Mobile Systeme",
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
        skills: ["Hydrauliksystemdesign (2–80 bar)", "Stücklistenerstellung", "Änderungsmanagement", "CATIA V5"],
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
        id: "prorites-dosing-systems",
        number: "01",
        badge: "⚙️ Konstruktion & Entwicklung",
        title: "Hydraulische Dosiersysteme (2–80 bar)",
        description:
          "Bei Prorites Equipments habe ich hydraulische und chemische Dosiersysteme für Industriekunden wie HPCL Mangalore und Ab-Mauri konstruiert und entwickelt, vom Konzept über CATIA-V5-Baugruppen bis zu Fertigungszeichnungen, Stücklisten und Änderungen.",
        caseStudy: [
          { label: "Problem", text: "Jedes System musste eine geforderte Dosierrate bei einem Betriebsdruck zwischen 2 und 80 bar liefern, aus verfügbaren Komponenten und im Zeitplan des Kunden." },
          { label: "First Principles", text: "Die Prozessanforderung (Volumenstrom und Betriebsdruck) bestimmte die Konstruktion: Komponentenauswahl, Druckstufen und Layout folgten daraus." },
          { label: "Konstruktion", text: "Baugruppen, Fertigungszeichnungen und Stücklisten in CATIA V5; Änderungsmanagement über 3+ parallele Projekte." },
          { label: "Ergebnis", text: "Meine Korrekturen am Dosierstrom wurden in den Produktionsstandard übernommen. ~90% Termintreue und ~20% schnellere Iterationszyklen." },
        ],
        techTags: ["CATIA V5", "Hydraulik", "Technische Zeichnungen", "Stückliste", "Änderungsmanagement"],
        links: {},
        isFlagship: true,
      },
      {
        id: "wpa-rim-topology",
        number: "02",
        badge: "🔬 Forschung · CATIA V6 + ANSYS",
        title: "EV vs. ICE Leichtmetallfelge: Lastfälle & Topologieoptimierung",
        description:
          "Wissenschaftliches Projekt (WPA) an der TH Brandenburg, betreut von Prof. Robert Flassig. Frage: Braucht ein EV-Rad eine andere Struktur als ein Verbrenner-Rad? 17-Zoll-Felge aus A356-Aluminium, modelliert in CATIA V6 und berechnet in ANSYS Mechanical.",
        caseStudy: [
          { label: "Problem", text: "Elektrofahrzeuge sind schwerer und leiten sofortiges Motormoment und Rekuperationsmoment über das Rad. Die Standardlastfälle für Felgen (SAE J267) wurden für Verbrenner geschrieben." },
          { label: "First Principles", text: "EV-Lastfälle direkt aus dem Antriebsstrang abgeleitet (630 Nm Motormoment und 420 Nm Rekuperationsmoment, Klasse BMW i4 M50 / iX M60) und gegen die SAE-J267-Lastfälle an derselben Felge gerechnet." },
          { label: "Erkenntnis", text: "Statische Basisanalyse: maximale Vergleichsspannung 69,2 MPa (EV) vs. 133,1 MPa (ICE); der Ort der Spannungsspitze verschiebt sich. Die optimale Materialverteilung unterscheidet sich also." },
          { label: "Nächste Schritte", text: "Topologieoptimierung für beide Lastfälle (ANSYS Structural Optimization), danach transiente Stoßbelastung (Explicit Dynamics / LS-DYNA). Laufend." },
        ],
        images: rimImages(["Felgengeometrie (CAD)", "FE-Netz (ANSYS Mechanical)", "Workflow Statik + Topologieoptimierung"]),
        techTags: ["CATIA V6", "ANSYS Mechanical", "Topologieoptimierung", "EV-Lastfälle", "A356-Aluminium"],
        links: {},
        isFlagship: false,
      },
      {
        id: "atlas-copco-gdt",
        number: "03",
        badge: "🎯 Qualität · GD&T",
        title: "GD&T-Prüfung & Vorrichtungskonstruktion",
        description:
          "Bei der Atlas Copco Group in Pune habe ich monatlich über 150 Kompressorkomponenten gegen GD&T-Zeichnungen geprüft und die Werkzeuge gebaut, die diese Prüfungen wiederholbar machen.",
        caseStudy: [
          { label: "Problem", text: "Prüfergebnisse müssen belastbar sein, bevor sie über Freigabe, Nacharbeit oder Ausschuss von über 150 Bauteilen im Monat entscheiden." },
          { label: "First Principles", text: "Bezugssystem und Toleranzzonen der Zeichnung legen fest, wie ein Bauteil aufgenommen und gemessen wird; die MSA bestätigt, dass das Messsystem selbst fähig ist, bevor seine Ergebnisse genutzt werden." },
          { label: "Konstruktion", text: "Eine Prüfvorrichtung für eine Kompressorkomponente, eine Prüfprotokollvorlage, ein CAPA-Format und ein 5S-Layout für Messmittel. Alle sind noch im Einsatz." },
          { label: "Ergebnis", text: "~20% bessere Fehlererkennung und ~15% weniger Nacharbeit; MSA über 3 Fertigungsteams koordiniert." },
        ],
        techTags: ["GD&T", "Vorrichtungsbau", "MSA", "CAPA", "ISO 9001"],
        links: {},
        isFlagship: false,
      },
      {
        id: "tire-pressure-patent",
        number: "04",
        badge: "📋 Patent angemeldet",
        title: "Automatisches Reifendruck-Regulierungssystem",
        description:
          "Entwicklung eines vollautomatischen Reifendruck-Regulierungssystems für Militärfahrzeuge, das eine gleichzeitige Reifenbefüllung bei wechselndem Gelände und Lastbedingungen ermöglicht. Durchführung von Design- und Leistungssimulationen über mehrere Betriebsszenarien (Last, Gelände, Temperatur). Patentanmeldung beim indischen Patentamt eingereicht; Prüfung läuft.",
        techTags: ["CATIA V5", "Systemdesign", "Leistungssimulation", "Verteidigungstechnik"],
        links: {},
        isFlagship: false,
      },
      {
        id: "ev-drivetrain-modeling",
        number: "05",
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
        number: "06",
        badge: null,
        title: "Braitenberg-Fahrzeugschwarm",
        description:
          "Projekt für autonome mobile Systeme zur Implementierung eines Schwarms von Braitenberg-Fahrzeugen zur Untersuchung emergenten, sensorgesteuerten Verhaltens in einfachen autonomen Agenten.",
        techTags: ["Autonome Systeme", "Sensorgesteuerte Regelung", "Robotik"],
        links: {},
        isFlagship: false,
      },
    ],

    availability: {
      badge: "Verfügbarkeit & Eignung",
      heading: "Auf einen Blick",
      description: "Starttermin, Umfang und Kernkompetenzen für ein Praktikum in der Konstruktion auf einen Blick.",
      items: [
        { label: "Start & Dauer", value: "1. Februar 2027 · 6 Monate", detail: "Verfügbar für 6 Monate und offen für eine Verlängerung, wenn das Team mich länger braucht." },
        { label: "Umfang", value: "Vollzeit, 40 h/Woche vor Ort", detail: "Keine Kurse oder Seminare während des Praktikums." },
        { label: "Standort", value: "Gigafactory Berlin-Brandenburg (Grünheide)", detail: "Vollständig vor Ort. Ich wohne in Brandenburg und brauche keine Umzugsunterstützung." },
        { label: "Studium", value: "Durchgehend immatrikuliert", detail: "M.Sc. Maschinenbau an der TH Brandenburg für die gesamte Dauer des Praktikums." },
        { label: "Masterarbeit & Abschluss", value: "Abhängig von der Masterarbeit", detail: "Ich würde meine Masterarbeit gerne auf die Praktikumsarbeit stützen, wenn es für das Team passt. Dann voraussichtlich Abschluss um August 2027, sonst schreibe ich sie nach dem Praktikum." },
        { label: "Aufenthaltstitel", value: "Aufenthaltserlaubnis zum Studium (§16b)", detail: "Verlängerung beantragt, mit zweijähriger Gültigkeit für die gesamte Praktikumsdauer." },
        { label: "Englisch", value: "C1-Niveau", detail: "Meine gesamte Ausbildung von der Schule bis zum M.Sc. war auf Englisch, und ich habe beruflich auf Englisch gearbeitet." },
        { label: "3D-CAD", value: "CATIA V5 · CATIA V6 · Siemens NX", detail: "CATIA V5 beruflich bei Prorites Equipments für hydraulische Dosiersysteme. CATIA V6 (3DEXPERIENCE) in meinen M.Sc.-Projekten, darunter eine Leichtmetallfelge." },
        { label: "Zeichnungen & GD&T", value: "Industrieerfahrung in beidem", detail: "Tägliche Arbeit mit GD&T-Zeichnungen bei Atlas Copco, inklusive Prüfung und einer Prüfvorrichtung, die noch im Einsatz ist. Fertigungszeichnungen und Stücklisten bei Prorites." },
      ],
    },

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
      twelfth: "B.Tech Maschinenbau mit Honours (Elektrofahrzeuge), PCCOE Pune, CGPA 7.56",
      tenth: "Note: Auszeichnung",
    },

    footerContent: {
      taglines: ["Konstruktion & Entwicklung", "CAD · GD&T-Zeichnungen · FEM", "First-Principles-Engineering"],
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
        subtitle: "Berufsverband und Projektarbeit neben dem Studium.",
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
        subtitle: "Die CAD-, GD&T-, Simulations- und Fertigungswerkzeuge, mit denen ich arbeite.",
      },
      projects: {
        badge: "Ausgewählte Projekte",
        titleLine1: "Arbeit, die für sich",
        titleLine2: "selbst spricht",
        subtitle: "Jedes Projekt zeigt das Problem, die Physik, von der ich ausgegangen bin, und das Ergebnis.",
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
      message: "Verfügbar für ein 6-monatiges Vollzeitpraktikum in der Konstruktion ab 1. Februar 2027 in Berlin/Brandenburg. Ebenfalls offen für Abschlussarbeiten und Werkstudentenstellen.",
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
      error: "Fehlgeschlagen. Erneut versuchen",
      submit: "Nachricht senden",
    },
  },

  en: {
    ...shared,
    nav: ["About", "Skills", "Process", "Projects", "Experience", "Certificates", "Contact"],

    personalInfo: {
      ...shared,
      title: "Mechanical Design & Development Engineer",
      location: "Brandenburg an der Havel, Germany",
      summary:
        "M.Sc. Mechanical Engineering student at TH Brandenburg with 14+ months of industry experience in mechanical design and development (hydraulic systems up to 80 bar, CATIA V5) and quality engineering (GD&T, MSA). I work from first principles: requirements and physics first, then CAD, GD&T drawings and validation. Patent application filed for an automatic tire pressure regulation system.",
    },

    heroContent: {
      greeting: "Hi, I'm Shubham Karne",
      titleHighlight: "Mechanical Design & Development Engineer",
      subtitle:
        "I design mechanical systems from first principles: from requirements and load cases to CAD, GD&T drawings, FEA and validation.",
      ctaPrimary: { text: "View My Work", href: "#projects" },
      ctaSecondary: {
        text: "Contact Me",
        href: "mailto:shubham.karne111@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Shubham,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
      },
      ctaResume: { text: "Download Resume", href: "/Shubham_Karne_Resume.pdf" },
    },

    aboutContent: {
      heading: "Hello!",
      bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shubham Karne</span>, a Mechanical Engineering M.Sc. student at TH Brandenburg with 14+ months of industry experience in mechanical design (hydraulic systems, CATIA V5) and quality engineering (GD&T, MSA), working toward mechanical design and vehicle engineering roles in the automotive industry.`,
      techStack: ["CATIA V5 / V6 · NX", "GD&T Drawings", "FEA & Topology Opt."],
    },

    skillsContent: {
      badge: "My Process",
      heading: "How I approach a design problem from first principles",
      description:
        "I start from what the part has to do and the physics behind it, so every CAD model, drawing and simulation has an expected answer it can be checked against.",
      cards: [
        {
          number: "01",
          title: "Requirements & Physics",
          text: "Define what the part must do: loads, torques, flows, pressures and constraints, and the physical laws that govern them.",
        },
        {
          number: "02",
          title: "Estimate First",
          text: "Simple hand calculations set the expected magnitude before any CAD or FEA, so a wrong model is caught early.",
        },
        {
          number: "03",
          title: "Design & Draw",
          text: "CAD in CATIA V5, CATIA V6 or NX, with manufacturing drawings, GD&T and BOMs that production can actually build and check.",
        },
        {
          number: "04",
          title: "Validate",
          text: "FEA, measurement and MSA against the estimate. If they disagree, I find out why before anything moves on.",
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
            { name: "CATIA V5", level: 90 },
            { name: "Engineering Drawings & GD&T", level: 88 },
            { name: "SolidWorks", level: 85 },
            { name: "CATIA V6 (3DEXPERIENCE)", level: 75 },
            { name: "Siemens NX", level: 60 },
          ],
        },
        {
          title: "Simulation & CAE",
          skills: [
            { name: "ANSYS Mechanical (Static, Topology Opt.)", level: 70 },
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
            { name: "English (C1 equiv., English-medium education)", level: 95 },
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
          description: "B.Tech Honours in Electric Vehicle Technology, now advancing into design- and CAE-focused M.Sc. coursework and research at TH Brandenburg.",
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
        title: "WPA Scientific Project: EV vs. ICE Rim Topology Optimization",
        description: "Independent scientific project at TH Brandenburg comparing topology-optimized alloy wheel rim designs for electric and internal combustion vehicles.",
        role: "Researcher",
        badge: "Research",
      },
      {
        title: "Braitenberg Vehicle Swarm: Autonomous Mobile Systems",
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
        skills: ["Hydraulic System Design (2–80 bar)", "BOM Creation", "Engineering Change Management", "CATIA V5"],
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
        id: "prorites-dosing-systems",
        number: "01",
        badge: "⚙️ Design & Development",
        title: "Hydraulic Dosing Systems (2–80 bar)",
        description:
          "At Prorites Equipments I designed and developed hydraulic and chemical dosing systems for industrial clients such as HPCL Mangalore and Ab-Mauri. My work covered concepts, CATIA V5 assemblies, manufacturing drawings, BOMs and engineering changes.",
        caseStudy: [
          { label: "Problem", text: "Each system had to deliver a required dose rate at an operating pressure between 2 and 80 bar, built from available components and delivered on the client's schedule." },
          { label: "First principles", text: "The process requirement (flow rate and operating pressure) drove the design. Component selection, pressure ratings and layout followed from it." },
          { label: "Design", text: "Assemblies, manufacturing drawings and BOMs in CATIA V5; engineering change management across 3+ concurrent projects." },
          { label: "Result", text: "My dosing-flow corrections were adopted into the production baseline. ~90% on-time delivery and ~20% faster iteration cycles." },
        ],
        techTags: ["CATIA V5", "Hydraulics", "Engineering Drawings", "BOM", "Change Management"],
        links: {},
        isFlagship: true,
      },
      {
        id: "wpa-rim-topology",
        number: "02",
        badge: "🔬 Research · CATIA V6 + ANSYS",
        title: "EV vs. ICE Alloy Wheel Rim: Load Cases & Topology Optimization",
        description:
          "Scientific project (WPA) at TH Brandenburg, supervised by Prof. Robert Flassig. Question: does an EV wheel need a different structure than an ICE wheel? A 17-inch A356 aluminium rim, modelled in CATIA V6 and analysed in ANSYS Mechanical.",
        caseStudy: [
          { label: "Problem", text: "EVs are heavier and send instant motor torque and regenerative-braking torque through the wheel. Standard rim load cases (SAE J267) were written with ICE vehicles in mind." },
          { label: "First principles", text: "Built EV load cases from the drivetrain itself (630 Nm motor torque and 420 Nm regenerative-braking torque, BMW i4 M50 / iX M60 class) and ran them against the SAE J267 ICE cases on the same rim." },
          { label: "Finding", text: "Baseline static analysis: peak von Mises stress 69.2 MPa (EV) vs. 133.1 MPa (ICE), with the peak-stress location shifting between the two, so the optimal material layout differs." },
          { label: "Next", text: "Topology optimization on both load sets (ANSYS Structural Optimization), then transient shock loading (Explicit Dynamics / LS-DYNA). Ongoing." },
        ],
        images: rimImages(["Rim CAD geometry", "FE mesh (ANSYS Mechanical)", "Static + topology-optimization workflow"]),
        techTags: ["CATIA V6", "ANSYS Mechanical", "Topology Optimization", "EV Load Cases", "A356 Aluminium"],
        links: {},
        isFlagship: false,
      },
      {
        id: "atlas-copco-gdt",
        number: "03",
        badge: "🎯 Quality · GD&T",
        title: "GD&T Inspection & Fixture Design",
        description:
          "At Atlas Copco Group in Pune I inspected 150+ air-compressor components per month against GD&T drawings and built the tools that made those checks repeatable.",
        caseStudy: [
          { label: "Problem", text: "Inspection results have to be trustworthy before they can drive accept, rework or reject decisions on 150+ components a month." },
          { label: "First principles", text: "The drawing's datums and tolerance zones define how a part must be located and measured, and MSA confirms the measurement itself is capable before its results are used." },
          { label: "Design", text: "An inspection fixture for an air-compressor component, an inspection-log template, a CAPA format and a 5S layout for measuring instruments. All are still in use." },
          { label: "Result", text: "~20% better defect detection and ~15% lower rework rate; MSA coordinated across 3 manufacturing teams." },
        ],
        techTags: ["GD&T", "Fixture Design", "MSA", "CAPA", "ISO 9001"],
        links: {},
        isFlagship: false,
      },
      {
        id: "tire-pressure-patent",
        number: "04",
        badge: "📋 Patent Filed",
        title: "Automatic Tire Pressure Regulation System",
        description:
          "Designed a fully automatic tire pressure regulation system for military vehicles, enabling simultaneous tire inflation across changing terrain and load conditions. Ran design and performance simulations across multiple operating scenarios (load, terrain, temperature). Patent application filed with the Indian Patent Office; examination ongoing.",
        techTags: ["CATIA V5", "System Design", "Performance Simulation", "Defense Engineering"],
        links: {},
        isFlagship: false,
      },
      {
        id: "ev-drivetrain-modeling",
        number: "05",
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
        number: "06",
        badge: null,
        title: "Braitenberg Vehicle Swarm",
        description:
          "Autonomous Mobile Systems project implementing a swarm of Braitenberg vehicles to explore emergent, sensor-driven behavior in simple autonomous agents.",
        techTags: ["Autonomous Systems", "Sensor-Driven Control", "Robotics"],
        links: {},
        isFlagship: false,
      },
    ],

    availability: {
      badge: "Availability & Fit",
      heading: "Quick facts",
      description: "Start date, commitment and core skills for a mechanical design internship in one place.",
      items: [
        { label: "Start & duration", value: "1 February 2027 · 6 months", detail: "Available for 6 months and open to extending if the team needs me longer." },
        { label: "Commitment", value: "Full-time, 40 h/week onsite", detail: "No courses or seminars during the internship." },
        { label: "Location", value: "Gigafactory Berlin-Brandenburg (Grünheide)", detail: "Fully in person. I live in Brandenburg and need no relocation support." },
        { label: "Enrollment", value: "Enrolled throughout", detail: "M.Sc. Mechanical Engineering at TH Brandenburg for the whole duration of the internship." },
        { label: "Thesis & graduation", value: "Depends on my Master's thesis", detail: "I would welcome basing my thesis on the internship work if that suits the team, with graduation around August 2027. Otherwise I will write it after the internship." },
        { label: "Work permit", value: "German student residence permit (§16b)", detail: "Extension applied for, with a two-year validity covering the full internship." },
        { label: "English", value: "C1 equivalent", detail: "My entire education from school through my Master's has been in English, and I have worked in English professionally." },
        { label: "3D CAD", value: "CATIA V5 · CATIA V6 · Siemens NX", detail: "CATIA V5 professionally at Prorites Equipments for hydraulic dosing systems. CATIA V6 (3DEXPERIENCE) in my M.Sc. projects, including an alloy wheel rim design." },
        { label: "Drawings & GD&T", value: "Industry experience in both", detail: "Daily work with GD&T drawings at Atlas Copco, including inspection and an inspection fixture that is still in use. Manufacturing drawings and BOMs at Prorites." },
      ],
    },

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
      twelfth: "B.Tech Mechanical Engineering with Honours (Electric Vehicles), PCCOE Pune, CGPA 7.56",
      tenth: "Grade: Distinction",
    },

    footerContent: {
      taglines: ["Mechanical Design & Development", "CAD · GD&T Drawings · FEA", "First-Principles Engineering"],
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
        subtitle: "Professional membership and project work alongside my studies.",
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
        subtitle: "The CAD, GD&T, simulation and manufacturing tools I use.",
      },
      projects: {
        badge: "Featured Projects",
        titleLine1: "Work that speaks",
        titleLine2: "for itself",
        subtitle: "Each project shows the problem, the physics I started from, and the result.",
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
      message: "Available for a 6-month, full-time mechanical design internship from 1 February 2027 in Berlin/Brandenburg. Also open to thesis and working-student roles.",
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
      error: "Failed. Try again",
      submit: "Send Message",
    },
  },
};

export const getContent = (language = "de") => content[language] || content.de;
