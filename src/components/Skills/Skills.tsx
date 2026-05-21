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
    id: '62212f49-92a3-4e48-9f71-7d2b0afa0cfe',
    title: 'US Chess Expert',
    issuer: 'US Chess Federation',
    accent: '♟️',
  },
  {
    id: '721a145f-805e-486a-b4a1-b34f11546546',
    title: 'International Piano Competitions',
    issuer: 'International Music Competition Boards',
    accent: '🎹',
  },
  {
    id: '70932542-e7f2-4a2d-91e9-d21d4feb4adf',
    title: 'AP Scholar with Distinction',
    issuer: 'College Board',
    accent: '🏅',
  },
  {
    id: '010ae9ae-9edf-4365-aa7b-fcfdddcd6881',
    title: 'Java Programming Badge',
    accent: '☕',
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
              <a
                href={`https://www.credly.com/badges/${cert.id}/public_url`}
                target="_blank"
                rel="noreferrer"
                className={styles.certificationLink}
              >
                View credential
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
