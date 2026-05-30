from pathlib import Path
base = Path('output/shobhit-react-portfolio')
base.mkdir(parents=True, exist_ok=True)
assets = base / 'src' / 'assets'
assets.mkdir(parents=True, exist_ok=True)
# copy image
from shutil import copyfile
copyfile('Shobhit.jpg', assets / 'shobhit.jpg')

files = {
base / 'package.json': '''{
  "name": "shobhit-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.2"
  }
}
''',
base / 'index.html': '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shobhit Awasthi | Portfolio</title>
    <meta name="description" content="Portfolio website for Shobhit Awasthi" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
''',
base / 'vite.config.js': '''import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
''',
base / 'src' / 'main.jsx': '''import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
''',
base / 'src' / 'App.jsx': '''import { useEffect, useState } from 'react'

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
        <div className="brand">SA / portfolio</div>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
        </nav>
        <div className="actions">
          <a className="social-link" href="https://github.com/rushobhit" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <IconGitHub />
          </a>
          <button className="icon-btn" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">
            {theme === 'light' ? '☾' : '☼'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <aside className="hero-card" aria-label="Profile image tile">
            <img src="/src/assets/shobhit.jpg" alt="Portrait of Shobhit Awasthi" />
          </aside>

          <div className="hero-copy">
            <div className="kicker">Aspiring full stack developer</div>
            <h1>Shobhit<br />Awasthi</h1>
            <p className="headline-sub">Java, Spring, React, cloud, and SQL with a builder’s mindset.</p>
            <p className="summary">I am a BCA graduate from IIPS DAVV Indore and currently pursuing MCA while building toward a career in full-stack development. I enjoy creating clean software experiences, learning fast, and turning practical ideas into robust applications.</p>
            <div className="hero-actions">
              <a className="hero-link primary" href="https://github.com/rushobhit" target="_blank" rel="noopener noreferrer">View GitHub</a>
              <a className="hero-link" href="#about">Explore Profile</a>
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
        </section>

        <section className="lower" id="about">
          <article className="panel">
            <h2>About me</h2>
            <p>Hey there! Welcome to my portfolio. I was born in Badnawar and studied through Kashyap Vidhyapeeth, Sanmati Higher Secondary, and Gyanodaya Vidhyalaya before moving deeper into tech at I.I.P.S. D.A.V.V. Indore. I like building clean, functional, and useful digital experiences, whether that means developing websites, writing application logic, or improving the structure behind the interface.</p>
          </article>

          <article className="panel" id="skills">
            <h2>Core stack</h2>
            <p>I keep my learning grounded in practical development and problem solving, with a current emphasis on full-stack Java development.</p>
            <div className="skill-list">
              {skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}
            </div>
          </article>
        </section>
      </main>

      <footer id="resume">
        <p className="footer-note">This homepage is intentionally custom, desktop-first, and minimal so it feels like your own identity rather than a template copy.</p>
        <div className="footer-socials">
          <a className="social-link" href="https://github.com/rushobhit" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><IconGitHub /></a>
          <a className="social-link" href="https://www.linkedin.com/in/rushobhit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><IconLinkedIn /></a>
        </div>
      </footer>
    </div>
  )
}
''',
base / 'src' / 'index.css': '''@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=cabinet-grotesk@400,500,700,800&display=swap');

:root, [data-theme="light"] {
  --bg: #ece9e3;
  --surface: rgba(255, 255, 255, 0.52);
  --surface-strong: rgba(255, 255, 255, 0.72);
  --text: #171614;
  --muted: #67635d;
  --border: rgba(23, 22, 20, 0.12);
  --border-strong: rgba(23, 22, 20, 0.24);
  --accent: #17313b;
  --shadow: 0 22px 60px rgba(38, 32, 24, 0.12);
}

[data-theme="dark"] {
  --bg: #111110;
  --surface: rgba(28, 28, 27, 0.74);
  --surface-strong: rgba(36, 36, 34, 0.9);
  --text: #f3efe9;
  --muted: #aaa49b;
  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.2);
  --accent: #b7d3db;
  --shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(255,255,255,0.7), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.2), transparent 40%), var(--bg);
  color: var(--text);
  font-family: 'Satoshi', sans-serif;
}

a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
button { font: inherit; cursor: pointer; }

.shell {
  width: min(1280px, calc(100% - 64px));
  margin: 0 auto;
  padding: 26px 0 60px;
}

.topbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 18px 22px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--surface);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
  position: sticky;
  top: 18px;
  z-index: 30;
}

.brand {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 28px;
}

.nav a { color: var(--muted); position: relative; transition: color 180ms ease; }
.nav a::after { content: ''; position: absolute; left: 0; bottom: -7px; width: 100%; height: 1px; background: currentColor; transform: scaleX(0.25); opacity: 0; transition: transform 220ms cubic-bezier(.2,.8,.2,1), opacity 220ms ease; }
.nav a:hover, .meta-link:hover { color: var(--text); }
.nav a:hover::after { transform: scaleX(1); opacity: 1; }

.actions { justify-self: end; display: flex; gap: 12px; align-items: center; }
.icon-btn, .social-link, .hero-link {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 18px; border: 1px solid var(--border);
  background: var(--surface-strong);
  transition: transform 240ms cubic-bezier(.18,.89,.32,1.12), border-color 180ms ease, box-shadow 180ms ease;
}
.icon-btn:hover, .social-link:hover, .hero-link:hover, .detail-card:hover, .panel:hover { transform: translateY(-4px) scale(1.015); border-color: var(--border-strong); box-shadow: 0 18px 38px rgba(38, 32, 24, 0.12); }
.icon-btn, .social-link { width: 46px; height: 46px; color: var(--text); }
.social-link svg { width: 21px; height: 21px; }

.hero {
  display: grid;
  grid-template-columns: minmax(220px, 260px) 1fr;
  gap: 12px;
  align-items: start;
  min-height: calc(100vh - 140px);
  padding: 18px 12px 18px;
}
.hero-card {
  width: min(260px, 100%);
  aspect-ratio: 1 / 1;
  padding: 14px;
  border-radius: 34px;
  background: linear-gradient(145deg, rgba(255,255,255,0.44), rgba(255,255,255,0.18));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  margin-top: 0;
  transition: transform 260ms cubic-bezier(.18,.89,.32,1.12), border-color 180ms ease, box-shadow 180ms ease;
  animation: boxBreathe 4.2s ease-in-out infinite;
}
.hero-card:hover { transform: translateY(-5px) rotate(-1.4deg) scale(1.012); border-color: var(--border-strong); }
.hero-card img { width: 100%; height: 100%; object-fit: cover; border-radius: 26px; }
.hero-copy { max-width: 760px; justify-self: center; text-align: center; padding-top: 8px; }
.kicker { display: inline-flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); color: var(--muted); font-size: 0.9rem; margin-bottom: 22px; }
.kicker::before { content: ''; width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
h1 { margin: 0; font-family: 'Cabinet Grotesk', sans-serif; font-size: clamp(4rem, 7vw, 7.2rem); line-height: 0.94; letter-spacing: -0.06em; text-wrap: balance; }
.headline-sub { margin: 18px auto 0; max-width: 18ch; font-size: clamp(1.15rem, 1rem + 0.5vw, 1.45rem); line-height: 1.5; color: var(--muted); }
.summary { margin: 28px auto 0; max-width: 62ch; font-size: 1.04rem; line-height: 1.9; color: var(--text); }
.hero-actions { display: flex; justify-content: center; gap: 16px; margin-top: 34px; flex-wrap: wrap; }
.hero-link { min-height: 52px; padding: 0 20px; font-weight: 600; }
.hero-link.primary { background: var(--accent); color: #f5f4f0; border-color: transparent; }
.info-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 42px; }
.detail-card { padding: 22px; border-radius: 26px; border: 1px solid var(--border); background: var(--surface); backdrop-filter: blur(12px); transition: transform 240ms cubic-bezier(.18,.89,.32,1.12), border-color 180ms ease, box-shadow 180ms ease; animation: boxBreathe 4.8s ease-in-out infinite; }
.detail-card span { display: block; margin-bottom: 8px; font-size: 0.84rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
.detail-card strong { font-family: 'Cabinet Grotesk', sans-serif; font-size: 1.2rem; font-weight: 700; letter-spacing: -0.02em; }
.lower { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 24px; margin-top: 18px; }
.panel { padding: 28px; border-radius: 30px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); backdrop-filter: blur(16px); transition: transform 240ms cubic-bezier(.18,.89,.32,1.12), border-color 180ms ease, box-shadow 180ms ease; animation: boxBreathe 5.2s ease-in-out infinite; }
.panel h2 { margin: 0 0 16px; font-family: 'Cabinet Grotesk', sans-serif; font-size: 1.8rem; letter-spacing: -0.03em; }
.panel p { margin: 0; line-height: 1.9; color: var(--muted); font-size: 1rem; }
.skill-list { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; }
.chip { padding: 10px 14px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface-strong); font-size: 0.92rem; color: var(--text); }
footer { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-top: 26px; padding: 18px 10px 0; color: var(--muted); }
.footer-note { max-width: 44ch; line-height: 1.7; }
.footer-socials { display: flex; gap: 12px; }

@keyframes fadeRise { from { opacity: 0; transform: translateY(32px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes boxBreathe { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-9px) scale(1.04); } }

@media (max-width: 1100px) {
  .hero, .lower { grid-template-columns: 1fr; }
  .hero { min-height: auto; }
  .hero-card { margin: 0 auto; }
  .shell { width: min(100% - 36px, 1180px); }
}
@media (max-width: 820px) {
  .topbar { grid-template-columns: 1fr; gap: 16px; justify-items: center; }
  .actions { justify-self: center; }
  .info-grid { grid-template-columns: 1fr; }
  h1 { font-size: clamp(2.8rem, 12vw, 4.6rem); }
}
@media (max-width: 560px) {
  .shell { width: min(100% - 24px, 1180px); padding-top: 18px; }
  .nav { flex-wrap: wrap; gap: 16px; }
  .hero { padding-top: 34px; gap: 28px; }
  .hero-actions { flex-direction: column; }
  .hero-link { width: 100%; }
  .panel { padding: 22px; }
}
'''
}
for path, content in files.items():
    path.write_text(content)
print(base)
