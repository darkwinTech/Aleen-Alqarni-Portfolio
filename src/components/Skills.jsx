import { motion } from 'motion/react';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss,
} from 'react-icons/si';
import { skills, skillHighlights } from '../data/content';
import {
  BarChart3Icon,
  Code2Icon,
  TerminalIcon,
  DatabaseIcon,
  BrainCircuitIcon,
  LayersIcon,
  WrenchIcon,
  PieChartIcon,
} from './Icons';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../motion/variants';
import './Skills.css';

const tagVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// key -> icon component, for the highlight strip. Power BI has no Simple
// Icons brand mark, so it falls back to a generic lucide icon.
const highlightIconMap = {
  powerbi: PieChartIcon,
  python: SiPython,
  javascript: SiJavascript,
  react: SiReact,
  nodejs: SiNodedotjs,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  figma: SiFigma,
  html5: SiHtml5,
  css: SiCss,
};

// category name -> lucide icon, for the category card chips
const categoryIconMap = {
  'Business Intelligence & Data': BarChart3Icon,
  'Web & Backend Development': Code2Icon,
  'Programming Languages': TerminalIcon,
  Databases: DatabaseIcon,
  'AI & Machine Learning': BrainCircuitIcon,
  'Software Engineering': LayersIcon,
  'Tools & Technologies': WrenchIcon,
};

if (import.meta.env.DEV) {
  const allItems = new Set(skills.flatMap((group) => group.items));
  skillHighlights.forEach((highlight) => {
    if (!allItems.has(highlight.name)) {
      console.warn(`[Skills] "${highlight.name}" in skillHighlights has no matching item in skills — check for drift.`);
    }
  });
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.p
          className="section-label mono"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          02 · Skills
        </motion.p>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          Where product engineering meets data.
        </motion.h2>

        <motion.p
          className="skills-highlight-label mono"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          Core stack
        </motion.p>
        <motion.div
          className="skills-highlight-grid"
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {skillHighlights.map((highlight) => {
            const Icon = highlightIconMap[highlight.key];
            return (
              <motion.div
                className="card skills-highlight-tile"
                key={highlight.key}
                variants={scaleIn}
                whileHover={{ y: -2, transition: { duration: 0.25, ease: 'easeOut' } }}
                whileTap={{ scale: 0.96 }}
              >
                {Icon && <Icon className="skills-highlight-icon" aria-hidden="true" />}
                <span className="skills-highlight-name mono">{highlight.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {skills.map((group) => {
            const CategoryIcon = categoryIconMap[group.category];
            return (
              <motion.div
                className="card skills-card"
                key={group.category}
                variants={scaleIn}
                whileHover={{ y: -2, transition: { duration: 0.25, ease: 'easeOut' } }}
              >
                <div className="skills-category-head">
                  {CategoryIcon && (
                    <span className="skills-category-icon" aria-hidden="true">
                      <CategoryIcon size={16} />
                    </span>
                  )}
                  <h3 className="skills-category">{group.category}</h3>
                </div>
                <motion.div
                  className="skills-items"
                  variants={staggerContainer(0.04)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  {group.items.map((item) => (
                    <motion.span
                      className="tag"
                      key={item}
                      variants={tagVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
