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
  proof,
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
    projectDir: slug,
    ...proof,
  },
  codeAvailability: {
    show: true,
    label: 'Code available on request',
    note: 'Public code is not attached yet for this supporting project.',
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
      'An automated solar panel cleaning system that uses rail-based motion, brush cleaning, and water spray to maintain panel efficiency across multiple panels with centralized control.',
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
      projectDir: 'solar-cleaning-system',
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
      'Achieves closed-loop angle control with potentiometer feedback and a custom analog control circuit.',
      'Uses a precision metal gearbox for durability and torque transfer.',
      'Targets roughly 3x torque improvement at significantly lower cost than comparable units.',
    ],
    challenges: [
      'Designing a power stage that can safely support higher torque requirements.',
      'Maintaining standard servo compatibility while changing the internal drive architecture.',
      'Co-optimizing embedded control, mechanical transmission, and cost.',
    ],
    impact:
      'Showcases full-stack hardware engineering from power electronics to mechanical design achieving high-torque efficient actuation.',
    role:
      'Owned the servo concept, power-stage direction, control compatibility goals, and the integration between electronics and mechanical design.',
    proof: {
      projectDir: 'custom-servo',
    },
    codeAvailability: {
      show: true,
      label: 'Code available on request',
      note:
        'Firmware and hardware files remain private, but proof assets and technical discussion can be shared.',
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
      'A field-ready telemetry platform that captures environmental and electrical data from solar systems and delivers real-time monitoring, historical analytics, and fallback reporting.',
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
      'Transmits telemetry through WiFi with GSM fallback for reporting and remote visibility.',
      'Logs synchronized data to a dashboard with historical charts and CSV export.',
      'Generates low-efficiency and high-dust alerts for maintenance decisions.',
    ],
    challenges: [
      'Coordinating multiple environmental and electrical data streams in one embedded workflow.',
      'Maintaining reliable field telemetry through GSM connectivity constraints.',
      'Presenting both live and historical analytics in a way that supports operational decisions.',
    ],
    impact:
      'Represents a complete IoT-based energy monitoring system with real-time analytics, remote communication, and efficiency optimization.',
    role:
      'Designed the embedded monitoring flow, telemetry logic, dashboard integration strategy, and analytics-oriented reporting requirements.',
    proof: {
      projectDir: 'solar-monitoring',
    },
    codeAvailability: {
      show: true,
      label: 'Code available on request',
      note: 'Private firmware and dashboard code are not exposed publicly.',
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
      'A custom EMG bio-amplifier that captures, amplifies, and filters muscle signals before passing them to an embedded controller for actuator control.',
    problem:
      'Raw EMG signals are low-amplitude and noisy, making them difficult to use directly for real-time control without analog conditioning and filtering.',
    architecture:
      'The system uses an LM358-based analog front-end with amplification and low-pass filtering, followed by Arduino-side signal reading and threshold-based actuation.',
    techStack: [
      'LM358',
      'Analog Electronics',
      'PCB Design',
      'EMG Signal Conditioning',
      'Filter Design',
      'Arduino',
      'Servo Control',
    ],
    working: [
      'Captures EMG signals through electrode inputs.',
      'Amplifies low-level muscle signals using an analog gain stage.',
      'Filters high-frequency noise to stabilize the control signal.',
      'Feeds the conditioned signal to an Arduino for real-time processing.',
      'Demonstrates servo actuation based on live muscle activity.',
    ],
    challenges: [
      'Reducing noise while preserving weak biological signal integrity.',
      'Balancing gain and filtering so the output remains stable and usable across signal types.',
      'Translating analog design decisions into a practical PCB implementation.',
    ],
    impact:
      'Demonstrates precision analog signal acquisition and amplification for biomedical applications.',
    role:
      'Led the analog signal-chain concept, amplification and filtering strategy, and proof-oriented hardware packaging.',
    proof: {
      projectDir: 'bio-amplifier',
    },
    codeAvailability: {
      show: false,
      label: 'Code available on request',
      note:
        'This project is primarily hardware-focused; any supporting firmware or analysis scripts can be shared on request.',
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
      'A bio-signal control chain converts EMG input into real-time servo motion through custom amplification, Arduino-side processing, and single-axis actuation.',
    techStack: ['Arduino', 'LM358 EMG Amplifier', 'EMG Electrodes', 'Servo Motor'],
    working: [
      'Real-time EMG signal acquisition from arm muscles',
      'Basic filtering and signal conditioning in the control loop',
      'Signal-based angle mapping for servo movement',
      'Single-DOF robotic motion driven by muscle activation',
    ],
    challenges: [
      'Interpreting noisy EMG input reliably enough for actuation.',
      'Maintaining smooth control while tuning sensitivity and signal response.',
    ],
    impact:
      'Demonstrates real-time bio-signal acquisition and its direct application in embedded robotic control systems.',
    role: 'Integrated EMG sensing, control logic, and robotic actuation into one working system.',
  }),
  createSupportingProject({
    slug: 'chatbot-sam',
    title: 'Chatbot (SAM)',
    shortTitle: 'Chatbot (SAM)',
    category: 'AI Systems / Software',
    tags: ['AI Systems', 'Assistant', 'Automation'],
    overview:
      'A local-first autonomous AI agent runtime that combines planning, tool use, task tracking, memory, critique, and a live browser control interface.',
    problem:
      'Most assistant systems stop at text responses and do not maintain structured task state, retries, memory, or operational visibility across sessions.',
    architecture:
      'SAM routes requests through intent classification, planning, tool routing, task execution, critique, replanning, memory binding, and WebUI feedback.',
    techStack: ['Python', 'HTTP API', 'WebUI', 'Task Engine', 'Planner', 'Memory System'],
    working: [
      'Accepts requests through WebUI, CLI, desktop launcher, or HTTP API',
      'Builds context using conversation, memory, identity, and learning signals',
      'Generates structured plans and routes work through tool execution pipelines',
      'Tracks tasks, retries, failures, and live runtime state through a browser control surface',
    ],
    challenges: [
      'Designing an agent runtime instead of a simple chat wrapper.',
      'Combining planning, memory, execution, and observability into one coordinated system.',
    ],
    impact:
      'Demonstrates a stateful autonomous agent system with planning, background task execution, memory, and live operational control.',
    role:
      'Built the local-first runtime, orchestration layer, WebUI, task pipeline, memory system, and control surfaces for the autonomous agent.',
  }),
  createSupportingProject({
    slug: 'android-automator',
    title: 'Android Automator',
    shortTitle: 'Android Automator',
    category: 'Automation',
    tags: ['Automation', 'Android', 'Software'],
    overview:
      'A configurable mobile automation engine for large-scale social media workflows across real Android devices.',
    problem:
      'Manual execution of repetitive social workflows is slow and difficult to scale across many accounts.',
    architecture:
      'A centralized dashboard coordinates distributed Appium, ADB, and UIAutomator execution with reusable action abstractions, fallback UI detection, and large-scale parallel device orchestration.',
    techStack: ['Java', 'Appium', 'ADB', 'UIAutomator', 'OCR / Image Matching'],
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
    impact:
      'Represents large-scale mobile automation with real-device execution, workflow orchestration, and system-level control.',
    role:
      'Built the automation workflows and coordinated mobile execution for high-volume account handling.',
  }),
  createSupportingProject({
    slug: 'mechtodo',
    title: 'MechTODO - Smart Task & Productivity Manager',
    shortTitle: 'MechTODO',
    category: 'Android Application',
    tags: ['Android', 'Software', 'Productivity'],
    overview:
      'A structured Android productivity app with workflow-driven task states, recurrence rules, and a custom reminder engine.',
    problem:
      'Task planning, execution, and overdue follow-up are often fragmented across multiple tools.',
    architecture:
      'An offline-first mobile system with local storage, rule-based scheduling, task lifecycle management, and smart reminders for recurring and project-based workflows.',
    techStack: ['Android SDK', 'Java / Kotlin', 'Local Database', 'Reminder Engine', 'Notification Manager'],
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
    impact:
      'Highlights structured task management system design with real-world usability and state-driven workflows.',
    role: 'Designed the app workflow, persistence model, and reminder-oriented user experience.',
  }),
  createSupportingProject({
    slug: 'instagram-growth-dashboard',
    title: 'Instagram Growth Analytics & Monitoring Dashboard',
    shortTitle: 'Instagram Growth Dashboard',
    category: 'Web Application / Analytics',
    tags: ['Analytics', 'Web', 'Software'],
    overview:
      'A real-time analytics dashboard that tracks Instagram growth, engagement, and multi-account performance using automated data collection pipelines.',
    problem:
      'Operators need one place to review growth trends, engagement shifts, and account performance over time.',
    architecture:
      'A hybrid API and scraping pipeline collects account data at fixed intervals, stores it for time-series analytics, and visualizes engagement trends through a web dashboard.',
    techStack: ['Web Application', 'Unofficial API Integration', 'Web Scraping', 'Proxy Rotation', 'Database'],
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
    impact:
      'Demonstrates the ability to transform raw platform data into actionable analytics and reporting systems.',
    role: 'Built the dashboard concept and reporting-oriented analytics experience.',
  }),
  createSupportingProject({
    slug: 'google-maps-extractor',
    title: 'Google Maps Business Data Extraction Tool',
    shortTitle: 'Google Maps Extractor',
    category: 'Automation / Web Scraping',
    tags: ['Automation', 'Scraping', 'Software'],
    overview:
      'A production-grade automation system for extracting structured business intelligence from Google Maps search results at scale.',
    problem:
      'Collecting business lead data manually from map search results is repetitive and time-intensive.',
    architecture:
      'A Selenium-based crawler uses multithreading, proxy rotation, and captcha-aware handling to collect structured business records.',
    techStack: [
      'Java',
      'Selenium',
      'Multithreading',
      'Proxy Rotation',
      'Captcha Handling',
      'Excel (XLSX Export)',
    ],
    working: [
      'Bulk and single-query business extraction',
      'Collection of contact, location, social, and review metadata',
      'Multi-threaded execution with retry and error tolerance',
      'Proxy rotation and captcha-aware handling',
      'Structured Excel export for lead generation workflows',
    ],
    challenges: [
      'Managing extraction throughput without compromising reliability.',
      'Handling proxy and captcha interruptions during scraping.',
    ],
    impact:
      'Shows expertise in building scalable data extraction pipelines with automation, concurrency, and structured output generation.',
    role: 'Built the scraping workflow and export pipeline for query-based business data collection.',
  }),
  createSupportingProject({
    slug: 'account-registration-ticket-system',
    title: 'Automated Account Registration & Ticket Submission System',
    shortTitle: 'Account Registration & Ticket System',
    category: 'Automation',
    tags: ['Automation', 'Selenium', 'Software'],
    overview:
      'An input-driven browser automation framework that handles account registration, login, navigation, and support-ticket submission across multiple external platforms.',
    problem:
      'Repeated registration and ticket submission tasks are inefficient and error-prone when handled manually.',
    architecture:
      'A Selenium-based execution pipeline reads URLs and user datasets from structured files, detects forms dynamically, completes end-to-end workflows, and logs credentials and ticket activity.',
    techStack: ['Java', 'Selenium', 'WebDriver', 'Structured Input Files', 'Execution Logging'],
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
    impact:
      'Demonstrates scalable workflow automation using queue-based execution, fault-tolerant design, and structured task orchestration.',
    role: 'Designed the queue-driven framework for large-volume registration and submission tasks.',
  }),
  createSupportingProject({
    slug: 'mech-tracker',
    title: 'Mech Tracker - Smart Anti-Theft & Device Recovery Platform',
    shortTitle: 'Mech Tracker',
    category: 'Android + Web Application',
    tags: ['Android', 'Tracking', 'IoT'],
    overview:
      'A multi-layer Android anti-theft and recovery platform that combines fallback tracking methods, remote control, and dashboard-based device monitoring.',
    problem:
      'Device recovery often needs more than basic location visibility to improve response and deterrence.',
    architecture:
      'A hybrid mobile and backend architecture combines background services, multi-channel communication, fallback decision logic, and a web dashboard for remote tracking and recovery actions.',
    techStack: [
      'Android SDK',
      'Java / Kotlin',
      'REST API',
      'Web Dashboard',
      'GPS',
      'BLE Mesh',
      'UWB',
      'Cloud Database',
    ],
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
    impact:
      'Demonstrates multi-layer device tracking system design combining GPS, BLE Mesh, and UWB-based recovery mechanisms.',
    role:
      'Defined the anti-theft product flow and integrated tracking behavior with remote device actions.',
  }),
  createSupportingProject({
    slug: 'android-account-creation-system',
    title: 'Automated Android-Based Account Creation System',
    shortTitle: 'Android Account Creation System',
    category: 'Device Automation',
    tags: ['Automation', 'Android', 'Devices'],
    overview:
      'A distributed mobile automation platform that provisions accounts on real Android devices through centralized orchestration, dashboard-driven control, and large-scale parallel execution.',
    problem:
      'Some onboarding flows require device-level execution that browser-only automation cannot cover reliably.',
    architecture:
      'A centralized control layer distributes workflows to connected Android devices, where Appium and UIAutomator execute real-device account creation flows using ADB communication bridges.',
    techStack: ['Java', 'Appium', 'ADB', 'UIAutomator', 'GrapheneOS / LineageOS', 'Android Automation'],
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
    impact:
      'Highlights real-device automation capabilities with ADB control, environment manipulation, and scalable execution workflows.',
    role: 'Built the device automation workflow for account provisioning on real Android hardware.',
  }),
  createSupportingProject({
    slug: 'social-media-provisioning-system',
    title: 'Automated Social Media Account Provisioning System',
    shortTitle: 'Social Media Provisioning System',
    category: 'Automation / Mobile Automation',
    tags: ['Automation', 'Mobile', 'Devices'],
    overview:
      'A dependency-driven mobile automation platform that provisions social media accounts through multi-stage workflows across Gmail and Instagram on real Android devices.',
    problem:
      'Bulk social account provisioning requires more control and repeatability than manual execution provides.',
    architecture:
      'A centralized dashboard controls conditional workflow execution, cross-application context switching, OTP retrieval, and session-level orchestration across Appium-driven Android devices.',
    techStack: ['Java', 'Appium', 'ADB', 'UIAutomator', 'GrapheneOS / LineageOS', 'Android Automation'],
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
    impact:
      'Represents controlled large-scale account provisioning using device-level automation and network management strategies.',
    role:
      'Implemented the provisioning workflow and supporting controls for device-based social account creation.',
  }),
  createSupportingProject({
    slug: 'custom-3d-printer',
    title: '3D Printer',
    shortTitle: 'Custom 3D Printer',
    category: 'Electronics',
    tags: ['Embedded', 'Hardware', 'Mechanical'],
    overview:
      'A fully functional custom-built Cartesian 3D printer designed from scratch to combine mechanical design, embedded electronics, firmware configuration, and calibration into one integrated machine.',
    problem:
      'Off-the-shelf desktop printers do not always provide the control features needed for custom experimentation.',
    architecture:
      'A large-format Cartesian printer uses an aluminum extrusion frame, belt-driven XY motion, lead screw Z motion, Arduino Mega with RAMPS 1.4, and customized Marlin firmware.',
    techStack: ['Arduino Mega', 'RAMPS 1.4', 'Marlin Firmware', 'A4988 Drivers', 'NEMA 17', '3D Printing'],
    working: [
      'Executes Cartesian motion control with belt-driven XY and lead screw Z movement',
      'Runs custom-calibrated Marlin firmware for G-code execution',
      'Uses a Bowden extrusion setup to reduce moving mass',
      'Produces validated test prints including calibration cubes',
    ],
    challenges: [
      'Balancing mechanical precision with practical control hardware.',
      'Integrating usability features without overcomplicating the build.',
    ],
    impact:
      'Demonstrates end-to-end machine design including motion control, embedded systems, and hardware-software integration.',
    role:
      'Designed and assembled the printer system, including control electronics and feature integration.',
    codeAvailability: {
      show: true,
      label: 'Open-source firmware reference',
      note:
        'This link points to the upstream Marlin firmware used by the printer. Custom configuration files and build details can be shared on request.',
      href: 'https://github.com/MarlinFirmware/Marlin/releases',
    },
  }),
  createSupportingProject({
    slug: 'battery-management-system',
    title: 'Battery Management System',
    shortTitle: 'Battery Management System',
    category: 'Electronics',
    tags: ['Embedded', 'Power Electronics', 'Hardware'],
    overview:
      'A custom 3S lithium-ion battery management design focused on analog passive cell balancing and PCB-level understanding of multi-cell battery systems.',
    problem:
      'Lithium-ion packs require active monitoring and protection to remain safe and reliable over time.',
    architecture:
      'The design uses a pure analog architecture with comparator-style voltage monitoring and MOSFET-controlled discharge paths to balance cells without an MCU.',
    techStack: ['Analog Electronics', 'PCB Design', 'EasyEDA', 'Proteus', 'MOSFET Control'],
    working: [
      'Cell balancing',
      'Comparator-based voltage detection',
      'MOSFET-controlled discharge control',
      'Multi-cell sensing for a 3S Li-ion pack',
    ],
    challenges: [
      'Designing analog balancing logic without an MCU.',
      'Routing multi-cell sensing and power paths cleanly on a custom PCB.',
    ],
    impact:
      'Shows foundational understanding of battery systems, passive balancing, analog control, and PCB design for power electronics.',
    role:
      'Designed the analog balancing concept and PCB implementation as a learning-focused battery systems project.',
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
    impact:
      'Highlights custom PCB and controller design for machine control with improved compatibility and power handling.',
    role:
      'Designed the controller-board concept with focus on compatibility, power handling, and serviceability.',
    codeAvailability: {
      show: false,
    },
  }),
];
