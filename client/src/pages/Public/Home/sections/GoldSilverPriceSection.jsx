import React from "react";
import "./GoldSilverPriceSection.css"; // Import CSS file for styles

const GoldSilverPriceSection = () => {
  const handleCheckPrice = () => {
    window.open("https://www.goldpriceindia.com/gold-price-kolkata.php", "_blank");
  };

  const handleSilverCheckPrice = () => {
    window.open("https://economictimes.indiatimes.com/commoditysummary/symbol-SILVER.cms", "_blank");
  };

  return (
    <div className="gold-silver-section">
      <h2>Check Live Price</h2>
      <div className="button-container">
        <button onClick={handleCheckPrice}>Gold</button>
        <button onClick={handleSilverCheckPrice}>Silver</button>
      </div>
    </div>
  );
};

export default GoldSilverPriceSection;
