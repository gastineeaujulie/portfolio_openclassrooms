import { Link } from 'react-router-dom';
import '../style/components/ProjectCard.scss';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card"
      aria-label={`Voir le projet ${project.title}`}
    >
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.resume}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
