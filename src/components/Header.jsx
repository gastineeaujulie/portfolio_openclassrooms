import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Header.scss'; // optionnel, pour le style

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <span className="logo">JG</span>

        {/* Burger */}
        <div
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Navigation*/}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
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
