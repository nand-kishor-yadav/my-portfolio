import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../../me.png';

const roles = [
  'Embedded Systems Engineer',
  'IoT Systems Builder',
  'Robotics & Automation Engineer',
];

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Nand Kishor";
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles] = useState(() => {
    const width = typeof window === 'undefined' ? 1440 : window.innerWidth;
    const height = typeof window === 'undefined' ? 900 : window.innerHeight;

    return Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      targetY: Math.random() * -500,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  });

  useEffect(() => {
    // Typing animation for main text
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  useEffect(() => {
    // Typing/Deleting animation for roles
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (roleText.length < currentRole.length) {
          setRoleText(currentRole.slice(0, roleText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (roleText.length > 0) {
          setRoleText(currentRole.slice(0, roleText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black" />
      </div>

      {/* Neural network animation */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue/30 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              y: [null, particle.targetY],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading with inline image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-cyan">
                <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                  <img 
                    src={profileImg} 
                    alt="Nand Kishor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-cyan opacity-30 blur-xl animate-pulse" />
            </motion.div>

            {/* Name Text */}
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">{text}</span>
              <motion.span
                className="inline-block w-1 h-8 md:h-12 bg-cyber-blue ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </h1>
          </div>

          {/* Role text */}
          <p className="text-xl md:text-2xl text-cyber-cyan mb-8 h-8">
            {roleText}
            <motion.span
              className="inline-block w-1 h-6 bg-cyber-purple ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </p>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Embedded and IoT-focused engineer building hardware-software systems with
            practical proof, measurable functionality, and real deployment intent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button flex items-center justify-center gap-2"
            >
              View Projects
              <FiArrowRight />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyber-purple/20 border border-cyber-purple/50 text-cyber-purple font-semibold rounded-lg hover:bg-cyber-purple/30 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: FiGithub, href: 'https://github.com/nand-kishor-yadav', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/nand-kishor-yadav-160935238/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:nandkishor180720@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, color: '#00D4FF' }}
                className="text-gray-400 text-2xl transition-colors"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-3 bg-cyber-blue rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
