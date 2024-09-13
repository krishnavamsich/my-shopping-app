const fetchData= async()=>{
    const response=await fetch('https://dummyjson.com/products/add',{

     method:"POST",
     headers:{'Content-Type':'application/json'},
     body :JSON.stringify({title:'BMW Pencil',})

    //  method:"PUT",
    //  headers:{'Content-Type':'application/json'},
    //  body :JSON.stringify({title:'iphone Galaxy +1 ',})

    //  method:"DELETE",

    })
   try {
        const products= await response.json();
        console.log(products);
   }
   catch(err){
    console.log("there was an error")
   }
 }
fetchData();