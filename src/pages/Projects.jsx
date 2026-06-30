import React from 'react';

const featuredProjects = [
  {
    id: 'awn-dashboards',
    title: 'AWN Dashboards Enterprise Suite',
    category: 'Full Stack · Featured Project',
    period: 'React · Spring Boot · PostgreSQL · Redis · Docker',
    summary:
      'An enterprise-grade analytics dashboard suite featuring OLAP Cube pivoting',
    description:
      'This project implements a fully production-ready analytics suite. The Spring Boot backend supports dynamic, explicitly-casted native SQL filtering, Redis caching eviction hooks, and server-side pagination/sorting. The React frontend is built with glassmorphic UI components, a custom theme customizer, and an interactive OLAP pivot table analyzer.',
    highlights: [
      'Implemented explicit-cast PostgreSQL filtering to resolve null binding type coercion errors.',
      'Created a client-side OLAP pivot matrix with dynamic dimension rotation and heatmap highlights.',
      'Containerized the multi-stage build stack using Docker and Docker Compose.',
    ],
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Recharts', 'Docker', 'Axios'],
    techGrid: [
      { label: 'Frontend', value: 'React / Vite SPA' },
      { label: 'Backend', value: 'Spring Boot REST' },
      { label: 'Database', value: 'Neon PostgreSQL' },
    ],
    github: 'https://github.com/rushobhit/AWN-Dashboards',
    demo: 'https://github.com/rushobhit/AWN-Dashboards'
  },
  {
    id: 'quiz-app',
    title: 'Quiz App',
    category: 'Full Stack · Featured Project',
    period: 'React · Spring Boot · PostgreSQL',
    summary:
      'A full-stack quiz platform focused on quiz creation, management, authentication, and smooth participation flow for users and admins.',
    description:
      'This brings together React on the frontend and Spring Boot on the backend to support quiz workflows, admin management, authentication, and structured data handling in a practical application.',
    highlights: [
      'Built full-stack workflow with React frontend and Spring Boot backend.',
      'Worked on quiz management, admin flow, authentication, and API integration.',
      'Focused on scalable structure, clean UI flow, and real application usability.',
    ],
    stack: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'JWT'],
    techGrid: [
      { label: 'Frontend', value: 'React Router / CSS' },
      { label: 'Backend', value: 'Spring Security JWT' },
      { label: 'Database', value: 'PostgreSQL Entities' },
      { label: 'Architecture', value: 'Feature-Based Layer' }
    ],
    github: 'https://github.com/rushobhit/quiz-app-frontend',
    demo: 'https://rushobhit.github.io/quiz-app-frontend/'
  }
];

const secondaryProjects = [
  {
    id: 'shopping-bandhu',
    title: 'Shopping Bandhu',
    category: 'IoT · Product Development',
    summary:
      'A self-billing machine concept that combined embedded hardware with a lightweight web experience for cart and billing flow.',
    description:
      'Built during an IoT-based product development workshop, Shopping Bandhu brought hardware and software together into one practical retail idea. Connected sensing hardware with a simple customer-facing interface.',
    stack: ['IoT', 'ESP8266', 'NFC', 'Arduino IDE', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Worked with NodeMCU ESP8266, NFC tags, weight sensors, and servo motors.',
      'Built the web interface using HTML, CSS, and JavaScript.',
      'Improved teamwork, product thinking, and hands-on IoT problem solving.',
    ],
    github: 'https://github.com/rushobhit/shopping-bandhu',
    demo: 'https://rushobhit.github.io/shopping-bandhu/'
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Full Stack · Java',
    summary:
      'A practical application for tracking expenses and organizing spending data.',
    description:
      'Built as part of full-stack Java learning using Java, Spring Boot, and React with a focus on structured app flow and maintainable UI.',
    stack: ['Java', 'Spring Boot', 'React', 'REST API'],
    highlights: [
      'Connected frontend and backend flow.',
      'Focused on practical CRUD-style application structure.',
    ],
    github: 'https://github.com/rushobhit/Expense-Tracker'
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    category: 'Frontend',
    summary:
      'A UI-focused clone project built to strengthen layout, styling, and responsive design skills.',
    description:
      'Built with HTML, CSS, and JavaScript to practice interface replication, visual hierarchy, and frontend structure.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    highlights: [
      'Practiced responsive frontend implementation.',
      'Focused on clean recreation of a familiar interface.',
    ],
    github: 'https://github.com/rushobhit/DharaaTaal'
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    category: 'Java',
    summary:
      'A classic game build used to improve logic, event handling, and interactive programming.',
    description:
      'A smaller project that strengthened programming fundamentals and control-flow thinking through gameplay logic.',
    stack: ['Java', 'Logic Building', 'Problem Solving'],
    highlights: [
      'Improved event-driven thinking.',
      'Strengthened logic implementation skills.',
    ],
    github: 'https://github.com/rushobhit/snake-game-frontend',
    demo: 'https://rushobhit.github.io/snake-game-frontend/'
  },
  {
    id: 'cpp-dsa',
    title: 'C++ DSA Practice',
    category: 'DSA · Problem Solving',
    summary:
      'A focused body of work around data structures, algorithms, and core logic building.',
    description:
      'Used C++ to strengthen understanding of algorithms, pointers, STL, and problem-solving fundamentals.',
    stack: ['C++', 'DSA', 'STL', 'Algorithms'],
    highlights: [
      'Built strong problem-solving habits.',
      'Improved algorithmic thinking through regular practice.',
    ],
    GeeksForGeeks: 'https://www.geeksforgeeks.org/profile/rushobhit?tab=activity'
  },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-shell" aria-labelledby="projects-heading">
        <header className="projects-header" style={{ marginBottom: '48px' }}>
          <h1 id="projects-heading" className="projects-title">
            Projects
          </h1>
          <p>
            A selection of projects centered on full-stack application development,
            caching databases, dynamic OLAP pivot modeling, and embedded systems.
          </p>
        </header>

        {/* Featured Projects Spotlight Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '36px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
            Featured Spotlight Projects
          </h2>
          
          {featuredProjects.map((featured) => (
            <div key={featured.id} className="project-spotlight-card">
              <div className="spotlight-columns">
                {/* Column 1: Info */}
                <div className="spotlight-info-col">
                  <span className="project-eyebrow">{featured.category}</span>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '12px 0 6px 0', color: 'var(--text-primary)' }}>
                    {featured.title}
                  </h3>
                  <div className="project-meta" style={{ marginBottom: '14px' }}>{featured.period}</div>
                  <p className="project-feature-summary" style={{ fontSize: '15px', color: 'var(--text)' }}>
                    {featured.summary}
                  </p>
                  <p className="project-feature-description" style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7' }}>
                    {featured.description}
                  </p>

                  <div className="project-highlight-list" style={{ marginTop: '20px', gap: '8px' }}>
                    {featured.highlights.map((item) => (
                      <div key={item} className="project-highlight-item" style={{ fontSize: '13px' }}>
                        <span className="project-highlight-dot" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-stack" style={{ marginTop: '24px' }}>
                    {featured.stack.map((item) => (
                      <span key={item} className="project-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="project-actions" style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
                    {featured.github && (
                      <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        GitHub Code
                      </a>
                    )}
                    {featured.demo && (
                      <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Column 2: Tech Specs Grid */}
                <div className="spotlight-specs-col">
                  <div className="project-feature-orb project-feature-orb-a" />
                  <div className="project-feature-orb project-feature-orb-b" />
                  <div className="specs-grid">
                    {featured.techGrid.map((tech, tIdx) => (
                      <div key={tIdx} className="spec-mini-card">
                        <span>{tech.label}</span>
                        <strong>{tech.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Projects Grid Section */}
        <section className="projects-grid-section" aria-labelledby="more-projects-title">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <h3 id="more-projects-title" style={{ fontSize: '20px', fontWeight: 800 }}>
              More Projects
            </h3>
          </div>

          {/* Secondary projects grid */}
          <div className="projects-grid">
            {secondaryProjects.map((project) => (
              <article key={project.id} className="project-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="project-card-top">
                    <span className="project-eyebrow">{project.category}</span>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0' }}>{project.title}</h4>
                  </div>

                  <p className="project-card-summary">{project.summary}</p>
                  <p className="project-card-description">{project.description}</p>

                  <div className="project-mini-highlights">
                    {project.highlights.map((point) => (
                      <div key={point} className="project-mini-point">
                        <span className="project-highlight-dot" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-stack" style={{ marginTop: '16px' }}>
                    {project.stack.map((item) => (
                      <span key={item} className="project-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions buttons */}
                <div className="project-actions" style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 14px', fontSize: '12px' }}>
                      GitHub Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px' }}>
                      Live Demo
                    </a>
                  )}
                  {project.GeeksForGeeks && (
                    <a href={project.GeeksForGeeks} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px' }}>
                      GeeksForGeeks ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}