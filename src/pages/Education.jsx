const educationList = [
  {
    level: 'Post Graduation',
    institute: 'International Institute of Professional Studies',
    board: 'DAVV University',
    year: 'Pursuing',
    score: '8.5',
    description: 'Currently pursuing MCA to strengthen advanced technical knowledge.',
    marksheet: `${import.meta.env.BASE_URL}Marksheets/7th_sem.pdf`,
    marksheetType: 'pdf',
    order: 4,
  },
  {
    level: 'Graduation',
    institute: 'International Institute of Professional Studies',
    board: 'DAVV University',
    year: '2025',
    score: '8.45 CGPA',
    description: 'Completed BCA with focus on software development and problem solving.',
    marksheet: `${import.meta.env.BASE_URL}Marksheets/BCA_Degree.pdf`,
    marksheetType: 'pdf',
    order: 3,
  },
  {
    level: '12th',
    institute: 'Gyanodaya Vidhyalaya',
    board: 'MP Board',
    year: '2022',
    score: '77%',
    description: 'Completed higher secondary education in the Science with Maths stream.',
    marksheet: `${import.meta.env.BASE_URL}Marksheets/12th.pdf`,
    marksheetType: 'pdf',
    order: 2,
  },
  {
    level: '10th',
    institute: 'Sanmati Higher Secondary School',
    board: 'MP Board',
    year: '2020',
    score: '92.4%',
    description: 'Built a strong academic foundation in science and mathematics.',
    marksheet: `${import.meta.env.BASE_URL}Marksheets/10th.pdf`,
    marksheetType: 'pdf',
    order: 1,
  },
];

export default function Education() {
  const sortedEducationList = [...educationList].sort((a, b) => b.order - a.order);

  return (
    <main className="education-page">
      <section className="education-header">
        <h1>Educational Qualifications</h1>
        <p>
          A structured overview of my education along with marksheet previews.
        </p>
      </section>

      <section className="education-grid">
        {sortedEducationList.map((item) => (
          <article className="education-card" key={item.level}>
            <a
              className="marksheet-preview"
              href={item.marksheet}
              target="_blank"
              rel="noopener noreferrer"
              style={{ overflow: 'hidden', display: 'block', height: '260px' }}
            >
              {item.marksheetType === 'pdf' ? (
                <object
                  data={item.marksheet}
                  type="application/pdf"
                  className="marksheet-pdf-frame"
                  aria-label={`${item.level} marksheet`}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                >
                  <div className="marksheet-fallback">
                    <span>PDF</span>
                    <strong>Open Marksheet ↗</strong>
                  </div>
                </object>
              ) : (
                <img
                  src={item.marksheet}
                  alt={`${item.level} marksheet`}
                  loading="lazy"
                />
              )}

              <div className="marksheet-overlay">
                <span>View Marksheet ↗</span>
              </div>
            </a>

            <div className="education-details">
              <span className="education-level">{item.level}</span>
              <h3>{item.institute}</h3>
              <p className="education-board">{item.board}</p>

              <div className="education-meta">
                <div>
                  <span>Year</span>
                  <strong>{item.year}</strong>
                </div>
                <div>
                  <span>Score</span>
                  <strong>{item.score}</strong>
                </div>
              </div>

              <p className="education-description">{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}