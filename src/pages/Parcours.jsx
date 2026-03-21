import { timelineData } from '../data/Parcours.js';
import '../style/pages/Parcours.scss';

export default function Parcours() {
  return (
    <main id="main-content" className="parcours">
      <h2>Mon parcours</h2>

      <div className="parcours-grid">
        {timelineData.map((item) => (
          <div key={item.id} className="parcours-card">
            <div className="parcours-card__content">
              <span className="parcours-card__period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="parcours-card__org">{item.org}</p>
              <p>{item.desc}</p>

              <div className="parcours-skills">
                {item.skills.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
