import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profilePhoto from '../assets/sevenfye.png';
import '../styles/components.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
};

const specializations = [
  'Graphic Design',
  'Brand Identity',
  'Promotional Graphics',
  'Campaign Design',
  'Social Media Creatives',
  'Video Editing',
  'Short-form Content',
  'Visual Storytelling',
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="about-section section" ref={ref} aria-label="About">
      <div className="container">
        <motion.div
          className="about-grid"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Photo column */}
          <motion.div className="about-photo-wrap" variants={fadeUp}>
            <div className="about-photo">
              <img
                src={profilePhoto}
                alt="Kre8withseven — graphic designer and video editor"
                loading="lazy"
              />
            </div>

            {/* Accent chip */}
            <div className="about-chip" aria-hidden="true">
              <span className="about-chip-num">Design</span>
              <div className="about-chip-label">+ motion</div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div className="about-content" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="section-label">About Me</span>
              <h2 className="about-heading">
                A Creative Who Brings <span style={{ color: 'var(--accent)' }}>Ideas to Life</span>
              </h2>
            </motion.div>

            <motion.p className="about-text" variants={fadeUp}>
              I'm a multidisciplinary creative focused on bringing ideas to life through
              graphic design and video editing. From developing visually consistent brand
              assets to creating engaging promotional graphics and compelling video content,
              I enjoy helping brands communicate their message through powerful visual
              storytelling.
            </motion.p>

            <motion.blockquote className="about-philosophy" variants={fadeUp}>
              "Every great brand starts with a great visual story — and I'm here to help
              you tell yours."
            </motion.blockquote>

            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Areas of Specialisation
              </p>
              <ul className="about-specializations" aria-label="Areas of specialisation">
                {specializations.map((s) => (
                  <li key={s}>
                    <span className="spec-tag">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <button className="btn btn-primary" onClick={scrollToContact}>
                Work With Me <ArrowRight size={16} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
