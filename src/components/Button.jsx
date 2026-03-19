import { Link } from 'react-router-dom';
import '../style/components/Button.scss';

export default function Button({
  to,
  children = 'button',
  external = false,
  type,
  onClick,
}) {
  // Bouton de formulaire
  if (type) {
    return (
      <button type={type} className="btn" onClick={onClick}>
        {children}
      </button>
    );
  }

  // Lien externe
  if (external) {
    return (
      <a href={to} className="btn" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  //Lien interne
  return (
    <Link to={to} className="btn">
      {children}
    </Link>
  );
}
