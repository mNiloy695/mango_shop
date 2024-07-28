const footerHandle=()=>{
    const footer=document.getElementById("footer");
    fetch(`footer.html`)
    .then((res) => res.text())
    .then((data) =>{
        footer.innerHTML=data;
    })    
}
footerHandle()