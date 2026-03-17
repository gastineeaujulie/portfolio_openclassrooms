import '../style/components/Button.scss';

export default function Button({ text, onClick, type = 'button' }) {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {text}
    </button>
  );
}
