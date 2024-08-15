
const handleMangoList=(cat_id)=>{
    const mango_container=document.getElementById('mango-container');
    mango_container.innerHTML=" ";
    fetch(`https://mango-shop-project-2.onrender.com/mango/list/?category_id=${cat_id?cat_id:""}`)
    .then((res) => res.json())
    .then((data)=>{
        data.results.forEach((mango)=>
        {
          fetch('https://api.imgbb.com/1/upload?key=70a11ac23df408c22afeb6a78e1439f0')
          .then((response=>{
            return response.json();
          }))
          .then((img)=>{
            console.log(img)
          })
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