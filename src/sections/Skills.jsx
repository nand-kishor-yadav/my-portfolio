import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiLayout } from 'react-icons/fi';

const softwareSkills = [
  { name: 'Python', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'C/C++', level: 80 },
  { name: 'Java', level: 95 },
  { name: 'HTML/CSS', level: 92 },
  { name: 'PHP', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'Web Scraping', level: 95 },
  { name: 'Appium', level: 98 },
  { name: 'Linux & Windows', level: 95 },
];

const hardwareSkills = [
  { name: 'PCB Design', level: 95 },
  { name: 'Altium / EasyEDA / Proteus', level: 95 },
  { name: 'Embedded Systems', level: 88 },
  { name: 'PLC', level: 78 },
  { name: 'IoT', level: 90 },
  { name: 'Robotics', level: 95 },
  { name: 'Drone Technology', level: 80 },
  { name: 'Networking', level: 80 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-cyber-blue">{level}%</span>
    </div>
    <div className="progress-bar">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="progress-fill"
      />
    </div>
  </div>
);

const SkillCard = ({ title, icon: Icon, skills, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="cyber-card"
  >
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-dark" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills spanning software development and electronics engineering.
          </p>
        </motion.div>

        {/* Skills Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCard
            title="Software Development"
            icon={FiCode}
            skills={softwareSkills}
            color="bg-gradient-to-br from-cyber-blue to-blue-600"
          />
          <SkillCard
            title="Electronics & Embedded"
            icon={FiCpu}
            skills={hardwareSkills}
            color="bg-gradient-to-br from-cyber-purple to-purple-600"
          />
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-orbitron text-center text-cyber-cyan mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'MongoDB', 'MySQL', 'PostgreSQL',
              'REST APIs', 'Microservices', 'Agile', 'CI/CD',
              'Android SDK', 'Selenium', 'ADB', 'TensorFlow',
              'Chart.js', 'ESP32', 'GSM', 'BLE Mesh',
              'UWB', 'GPS', 'Arduino', 'Raspberry Pi',
              'MATLAB', 'Simulink'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-cyber-blue/50 hover:text-cyber-blue transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
