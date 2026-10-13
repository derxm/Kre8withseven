import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import '../styles/portfolio.css';

export default function ProjectModal({ project, projects, onClose, onNavigate, startIndex = 0 }) {
  const gallery = project?.gallery ?? (project?.allImages ?? [project?.image]).map((src, index) => ({
    src,
    alt: project?.allAlts?.[index] ?? project?.title,
    ...project?.imageDetails?.[index],
  }));
  const hasGallery = gallery.length > 1;
  const [activeImg, setActiveImg] = useState(startIndex);

  /* keyboard: Esc closes, ←/→ navigates images inside gallery,
     Shift+←/→ moves between projects */
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (hasGallery) {
      if (e.key === 'ArrowRight' && !e.shiftKey)
        setActiveImg(i => Math.min(i + 1, gallery.length - 1));
      if (e.key === 'ArrowLeft' && !e.shiftKey)
        setActiveImg(i => Math.max(i - 1, 0));
    }
    if (e.key === 'ArrowRight' && e.shiftKey) onNavigate('next');
    if (e.key === 'ArrowLeft'  && e.shiftKey) onNavigate('prev');
  }, [gallery.length, hasGallery, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!project) return null;

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;

  const currentImage = gallery[activeImg] ?? gallery[0];
  const hasProjectNavigation = projects.length > 1 && currentIndex >= 0;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Project: ${project.title}`}
      >
        <motion.div
          className={`modal-content${hasGallery ? ' modal-content--gallery' : ''}`}
          initial={{ scale: 0.93, opacity: 0, y: 16 }}
          animate={{ scale: 1,    opacity: 1, y: 0  }}
          exit={{    scale: 0.93, opacity: 0, y: 16 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
        >
          {/* ── Close ───────────────────────────────────── */}
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>

          {/* ── Project header ──────────────────────────── */}
          <div className="modal-header">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            {hasGallery && (
              <span className="modal-img-count">
                <Images size={13} aria-hidden="true" />
                {gallery.length} designs
              </span>
            )}
          </div>

          {/* ── Main image ──────────────────────────────── */}
          <div className="modal-img-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={currentImage.src}
                alt={currentImage.alt ?? project.title}
                className="modal-main-img"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>

            {/* Prev / Next image buttons */}
            {activeImg > 0 && (
              <button
                className="modal-nav modal-nav-prev"
                onClick={() => setActiveImg(i => i - 1)}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {activeImg < gallery.length - 1 && (
              <button
                className="modal-nav modal-nav-next"
                onClick={() => setActiveImg(i => i + 1)}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* ── Caption ─────────────────────────────────── */}
            {(currentImage.title || currentImage.description) && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                className="modal-caption"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{    opacity: 0, y: 6 }}
                transition={{ duration: 0.18 }}
              >
                {currentImage.title && <strong className="modal-caption-title">{currentImage.title}</strong>}
                {currentImage.description && <p className="modal-caption-desc">{currentImage.description}</p>}
              </motion.div>
            </AnimatePresence>
          )}

          {/* ── Thumbnail strip ──────────────────────────── */}
          {hasGallery && (
            <div className="modal-thumbs" role="list" aria-label="Gallery thumbnails">
              {gallery.map((image, i) => (
                <button
                  key={i}
                  role="listitem"
                  className={`modal-thumb${i === activeImg ? ' modal-thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View design ${i + 1}${image.title ? `: ${image.title}` : ''}`}
                  aria-current={i === activeImg}
                >
                  <img src={image.src} alt="" aria-hidden="true" />
                  {i === activeImg && (
                    <span className="modal-thumb-bar" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* ── Between-project navigation ───────────────── */}
          {hasProjectNavigation && <div className="modal-project-nav" aria-label="Navigate between projects">
            <button
              className="btn btn-ghost modal-project-btn"
              onClick={() => onNavigate('prev')}
              disabled={!hasPrev}
              aria-label="Previous project"
            >
              <ChevronLeft size={15} aria-hidden="true" /> Prev project
            </button>
            <span className="modal-project-counter">
              {currentIndex + 1} / {projects.length}
            </span>
            <button
              className="btn btn-ghost modal-project-btn"
              onClick={() => onNavigate('next')}
              disabled={!hasNext}
              aria-label="Next project"
            >
              Next project <ChevronRight size={15} aria-hidden="true" />
            </button>
          </div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
