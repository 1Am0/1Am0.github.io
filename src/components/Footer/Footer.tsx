import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#" className={styles.link} aria-label="GitHub">
            🔗 GitHub
          </a>
          <a href="#" className={styles.link} aria-label="LinkedIn">
            💼 LinkedIn
          </a>
          <a href="mailto:your@email.com" className={styles.link} aria-label="Email">
            📧 Email
          </a>
        </div>
        <p className={styles.copy}>© 2025 [Your Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}
