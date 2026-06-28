const featuredProject = {
  id: 'quiz-app',
  title: 'Quiz App',
  category: 'Full Stack · Main Project',
  period: 'React · Spring Boot · PostgreSQL',
  summary:
    'A full-stack quiz platform focused on quiz creation, management, authentication, and smooth participation flow for users and admins.',
  description:
    'This is my primary project and the strongest representation of my full-stack development work. It brings together React on the frontend and Spring Boot on the backend to support quiz workflows, admin management, authentication, and structured data handling in a practical application.',
  highlights: [
    'Built full-stack workflow with React frontend and Spring Boot backend.',
    'Worked on quiz management, admin flow, authentication, and API integration.',
    'Focused on scalable structure, clean UI flow, and real application usability.',
  ],
  stack: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'JWT'],
}

const projects = [
  {
    id: 'data-warehouse',
    title: 'Cycle Company Warehouse Dashboard',
    category: 'Data Warehouse · Main Project',
    summary:
      'Designed a warehousing-oriented data model and built reporting views for business analysis.',
    description:
      'This is my second major project, centered on data warehousing concepts, schema design, SQL analysis, and dashboard-based reporting for a cycle company use case.',
    stack: ['SQL', 'RDBMS', 'Galaxy Schema', 'Power BI', 'Data Warehousing'],
    highlights: [
      'Modeled warehouse-friendly data structure for analysis.',
      'Worked on schema design and reporting-oriented business views.',
      'Built dashboards for decision-support and business reporting.',
    ],
  },
  {
    id: 'shopping-bandhu',
    title: 'Shopping Bandhu',
    category: 'IoT · Product Development',
    summary:
      'A self-billing machine concept that combined embedded hardware with a lightweight web experience for cart and billing flow.',
    description:
      'Built during an IoT-based product development workshop, Shopping Bandhu brought hardware and software together into one practical retail idea. The project focused on creating a smoother billing experience by connecting sensing hardware with a simple customer-facing interface.',
    stack: ['IoT', 'ESP8266', 'NFC', 'Arduino IDE', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Worked with NodeMCU ESP8266, NFC tags, weight sensors, and servo motors.',
      'Built the web interface using HTML, CSS, and JavaScript.',
      'Improved teamwork, product thinking, and hands-on IoT problem solving.',
    ],
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
  },
]


export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-shell" aria-labelledby="projects-heading">
        <header className="projects-header">
          <h1 id="projects-heading" className="projects-title">
            Projects
          </h1>
          <p className="projects-intro">
            A selection of projects centered on full-stack quiz application development,
            data warehousing, backend architecture, and practical frontend implementation.
          </p>
        </header>

        <section className="project-feature" aria-labelledby="featured-project-title">
          <div className="project-feature-copy">
            <span className="project-eyebrow">{featuredProject.category}</span>

            <div className="project-meta">{featuredProject.period}</div>
            <p className="project-feature-summary">{featuredProject.summary}</p>
            <p className="project-feature-description">{featuredProject.description}</p>

            <div className="project-highlight-list">
              {featuredProject.highlights.map((item) => (
                <div key={item} className="project-highlight-item">
                  <span className="project-highlight-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="project-stack">
              {featuredProject.stack.map((item) => (
                <span key={item} className="project-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="project-feature-panel" aria-hidden="true">
            <div className="project-feature-orb project-feature-orb-a" />
            <div className="project-feature-orb project-feature-orb-b" />
            <div className="project-feature-grid">
              <div className="mini-panel large">
                <span>Main Project</span>
                <strong>Quiz Platform</strong>
              </div>
              <div className="mini-panel">
                <span>Frontend</span>
                <strong>React</strong>
              </div>
              <div className="mini-panel">
                <span>Backend</span>
                <strong>Spring Boot</strong>
              </div>
              <div className="mini-panel wide">
                <span>Focus</span>
                <strong>Quiz management, admin flow, APIs, and authentication</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-grid-section" aria-labelledby="more-projects-title">
          

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-top">
                  <span className="project-eyebrow">{project.category}</span>
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

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item} className="project-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}