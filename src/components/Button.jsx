import { Link } from 'react-router-dom';
import '../style/components/Button.scss';

export default function Button({ to, children = 'button' }) {
  return (
    <Link to={to} className="btn">
      {children}
    </Link>
  );
}
