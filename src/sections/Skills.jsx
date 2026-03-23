import { motion } from 'framer-motion';
import { FiCpu, FiRadio, FiCode, FiSettings, FiServer, FiTool } from 'react-icons/fi';
import { skillGroups, skills } from '../data/skills';

const icons = {
  core: FiCpu,
  communication: FiRadio,
  software: FiCode,
  automation: FiSettings,
  backend: FiServer,
  tools: FiTool,
};

const accents = {
  core: 'from-cyber-blue to-cyan-500',
  communication: 'from-cyber-cyan to-blue-500',
  software: 'from-cyber-purple to-fuchsia-500',
  automation: 'from-cyber-glow to-emerald-500',
  backend: 'from-orange-400 to-amber-500',
  tools: 'from-slate-400 to-slate-200',
};

function SkillGroupCard({ groupKey, title, items, index }) {
  const Icon = icons[groupKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="cyber-card h-full"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accents[groupKey]} flex items-center justify-center mb-5`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-dark" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Focused on embedded and IoT engineering with supporting automation, backend,
            deployment, and frontend capabilities where they serve the system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillGroupCard
              key={group.key}
              groupKey={group.key}
              title={group.title}
              items={skills[group.key]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
