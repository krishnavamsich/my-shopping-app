import React,{useState} from 'react'

 function FetchingChildData({product}) {

    const [currentProductDetails,setCurrentProductDetails]= useState(0);
    
    const handleNext =()=>{
            if(currentProductDetails+1 < product.length){
                setCurrentProductDetails (currentProductDetails + 1);
        }
      }
      
      const handlePrevious = ()=>{
        if(currentProductDetails > 0){
            setCurrentProductDetails(currentProductDetails - 1);
        }
      }
  return (
    
    <div className='container'>
   { (
        <div>
          <h2>Details:</h2>
          <p>details: {product[currentProductDetails]}</p>
          {/* <p>Age: {brothers[currentBrothersIndex].age}</p>
          <p>Address: {brothers[currentBrothersIndex].address}</p> */}
        </div>
      )}

      <button onClick={handleNext}>next</button>
    <button onClick={handlePrevious}>Previous</button> 
      
    </div>
  )
}
export default FetchingChildData;
