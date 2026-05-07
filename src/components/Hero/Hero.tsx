import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>High School Student | San Diego</div>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.accent}>Anthony Mokhov</span>
          </h1>
          <p className={styles.subtitle}>Computer Science student & competitive chess player</p>
          <p className={styles.description}>
            I build intelligent systems and full-stack applications from concept to deployment. Whether it's chess algorithms,
            molecular calculators, or web experiences, I focus on solving real problems with elegant code. 
            Expert chess title holder | 4.75 GPA | AP Scholar with Distinction.
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
              <span className={styles.statLabel}>GPA</span>
              <span className={styles.statValue}>4.75</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>AP Classes</span>
              <span className={styles.statValue}>7</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Chess Rank</span>
              <span className={styles.statValue}>Top 70</span>
            </div>
          </div>
        </div>
        <div className={styles.decoration} aria-hidden="true" />
      </div>
    </header>
  );
}
