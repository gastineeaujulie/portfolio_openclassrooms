import { useNavigate } from 'react-router-dom';
import '../style/components/ProjectCard.scss';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <article className="project-card" onClick={handleClick}>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.resume}</p>

        <div className="project-tech">
          {project.tech.map(
            (tech, index) => (
              (<img key={index} src={tech} alt="tech-logo" />),
              (<span key={index}>{tech}</span>)
            )
          )}
        </div>
      </div>
    </article>
  );
}
