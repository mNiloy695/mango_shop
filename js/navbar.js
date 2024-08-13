fetch("navbar.html")
.then((res) => res.text())
.then((data) => {
    const token=localStorage.getItem('token')
    const navbar=document.getElementById('navbar')
    const user_id=localStorage.getItem('user_id');
    const staff=localStorage.getItem("is_staff")
    navbar.innerHTML=data
    const nav_element=document.getElementById('nav-element')
    if(token == undefined){
      
        nav_element.innerHTML+=`

       <li class="nav-item">
          <a class="nav-link btn m-2 btn-outline-info text-white" href="./registration.html">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn m-2 btn-outline-success text-white" href="./login.html">Login</a>
        </li>
        `
    }
    else{
        nav_element.innerHTML+=`
         <li class="nav-item">
          <a class="nav-link btn m-2 btn-outline-success text-white" href="./user_order_history.html?user_id=${user_id}">Order history</a>
        </li>
          <li class="nav-item">
            <a class="nav-link  btn m-2 btn-outline-danger text-white" onclick="handleLogout()">Logout</a>
          </li>
        `

    }
} )