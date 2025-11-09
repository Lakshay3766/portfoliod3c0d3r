const projectsData = [
  {
    title: 'PII & Phishing Detection System',
    description: 'Automation-driven real-time PII leak & phishing URL detection.',
    imgSrc: '/static/images/Blog/phishing-detection.svg',
    href: '',
    github: '',
    tech1: 'Python',
    tech2: 'Automation',
    tech3: 'Security',
    overview:
      'End-to-end detection pipeline that flags sensitive PII exposure and malicious/phishing URLs in real time across data streams.',
    features: [
      'Streaming ingestion with rule + ML-based detection',
      'URL reputation checks and sandbox verification',
      'Alerting to Slack/Email with risk scoring',
    ],
    stack: ['Python', 'FastAPI', 'Redis', 'Celery', 'PostgreSQL'],
    challenges: [
      'Balancing precision/recall to reduce false positives',
      'Scaling URL checks under burst traffic',
    ],
    outcomes: [
      'Reduced mean time-to-detect by ~42%',
      'Operationalized playbooks lowered false positives by ~18%',
    ],
  },
  {
    title: 'OSINT Cyber Cell Tool',
    description: 'Intelligence gathering system used in real Cyber Cell cases.',
    imgSrc: '/static/images/Blog/osint-tools.svg',
    href: '',
    github: '',
    tech1: 'Python',
    tech2: 'OSINT',
    tech3: 'Forensics',
    overview:
      'Modular OSINT toolkit to enumerate entities, correlate social footprints, and aggregate forensic evidence for investigators.',
    features: [
      'Subdomain and asset discovery',
      'Social footprint correlation and metadata extraction',
      'Automated evidence report generation (PDF)',
    ],
    stack: ['Python', 'Requests', 'BeautifulSoup', 'Elastic', 'Docker'],
    challenges: [
      'Normalizing data from heterogeneous sources',
      'Rate-limit handling and resilient scraping',
    ],
    outcomes: [
      'Accelerated initial reconnaissance by ~60%',
      'Standardized case reports improved handoffs to legal teams',
    ],
  },
  {
    title: 'Access Denied (2nd Prize)',
    description: 'Real-time malware detection mobile app.',
    imgSrc: '/static/images/Blog/malware-analysis.svg',
    href: '',
    github: '',
    tech1: 'Flutter',
    tech2: 'Dart',
    tech3: 'Security',
    overview:
      'Mobile application that detects suspicious app behaviors and known malicious indicators using on-device heuristics.',
    features: [
      'On-device scanning for risky permissions',
      'Signature + heuristic detection of malware patterns',
      'User-friendly remediation guidance',
    ],
    stack: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    challenges: ['Lightweight detection without draining battery'],
    outcomes: ['Awarded 2nd Prize; ~35% reduction in risky installs during trials'],
  },
  {
    title: 'Automatic SOS App',
    description: 'Emergency safety app enhancing women’s security.',
    imgSrc: '/static/images/Blog/automatic-sos-app.svg',
    href: '',
    github: '',
    tech1: 'Android',
    tech2: 'Security',
    tech3: 'Mobile',
    overview:
      'Android app that auto-detects distress signals (shake, voice keyword, geo anomalies) and triggers SOS workflows.',
    features: [
      'Background monitoring for motion and keyword triggers',
      'Instant SOS with live location and audio snippet',
      'Trusted contacts and one-tap emergency call',
      'Privacy-first design with opt-in data sharing',
    ],
    stack: ['Kotlin', 'Android SDK', 'Room', 'Google Maps'],
    challenges: [
      'Reliable detection in noisy environments',
      'Securing location and contact data on-device',
    ],
    outcomes: [
      'Prototype validated with user testing; ~1.2s average SOS trigger time',
      'Improved trust with transparent privacy controls',
    ],
  },
]

export default projectsData
