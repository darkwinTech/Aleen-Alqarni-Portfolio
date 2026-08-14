import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          className="theme-toggle-icon"
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {isDark ? <MoonIcon size={17} /> : <SunIcon size={17} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
