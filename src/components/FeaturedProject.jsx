import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { morenchizProject, nexusProject, bloomxProject } from '../data/projects';
import '../styles/components.css';

// ── Animation variants ──────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

// ── Shared lightbox ─────────────────────────────────────────
function ImageLightbox({ images, alts, startIndex, projectTitle, onClose }) {
  const [idx, setIdx] = useState(startIndex);

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose();
    if (e.key === 'ArrowRight') setIdx(i => Math.min(i + 1, images.length - 1));
    if (e.key === 'ArrowLeft')  setIdx(i => Math.max(i - 1, 0));
  }, [images.length, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} — image lightbox`}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close lightbox">
          <X size={18} />
        </button>

        {idx > 0 && (
          <button
            className="modal-nav modal-nav-prev"
            onClick={() => setIdx(i => i - 1)}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <img
          src={images[idx]}
          alt={alts ? alts[idx] : `${projectTitle} image ${idx + 1} of ${images.length}`}
        />

        {idx < images.length - 1 && (
          <button
            className="modal-nav modal-nav-next"
            onClick={() => setIdx(i => i + 1)}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Counter */}
        <div className="lightbox-counter" aria-live="polite">
          {idx + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Reusable CaseStudy block ────────────────────────────────
function CaseStudy({ project, sectionId, labelText }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const p = project;

  return (
    <>
      <section
        id={sectionId}
        className="featured-section section"
        ref={ref}
        aria-label={`Featured project: ${p.title}`}
      >
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* ── Header ──────────────────────────────── */}
            <div className="featured-header">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="section-label">{labelText}</span>
                </motion.div>
                <motion.div className="featured-category-tag" variants={fadeUp}>
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </motion.div>
                <motion.h2 className="featured-title" variants={fadeUp}>
                  {p.title}
                  {p.subtitle && (
                    <span className="featured-subtitle"> — {p.subtitle}</span>
                  )}
                </motion.h2>
                <motion.p className="featured-desc" variants={fadeUp}>
                  {p.description}
                </motion.p>
              </div>
            </div>

            {/* ── Main image ──────────────────────────── */}
            <motion.div
              className="featured-main-img"
              variants={fadeUp}
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openLightbox(0)}
              aria-label={`${p.mainImageAlt} — click to enlarge`}
            >
              <img
                src={p.mainImage}
                alt={p.mainImageAlt}
                loading="lazy"
              />
              <div
                className="featured-zoom-hint"
                aria-hidden="true"
              >
                <ZoomIn size={36} color="#fff" />
              </div>
            </motion.div>

            {/* ── Gallery ─────────────────────────────── */}
            <motion.div className="featured-gallery" variants={fadeUp}>
              {p.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="featured-gallery-item"
                  onClick={() => openLightbox(i + 1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && openLightbox(i + 1)}
                  aria-label={`${p.galleryAlts ? p.galleryAlts[i] : `Campaign image ${i + 2}`} — click to enlarge`}
                >
                  <img
                    src={img}
                    alt={p.galleryAlts ? p.galleryAlts[i] : `${p.title} image ${i + 2}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>

            {/* ── Image detail captions (Nexus only) ──── */}
            {p.imageDetails && (
              <motion.div className="featured-image-details" variants={fadeUp}>
                {p.imageDetails.map((detail, i) => (
                  <div
                    key={i}
                    className="featured-image-detail-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(i)}
                    onKeyDown={e => e.key === 'Enter' && openLightbox(i)}
                    aria-label={`View ${detail.title}`}
                  >
                    <span className="featured-detail-num">0{i + 1}</span>
                    <div>
                      <h4 className="featured-detail-title">{detail.title}</h4>
                      <p className="featured-detail-desc">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ── Meta panel ──────────────────────────── */}
            <motion.div className="featured-meta" variants={fadeUp}>
              <div className="featured-meta-item">
                <h4>Client</h4>
                <p>{p.client}</p>
              </div>
              <div className="featured-meta-item">
                <h4>Category</h4>
                <p>{p.category}</p>
              </div>

              {/* Morenchiz: objectives + skills */}
              {p.objectives && (
                <div className="featured-meta-item">
                  <h4>Objectives</h4>
                  <ul className="skills-list" style={{ marginTop: '0.25rem' }}>
                    {p.objectives.map(o => (
                      <li key={o} className="skill-chip">{o}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nexus: contributions */}
              {p.contributions && (
                <div className="featured-meta-item">
                  <h4>Creative Contributions</h4>
                  <ul className="skills-list" style={{ marginTop: '0.25rem' }}>
                    {p.contributions.map(c => (
                      <li key={c} className="skill-chip">{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.skills && (
                <div className="featured-meta-item">
                  <h4>Skills</h4>
                  <ul className="skills-list" style={{ marginTop: '0.25rem' }}>
                    {p.skills.map(s => (
                      <li key={s} className="skill-chip">{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={p.allImages}
            alts={[p.mainImageAlt, ...(p.galleryAlts || [])]}
            startIndex={lightboxIndex}
            projectTitle={p.title}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ── Default export — renders both case studies ──────────────
export default function FeaturedProject() {
  return (
    <>
      <CaseStudy
        project={morenchizProject}
        sectionId="featured-morenchiz"
        labelText="Featured Case Study"
      />
      <CaseStudy
        project={nexusProject}
        sectionId="featured-nexus"
        labelText="Featured Case Study"
      />
      <CaseStudy
        project={bloomxProject}
        sectionId="featured-bloomx"
        labelText="Featured Case Study"
      />

      {/* Shared hover style for zoom hint */}
      <style>{`
        .featured-main-img { position: relative; }
        .featured-zoom-hint {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.25s;
          background: rgba(0,0,0,0.35);
        }
        .featured-main-img:hover .featured-zoom-hint { opacity: 1; }
        .featured-subtitle {
          font-size: 0.65em;
          color: var(--accent-light);
          font-weight: 500;
        }
        .lightbox-counter {
          position: absolute;
          bottom: -2.25rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .featured-image-details {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .featured-image-detail-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          cursor: pointer;
          transition: border-color var(--transition), background var(--transition);
        }
        .featured-image-detail-card:hover {
          border-color: var(--accent-border);
          background: var(--accent-dim);
        }
        .featured-detail-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
          min-width: 2rem;
        }
        .featured-detail-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }
        .featured-detail-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }
      `}</style>
    </>
  );
}
