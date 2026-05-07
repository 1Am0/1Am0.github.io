import styles from './About.module.css';

const stats = [
  { value: '3rd', label: 'Ranked in Class' },
  { value: '50+', label: 'Volunteer Hours' },
  { value: '7', label: 'AP Classes Completed' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.bio}>
          I'm a junior at Patrick Henry High School in San Diego with a passion for computer science and competitive chess. I excel at turning complex mathematical and algorithmic problems into elegant solutions. Beyond coding, I'm a three-year varsity wrestler and a chess expert who competes nationally. I love teaching others—whether through tutoring math or directing chess tournaments—because I believe in making learning accessible and engaging.
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
