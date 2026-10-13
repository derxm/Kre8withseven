import { motion } from 'framer-motion';
import { Eye, ImageIcon, Images } from 'lucide-react';
import '../styles/portfolio.css';

export default function ProjectCard({ project, onClick, index }) {
  const imageCount = project.gallery?.length ?? project.imageCount ?? 1;
  const hasMultiple = imageCount > 1;

  return (
    <motion.article
      className="project-card"
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      layout
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
    >
      {/* Thumbnail */}
      <div className={`project-card-thumb${project.imageFit === 'contain' ? ' project-card-thumb--contain' : ''}`}>
        {project.image ? (
          <img src={project.image} alt={project.imageAlt ?? project.title} loading="lazy" />
        ) : (
          <div className="project-card-placeholder">
            <ImageIcon size={32} strokeWidth={1} />
            <span>Project Image</span>
            <small>Replace with your artwork</small>
          </div>
        )}

        {/* Image-count badge — top-left */}
        {hasMultiple && (
          <span className="project-card-badge" aria-label={`${imageCount} designs in this project`}>
            <Images size={11} aria-hidden="true" />
            {imageCount}
          </span>
        )}

        {/* Hover overlay */}
        <div className="project-card-overlay" aria-hidden="true">
          <span className="project-card-view-btn">
            <Eye size={14} /> View Project
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="project-card-body">
        <p className="project-card-category">{project.category}</p>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
      </div>
    </motion.article>
  );
}
