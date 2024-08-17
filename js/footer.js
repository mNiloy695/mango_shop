const footerHandle=()=>{
    const footer=document.getElementById("footer");
    fetch(`footer.html`)
    .then((res) => res.text())
    .then((data) =>{
        footer.innerHTML=data;
    })    
}
footerHandle()

const footerHandles=()=>{
    const footer=document.getElementById("footers");
    fetch(`footer.html`)
    .then((res) => res.text())
    .then((data) =>{
        footer.innerHTML=data;
    })    
}
footerHandles()