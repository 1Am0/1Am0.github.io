import { useState, useRef, useEffect } from 'react';
import { useTheme, themeLabels, themeDescriptions, type Theme } from '../../context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const themeColors: Record<Theme, string> = {
  minimal: '#0f172a',
  corporate: '#fafafa',
  retro: '#22c55e',
  elegant: '#b45309',
  neon: '#e879f9',
  playful: '#d946ef',
};

const themeIcons: Record<Theme, string> = {
  minimal: 'M',
  corporate: 'C',
  retro: '>_',
  elegant: 'E',
  neon: 'N',
  playful: 'P',
};

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
        aria-expanded={isOpen}
      >
        <span 
          className={styles.themeIcon} 
          style={{ 
            backgroundColor: themeColors[theme],
            color: theme === 'corporate' ? '#09090b' : '#fff'
          }}
        >
          {themeIcons[theme]}
        </span>
        <span className={styles.label}>{themeLabels[theme]}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>Select Theme</div>
          <div className={styles.options}>
            {themes.map((t) => (
              <button
                key={t}
                className={`${styles.option} ${theme === t ? styles.optionActive : ''}`}
                onClick={() => {
                  setTheme(t);
                  setIsOpen(false);
                }}
              >
                <span 
                  className={styles.optionIcon} 
                  style={{ 
                    backgroundColor: themeColors[t],
                    color: t === 'corporate' ? '#09090b' : '#fff'
                  }}
                >
                  {themeIcons[t]}
                </span>
                <div className={styles.optionText}>
                  <span className={styles.optionLabel}>{themeLabels[t]}</span>
                  <span className={styles.optionDesc}>{themeDescriptions[t]}</span>
                </div>
                {theme === t && (
                  <svg
                    className={styles.checkIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13 4.5L6.5 11L3 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
