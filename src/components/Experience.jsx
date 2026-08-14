import { motion } from 'motion/react';
import { experience } from '../data/content';
import { fadeUp, slideInLeft, viewportOnce } from '../motion/variants';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.p
          className="section-label mono"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          04 · Experience
        </motion.p>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          Where I've put this to work.
        </motion.h2>

        <div className="timeline">
          {experience.map((job) => (
            <motion.div
              className="timeline-item"
              key={job.company}
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div
                className="timeline-marker"
                aria-hidden="true"
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div className="timeline-content card" whileHover={{ y: -4 }}>
                <div className="timeline-head">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <p className="timeline-date mono">
                    {job.date}
                    <br />
                    {job.location}
                  </p>
                </div>
                <ul className="timeline-bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
