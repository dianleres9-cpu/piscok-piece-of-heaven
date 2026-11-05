let cart = [];

function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}

function addToCart(title, price, image) {
  const existingItem = cart.find(item => item.title === title);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ title, price, image, qty: 1 });
  }
  
  updateCartUI();
  toggleCart(); // Otomatis membuka sidebar keranjang saat barang ditambah
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotalPrice = document.getElementById('cart-total-price');
  
  cartItemsContainer.innerHTML = '';
  
  let totalQty = 0;
  let totalPrice = 0;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; color:#b2bec3; margin-top:40px; font-weight:600;">Keranjangmu masih kosong nih 🥺</p>';
  } else {
    cart.forEach(item => {
      totalQty += item.qty;
      totalPrice += item.price * item.qty;
      
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <span>${item.qty} x Rp${item.price.toLocaleString('id-ID')}</span>
        </div>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  }
  
  cartCount.innerText = totalQty;
  cartTotalPrice.innerText = 'Rp' + totalPrice.toLocaleString('id-ID');
}

function checkout() {
  if (cart.length === 0) {
    alert('Keranjang belanjaanmu masih kosong nih 🥺');
    return;
  }
  alert('✨ Pesanan Piece of Heaven berhasil masuk keranjang sistem! (Berhasil diuji tanpa langsung mengarah ke WhatsApp).');
}