import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCode, FiCpu } from 'react-icons/fi';

const projects = [
  {
    title: 'EMG Controlled Robotic Arm',
    category: 'Robotics',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: ['Python', 'Embedded C', 'Arduino', 'EMG Sensors'],
    description: 'A robotic arm controlled by EMG (Electromyography) signals from muscle movements. Allows users to control the arm using muscle signals.',
    features: [
      'Real-time EMG signal processing',
      'Precise motor control',
      'Adjustable sensitivity settings',
      'Wireless connectivity option',
    ],
  },
  {
    title: 'Chatbot (SAM)',
    category: 'AI/ML',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Under Improvements',
    statusType: 'improving',
    techStack: ['Python', 'NLP', 'TensorFlow', 'React.js'],
    description: 'A personal assistant chatbot built on my own trained model that handles real-time searches and social media tasks.',
    features: [
      'Own trained model for personalized assistance',
      'Real-time search assistance',
      'Social media handling workflows',
      'Context-aware responses',
    ],
  },
  {
    title: 'Android Automator',
    category: 'Automation',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Improving (new features)',
    statusType: 'improving',
    techStack: ['Java', 'Appium', 'Python', 'Android SDK'],
    description: 'Production-ready Instagram automation software for agencies managing multiple accounts and growth at scale.',
    features: [
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
  },
  {
    title: 'Smart Solar Monitoring & Environmental Analytics System',
    category: 'IoT / Embedded Systems',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: [
      'ESP32',
      'ATmega',
      'Embedded C',
      'GSM Module',
      'REST API',
      'Web Dashboard',
      'Cloud Logging',
    ],
    description:
      'A real-time solar monitoring system that measures environmental and electrical parameters including dust levels, temperature, humidity, air density, solar irradiance, wind speed/direction, solar voltage/current/power, and inverter metrics. Data is displayed on LCD, transmitted via GSM, and synchronized to a custom-built analytics dashboard.',
    features: [
      'Live LCD data display',
      'GSM-based daily SMS reporting',
      'Custom web dashboard with CSV export',
      'Cloud logging with historical analytics',
      'Solar vs inverter efficiency calculation',
      'Low efficiency and high dust alert system',
    ],
  },
  {
    title: 'MechTODO - Smart Task & Productivity Manager',
    category: 'Android Application',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: [
      'Java / Kotlin',
      'Android SDK',
      'Room Database',
      'Notification Manager',
      'Material UI',
    ],
    description:
      'A feature-rich Android task management application that allows users to organize tasks into Daily, Projects, In Progress, Completed, Planned, On Hold, and Overdue categories with customizable reminders and task history management.',
    features: [
      'Category-based task organization',
      'Custom notification scheduling',
      'Task history tracking',
      'Progress status management',
      'Overdue detection system',
    ],
  },
  {
    title: 'Instagram Growth Analytics & Monitoring Dashboard',
    category: 'Web Application / Analytics',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Improving (new features)',
    statusType: 'improving',
    techStack: [
      'PHP',
      'Automation Scripts',
      'REST API',
      'React.js',
      'Chart.js',
      'Database',
    ],
    description:
      'A web-based analytics dashboard that allows users to monitor Instagram profile metrics, track growth trends, and analyze engagement performance in real-time.',
    features: [
      'Follower growth visualization',
      'Engagement rate calculation',
      'Drop alert notifications',
      'PDF report export',
      'Competitor comparison analysis',
    ],
  },
  {
    title: 'Google Maps Business Data Extraction Tool',
    category: 'Automation / Web Scraping',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: [
      'Java',
      'Selenium',
      'Multithreading',
      'Proxy Rotation',
      'Captcha Handling',
      'Excel (XLSX Export)',
    ],
    description:
      'An automated crawler that extracts business data from Google Maps based on predefined search queries and generates structured Excel reports separated per query.',
    features: [
      'Query-based data extraction',
      'Email and website extraction',
      'Multi-thread processing',
      'Proxy rotation support',
      'Captcha handling logic',
      'Automated Excel export',
    ],
  },
  {
    title: 'Automated Account Registration & Ticket Submission System',
    category: 'Automation',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Improving (new features)',
    statusType: 'improving',
    techStack: [
      'Java',
      'Selenium',
      'Multi-threading',
      'Captcha Handling',
      'Queue System',
    ],
    description:
      'An automation framework designed to register accounts on targeted platforms and submit structured support tickets using predefined subject and message templates.',
    features: [
      'Automated account registration',
      'Structured ticket submission',
      'Captcha handling integration',
      'Retry logic system',
      'Multi-thread task queue',
    ],
  },
  {
    title: 'Mech Tracker - Smart Anti-Theft & Device Recovery Platform',
    category: 'Android + Web Application',
    mainCategory: 'Software Development',
    status: 'Under Development',
    statusType: 'development',
    icon: FiCode,
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
    description:
      'A multi-layer anti-theft and recovery system combining Android application and web dashboard. Users can remotely activate Lost Mode to enable stealth security controls and multi-source device tracking.',
    features: [
      'Remote Lost Mode activation',
      'Fake shutdown simulation',
      'Notification drawer blocking',
      'Siren alert system',
      'Live GPS tracking dashboard',
      'BLE Mesh & UWB fallback tracking',
      'Remote camera capture',
      'Device last-seen analytics',
    ],
  },
  {
    title: 'Automated Android-Based Account Creation System',
    category: 'Device Automation',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Improving (new features)',
    statusType: 'improving',
    techStack: [
      'Java',
      'Windows Application',
      'ADB',
      'Android Automation',
      'Custom OS (GrapheneOS / LineageOS)',
      'IP Rotation',
      'Device Spoofing',
    ],
    description:
      'A Windows-based automation system that connects to real Android devices running custom operating systems to automate account creation workflows with IP rotation and device-level execution.',
    features: [
      'Real-device automation',
      'Dynamic IP rotation',
      'Device fingerprint spoofing',
      'Automated profile setup',
      'Failure reason analyzer',
      'Detailed activity logging',
    ],
  },
  {
    title: 'Automated Social Media Account Provisioning System',
    category: 'Automation / Mobile Automation',
    mainCategory: 'Software Development',
    icon: FiCode,
    status: 'Improving (new features)',
    statusType: 'improving',
    techStack: [
      'Java',
      'Windows Application',
      'ADB',
      'Android Automation',
      'Custom OS (GrapheneOS / LineageOS)',
      'IP Rotation',
      'Device Spoofing',
    ],
    description:
      'A device-based automation solution designed to provision social media accounts using real Android hardware environments with controlled IP rotation and workflow automation.',
    features: [
      'Bulk account provisioning',
      'IP rotation management',
      'Device spoofing control',
      'Automated profile configuration',
      'Failure analysis system',
      'Activity logging',
      '2FA enabling automation',
    ],
  },
  {
    title: '3D Printer',
    category: 'Electronics',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: ['Arduino', 'C++', '3D Printing', 'PCB Design'],
    description: 'Custom-built 3D printer with enhanced features and precision control.',
    features: [
      'High precision printing',
      'Auto-leveling',
      'WiFi connectivity',
      'Touchscreen interface',
    ],
  },
  {
    title: 'Battery Management System',
    category: 'Electronics',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: ['Embedded C', 'PCB Design', 'IoT', 'Altium'],
    description: 'Smart BMS for lithium-ion batteries with monitoring and protection features.',
    features: [
      'Cell balancing',
      'Temperature monitoring',
      'Overcharge protection',
      'SOC estimation',
    ],
  },
  {
    title: 'Bio Amplifier',
    category: 'Medical',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: ['Analog Electronics', 'PCB Design', 'Signal Processing'],
    description: 'Bio-amplifier for capturing and amplifying biological signals like ECG, EEG, and EMG.',
    features: [
      'Low noise amplification',
      'Adjustable gain',
      'Filter controls',
      'USB data output',
    ],
  },
  {
    title: 'Arduino Shield & RAMPS 1.4',
    category: 'Electronics',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: ['Arduino', 'PCB Design', 'C++', '3D Printing'],
    description: 'Custom Arduino shield and RAMPS 1.4 controller for 3D printer and CNC applications.',
    features: [
      'Plug-and-play design',
      'Extended compatibility',
      'Robust power management',
      'Easy troubleshooting',
    ],
  },
  {
    title: 'Custom High-Torque Smart Servo Motor (30kg-cm @ 12V)',
    category: 'Embedded Systems / Power Electronics / Mechanical Design',
    mainCategory: 'Electronic and Embedded System',
    icon: FiCpu,
    status: 'Done & Tested',
    statusType: 'done',
    techStack: [
      'Embedded C',
      'Custom H-Bridge Design',
      'MOSFET Power Stage',
      'PWM Signal Processing',
      'Metal Gearbox Engineering',
      'PCB Design',
      'Control Systems'
    ],
    description:
      'A fully custom-engineered high-torque servo motor designed as a cost-efficient alternative to commercial servo systems. The motor maintains standard 3-pin servo compatibility (VCC, GND, Signal) while delivering 30kg-cm torque at 12V with a maximum current of 1A. Built with a custom high-current MOSFET-based H-bridge and precision metal gearbox, the system achieves approximately 3× higher torque output at nearly 50% lower cost compared to similar market alternatives.',
    features: [
      '30kg-cm torque output',
      '12V operating voltage',
      'Maximum 1A current draw',
      'Standard 3-pin servo interface (drop-in compatible)',
      'Custom high-current MOSFET H-bridge driver',
      'Precision metal gearbox for durability',
      '3× torque improvement over comparable market units',
      'Cost-optimized hardware architecture'
    ],
  },
];

const statusStyles = {
  done: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  improving: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  development: 'border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue',
};

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    whileHover={{
      scale: 1.02,
      rotateY: 5,
      rotateX: 5,
    }}
    transition={{ type: 'spring', stiffness: 300 }}
    onClick={() => onClick(project)}
    className="cyber-card cursor-pointer group"
    style={{ perspective: '1000px' }}
  >
    {/* Card Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

    {/* Icon */}
    <div className="w-14 h-14 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <project.icon className="w-7 h-7 text-cyber-blue" />
    </div>

    {/* Category */}
    <span className="text-xs font-medium text-cyber-cyan uppercase tracking-wider">
      {project.category}
    </span>

    {/* Title */}
    <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-cyber-blue transition-colors">
      {project.title}
    </h3>

    {project.status && (
      <span
        className={`ml-2 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[project.statusType] || statusStyles.development
          }`}
      >
        {project.status}
      </span>
    )}
    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-4">
      {project.techStack.slice(0, 3).map((tech) => (
        <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400">
          {tech}
        </span>
      ))}
      {project.techStack.length > 3 && (
        <span className="text-xs px-2 py-1 bg-cyber-blue/10 rounded text-cyber-blue">
          +{project.techStack.length - 3}
        </span>
      )}
    </div>

    {/* Hover indicator */}
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <FiExternalLink className="text-cyber-blue" />
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="cyber-card max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center">
            <project.icon className="w-8 h-8 text-cyber-blue" />
          </div>
          <div>
            <span className="text-sm font-medium text-cyber-cyan uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">{project.title}</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6">{project.description}</p>
        {project.status && (
          <div className="mb-6">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${statusStyles[project.statusType] || statusStyles.development
                }`}
            >
              {project.status}
            </span>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyber-purple mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyber-purple mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t border-white/10">
          <button className="glow-button flex-1 flex items-center justify-center gap-2">
            <FiGithub />
            View Code
          </button>
          <button className="px-6 py-3 bg-cyber-purple/20 border border-cyber-purple/50 text-cyber-purple font-semibold rounded-lg hover:bg-cyber-purple/30 transition-all flex-1 flex items-center justify-center gap-2">
            <FiExternalLink />
            Live Demo
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Software Development', 'Electronic and Embedded System'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.mainCategory === activeCategory);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects spanning robotics, automation, and electronics.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-cyber-blue text-cyber-dark glow-button'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} onClick={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
