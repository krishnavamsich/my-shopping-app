const fetchData= async()=>{
    const response=await fetch('https://dummyjson.com/products')

//      method:"POST",
//      headers:{'Content-Type':'application/json'},
//      body :JSON.stringify({title:'BMW Pencil',})
try{
        const products= await response.json();
        console.log(products);
   }
   catch(err){
    console.log("there was an error")
   }
 }
fetchData();
