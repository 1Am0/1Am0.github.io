import { useEffect } from 'react';
import styles from './Skills.module.css';

declare global {
  interface Window {
    Credly?: {
      embed?: {
        lib?: {
          render: (element: HTMLElement) => void;
        };
      };
    };
  }
}

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
    label: 'USChess Expert Title',
  },
  {
    id: '721a145f-805e-486a-b4a1-b34f11546546',
    label: 'International Piano Competitions',
  },
  {
    id: '70932542-e7f2-4a2d-91e9-d21d4feb4adf',
    label: 'AP Scholar with Distinction',
  },
];

export default function Skills() {
  useEffect(() => {
    // Ensure the Credly embed script runs after badges are mounted.
    // We append a cache-busted script tag so the embed script executes and
    // replaces elements with data-share-badge-id into iframes.
    const src = 'https://cdn.credly.com/assets/utilities/embed.js?_=' + Date.now();
    const existing = document.querySelector<HTMLScriptElement>("script[src*='cdn.credly.com/assets/utilities/embed.js']");
    // If an existing non-busted script exists, remove it so we can re-run embed logic.
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.onload = () => console.debug('Credly embed script loaded');
    script.onerror = (e) => console.error('Credly script failed to load', e);
    document.body.appendChild(script);

    return () => {
      // cleanup injected script on unmount
      try {
        script.remove();
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

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
        <div id="credly-container" className={styles.certifications}>
          {certifications.map((cert, index) => (
            <div
              key={`cert-${index}`}
              className={`credly-badge ${styles.certificationBadge}`}
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
