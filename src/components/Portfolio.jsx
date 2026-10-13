import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { VideoModal, VideoProjectCard } from './VideoShowcase';
import { projects, videoProjects, filterCategories, selectedWorksImages } from '../data/projects';
import '../styles/portfolio.css';

const selectedWorksProject = {
  id: 'selected-works-gallery',
  title: 'Selected Works',
  category: 'Graphic Design / Independent Work',
  description: 'A collection of creative experiments, individual designs, and visual projects across different styles.',
  image: selectedWorksImages[0]?.src,
  imageAlt: selectedWorksImages[0]?.alt,
  imageFit: 'contain',
  gallery: selectedWorksImages,
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeFilter === 'video'
    ? []
    : activeFilter === 'all'
      ? projects
      : projects.filter(p => p.filterKey === activeFilter);
  const filteredVideos = activeFilter === 'video' || activeFilter === 'all' ? videoProjects : [];
  const modalProjects = selectedProject?.id === selectedWorksProject.id
    ? [selectedWorksProject]
    : filtered;

  const handleNavigate = (dir) => {
    const idx = filtered.findIndex(p => p.id === selectedProject.id);
    if (dir === 'next' && idx < filtered.length - 1) setSelectedProject(filtered[idx + 1]);
    if (dir === 'prev' && idx > 0)                   setSelectedProject(filtered[idx - 1]);
  };

  return (
    <section id="portfolio" className="portfolio-section section" ref={ref} aria-label="Portfolio">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-heading">
            {activeFilter === 'video' ? 'Video Editing Projects' : 'Creative Projects'}
          </h2>
          <p className="section-sub">
            {activeFilter === 'video'
              ? 'A selection of promotional and event video edits.'
              : 'A selection of graphic design and video projects.'}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="group"
          aria-label="Filter projects by category"
        >
          {filterCategories.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn${activeFilter === key ? ' active' : ''}`}
              onClick={() => setActiveFilter(key)}
              aria-pressed={activeFilter === key}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div id="videos" className="portfolio-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelectedProject}
              />
            ))}
            {filteredVideos.map(video => (
              <VideoProjectCard
                key={video.id}
                video={video}
                onClick={setSelectedVideo}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {activeFilter !== 'video' && selectedWorksImages.length > 0 && (
          <section className="selected-works" aria-labelledby="selected-works-title">
            <div className="selected-works-header">
              <span className="section-label">Independent Design</span>
              <h2 id="selected-works-title" className="section-heading">Selected Works</h2>
              <p className="section-sub">
                A collection of creative experiments, individual designs, and visual projects across different styles.
              </p>
            </div>
            <div className="selected-works-grid">
              <ProjectCard
                project={selectedWorksProject}
                index={0}
                onClick={setSelectedProject}
              />
            </div>
          </section>
        )}

        {filtered.length === 0 && filteredVideos.length === 0 && (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '3rem 0' }}>
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            projects={modalProjects}
            onClose={() => setSelectedProject(null)}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
