const order_table = async () => {
    const tbody = document.getElementById('table-body');
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    try {
        // Fetch order history
        const historyResponse = await fetch(`https://mango-shop-project-2.onrender.com/mango/purchase/?user_id=${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
        });

        if (!historyResponse.ok) {
            throw new Error('History fetch failed');
        }

        const histories = await historyResponse.json();

        // Process each order history
        for (const history of histories) {
            // Fetch mango details
            const mangoResponse = await fetch(`https://mango-shop-project-2.onrender.com/mango/list/${history.mango}`);
            if (!mangoResponse.ok) {
                throw new Error('Mango details fetch failed');
            }

            const mango = await mangoResponse.json();
            const category = mango.title;

            // Create table row
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${(history.date).slice(0, 10)}</td>
                <td><a class="btn-sm" href="./mango_details.html?id=${history.mango}">${category}</a></td>
                <td>${history.quantity}</td>
                <td>${history.order_status}</td>
                <td>${(history.price * history.quantity).toFixed(2)}</td>
            `;

            if (history.order_status === "pending") {
                tr.innerHTML += `<td class="btn text-danger text-center" onclick="handleUserOrderStatus(${history.id})">X</td>`;
                tr.innerHTML += `<td class="text-center  text-dark">Not Allowed</td>`;
            } else {
                tr.innerHTML += `<td class="text-center">${history.order_status}</td>`;
                if (history.order_status === "completed") {
                    tr.innerHTML += `<td class="text-warning text-center"><a class="text-success" href="./review_form.html?mango_id=${history.mango}">Review</a></td>`;
                } else {
                    tr.innerHTML += `<td class="text-center">Not Allowed</td>`;
                }
            }
            tbody.append(tr);
        }

        // Fetch and display user info
        const userResponse = await fetch(`https://mango-shop-project-2.onrender.com/user/list/?user_id=${user_id}`);
        if (!userResponse.ok) {
            throw new Error('User info fetch failed');
        }

        const user = await userResponse.json();
        const div = document.getElementById('paragraph-box');
        console.log(user)
        div.innerHTML = `
            <p>Username: &nbsp ${user.username}</p>
            <p>Name &nbsp&nbsp&nbsp&nbsp: &nbsp ${user.first_name} ${user.last_name}</p>
            <p>Email &nbsp&nbsp&nbsp&nbsp: &nbsp ${user.email}</p>
        `;

    } catch (err) {
        console.error(err);
    }
};

order_table();
