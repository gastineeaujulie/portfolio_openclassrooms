import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button.jsx';
import About from '../sections/About.jsx';
import Projects from '../sections/Projects.jsx';
import Contact from '../sections/Contact.jsx';
import '../style/pages/Home.scss';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <section id="home" className="home">
        <h1 className="home-title">Julie Gastineau</h1>
        <p className="home-subtitle">Développeuse Web Full-Stack</p>
        <p className="home-description">
          Passionnée par le développement front-end et le design d'interfaces,
          je crée des expériences web modernes, accessibles et élégantes.
        </p>
        <div className="home-buttons">
          <Button to="/#projects">Mes projets</Button>
          <Button to="/#contact">Me contacter</Button>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
