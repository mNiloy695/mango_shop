

const getQueryParam=(param)=>{
    const urlParam=new URLSearchParams(window.location.search)
    return urlParam.get(param)
}
const handleMangoDetaile=()=>{
   const token=localStorage.getItem('token')
    const param=getQueryParam('id')
    console.log(param)
    const mango_details=document.getElementById('mango-details')
    fetch(`https://mango-shop-project-2.onrender.com/mango/list/${param}`)
    .then((res) => res.json())
    .then((mango)=>
    {
        console.log(mango)
        mango_details.innerHTML=`
  <div class="row d-flex justify-content-center align-items-center details shadow-sm  mx-auto mt-2" style="width:80%">
  <div class="image col-lg-4 col-md-6 col-sm-12">
  <img src="${mango.image}" class="img-fluid" style="width:90%" alt="Mango image">
  </div>
  <div class="card-body lh-3 col-lg-8 col-md-6 col-sm-12">
    <small class="fs-3">Description:</small> <br> ${mango.discription}</br>
    <small class="fs-4 pt-2">Price:</small> &nbsp${mango.price} $</br>
    <small class="fs-4">Weight:</small>: ${mango.weight} kg</br>
       <li style="list-style:none" class="mt-2" id="auth_check">
       
  </li>
    <h6 class="mt-2">Share</h6>
    <p class="text-bold " style="font-size:25px">
     <i class="fa-brands fa-facebook m-2"></i>
     <i class="fa-brands fa-youtube m-2"></i>
     <i class="fa-brands fa-whatsapp m-2"></i>
    </p>
  </div>
 
  
  
</div>
        `;

      const auth=document.getElementById('auth_check');
      if(token){
        auth.innerHTML=`
        <a class="btn px-5 btn-danger" href="./purchase.html?mango_id=${mango.id}">BUY</a>
        `
      }
      else{
        auth.innerHTML=`
        <a class=" btn-lg px-5 btn m-5 text-dark  btn-outline-info  text-dark" href="./login.html">Login</a>`
      }
    })

}

handleMangoDetaile();
