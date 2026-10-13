import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Lightbulb, PenTool, RefreshCw, PackageCheck } from 'lucide-react';
import '../styles/components.css';

const steps = [
  {
    num: '01',
    icon: <Search size={22} aria-hidden="true" />,
    title: 'Discovery',
    desc: "Understand the client's goals, target audience, and project requirements through thorough research and meaningful conversation.",
  },
  {
    num: '02',
    icon: <Lightbulb size={22} aria-hidden="true" />,
    title: 'Concept',
    desc: 'Develop creative ideas, explore visual directions, and establish the overall aesthetic that best serves the brief.',
  },
  {
    num: '03',
    icon: <PenTool size={22} aria-hidden="true" />,
    title: 'Creation',
    desc: 'Design the graphics or edit the video content, bringing the approved concept to life with precision and creativity.',
  },
  {
    num: '04',
    icon: <RefreshCw size={22} aria-hidden="true" />,
    title: 'Refinement',
    desc: 'Review the work together, gather feedback, and apply agreed-upon revisions to ensure everything is just right.',
  },
  {
    num: '05',
    icon: <PackageCheck size={22} aria-hidden="true" />,
    title: 'Delivery',
    desc: 'Prepare and deliver the final assets in the required formats, ready for immediate use across all platforms.',
  },
];

export default function CreativeProcess() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      className="process-section section"
      ref={ref}
      aria-label="Creative process"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3.5rem', maxWidth: 560 }}
        >
          <span className="section-label">How I Work</span>
          <h2 className="section-heading">My Creative Process</h2>
          <p className="section-sub">
            A structured, collaborative approach that keeps you informed and in control
            at every stage of the project.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="process-grid" role="list">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step"
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              aria-label={`Step ${step.num}: ${step.title}`}
            >
              <span className="process-num">{step.num}</span>
              <div style={{
                width: 44, height: 44,
                background: 'var(--accent-dim)',
                border: '1px solid var(--accent-border)',
                borderRadius: 'var(--radius)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                {step.icon}
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
