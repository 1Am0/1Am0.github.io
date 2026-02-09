import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Currently available for new projects</div>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.accent}>Anthony Mokhov</span>
          </h1>
          <p className={styles.subtitle}>Full-stack engineer crafting immersive web experiences</p>
          <p className={styles.description}>
            I blend thoughtful design with resilient engineering to ship experiences that feel smooth,
            performant, and delightful. From interactive frontends to scalable APIs, I care about
            the details that make products memorable.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Projects delivered</span>
              <span className={styles.statValue}>25+</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Years coding</span>
              <span className={styles.statValue}>6</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Response time</span>
              <span className={styles.statValue}>~24h</span>
            </div>
          </div>
        </div>
        <div className={styles.decoration} aria-hidden="true" />
      </div>
    </header>
  );
}
