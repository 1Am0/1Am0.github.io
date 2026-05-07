import styles from './Projects.module.css';

const projects = [
  {
    title: 'Chess Canopy',
    description:
      'Open-source full-stack chess analyzer built with Python, JavaScript, and API integration. Features a pattern recognition system analyzing 3,800+ openings across large datasets for competitive advantage.',
    tags: ['Python', 'JavaScript', 'ML', 'API'],
    liveUrl: 'https://github.com/1Am0/Chess-Canopy',
    codeUrl: 'https://github.com/1Am0/Chess-Canopy',
  },
  {
    title: 'Molar Mass Calculator',
    description:
      'Next.js application that automates molecular calculations aligned with AP Chemistry standards. Integrated a precise database to help students solve complex lab problems efficiently.',
    tags: ['Next.js', 'React', 'Chemistry', 'Database'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Game Development Projects',
    description:
      'Created various game development projects exploring game mechanics, graphics programming, and interactive experiences. Focused on learning game engines and physics systems.',
    tags: ['Game Dev', 'Physics', 'Graphics', 'Interactive'],
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
                <a
                  href={project.liveUrl ?? '#'}
                  className={styles.cardLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project 🔗
                </a>
                <a
                  href={project.codeUrl ?? '#'}
                  className={styles.cardLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
