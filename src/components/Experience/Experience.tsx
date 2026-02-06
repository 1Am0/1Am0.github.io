import styles from './Experience.module.css';

const experiences = [
  {
    title: '[Job Title]',
    company: '[Company Name]',
    period: '[Start Date] – [End Date]',
    description:
      'Describe your responsibilities and achievements in this role. Highlight key contributions and technologies used.',
  },
  {
    title: '[Job Title]',
    company: '[Company Name]',
    period: '[Start Date] – [End Date]',
    description:
      'Describe your responsibilities and achievements in this role. Highlight key contributions and technologies used.',
  },
  {
    title: '[Job Title]',
    company: '[Company Name]',
    period: '[Start Date] – [End Date]',
    description:
      'Describe your responsibilities and achievements in this role. Highlight key contributions and technologies used.',
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
