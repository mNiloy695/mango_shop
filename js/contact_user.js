const handleContact=(event)=>{
    event.preventDefault()
    const form=document.getElementById('contact-form');
    const formData=new FormData(form)
    const token=localStorage.getItem('token');
    if(token){
        const info={
            first_name:formData.get('first_name'),
            last_name:formData.get('last_name'),
            email:formData.get('email'),
            phone:formData.get('phone'),
            country:formData.get('country'),
            body:formData.get('body'),
        }
        fetch(`https://mango-shop-ten.vercel.app/user/contact/`,{
            method:"POST",
            headers:{"Content-Type":"application/json",
                "Authorization":`Token ${token}`,
            },
            body:JSON.stringify(info),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}