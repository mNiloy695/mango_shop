const handleCategory=()=>{
    const cat=document.getElementById("ul");
    fetch(`https://mango-shop-project-2.onrender.com/mango/categories/`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        data.forEach((category)=>{
            const li=document.createElement('li')
            li.innerHTML=`<a class="dropdown-item m-1  text-dark" onclick="handleMangoList(${category.id})">${category.name}</a>`;
            cat.append(li)

        });
        document.getElementById('dropdownMenuButton1').setAttribute('aria-expanded', 'true');
    })

}
handleCategory()


const categoryOption=()=>{
    const cat=document.getElementById("id_category");
    fetch(`https://mango-shop-project-2.onrender.com/mango/categories/`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        data.forEach((category)=>{
            const option=document.createElement('option');
            option.value=category.id;
            option.innerHTML=`${category.name}`;
            cat.append(option);

        });
    })

}
handleCategory()
categoryOption()
