import "./PlattformButton.css";

export default function PlattformButton() {
  return (
    <div className="plattform-button">
      <button type="button" aria-label="Zur Plattform">
        <span className="cta-text">Zur Plattform</span>
        <span className="cta-icon" aria-hidden>
          ➜
        </span>
      </button>
    </div>
  );
}
