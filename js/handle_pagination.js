const handleMangoListForPagination=(page_no)=>{
    const mango_container=document.getElementById('mango-container');
    mango_container.innerHTML=" ";
    fetch(`https://mango-shop-project-2.onrender.com/mango/list/?page=${page_no?page_no:""}`)
    .then((res) => res.json())
    .then((data)=>{
      let c=data.count/16;
      console.log(c)
      const c_int =parseInt(c)
      console.log(c_int)
      const d=c-c_int
      console.log(d)
      if(d>0){
        c+=1;
        c=parseInt(c)
      }
      console.log(data)
      const pag=document.getElementById("pag")
      pag.innerHTML=" "
     
      for(let i=0;i<c;i++){
      const pag=document.getElementById("pag")
      pag.innerHTML+=`
       <li class="page-item"><a class="page-link" onclick="handleMangoListForPagination(${i+1})">${i}</a></li>`;
      }
      
        console.log(data)
        data.results.forEach((mango)=>
          {
          const div=document.createElement('div')
          
          div.innerHTML=`
          <div class="card g-2 m-3 col-sm" style="width:16rem; ">
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
            
          })
       
        
    })
}
handleMangoListForPagination()