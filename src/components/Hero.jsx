import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ImageIcon } from 'lucide-react';
import { morenchizProject } from '../data/projects';
import '../styles/hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const imgVariant = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

export default function Hero() {
  const images = morenchizProject.allImages;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero">
      <div className="container">
        {/* ── Left — Text ───────────────────────────── */}
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="hero-badge-dot" aria-hidden="true" />
            Graphic Designer &amp; Video Editor
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero-headline" variants={fadeUp}>
            Designing Visual <span>Identities.</span>{' '}
            Creating Stories That Matter.
          </motion.h1>

          {/* Sub */}
          <motion.p className="hero-sub" variants={fadeUp}>
            I'm a graphic designer and video editor passionate about turning ideas
            into compelling visual experiences through creative design and engaging
            video content.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-actions" variants={fadeUp}>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('portfolio')}
            >
              Explore My Work <ArrowRight size={16} aria-hidden="true" />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Let's Collaborate
            </button>
          </motion.div>

          <motion.div className="hero-capabilities" variants={fadeUp} aria-label="Creative services">
            <span>Graphic design</span>
            <span>Social campaigns</span>
            <span>Video editing</span>
          </motion.div>
        </motion.div>

        {/* ── Right — Visual ────────────────────────── */}
        <div className="hero-visual" aria-hidden="true">
          {/* Card 1 — tall */}
          <motion.div
            className="hero-img-card"
            variants={imgVariant(0.35)}
            initial="hidden"
            animate="show"
          >
            {images[0] ? (
              <img src={images[0]} alt="Morenchiz — Wing It promotional design" loading="lazy" />
            ) : (
              <div className="hero-img-placeholder">
                <ImageIcon size={28} />
                <span>Project Preview</span>
              </div>
            )}
            <div className="hero-chip">
              <Sparkles size={10} style={{ display: 'inline', marginRight: 4 }} />
              Graphic Design
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="hero-img-card"
            variants={imgVariant(0.5)}
            initial="hidden"
            animate="show"
          >
            {images[1] ? (
              <img src={images[1]} alt="Morenchiz — Gizzard Gang promotional design" loading="lazy" />
            ) : (
              <div className="hero-img-placeholder">
                <ImageIcon size={28} />
                <span>Project Preview</span>
              </div>
            )}
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="hero-img-card"
            variants={imgVariant(0.65)}
            initial="hidden"
            animate="show"
          >
            {images[2] ? (
              <img src={images[2]} alt="Morenchiz — The Side Pieces promotional design" loading="lazy" />
            ) : (
              <div className="hero-img-placeholder">
                <ImageIcon size={28} />
                <span>Project Preview</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
