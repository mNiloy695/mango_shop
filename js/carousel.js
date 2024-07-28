const carouselHandle=()=>{
    let mangoe;
    let reviewere;
    fetch(`https://mango-shop-project-2.onrender.com/mango/review/`)
    .then((res)=>res.json())
    .then((reviews)=>{
        console.log(reviews);
        const carousel=document.getElementById('slide-ul');
        reviews.forEach((review)=>{
              
            fetch(`https://mango-shop-project-2.onrender.com/mango/list/${review.mango}/`)
            .then((res)=>res.json())
            .then((mango)=>{
                mangoe=mango;
               
                const li=document.createElement('li');
                li.classList.add('slide-visible')
                li.innerHTML=`
               <div class="review card shadow h-100">
                      <div class="ratio ratio-16x9  w-50 mx-auto">
                          <img src="${mango.image}" class="card-img-top img"  alt="...">
                      </div>
                      <div class="card-body mt-5 p-3 p-xl-5">
                           
                          <h6 class="card-title">
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