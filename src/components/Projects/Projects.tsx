import styles from './Projects.module.css';

const projects = [
  {
    title: '[Project Name 1]',
    description:
      'A brief description of the project, what it does, and what problem it solves. Replace with your own project details.',
    tags: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
  },
  {
    title: '[Project Name 2]',
    description:
      'A brief description of the project, what it does, and what problem it solves. Replace with your own project details.',
    tags: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
  },
  {
    title: '[Project Name 3]',
    description:
      'A brief description of the project, what it does, and what problem it solves. Replace with your own project details.',
    tags: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map(project => (
            <article key={project.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                <a href="#" className={styles.cardLink}>
                  View Project 🔗
                </a>
                <a href="#" className={styles.cardLink}>
                  Source Code 💻
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
