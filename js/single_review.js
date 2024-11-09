const singleReviewHandle=()=>
{
    const ul=document.getElementById('ul');
    const param=new URLSearchParams(window.location.search).get('id')
    fetch(`https://mango-shop-ten.vercel.app/mango/review/?mango_id=${param}`)
    .then((res)=>res.json())
    .then((reviews)=>{
        reviews.forEach((review)=>{
          fetch(`https://mango-shop-ten.vercel.app/mango/list/${review.mango}/`)
          .then((res) => res.json())
          .then((mango)=>{
            console.log(mango)
            const ul=document.getElementById('slide-ul')
            const li=document.createElement('li');
            li.classList.add('slide-visible')
            li.innerHTML=`
           <div class="card-review  shadow-sm h-100">
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
              </div>`
             ul.append(li);
          })
        })
    })


}
singleReviewHandle();