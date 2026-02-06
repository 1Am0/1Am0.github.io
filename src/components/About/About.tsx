import styles from './About.module.css';

const stats = [
  { value: '[X]+', label: 'Years Experience' },
  { value: '[X]+', label: 'Projects Completed' },
  { value: '[X]+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.bio}>
          I'm a [your role] based in [your location]. I enjoy turning complex problems
          into simple, beautiful, and intuitive solutions. When I'm not coding, you'll
          find me [your hobbies]. Replace this paragraph with your own bio to tell
          visitors about your background, passions, and what drives you.
        </p>
        <div className={styles.stats}>
          {stats.map(stat => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
