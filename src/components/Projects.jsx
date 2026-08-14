import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/content';
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, GithubIcon } from './Icons';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../motion/variants';
import './Projects.css';

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(el, targetLeft, duration = 420) {
  const startLeft = el.scrollLeft;
  const delta = targetLeft - startLeft;
  const startTime = performance.now();

  function step(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    el.scrollTo({ left: startLeft + delta * easeInOutCubic(elapsed), behavior: 'instant' });
    if (elapsed < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Projects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateMetrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const children = track.children;
    const stepWidth = children.length > 1 ? children[1].offsetLeft - children[0].offsetLeft : track.clientWidth;

    const rawIndex = stepWidth ? Math.round(track.scrollLeft / stepWidth) : 0;
    setActiveIndex(Math.max(0, Math.min(rawIndex, projects.length - 1)));
    setIsAtStart(track.scrollLeft <= 1);
    setIsAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    updateMetrics();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateMetrics, 150);
    };

    track.addEventListener('scroll', updateMetrics, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      track.removeEventListener('scroll', updateMetrics);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [updateMetrics]);

  const scrollByCards = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;

    const children = track.children;
    const stepWidth = children.length > 1 ? children[1].offsetLeft - children[0].offsetLeft : track.clientWidth;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const targetLeft = Math.max(0, Math.min(track.scrollLeft + direction * stepWidth, maxScrollLeft));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      track.scrollTo({ left: targetLeft, behavior: 'instant' });
    } else {
      smoothScrollTo(track, targetLeft);
    }
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.p
          className="section-label mono"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          03 · Projects
        </motion.p>

        <div className="projects-heading-row">
          <motion.h2
            className="section-title projects-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            Selected work.
          </motion.h2>

          <motion.div
            className="projects-nav"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="projects-counter mono">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="projects-arrow"
              aria-label="Previous project"
              disabled={isAtStart}
              onClick={() => scrollByCards(-1)}
            >
              <ChevronLeftIcon size={16} />
            </button>
            <button
              type="button"
              className="projects-arrow"
              aria-label="Next project"
              disabled={isAtEnd}
              onClick={() => scrollByCards(1)}
            >
              <ChevronRightIcon size={16} />
            </button>
          </motion.div>
        </div>

        <motion.div
          className="projects-track"
          ref={trackRef}
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {projects.map((project) => (
            <motion.article
              className="card project-card"
              key={project.slug}
              variants={scaleIn}
              whileHover={{ y: -2, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              <div className="project-thumb" aria-hidden="true">
                <span className="mono project-thumb-index">{project.tags[0]}</span>
              </div>
              <div className="project-body">
                <div className="project-meta mono">{project.date}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.caseStudy && (
                    <span className="project-link">
                      View case study
                      <ArrowUpRightIcon size={14} />
                    </span>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-link">
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLinkIcon size={14} />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
