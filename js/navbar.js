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
          <a class="nav-link btn m-2 btn-danger text-white" href="./registration.html">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn m-2 btn-success text-white" href="./login.html">Login</a>
        </li>
        `
    }
    else if(staff!="false")
    {
        nav_element.innerHTML+=`
  
           <li class="nav-item">
        <a class="nav-link btn m-2 btn dasboard" href="./all_order_history.html">All Orders</a>
      </li>
       <li class="nav-item">
            <a class="nav-link  btn m-2 btn-danger" onclick="handleLogout()">Logout</a>
          </li>
        `;
      
    }
    else{
        nav_element.innerHTML+=`
         <li class="nav-item">
          <a class="nav-link btn m-2 btn-success" href="./user_order_history.html?user_id=${user_id}">Order history</a>
        </li>
          <li class="nav-item">
            <a class="nav-link  btn m-2 btn-danger" onclick="handleLogout()">Logout</a>
          </li>
        `

    }
} )