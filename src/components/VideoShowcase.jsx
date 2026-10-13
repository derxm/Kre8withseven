import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, ExternalLink } from 'lucide-react';
import { videoProjects } from '../data/projects';
import '../styles/components.css';

export function VideoModal({ video, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

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
      className="video-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Playing: ${video.title}`}
    >
      <motion.div
        className="video-modal-inner"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video player"
        >
          <X size={18} />
        </button>

        {video.previewUrl ? (
          <>
            <iframe
              src={video.previewUrl}
              title={`${video.title} video preview`}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="video-modal-actions">
              <p>Preview unavailable? Check that Google Drive sharing allows your intended viewers.</p>
              <a
                className="btn btn-primary"
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Drive <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </>
        ) : (
          <div style={{
            aspectRatio: '16/9',
            background: 'var(--bg-secondary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            color: 'var(--text-muted)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <Film size={40} strokeWidth={1} />
            <p style={{ fontSize: '0.875rem' }}>Video preview is unavailable.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function VideoProjectCard({ video, onClick }) {
  return (
    <article
      className="video-card"
      onClick={() => onClick(video)}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${video.title}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(video);
        }
      }}
    >
      <div className="video-thumb">
        {video.thumbnail ? (
          <img src={video.thumbnail} alt={`Thumbnail — ${video.title}`} loading="lazy" />
        ) : (
          <div className="video-thumb-placeholder">
            <span className="video-placeholder-label">Title card · not a video still</span>
            <strong>{video.title}</strong>
            {video.subtitle && <span>{video.subtitle}</span>}
          </div>
        )}
        <div className="video-play-btn" aria-hidden="true">
          <Play size={22} fill="white" />
        </div>
        <span className="video-category-badge">{video.category}</span>
      </div>

      <div className="video-card-body">
        <h3 className="video-card-title">{video.title}</h3>
        {(video.subtitle || video.description) && (
          <p className="video-card-desc">{video.subtitle ?? video.description}</p>
        )}
        <span className="video-card-watch">
          Watch video <ExternalLink size={14} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const publishedVideos = videoProjects.filter(video =>
    video.title && video.previewUrl && video.url &&
    !/\[[^\]]+\]|placeholder/i.test(`${video.title} ${video.subtitle ?? ''}`)
  );

  if (publishedVideos.length === 0) return null;

  return (
    <>
      <section
        id="videos"
        className="video-section section"
        aria-label="Video editing showcase"
      >
        <div className="container">
          {/* Header */}
          <div
            style={{ marginBottom: '3rem' }}
          >
            <span className="section-label">Video Work</span>
            <h2 className="section-heading">Video Editing Projects</h2>
            <p className="section-sub">
              Selected video projects. Open a preview here or continue to Google Drive.
            </p>
          </div>

          {/* Grid */}
          <div className="video-grid">
            {publishedVideos.map(video => (
              <VideoProjectCard key={video.id} video={video} onClick={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            video={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
