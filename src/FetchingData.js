import React,{useState,useEffect} from 'react'
// import fetchingChildData from './fetchingChildData'
import FetchingChildData from './fetchingChildData'
 function fetchingData() {

    const [productDetails]=useState;
     useEffect=(()=>{
    const fetchData=async()=>{
        try{
        const response=await fetch("https://dummyjson.com/products")
        const products=await response.json()
         productDetails(products);
        } catch(error){
            console.log("error");
        }
    }

     fetchData();
     },[]);
  return (
    <div>
      <h1>
           productDetais
      </h1>

      <FetchingChildData product={productDetails}></FetchingChildData>
        {/* <ul>
        {productDetails.map((product) => (
          <li key={product.id}>
            {product.title} {product.price}
          </li>
        ))}
        </ul> */}
    </div>
  )
}
export default fetchingData;