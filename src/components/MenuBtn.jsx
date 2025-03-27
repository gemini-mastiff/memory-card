import "../styles/MenuBtn.css";

export default function MenuBtn({ name, value, onClick, stateValue = false }) {
  return (
    <button
      className={`menu__btn ${stateValue == value ? "menu__btn--select" : ""}`}
      value={value}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
