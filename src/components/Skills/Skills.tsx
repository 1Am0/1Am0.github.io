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
      </div>
    </section>
  );
}
