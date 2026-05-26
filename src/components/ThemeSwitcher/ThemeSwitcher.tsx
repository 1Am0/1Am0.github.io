import { useState, useRef, useEffect } from 'react';
import { useTheme, themeLabels, type Theme } from '../../context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const themeColors: Record<Theme, string> = {
  midnight: '#60a5fa',
  light: '#0ea5e9',
  ocean: '#22d3ee',
  forest: '#4ade80',
  sunset: '#fb923c',
  lavender: '#a78bfa',
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
          className={styles.colorDot} 
          style={{ backgroundColor: themeColors[theme] }}
        />
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
          <div className={styles.dropdownHeader}>Choose Theme</div>
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
                  className={styles.optionDot} 
                  style={{ backgroundColor: themeColors[t] }}
                />
                <span className={styles.optionLabel}>{themeLabels[t]}</span>
                {theme === t && (
                  <svg
                    className={styles.checkIcon}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M11.5 4L5.5 10L2.5 7"
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
