import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiSend, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('https://mechnetautomator.com/api/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus({ type: 'success', message: 'Message sent successfully.' });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'nandkishor180720@gmail.com',
      href: 'mailto:nandkishor180720@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 9548936099',
      href: 'tel:+919548936099',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/nand-kishor-yadav',
      href: 'https://github.com/nand-kishor-yadav',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Noida, Sector 65',
      href: 'https://maps.app.goo.gl/AvvCtGEKZcq7kfzJA',
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-black" />
      
      {/* Animated background */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start a project or collaborate? Get in touch with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-cyber-blue/10 rounded-lg flex items-center justify-center group-hover:bg-cyber-blue/20 transition-colors">
                    <item.icon className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white group-hover:text-cyber-cyan transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="cyber-input"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="cyber-input resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`glow-button w-full flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus && (
                <p
                  className={`text-sm ${
                    submitStatus.type === 'success' ? 'text-cyber-cyan' : 'text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
