import { motion } from 'framer-motion';
import { FiAward, FiStar, FiZap } from 'react-icons/fi';

const achievements = [
  {
    icon: FiZap,
    title: 'Best Star Performance Award',
    organization: 'APSD Innovation Infotech Pvt. Ltd. Lucknow',
    description: 'Recognized for outstanding performance and contributions to the team.',
    link: 'https://apsdinnovationinfotech.in/',
    color: 'from-yellow-500 to-orange-500',
    glowColor: 'shadow-yellow-500/30',
  },
  {
    icon: FiAward,
    title: 'First Rank in Practical Exams',
    organization: 'M.M.I.T Hathras',
    description: 'Achieved first place in practical examinations demonstrating exceptional technical skills.',
    link: 'https://urise.up.gov.in/poly/1137',
    color: 'from-cyber-blue to-cyan-500',
    glowColor: 'shadow-cyber-blue/30',
  },
];

const AchievementBadge = ({ achievement, index }) => {
  const Wrapper = achievement.link ? motion.a : motion.div;
  const wrapperProps = achievement.link
    ? { href: achievement.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`relative group ${achievement.link ? 'cursor-pointer' : ''}`}
      aria-label={achievement.link ? `${achievement.title} website` : undefined}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20 blur-xl rounded-full`} />
      
      {/* Main card */}
      <div className="relative cyber-card text-center h-full overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icon container */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-full opacity-20 animate-pulse`} />
          <div className={`relative w-full h-full bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center ${achievement.glowColor} shadow-lg`}>
            <achievement.icon className="w-10 h-10 text-white" />
          </div>
          {/* Orbiting particles */}
          <motion.div
            className="absolute inset-0 border-2 border-cyber-blue/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ borderDash: '5 5' }}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
          {achievement.title}
        </h3>

        {/* Organization */}
        <p className="text-cyber-purple font-medium mb-3">
          {achievement.organization}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm">
          {achievement.description}
        </p>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-30">
          <FiStar className="w-5 h-5 text-cyber-blue" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-30">
          <FiStar className="w-4 h-4 text-cyber-purple" />
        </div>
      </div>
    </Wrapper>
  );
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-dark" />
      
      {/* Animated background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognitions and accomplishments that highlight my journey of excellence.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementBadge 
              key={achievement.title} 
              achievement={achievement} 
              index={index}
            />
          ))}
        </div>

        {/* Stats / Additional achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '250+', label: 'Projects Completed' },
            { value: '10+', label: 'Happy Clients' },
            { value: '99%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-orbitron font-bold text-cyber-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
