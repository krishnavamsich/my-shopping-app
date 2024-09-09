import React, {useState} from 'react'
import Child from './Child' 
function App() {
  
  const [brothers,setBrothers]= useState({
     
      name: "Vamsi",
      age: 23,
      address: "vijayawada"
  }
  )
  
  const onHandle=()=>{
    setBrothers({
    name: "sai",
    age: 25,
    address: "Hyderabad"})}



  return (
    <div>
     <h1>Name: {brothers.name}</h1>
      <p>Age: {brothers.age}</p>
      <p>Address: {brothers.address}</p>
      <button onClick={onHandle}>Details</button>
      <Child/>
    </div>
  )}
export default App;