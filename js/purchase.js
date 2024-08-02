const Order=(event)=>{
    event.preventDefault();
    const form=document.getElementById('purchase-form');
    const token=localStorage.getItem('token')
    const user_id=localStorage.getItem('user_id');
    const mango_id=new URLSearchParams(window.location.search).get('mango_id');
    if (token)
    {
        const formData=new FormData(form)
        const  address={
            street:formData.get('inputStreet'),
            city:formData.get('inputCity'),
            country:formData.get('inputCountry'),
            phone:formData.get('Phone'),
            }
        fetch(`https://mango-shop-project-2.onrender.com/mango/user/addresses/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Token ${token}`
            },
            body:JSON.stringify(address)
        })
        .then((res) =>res.json())
        .then((address) =>{
            const puschase_form_data={
                user:parseInt(user_id),
                quantity:parseInt(formData.get('InputQuantity')),
                mango:parseInt(mango_id),
                order_status:"pending",
                address:address.id,
            }
            const mango_id=parseInt(mango_id);
            const quantity_mango=formData.get('InputQuantity');
            const quantity_of_mango=single_mango_quantity(mango_id);
            console.log(quantity_of_mango);
            if(quantity_mango<2 && quantity_of_mango>quantity_mango){
                alert(`minimum 2 kg and maximum ${quantity_of_mango} kg`);
            }
            else{
            console.log(JSON.stringify(puschase_form_data))
            fetch(`https://mango-shop-project-2.onrender.com/mango/purchase/`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json", 
                    'Authorization': `Token ${token}`,
                },
                body:JSON.stringify(puschase_form_data),
    
            }
            )
            .then((res) => {
                if((!res.ok)){
                    console.log(res)
                    const err=document.getElementById('err');
                    err.innerHTML=`
                    <h1>please Enter Valid information !</h1>
                    `;
                    throw new  Error({'error':"invalid response"})
                }
                else{
                    return res.json();
                }
            })
            .then((order_data)=>{
  
                    alert("You order successpully placed")
                    window.location.href=`./mango_details.html?id=${mango_id}`;
                   
            })   
            .catch((err)=>{
                alert(err)
                console.log(err);
            })
        }
            
        })
        .then((err)=>{
            console.log(err);
        })
       
    }


}

const single_mango_quantity=(id)=>{
    fetch(`https://mango-shop-project-2.onrender.com/mango/list/${id}`)
    .then((res) =>{
        if(res.ok){
            return res.json;
        }
        else{
            throw Error("Not found the mango")
        }
    })
    .then((mango)=>{
        return mango.quantity;
    })
}