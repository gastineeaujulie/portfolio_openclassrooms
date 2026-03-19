export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Une idée de projet ? Contactez-moi !</p>

      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-info">
        <p>Email : julie.gastineau@gmail.com</p>
        <p>Disponible pour missions freelance ou CDI</p>
      </div>

      <div className="contact-links">
        <a
          href="https://github.com/gastineeaujulie"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/julie-gastineau-8773b3243/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
