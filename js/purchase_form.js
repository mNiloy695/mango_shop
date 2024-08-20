const  purchaseFormHadle=()=>{
    const id=document.getElementById('form-purchase');
    const  token=localStorage.getItem('token');
    const mango_id=new URLSearchParams(window.location.search).get('mango_id')

    console.log(mango_id)
    if(token){
       fetch(`https://mango-shop-project-2.onrender.com/mango/list/${mango_id}/`)
       .then((res)=>{
        return res.json();
       })
       .then((mango)=>{

        id.innerHTML=`
      
        <div class="row">
         <div class="t  d-flex justify-content-between align-items-center col-lg-6 col-md-6 col-sm-12">
            <div>
                  <h3 class="fs-3 fw-bold">${mango.title} </h3>
                  <p class="fs-5">Price:&nbsp${mango.price} $</p>
            </div>
         </div>
         <div  class="text-lg-end text-md-end text-center mb-2  col-lg-6 col-md-6 col-sm-12">
             <img  src="${mango.image}" class="w-50 pe-1" alt="">
         </div>
        </div>
       <h5 class="text-center">Order Now</h5>
       <form class='p-2' onsubmit="Order(event)" id="purchase-form">
         
           <div class="mb-3">
             <label for="Quantity">Quantity</label>
             <input name="InputQuantity" type="number" class="form-control" id="InputQuantity" placeholder="Enter minimum 2 kg">
           </div>
     
         <div class="mb-3">
             <label for="Phone">Phone</label>
             <input name="Phone" type="phone2numeric" class="form-control" id="Phone" placeholder="+088 01827455942">
           </div>
       
         <div class="mb-3">
           <label for="inputStreet">Street:</label>
           <input name="inputStreet" type="text" class="form-control" id="inputStreet" placeholder="Feni,Sadar,Feni" required>
         </div>
         
         
           <div class="mb-3">
             <label for="inputCity">City</label>
             <input name="inputCity" type="text" class="form-control" id="inputCity" placeholder='Enter you city name' required>
           </div>
           <div class="class="mb-3"">
             <label for="inputCountry">Country</label>
             <input name="inputCountry" type="text" class="form-control" id="inputCountry" placeholder='Enter you country name' required>
           </div>
           <div class="class="mb-3"">
             <label for="inputPostCode">Post code</label>
             <input name="inputPostCode" type="text" class="form-control" id="inputPostCode" required placeholder="Enter you post code">
           </div>
         </div>
         <div class="class="mb-3"">
           <div class="form-check">
             <input class="form-check-input" type="checkbox" id="gridCheck" required>
             <label class="form-check-label" for="gridCheck">
               Check me out
             </label>
           </div>
         </div>
         <button  type="submit" class="btn-lg mt-2 btn-danger">BUY NOW</button>
       </form>
    `;
       })
       .catch((err)=>{
        console.log(err)
       })
       
}
else{
    id.innerHTML=`
     <h1 class="text-center">Login First Then you can see this Page</h1>
    `;
 }
}

purchaseFormHadle()

// document.getElementById('id_category).selected