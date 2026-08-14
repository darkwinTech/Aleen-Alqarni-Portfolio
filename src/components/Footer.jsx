import { motion } from 'motion/react';
import { profile } from '../data/content';
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons';
import { fadeIn, viewportOnce } from '../motion/variants';
import './Footer.css';

export default function Footer() {
  return (
    <motion.footer
      className="site-footer"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="container footer-inner">
        <p className="mono">© {new Date().getFullYear()} {profile.name}</p>

        <div className="footer-socials">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="footer-social-link">
            <MailIcon size={16} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">
            <LinkedinIcon size={16} />
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">
            <GithubIcon size={16} />
          </a>
        </div>

        <a href="#top" className="mono back-to-top">
          Back to top ↑
        </a>
      </div>
    </motion.footer>
  );
}
