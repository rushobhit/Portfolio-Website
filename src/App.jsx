import { useEffect, useState } from 'react'

const skills = ['Java', 'Spring Boot', 'React', 'SQL', 'Cloud', 'Python', 'HTML', 'CSS', 'JavaScript', 'DBMS']

const infoCards = [
  { label: 'Education', value: 'BCA graduate, MCA undergrad' },
  { label: 'Location', value: 'Indore, Madhya Pradesh' },
  { label: 'Focus', value: 'Backend + frontend + cloud' },
]

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 18.8 5 4.8 4.8 0 0 0 18.7 1S17.6.7 15 2.5a13.4 13.4 0 0 0-6 0C6.4.7 5.3 1 5.3 1A4.8 4.8 0 0 0 5.2 5 5.2 5.2 0 0 0 3.8 8.8c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.72h2.67V18H5.6V9.72Zm4.35 0h2.56v1.13h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.08V18h-2.67v-3.97c0-.95-.02-2.18-1.33-2.18-1.33 0-1.54 1.04-1.54 2.11V18H9.95V9.72Z" />
    </svg>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">Shobhit Awasthi</div>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
        </nav>

        <div className="actions">
	<a
            className="social-link"
            href="https://www.linkedin.com/in/rushobhit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <IconLinkedIn />
          </a>
          <a
            className="social-link"
            href="https://github.com/rushobhit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <IconGitHub />
          </a>
          <button
            className="icon-btn"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '☾' : '☼'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-row">
            <aside className="hero-card" aria-label="Profile image tile">
              <img src="./Shobhit.jpeg" alt="Portrait of Shobhit Awasthi" />
            </aside>

            <div className="hero-copy">
              <h1>Shobhit Awasthi</h1>
              <p className="headline-sub">Java, Spring Boot, React, cloud, and SQL.</p>
              <p className="summary">
                BCA graduate from IIPS DAVV Indore and aspiring full-stack developer focused on building practical web apps with Java, Spring Boot, React, cloud, and SQL.
              </p>

              <div className="hero-actions">
                <a
                  className="hero-link"
                  href="https://github.com/rushobhit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
                <a className="hero-link" href="#about">
                  Explore Profile
                </a>
              </div>

              <div className="info-grid">
                {infoCards.map((card) => (
                  <article className="detail-card" key={card.label}>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lower" id="about">
          <article className="panel">
            <h2>About me</h2>
            <p>
              Hey there! Welcome to my portfolio. I was born in Badnawar and studied through Kashyap Vidhyapeeth, Sanmati Higher Secondary, and Gyanodaya Vidhyalaya before moving deeper into tech at I.I.P.S. D.A.V.V. Indore. I like building clean, functional, and useful digital experiences, whether that means developing websites, writing application logic, or improving the structure behind the interface.
            </p>
          </article>

          <article className="panel" id="skills">
            <h2>Core stack</h2>
            <p>I keep my learning grounded in practical development and problem solving, with a current emphasis on full-stack Java development.</p>
            <div className="skill-list">
              {skills.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer id="resume">
        <div className="footer-socials">
          <a
            className="social-link"
            href="https://github.com/rushobhit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <IconGitHub />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/rushobhit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <IconLinkedIn />
          </a>
        </div>
      </footer>
    </div>
  )
}