import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.accent}>[Your Name]</span>
          </h1>
          <p className={styles.subtitle}>[Your Title / Tagline]</p>
          <p className={styles.description}>
            A passionate developer crafting modern web experiences. I love building
            products that make a difference. Replace this with a brief introduction
            about yourself and what you do.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className={styles.decoration} aria-hidden="true" />
      </div>
    </header>
  );
}
