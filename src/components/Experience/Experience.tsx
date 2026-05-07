import styles from './Experience.module.css';

const experiences = [
  {
    title: 'SAT Tutor',
    company: 'Schoolhouse & CollegeBoard',
    period: 'Present',
    description:
      'Tutoring high school students to prepare them for the math SAT test. Working with non-profit organizations to make quality education accessible.',
  },
  {
    title: 'San Diego Chess Club Tournament Assistant',
    company: 'San Diego Chess Club',
    period: '2024 – Present',
    description:
      'Direct monthly scholastic tournaments with 100+ players. Organize pairings, oversee registration, enforce fair play rules, and resolve disputes to create a welcoming competitive environment for youth.',
  },
  {
    title: 'Volunteer Thinkist Tutor',
    company: 'Thinkist',
    period: '2025',
    description:
      'Mentored middle school students in foundational mathematics through weekly tutoring sessions. Completed professional pedagogical training and totaled 50+ volunteer hours, demonstrating commitment to community service.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.company}>
                  💼 {exp.company}
                </p>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.desc}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
