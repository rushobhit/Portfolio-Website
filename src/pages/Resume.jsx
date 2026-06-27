const resumeFile = `${import.meta.env.BASE_URL}Resume/Shobhit_Awasthi_Resume.pdf`

export default function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-header">
        <h1>My Resume</h1>
        <p>
          A concise overview of my academic background, technical skills, projects,
          and professional experience in one place.
        </p>
      </section>

      <section className="resume-layout">
        <div className="resume-preview-card">
          <div className="resume-preview-top">
            <span className="resume-preview-type">PDF Document</span>
          </div>

          <div className="resume-preview-frame-wrap">
            <object
              data={resumeFile}
              type="application/pdf"
              className="resume-preview-frame"
              aria-label="Resume PDF Preview"
            >
              <div className="resume-fallback">
                <span>PDF Preview Not Supported</span>
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-inline-link"
                >
                  Open Resume ↗
                </a>
              </div>
            </object>
          </div>
        </div>

        <aside className="resume-side-panel">
          <div className="resume-info-card">
            <span className="resume-info-kicker">Overview</span>
            <p>
              This resume highlights my education, full-stack development skills,
              project work, and practical experience with React, Spring Boot,
              databases, deployment, and authentication workflows.
            </p>
          </div>

          <div className="resume-action-card">
            <span className="resume-info-kicker">Actions</span>
            <div className="resume-actions">
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn primary"
              >
                View Resume ↗
              </a>

              <a
                href={resumeFile}
                download
                className="resume-btn"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}