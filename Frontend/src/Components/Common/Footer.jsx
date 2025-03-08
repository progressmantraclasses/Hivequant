import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaDiscord
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                HiveQuant 
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered auto-investing bot for Web3 tokens on the Hive blockchain. 
              Revolutionizing the way you invest in cryptocurrency.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<FaFacebookSquare size={24} />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitterSquare size={24} />} />
              <SocialLink href="https://github.com" icon={<FaGithubSquare size={24} />} />
              <SocialLink href="https://instagram.com" icon={<FaInstagram size={24} />} />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={24} />} />
              <SocialLink href="https://discord.com" icon={<FaDiscord size={24} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <FooterLink to="/documentation">Documentation</FooterLink>
              <FooterLink to="/api">API Reference</FooterLink>
              <FooterLink to="/tutorials">Tutorials</FooterLink>
              <FooterLink to="/changelog">Changelog</FooterLink>
              <FooterLink to="/status">System Status</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HiveQuant . All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
    >
      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
      {children}
    </Link>
  </li>
);

// Social Link Component
const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-cyan-500 transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;