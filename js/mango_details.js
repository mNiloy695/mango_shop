

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
      <div class="card details-card mx-auto mt-5" style="width:70%">
  <img src="${mango.image}" class="card-img-top" alt="...">
  <div class="card-body">
 
    Description: ${mango.discription}</br>
    Price: ${mango.price} per kg </br>
    Weight: ${mango.weight}</br>
      <a class=" btn mt-2 px-5 btn-outline-warning"  href="./single_mango_review.html?id=${mango.id}">Reviews</a>
  </div>
  <li id="auth_check">
  </li>
  
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
        <a class=" btn-lg btn m-2 text-dark  btn-outline-info  text-white" href="./login.html">Login</a>`
      }
    })

}

handleMangoDetaile();
