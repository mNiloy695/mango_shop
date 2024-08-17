const order_table=()=>{
    const  tbody=document.getElementById('table-body');
    const token=localStorage.getItem('token')
    const user_id=localStorage.getItem('user_id')
    const username=localStorage.getItem('username')
    const name=localStorage.getItem('name')
    const email= localStorage.getItem('email')
    fetch(`https://mango-shop-project-2.onrender.com/mango/purchase/?user_id=${user_id}`,{
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
                tr.innerHTML+=`<td class="mt-2 text-danger text-center" onclick="handleUserOrderStatus(${history.id})">Cancel</td>`
                tr.innerHTML+=`<td class="text-center text-warning">Not Allow</td>`
            }
            else{
                tr.innerHTML+=`<td class="text-center">${history.order_status}</td>`
                if(history.order_status=="completed"){
                    tr.innerHTML+=`<td class="text-warning  text-center"><a  href="./review_form.html?mango_id=${history.mango}">review</a></td>`
                }
                else{
                     tr.innerHTML+=`<td class="text-center">Not Allow</td>`
                }
            }
            tbody.append(tr);
           fetch(`https://mango-shop-project-2.onrender.com/user/list/?user_id=${user_id}`)
           .then((response=>{
            return response.json();
           }))
           .then((user)=>{
            const div=document.getElementById('paragraph-box');
            div.innerHTML=`
             <p>Username: &nbsp ${user.username}</p>
             <p>Name &nbsp&nbsp&nbsp&nbsp: &nbsp ${user.first_name} ${user.last_name}</p>
             <p>Email &nbsp&nbsp&nbsp&nbsp: &nbsp ${user.email}</p> `;
           })
            
        });
    })
    .catch((err) =>{
        console.log(err)
    })
}
order_table();