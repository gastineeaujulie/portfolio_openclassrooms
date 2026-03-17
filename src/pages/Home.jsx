import { useState } from 'react';
import { projects } from '../data/projects.js';
import Button from '../components/Button.jsx';
import About from '../sections/About.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import '../style/pages/Home.scss';

export default function Home() {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects =
    filter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="home">
        <h1 className="home-title">Julie Gastineau</h1>
        <p className="home-subtitle">Développeuse Web Full-Stack</p>
        <p className="home-description">
          Passionnée par le développement front-end et le design d'interfaces,
          je crée des expériences web modernes, accessibles et élégantes.
        </p>
        <div className="home-buttons">
          <Button to="/projects">Mes projets</Button>
          <Button to="/contact">Me contacter</Button>
        </div>
      </section>

      <section className="home-about">
        <About />
      </section>

      <section className="home-projects">
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

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
