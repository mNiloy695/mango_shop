const singleReviewHandle=()=>
    {
        const ul=document.getElementById('ul');
        const param=new URLSearchParams(window.location.search).get('id')
        fetch(`https://mango-shop-project-2.onrender.com/mango/review/`)
        .then((res)=>res.json())
        .then((reviews)=>{
            reviews.forEach((review)=>{
              fetch(`https://mango-shop-project-2.onrender.com/mango/list/${review.mango}/`)
              .then((res) => res.json())
              .then((mango)=>{
                console.log(mango)
    
                const li=document.createElement('li');
                li.innerHTML=`
                    <div class="carde mb-5 mt-5  shadow  h-100">
                        <div class="ratio  mt-2 mb-5 mt-5 p-5 ratio-1x1 text-center ">
                            <img src="${mango.image}" class="img-fluid" loading="lazy" alt="img">
                        </div>
                        <div class="card-body  text-center">
                            <h6>${review.body}</h6>
                            <h6>Reviewer: ${review.reviewer}</h6>
                            <h5> ${review.rating}</h5>
                        </div>
                    </div>
                `;
                ul.append(li);
              })
            })
        })
    
    
    }
    singleReviewHandle();