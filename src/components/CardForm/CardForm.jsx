function CardForm({ cardData, setCardData }) {
  const isValidExpiry = (value) => {
    if (!/^\d{2}\/\d{2}$/.test(value)) return false;

    const [month, year] = value.split("/").map(Number);

    if (month < 1 || month > 12) return false;

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;

    return true;
  };

  const isValidCVV = (value) => /^\d{3,4}$/.test(value);

  const handleNameChange = (event) => {
    setCardData({
      ...cardData,
      name: event.target.value,
    });
  };

  const handleNumberChange = (event) => {
    const onlyNumbers = event.target.value.replace(/\D/g, "");
    const limitedNumber = onlyNumbers.slice(0, 16);
    const formattedNumber = limitedNumber.match(/.{1,4}/g)?.join(" ") || "";

    setCardData({
      ...cardData,
      number: formattedNumber,
    });
  };

  const handleExpiryChange = (event) => {
    const onlyNumbers = event.target.value.replace(/\D/g, "");
    const limitedExpiry = onlyNumbers.slice(0, 4);

    let formattedExpiry = limitedExpiry;

    if (limitedExpiry.length > 2) {
      formattedExpiry = `${limitedExpiry.slice(0, 2)}/${limitedExpiry.slice(2)}`;
    }

    setCardData({
      ...cardData,
      expiry: formattedExpiry,
    });
  };

  const handleCVVChange = (event) => {
    const onlyNumbers = event.target.value.replace(/\D/g, "");
    const limitedCVV = onlyNumbers.slice(0, 4);

    setCardData({
      ...cardData,
      cvv: limitedCVV,
    });
  };

  const cvvIsValid = !cardData.cvv || isValidCVV(cardData.cvv);

  return (
    <div className="card-form">
      <h2>Card Details</h2>

      <div className="form-group">
        <label htmlFor="name">Cardholder Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={cardData.name}
          onChange={handleNameChange}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label htmlFor="number">Card Number</label>
        <input
          id="number"
          type="text"
          placeholder="4532 1234 5678 9010"
          value={cardData.number}
          onChange={handleNumberChange}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expiry">Expiry Date</label>
          <input
            id="expiry"
            type="text"
            placeholder="08/29"
            value={cardData.expiry}
            onChange={handleExpiryChange}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            placeholder="123"
            value={cardData.cvv}
            onChange={handleCVVChange}
            className={!cvvIsValid ? "input-invalid" : ""}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}

export default CardForm;