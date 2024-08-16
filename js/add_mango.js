const addMango = async (event) => {
    event.preventDefault();

    try {
        // Create FormData object and append the image file
        const form_data = new FormData();
        const imageFile = document.getElementById('id_image').files[0];
        form_data.append('image', imageFile);

        // Upload image to imgbb
        const response = await fetch('https://api.imgbb.com/1/upload?key=70a11ac23df408c22afeb6a78e1439f0', {
            method: 'POST',
            body: form_data
        });

        if (!response.ok) {
            throw new Error('Image upload failed');
        }

        const data = await response.json();
        const mango_image = data.data.display_url;

        // Prepare data for the second request
        const form = document.getElementById('add_form');
        const formData = new FormData(form);
        const selectItem = document.getElementById('id_category');
        const selectValue = selectItem.value;
        const token = localStorage.getItem('token');

        // Replace image file with the image URL
        formData.delete('image'); // Remove the file from FormData if it exists
        formData.append('image', mango_image); // Add the image URL

        formData.append('category', selectValue);

        // Send data to the server
        const mangoResponse = await fetch('https://mango-shop-project-2.onrender.com/mango/list/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`
                    },
            body: formData
        });

        if (!mangoResponse.ok) {
            throw new Error('Failed to add mango');
        }

        const mango = await mangoResponse.json();
        console.log(mango)
        alert('Successfully added');
        window.location.href = './add_mango_form.html';

    } catch (err) {
        console.error(err);
        alert('An error occurred. Please try again.');
    }
};
