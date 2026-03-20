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
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            required
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            required
            aria-required="true"
          ></textarea>
        </div>

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
