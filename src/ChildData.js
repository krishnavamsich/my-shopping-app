
import React,{useState} from 'react'

 function ChildData({productDetails}) {

    const [currentIndex,setCurrentIndex]= useState(0);
    
    const handleNext =()=>{
            if(currentIndex+1 < productDetails.length){
              setCurrentIndex (currentIndex + 1);
        }
      }
      
      const handlePrevious = ()=>{
        if(currentIndex > 0){
          setCurrentIndex(currentIndex - 1);
        }
      }
      const currentProduct = productDetails[currentIndex];

  return (
    
    <div className='container'>
   { (
        <div>
          <h2>Details</h2>
          <h2>{currentProduct.title}</h2>
        <p>Description: {currentProduct.description}</p>
        <p>Price: ${currentProduct.price}</p>
        <p>Brand: {currentProduct.brand}</p>
        </div>
      )}

      <button onClick={handleNext}>next</button>
    <button onClick={handlePrevious}>Previous</button> 
      
    </div>
  )
}
export default ChildData;

