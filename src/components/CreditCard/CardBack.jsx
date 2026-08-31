function CardBack({ cardData, theme }) {
  return (
    <div className={`card-face card-back theme-${theme}`}>
      <div className="magnetic-strip"></div>

      <div className="cvv-section">
        <span className="card-label">CVV</span>
        <div className="cvv">{cardData.cvv || "123"}</div>
      </div>

      <div className="card-back-brand">VISA</div>
    </div>
  );
}

export default CardBack;