import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'HTML/CSS', 'Vite'],
  },
  {
    category: 'Backend & ML',
    skills: ['Machine Learning', 'Chess Algorithms', 'API Design', 'Databases'],
  },
];

const certifications = [
  {
    id: 'us-chess-expert',
    title: 'US Chess Expert',
    issuer: 'US Chess Federation',
    accent: '♟️',
    link: 'https://www.uschess.org/',
  },
  {
    id: 'international-piano',
    title: 'International Piano Competitions',
    issuer: 'International Music Competition Boards',
    accent: '🎹',
    link: null,
  },
  {
    id: 'ap-scholar',
    title: 'AP Scholar with Distinction',
    issuer: 'College Board',
    accent: '🏅',
    link: 'https://www.collegeboard.org/',
  },
  {
    id: 'java-programming',
    title: 'Java Programming Certification',
    accent: '☕',
    link: 'https://www.credly.com/badges/010ae9ae-9edf-4365-aa7b-fcfdddcd6881/public_url',
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.groups}>
          {skillGroups.map(group => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.pills}>
                {group.skills.map(skill => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.heading}>Certifications</h2>
        <div className={styles.certifications}>
          {certifications.map(cert => (
            <article key={cert.id} className={styles.certificationCard}>
              <div className={styles.certificationGlow} />
              <span className={styles.certificationIcon} aria-hidden="true">
                {cert.accent}
              </span>
              <h3 className={styles.certificationTitle}>{cert.title}</h3>
              {cert.issuer && <p className={styles.certificationIssuer}>{cert.issuer}</p>}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certificationLink}
                >
                  View credential →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
