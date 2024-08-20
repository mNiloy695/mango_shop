const rev=async ()=>{
    const review_box=document.getElementById('review-box')
    review_box.innerHTML=""
    const id=new URLSearchParams(window.location.search).get('id')
    try{
        const reviewResponse=await fetch(`https://mango-shop-project-2.onrender.com/mango/review/?mango_id=${id}`,{
            method:"GET",
        })
        if(!reviewResponse.ok){
            alert("yes")
            review_box.innerHTML=`
              <h2 class="text-center  text-bold mb-3">CUSTOMER REVIEW'S</h2>
              <h4>Not found</h4>
               <img src="./images/not_found.png" class="img-fluid mx-auto  w-50"  alt="...">
            
            `
            throw Error("review fetch fail")
        }
        
        const reviews = await reviewResponse.json();
        console.log("re",reviews.length) 
        if(reviews.length==0){
            review_box.innerHTML=`
             <h2 class="text-center  text-bold mb-3">CUSTOMER REVIEW'S</h2>
             <h4>Not found</h4>
            <img src="./images/not_found.png" class="mx-auto w-50 img-fluid"  alt="...">
          `
        }
        else{

       
            review_box.innerHTML=`
            <h2 class="text-center  text-bold mb-3">CUSTOMER REVIEW'S</h2>
          <div class="swiffy-slider  slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein">
            <ul class="slider-container  mb-3" id="slide-ul">
       
            </ul>
        
            <button type="button" class="slider-nav" aria-label="Go left"></button>
            <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>
        
            <div class="slider-indicators">
                <button class="" aria-label="Go to slide"></button>
                <button aria-label="Go to slide" class=""></button>
                <button aria-label="Go to slide" class="active"></button>
                <button aria-label="Go to slide"></button>
                <button aria-label="Go to slide"></button>
            </div>
        </div>
            
            `;
        
        }

    }catch(err){
        alert("review not found for this mango")
        console.log("err")
    }
}

rev()