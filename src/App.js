import React, { useState, useEffect } from "react";
import ChildData from "./ChildData.js";

function Data() {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        setProductDetails(data.products);
      } catch (error) {
        console.log("error");
      }
    };
    FetchData();
  }, []);

  return (
    <div>
      <h1>Details</h1>
      <div>{<ChildData productDetails={productDetails} />}</div>
    </div>
  );
}

export default Data;
