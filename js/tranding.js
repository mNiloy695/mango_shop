const tranding=()=>{
    fetch(`https://mango-shop-project-2.onrender.com/mango/list/`)
    .then((res)=>{
        return res.json()
    })
    .then((mangoes)=>{
        let a=0;
        mango_container=document.getElementById('mango-containers')
        mangoes.results.forEach((mango)=>{
            if(a<4){
                a+=1;
                const div=document.createElement('div')
                div.classList.add('c')
                div.innerHTML=`
                <div class="card m-3" style="width:16rem; ">
                <img src="${mango.image}" class="card-img-top img "  alt="...">
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
            }
            else{
                
                return;
            }
        })
    })
}
tranding();