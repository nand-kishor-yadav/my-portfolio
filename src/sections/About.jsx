import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiZap, FiTarget } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Full Stack Development',
    description: 'Building scalable web apps plus production-ready Android and Windows applications end-to-end.',
  },
  {
    icon: FiCpu,
    title: 'Electronics & Embedded',
    description: 'Designing intelligent hardware systems and IoT solutions.',
  },
  {
    icon: FiZap,
    title: 'Robotics & Automation',
    description: 'Creating autonomous systems and automating complex processes.',
  },
  {
    icon: FiTarget,
    title: 'Innovation',
    description: 'Merging software and hardware to build cutting-edge solutions.',
  },
];

const skills = [
  'Python', 'JavaScript', 'React.js', 'Node.js', 'C/C++', 'Java',
  'PCB Design', 'Embedded Systems', 'PLC', 'IoT', 'Robotics'
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
            I am a multidisciplinary engineer blending software development and electronics innovation. 
            With expertise in full stack development, embedded systems, robotics, and automation, 
            I build intelligent systems that merge hardware and software.
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
            What I Work With
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
