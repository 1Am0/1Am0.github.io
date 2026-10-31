import type { ImageMetadata } from 'astro';

export const site = {
  name: 'Anthony Mokhov',
  title: 'Anthony Mokhov — Electrical Engineering Portfolio',
  description:
    'Electrical engineering portfolio of Anthony Mokhov: embedded systems, circuit design, and the software that drives them.',
  location: 'San Diego, CA',
  school: 'Patrick Henry High School',
  email: 'anthony.mokhov@gmail.com',
  github: 'https://github.com/1Am0',
  linkedin: 'https://www.linkedin.com/in/anthony-mokhov',
  // Set to '/resume.pdf' once the file is added to public/.
  resume: null as string | null,
  // Optional one-line status shown in the hero, e.g. 'Bringing up rev B of my ESP32 sensor board'.
  now: null as string | null,
  // Optional headshot: import it at the top of this file and set it here, e.g.
  //   import headshot from '../assets/headshot.jpg';  ...  photo: headshot,
  photo: null as ImageMetadata | null,
};

// Details below were carried over from the previous version of the site.
// TODO(Anthony): confirm they're current and set the graduation year.
export const education = {
  school: 'Patrick Henry High School',
  location: 'San Diego, CA',
  graduation: null as string | null, // e.g. 'Class of 2027'
  details: ['4.75 GPA', '7 AP courses', 'Ranked 3rd in class'],
  coursework: ['AP Computer Science A'],
};

// TODO(Anthony): confirm the Hardware and Embedded entries match what you've actually used.
export const skillGroups = [
  { name: 'Hardware', items: ['Circuit analysis', 'PCB layout', 'Soldering & rework', 'Multimeter & oscilloscope'] },
  { name: 'Embedded', items: ['C / C++', 'Arduino', 'Microcontroller peripherals', 'Serial protocols'] },
  { name: 'Software', items: ['Python', 'Java', 'TypeScript / JavaScript', 'SQL'] },
  { name: 'Tools', items: ['Git & GitHub', 'React / Next.js', 'Vite', 'REST APIs'] },
];

export const experience = [
  {
    role: 'SAT Math Tutor',
    org: 'Schoolhouse & College Board',
    period: 'Present',
    detail: 'Tutor high school students for the SAT math section through nonprofit programs.',
  },
  {
    role: 'Tournament Assistant',
    org: 'San Diego Chess Club',
    period: '2024 – Present',
    detail: 'Help run monthly scholastic tournaments of 100+ players: pairings, registration, and rules disputes.',
  },
  {
    role: 'Volunteer Math Tutor',
    org: 'Thinkist',
    period: '2025',
    detail: 'Taught weekly middle-school math sessions after formal tutor training; 50+ volunteer hours.',
  },
];

export const awards = [
  { name: 'AP Scholar with Distinction', issuer: 'College Board', url: null },
  {
    name: 'Java Programming',
    issuer: 'Credly',
    url: 'https://www.credly.com/badges/010ae9ae-9edf-4365-aa7b-fcfdddcd6881/public_url',
  },
  { name: 'US Chess Expert', issuer: 'US Chess Federation', url: null },
];
