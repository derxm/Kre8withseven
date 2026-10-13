import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Film, MessageSquare } from 'lucide-react';
import '../styles/components.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    id: 'graphic-design',
    icon: <Palette size={24} aria-hidden="true" />,
    title: 'Graphic Design',
    description:
      'From brand identity systems to promotional graphics, I design visuals that communicate clearly and leave a lasting impression.',
    items: [
      'Brand identity and brand assets',
      'Promotional graphics',
      'Campaign designs',
      'Event flyers and posters',
      'Social media creatives',
      'Advertising graphics',
    ],
  },
  {
    id: 'video-editing',
    icon: <Film size={24} aria-hidden="true" />,
    title: 'Video Editing',
    description:
      'I craft engaging video content that captures attention, communicates your message, and keeps audiences coming back.',
    items: [
      'Promotional videos',
      'Social media reels',
      'Brand videos',
      'YouTube videos',
      'Short-form video content',
      'Visual storytelling',
    ],
  },
];

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="services-section section" ref={ref} aria-label="Services">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="services-intro">
            <span className="section-label">What I Do</span>
            <h2 className="section-heading">Services Tailored to Your Creative Needs</h2>
            <p className="section-sub">
              Whether you need a brand identity that stands out or video content that
              connects with your audience, I deliver quality creative work on time.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="services-grid">
            {services.map((svc) => (
              <motion.article
                key={svc.id}
                className="service-card"
                variants={fadeUp}
                aria-label={svc.title}
              >
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>
                <ul className="service-list" aria-label={`${svc.title} service items`}>
                  {svc.items.map((item) => (
                    <li key={item} className="service-list-item">{item}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-outline service-cta"
                  onClick={scrollToContact}
                  aria-label={`Enquire about ${svc.title}`}
                >
                  <MessageSquare size={15} aria-hidden="true" /> Get a Quote
                </button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
