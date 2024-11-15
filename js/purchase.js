const Order = async (event) => {
    event.preventDefault();
    const form = document.getElementById('purchase-form');
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    const mango_id = new URLSearchParams(window.location.search).get('mango_id');

    if (token) {
        const formData = new FormData(form);
        const address = {
            street: formData.get('inputStreet'),
            city: formData.get('inputCity'),
            country: formData.get('inputCountry'),
            phone: formData.get('Phone'),
        };

        try {
            // POST the address
            const addressResponse = await fetch(`https://mango-shop-ten.vercel.app/mango/user/addresses/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify(address)
            });

            if (!addressResponse.ok) throw new Error('Address request failed');
            const addressData = await addressResponse.json();

            // Fetch mango quantity
            const mangoQuantity = await single_mango_quantity(parseInt(mango_id));
            const quantityMango = parseInt(formData.get('InputQuantity'));

            // Validate mango quantity
            if (quantityMango < 1 || quantityMango >= mangoQuantity.weight) {
                alert(`Please Enter correct Weight of mango`);
            } else {
                console.log(mangoQuantity.weight);
                const purchaseFormData = {
                    user: parseInt(user_id),
                    quantity: quantityMango,
                    mango: parseInt(mango_id),
                    order_status: "pending",
                    address: addressData.id,
                    price: quantityMango * mangoQuantity.price,
                };

                console.log(purchaseFormData);

                // POST the purchase data
                const purchaseResponse = await fetch(`https://mango-shop-ten.vercel.app/mango/purchase/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Token ${token}`,
                    },
                    body: JSON.stringify(purchaseFormData),
                });

                if (!purchaseResponse.ok) throw new Error('Purchase request failed');
                const orderData = await purchaseResponse.json();

                alert("Your order was successfully placed");
                window.location.href = `./mango_details.html?id=${mango_id}`;
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred: ' + err.message);
        }
    } else {
        alert('User not authenticated');
    }
}

const single_mango_quantity = async (id) => {
    try {
        const response = await fetch(`https://mango-shop-ten.vercel.app/mango/list/${id}`);
        if (!response.ok) throw new Error("Mango not found");
        const mango = await response.json();
        console.log(mango);
        return {
            "weight": mango.weight,
            "price": mango.price
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
