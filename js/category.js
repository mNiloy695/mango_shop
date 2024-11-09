const handleCategory=()=>{
    const cat=document.getElementById("ul");
    fetch(`https://mango-shop-ten.vercel.app/mango/categories/`)
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
    fetch(`https://mango-shop-ten.vercel.app/mango/categories/`)
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

const category=()=>{
    const cat=document.getElementById("category");
    fetch(`https://mango-shop-ten.vercel.app/mango/categories/`)
    .then((res) => {
        return res.json()
})
    .then((data) =>{
        console.log(data)
        data.forEach((category)=>{
            const a=document.createElement('a')
            a.innerHTML=`${category.name}`
            a.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default action of the link
                handleMangoList(category.id); // Call your function with the category id
            });
            cat.append(a)
        });
    })

}
category()
// handleCategory()
categoryOption()
