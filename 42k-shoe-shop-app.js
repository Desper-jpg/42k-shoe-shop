// Sample Product Data (Fixed image paths and consistent formatting)
const products = [
    { id: 1, name: "air max", price: 23.0769230769 * 130, image: "assets/air-max.jpeg" },
    { id: 2, name: "Dr. Martins", price: 24.6153846154 * 130, image: "assets/Dr-Martins.jpg" },
    { id: 3, name: "air force 1", price: 20 * 130, image: "assets/air-force-3.jpeg" },
    { id: 4, name: "Air Max 97", price: 27.6923076923 * 130, image: "assets/Air-Max-97.jpg"},
    { id: 5, name: "New Balance", price: 27.6923076923 * 130, image: "assets/new-balance.jpg" },
    { id: 6, name: "Nike Shox", price: 33.0769230769 * 130, image: "assets/Nike-Shox.jpeg"},
    { id: 7, name: "Vapor Max", price: 27.6923076923 * 130, image: "assets/vapor-max.jpg" },
    { id: 8, name: "Air jordan 11", price: 26.1538461538 * 130, image: "assets/Air-Jordan-11.jpg" },
    { id: 9, name: "Blade max sport", price: 21.53846153846153 * 130, image: "assets/blade-max-sport.jpg" },
    { id: 10, name: "puma Palermo", price: 15.38461538461538 * 130, image: "assets/puma-palermo.jpg" },
    { id: 11, name: "Nike SB Dunk Low Pro", price: 19.22307692307692 * 130, image: "assets/nike-sb-dunk-low-pro.jpg" },
    { id: 12, name: "Clark Wallabee", price: 28.4538461538 * 130, image: "assets/clark-wallabee.jpg"},
    { id: 13, name: "Clark Wallabee", price: 26.1538461538 * 130, image: "assets/Clark-wallbees.jpg"},
    { id: 14, name: "White Air Force 1", price: 18.4615384615 * 130, image: "assets/white-air-force-1.jpg"},
    { id: 15, name: "Clark Original", price: 26.92307692307692 * 130, image: "assets/clark-original.jpg"},
    { id: 16, name: "Vans", price: 15.38461538461538 * 130, image: "assets/vans.jpg"},
    { id: 17, name: "Prada Thunder", price: 44.60769230769230 * 130, image: "assets/prada-thunder.jpg"},
    { id: 18, name: "White Prada Thunder", price: 44.61538461538461 * 130, image: "assets/white-prada-thunder.jpg"},
    { id: 19, name: "Valentino Garavani", price: 22.3 * 130, image: "assets/valentino-garavani.jpg"},
    { id: 20, name: "Single Sole Samba", price: 19.2307692308 * 130, image: "assets/Single-Sole-Samba.jpg"},
    { id: 21, name: "Customized Air Force 1", price: 23.0769230769 * 130, image: "assets/customized-air-force-1.jpg"},
    { id: 22, name: "Adidas Samba Double sole", price: 20 * 130, image: "assets/adidas-samba.jpg"},
    { id: 23, name: "Vans", price: 15.3846153846 * 130, image: "assets/Vans.jpg"},
    { id: 24, name: "Air Force 1", price: 21.53846153846153 * 130, image: "assets/air-force-1.jpg"},
    { id: 25, name: "Air Jordan", price: 24.61538461538461 * 130, image: "assets/air-jordan.jpg"},
    { id: 26, name: "Air Max 95", price: 26.92307692307692 * 130, image: "assets/air-max-95.jpg"},
    { id: 27, name: "Aldo Men's Shoe", price: 19.2307692308 * 130, image: "assets/aldo-men-shoe.jpg"},
    { id: 28, name: "Bape sta", price: 22.3076923077 * 130, image: "assets/bapesta.jpg"},
    { id: 29, name: "Black & Green Vans", price: 15.3846153846 * 130, image: "assets/black-&-white-vans.jpg"},
    { id: 30, name: "Black Men Leather Shoe", price: 21.5384615385 * 130, image: "assets/black-men-leather-shoe.jpg"},
    { id: 31, name: "D&G Platform Lowtop", price: 20 * 130, image: "assets/d&g-platform-low-top.jpg"},
    { id: 32, name: "New Balance 9060", price: 27.6923076923 * 130, image: "assets/New-Balance-9060.jpg"},
    { id: 33, name: "Men's Leather Shoe", price: 26.1538461538 * 130, image: "assets/men's-leather-shoe.jpg"},
    { id: 34, name: "New Balance 990v3", price: 20.7692307692 * 130, image: "assets/new-balance-990v3.jpg"},
    { id: 35, name: "Air Force 1", price: 23.0769230769 * 130, image: "assets/nike-air-force.jpg"},
    { id: 36, name: "Nike Air Zoom", price: 25.3769230769 * 130, image: "assets/nike-air-zoom.jpg"},
    { id: 37, name: "Sb Dunk Low", price: 20 * 130, image: "assets/sb-dunk-low.jpg"},
    { id: 38, name: "Timberland Loafer", price: 20.76153846153846 * 130, image: "assets/timberland-loafer.jpg"},
    { id: 39, name: "Vans Knu Skool", price: 14.61538461538461 * 130, image: "assets/vans-knu-skool.jpg"},
    { id: 40, name: "Nike portal Pink", price: 24.6153846154 * 130, image: "assets/Nike-Portal-Pink.jpg"},
    { id: 41, name: "Nike Air Max 97", price: 26.15384615384615 * 130, image: "assets/Nike-Air-Max-97.jpg"},
    { id: 42, name: "Nike Air Max 97", price: 26.15384615384615 * 130, image: "assets/Nike-Air-Max-9-(2).jpg"},
    { id: 43, name: "Nike Air Max 97", price: 26.15384615384615 * 130, image: "assets/Nike-Air-Max-9-(3).jpg"},
    { id: 44, name: "Adidas Gazelle ", price: 22.30769230769230 * 130, image: "assets/Adidas-Gazelle-(2).jpg"},
    { id: 45, name: "Suede Clogs ", price: 23.84615384615384 * 130, image: "assets/suede-clogs-(2).jpg"},
    { id: 46, name: "Suede Clogs", price: 23.84615384615384 * 130, image: "assets/suede-clogs-(3).jpg"},
    { id: 47, name: "Suede Clogs", price: 23.84615384615384 * 130, image: "assets/suede-clogs-(4).jpg"},
    { id: 48, name: "Suede Clogs", price: 23.84615384615384 * 130, image: "assets/suede-clogs.jpg"},
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
    { id: 64, name: "Adidas Samba", price: 18.46153846153846 * 130, image: "assets/adidas-samba.webp"},
    { id: 65, name: "Sb Chron", price: 29.99230769230769 * 130, image: "assets/sb-chron.webp"},
    { id: 66, name: "Dunk Low Grey Fog", price: 27.68461538461538 * 130, image: "assets/dunk-low-grey-fog.webp"},
    { id: 67, name: "Air Jordan-1 Low Black And White", price: 26.92307692307692 * 130, image: "assets/air-jordan-1-low-black-and-white.webp"},
    { id: 68, name: "Nocta X Nike Glide", price: 34.61538461538461 * 130, image: "assets/nocta-x-nike-glide.webp"},
    { id: 69, name: "Nike Dunk Low(Active Fuchsia)", price: 23.84615384615384 * 130, image: "assets/Nike-Dunk-Low.jpg"},
    { id: 70, name: "Slide Sandals", price: 20 * 130, image: "assets/slide-sandals.jpg"},
    { id: 71, name: "Nike Dunk Low", price: 18.4615384615 * 130, image: "assets/Nike-Dunk-Low-(3).jpg"},
    { id: 72, name: "Foam Clog", price: 11.5384615385 * 130, image: "assets/Foam-Clog.jpg"},
    { id: 73, name: "Adidas Samba", price: 21.53846153846153 * 130, image: "assets/Adidas-Samba.jpg"},
    { id: 74, name: "Yeezy Foam Runner", price: 10 * 130, image: "assets/Yeezy-Foam-Runner.jpg"},
    { id: 75, name: "Nike Cortez", price: 23.0769230769 * 130, image: "assets/Nike-Cortez.jpg"},
    { id: 76, name: "Nike Cortez", price: 23.0769230769 * 130, image: "assets/Nike-Cortez-(2).jpg"},
    { id: 77, name: "Nike Air Max 720", price: 30.7692307692 * 130, image: "assets/Nike-Air-Max-720.jpg"},
    { id: 78, name: "Air Jordan 13", price: 28.4615384615 * 130, image: "assets/Air-Jordan-13-Retro.jpg"},
    { id: 79, name: "Air Jordan 11", price: 24.6153846154 * 130, image: "assets/Air-Jordan-11.jpg"},
    { id: 80, name: "Nike Zoom X", price: 25.3846153846 * 130, image: "assets/Nike-Zoom-X.jpg"},
    { id: 81, name: "Cortez", price: 23.8461538462 * 130, image: "assets/Cortez.jpg"},
    { id: 82, name: "Timberland", price: 32.3076923077 * 130, image: "assets/Timberland.jpg"},
    { id: 83, name: "Black & White Air Force 1", price: 26.1538461538 * 130, image: "assets/Black-&-White-Air-Force-1.jpg"},
    { id: 84, name: "adidas ultraboost", price: 27.69230769230769 * 130, image: "assets/adidas-ultraboost.jpg"},
    { id: 85, name: "vans", price: 17.6923076923 * 130, image: "assets/vans.jpg"},
    { id: 86, name: "Naked wolfe", price: 23.07692307692307 * 130, image: "assets/naked-wolfe.jpg" }
    
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

  const whatsappNumber = '254794375020';
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
      <img src="${product.image}" alt="${product.name}" class="product-image" data-image="${product.image}"
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
  setupImageModal();
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
function setupImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = modal.querySelector(".close-modal");

  document.querySelectorAll(".product-image").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src; // safer than dataset
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
    modalImg.src = "";
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  };
}


function searchProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  renderPaginatedProducts();
}






















































