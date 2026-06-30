const certificates = [
  { title: 'nVIDIA Applications of A.I.', file: `${import.meta.env.BASE_URL}Certificates/cert-04.png`, type: 'image' },
  { title: 'Software Engineer Intern', file: `${import.meta.env.BASE_URL}Certificates/cert-05.pdf`, type: 'pdf' },
  { title: 'Python(Basic)', file: `${import.meta.env.BASE_URL}Certificates/cert-06.pdf`, type: 'pdf' },
  { title: 'Young Turks Merit', file: `${import.meta.env.BASE_URL}Certificates/cert-1.jpeg`, type: 'image' },  
  { title: 'IIPS COMET 2025', file: `${import.meta.env.BASE_URL}Certificates/cert-2.jpeg`, type: 'image' },  
  { title: 'IoT Workshop', file: `${import.meta.env.BASE_URL}Certificates/cert-3.jpeg`, type: 'image' },  
  { title: 'AWS Cloud Computing Workshop', file: `${import.meta.env.BASE_URL}Certificates/cert-4.pdf`, type: 'pdf' },
  { title: 'TCS-Young Professionals', file: `${import.meta.env.BASE_URL}Certificates/cert-5.pdf`, type: 'pdf' },
  { title: 'CSS(Basic)', file: `${import.meta.env.BASE_URL}Certificates/cert-6.pdf`, type: 'pdf' },
  { title: 'Infosys RWD Course', file: `${import.meta.env.BASE_URL}Certificates/cert-7.pdf`, type: 'pdf' },
  { title: 'SQL(Intermediate)', file: `${import.meta.env.BASE_URL}Certificates/cert-8.pdf`, type: 'pdf' },
  { title: 'SQL(Basic)', file: `${import.meta.env.BASE_URL}Certificates/cert-9.pdf`, type: 'pdf' },
  { title: 'SQL & DBMS', file: `${import.meta.env.BASE_URL}Certificates/cert-10.pdf`, type: 'pdf' },
];

export default function Certificates() {
  return (
    <main className="certificates-page">
      <section className="cert-header">
        <h3>Take a gaze on my achievements so far...</h3>
      </section>

      <section className="certificate-grid">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            className="certificate-card"
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="certificate-image" style={{ overflow: 'hidden', height: '220px' }}>
              {cert.type === 'pdf' ? (
                <object
                  data={cert.file}
                  type="application/pdf"
                  className="certificate-pdf-frame"
                  aria-label={cert.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                >
                  <div className="marksheet-fallback">
                    <span>PDF</span>
                    <strong>Open Certificate ↗</strong>
                  </div>
                </object>
              ) : (
                <img
                  src={cert.file}
                  alt={cert.title}
                  loading="lazy"
                />
              )}
            </div>

            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <span>{cert.type === 'pdf' ? 'Open PDF ↗' : 'View Certificate ↗'}</span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}