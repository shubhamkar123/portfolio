// Bilingual Portfolio Data — German (de) as primary, English (en) as secondary
// For use with LanguageContext

export const getContent = (language = 'de') => {
  const content = {
    de: {
      // Navigation
      nav: ['Über', 'Projekte', 'Erfahrung', 'Fähigkeiten', 'Kontakt'],
      
      // Hero Section
      heroContent: {
        greeting: 'Hallo, ich bin Shubham Karne',
        titleHighlight: 'Maschinenbauingenieur — Antriebsstrang & Präzisionssysteme',
        subtitle: 'Ich entwickle präzise Qualitätssysteme und Antriebsstranglösungen — von GD&T-Inspektionen über Hydrauliksysteme bis zur CAE-Simulation und Antriebsstrangentwicklung.',
        ctaPrimary: {
          text: 'Meine Arbeiten',
          href: '#projects'
        },
        ctaSecondary: {
          text: 'Kontaktieren Sie mich',
          href: 'mailto:shubham.karne111@gmail.com?subject=Kontaktanfrage – Portfolio&body=Hallo Shubham,%0D%0A%0D%0Aich bin auf Ihr Portfolio gestoßen und würde gerne eine Möglichkeit mit Ihnen besprechen.%0D%0A%0D%0AMit freundlichen Grüßen,'
        },
        ctaResume: {
          text: 'Lebenslauf herunterladen',
          href: '/Shubham_Karne_Resume.pdf'
        }
      },
      about: {
        title: 'Über mich',
        description: 'Ich bin ein Master-Student im Maschinenbau an der Technischen Hochschule Brandenburg mit über 14 Monaten Industrieerfahrung in Qualitätssicherung und Produktentwicklung. Meine Leidenschaft liegt in der thermomechanischen Ingenieurwissenschaft, CAE-Simulation und der Optimierung von Antriebssträngen für Premium-OEMs wie BMW, Mercedes-Benz und darüber hinaus.',
        highlights: [
          'Theoretisches Fundament in technischer Thermodynamik und Strömungsmechanik',
          'Praktische Erfahrung in MSA, GD&T und Messtechwissenschaft',
          'MATLAB/Simulink für dynamische Antriebsstrangmodellierung',
          'CAE-Expertise: ANSYS, HyperMesh, ANSA, CATIA V6'
        ]
      },

      // Projects Section  
      projects: {
        title: 'Technische Projekte',
        subtitle: 'CAE-Simulation, CAD-Design und Engineering-Software',
        
        categories: {
          cae: {
            title: 'CAE & Simulation',
            description: 'Finite-Elemente-Analyse und Optimierung mit ANSYS, HyperMesh und ANSA',
            projects: [
              {
                id: 'wpa-rim-topology',
                title: 'EV vs. ICE Felgengeometrie-Topologie-Optimierung',
                subtitle: 'Wissenschaftliches Projekt (WPA)',
                engineering_objective: 'Vergleich von Leichtbauoptimierungsstrategien für Elektrofahrzeug- vs. Verbrennungsmotor-Felgen unter statischen und dynamischen Lasten',
                workflow: [
                  'Geometrieerstellung und -cleanup in ANSA',
                  'HyperMesh-Vernetzung mit Fokus auf kritische Spannungszonen',
                  'Grenzbedingungen definiert für Rad-Hub-Schnittstellen',
                  'ANSYS Explicit Dynamics für Crash- und Ermüdungssimulation',
                  'LS-DYNA für nichtlineare Optimierungszyklen'
                ],
                results: [
                  'Massenreduktion von ~12% bei gleichbleibender Steifigkeit',
                  'Kritische Spannungen unter maximalen Fahrlastzuständen validiert',
                  'Optimierte EV-Felge zeigte verbesserte thermische Stabilität'
                ],
                technologies: ['ANSA', 'HyperMesh', 'ANSYS', 'LS-DYNA', 'CAD']
              },
              {
                id: 'powertrain-fem',
                title: 'Antriebsstrang-FEM-Analyse',
                subtitle: 'Dynamische Systemmodellierung',
                engineering_objective: 'Finite-Elemente-Analyse von Antriebsstrangkomponenten unter betrieblichen Lasten (Torsion, Biegung, Vibration)',
                workflow: [
                  'Komponentenmodellierung in CATIA V6',
                  'Hochwertige Vernetzung mit ANSYS Meshing',
                  'Materialverhalten und Kontaktbedingungen kalibriert',
                  'Transiente dynamische Analyse unter realistischen Fahrzyklus-Eingaben',
                  'Spannungskonzentrationsfaktoren extrahiert für Ermüdungsanalyse'
                ],
                results: [
                  'Maximale von-Mises-Spannungen unter Normbedingungen validiert',
                  'Schwingungsfrequenzen gemessen vs. simuliert korreliert',
                  'Ermüdungslebensdauer prognostiziert für kritische Schnittstellen'
                ],
                technologies: ['ANSYS', 'CATIA V6', 'HyperMesh', 'MATLAB']
              }
            ]
          },
          
          cad: {
            title: 'CAD & Konstruktion',
            description: 'Mechanische Komponentendesign und Modellierung mit CATIA V6',
            projects: [
              {
                id: 'hydraulic-dosing-system',
                title: 'Hochdruck-Dosiersystem (2–80 bar)',
                subtitle: 'Design & Prototyping bei Prorites Equipments',
                engineering_objective: 'Neugestaltung eines Hochdruck-Dosiersystems zur Behebung von Strömungsinstabilitäten und Druckabfällen in kritischen Rohren',
                design_changes: [
                  'Interne Kanalgeometrie neu konzipiert für laminare Strömung',
                  'Ventil-Sequenzierung optimiert für schnellere Druckaufbau',
                  'Materialwechsel zu korrosionsbeständigem Stahl (316 L) für Langlebigkeit',
                  'Prototypen gefertigt und unter vollständiger Last getestet (80 bar)'
                ],
                results: [
                  'Druckabfallreduktion um ~18% über die Gesamtstrecke',
                  'Durchflussraten um 15% erhöht bei konstanter Stromversorgung',
                  '~20% schnellere Iterationen bei der Produktentwicklung',
                  '~90% Pünktlichkeit bei der Lieferung an Kunden (HPCL Mangalore, Ab-Mauri)'
                ],
                technologies: ['CATIA V6', 'PTC Creo', 'CFD-Prinzipien', 'Strömungsmechanik']
              },
              {
                id: 'atprs-patent',
                title: 'Automatisches Reifendruck-Regulierungssystem (ATPRS)',
                subtitle: 'Patent-Serie-Projekt (B.Tech Abschlussarbeit)',
                engineering_objective: 'Entwicklung eines autonomen Reifendruck-Regulierungssystems für Sicherheit und Kraftstoffeffizienz im Transportwesen',
                design_features: [
                  'Pneumatische Verdichterlösung mit intelligenter Steuerung',
                  'In-Wheel-Sensor-Integration für Echtzeit-Drucküberwachung',
                  'Sicherheitsgesperren und Überdruckventile kalibriert',
                  'End-to-End-Prototypentwicklung und experimentelle Validierung'
                ],
                status: 'Patent eingereicht beim Indian Patent Office (Verteidigungssektor)',
                technologies: ['CATIA V6', 'Pneumatik', 'Steuerungssysteme', 'CAD-Modellierung']
              }
            ]
          },
          
          software: {
            title: 'Software & Tools',
            description: 'Engineering-Software und Datenverarbeitungslösungen',
            projects: [
              {
                id: 'powertrain-simulator',
                title: 'Dynamischer Antriebsstrang-Simulator',
                subtitle: 'MATLAB/Simulink-Modell für Fahrlastzustände',
                engineering_objective: 'Erstellen einer umfassenden Antriebsstrang-Simulationsumgebung zur Analyse von Leistung, Verbrauch und Effizienz über verschiedene Fahrlastzustände',
                features: [
                  'Modular aufgebautes System mit Komponenten-Subsystemen',
                  'Motor-, Getriebe-, Achsen- und Reifen-Modelle integriert',
                  'Echtzeit-Fahrzyklen (WLTP, EPA, NEDC) einspeisbar',
                  'Drehmoment- und Leistungsverlauf automatisch berechnet',
                  'Effizienzlandkarten für verschiedene Betriebspunkte erstellt'
                ],
                results: [
                  'Systemdynamiken validiert gegen Fahrerlebnisse',
                  'Optimale Getriebe-Gangwechsel-Strategien identifiziert',
                  'Kraftstoffverbrauch um 7–9% reduziert durch Feinabstimmung',
                  'Prognosegenauigkeit: ±5% gegen Testfahrten'
                ],
                technologies: ['MATLAB', 'Simulink', 'Signal Processing', 'Control Systems']
              },
              {
                id: 'measurement-automation',
                title: 'Messdaten-Automatisierungs-Tool',
                subtitle: 'MSA & GD&T-Datenverarbeitung (Atlas Copco)',
                engineering_objective: 'Automatisierung der Mess- und MSA-Datenverarbeitung zur Beschleunigung der Inspektionszyk lus und Konsistenz über 150+ Komponenten/Monat',
                features: [
                  'CSV-Upload für Messdaten verschiedener Sensoren',
                  'Automatische Ausreißer-Erkennung und statistische Qualitätskontrolle',
                  'Fähigkeits-Indexe (Cp, Cpk) in Echtzeit berechnet',
                  'Abweichungsberichte mit Korrekturmaßnahmenverfolgung generiert',
                  'Dashboard für Trend-Analyse und Maschinenleistung'
                ],
                results: [
                  'Inspektionszeit pro Komponente um ~25% reduziert',
                  'Fehlerquote in der Dateneingabe auf <1% gesenkt',
                  'MSA-Konsistenz über 3 Schichten hinweg verbessert',
                  '~15% Verringerung der Ausschussquoten durch frühzeitige Erkennung'
                ],
                technologies: ['Python', 'Excel VBA', 'Statistical Analysis', 'SQL']
              }
            ]
          }
        }
      },

      // Experience Section
      experience: {
        title: 'Berufserfahrung',
        roles: [
          {
            title: 'Qualitätssicherungsingenieur',
            company: 'Atlas Copco Group, Pune, Indien',
            duration: 'Juli – September 2025',
            highlights: [
              'GD&T-Inspektionen an 150+ Komponenten pro Monat durchgeführt',
              'Messsystem-Analysen (MSA) über 3 Fertigungsteams koordiniert',
              '15% Reduzierung der Nachbearbeitungsquoten durch Problemlösung',
              '~20% Verbesserung der Defekterkennung mittels Inspektionsmethoden'
            ]
          },
          {
            title: 'Design- und Entwicklungsingenieur',
            company: 'Prorites Equipments Pvt. Ltd., Pune, Indien',
            duration: 'Mai 2024 – März 2025',
            highlights: [
              'Hydraulische Systeme bis 80 bar entwickelt und prototypiert',
              'Strömungsinefizienzzen durch Geometrie-Umgestaltung behoben',
              '~90% Lieferzuverlässigkeit über 3+ gleichzeitige Kundenprojekte',
              '~20% schnellere Iterationen durch verbesserte Designprozesse',
              'Clients: HPCL Mangalore, Ab-Mauri'
            ]
          }
        ]
      },

      // Skills Section
      skills: {
        title: 'Technische Fähigkeiten',
        categories: [
          {
            name: 'Kernkompetenzen',
            items: ['Technische Thermodynamik', 'Strömungsmechanik', 'Antriebsstrangmechatronik', 'Verbrennungsmotoren-Konzepte', 'Kraftstoffeinspritzsysteme', 'Turboaufladung', 'Experimentelle Operationen']
          },
          {
            name: 'CAE & Simulation',
            items: ['ANSYS (Explicit Dynamics)', 'HyperMesh', 'ANSA', 'LS-DYNA', 'MATLAB/Simulink', 'Finite-Element-Analyse', 'Dynamische Modellierung']
          },
          {
            name: 'CAD & Design',
            items: ['CATIA V6', 'PTC Creo', 'SolidWorks', '3D-Modellierung', 'Baugruppendesign', 'Technische Zeichnungen']
          },
          {
            name: 'Messwissenschaft & Qualität',
            items: ['GD&T (ASME Y14.5)', 'MSA', 'Messtechnologie', 'Statistisch-qualitätsregelung', 'Root-Cause-Analyse', 'Inspektionsverfahren']
          },
          {
            name: 'Programmierung & Tools',
            items: ['Python', 'MATLAB', 'Excel VBA', 'SQL', 'Git', 'SAP S/4HANA (68%)']
          },
          {
            name: 'Sprachen',
            items: ['Deutsch (Arbeitsniveau)', 'Englisch (C1)', 'Hindi & Marathi (Muttersprache)']
          }
        ]
      },

      // Contact Section
      contact: {
        title: 'Kontakt',
        email: 'shubham.karne111@gmail.com',
        phone: '+49 15510 691557',
        location: 'Zanderstr. 10G, 14770 Brandenburg an der Havel, Deutschland',
        message: 'Lassen Sie mich von Ihrer nächsten Herausforderung hören. Ich bin offen für Abschlussarbeiten, Werkstudent-Positionen und R&D-Rollen bei Premium-Automobilherstellern.'
      }
    },

    en: {
      // Navigation
      nav: ['About', 'Projects', 'Experience', 'Skills', 'Contact'],
      
      // Hero Section
      heroContent: {
        greeting: 'Hi, I\'m Shubham Karne',
        titleHighlight: 'Mechanical Engineer & EV Systems Specialist',
        subtitle: 'I engineer precision quality systems and powertrain solutions — from GD&T inspections to hydraulic systems, CAE simulation, and drivetrain design.',
        ctaPrimary: {
          text: 'View My Work',
          href: '#projects'
        },
        ctaSecondary: {
          text: 'Contact Me',
          href: 'mailto:shubham.karne111@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Shubham,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,'
        },
        ctaResume: {
          text: 'Download Resume',
          href: '/Shubham_Karne_Resume.pdf'
        }
      },

      // About Section
      about: {
        title: 'About Me',
        description: 'I\'m a Master\'s student in Mechanical Engineering at Technische Hochschule Brandenburg with over 14 months of industry experience in quality assurance and product development. My passion lies in thermal mechanical engineering, CAE simulation, and powertrain optimization for premium OEMs like BMW, Mercedes-Benz, and beyond.',
        highlights: [
          'Strong theoretical foundation in technical thermodynamics and fluid mechanics',
          'Practical expertise in MSA, GD&T, and measurement technology',
          'MATLAB/Simulink for dynamic powertrain modeling',
          'CAE expertise: ANSYS, HyperMesh, ANSA, CATIA V6'
        ]
      },

      // Projects Section
      projects: {
        title: 'Technical Projects',
        subtitle: 'CAE Simulation, CAD Design, and Engineering Software',
        
        categories: {
          cae: {
            title: 'CAE & Simulation',
            description: 'Finite-Element Analysis and optimization using ANSYS, HyperMesh, and ANSA',
            projects: [
              {
                id: 'wpa-rim-topology',
                title: 'EV vs. ICE Alloy Wheel Rim Topology Optimization',
                subtitle: 'Scientific Project (WPA)',
                engineering_objective: 'Comparative study of lightweight optimization strategies for electric vehicle vs. internal combustion engine wheel rims under static and dynamic loads',
                workflow: [
                  'Geometry creation and cleanup in ANSA',
                  'HyperMesh meshing with focus on critical stress zones',
                  'Boundary conditions defined for wheel-hub interfaces',
                  'ANSYS Explicit Dynamics for crash and fatigue simulation',
                  'LS-DYNA for nonlinear optimization cycles'
                ],
                results: [
                  'Mass reduction of ~12% while maintaining stiffness',
                  'Critical stresses validated under maximum driving load conditions',
                  'Optimized EV rim exhibited improved thermal stability'
                ],
                technologies: ['ANSA', 'HyperMesh', 'ANSYS', 'LS-DYNA', 'CAD']
              },
              {
                id: 'powertrain-fem',
                title: 'Powertrain FEM Analysis',
                subtitle: 'Dynamic System Modeling',
                engineering_objective: 'Finite-element analysis of powertrain components under operational loads (torsion, bending, vibration)',
                workflow: [
                  'Component modeling in CATIA V6',
                  'High-quality meshing with ANSYS Meshing',
                  'Material behavior and contact conditions calibrated',
                  'Transient dynamic analysis under realistic driving cycle inputs',
                  'Stress concentration factors extracted for fatigue analysis'
                ],
                results: [
                  'Maximum von-Mises stresses validated under standard conditions',
                  'Vibration frequencies measured vs. simulated correlated',
                  'Fatigue life predicted for critical interfaces'
                ],
                technologies: ['ANSYS', 'CATIA V6', 'HyperMesh', 'MATLAB']
              }
            ]
          },
          
          cad: {
            title: 'CAD & Design',
            description: 'Mechanical component design and modeling using CATIA V6',
            projects: [
              {
                id: 'hydraulic-dosing-system',
                title: 'High-Pressure Dosing System (2–80 bar)',
                subtitle: 'Design & Prototyping at Prorites Equipments',
                engineering_objective: 'Redesign of a high-pressure dosing system to resolve flow instabilities and pressure drops in critical conduits',
                design_changes: [
                  'Internal channel geometry redesigned for laminar flow',
                  'Valve sequencing optimized for faster pressure buildup',
                  'Material switched to corrosion-resistant steel (316 L) for longevity',
                  'Prototypes fabricated and tested under full load (80 bar)'
                ],
                results: [
                  'Pressure drop reduction of ~18% across the full system',
                  'Flow rates increased by 15% at constant power input',
                  '~20% faster design iterations',
                  '~90% on-time delivery across 3+ concurrent customer projects',
                  'Clients: HPCL Mangalore, Ab-Mauri'
                ],
                technologies: ['CATIA V6', 'PTC Creo', 'CFD Principles', 'Fluid Mechanics']
              },
              {
                id: 'atprs-patent',
                title: 'Automatic Tire Pressure Regulation System (ATPRS)',
                subtitle: 'Patent Series Project (B.Tech Capstone)',
                engineering_objective: 'Development of an autonomous tire pressure regulation system for safety and fuel efficiency in commercial transport',
                design_features: [
                  'Pneumatic compressor solution with intelligent control',
                  'In-wheel sensor integration for real-time pressure monitoring',
                  'Safety locks and pressure relief valves calibrated',
                  'End-to-end prototype development and experimental validation'
                ],
                status: 'Patent filed with Indian Patent Office (Defense Sector)',
                technologies: ['CATIA V6', 'Pneumatics', 'Control Systems', 'CAD Modeling']
              }
            ]
          },
          
          software: {
            title: 'Software & Tools',
            description: 'Engineering software and data processing solutions',
            projects: [
              {
                id: 'powertrain-simulator',
                title: 'Dynamic Powertrain Simulator',
                subtitle: 'MATLAB/Simulink model for driving load conditions',
                engineering_objective: 'Create a comprehensive powertrain simulation environment to analyze performance, consumption, and efficiency across various driving load scenarios',
                features: [
                  'Modular architecture with component subsystems',
                  'Engine, transmission, axle, and tire models integrated',
                  'Real-world driving cycles (WLTP, EPA, NEDC) injectable',
                  'Torque and power output automatically calculated',
                  'Efficiency maps created for various operating points'
                ],
                results: [
                  'System dynamics validated against real-world driving experience',
                  'Optimal transmission shift strategies identified',
                  'Fuel consumption reduced by 7–9% through fine-tuning',
                  'Prediction accuracy: ±5% against test drives'
                ],
                technologies: ['MATLAB', 'Simulink', 'Signal Processing', 'Control Systems']
              },
              {
                id: 'measurement-automation',
                title: 'Measurement Data Automation Tool',
                subtitle: 'MSA & GD&T data processing (Atlas Copco)',
                engineering_objective: 'Automate measurement and MSA data processing to accelerate inspection cycles and consistency across 150+ components per month',
                features: [
                  'CSV upload for measurement data from multiple sensors',
                  'Automatic outlier detection and statistical quality control',
                  'Capability indices (Cp, Cpk) calculated in real-time',
                  'Deviation reports generated with corrective action tracking',
                  'Dashboard for trend analysis and machine performance'
                ],
                results: [
                  'Inspection time per component reduced by ~25%',
                  'Data entry error rate lowered to <1%',
                  'MSA consistency improved across 3 shifts',
                  '~15% reduction in scrap rate through early detection'
                ],
                technologies: ['Python', 'Excel VBA', 'Statistical Analysis', 'SQL']
              }
            ]
          }
        }
      },

      // Experience Section
      experience: {
        title: 'Work Experience',
        roles: [
          {
            title: 'Quality Assurance Engineer',
            company: 'Atlas Copco Group, Pune, India',
            duration: 'July – September 2025',
            highlights: [
              'Performed GD&T inspections on 150+ components per month',
              'Coordinated Measurement System Analyses (MSA) across 3 manufacturing teams',
              '15% reduction in rework rates through problem-solving',
              '~20% improvement in defect detection via inspection methods'
            ]
          },
          {
            title: 'Design & Development Engineer',
            company: 'Prorites Equipments Pvt. Ltd., Pune, India',
            duration: 'May 2024 – March 2025',
            highlights: [
              'Developed and prototyped hydraulic systems up to 80 bar',
              'Resolved flow inefficiencies through geometry redesign',
              '~90% on-time delivery across 3+ concurrent customer projects',
              '~20% faster design iterations through improved workflows',
              'Clients: HPCL Mangalore, Ab-Mauri'
            ]
          }
        ]
      },

      // Skills Section
      skills: {
        title: 'Technical Skills',
        categories: [
          {
            name: 'Core Disciplines',
            items: ['Technical Thermodynamics', 'Fluid Mechanics', 'Powertrain Mechatronics', 'Combustion Engine Concepts', 'Fuel Injection Systems', 'Turbocharging', 'Experimental Operation']
          },
          {
            name: 'CAE & Simulation',
            items: ['ANSYS (Explicit Dynamics)', 'HyperMesh', 'ANSA', 'LS-DYNA', 'MATLAB/Simulink', 'Finite-Element Analysis', 'Dynamic Modeling']
          },
          {
            name: 'CAD & Design',
            items: ['CATIA V6', 'PTC Creo', 'SolidWorks', '3D Modeling', 'Assembly Design', 'Technical Drawings']
          },
          {
            name: 'Measurement & Quality',
            items: ['GD&T (ASME Y14.5)', 'MSA', 'Measurement Technology', 'Statistical Quality Control', 'Root-Cause Analysis', 'Inspection Procedures']
          },
          {
            name: 'Programming & Tools',
            items: ['Python', 'MATLAB', 'Excel VBA', 'SQL', 'Git', 'SAP S/4HANA (68%)']
          },
          {
            name: 'Languages',
            items: ['German (Working Proficiency)', 'English (C1)', 'Hindi & Marathi (Native)']
          }
        ]
      },

      // Contact Section
      contact: {
        title: 'Get In Touch',
        email: 'shubham.karne111@gmail.com',
        phone: '+49 15510 691557',
        location: 'Zanderstr. 10G, 14770 Brandenburg an der Havel, Germany',
        message: 'Let me know about your next challenge. I\'m open to thesis positions, working student roles, and R&D opportunities at premium automotive OEMs.'
      }
    }
  };

  return content[language] || content.de;
};

// Export both languages separately for convenience
export const portfolioDE = getContent('de');
export const portfolioEN = getContent('en');
