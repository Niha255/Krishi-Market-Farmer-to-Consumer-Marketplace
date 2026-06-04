const API = "http://localhost:5000/api/products";

// Load products
async function loadProducts() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("productList");
    list.innerHTML = "";

    data.forEach(p => {
        const li = document.createElement("li");
        li.innerText = `${p.name} - ₹${p.price} - ${p.farmer}`;
        list.appendChild(li);
    });
}

// Add product
async function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const farmer = document.getElementById("farmer").value;

    if (!name || !price || !farmer) {
        alert("Fill all fields");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, price, farmer })
    });

    loadProducts();
}

// Load on start
loadProducts();