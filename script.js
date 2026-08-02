// ===== DATA PRODUK (sesuai nama gambar) =====
const productData = [
    { id: 1, name: 'Akun Free Fire Premium', category: 'Akun', price: 85000, img: 'IMAGES/akunff.jpg' },
    { id: 2, name: 'Voucher Google Play 100K', category: 'Kode Digital', price: 95000, img: 'IMAGES/voucher_google.jpg' },
    { id: 3, name: 'Jasa Desain Grafis', category: 'Jasa', price: 150000, img: 'IMAGES/jasa_desain.jpg' },
    { id: 4, name: 'Akun Spotify Premium', category: 'Akun', price: 65000, img: 'IMAGES/akun_spotify.jpg' },
    { id: 5, name: 'Voucher Steam Wallet $10', category: 'Kode Digital', price: 160000, img: 'IMAGES/voucher_steam.jpg' },
    { id: 6, name: 'Jasa Pembuatan Website', category: 'Jasa', price: 450000, img: 'IMAGES/jasa_website.jpg' },
    { id: 7, name: 'Akun Canva Pro', category: 'Akun', price: 120000, img: 'IMAGES/akun_canva.jpg' },
    { id: 8, name: 'Voucher PS Store 100K', category: 'Kode Digital', price: 105000, img: 'IMAGES/voucher_ps.jpg' },
    { id: 9, name: 'Jasa Edit Video', category: 'Jasa', price: 200000, img: 'IMAGES/jasa_edit_video.jpg' },
    { id: 10, name: 'Akun ChatGPT Plus', category: 'Akun', price: 210000, img: 'IMAGES/akun_chatgpt.jpg' }
];

// ===== STATE =====
let products = JSON.parse(localStorage.getItem('xrezzky_products')) || productData;
let cart = JSON.parse(localStorage.getItem('xrezzky_cart')) || [];
let transactions = JSON.parse(localStorage.getItem('xrezzky_transactions')) || [];
let depositHistory = JSON.parse(localStorage.getItem('xrezzky_deposits')) || [];
let depositTimer = null;
let depositTimeLeft = 300; // 5 menit
let currentQrData = null;

// ===== DOM =====
const productGrid = document.getElementById('productGrid');
const cartBadge = document.getElementById('cartBadge');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartBody = document.getElementById('cartBody');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== SAVE FUNCTIONS =====
function saveProducts() { localStorage.setItem('xrezzky_products', JSON.stringify(products)); }
function saveCart() { localStorage.setItem('xrezzky_cart', JSON.stringify(cart)); }
function saveTransactions() { localStorage.setItem('xrezzky_transactions', JSON.stringify(transactions)); }
function saveDeposits() { localStorage.setItem('xrezzky_deposits', JSON.stringify(depositHistory)); }
function getCartCount() { return cart.reduce((sum, item) => sum + item.qty, 0); }

// ===== RENDER PRODUK =====
function renderProducts() {
    productGrid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300/14243b/00b4ff?text=${encodeURIComponent(p.name)}'">
            </div>
            <div class="product-name">${p.name}</div>
            <div class="product-category">${p.category}</div>
            <div class="product-price">Rp ${p.price.toLocaleString('id-ID')}</div>
            <div class="product-actions">
                <button class="btn-add" data-id="${p.id}"><i class="fas fa-plus"></i> Tambah</button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) addToCart(product);
        });
    });
    document.getElementById('totalProductsStat').textContent = products.length;
}

// ===== KERANJANG =====
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    saveCart();
    updateCartUI();
    showToast(`${product.name} ditambahkan`);
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    showToast('Produk dihapus');
}

function updateCartUI() {
    const count = getCartCount();
    cartBadge.textContent = count;
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartBody.querySelector('.cart-empty').style.display = 'block';
        cartTotal.textContent = 'Rp 0';
        return;
    }
    cartBody.querySelector('.cart-empty').style.display = 'none';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" onerror="this.src='https://via.placeholder.com/56x56/14243b/00b4ff?text='">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')} × ${item.qty}</div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== SIDEBAR =====
function openCart() { cartSidebar.classList.add('open'); cartOverlay.classList.add('active'); }
function closeCart() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('active'); }
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ===== HAMBURGER =====
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ===== CHECKOUT =====
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) { showToast('Keranjang kosong!'); return; }
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const transaction = {
        id: Date.now(),
        type: 'Pembelian',
        items: cart.map(item => ({ name: item.name, qty: item.qty, price: item.price })),
        total: total,
        status: 'Sukses',
        date: new Date().toLocaleString('id-ID'),
        method: 'Transfer Bank'
    };
    transactions.push(transaction);
    saveTransactions();
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
    showToast(`Checkout berhasil! Total Rp ${total.toLocaleString('id-ID')}`);
    updateHistory();
});

// ===== DEPOSIT =====
document.getElementById('depositBtn').addEventListener('click', () => {
    let amount = parseInt(document.getElementById('depositAmount').value);
    if (isNaN(amount) || amount < 1) { showToast('Masukkan nominal yang valid'); return; }
    const method = document.getElementById('depositMethod').value;
    const qrData = `XREZZKY-DEPOSIT-${Date.now()}-${amount}-${method}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrData)}`;
    document.getElementById('qrImage').src = qrUrl;
    document.getElementById('qrAmount').textContent = `Rp ${amount.toLocaleString('id-ID')} - ${method}`;
    document.querySelector('.qr-placeholder').style.display = 'none';
    document.getElementById('qrResult').style.display = 'block';
    currentQrData = { amount, method, qrUrl, qrData, date: new Date().toLocaleString('id-ID') };
    depositTimeLeft = 300;
    updateTimerDisplay();
    showToast('QRIS digenerate, silakan scan dalam 5 menit');
    startDepositTimer();
});

function startDepositTimer() {
    if (depositTimer) clearInterval(depositTimer);
    depositTimer = setInterval(() => {
        depositTimeLeft--;
        updateTimerDisplay();
        if (depositTimeLeft <= 0) {
            clearInterval(depositTimer);
            depositTimer = null;
            document.getElementById('qrResult').style.display = 'none';
            document.querySelector('.qr-placeholder').style.display = 'block';
            showToast('Waktu deposit habis! Silakan generate ulang.');
            currentQrData = null;
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = String(Math.floor(depositTimeLeft / 60)).padStart(2, '0');
    const secs = String(depositTimeLeft % 60).padStart(2, '0');
    document.getElementById('qrTimer').textContent = `⏱️ ${mins}:${secs}`;
    if (depositTimeLeft < 60) {
        document.getElementById('qrTimer').style.color = '#ff4d6d';
    } else {
        document.getElementById('qrTimer').style.color = '#ffb347';
    }
}

// Konfirmasi Deposit
document.getElementById('confirmDepositBtn').addEventListener('click', () => {
    if (!currentQrData) { showToast('Tidak ada deposit aktif'); return; }
    if (depositTimeLeft <= 0) { showToast('Waktu deposit habis! Generate ulang.'); return; }
    const dep = currentQrData;
    const transaction = {
        id: Date.now(),
        type: 'Deposit',
        total: dep.amount,
        method: dep.method,
        status: 'Sukses',
        date: dep.date,
        items: [{ name: 'Deposit Saldo', qty: 1, price: dep.amount }]
    };
    transactions.push(transaction);
    saveTransactions();
    // Simpan ke riwayat deposit
    depositHistory.push({
        id: Date.now(),
        amount: dep.amount,
        method: dep.method,
        date: dep.date,
        status: 'Sukses'
    });
    saveDeposits();
    showToast(`Deposit Rp ${dep.amount.toLocaleString('id-ID')} berhasil!`);
    document.getElementById('qrResult').style.display = 'none';
    document.querySelector('.qr-placeholder').style.display = 'block';
    if (depositTimer) { clearInterval(depositTimer); depositTimer = null; }
    currentQrData = null;
    updateHistory();
    updateDepositHistory();
});

// Download QRIS
document.getElementById('downloadQrBtn').addEventListener('click', () => {
    if (!currentQrData) { showToast('Tidak ada QRIS untuk di-download'); return; }
    const link = document.createElement('a');
    link.download = `QRIS_XREZZKY_${Date.now()}.png`;
    link.href = currentQrData.qrUrl;
    link.target = '_blank';
    link.click();
    showToast('Download QRIS dimulai');
});

// Batal Deposit
document.getElementById('cancelDepositBtn').addEventListener('click', () => {
    if (depositTimer) { clearInterval(depositTimer); depositTimer = null; }
    document.getElementById('qrResult').style.display = 'none';
    document.querySelector('.qr-placeholder').style.display = 'block';
    currentQrData = null;
    showToast('Deposit dibatalkan');
});

// ===== RIWAYAT DEPOSIT =====
function updateDepositHistory() {
    const container = document.getElementById('depositHistoryList');
    if (depositHistory.length === 0) {
        container.innerHTML = `<div class="history-empty">Belum ada riwayat deposit</div>`;
        return;
    }
    container.innerHTML = depositHistory.slice().reverse().map(d => `
        <div class="history-item">
            <div class="h-left">
                <span class="h-title">Deposit</span>
                <span class="h-desc">${d.date} • ${d.method}</span>
            </div>
            <div class="h-right">
                <span>Rp ${d.amount.toLocaleString('id-ID')}</span>
                <span class="h-status">${d.status}</span>
            </div>
        </div>
    `).join('');
}

// ===== RIWAYAT TRANSAKSI =====
function updateHistory() {
    const container = document.getElementById('historyList');
    if (transactions.length === 0) {
        container.innerHTML = `<div class="history-empty"><i class="fas fa-inbox" style="font-size:3rem;color:#334466;"></i><p>Belum ada transaksi</p></div>`;
        return;
    }
    container.innerHTML = transactions.slice().reverse().map(t => `
        <div class="history-item">
            <div class="h-left">
                <span class="h-title">${t.type}</span>
                <span class="h-desc">${t.date} • ${t.method || 'Transfer'}</span>
                ${t.items ? t.items.map(i => `${i.name} (${i.qty})`).join(', ') : ''}
            </div>
            <div class="h-right">
                <span>Rp ${t.total.toLocaleString('id-ID')}</span>
                <span class="h-status">${t.status}</span>
            </div>
        </div>
    `).join('');
}

// ===== CUSTOMER STATS =====
function updateCustomerStats() {
    const uniqueCustomers = new Set(transactions.map(t => t.id)).size;
    document.getElementById('totalCustomersStat').textContent = Math.max(1, uniqueCustomers);
}

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Pesan terkirim! Kami akan merespon segera.');
    e.target.reset();
});

// ===== NAVIGATION ACTIVE =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===== INIT =====
renderProducts();
updateCartUI();
updateHistory();
updateDepositHistory();
updateCustomerStats();