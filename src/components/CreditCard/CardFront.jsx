function CardFront({ cardData, theme }) {
  const cardNumber = cardData.number.replace(/\s/g, "");

  const getCardBrand = () => {
    if (cardNumber.startsWith("4")) {
      return "VISA";
    }

    if (
      cardNumber.startsWith("51") ||
      cardNumber.startsWith("52") ||
      cardNumber.startsWith("53") ||
      cardNumber.startsWith("54") ||
      cardNumber.startsWith("55")
    ) {
      return "Mastercard";
    }

    return "CARD";
  };

  const cardBrand = getCardBrand();

  return (
    <div className={`card-face card-front theme-${theme}`}>
      <div className="card-top">
        <span className="card-chip">▰</span>
        <span className="card-brand">{cardBrand}</span>
      </div>

      <div className="card-number">{cardData.number || ""}</div>

      <div className="card-bottom">
        <div>
          <span className="card-label">CARDHOLDER</span>
          <span>{cardData.name || ""}</span>
        </div>

        <div>
          <span className="card-label">VALID THRU</span>
          <span>{cardData.expiry || ""}</span>
        </div>
      </div>
    </div>
  );
}

export default CardFront;