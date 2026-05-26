import { useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>AM</span>
          <span className={styles.logoText}>Anthony Mokhov</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <ThemeSwitcher />
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
