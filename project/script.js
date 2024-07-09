document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("productForm");
    const foodList = document.getElementById("foodList").querySelector("tbody");

    // Fetch all products and display them in the table
    function fetchProducts() {
        fetch("http://localhost:8080/api/products")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched products:", data); // Debugging line
                foodList.innerHTML = "";
                data.forEach(product => {
                    const row = foodList.insertRow();
                    row.innerHTML = `
                        <td>${product.id}</td>
                        <td>${product.itemName}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity}</td>
                        <td><button class="delete-btn" data-id="${product.id}">Delete</button></td>
                    `;
                });
                // Add event listeners to delete buttons
                document.querySelectorAll(".delete-btn").forEach(button => {
                    button.addEventListener("click", function() {
                        deleteProduct(this.dataset.id);
                    });
                });
            })
            .catch(error => console.error("Error fetching products:", error));
    }

    // Add a new product
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const productData = {
            id: document.getElementById("id").value,
            itemName: document.getElementById("itemName").value,
            price: document.getElementById("price").value,
            quantity: document.getElementById("quantity").value
        };

        console.log("Submitting product:", productData); // Debugging line

        fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Product added:", data); // Debugging line
            fetchProducts(); // Refresh the list
            form.reset(); // Clear the form fields
        })
        .catch(error => console.error("Error adding product:", error));
    });

    // Delete a product
    function deleteProduct(id) {
        fetch(`http://localhost:8080/api/products/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            console.log(`Product with id ${id} deleted`); // Debugging line
            fetchProducts(); // Refresh the list
        })
        .catch(error => console.error(`Error deleting product with id ${id}:`, error));
    }

    // Initialize the product list
    fetchProducts();
});

