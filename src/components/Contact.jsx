import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socials = [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com',
      icon: <FaGithub className="w-5 h-5 shrink-0" />,
      hoverClass: 'hover:bg-[#24292e] hover:border-[#404448]',
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <FaLinkedin className="w-5 h-5 shrink-0" />,
      hoverClass: 'hover:bg-[#0077B5] hover:border-[#0099e6]',
    },
    {
      id: 3,
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <FaTwitter className="w-5 h-5 shrink-0" />,
      hoverClass: 'hover:bg-[#1DA1F2] hover:border-[#4db8ff]',
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10"
    >
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-white/60 max-w-lg mx-auto text-sm md:text-base mb-4">
          Have a project in mind or want to discuss a potential opportunity?
          Feel free to reach out!
        </p>
        <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-medium">Email Me</p>
                <a
                  href="mailto:abodeifwd@gmail.com"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  abodeifwd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-medium">Call Me</p>
                <a
                  href="tel:+1234567890"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  +123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-medium">Location</p>
                <p className="text-white font-medium">Egypt</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
            <p className="text-sm font-semibold text-white">Connect with me</p>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all duration-300 ease-out ${social.hoverClass}`}
                >
                  {social.icon}
                  <div className="overflow-hidden max-w-0 group-hover:max-w-[100px] transition-all duration-300 ease-out">
                    <span className="text-sm font-semibold whitespace-nowrap pl-0 group-hover:pl-2">
                      {social.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6 hover:border-cyan-400/30 transition-all duration-500"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-28 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>
          © {new Date().getFullYear()} All rights reserved. Built with React &
          Tailwind CSS.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>  
    </section>
  );
  
}
