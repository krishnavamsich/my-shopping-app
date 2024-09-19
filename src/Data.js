import React,{useState,useEffect} from 'react'
import ChildData from './ChildData';
 function Data() {
const[productDetails,setProductDetails]=useState([]);

useEffect(()=>{
  console.log("here --------->1")
 
const FetchData=async()=>{
    try{
      console.log("here --------->2")
 
    const response=await fetch("https://dummyjson.com/products")
    const data=await response.json();
    // const products=data.products;
    console.log("data");
    setProductDetails(data.products);
    }
    catch(error){
        console.log("error");
    }
}
FetchData();
},[]);

  return (
    <div>
        <h1>Details</h1>
        <div>     
           <ChildData productDetails={productDetails}/>
        </div>
    
    </div>
  )
}
export default Data;