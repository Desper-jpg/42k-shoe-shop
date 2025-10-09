// Sample Product Data (Fixed image paths and consistent formatting)
const products = [
    { id: 1, name: "air max", price: 20 * 130, image: "assets/air-max.jpeg" },
    { id: 2, name: "adidas ultraboost", price: 27.69230769230769 * 130, image: "assets/adidas-ultraboost.jpg" },
    { id: 3, name: "air force 1", price: 20 * 130, image: "assets/air-force-3.jpeg" },
    { id: 4, name: "vans", price: 10 * 130, image: "assets/vans.jpg" },
    { id: 5, name: "New Balance", price: 20 * 130, image: "assets/new-balance.jpg" },
    { id: 6, name: "Naked wolfe", price: 18.45384615384615 * 130, image: "assets/naked-wolfe.jpg" },
    { id: 7, name: "Vapor Max", price: 29.99230769230769 * 130, image: "assets/vapor-max.jpg" },
    { id: 8, name: "jordan", price: 19.22307692307692 * 130, image: "assets/jordan.jpeg" },
    { id: 9, name: "Blade max sport", price: 21.53846153846153 * 130, image: "assets/blade-max-sport.jpg" },
    { id: 10, name: "puma Palermo", price: 15.38461538461538 * 130, image: "assets/puma-palermo.jpg" },
    { id: 11, name: "Nike SB Dunk Low Pro", price: 19.22307692307692 * 130, image: "assets/nike-sb-dunk-low-pro.jpg" },
    { id: 12, name: "Clark Wallabee", price: 30 * 130, image: "assets/clark-wallabee.jpg"},
    { id: 13, name: "Clark Wallabee Boot", price: 30 * 130, image: "assets/clark-wallabee-boot.jpg"},
    { id: 14, name: "White Air Force 1", price: 14.61538461538461 * 130, image: "assets/white-air-force-1.jpg"},
    { id: 15, name: "Clark Original", price: 26.92307692307692 * 130, image: "assets/clark-original.jpg"},
    { id: 16, name: "Vans", price: 15.38461538461538 * 130, image: "assets/vans.jpg"},
    { id: 17, name: "Prada Thunder", price: 44.60769230769230 * 130, image: "assets/prada-thunder.jpg"},
    { id: 18, name: "White Prada Thunder", price: 44.61538461538461 * 130, image: "assets/white-prada-thunder.jpg"},
    { id: 19, name: "Valentino Garavani", price: 22.3 * 130, image: "assets/valentino-garavani.jpg"},
    { id: 20, name: "New Balance", price: 20 * 130, image: "assets/new-balance.jpg"},
    { id: 21, name: "Customized Air Force 1", price: 21.53846153846153 * 130, image: "assets/customized-air-force-1.jpg"},
    { id: 22, name: "Adidas Samba Double sole", price: 14.61538461538461 * 130, image: "assets/adidas-samba.jpg"},
    { id: 23, name: "Men's Leather Sandal", price: 20 * 130, image: "assets/men's-leather-sandal-(2).jpg"},
    { id: 24, name: "Air Force 1", price: 20 * 130, image: "assets/air-force-1.jpg"},
    { id: 25, name: "Air Jordan", price: 24.61538461538461 * 130, image: "assets/air-jordan.jpg"},
    { id: 26, name: "Air Max 95", price: 26.92307692307692 * 130, image: "assets/air-max-95.jpg"},
    { id: 27, name: "Aldo Men's Shoe", price: 23.07692307692307 * 130, image: "assets/aldo-men-shoe.jpg"},
    { id: 28, name: "Bape sta", price: 19.23076923076923 * 130, image: "assets/bapesta.jpg"},
    { id: 29, name: "Black & White Vans", price: 18.45384615384615 * 130, image: "assets/black-&-white-vans.jpg"},
    { id: 30, name: "Black Men Leather Shoe", price: 23.07692307692307 * 130, image: "assets/black-men-leather-shoe.jpg"},
    { id: 31, name: "D&G Platform Lowtop", price: 23.07692307692307 * 130, image: "assets/d&g-platform-low-top.jpg"},
    { id: 32, name: "Men's Leather Sandal", price: 21.53846153846153 * 130, image: "assets/men's-leather-sandal.jpg"},
    { id: 33, name: "Men's Leather Shoe", price: 30.76923076923076 * 130, image: "assets/men's-leather-shoe.jpg"},
    { id: 34, name: "New Balance 990v3", price: 20.76153846153846 * 130, image: "assets/new-balance-990v3.jpg"},
    { id: 35, name: "Nike Air Force", price: 18.46153846153846 * 130, image: "assets/nike-air-force.jpg"},
    { id: 36, name: "Nike Air Zoom", price: 19.23076923076923 * 130, image: "assets/nike-air-zoom.jpg"},
    { id: 37, name: "Sb Dunk Low", price: 16.91538461538461 * 130, image: "assets/sb-dunk-low.jpg"},
    { id: 38, name: "Timberland Loafer", price: 20.76153846153846 * 130, image: "assets/timberland-loafer.jpg"},
    { id: 39, name: "Vans Knu Skool", price: 14.61538461538461 * 130, image: "assets/vans-knu-skool.jpg"},
    { id: 40, name: "Worrior Sandal", price: 10 * 130, image: "assets/worrior.jpg"},
    { id: 41, name: "Birkenstock", price: 16.92307692307692 * 130, image: "assets/Birkenstock.jpg"},
    { id: 42, name: "Birkenstock Boston", price: 16.92307692307692 * 130, image: "assets/birkenstock-boston.jpg"},
    { id: 43, name: "Velco Strap Sandal", price: 12.30769230769230 * 130, image: "assets/Velcro-strap-sandals.jpg"},
    { id: 44, name: "(Mtumba) Clarks Original", price: 15.37692307692307 * 130, image: "assets/(Mtumba)-clarks.jpg"},
    { id: 45, name: "Playboy Sandal", price: 12.30769230769230 * 130, image: "assets/playboy.jpg"},
    { id: 46, name: "Hiking Sandal", price: 10 * 130, image: "assets/hiking-sandals.jpg"},
    { id: 47, name: "Lining Sandal", price: 9.230769230769230 * 130, image: "assets/lining.jpg"},
    { id: 48, name: "Puma Sandal", price: 8.461538461538461 * 130, image: "assets/puma-sandal.jpg"},
    { id: 49, name: "Timberland Leather Boots", price: 38.46153846153846 * 130, image: "assets/timberland-leather-boots.webp"},
    { id: 50, name: "Chelsea Boots 3Qh", price: 38.46153846153846 * 130, image: "assets/chelsea-boots_3Qh.webp"},
    { id: 51, name: "Clarks Genuine Leather Slip On Official Boots", price: 36.91538461538461 * 130, image: "assets/clarks-genuine-leather-slip-on-official-boots.webp"},
    { id: 52, name: "Crocodile Mules", price: 29.22307692307692 * 130, image: "assets/crocodile-mules.webp"},
    { id: 53, name: "Brown Leather Slipon Official Shoes", price: 34.60769230769230 * 130, image: "assets/brown-leather-slipon-official-shoes.webp"},
    { id: 54, name: "Double Monk Strap Official Shoes", price: 34.61538461538461 * 130, image: "assets/double-monk-strap-official-shoes.webp"},
    { id: 55, name: "Leather Cap-toe Official Shoes", price: 34.61538461538461 * 130, image: "assets/leather-cap-toe-official-shoes.webp"},
    { id: 56, name: "Clarks Leather Oxford Shoes", price: 34.61538461538461 * 130, image: "assets/clarks-leather-oxford-shoes.webp"},
    { id: 57, name: "Nike Shox Thermocreative", price: 33.07692307692307 * 130, image: "assets/nike-shox-thermocreative.webp"},
    { id: 58, name: "Air Force 1 Valentines Pink", price: 26.92307692307692 * 130, image: "assets/air-force-1-valentines-pink.webp"},
    { id: 59, name: "Yezzy 700", price: 30.76153846153846 * 130, image: "assets/yezzy-700.webp"},
    { id: 60, name: "Salomon Xa Pro 3d", price: 34.61538461538461 * 130, image: "assets/salomon-xa-pro-3d.webp"},
    { id: 61, name: "Salomon X Ultra", price: 38.46153846153846 * 130, image: "assets/salomon-x-ultra.webp"},
    { id: 62, name: "Adidas Jeddens", price: 32.30769230769230 * 130, image: "assets/adidas-jeddens.webp"},
    { id: 63, name: "Nike Tn", price: 27.68461538461538 * 130, image: "assets/nike-tn.webp"},
    { id: 64, name: "Adidas Samba", price: 16.92307692307692 * 130, image: "assets/adidas-samba.webp"},
    { id: 65, name: "Sb Chron", price: 29.99230769230769 * 130, image: "assets/sb-chron.webp"},
    { id: 66, name: "Dunk Low Grey Fog", price: 27.68461538461538 * 130, image: "assets/dunk-low-grey-fog.webp"},
    { id: 67, name: "Air Jordan-1 Low Black And White", price: 26.92307692307692 * 130, image: "assets/air-jordan-1-low-black-and-white.webp"},
    { id: 68, name: "Nocta X Nike Glide", price: 34.61538461538461 * 130, image: "assets/nocta-x-nike-glide.webp"}
    
];


const DOM = {
  productGrid: document.getElementById("product-grid"),
  cartItems: document.getElementById("cart-items"),
  navbarCounter: document.getElementById("navbar-cart-count"),
  popupCounter: document.getElementById("popup-cart-count"),
  contactForm: document.querySelector(".contact-form"),
  cartPopup: document.getElementById("cartPopup")
};

let cart = [];

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    cart = [];
  }
  updateCartDisplay();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  if (DOM.navbarCounter) DOM.navbarCounter.textContent = totalItems;
  if (DOM.popupCounter) DOM.popupCounter.textContent = totalItems;
}

function addToCart(product) {
  const sizeSelector = document.querySelector(`.shoe-size[data-id='${product.id}']`);
  const selectedSize = sizeSelector ? sizeSelector.value : null;

  if (!selectedSize || selectedSize === "Select") {
    alert("Please select a shoe size before adding to cart.");
    return;
  }

  const existing = cart.find(item => item.id === product.id && item.size === selectedSize);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, size: selectedSize, quantity: 1 });
  }

  saveCart();
  updateCartDisplay();
}


function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  DOM.cartItems.innerHTML = '';

  if (cart.length === 0) {
    DOM.cartItems.innerHTML = '<li>Your cart is empty</li>';
    if (cartCount) cartCount.textContent = '0';
    updateCartCount();
    return;
  }

  if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-item');
    li.innerHTML = `
  <div class="cart-item">
    <span class="item-name">${item.name} (Size ${item.size || 'N/A'})</span>
    <span class="item-price">KSh ${(item.price * item.quantity).toLocaleString('en-KE')}</span>
    <div class="item-controls">
      <button onclick="changeQuantity(${index}, -1)">−</button>
      <button onclick="changeQuantity(${index}, 1)">+</button>
      <button onclick="removeItem(${index})">×</button>
    </div>
  </div>
`;

    DOM.cartItems.appendChild(li);
  });

  updateCartCount();
}

function changeQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
}

function openCart() {
  console.log("Cart icon clicked");
  const cartPopup = document.getElementById('cartPopup');
  if (cartPopup) {
    cartPopup.style.display = 'block';
  }
}
function closeCart() {
  const cartPopup = document.getElementById('cartPopup');
  if (cartPopup) {
    cartPopup.style.display = 'none';
  }
}

function checkout() {
  const name = document.getElementById('customer-name')?.value.trim();
  const phone = document.getElementById('customer-phone')?.value.trim();

  if (!name || !phone) {
    alert('Please enter name and phone.');
    return;
  }

  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  let message = '';
  if (cart.length > 0) {
    message += `${location.origin}/${cart[0].image}\n\n`;
  }

  message += `🛒 *42K Shoe Shop Order*\n👤 Name: ${name}\n📞 Phone: ${phone}\n\n*Order Summary:*`;

  cart.forEach(item => {
    message += `\n\n🖼️ ${location.origin}/${item.image}`;
    message += `\n${item.name} (Size ${item.size}) x${item.quantity} = KSh ${(item.price * item.quantity).toLocaleString('en-KE')}`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `\n\n💰 Total: KSh ${total.toLocaleString('en-KE')}\n\nThank you! 🙌`;

  const whatsappNumber = '254793767341';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  console.log("🟢 WhatsApp message to send:", message);
  console.log("🔗 Encoded WhatsApp URL:", whatsappLink);

  window.open(whatsappLink, '_blank');

  cart = [];
  saveCart();
  updateCartDisplay();
  closeCart();
}

let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...products]; // Start with all products

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderPaginatedProducts();

  const loadingScreen = document.getElementById('loading');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.style.display = 'none', 300);
  }
});

function renderPaginatedProducts() {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, end);

  DOM.productGrid.innerHTML = paginatedProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}"
           onerror="this.src='https://via.placeholder.com/300'; this.alt='Image missing';">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">KSh ${product.price.toLocaleString('en-KE')}</p>
        <label>Size:
          <select class="shoe-size" data-id="${product.id}">
            <option value="Select">Select</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
          </select>
        </label>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `).join("");

  bindAddToCartButtons(paginatedProducts);
  renderPaginationControls();
}

function bindAddToCartButtons(paginatedProducts) {
  const buttons = DOM.productGrid.querySelectorAll('.add-to-cart');
  buttons.forEach(button => {
    const id = parseInt(button.dataset.id);
    const product = paginatedProducts.find(p => p.id === id);
    button.addEventListener('click', () => addToCart(product));
  });
}

function renderPaginationControls() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.innerText = "Previous";
    prev.onclick = () => {
      currentPage--;
      renderPaginatedProducts();
    };
    paginationContainer.appendChild(prev);
  }

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    if (i === currentPage) btn.disabled = true;
    btn.onclick = () => {
      currentPage = i;
      renderPaginatedProducts();
    };
    paginationContainer.appendChild(btn);
  }

  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.innerText = "Next";
    next.onclick = () => {
      currentPage++;
      renderPaginatedProducts();
    };
    paginationContainer.appendChild(next);
  }
}

function searchProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  renderPaginatedProducts();
}






