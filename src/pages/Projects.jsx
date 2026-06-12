const featuredProject = {
  id: 'shopping-bandhu',
  title: 'Shopping Bandhu',
  category: 'IoT · Product Development',
  period: 'Team Sigma · 60-hour workshop',
  summary:
    'A self-billing machine concept that combined embedded hardware with a lightweight web experience for cart and billing flow.',
  description:
    'Built during an IoT-based product development workshop, Shopping Bandhu brought hardware and software together into one practical retail idea. The project focused on creating a smoother billing experience by connecting sensing hardware with a simple customer-facing interface.',
  highlights: [
    'Worked with NodeMCU ESP8266, NFC tags, weight sensors, and servo motors.',
    'Built the web interface using HTML, CSS, and JavaScript.',
    'Improved teamwork, product thinking, and hands-on IoT problem solving.',
  ],
  stack: ['IoT', 'ESP8266', 'NFC', 'Arduino IDE', 'HTML', 'CSS', 'JavaScript'],
}

const projects = [
  {
    id: 'warehouse',
    title: 'Cycle Company Warehouse Dashboard',
    category: 'Data · Analytics',
    summary:
      'Designed a warehousing-oriented data model and built reporting views for business analysis.',
    description:
      'Worked on SQL, RDBMS concepts, galaxy schema modeling, and Power BI dashboards for a cycle company use case.',
    stack: ['SQL', 'RDBMS', 'Galaxy Schema', 'Power BI', 'Data Warehousing'],
    highlights: [
      'Modeled warehouse-friendly data structure.',
      'Built dashboards for business reporting.',
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
    id: 'quiz-microservice',
    title: 'Quiz Microservice',
    category: 'Backend · Microservices',
    summary:
      'A backend-oriented project exploring service-based quiz functionality.',
    description:
      'Built to understand modular backend design and service separation using Java and Spring Boot.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'REST API'],
    highlights: [
      'Explored service-oriented backend logic.',
      'Improved understanding of modular architecture.',
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

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M7 17 17 7M9 7h8v8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-shell" aria-labelledby="projects-heading">
        <header className="projects-header">
          <h1 id="projects-heading" className="projects-title">
            Projects
          </h1>
          <p className="projects-intro">
            A selection of work across IoT, data systems, Java backend
            development, React applications, and frontend builds.
          </p>
        </header>

        <section className="project-feature" aria-labelledby="featured-project-title">
          <div className="project-feature-copy">
            <span className="project-eyebrow">{featuredProject.category}</span>
            <h2 id="featured-project-title" className="project-feature-title">
              {featuredProject.title}
            </h2>
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
                <span>Concept</span>
                <strong>Self-Billing Machine</strong>
              </div>
              <div className="mini-panel">
                <span>Hardware</span>
                <strong>ESP8266 + Sensors</strong>
              </div>
              <div className="mini-panel">
                <span>Frontend</span>
                <strong>HTML · CSS · JS</strong>
              </div>
              <div className="mini-panel wide">
                <span>Focus</span>
                <strong>IoT integration with customer billing flow</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-grid-section" aria-labelledby="more-projects-title">
          <div className="projects-section-head">
            <h2 id="more-projects-title">More Builds</h2>
            <p>
              Supporting projects that reflect my range across data, backend,
              frontend, and programming fundamentals.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-top">
                  <span className="project-eyebrow">{project.category}</span>
                  <span className="project-icon" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
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