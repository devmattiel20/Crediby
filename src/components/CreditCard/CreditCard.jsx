import { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function CreditCard({ cardData, theme }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const themeClass = `theme-${theme || "midnight"}`;

  return (
    <div className="credit-card-wrapper">
      <div
        className={`credit-card ${isFlipped ? "flipped" : ""} ${themeClass}`}
        onClick={handleFlip}
      >
        <CardFront cardData={cardData} theme={theme} />
        <CardBack cardData={cardData} theme={theme} />
      </div>
    </div>
  );
}

export default CreditCard;
