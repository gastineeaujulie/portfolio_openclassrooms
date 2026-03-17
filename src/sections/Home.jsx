import '../style/sections/Home.scss';
import Button from '../components/Button';
import About from './About.jsx';

export default function Home() {
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
      <section className="about">
        <About />
      </section>
    </>
  );
}
