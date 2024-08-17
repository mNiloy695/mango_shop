const singleReviewHandle=()=>
{
    const ul=document.getElementById('ul');
    const param=new URLSearchParams(window.location.search).get('id')
    fetch(`https://mango-shop-project-2.onrender.com/mango/review/?mango_id=${param}`)
    .then((res)=>res.json())
    .then((reviews)=>{
        reviews.forEach((review)=>{
          fetch(`https://mango-shop-project-2.onrender.com/mango/list/${review.mango}/`)
          .then((res) => res.json())
          .then((mango)=>{
            console.log(mango)

            const li=document.createElement('li');
            li.innerHTML=`
                <div class="card border-0 h-100 p-3">
                    <div class="ratio ratio-1x1 mb-5">
                        <img src="${mango.image}" class="card-img-top image-fluid" loading="lazy" alt="img">
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