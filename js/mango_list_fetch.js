
const handleMangoList=(cat_id)=>{
    const mango_container=document.getElementById('mango-container');
    mango_container.innerHTML="";
    fetch(`https://mango-shop-ten.vercel.app/mango/list/?category_id=${cat_id?cat_id:""}`)
    .then((res) => res.json())
    .then((data)=>{
        data.results.forEach((mango)=>
        {
          const div=document.createElement('div')
          div.innerHTML=`
          <div class="card g-2 m-2 pb-4 mb-4 col-sm " style="width:16rem; ">
          <img src="${mango.image}" class="card-img-top img-fluid mt-5"  alt="...">
          <div class="card-body">
            <h6 class="card-title">${mango.title}</h6>
            <p class="card-text">Description: ${mango.discription.slice(0,20)}</br>
            price: ${mango.price} tk per kg </br>
             Quantity: ${mango.weight} kg </br>
            </p>
            <a href="./mango_details.html?id=${mango.id}" class="btn-sm btn-success">Details</a>
          </div>
          </div>
          `;
          mango_container.append(div)
        })
       
        
    })
}

const bannerHandle=()=>{
  const token=localStorage.getItem('token');
  const banner=document.getElementById('banner');

  if(token == undefined){
    banner.innerHTML=`
      <div class="text-sec col-lg-4 col-sm-12 col-md-4">
      <h1>Welcome To our Shop!</h1>
        <p class='mt-2'>Discover a world of trust and taste at Mango Haven, where our commitment to quality and customer satisfaction is unparalleled. We specialize in handpicked mangoes sourced directly from trusted orchards worldwide, ensuring each fruit reaches you at its ripest. Our dedication to freshness and flavor guarantees a delightful experience with every bite. With convenient delivery options and a diverse selection of mango varieties, from the exotic to the familiar, we cater to every palate. Join our community of mango enthusiasts and embark on a journey of flavor and satisfaction. Trust us to deliver perfection to your doorstep.
       </p>
        </div>
       <div class="image-sec col-lg-6 col-md-6 col-sm-12">
        <img  style='width: 100%; border-radius:10px' src="./images/home.jpg" alt="">
       </div>`;
  }
}

bannerHandle();
// handleMangoList();