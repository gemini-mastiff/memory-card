import "../styles/CountryCard.css";

export default function CountryCard({ name, flag, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="flag__container">
        <img className="card__flag" src={flag} alt={`${name} Flag`} />
      </div>
      <h2 className="card__title">{name}</h2>
    </div>
  );
}
