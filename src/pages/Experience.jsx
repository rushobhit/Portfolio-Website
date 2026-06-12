import { useEffect, useMemo, useState } from 'react'

const nodes = [
  {
    id: 'java',
    title: 'Java',
    subtitle: 'Backend Development',
    company: 'Academic & Personal Projects',
    duration: 'Since 2022',
    description:
      'Built console-based and web applications using Core Java, OOP principles, collections, exception handling, JDBC, and backend logic for practical development projects.',
    skills: ['Core Java', 'OOP', 'Collections', 'JDBC', 'Problem Solving'],
    assets: [
      {
        type: 'certificate',
        fileType: 'pdf',
        label: 'Completion Certificate',
        file: `${import.meta.env.BASE_URL}Certificates/cert-12.pdf`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-12-preview.png`,
      },
      {
        type: 'image',
        fileType: 'image',
        label: 'Joining Proof',
        file: `${import.meta.env.BASE_URL}Certificates/cert-11.png`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-11.png`,
      },
    ],
  },
  {
    id: 'cpp',
    title: 'C++',
    subtitle: 'Systems & Logic',
    company: 'Academic Coursework',
    duration: '2022 — 2023',
    description:
      'Worked with C++ for programming fundamentals, data structures, algorithms, and logic building. It strengthened my problem-solving approach and technical foundation.',
    skills: ['C++', 'STL', 'DSA', 'Pointers', 'Algorithms'],
    assets: [
      {
        type: 'certificate',
        fileType: 'pdf',
        label: 'Completion Certificate',
        file: `${import.meta.env.BASE_URL}Certificates/cert-14.pdf`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-14-preview.png`,
      },
      {
        type: 'image',
        fileType: 'pdf',
        label: 'Joining Proof',
        file: `${import.meta.env.BASE_URL}Certificates/cert-13.pdf`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-13-preview.png`,
      },
    ],
  },
  {
    id: 'azure',
    title: 'Microsoft Azure',
    subtitle: 'Cloud Computing',
    company: 'Training & Academic Work',
    duration: '2024',
    description:
      'Explored cloud concepts and Azure services in learning projects, with exposure to deployment thinking, cloud resources, and modern infrastructure concepts.',
    skills: ['Azure', 'Cloud', 'Deployment', 'Services', 'IoT Context'],
    assets: [
      {
        type: 'certificate',
        fileType: 'pdf',
        label: 'Azure Certificate',
        file: `${import.meta.env.BASE_URL}Certificates/cert-16.pdf`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-16-preview.png`,
      },
      {
        type: 'image',
        fileType: 'image',
        label: 'Training Snapshot',
        file: `${import.meta.env.BASE_URL}Certificates/cert-15.png`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-15.png`,
      },
    ],
  },
  {
    id: 'web',
    title: 'HTML · CSS · JS',
    subtitle: 'Frontend Development',
    company: 'Personal Projects',
    duration: 'Since 2023',
    description:
      'Built responsive interfaces and interactive web pages using semantic HTML, modern CSS, and JavaScript, then applied that base toward more advanced frontend work.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Frontend'],
    assets: [
      {
        type: 'certificate',
        fileType: 'pdf',
        label: 'Web Certificate',
        file: `${import.meta.env.BASE_URL}Certificates/cert-18.pdf`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-18-preview.png`,
      },
      {
        type: 'image',
        fileType: 'pdf',
        label: 'Project Preview',
        file: `${import.meta.env.BASE_URL}Certificates/cert-17.pdf`,
        thumb: `${import.meta.env.BASE_URL}Certificates/cert-17-preview.png`,
      },
    ],
  },
  {
    id: 'open',
    title: 'Open to Work',
    subtitle: 'Want to work with you',
    company: 'Professional Opportunity',
    duration: 'Available now',
    description:
      'I am actively looking for opportunities where I can contribute, learn fast, and grow as a developer. I would be glad to work with a team building meaningful products.',
    skills: ['Adaptable', 'Collaborative', 'Full-Stack Mindset', 'Learning Fast'],
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/rushobhit', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/rushobhit', icon: 'github' },
      { label: 'Email', href: 'mailto:rushobhit@example.com', icon: 'mail' },
    ],
  },
]

const SocialIcon = ({ type }) => {
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.3 7.06 2.03 2.03 0 0 0 5.25 3Zm15.19 9.86c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.37c.04.76 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.67.9-1.36 1.95-1.36 1.38 0 1.93 1.02 1.93 2.52V20h3.37v-7.14Z"
        />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.56 2.32 1.11 2.89.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.85c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.85-4.57 5.11.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.34 6.8-5.34H5.2Zm13.3 11a.25.25 0 0 0 .25-.25V8.62l-6.13 4.81a1 1 0 0 1-1.24 0L5.25 8.62v8.63c0 .14.11.25.25.25h13Z"
      />
    </svg>
  )
}

const AssetThumb = ({ asset }) => {
  return (
    <img
      src={asset.thumb}
      alt={asset.label}
      loading="lazy"
      decoding="async"
    />
  )
}

const AssetCard = ({ asset, index }) => (
  <a
    href={asset.file}
    target="_blank"
    rel="noopener noreferrer"
    className="experience-asset-node"
    style={{ '--asset-delay': `${index * 80}ms` }}
  >
    <div className="experience-asset-thumb">
      <AssetThumb asset={asset} />
    </div>
    <span className="experience-asset-type">{asset.type}</span>
    <span className="experience-asset-label">{asset.label}</span>
  </a>
)

const getLayoutClass = (index) => {
  if (index === 0) return 'layout-left-edge'
  if (index === 1) return 'layout-left-mid'
  if (index === 2) return 'layout-center'
  if (index === 3) return 'layout-right-mid'
  return 'layout-right-edge'
}

export default function Experience() {
  const [active, setActive] = useState(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 180)
    return () => clearTimeout(timer)
  }, [])

  const activeNode = useMemo(
    () => nodes.find((node) => node.id === active) ?? null,
    [active]
  )

  const activeIndex = useMemo(
    () => nodes.findIndex((node) => node.id === active),
    [active]
  )

  const firstAsset = activeNode?.assets?.[0] ?? null
  const secondAsset = activeNode?.assets?.[1] ?? null

  return (
    <main className="experience-page">
      <section className="experience-tree-section" aria-labelledby="experience-heading">
        <h1 id="experience-heading" className="experience-title">
          Experience
        </h1>

        <div className={`experience-tree ${animate ? 'is-animated' : ''}`}>
          <svg
            className="experience-branches"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="branch branch-base branch-base-1" d="M370 30 C320 78, 200 108, 120 210" />
            <path className="branch branch-flow branch-flow-1" d="M370 30 C320 78, 200 108, 120 210" />

            <path className="branch branch-base branch-base-2" d="M500 26 C470 74, 410 108, 360 210" />
            <path className="branch branch-flow branch-flow-2" d="M500 26 C470 74, 410 108, 360 210" />

            <path className="branch branch-base branch-base-3" d="M600 38 C600 92, 600 130, 600 210" />
            <path className="branch branch-flow branch-flow-3" d="M600 38 C600 92, 600 130, 600 210" />

            <path className="branch branch-base branch-base-4" d="M705 26 C735 74, 790 108, 840 210" />
            <path className="branch branch-flow branch-flow-4" d="M705 26 C735 74, 790 108, 840 210" />

            <path className="branch branch-base branch-base-5" d="M835 30 C885 78, 1000 108, 1080 210" />
            <path className="branch branch-flow branch-flow-5" d="M835 30 C885 78, 1000 108, 1080 210" />
          </svg>

          <div className="experience-node-grid">
            {nodes.map((node) => {
              const isOpen = active === node.id
              const buttonId = `exp-trigger-${node.id}`

              return (
                <article
                  key={node.id}
                  className={`experience-node-wrap ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    id={buttonId}
                    className="experience-node"
                    type="button"
                    onClick={() => setActive(isOpen ? null : node.id)}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? `exp-layout-${node.id}` : undefined}
                  >
                    <span className="experience-node-dot" aria-hidden="true" />
                    <span className="experience-node-title">{node.title}</span>
                    <span className="experience-node-subtitle">{node.subtitle}</span>
                    <span className="experience-node-indicator" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </article>
              )
            })}
            

            {activeNode && (
              <div
                id={`exp-layout-${activeNode.id}`}
                className={`experience-active-layout ${getLayoutClass(activeIndex)}`}
                role="region"
                aria-labelledby={`exp-trigger-${activeNode.id}`}
              >
                {activeIndex === 0 && (
                  <>
                    <section className="experience-panel experience-panel-expanded">
                      <div className="experience-panel-inner">
                        <div className="experience-panel-meta">
                          <h3>{activeNode.company}</h3>
                          <span>{activeNode.duration}</span>
                        </div>

                        <p>{activeNode.description}</p>

                        <div className="experience-skill-list">
                          {activeNode.skills.map((skill) => (
                            <span key={skill} className="experience-skill-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>

                    <aside className="experience-side-panel side-panel-right">
                      <div className="experience-side-panel-inner">
                        {activeNode.assets?.map((asset, index) => (
                          <AssetCard key={`${asset.label}-${index}`} asset={asset} index={index} />
                        ))}
                      </div>
                    </aside>
                  </>
                )}

                {activeIndex === 1 && (
                  <>
                    <section className="experience-panel experience-panel-expanded">
                      <div className="experience-panel-inner">
                        <div className="experience-panel-meta">
                          <h3>{activeNode.company}</h3>
                          <span>{activeNode.duration}</span>
                        </div>

                        <p>{activeNode.description}</p>

                        <div className="experience-skill-list">
                          {activeNode.skills.map((skill) => (
                            <span key={skill} className="experience-skill-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>

                    <aside className="experience-side-panel side-panel-right">
                      <div className="experience-side-panel-inner">
                        {activeNode.assets?.map((asset, index) => (
                          <AssetCard key={`${asset.label}-${index}`} asset={asset} index={index} />
                        ))}
                      </div>
                    </aside>
                  </>
                )}

                {activeIndex === 2 && (
                  <>
                    {firstAsset && (
                      <aside className="experience-side-panel side-panel-left">
                        <div className="experience-side-panel-inner">
                          <AssetCard key={`${firstAsset.label}-left`} asset={firstAsset} index={0} />
                        </div>
                      </aside>
                    )}

                    <section className="experience-panel experience-panel-expanded">
                      <div className="experience-panel-inner">
                        <div className="experience-panel-meta">
                          <h3>{activeNode.company}</h3>
                          <span>{activeNode.duration}</span>
                        </div>

                        <p>{activeNode.description}</p>

                        <div className="experience-skill-list">
                          {activeNode.skills.map((skill) => (
                            <span key={skill} className="experience-skill-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>

                    {secondAsset && (
                      <aside className="experience-side-panel side-panel-right">
                        <div className="experience-side-panel-inner">
                          <AssetCard key={`${secondAsset.label}-right`} asset={secondAsset} index={0} />
                        </div>
                      </aside>
                    )}
                  </>
                )}

                {activeIndex === 3 && (
                  <>
                    <aside className="experience-side-panel side-panel-left">
                      <div className="experience-side-panel-inner">
                        {activeNode.assets?.map((asset, index) => (
                          <AssetCard key={`${asset.label}-left-${index}`} asset={asset} index={index} />
                        ))}
                      </div>
                    </aside>

                    <section className="experience-panel experience-panel-expanded">
                      <div className="experience-panel-inner">
                        <div className="experience-panel-meta">
                          <h3>{activeNode.company}</h3>
                          <span>{activeNode.duration}</span>
                        </div>

                        <p>{activeNode.description}</p>

                        <div className="experience-skill-list">
                          {activeNode.skills.map((skill) => (
                            <span key={skill} className="experience-skill-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>
                  </>
                )}

                {activeIndex === 4 && (
                  <>
                    <aside className="experience-side-panel side-panel-left">
                      <div className="experience-side-panel-inner">
                        {activeNode.socials?.map((social, index) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-social-node"
                            aria-label={social.label}
                            style={{ '--asset-delay': `${index * 90}ms` }}
                          >
                            <span className="experience-social-icon" aria-hidden="true">
                              <SocialIcon type={social.icon} />
                            </span>
                            <span className="experience-asset-label">{social.label}</span>
                          </a>
                        ))}
                      </div>
                    </aside>

                    <section className="experience-panel experience-panel-expanded">
                      <div className="experience-panel-inner">
                        <div className="experience-panel-meta">
                          <h3>{activeNode.company}</h3>
                          <span>{activeNode.duration}</span>
                        </div>

                        <p>{activeNode.description}</p>

                        <div className="experience-skill-list">
                          {activeNode.skills.map((skill) => (
                            <span key={skill} className="experience-skill-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}