import { motion } from 'framer-motion';
import { FiGithub, FiHeart, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/nand-kishor-yadav', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/nand-kishor-yadav-160935238/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/NandKishor3000', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:nandkishor180720@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-cyber-black border-t border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="font-orbitron text-xl font-bold text-cyber-blue mb-4">
              Nand Kishor
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Embedded and IoT engineer building proof-driven hardware-software systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#00D4FF' }}
                  className="text-gray-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Embedded Systems</li>
              <li>IoT Monitoring Platforms</li>
              <li>PCB Design</li>
              <li>Robotics & Motion Systems</li>
              <li>Automation Workflows</li>
              <li>Supporting Dashboards</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: nandkishor180720@gmail.com</li>
              <li>Phone: +91 9548936099</li>
              <li>Location: Noida, Sector 65</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Nand Kishor. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-cyber-purple" /> using React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
