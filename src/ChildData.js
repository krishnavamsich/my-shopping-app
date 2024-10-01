import React, { useState } from "react";

function ChildData({ productDetails }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < productDetails.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!productDetails || productDetails.length === 0) {
    return <p>No products available</p>;
  }

  const currentProduct = productDetails[currentIndex];

  return (
    <div>
      <div>
        <h2>Title : {currentProduct.title}</h2>
        <p>Description : {currentProduct.description}</p>
        <p>price : {currentProduct.price}</p>
      </div>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ChildData;
