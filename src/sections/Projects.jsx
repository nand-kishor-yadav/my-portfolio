import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCode, FiCpu } from 'react-icons/fi';

const projects = [
  {
    title: 'EMG Controlled Robotic Arm',
    category: 'Robotics',
    icon: FiCpu,
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
    icon: FiCode,
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
    icon: FiCode,
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
    title: '3D Printer',
    category: 'Electronics',
    icon: FiCpu,
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
    icon: FiCpu,
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
    icon: FiCpu,
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
    icon: FiCpu,
    techStack: ['Arduino', 'PCB Design', 'C++', '3D Printing'],
    description: 'Custom Arduino shield and RAMPS 1.4 controller for 3D printer and CNC applications.',
    features: [
      'Plug-and-play design',
      'Extended compatibility',
      'Robust power management',
      'Easy troubleshooting',
    ],
  },
];

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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
