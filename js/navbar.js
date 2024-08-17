fetch("navbar.html")
.then((res) => res.text())
.then((data) => {
    const token=localStorage.getItem('token')
    const navbar=document.getElementById('navbar')
    const user_id=localStorage.getItem('user_id');
    const staff=localStorage.getItem("is_staff")
    navbar.innerHTML=data
    const nav_element=document.getElementById('nav-link')
    if(token == undefined){
      
        nav_element.innerHTML+=`
       <li class="col-md-6 col-sm-12"><a href="./registration.html">SignUp</a></li>
        <li class="col-md-6 col-sm-12"><a href="./login.html">Login</a></li>
        `
    }
    else{
        nav_element.innerHTML+=`
        <li class="col-md-6 col-sm-12"><a href="./user_order_history.html?user_id=${user_id}">Profile</a></li>
        <li class="col-md-6 col-sm-12"><a href="#" onclick="handleLogout()">Logout</a></li>
         
        `

    }
} )