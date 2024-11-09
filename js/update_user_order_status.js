const handleUserOrderStatus=(id)=>{
    const token=localStorage.getItem('token')
    const info={order_status:"cancelled"}
    console.log(JSON.stringify(info))
    fetch(`https://mango-shop-ten.vercel.app/mango/purchase/${id}/`,{
       method:"PUT",
       headers: {
        "Content-Type": "application/json", 
        'Authorization': `Token ${token}`,
    },
    body:JSON.stringify(info),

    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
        else{
            throw new Error("response error")
        }
    }
    )
    .then((order)=>{
        window.location.href=`user_order_history.html?user_id=${order.user}`

    })
    .catch((err)=>{
        console.log(err);
    })
}