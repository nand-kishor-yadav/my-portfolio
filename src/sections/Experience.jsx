import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiArrowUp } from 'react-icons/fi';

const experiences = [
  {
    title: 'Technical Support Engineer',
    company: 'Necro Automations',
    period: 'Mar 2024 – Present',
    type: 'current',
    achievements: [
      'Designed and developed embedded hardware systems and production-ready PCB layouts',
      'Integrated microcontrollers with sensors, actuators, and communication interfaces (UART, I2C, SPI, GSM)',
      'Performed advanced debugging and root-cause failure diagnostics across hardware–firmware layers',
      'Built and validated robotics and automation systems for real-world deployment',
      'Developed power electronics solutions including motor drivers and converters',
      'Created technical documentation: schematics, test procedures, and system architecture',
    ],
  },
  {
    title: 'Electronics & PCB Design Trainer',
    company: 'APSD Innovation Infotech',
    period: 'Mar 2023 – Mar 2024',
    type: 'previous',
    achievements: [
      'Delivered hands-on training in electronics fundamentals and PCB design (Altium, Proteus, EasyEDA)',
      'Mentored students in schematic design, component selection, and PCB layout best practices',
      'Designed lab exercises simulating real-world embedded system development scenarios',
      'Provided troubleshooting guidance and technical support during lab sessions',
      'Awarded Best Star Performance Award for training effectiveness and student outcomes',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey through the tech industry, showcasing growth and achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-blue rounded-full z-10">
                <div className="absolute inset-0 w-4 h-4 bg-cyber-blue rounded-full animate-ping opacity-50" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`cyber-card relative overflow-hidden ${exp.type === 'promotion' ? 'border-cyber-glow/50' : ''
                    }`}
                >
                  {/* Promotion badge */}
                  {exp.type === 'promotion' && (
                    <div className="absolute top-0 right-0 bg-cyber-glow/20 text-cyber-glow px-3 py-1 text-xs font-semibold flex items-center gap-1">
                      <FiArrowUp size={12} />
                      PROMOTED
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-cyber-blue mt-1">
                        <FiBriefcase />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    {exp.period && (
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cyber-purple rounded-full flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Glow effect */}
                  {exp.type === 'promotion' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-glow/5 to-transparent pointer-events-none" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
