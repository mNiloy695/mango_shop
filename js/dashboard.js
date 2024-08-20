const dashboard=async ()=>{
    const user_id=document.getElementById('user')
    const items_id=document.getElementById('item')
    const reviews_id=document.getElementById('review')
    const orders_id=document.getElementById('order')
    const token=localStorage.getItem('token')
    user_id.innerHTML=""
    items_id.innerHTML=""
    reviews_id.innerHTML=""
    orders_id.innerHTML=""
    try{
          const userResponse=await fetch(`https://mango-shop-project-2.onrender.com/user/list/`,{
            method:"GET",
          }) 
          
         
      

          if(!userResponse.ok){
            throw Error("user fetch fail")
          }
          
          const user=await userResponse.json()
          user_id.innerHTML=`
          User <br> ${user.length}
         `
          
          const reviewResponse=await fetch(`https://mango-shop-project-2.onrender.com/mango/review/`,{
            method:"GET",
          })
          if(!reviewResponse.ok){
            throw Error("review fetch fail")
          }
          const review= await reviewResponse.json()
          reviews_id.innerHTML=`
          Review <br> ${review.length}
          `;
          const itemResponse=await fetch(`https://mango-shop-project-2.onrender.com/mango/list/`,{
            method:"GET",
          })
          if(!itemResponse.ok){
            throw Error('item fetch fail')
          }
          const item=await itemResponse.json()
          items_id.innerHTML=`
          Item <br> ${item.count}
         `
         
          const orderResponse=await fetch(`https://mango-shop-project-2.onrender.com/mango/purchase/`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Token ${token}`,
            }
            
          })
          if(!orderResponse.ok){
            throw Error("oder fetch fail")
          }
          const order=await orderResponse.json()
       
       
         orders_id.innerHTML=`
         Order <br> ${order.length}
        `
       
         
    }catch(err){
        console.log(err)
    }
}

dashboard()