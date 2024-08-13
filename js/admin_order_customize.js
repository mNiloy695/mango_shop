const all_order_table=()=>{
    const  tbody=document.getElementById('table-body');
    const token=localStorage.getItem('token')
    fetch(`https://mango-shop-project-2.onrender.com/mango/purchase/`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Token ${token}`,
        },
    }
    )
    .then((res)=>{
       if((res.ok)){
        return res.json();
       }
       else{
        throw new Error('History fetch Fail');
       }
    })
    .then((histories) => {
        console.log(histories);
        
        histories.forEach((history) =>{
            const tr=document.createElement('tr');
            tr.innerHTML=`
            <td>${(history.date).slice(0,10)}</td>
            <td>${history.mango}</td>
            <td>${history.quantity}</td>
            <td>${history.order_status}</td>
            <td>${(history.price*history.quantity).toFixed(2)}</td>
            `;
            if(history.order_status=="pending"){
                tr.innerHTML+=`<td class="btn  mt-2 bg-danger text-center" onclick="handleUserOrderStatus(${history.id})">/td>`
            }
            else{
                tr.innerHTML+=`<td class="bg-success text-center">${history.order_status}</td>`
            }
            tbody.append(tr);
            
        });
    })
    .catch((err) =>{
        console.log(err)
    })
}
all_order_table();