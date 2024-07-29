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
                    <div class="card border-0 p-5 h-100 ">
                        <div class="ratio m-5 ratio-1x1 w-50 mx-auto">
                            <img src="${mango.image}" class=" card-img-top" loading="lazy" alt="img">
                        </div>
                        <div class="card-body p-0 pt-2 text-center">
                            <h6>Review: ${review.body}</h6>
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