
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
      // const currentProduct = productDetails[currentIndex];

  return (
    
    <div className='container'>
   { (
        <div>
          <h2>Details:</h2>
          <h2>{currentIndex.title}</h2>
      <p>Description:{currentIndex.description}</p>
      <p>Price: ${currentIndex.price}</p>
      <p>Brand: {currentIndex.brand}</p>
        </div>
      )}

      {/* <button onClick={handleNext}>next</button>
    <button onClick={handlePrevious}>Previous</button>  */}
       <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex === productDetails.length - 1}>
        Next
      </button>
    </div>
  )
}
export default ChildData;