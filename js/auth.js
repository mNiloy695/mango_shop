handleRegistration=(event)=>{
    event.preventDefault();
    err=document.getElementById('error');
    err.innerHTML=""
    const form=document.getElementById('registration_form');
    const formData=new FormData(form)
    const registration={
        username:formData.get('username'),
        first_name:formData.get('first_name'),
        last_name:formData.get('last_name'),
        email:formData.get('email'),
        password:formData.get("password"),
        confirm_password:formData.get('confirm_password')
    }
    
    if(registration.password === registration.confirm_password)
    {
        
    
        if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(registration.password)){
          
            console.log(registration)
            if(for_api_fetch(registration.username) == undefined){
                fetch(`http://127.0.0.1:8000/user/registration/`,{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(registration),
                })
                .then((res) => {
                    if(res.ok){
                        res.json()
                        
                    }
                    else
                    {
                        throw new Error("invalid information")
                    }
                })
                .then((data) => {
                    if(data){
                        alert('check you mail')
                    }
                })
            }

            

        }
        else {
            alert("Minimum eight characters, at least one letter, one number and one special character")
            err.innerHTML="Minimum eight characters, at least one letter, one number and one special character"
        }
    }
    else{
        err.innerHTML="Your password and Confrim password does'nt match"
        console.log(err.innerHTML)

    }

    console.log(registration);
}


const for_api_fetch=(param)=>{
    username=param;
    fetch(`http://127.0.0.1:8000/user/list/?username=${username}`)
    .then((res) => {
        if(res.ok){
            document.getElementById('error').innerHTML='The user Already exists';
            res.json()
        }
    })
    .then((data) =>{
        console.log(data);
    })
}


// login form handle

const handleLogin=(event)=>{
    event.preventDefault();
    const form=document.getElementById('loginForm');

    const formData=new FormData(form)
    alert('login')
    const login_info={
        username:formData.get('username'),
        password:formData.get('password'),
    }
    fetch(`https://mango-shop-project-2.onrender.com/user/login/`,{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(login_info),
    })
    .then((res) => {
        console.log(res)
        if(res.ok){
          return res.json()

        }
        else {
            alert("errror")
            throw new Error('Network response was not ok.');
        }
    })
    .then((data)=>{
        
        if(!data.error){
        localStorage.setItem('token',data.token);
        localStorage.setItem('user_id',data.user_id)
        localStorage.setItem("is_staff",data.is_staff)
        window.location.href="./index.html";
        }
        else{
            const  id=document.getElementById('er')
            id.innerHTML=`
            ${data.error}
            `
        }
        
    })
    .catch((err) =>{
        console.log(err);
    })
}


const handleLogout=()=>{
    const token=localStorage.getItem('token')
    console.log(token)
     if(token){
        fetch(`https://mango-shop-project-2.onrender.com/user/logout/`,{
            method:"POST",
            headers:{'Content-Type': 'application/json',
                'Authorization':`Token ${token}`,
            },
        })
        .then((res) =>{
            if(!res.ok)
            {
                throw new Error("fetch fail")
                
            }
            else{
                return res.json()
            }
        })
        .then((data)=>{
                if(data.detail){
                    localStorage.removeItem('token');
                    localStorage.removeItem('user_id')
                    localStorage.removeItem("is_staff")
                    window.location.href="./index.html";
                }
                 
        })
        .catch((err)=>{
            console.log(err);
        }
    );
     }
    
}