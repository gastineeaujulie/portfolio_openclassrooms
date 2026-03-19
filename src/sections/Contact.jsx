import Button from '../components/Button.jsx';
import '../style/sections/Contact.scss';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Une idée de projet ? Contactez-moi !</p>

      <form
        className="contact-form"
        action="https://formspree.io/f/xaqpvjle"
        method="POST"
      >
        <input type="text" name="name" placeholder="Nom" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
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
