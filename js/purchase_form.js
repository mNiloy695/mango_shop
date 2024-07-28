const  purchaseFormHadle=()=>{
    const id=document.getElementById('form-purchase');
    const  token=localStorage.getItem('token');
    if(token){
    id.innerHTML=`
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
}
else{
    id.innerHTML=`
     <h1 class="text-center">Login First Then you can see this Page</h1>
    `;
 }
}

purchaseFormHadle()