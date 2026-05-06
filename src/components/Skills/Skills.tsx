import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['[Skill 1]', '[Skill 2]', '[Skill 3]', '[Skill 4]'],
  },
  {
    category: 'Backend',
    skills: ['[Skill 1]', '[Skill 2]', '[Skill 3]', '[Skill 4]'],
  },
  {
    category: 'Tools',
    skills: ['[Tool 1]', '[Tool 2]', '[Tool 3]', '[Tool 4]'],
  },
];

const certifications = [
  {
    id: '4af2c53c-f5e8-4ab0-8ea7-9e8e6e0e5e7a',
    label: 'Certification 1',
  },
  {
    id: '8bc1d62e-1a2b-3c4d-9e8f-7a6b5c4d3e2f',
    label: 'Certification 2',
  },
  {
    id: '1f2e3d4c-5b6a-7890-abcd-ef1234567890',
    label: 'Certification 3',
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
            <div
              key={cert.id}
              role="img"
              aria-label={cert.label}
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id={cert.id}
              data-share-badge-host="https://www.credly.com"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
