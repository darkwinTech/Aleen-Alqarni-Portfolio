import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { contact, profile } from '../data/content';
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons';
import { fadeUp, staggerContainer, slideInLeft, viewportOnce } from '../motion/variants';
import './Contact.css';

const STATUS = {
  idle: 'idle',
  sending: 'sending',
  success: 'success',
  error: 'error',
};

const linkVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Common domain typos worth a gentle "did you mean" nudge — not a hard
// block, since an unusual-looking domain isn't necessarily wrong.
const EMAIL_DOMAIN_TYPOS = {
  'gmail.co': 'gmail.com',
  'gmail.con': 'gmail.com',
  'gmail.cm': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'yahoo.co': 'yahoo.com',
  'yahoo.con': 'yahoo.com',
  'hotmail.co': 'hotmail.com',
  'hotmail.con': 'hotmail.com',
  'outlook.co': 'outlook.com',
  'outlook.con': 'outlook.com',
  'icloud.co': 'icloud.com',
};

function getEmailSuggestion(email) {
  const [local, domain] = email.split('@');
  if (!local || !domain) return null;
  const fixedDomain = EMAIL_DOMAIN_TYPOS[domain.toLowerCase()];
  return fixedDomain ? `${local}@${fixedDomain}` : null;
}

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Enter your name.';
  if (!email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!message.trim()) errors.message = 'Enter a message.';
  return errors;
}

export default function Contact() {
  const [status, setStatus] = useState(STATUS.idle);
  const [errors, setErrors] = useState({});
  const [emailSuggestion, setEmailSuggestion] = useState(null);
  const [emailValue, setEmailValue] = useState('');

  function handleEmailBlur(e) {
    setEmailSuggestion(getEmailSuggestion(e.target.value.trim()));
  }

  function applySuggestion(form) {
    setEmailValue(emailSuggestion);
    setEmailSuggestion(null);
    form.elements.email.focus();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const fields = {
      name: data.get('name') || '',
      email: data.get('email') || '',
      message: data.get('message') || '',
    };

    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus(STATUS.sending);
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus(STATUS.success);
        form.reset();
        setEmailValue('');
        setEmailSuggestion(null);
      } else {
        setStatus(STATUS.error);
      }
    } catch {
      setStatus(STATUS.error);
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="section-label mono">05 · Contact</p>
          <h2 className="section-title">{contact.heading}</h2>
          <p className="contact-blurb">{contact.blurb}</p>

          <motion.div
            className="contact-links"
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.a
              href={`mailto:${profile.email}`}
              className="contact-link"
              variants={linkVariants}
              whileHover={{ x: 6 }}
            >
              <MailIcon size={16} className="contact-link-icon" />
              <span className="mono">Email</span>
              {profile.email}
            </motion.a>
            <motion.a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              variants={linkVariants}
              whileHover={{ x: 6 }}
            >
              <LinkedinIcon size={16} className="contact-link-icon" />
              <span className="mono">LinkedIn</span>
              in/aleen-alqarni
            </motion.a>
            <motion.a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              variants={linkVariants}
              whileHover={{ x: 6 }}
            >
              <GithubIcon size={16} className="contact-link-icon" />
              <span className="mono">GitHub</span>
              @darkwintech
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.form
          className="card contact-form"
          onSubmit={handleSubmit}
          noValidate
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={errors.name ? 'field-invalid' : ''}
              onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: undefined }))}
            />
            {errors.name && (
              <p className="field-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={emailValue}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : emailSuggestion ? 'email-suggestion' : undefined}
              className={errors.email ? 'field-invalid' : ''}
              onChange={(e) => {
                setEmailValue(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                if (emailSuggestion) setEmailSuggestion(null);
              }}
              onBlur={handleEmailBlur}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
            {!errors.email && emailSuggestion && (
              <p className="field-hint" id="email-suggestion">
                Did you mean {emailSuggestion}?{' '}
                <button type="button" className="field-hint-action" onClick={(e) => applySuggestion(e.target.form)}>
                  Use this
                </button>
              </p>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={errors.message ? 'field-invalid' : ''}
              onChange={() => errors.message && setErrors((prev) => ({ ...prev, message: undefined }))}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            className="btn btn-primary"
            disabled={status === STATUS.sending}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {status === STATUS.sending ? 'Sending…' : 'Send message'}
          </motion.button>
          <AnimatePresence>
            {status === STATUS.success && (
              <motion.p
                className="form-status form-status-success"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thanks, I'll get back to you soon.
              </motion.p>
            )}
            {status === STATUS.error && (
              <motion.p
                className="form-status form-status-error"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Something went wrong. Email me directly at {profile.email} instead.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
