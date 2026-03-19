import { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import '../style/sections/Projects.scss';

export default function Projects() {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects =
    filter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>

      <div className="project-filters">
        {['Tous', 'Front-end', 'Back-end', 'SEO'].map((category) => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
