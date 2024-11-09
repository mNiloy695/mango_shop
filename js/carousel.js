const carouselHandle=()=>{
    let mangoe;
    let reviewere;
    fetch(`https://mango-shop-ten.vercel.app/mango/review/`)
    .then((res)=>res.json())
    .then((reviews)=>{
        console.log(reviews);
        const carousel=document.getElementById('slide-ul');
        reviews.forEach((review)=>{
              
            fetch(`https://mango-shop-ten.vercel.app/mango/list/${review.mango}/`)
            .then((res)=>res.json())
            .then((mango)=>{
                mangoe=mango;
               
                const li=document.createElement('li');
                li.classList.add('slide-visible')
                li.innerHTML=`
               <div class="card-review  shadow-sm h-100 g-0 m-0" style="width:19rem">
                      <div class="ratio ratio-1x1">
                          <img src="${mango.image}" class="card-img-top img-fluid"  alt="...">
                      </div>
                      <div class="card-body  pt-3 ">
                           
                          <h6 class="card-title text-center">
                          mango: ${mango.title}
                         </h6>
                         <p class="card-text text-center"> Reviewer: ${review.reviewer}</p>
                          <p class="card-text text-center">${review.body} </br>
                          ${review.rating}</p>
        
                          </div>
                      </div>
                  </div>
                `;
                carousel.append(li);
            })
        })
    })
}
carouselHandle();