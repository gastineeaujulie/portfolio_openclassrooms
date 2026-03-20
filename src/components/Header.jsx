import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Header.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <span className="logo">JG</span>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <nav
          id="main-nav"
          className={`nav ${menuOpen ? 'active' : ''}`}
          aria-label="Navigation principale"
        >
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => window.scrollTo(0, 0), 50);
                }}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => setMenuOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="/#projects" onClick={() => setMenuOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
