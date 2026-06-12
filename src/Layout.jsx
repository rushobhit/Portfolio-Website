import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="theme-icon sun">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" />
      <path d="M2 12h2" /><path d="M20 12h2" />
      <path d="m4.9 4.9 1.4 1.4" /><path d="m17.7 17.7 1.4 1.4" />
      <path d="m4.9 19.1 1.4-1.4" /><path d="m17.7 6.3 1.4-1.4" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="theme-icon moon">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

function IconGmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
      <path d="M4 18l5.5-5" />
      <path d="M20 18l-5.5-5" />
    </svg>
  )
}

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13V10.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  )
}

export default function Layout() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `social-link${isActive ? ' active-home' : ''}`}
            aria-label="Home"
          >
            <IconHome />
          </NavLink>
          Shobhit Awasthi
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Experience
          </NavLink>
          <NavLink
            to="/certificates"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Certifications
          </NavLink>
        </nav>

        <div className="actions">
          <a className="social-link" href="https://www.linkedin.com/in/rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <IconLinkedIn />
          </a>
          <a className="social-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rushobhit@gmail.com"
            target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <IconGmail />
          </a>
          <a className="social-link" href="https://github.com/rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <IconGitHub />
          </a>
          <button
            className="icon-btn theme-toggle"
            type="button"
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className={`theme-icon-wrapper ${theme}`}>
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </span>
          </button>
        </div>
      </header>

      <Outlet />
    </div>
  )
}