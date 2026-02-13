let products = [
  { id: 1, name: "Smart Watch", price: 2999  },
  { id: 2, name: "Wireless Earbuds", price: 1799  },
  { id: 3, name: "Gaming Mouse", price: 1299 },
  { id: 4, name: "Laptop Backpack", price: 999 },
  { id: 5, name: "Bluetooth Speaker", price: 2199 }
];

let cart = [];

/* DISPLAY PRODUCTS */
function showProducts() {
  let container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach((p) => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}
showProducts();

/* ADD TO CART */
function addToCart(id) {
  let product = products.find((p) => p.id === id);
  cart.push(product);

  updateCart();
}

/* UPDATE CART */
function updateCart() {
  let cartItems = document.getElementById("cartItems");
  let totalPrice = document.getElementById("totalPrice");
  let cartCount = document.getElementById("cartCount");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalPrice.innerText = total;
  cartCount.innerText = cart.length;
}

/* REMOVE ITEM */
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

/* CART OPEN/CLOSE */
function openCart() {
  document.getElementById("cartSidebar").classList.add("active");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("active");
}

/* SEARCH */
function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(input)
  );

  let container = document.getElementById("productContainer");
  container.innerHTML = "";

  filtered.forEach((p) => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}
