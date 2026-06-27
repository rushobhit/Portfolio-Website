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


function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.1 8.1L23.3 22h-6.9l-5.4-7-6.1 7H2l7.7-8.9L.7 2h7.1l5 6.5L18.9 2Zm-1.2 18h1.9L5.7 3.9H3.7z" />
    </svg>
  )
}

function IconDiscord() {
  return (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
      <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.61.54 80.24A105.73 105.73 0 0 0 32.71 96.36a77.7 77.7 0 0 0 6.89-11.25 68.42 68.42 0 0 1-10.84-5.18c.91-.67 1.8-1.37 2.66-2.1a75.57 75.57 0 0 0 64.32 0c.87.73 1.76 1.43 2.66 2.1a68.68 68.68 0 0 1-10.86 5.19 77 77 0 0 0 6.89 11.24A105.25 105.25 0 0 0 126.6 80.22c2.65-27.38-4.52-51.12-18.9-72.15ZM42.45 65.69c-6.18 0-11.26-5.66-11.26-12.61s4.98-12.61 11.26-12.61c6.33 0 11.36 5.71 11.26 12.61 0 6.95-4.98 12.61-11.26 12.61Zm42.24 0c-6.18 0-11.26-5.66-11.26-12.61s4.98-12.61 11.26-12.61c6.33 0 11.36 5.71 11.26 12.61 0 6.95-4.93 12.61-11.26 12.61Z" />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.5.4a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
    </svg>
  )
}


function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.8 4.6 18.7 19c-.2 1-.8 1.2-1.7.7l-4.7-3.5-2.3 2.2c-.3.3-.6.6-1.1.6l.3-5 9.1-8.2c.4-.3-.1-.5-.6-.2L7.2 12.5l-4.9-1.5c-1-.3-1-1 0-1.4L20 3.3c.8-.3 1.5.2 1.8 1.3Z" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.36c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.76.13.18 1.87 2.86 4.54 4.01.63.27 1.12.43 1.5.55.63.2 1.21.17 1.66.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.24-.18-.51-.31Z" />
      <path d="M16.02 3C8.83 3 3 8.82 3 16c0 2.53.73 4.99 2.1 7.11L3 29l6.07-1.99A12.93 12.93 0 0 0 16.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3Zm0 23.67c-2.08 0-4.12-.56-5.9-1.63l-.42-.25-3.6 1.18 1.18-3.51-.27-.44A10.63 10.63 0 1 1 16.02 26.67Z" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 320 512" fill="currentColor" aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
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
          <NavLink
            to="/education"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Education
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Resume
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
      <footer id="resume">
        <div className="footer-socials">
          <p>Lets Connect:</p>
          <a className="social-link" href="https://www.linkedin.com/in/rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <IconLinkedIn />
          </a>
          <a className="social-link" href="https://github.com/rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <IconGitHub />
          </a>
          <a className="social-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rushobhit@gmail.com"
            target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <IconGmail />
          </a>
          <a className="social-link" href="https://t.me/rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <IconTelegram />
          </a>
          <a className="social-link" href="https://wa.me/917773844590"
            target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <IconWhatsApp />
          </a>
          <a className="social-link" href="https://discord.gg/Tvu22nZc"
            target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <IconDiscord />
          </a>
          <a className="social-link" href="https://x.com/rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="X profile">
            <IconX />
          </a>
          <a className="social-link" href="https://www.youtube.com/@rushobhit"
            target="_blank" rel="noopener noreferrer" aria-label="YouTube channel">
            <IconYouTube />
          </a>
          <a className="social-link"
            href="https://www.facebook.com/share/18f27f52TY/?mibextid=wwXIfr"
            target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <IconFacebook />
          </a>
        </div>
      </footer>
    </div>
  )
}