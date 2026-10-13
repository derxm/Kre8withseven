import { Briefcase, Mail, ArrowUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import '../styles/components.css';

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process',   href: '#process' },
  { label: 'Contact',   href: '#contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/kre8withseven',
    icon: <InstagramIcon />,
  },
  {
    label: 'Behance',
    href: 'https://behance.net/kre8withseven',
    icon: <Briefcase size={16} />,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: <LinkedinIcon />,
  },
  {
    label: 'Email',
    href: 'mailto:[your.email@example.com]',
    icon: <Mail size={16} />,
  },
];

const services = [
  'Brand Identity',
  'Promotional Graphics',
  'Campaign Design',
  'Social Media Creatives',
  'Video Editing',
  'Short-form Content',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              onClick={(e) => handleNavClick(e, '#home')}
              aria-label="Kre8withseven — go to top"
            >
              Kre8with<span>seven</span>
            </a>
            <p className="footer-tagline">
              Graphic designer &amp; video editor crafting compelling visual
              experiences that help brands stand out and tell their story.
            </p>
            <nav className="footer-social" aria-label="Social media links">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social-link"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="footer-link"
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links" aria-label="Services offered">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="footer-link"
                    onClick={(e) => handleNavClick(e, '#services')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="footer-col">
            <h4>Start a Project</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              Ready to create something great? Let's talk about your project.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Kre8withseven. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span className="footer-bottom-link">
              Designed &amp; Built by Dexxm
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="btn btn-ghost"
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
            aria-label="Scroll back to top"
          >
            <ArrowUp size={14} aria-hidden="true" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
