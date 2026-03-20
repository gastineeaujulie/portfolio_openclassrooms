import { techIcons } from '../data/techIcons';
import '../style/sections/About.scss';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>À propos</h2>

        <p className="about-intro">
          Ancienne pâtissière professionnelle pendant 10 ans puis salariée dans
          le secteur médico-social, je suis désormais en reconversion dans le
          développement web full-stack.
        </p>

        <p>
          Je souhaite me spécialiser dans la création d'interfaces front-end
          responsives, avec un intérêt particulier pour le design UI,
          l'accessibilité et l'expérience utilisateur.
        </p>

        <p>
          Créativité, minutie et engagement humain et écologique me
          caractérisent. Je souhaite rejoindre une équipe qui partage ces
          valeurs, afin de poursuivre mon apprentissage et contribuer à des
          projets qui ont du sens.
        </p>

        <div className="about-skills">
          <h3>Compétences</h3>
          <ul className="skills-icons">
            {Object.entries(techIcons).map(([name, icon]) => (
              <li key={name} data-tooltip={name}>
                <img src={icon} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
