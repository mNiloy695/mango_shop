const addMango = (event) => {
    event.preventDefault();
    const form = document.getElementById('add_form');
    const formData = new FormData(form);
    const selectItem = document.getElementById('id_category');
    const selectValue = selectItem.value;
    console.log("value", selectValue);
    const token = localStorage.getItem('token');

    // Append the selected category to formData
    formData.append('category', selectValue);

    fetch('https://mango-shop-project-2.onrender.com/mango/list/', {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`
        },
        body: formData // Send formData directly
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Invalid response");
        }
    })
    .then((mango) => {
        alert("Successfully added");
        console.log(mango);
        window.location.href = './add_mango_form.html';
    })
    .catch((err) => {
        console.log(err);
    });
};
