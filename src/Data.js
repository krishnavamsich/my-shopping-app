import React,{useState,useEffect} from 'react'
import FetchingChildData from './fetchingChildData'

 function Data() {
const[productDetails,setProductDetails]=useState([]);

useEffect(()=>{
const FetchData=async()=>{
    try{
    const response=await fetch("https://dummyjson.com/products")
    const data=await response.json();
    const products=data.products;
    setProductDetails(products);
    }
    catch(error){
        console.log("error");
    }
}
FetchData();
},[])

  return (
    <div>
        <h1>hii</h1>
        {/* {productDetails.map(product => <div>{product?.brand || 'NoBrand'} - {product.stock} - {product.weight}</div>)} */}
      <FetchingChildData productDetails={setProductDetails}/>
    </div>
  )
}
export default Data;