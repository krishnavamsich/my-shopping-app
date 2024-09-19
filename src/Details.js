// import React,{useState} from 'react'

//  function Details({brothers}) {

//     const [currentBrothersIndex,setCurrentBrothersIndex]= useState(0)
    
//     const handleNext =()=>{
//             if(currentBrothersIndex+1 < brothers.length){
//             setCurrentBrothersIndex (currentBrothersIndex + 1);
//         }
//       }
      
//       const handlePrevious = ()=>{
//         if(currentBrothersIndex > 0){
//             setCurrentBrothersIndex(currentBrothersIndex - 1);
//         }
//       }
//   return (
    
//     <div className='container'>
//    { (
//         <div>
//           <h2>Details:</h2>
//           <p>Name: {brothers[currentBrothersIndex].name}</p>
//           <p>Age: {brothers[currentBrothersIndex].age}</p>
//           <p>Address: {brothers[currentBrothersIndex].address}</p>
//         </div>
//       )}

//       <button onClick={handleNext}>next</button>
//     <button onClick={handlePrevious}>Previous</button> 
      
//     </div>
//   )
// }
// export default Details;
