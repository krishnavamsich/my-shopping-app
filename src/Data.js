import React,{useState,useEffect} from 'react'
// import FetchingChildData from './FetchingChildData'
import ChildData from './ChildData'
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
      <ChildData productDetails={productDetails}/>
    
    </div>
  )
}
export default Data;