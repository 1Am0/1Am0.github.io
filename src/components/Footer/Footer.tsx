import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="https://github.com/1Am0" className={styles.link} aria-label="GitHub" target="_blank" rel="noreferrer">
            🔗 GitHub
          </a>
          <a href="https://www.linkedin.com" className={styles.link} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
          <a href="mailto:hello@1am0.dev" className={styles.link} aria-label="Email">
            📧 Email
          </a>
        </div>
        <p className={styles.copy}>© 2025 Anthony Mokhov. All rights reserved.</p>
      </div>
    </footer>
  );
}
