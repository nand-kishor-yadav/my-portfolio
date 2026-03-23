const buildAssetPaths = (slug, folder, files) =>
  files.map((file) => `/assets/projects/${slug}/${folder}/${file}`);

const createSupportingProject = ({
  slug,
  title,
  shortTitle,
  category,
  tags,
  overview,
  problem,
  architecture,
  techStack,
  working,
  challenges,
  impact,
  role,
  codeAvailability,
}) => ({
  slug,
  title,
  shortTitle,
  category,
  tags,
  overview,
  problem,
  architecture,
  techStack,
  working,
  challenges,
  impact,
  role,
  proof: {
    summary: 'Proof assets can be added later through the shared project proof workflow.',
    imageFiles: [],
    videoFiles: [],
  },
  codeAvailability: {
    show: true,
    label: 'Code available on request',
    note: 'Public code is not attached yet for this supporting project.',
    // TODO: Add GitHub repo link or "Available on request"
    href: '',
    ...codeAvailability,
  },
});

export const projects = [
  {
    slug: 'solar-cleaning-system',
    title: 'Autonomous Solar Panel Cleaning System with Centralized Master Controller',
    shortTitle: 'Solar Cleaning System',
    category: 'Embedded Systems / IoT / Robotics',
    tags: ['Embedded', 'IoT', 'Automation', 'Power Systems', 'Robotics'],
    overview:
      'A centralized solar panel cleaning system designed to automate maintenance across multiple panels using a master-controller architecture with sequential power-optimized operation.',
    problem:
      'Dust accumulation significantly reduces solar panel efficiency, while manual cleaning is labor-intensive and inefficient for multi-panel installations.',
    architecture:
      'A centralized ESP32-S3 master controller manages up to 6 panel units using sequential execution logic. Each panel integrates motorized wiper actuation, water spray system, and dual limit-switch feedback. The system includes a dedicated power distribution architecture with motor drivers, MOSFET-controlled pumps, and a regulated logic supply via buck conversion. Sequential operation ensures reduced peak current and improved system stability.',
    techStack: [
      'ESP32-S3',
      'Embedded C',
      'DRV8871 Motor Drivers',
      'MOSFET Power Control',
      'Limit Switch Feedback System',
      'Power Electronics Design',
      'PCB Design',
      'IoT (WiFi/BLE)',
    ],
    working: [
      'Receives cleaning command via WiFi/BLE.',
      'Sequentially activates each panel to reduce power load.',
      'Controls water spray using MOSFET-driven pump.',
      'Executes forward and reverse motor motion using H-bridge drivers.',
      'Uses limit switches for precise positional control.',
      'Implements timeout and safety interlocks.',
      'Completes full cleaning cycle and returns to idle state.',
    ],
    challenges: [
      'Designing a power-efficient system capable of handling multiple actuators without overload.',
      'Ensuring reliable feedback using limit switches in outdoor conditions.',
      'Managing noise isolation between power and control sections.',
      'Coordinating sequential logic for stable multi-panel operation.',
    ],
    impact:
      'Demonstrates system-level engineering by integrating embedded control, power electronics, and mechanical automation into a scalable and energy-efficient solar maintenance solution.',
    role:
      'Designed the complete system architecture including control logic, power distribution, actuator integration, and PCB-level implementation for a multi-panel automated cleaning system.',
    proof: {
      summary:
        'Add PCB images, wiring layout, panel setup photos, cleaning operation videos, and system test results.',
      imageFiles: [],
      videoFiles: [],
    },
    codeAvailability: {
      show: true,
      label: 'Code available on request',
      note:
        'Embedded firmware and PCB design files are private but can be shared along with system demonstration.',
      href: '',
    },
  },
  {
    slug: 'custom-servo',
    title: 'Custom High-Torque Smart Servo Motor',
    shortTitle: 'Custom Servo Motor',
    category: 'Embedded Systems / Power Electronics / Mechanical Design',
    tags: ['Embedded', 'Hardware', 'Motor Control'],
    overview:
      'A custom-engineered smart servo platform built as a lower-cost, higher-torque alternative to off-the-shelf servo units while keeping standard 3-pin compatibility.',
    problem:
      'Commercial servos with higher torque often become expensive quickly. The goal was to create a drop-in compatible servo that delivers stronger output and better cost efficiency for robotics applications.',
    architecture:
      'The system combines an embedded control layer with PWM signal handling, a custom MOSFET-based H-bridge power stage, and a precision metal gearbox to maintain standard servo input compatibility while driving higher mechanical output.',
    techStack: [
      'Embedded C',
      'Custom H-Bridge Design',
      'MOSFET Power Stage',
      'PWM Signal Processing',
      'Metal Gearbox Engineering',
      'PCB Design',
      'Control Systems',
    ],
    working: [
      'Accepts a standard 3-pin servo interface for drop-in integration.',
      'Processes PWM control signals and drives a custom power stage.',
      'Delivers 30 kg-cm torque at 12 V with a reported maximum current draw of 1 A.',
      'Uses a precision metal gearbox for durability and torque transfer.',
      'Targets roughly 3x torque improvement at significantly lower cost than comparable units.',
    ],
    challenges: [
      'Designing a power stage that can safely support higher torque requirements.',
      'Maintaining standard servo compatibility while changing the internal drive architecture.',
      'Co-optimizing embedded control, mechanical transmission, and cost.',
    ],
    impact: 'Showcases full-stack hardware engineering from power electronics to mechanical design achieving high-torque efficient actuation.',
    role:
      'Owned the servo concept, power-stage direction, control compatibility goals, and the integration between electronics and mechanical design.',
    proof: {
      summary:
        'Add gearbox photos, PCB renders, motor-driver closeups, test-bench images, and a torque demonstration video.',
      imageFiles: [],
      videoFiles: [],
    },
    codeAvailability: {
      show: true,
      label: 'Code available on request',
      note: 'Firmware and hardware files remain private, but proof assets and technical discussion can be shared.',
      // TODO: Add GitHub repo link or "Available on request"
      href: '',
    },
  },
  {
    slug: 'solar-monitoring',
    title: 'Solar Monitoring & Environmental Analytics System',
    shortTitle: 'Solar Monitoring System',
    category: 'IoT / Embedded Systems',
    tags: ['Embedded', 'IoT', 'Hardware'],
    overview:
      'A field-ready monitoring platform that captures solar and environmental data, presents it locally, and pushes it to a dashboard for historical analysis and operational alerts.',
    problem:
      'Solar plants need more than panel voltage readings. Operators also need visibility into environmental conditions, inverter efficiency, dust impact, and daily performance trends to detect issues early.',
    architecture:
      'Sensor nodes feed an embedded controller stack built around ESP32 and ATmega-class devices. Firmware aggregates electrical and environmental measurements, renders live values on an LCD, transmits daily summaries through GSM, and syncs records to a web dashboard for cloud-backed reporting and CSV export.',
    techStack: [
      'ESP32',
      'ATmega',
      'Embedded C',
      'GSM Module',
      'REST API',
      'Web Dashboard',
      'Cloud Logging',
      'LCD Interface',
    ],
    working: [
      'Measures dust, temperature, humidity, air density, solar irradiance, wind speed, and wind direction.',
      'Tracks solar voltage, current, power, and inverter-side metrics for comparative efficiency analysis.',
      'Shows real-time readings on an LCD for on-site visibility.',
      'Sends daily SMS summaries through GSM for remote monitoring.',
      'Logs synchronized data to a dashboard with historical charts and CSV export.',
      'Generates low-efficiency and high-dust alerts for maintenance decisions.',
    ],
    challenges: [
      'Coordinating multiple environmental and electrical data streams in one embedded workflow.',
      'Maintaining reliable field telemetry through GSM connectivity constraints.',
      'Presenting both live and historical analytics in a way that supports operational decisions.',
    ],
    impact: 'Represents a complete IoT-based energy monitoring system with real-time analytics, remote communication, and efficiency optimization.',
    role:
      'Designed the embedded monitoring flow, telemetry logic, dashboard integration strategy, and analytics-oriented reporting requirements.',
    proof: {
      summary:
        'Add hardware photos, installed field images, LCD screenshots, dashboard screenshots, and a short end-to-end demo video.',
      imageFiles: [],
      videoFiles: [],
    },
    codeAvailability: {
      show: true,
      label: 'Code available on request',
      note: 'Private firmware and dashboard code are not exposed publicly.',
      // TODO: Add GitHub repo link or "Available on request"
      href: '',
    },
  },
  {
    slug: 'bio-amplifier',
    title: 'Bio-Signal Amplifier',
    shortTitle: 'Bio-Signal Amplifier',
    category: 'Medical Electronics / Signal Conditioning',
    tags: ['Embedded', 'Hardware', 'Analog'],
    overview:
      'A low-noise analog front-end for acquiring biological signals such as ECG, EEG, and EMG with adjustable gain and filtering.',
    problem:
      'Raw bio-signals are extremely small and noisy, which makes them difficult to observe or process without carefully designed amplification and filtering stages.',
    architecture:
      'The system uses an analog signal-conditioning chain focused on low-noise amplification, tunable gain, and filtering controls before exposing the conditioned output for downstream monitoring or USB-based capture.',
    techStack: [
      'Analog Electronics',
      'PCB Design',
      'Signal Processing',
      'Adjustable Gain Stages',
      'Filter Design',
      'USB Data Output',
    ],
    working: [
      'Captures low-amplitude biological signals from sensor inputs.',
      'Amplifies signals using a low-noise analog stage.',
      'Provides adjustable gain for different signal strengths and use cases.',
      'Applies filter controls to improve signal clarity before output.',
      'Supports USB-connected data output for visualization or analysis.',
    ],
    challenges: [
      'Reducing noise while preserving weak biological signal integrity.',
      'Balancing gain and filtering so the output remains stable and usable across signal types.',
      'Translating analog design decisions into a practical PCB implementation.',
    ],
    impact: 'Demonstrates precision analog signal acquisition and amplification for biomedical applications.',
    role:
      'Led the analog signal-chain concept, amplification and filtering strategy, and proof-oriented hardware packaging.',
    proof: {
      summary:
        'Add board photos, oscilloscope captures, schematic or PCB screenshots, and a demo showing live waveform acquisition.',
      imageFiles: [],
      videoFiles: [],
    },
    codeAvailability: {
      show: false,
      label: 'Code available on request',
      note: 'This project is primarily hardware-focused; any supporting firmware or analysis scripts can be shared on request.',
      // TODO: Add GitHub repo link or "Available on request"
      href: '',
    },
  },
  createSupportingProject({
    slug: 'emg-robotic-arm',
    title: 'EMG Controlled Robotic Arm',
    shortTitle: 'EMG Controlled Robotic Arm',
    category: 'Robotics',
    tags: ['Embedded', 'Robotics', 'Hardware'],
    overview:
      'A robotic arm controlled through EMG muscle signals to translate biological input into embedded actuation.',
    problem:
      'Conventional robotic control methods can feel unnatural for human interaction, so this project explores muscle-driven control.',
    architecture:
      'Includes signal amplification, filtering (analog front-end), and ADC conversion before embedded interpretation.',
    techStack: ['Python', 'Embedded C', 'Arduino', 'EMG Sensors'],
    working: [
      'Real-time EMG signal processing',
      'Precise motor control',
      'Adjustable sensitivity settings',
      'Wireless connectivity option',
    ],
    challenges: [
      'Interpreting noisy EMG input reliably enough for actuation.',
      'Maintaining smooth control while tuning sensitivity and signal response.',
    ],
    impact: 'Demonstrates real-time bio-signal acquisition and its direct application in embedded robotic control systems.',
    role: 'Integrated EMG sensing, control logic, and robotic actuation into one working system.',
  }),
  createSupportingProject({
    slug: 'chatbot-sam',
    title: 'Chatbot (SAM)',
    shortTitle: 'Chatbot (SAM)',
    category: 'AI Systems / Software',
    tags: ['AI Systems', 'Assistant', 'Automation'],
    overview:
      'A modular AI assistant system combining conversational intelligence, task execution, and workflow automation.',
    problem:
      'Generic assistants do not always match personalized workflows or domain-specific response behavior.',
    architecture:
      'A trained conversational model is paired with application logic for search assistance and workflow-driven interactions.',
    techStack: ['Python', 'NLP', 'TensorFlow', 'React.js'],
    working: [
      'Own trained model for personalized assistance',
      'Real-time search assistance',
      'Social media handling workflows',
      'Context-aware responses',
    ],
    challenges: [
      'Improving response quality while keeping the assistant useful in real interactions.',
      'Combining model behavior with task-oriented software flows.',
    ],
    impact: 'Showcases the design of a modular AI assistant system combining conversational intelligence with task-oriented workflows.',
    role: 'Built the assistant concept, model behavior, and workflow-side integration.',
  }),
  createSupportingProject({
    slug: 'android-automator',
    title: 'Android Automator',
    shortTitle: 'Android Automator',
    category: 'Automation',
    tags: ['Automation', 'Android', 'Software'],
    overview:
      'An Instagram automation system for managing large-scale account activity and engagement workflows.',
    problem:
      'Manual execution of repetitive social workflows is slow and difficult to scale across many accounts.',
    architecture:
      'A Java-led automation stack coordinates Appium and Android SDK execution flows with configurable actions and account-handling logic.',
    techStack: ['Java', 'Appium', 'Python', 'Android SDK'],
    working: [
      'Automated likes',
      'Smart follow/unfollow',
      'Custom commenting',
      'Story viewer',
      'Post scheduling',
      'Target filtering',
      'Welcome and outbound DMs',
      'Instagram account creator',
      'Gmail account creator',
      'Advanced human emulation',
      'Account editing',
    ],
    challenges: [
      'Scaling account activity while preserving workflow control.',
      'Keeping automation behavior configurable enough for different campaign patterns.',
    ],
    impact: 'Represents large-scale mobile automation with real-device execution, workflow orchestration, and system-level control.',
    role: 'Built the automation workflows and coordinated mobile execution for high-volume account handling.',
  }),
  createSupportingProject({
    slug: 'mechtodo',
    title: 'MechTODO - Smart Task & Productivity Manager',
    shortTitle: 'MechTODO',
    category: 'Android Application',
    tags: ['Android', 'Software', 'Productivity'],
    overview:
      'A task management Android app with categorized workflows, reminders, and progress tracking.',
    problem:
      'Task planning, execution, and overdue follow-up are often fragmented across multiple tools.',
    architecture:
      'An Android app built around categorized task flows, Room persistence, and reminder scheduling through notifications.',
    techStack: ['Java / Kotlin', 'Android SDK', 'Room Database', 'Notification Manager', 'Material UI'],
    working: [
      'Category-based task organization',
      'Custom notification scheduling',
      'Task history tracking',
      'Progress status management',
      'Overdue detection system',
    ],
    challenges: [
      'Keeping task-state transitions clear across categories.',
      'Making reminder behavior reliable enough for daily use.',
    ],
    impact: 'Highlights structured task management system design with real-world usability and state-driven workflows.',
    role: 'Designed the app workflow, persistence model, and reminder-oriented user experience.',
  }),
  createSupportingProject({
    slug: 'instagram-growth-dashboard',
    title: 'Instagram Growth Analytics & Monitoring Dashboard',
    shortTitle: 'Instagram Growth Dashboard',
    category: 'Web Application / Analytics',
    tags: ['Analytics', 'Web', 'Software'],
    overview:
      'A dashboard for tracking Instagram profile growth, engagement trends, and report-ready performance metrics.',
    problem:
      'Operators need one place to review growth trends, engagement shifts, and account performance over time.',
    architecture:
      'A web analytics dashboard combines API-connected or script-fed data sources with charting and report-generation features.',
    techStack: ['PHP', 'Automation Scripts', 'REST API', 'React.js', 'Chart.js', 'Database'],
    working: [
      'Follower growth visualization',
      'Engagement rate calculation',
      'Drop alert notifications',
      'PDF report export',
      'Competitor comparison analysis',
    ],
    challenges: [
      'Turning raw platform data into useful operator-facing analytics.',
      'Combining monitoring, alerts, and reports in one workflow.',
    ],
    impact: 'Demonstrates the ability to transform raw platform data into actionable analytics and reporting systems.',
    role: 'Built the dashboard concept and reporting-oriented analytics experience.',
  }),
  createSupportingProject({
    slug: 'google-maps-extractor',
    title: 'Google Maps Business Data Extraction Tool',
    shortTitle: 'Google Maps Extractor',
    category: 'Automation / Web Scraping',
    tags: ['Automation', 'Scraping', 'Software'],
    overview:
      'A data extraction tool for collecting structured business intelligence from map-based search results.',
    problem:
      'Collecting business lead data manually from map search results is repetitive and time-intensive.',
    architecture:
      'A Selenium-based crawler uses multithreading, proxy rotation, and captcha-aware handling to collect structured business records.',
    techStack: ['Java', 'Selenium', 'Multithreading', 'Proxy Rotation', 'Captcha Handling', 'Excel (XLSX Export)'],
    working: [
      'Query-based data extraction',
      'Email and website extraction',
      'Multi-thread processing',
      'Proxy rotation support',
      'Captcha handling logic',
      'Automated Excel export',
    ],
    challenges: [
      'Managing extraction throughput without compromising reliability.',
      'Handling proxy and captcha interruptions during scraping.',
    ],
    impact: 'Shows expertise in building scalable data extraction pipelines with automation, concurrency, and structured output generation.',
    role: 'Built the scraping workflow and export pipeline for query-based business data collection.',
  }),
  createSupportingProject({
    slug: 'account-registration-ticket-system',
    title: 'Automated Account Registration & Ticket Submission System',
    shortTitle: 'Account Registration & Ticket System',
    category: 'Automation',
    tags: ['Automation', 'Selenium', 'Software'],
    overview:
      'An automation framework for account registration and support-ticket submission using predefined workflows and templates.',
    problem:
      'Repeated registration and ticket submission tasks are inefficient and error-prone when handled manually.',
    architecture:
      'A Selenium-driven framework runs queued account and ticket workflows with retry handling and captcha-aware logic.',
    techStack: ['Java', 'Selenium', 'Multi-threading', 'Captcha Handling', 'Queue System'],
    working: [
      'Automated account registration',
      'Structured ticket submission',
      'Captcha handling integration',
      'Retry logic system',
      'Multi-thread task queue',
    ],
    challenges: [
      'Coordinating retries across repetitive task flows.',
      'Keeping the system resilient when verification steps fail.',
    ],
    impact: 'Demonstrates scalable workflow automation using queue-based execution, fault-tolerant design, and structured task orchestration.',
    role: 'Designed the queue-driven framework for large-volume registration and submission tasks.',
  }),
  createSupportingProject({
    slug: 'mech-tracker',
    title: 'Mech Tracker - Smart Anti-Theft & Device Recovery Platform',
    shortTitle: 'Mech Tracker',
    category: 'Android + Web Application',
    tags: ['Android', 'Tracking', 'IoT'],
    overview:
      'A multi-layer anti-theft system combining GPS, BLE Mesh, and UWB-based proximity recovery mechanisms.',
    problem:
      'Device recovery often needs more than basic location visibility to improve response and deterrence.',
    architecture:
      'An Android client coordinates remote control actions and telemetry, while a web dashboard surfaces GPS and fallback tracking insights.',
    techStack: ['Android SDK', 'Java / Kotlin', 'REST API', 'Web Dashboard', 'GPS', 'BLE Mesh', 'UWB', 'Cloud Database'],
    working: [
      'Remote Lost Mode activation',
      'Fake shutdown simulation',
      'Notification drawer blocking',
      'Siren alert system',
      'Live GPS tracking dashboard',
      'BLE Mesh & UWB fallback tracking',
      'Remote camera capture',
      'Device last-seen analytics',
    ],
    challenges: [
      'Combining multiple tracking mechanisms into one coherent recovery flow.',
      'Balancing stealth controls with usability and observability.',
    ],
    impact: 'Demonstrates multi-layer device tracking system design combining GPS, BLE Mesh, and UWB-based recovery mechanisms.',
    role: 'Defined the anti-theft product flow and integrated tracking behavior with remote device actions.',
  }),
  createSupportingProject({
    slug: 'android-account-creation-system',
    title: 'Automated Android-Based Account Creation System',
    shortTitle: 'Android Account Creation System',
    category: 'Device Automation',
    tags: ['Automation', 'Android', 'Devices'],
    overview:
      'A Windows-based system that automates account creation on real Android devices using ADB and custom OS environments.',
    problem:
      'Some onboarding flows require device-level execution that browser-only automation cannot cover reliably.',
    architecture:
      'A desktop controller manages real-device automation through ADB, custom Android environments, IP rotation, and device-profile handling.',
    techStack: ['Java', 'Windows Application', 'ADB', 'Android Automation', 'Custom OS (GrapheneOS / LineageOS)', 'IP Rotation', 'Device Spoofing'],
    working: [
      'Real-device automation',
      'Dynamic IP rotation',
      'Device fingerprint spoofing',
      'Automated profile setup',
      'Failure reason analyzer',
      'Detailed activity logging',
    ],
    challenges: [
      'Coordinating real-device execution across controlled mobile environments.',
      'Tracking failures clearly enough for repeatable automation runs.',
    ],
    impact: 'Highlights real-device automation capabilities with ADB control, environment manipulation, and scalable execution workflows.',
    role: 'Built the device automation workflow for account provisioning on real Android hardware.',
  }),
  createSupportingProject({
    slug: 'social-media-provisioning-system',
    title: 'Automated Social Media Account Provisioning System',
    shortTitle: 'Social Media Provisioning System',
    category: 'Automation / Mobile Automation',
    tags: ['Automation', 'Mobile', 'Devices'],
    overview:
      'A real-device automation system for provisioning social media accounts with controlled network and device behavior.',
    problem:
      'Bulk social account provisioning requires more control and repeatability than manual execution provides.',
    architecture:
      'A Windows application manages Android execution, IP rotation, spoofing controls, and provisioning workflow steps.',
    techStack: ['Java', 'Windows Application', 'ADB', 'Android Automation', 'Custom OS (GrapheneOS / LineageOS)', 'IP Rotation', 'Device Spoofing'],
    working: [
      'Bulk account provisioning',
      'IP rotation management',
      'Device spoofing control',
      'Automated profile configuration',
      'Failure analysis system',
      'Activity logging',
      '2FA enabling automation',
    ],
    challenges: [
      'Keeping bulk provisioning workflows stable across device and network changes.',
      'Reducing friction in post-creation setup steps such as 2FA.',
    ],
    impact: 'Represents controlled large-scale account provisioning using device-level automation and network management strategies.',
    role: 'Implemented the provisioning workflow and supporting controls for device-based social account creation.',
  }),
  createSupportingProject({
    slug: 'custom-3d-printer',
    title: '3D Printer',
    shortTitle: 'Custom 3D Printer',
    category: 'Electronics',
    tags: ['Embedded', 'Hardware', 'Mechanical'],
    overview:
      'A custom-built 3D printer focused on precision, control, and machine-level feature integration.',
    problem:
      'Off-the-shelf desktop printers do not always provide the control features needed for custom experimentation.',
    architecture:
      'A custom printer stack built around Arduino-class control, PCB-backed electronics, and machine features for leveling, connectivity, and user interaction.',
    techStack: ['Arduino', 'C++', '3D Printing', 'PCB Design'],
    working: [
      'High precision printing',
      'Auto-leveling',
      'WiFi connectivity',
      'Touchscreen interface',
    ],
    challenges: [
      'Balancing mechanical precision with practical control hardware.',
      'Integrating usability features without overcomplicating the build.',
    ],
    impact: 'Demonstrates end-to-end machine design including motion control, embedded systems, and hardware-software integration.',
    role: 'Designed and assembled the printer system, including control electronics and feature integration.',
  }),
  createSupportingProject({
    slug: 'battery-management-system',
    title: 'Battery Management System',
    shortTitle: 'Battery Management System',
    category: 'Electronics',
    tags: ['Embedded', 'Power Electronics', 'Hardware'],
    overview:
      'A smart lithium-ion battery management system with monitoring and protection features.',
    problem:
      'Lithium-ion packs require active monitoring and protection to remain safe and reliable over time.',
    architecture:
      'Includes protection logic, balancing circuits, and embedded monitoring for safe lithium-ion pack operation.',
    techStack: ['Embedded C', 'PCB Design', 'IoT', 'Altium'],
    working: [
      'Cell balancing',
      'Temperature monitoring',
      'Overcharge protection',
      'SOC estimation',
    ],
    challenges: [
      'Balancing safety protections with usable battery behavior.',
      'Designing logic that supports both protection and pack-state estimation.',
    ],
    impact: 'Shows understanding of lithium-ion battery safety, protection systems, and embedded monitoring architecture.',
    role: 'Built the battery-management concept and integrated monitoring and protection features into one system.',
    codeAvailability: {
      show: false,
    },
  }),
  createSupportingProject({
    slug: 'arduino-shield-ramps',
    title: 'Arduino Shield & RAMPS 1.4',
    shortTitle: 'Arduino Shield & RAMPS 1.4',
    category: 'Electronics',
    tags: ['Embedded', 'PCB', 'Hardware'],
    overview:
      'A custom Arduino shield and RAMPS-compatible controller board for 3D printer and CNC use cases.',
    problem:
      'Standard control boards do not always provide the compatibility or serviceability needed for custom machine builds.',
    architecture:
      'A PCB-based controller design extends Arduino and RAMPS workflows with machine-control-oriented power and connectivity handling.',
    techStack: ['Arduino', 'PCB Design', 'C++', '3D Printing'],
    working: [
      'Plug-and-play design',
      'Extended compatibility',
      'Robust power management',
      'Easy troubleshooting',
    ],
    challenges: [
      'Keeping controller integration straightforward for custom machine builds.',
      'Improving compatibility without unnecessary hardware complexity.',
      'Custom firmware tuning and motion control optimization for improved print precision.',
    ],
    impact: 'Highlights custom PCB and controller design for machine control with improved compatibility and power handling.',
    role: 'Designed the controller-board concept with focus on compatibility, power handling, and serviceability.',
    codeAvailability: {
      show: false,
    },
  }),
].map((project) => ({
  ...project,
  proof: {
    ...project.proof,
    imagePath: `/assets/projects/${project.slug}/images`,
    videoPath: `/assets/projects/${project.slug}/videos`,
    images: buildAssetPaths(project.slug, 'images', project.proof.imageFiles),
    videos: buildAssetPaths(project.slug, 'videos', project.proof.videoFiles),
  },
}));
