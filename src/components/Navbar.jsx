import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/navbar.css';

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Video Editing', href: '#videos' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* active link via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    // small delay to let mobile menu close first
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, menuOpen ? 320 : 0);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            aria-label="Kre8withseven — go to home"
          >
            Kre8with<span>seven</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn btn-primary navbar-cta desktop-only"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Let's Talk
          </a>

          {/* Hamburger */}
          <button
            className={`navbar-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                className="nav-link"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn btn-primary navbar-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
