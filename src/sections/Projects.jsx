import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiClipboard,
  FiCode,
  FiCpu,
  FiExternalLink,
  FiFileText,
  FiLayers,
  FiTool,
  FiTrendingUp,
  FiUser,
  FiX,
} from 'react-icons/fi';
import ProjectProof from '../components/ProjectProof';
import { projects } from '../data/projects';

const featuredProjectSlugs = new Set([
  'solar-cleaning-system',
  'custom-servo',
  'solar-monitoring',
  'bio-amplifier',
]);

const featuredProjects = projects.filter((project) => featuredProjectSlugs.has(project.slug));
const otherProjects = projects.filter((project) => !featuredProjectSlugs.has(project.slug));

const categoryIcons = {
  'IoT / Embedded Systems': FiCpu,
  'Medical Electronics / Signal Conditioning': FiTool,
  'Embedded Systems / Power Electronics / Mechanical Design': FiLayers,
  'Embedded Systems / IoT / Robotics': FiLayers,
  Robotics: FiLayers,
  Automation: FiTool,
  'Automation / Web Scraping': FiTool,
  'Automation / Mobile Automation': FiTool,
  'AI Systems / Software': FiCpu,
  'Android Application': FiCpu,
  'Android + Web Application': FiCpu,
  'Web Application / Analytics': FiCpu,
  'Device Automation': FiTool,
  Electronics: FiLayers,
};

function ProjectCard({ project, onClick }) {
  const Icon = categoryIcons[project.category] || FiCpu;
  const showCodeAvailability = project.codeAvailability?.show !== false;

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.01, rotateY: 4, rotateX: 4 }}
      transition={{ type: 'spring', stiffness: 280 }}
      onClick={() => onClick(project)}
      className="cyber-card group text-left w-full h-full relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-cyber-blue" />
          </div>
          {showCodeAvailability && (
            <span className="inline-flex items-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyber-cyan">
              {project.codeAvailability?.label || 'Code Available on Request'}
            </span>
          )}
        </div>

        <p className="text-xs font-medium text-cyber-cyan uppercase tracking-[0.2em] mb-2">
          {project.category}
        </p>
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyber-blue transition-colors">
          {project.shortTitle}
        </h3>
        <p className="text-gray-300 mt-3">{project.overview}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-cyber-purple font-semibold mb-1">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.impact ? (
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-cyber-purple font-semibold mb-1">Impact</p>
              <p className="text-gray-400">{project.impact}</p>
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-cyber-purple font-semibold mb-1">Proof</p>
              <p className="text-gray-400">Proof is loaded dynamically from the project workspace.</p>
            </div>
          )}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-cyber-blue text-sm font-medium">
          <FiExternalLink />
          Open technical breakdown
        </div>
      </div>
    </motion.button>
  );
}

function CompactProjectCard({ project, onClick }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -4 }}
      onClick={() => onClick(project)}
      className="cyber-card text-left w-full h-full"
    >
      <p className="text-xs font-medium text-cyber-cyan uppercase tracking-[0.2em] mb-2">
        {project.category}
      </p>
      <h3 className="text-xl font-semibold text-white">{project.shortTitle || project.title}</h3>
      <p className="text-gray-400 mt-3 text-sm line-clamp-3">{project.overview}</p>
      {project.impact && (
        <p className="text-cyber-cyan/90 mt-3 text-sm line-clamp-2">{project.impact}</p>
      )}
      {project.techStack?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.button>
  );
}

function DetailBlock({ icon: Icon, title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-cyber-blue" />
        <h4 className="text-sm font-semibold text-cyber-cyan uppercase tracking-wider">{title}</h4>
      </div>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const Icon = categoryIcons[project.category] || FiCpu;
  const showCodeAvailability = project.codeAvailability?.show !== false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(event) => event.stopPropagation()}
        className="cyber-card max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close project details"
        >
          <FiX size={24} />
        </button>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 pr-10">
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center mb-4">
              <Icon className="w-8 h-8 text-cyber-blue" />
            </div>
            <p className="text-sm font-medium text-cyber-cyan uppercase tracking-[0.25em]">
              {project.category}
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {showCodeAvailability && (
            <div className="rounded-xl border border-cyber-blue/30 bg-cyber-blue/10 px-4 py-3 text-sm text-cyber-cyan max-w-sm">
              <p className="font-semibold mb-1">{project.codeAvailability.label}</p>
              <p className="text-gray-300">{project.codeAvailability.note}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <DetailBlock icon={FiClipboard} title="Overview">
            <p>{project.overview}</p>
          </DetailBlock>
          <DetailBlock icon={FiFileText} title="Problem">
            <p>{project.problem}</p>
          </DetailBlock>
          <DetailBlock icon={FiLayers} title="Architecture">
            <p>{project.architecture}</p>
          </DetailBlock>
          <DetailBlock icon={FiUser} title="Role">
            <p>{project.role}</p>
          </DetailBlock>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <DetailBlock icon={FiCheckCircle} title="Working">
            <ul className="space-y-2">
              {project.working.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyber-blue shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock icon={FiTool} title="Challenges">
            <ul className="space-y-2">
              {project.challenges.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyber-purple shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <DetailBlock icon={FiCode} title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </DetailBlock>

          {project.impact && (
            <DetailBlock icon={FiTrendingUp} title="Impact">
              <p>{project.impact}</p>
            </DetailBlock>
          )}
        </div>

        <div className="mb-6 mt-6">
          <ProjectProof projectDir={project.proof?.projectDir} projectTitle={project.shortTitle} />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {showCodeAvailability &&
            (project.codeAvailability.href ? (
              <a
                href={project.codeAvailability.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button flex-1 flex items-center justify-center gap-2"
              >
                <FiCode />
                View Code
              </a>
            ) : (
              <button
                type="button"
                className="glow-button flex-1 flex items-center justify-center gap-2 opacity-80"
              >
                <FiCode />
                {project.codeAvailability.label}
              </button>
            ))}
          <a
            href="#contact"
            onClick={onClose}
            className={`px-6 py-3 bg-cyber-purple/20 border border-cyber-purple/50 text-cyber-purple font-semibold rounded-lg hover:bg-cyber-purple/30 transition-all flex items-center justify-center gap-2 ${
              showCodeAvailability ? 'flex-1' : 'w-full'
            }`}
          >
            <FiExternalLink />
            Request project proof
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Flagship Projects</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Built around proof-first engineering narratives: what problem was solved,
            how the system works, what technical tradeoffs mattered, and where proof assets belong.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} onClick={setSelectedProject} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="glow-button flex items-center justify-center gap-2"
          >
            {showAll ? (
              <>
                Hide Projects <FiChevronUp />
              </>
            ) : (
              <>
                View All Projects <FiChevronDown />
              </>
            )}
          </button>
        </div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-orbitron text-white">Additional Projects</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mt-3">
                Supporting projects and experiments that extend the broader engineering profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.slug || project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <CompactProjectCard project={project} onClick={setSelectedProject} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
