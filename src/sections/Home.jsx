import '../style/sections/Home.scss';
import Button from '../components/Button';

export default function Home() {
  return (
    <section className="home">
      <h1 className="home-title">Julie Gastineau</h1>
      <p>Développeuse Web Full-Stack</p>
      <p>
        Passionnée par le développement front-end et le design d'interfaces, je
        crée des expériences web modernes, accessibles et élégantes.
      </p>
      <Button text="Mes projets" />
      <Button text="Me contacter" />
    </section>
  );
}
