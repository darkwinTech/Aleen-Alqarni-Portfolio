import { motion } from 'motion/react';
import { about, education } from '../data/content';
import { GraduationCapIcon, ArrowUpRightIcon } from './Icons';
import { fadeUp, slideInLeft, viewportOnce } from '../motion/variants';
import kfupmLogo from '../assets/logos/kfupm-logo.svg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="section-label mono">01 · About</p>
          <h2 className="section-title">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p className="about-paragraph" key={i}>
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="education-card card"
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
        >
          <p className="mono education-label">
            <GraduationCapIcon size={14} />
            Education
          </p>
          <img src={kfupmLogo} alt="KFUPM" className="education-logo" />
          <a href={education.link} target="_blank" rel="noreferrer" className="education-school-link">
            <h3 className="education-school">
              {education.school}
              <ArrowUpRightIcon size={15} className="education-school-arrow" />
            </h3>
          </a>
          <p className="education-degree">{education.degree}</p>
          <p className="education-meta mono">
            {education.date} · {education.location}
          </p>
          <div className="education-coursework">
            <p className="mono education-label">Relevant coursework</p>
            <ul>
              {education.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
