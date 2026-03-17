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
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </section>
  );
}
