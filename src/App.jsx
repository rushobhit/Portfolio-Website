import { Link } from 'react-router-dom'
import shobhitImage from './assets/Shobhit.jpeg'

const skills = ['Java', 'Spring Boot', 'React', 'SQL', 'Cloud', 'Python', 'HTML', 'CSS', 'JavaScript', 'DBMS']

const infoCards = [
  { label: 'Education', value: 'BCA graduate, MCA undergrad' },
  { label: 'Location', value: 'Indore, Madhya Pradesh' },
  { label: 'Focus', value: 'Backend + Frontend + Cloud + Data Analytics' },
]

export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-row">
          <aside className="hero-card" aria-label="Profile image tile">
            <img src={shobhitImage} alt="Portrait of Shobhit Awasthi" />
            </aside>

          <div className="hero-copy">
            <br />
            <br />
            <br />
            <h1>Shobhit Awasthi</h1>
            <br />
            <p className="summary">
              MCA udergrad at I.I.P.S., D.A.V.V., Indore and aspiring full-stack developer focused on
              building practical web apps with Java, Spring Boot, React, Cloud, Power B.I., Excel and SQL.
            </p>
<br /><br />
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
      <br />

      <section className="lower">
  <article className="panel">
    <h2>About me</h2>
    <p>
      I am Shobhit Awasthi, a BCA graduate from IIPS DAVV Indore and currently pursuing my MCA, with a strong passion for building technology that is practical, dependable, and meaningful. I was born in Badnawar, and my journey through Kashyap Vidhyapeeth, Sanmati Higher Secondary, Gyanodaya Vidhyalaya, and later I.I.P.S. D.A.V.V. Indore has shaped the way I approach learning and growth. It taught me to value consistency, curiosity, and the discipline required to keep improving every day.
      <br /><br />
      Over time, I have built a strong interest in software development, cloud computing, and data systems. I enjoy creating clean, functional digital experiences, whether that means developing web applications, writing backend logic, designing microservices, or working on structured data solutions. I have built Power BI dashboards, prepared a fully functional data warehouse for a cycle company, and developed a quiz microservice, all of which strengthened my ability to solve real-world problems with technology.
      <br /><br />
      My experience as a remote Azure intern at Microsoft, along with multiple other remote internships, gave me valuable exposure to professional workflows, collaboration, and modern tools used in real development environments. These experiences not only improved my technical skills but also helped me become more adaptable, independent, and confident in taking ownership of my work.
      <br /><br />
      I am especially drawn to Java, Spring Boot, React, cloud technologies, and SQL, and I continuously try to deepen my understanding of how scalable and efficient systems are built. For me, technology is not only about writing code, but about creating solutions that are useful, maintainable, and capable of making a real difference. My goal is to keep growing into a well-rounded full-stack developer who can contribute meaningfully across development, cloud, and data-driven applications.
    </p>
  </article>
</section>
    </main>
  )
}