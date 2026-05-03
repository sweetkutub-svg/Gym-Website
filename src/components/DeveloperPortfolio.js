import React from 'react';
import './DeveloperPortfolio.css';

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Python', 'Git'];
const projects = [
  { name: 'MAISON Store', type: 'E-Commerce', link: 'https://sweetkutub-svg.github.io/maison-store_E-Commarce/' },
  { name: 'Mondol Restaurant', type: 'Restaurant', link: 'https://sweetkutub-svg.github.io/MondolRestaurant/' },
  { name: "Rao's Restaurant", type: 'Restaurant', link: 'https://sweetkutub-svg.github.io/Rao-s-Resturent/' },
  { name: 'FitForge Gym', type: 'Fitness', link: '#' },
];

const DeveloperPortfolio = () => {
  return (
    <section className="dev-section">
      <div className="dev-bg-text">DEV</div>

      <div className="container dev-content">
        <div className="dev-badge-wrap">
          <div className="dev-badge">
            <span className="badge-label">Designed &amp; Developed by</span>
          </div>
        </div>

        <div className="dev-grid">
          <div className="dev-profile reveal-left">
            <div className="dev-avatar">
              <img
                src="https://sweetkutub-svg.github.io/My_Portfolio/image.png"
                alt="Sk Kutubuddin"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="dev-avatar-fallback">SK</div>
            </div>

            <div className="dev-info">
              <span className="dev-role-tag">Web Developer</span>
              <h2 className="dev-name">Sk Kutubuddin</h2>
              <p className="dev-bio">
                Passionate web developer from Kolkata, India. 2nd year diploma student (2024–2027)
                building creative web experiences one project at a time.
              </p>

              <div className="dev-meta">
                <span>📍 Kolkata, India</span>
                <span>🎓 Diploma 2024–2027</span>
                <span>✅ Open to Freelance</span>
              </div>

              <div className="dev-skills">
                {skills.map((s, i) => (
                  <span key={i} className="dev-skill">{s}</span>
                ))}
              </div>

              <div className="dev-actions">
                <a
                  href="https://sweetkutub-svg.github.io/My_Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>View Portfolio →</span>
                </a>
                <a
                  href="mailto:codewithkutub@gmail.com"
                  className="btn-outline"
                >
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>

          <div className="dev-projects reveal-right">
            <h3 className="dev-projects-title">More Projects</h3>
            <div className="dev-proj-list">
              {projects.map((p, i) => (
                <a
                  href={p.link}
                  key={i}
                  className="dev-proj-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="proj-info">
                    <span className="proj-num">0{i + 1}</span>
                    <div>
                      <div className="proj-name">{p.name}</div>
                      <div className="proj-type">{p.type}</div>
                    </div>
                  </div>
                  <span className="proj-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="dev-contact-info">
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:codewithkutub@gmail.com">codewithkutub@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <a href="tel:+916296888213">+91 62968 88213</a>
              </div>
              <div className="dev-socials">
                <a href="https://github.com/sweetkutub-svg" target="_blank" rel="noopener noreferrer" className="social-btn">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/sk-kutubuddin-6377a1391/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperPortfolio;
