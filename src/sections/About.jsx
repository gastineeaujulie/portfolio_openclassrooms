// src/sections/About.jsx
import '../style/sections/About.scss';

export default function About() {
  return (
    <section className="about">
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
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Sass</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Figma</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
