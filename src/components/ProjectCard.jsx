import { useNavigate } from 'react-router-dom';
import '../style/components/ProjectCard.scss';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
