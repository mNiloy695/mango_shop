const review=(event)=>{
    event.preventDefault();
    alert("yes")
    const mango_id=new URLSearchParams(window.location.search).get('mango_id')
    const token=localStorage.getItem('token')
    const form=document.getElementById('form')
    const formData=new FormData(form)
    const review_select=document.getElementById('review-select')
    const ratinges=review_select.value
    const user_id=localStorage.getItem('user_id')
    const info={
        reviewer:parseInt(user_id),
        body:formData.get('body'),
        rating:ratinges,
        mango:mango_id,

    }
    console.log(JSON.stringify(info))
    fetch(`https://mango-shop-project-2.onrender.com/mango/review/?$mango_id=${mango_id}`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Token ${token}`,
        },
        body:JSON.stringify(info)
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
    })
    .then((data)=>{
        console.log(data);
    })
}