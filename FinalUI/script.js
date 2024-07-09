// document.addEventListener("DOMContentLoaded", function() {
//     const availableProducts = [
//         { id: 1, itemName: "Burger", price: 100 },
//         { id: 2, itemName: "Pizza", price: 400 },
//         { id: 3, itemName: "Coffee", price: 200 },
//         { id: 4, itemName: "Shake", price: 300 },
//         { id: 5, itemName: "Mojito", price: 150 }
//     ];

//     const productList = document.getElementById("cartList").getElementsByTagName("tbody")[0];
//     const availableProductsContainer = document.getElementById("availableProducts");

//     function renderAvailableProducts() {
//         availableProductsContainer.innerHTML = '';
//         availableProducts.forEach(product => {
//             const li = document.createElement("li");
//             li.textContent = `${product.id} ${product.itemName} - $${product.price.toFixed(2)}`;
//             const addButton = document.createElement("button");
//             addButton.textContent = "Add";
//             addButton.addEventListener("click", () => addProductToList(product));
//             li.appendChild(addButton);
//             availableProductsContainer.appendChild(li);
//         });
//     }

//     function addProductToList(product) {
//         const existingRow = Array.from(productList.rows).find(row => row.cells[0].textContent === String(product.id));

//         if (existingRow) {
//             const quantityCell = existingRow.cells[3];
//             let quantity = parseInt(quantityCell.textContent);
//             quantity++;
//             quantityCell.textContent = quantity;
//         } else {
//             const newRow = productList.insertRow();

//             const idCell = newRow.insertCell(0);
//             idCell.textContent = product.id;

//             const itemNameCell = newRow.insertCell(1);
//             itemNameCell.textContent = product.itemName;

//             const priceCell = newRow.insertCell(2);
//             priceCell.textContent = product.price;

//             const quantityCell = newRow.insertCell(3);
//             quantityCell.textContent = 1; // Default quantity

//             const actionsCell = newRow.insertCell(4);
//             const deleteButton = document.createElement("button");
//             deleteButton.textContent = "Delete";
//             deleteButton.classList.add("delete-btn");
//             deleteButton.addEventListener("click", () => {
//                 productList.removeChild(newRow);
//             });
//             actionsCell.appendChild(deleteButton);
//         }
//     }

//     const cartTable = document.getElementById("cartList");
//     const showCartBtn = document.getElementById("showCartBtn");

//     showCartBtn.addEventListener("click", function() {
//         if (cartTable.style.display === "none") {
//             cartTable.style.display = "table";
//             showCartBtn.textContent = "Hide Cart";
//         } else {
//             cartTable.style.display = "none";
//             showCartBtn.textContent = "Show Cart";
//         }
//     });

//     renderAvailableProducts();
// });


document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("cartList").getElementsByTagName("tbody")[0];
    const availableProductsContainer = document.getElementById("availableProducts");

    async function fetchAvailableProducts() {
        try {
            const response = await fetch('http://localhost:8080/api/products');
            const products = await response.json();
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }

    async function renderAvailableProducts() {
        const availableProducts = await fetchAvailableProducts();
        availableProductsContainer.innerHTML = '';

        availableProducts.forEach(product => {
            const li = document.createElement("li");
            li.textContent = `${product.id} ${product.itemName} - $${product.price.toFixed(2)}`;

            const actionDiv = document.createElement("div");
            actionDiv.classList.add("action-div");

            const quantitySpan = document.createElement("span");
            quantitySpan.textContent = "0";
            quantitySpan.classList.add("quantity-span");

            const addButton = document.createElement("button");
            addButton.textContent = "Add";
            addButton.classList.add("add-button");
            addButton.addEventListener("click", () => {
                addProductToList(product);
                updateAvailableProductQuantity(quantitySpan);
            });

            actionDiv.appendChild(addButton);
            actionDiv.appendChild(quantitySpan);

            li.appendChild(actionDiv);
            availableProductsContainer.appendChild(li);
        });
    }

    async function addProductToList(product) {
        const existingRow = Array.from(productList.rows).find(row => row.cells[0].textContent === String(product.id));

        if (existingRow) {
            const quantityCell = existingRow.cells[3];
            let quantity = parseInt(quantityCell.textContent);
            quantity++;
            quantityCell.textContent = quantity;

            await updateProductQuantity(product.id, quantity);
        } else {
            const newRow = productList.insertRow();

            const idCell = newRow.insertCell(0);
            idCell.textContent = product.id;

            const itemNameCell = newRow.insertCell(1);
            itemNameCell.textContent = product.itemName;

            const priceCell = newRow.insertCell(2);
            priceCell.textContent = product.price;

            const quantityCell = newRow.insertCell(3);
            quantityCell.textContent = 1;

            const actionsCell = newRow.insertCell(4);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", async () => {
                productList.removeChild(newRow);
                await deleteProductFromCart(product.id);
            });
            actionsCell.appendChild(deleteButton);

            await addProductToBackendCart(product);
        }
    }

    async function updateAvailableProductQuantity(quantitySpan) {
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
    }

    async function addProductToBackendCart(product) {
        try {
            await fetch('http://localhost:8080/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...product, quantity: 1 })
            });
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }

    async function updateProductQuantity(productId, quantity) {
        try {
            await fetch(`http://localhost:8080/api/products/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity })
            });
        } catch (error) {
            console.error('Error updating product quantity:', error);
        }
    }

    async function deleteProductFromCart(productId) {
        try {
            await fetch(`http://localhost:8080/api/products/${productId}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    }

    const cartTable = document.getElementById("cartList");
    const showCartBtn = document.getElementById("showCartBtn");

    showCartBtn.addEventListener("click", function() {
        if (cartTable.style.display === "none") {
            cartTable.style.display = "table";
            showCartBtn.textContent = "Hide Cart";
        } else {
            cartTable.style.display = "none";
            showCartBtn.textContent = "Show Cart";
        }
    });

    renderAvailableProducts();
});
