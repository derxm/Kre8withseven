import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Briefcase, Send, Loader } from 'lucide-react';

/* Inline SVG icons for platforms lucide-react doesn't export */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import '../styles/components.css';

// ── Replace these with your actual contact details ────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const channels = [
  {
    id: 'email',
    icon: <Mail size={18} />,
    label: 'Email',
    value: '[your.email@example.com]',
    href: 'mailto:[your.email@example.com]',
    placeholder: true,
  },
  {
    id: 'whatsapp',
    icon: <MessageCircle size={18} />,
    label: 'WhatsApp',
    value: '[+000 000 0000]',
    href: 'https://wa.me/0000000000',
    placeholder: true,
  },
  {
    id: 'instagram',
    icon: <InstagramIcon />,
    label: 'Instagram',
    value: '@kre8withseven',
    href: 'https://instagram.com/kre8withseven',
    placeholder: false,
  },
  {
    id: 'behance',
    icon: <Briefcase size={18} />,
    label: 'Behance',
    value: '[behance.net/kre8withseven]',
    href: 'https://behance.net/kre8withseven',
    placeholder: true,
  },
  {
    id: 'linkedin',
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: '[Your LinkedIn]',
    href: '#',
    placeholder: true,
  },
];

const projectTypes = [
  'Graphic Design — Brand Identity',
  'Graphic Design — Promotional Graphics',
  'Graphic Design — Campaign Design',
  'Graphic Design — Social Media Creatives',
  'Video Editing — Promotional Video',
  'Video Editing — Social Media Reel',
  'Video Editing — Brand Video',
  'Video Editing — YouTube Video',
  'Other / Not Sure',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]     = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [msg, setMsg]       = useState('');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setMsg('Please fill in all required fields.');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setMsg("Message sent! I'll be in touch soon.");
        setForm({ name: '', email: '', projectType: '', message: '' });
      } else {
        throw new Error('Server error');
      }
    } catch {
      setStatus('error');
      setMsg('Something went wrong. Please try again or reach out directly.');
    }
  };

  return (
    <section id="contact" className="contact-section section" ref={ref} aria-label="Contact">
      <div className="container">
        <motion.div
          className="contact-grid"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* ── Left — Info ───────────────────────────── */}
          <motion.div className="contact-info" variants={fadeUp}>
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="contact-headline">
                Have a Project in Mind?{' '}
                <span>Let's Create Something Great.</span>
              </h2>
            </div>

            <p className="contact-sub">
              Whether you need a brand identity, campaign graphics, social media creatives,
              or video content — I'd love to hear about your project. Let's talk.
            </p>

            {/* Channels */}
            <nav className="contact-channels" aria-label="Contact channels">
              {channels.filter(ch => !ch.placeholder).map(ch => (
                <a
                  key={ch.id}
                  href={ch.placeholder ? undefined : ch.href}
                  className="contact-channel"
                  target={ch.placeholder ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`${ch.label}: ${ch.value}`}
                  style={ch.placeholder ? { cursor: 'default' } : {}}
                >
                  <span className="contact-channel-icon">{ch.icon}</span>
                  <div>
                    <span className="contact-channel-label">{ch.label}</span>
                    <span className="contact-channel-value">
                      {ch.value}
                      {ch.placeholder && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: 4 }}>
                          — add yours
                        </span>
                      )}
                    </span>
                  </div>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* ── Right — Form ──────────────────────────── */}
          <motion.div className="contact-form-wrap" variants={fadeUp}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Project enquiry form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name <span aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email <span aria-label="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectType">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="form-select"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a service…</option>
                  {projectTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message <span aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, goals, timeline…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {/* Status message */}
              {status !== 'idle' && status !== 'submitting' && (
                <p className={`form-message ${status}`} role="alert">
                  {msg}
                </p>
              )}

              {FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID') && (
                <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500 }}>
                  📌 Replace <code>YOUR_FORM_ID</code> in Contact.jsx with your Formspree form ID
                  to enable form submissions.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader size={16} className="spin" aria-hidden="true" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
