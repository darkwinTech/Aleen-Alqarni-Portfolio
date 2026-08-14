import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profile, projects, heroShowcase } from '../data/content';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, ExternalLinkIcon, CopyIcon, CheckIcon } from './Icons';
import { fadeUp, staggerContainer } from '../motion/variants';
import './Hero.css';

const AUTO_ADVANCE_MS = 7000;

const showcaseProjects = heroShowcase
  .map((entry) => {
    const project = projects.find((p) => p.slug === entry.slug);
    return project ? { ...project, ...entry } : null;
  })
  .filter(Boolean);

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copied, setCopied] = useState(false);

  const active = showcaseProjects[activeIndex];
  const link = active.demoUrl || active.repoUrl;

  useEffect(() => {
    if (showcaseProjects.length <= 1) return undefined;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % showcaseProjects.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [isPaused]);

  function selectProject(index) {
    setActiveIndex(index);
    setIsPaused(true);
    setCopied(false);
  }

  async function handleCopyLink() {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access unavailable/denied — link is still visible and clickable regardless.
    }
  }

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="section-label mono">
            {profile.label}
          </motion.p>
          <motion.h1 variants={fadeUp} className="hero-title">
            {profile.tagline}
          </motion.h1>
          {profile.subhead.map((paragraph, i) => (
            <motion.p variants={fadeUp} className="hero-subhead" key={i}>
              {paragraph}
            </motion.p>
          ))}
          <motion.div variants={fadeUp} className="hero-actions">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              View projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-meta mono">
            <span className="hero-meta-item">
              <MapPinIcon size={14} />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="hero-meta-item">
              <MailIcon size={14} />
              {profile.email}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hero-meta-item">
              <LinkedinIcon size={14} />
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hero-meta-item">
              <GithubIcon size={14} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-window"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-window-bar">
            <span className="hero-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="hero-window-address mono">aleen.dev/{active.slug}</span>
            {link && (
              <button
                type="button"
                className="hero-window-copy"
                onClick={handleCopyLink}
                aria-label="Copy project link"
              >
                {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
              </button>
            )}
          </div>

          <div className="hero-window-body">
            <AnimatePresence initial={false}>
              <motion.div
                className="hero-window-slide"
                key={active.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer" className="hero-window-title-link">
                    <h3 className="hero-window-title">
                      {active.title}
                      <ExternalLinkIcon size={14} />
                    </h3>
                  </a>
                ) : (
                  <h3 className="hero-window-title">{active.title}</h3>
                )}
                <p className="hero-window-summary">{active.summary}</p>

                <div className="hero-window-stats">
                  {active.stats.map((stat) => (
                    <div className="hero-window-stat" key={stat.label}>
                      <span className="hero-window-stat-value">{stat.value}</span>
                      <span className="hero-window-stat-label mono">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-window-tags">
                  {active.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-window-nav">
            {showcaseProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                className={`hero-window-pill ${index === activeIndex ? 'is-active' : ''}`}
                aria-current={index === activeIndex}
                onClick={() => selectProject(index)}
              >
                {project.shortLabel}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
