import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiZap, FiTarget } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'System Integration',
    description: 'Connecting firmware, electronics, dashboards, and software workflows into complete working systems.',
  },
  {
    icon: FiCpu,
    title: 'Electronics & Embedded',
    description: 'Designing embedded hardware, control systems, and instrumentation-focused electronics.',
  },
  {
    icon: FiZap,
    title: 'Robotics & Automation',
    description: 'Building motion, automation, and device-control workflows with practical engineering constraints.',
  },
  {
    icon: FiTarget,
    title: 'Proof-Driven Work',
    description: 'Focusing on projects that can be explained through architecture, working demos, and physical proof.',
  },
];

const skills = [
  'Embedded Systems',
  'C/C++',
  'ESP32',
  'PCB Design',
  'GSM',
  'IoT',
  'Robotics',
  'Android SDK',
  'Appium',
  'Selenium',
  'ADB',
  'Python',
  'Java',
  'Kotlin',
  'JavaScript',
  'PHP',
  'SQL',
  'Node.js',
  'React.js',
  'HTML',
  'CSS',
  'Windows Apps'
];

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-dark" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I am a multidisciplinary engineer focused on embedded systems, IoT, robotics,
            and automation. My strongest work sits at the intersection of electronics,
            control, instrumentation, and the software needed to operate and observe those systems.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cyber-card group cursor-pointer"
            >
              <div className="w-12 h-12 bg-cyber-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyber-blue/20 transition-colors">
                <item.icon className="w-6 h-6 text-cyber-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h3 className="text-2xl font-orbitron text-center text-cyber-cyan mb-8">
            Engineering Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="skill-tag"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
