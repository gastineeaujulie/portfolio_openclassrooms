import { projects } from '../data/projects.js';
import { useParams, Navigate } from 'react-router-dom';
import '../style/pages/Project.scss';

export default function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <Navigate to="/error" />;
  }

  return (
    <section className="project-detail">
      <h1>{project.title}</h1>

      {project.image && (
        <div className="project-image">
          <img
            src={project.image}
            alt={`Capture d'écran du projet ${project.title}`}
          />
        </div>
      )}

      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <div className="project-description">
        <h3>Contexte</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-objectifs">
        <h3>Objectifs</h3>
        <p>{project.objectifs}</p>
      </div>

      <div className="project-achievement">
        <h3>Solutions mises en place et résultats</h3>
        <p>{project.achievement}</p>
        <p>{project.result}</p>
      </div>

      <div className="project-result">
        <h3>Perspectives d'amélioration</h3>
        <p>{project.propositions}</p>
      </div>

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Voir le site
          </a>
        )}
      </div>
    </section>
  );
}
