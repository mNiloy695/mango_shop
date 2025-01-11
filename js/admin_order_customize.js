const order_table = async () => {
    const tbody = document.getElementById('table-body'); //table-body
    const token = localStorage.getItem('token');
    // const user_id = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    try {
        // Fetch order histoy
        
        const historyResponse = await fetch(`https://mango-shop-ten.vercel.app/mango/purchase/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
        });

        if (!historyResponse.ok) {
            throw new Error('History fetch failed');
        }

        const histories = await historyResponse.json();

        // Process each order history
        for (const history of histories) {
            // Fetch mango details
            const mangoResponse = await fetch(`https://mango-shop-ten.vercel.app/mango/list/${history.mango}`);
            if (!mangoResponse.ok) {
                throw new Error('Mango details fetch failed');
            }

            const mango = await mangoResponse.json();
            const category = mango.title;

            // Create table row
            const tr=document.createElement('tr');
            tr.innerHTML=`
            <td>${(history.date).slice(0,10)}</td>
            <td>${category}</td>
            <td>${history.quantity}</td>
            <td>${history.order_status}</td>
            <td>${(history.price*history.quantity).toFixed(2)}</td>
            `;
                tr.innerHTML+=`<td class="text-center"> <div class="col-sm-10 d-flex">
                            <select class="form-select" id="id_status" name="category">
                                <!-- Options should be populated dynamically from your Django view -->
                              <option value="pending">pending</option>
                              <option value="cancelled">cancelled</option>
                              <option value="running">running</option>
                              <option value="completed">completed</option>
                              
                            </select>
                            <button class="btn btn-warning"  type="submit" onclick="edit(${history.id})">Update</button>
                            
                        </div>
                        </td>`
       
            
            tbody.append(tr);
        }

    } catch (err) {
        console.error(err);
    }
};

order_table();


const edit=(id)=>{
 const ide=parseInt(id);
 const token=localStorage.getItem('token')
 const id_status=document.getElementById('id_status')
 const selectValue=id_status.value
 console.log(ide)
 console.log(selectValue);
 fetch(`https://mango-shop-ten.vercel.app/mango/purchase/${ide}/`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Token ${token}`,
    },
    body:JSON.stringify({order_status:selectValue}),
 })
 .then((res)=>{
    if(res.ok){
        return res.json();
    }
    else{
        throw new Error("invalid response");
    }
 })
 .then((mango)=>{
    alert("updated")
    console.log(mango);
    window.location.href='./all_order_history.html'
 })
 .catch((err)=>{
    console.log(err);
 })
}