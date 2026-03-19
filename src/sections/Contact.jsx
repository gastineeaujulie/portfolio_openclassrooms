import Button from '../components/Button.jsx';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Une idée de projet ? Contactez-moi !</p>

      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <Button type="submit">Envoyer</Button>
      </form>

      <div className="contact-info">
        <p>Email : julie.gastineau@gmail.com</p>
        <p>Disponible pour missions freelance ou CDI</p>
      </div>

      <div className="contact-links">
        <Button to="https://github.com/gastineeaujulie" external>
          GitHub
        </Button>
        <Button
          to="https://www.linkedin.com/in/julie-gastineau-8773b3243/"
          external
        >
          LinkedIn
        </Button>
      </div>
    </section>
  );
}
