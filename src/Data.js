// import React, { useState, useEffect } from 'react';
// import ChildData from './ChildData'; // Ensure the import path is correct

// function Data() {
//   const [productDetails, setProductDetails] = useState([]);

//   useEffect(() => {
//     console.log("Fetching data..."); // This should appear when component mounts

//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log("Data fetched successfully:", data.products); // Log the fetched data
//         setProductDetails(data.products); // Set the products in the state
//       } catch (error) {
//         console.error("Error fetching data:", error); // Log any errors
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {/* Add a loading check */}
//       {productDetails.length > 0 ? (
//         <ChildData productDetails={productDetails} />
//       ) : (
//         <p>Loading data, please wait...</p>
//       )}
//     </div>
//   );
// }

// export default Data;
