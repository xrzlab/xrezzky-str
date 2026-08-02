// ===== DATA PRODUK =====
const productData = [
    { id: 1, name: 'Top Up Free Fire', category: 'Top Up', price: 0, img: 'IMAGES/topup_ff.jpg', isTopUp: true, game: 'Free Fire' },
    { id: 2, name: 'Top Up Mobile Legends', category: 'Top Up', price: 0, img: 'IMAGES/topup_ml.jpg', isTopUp: true, game: 'Mobile Legends' },
    { id: 3, name: 'Top Up Block Strike', category: 'Top Up', price: 0, img: 'IMAGES/topup_bs.jpg', isTopUp: true, game: 'Block Strike' },
    { id: 4, name: 'Top Up PUBG', category: 'Top Up', price: 0, img: 'IMAGES/topup_pubg.jpg', isTopUp: true, game: 'PUBG' },
    { id: 5, name: 'Top Up Roblox', category: 'Top Up', price: 0, img: 'IMAGES/topup_roblox.jpg', isTopUp: true, game: 'Roblox' },
    { id: 6, name: 'Top Up Among Us (SUS)', category: 'Top Up', price: 0, img: 'IMAGES/topup_sus.jpg', isTopUp: true, game: 'Among Us' },
    { id: 7, name: 'Akun Valorant Tier 3', category: 'Akun', price: 180000, img: 'IMAGES/akunvalorant.jpg', isTopUp: false },
    { id: 8, name: 'Voucher Shopee 100K', category: 'Voucher', price: 95000, img: 'IMAGES/vouchersg.jpg', isTopUp: false },
    { id: 9, name: 'Jasa Desain Logo', category: 'Jasa', price: 150000, img: 'IMAGES/jasadisain.jpg', isTopUp: false },
    { id: 10, name: 'Jasa Pembuatan Website', category: 'Jasa', price: 450000, img: 'IMAGES/jasaweb.jpg', isTopUp: false }
];

// ===== NOMINAL TOP UP =====
const topUpNominal = {
    'Free Fire': [{ label: '10.000', value: 10000 }, { label: '20.000', value: 20000, tag: 'Hemat', original: 23000 }, { label: '50.000', value: 50000, tag: 'Populer', original: 55000 }, { label: '100.000', value: 100000 }],
    'Mobile Legends': [{ label: '10.000', value: 10000 }, { label: '20.000', value: 20000, tag: 'Hemat', original: 23000 }, { label: '50.000', value: 50000, tag: 'Populer', original: 55000 }, { label: '100.000', value: 100000 }],
    'Block Strike': [{ label: '10.000', value: 10000 }, { label: '20.000', value: 20000, tag: 'Populer' }, { label: '50.000', value: 50000 }],
    'PUBG': [{ label: '10.000', value: 10000 }, { label: '20.000', value: 20000, tag: 'Hemat', original: 23000 }, { label: '50.000', value: 50000, tag: 'Populer', original: 55000 }, { label: '100.000', value: 100000 }],
    'Roblox': [{ label: '10.000', value: 10000 }, { label: '20.000', value: 20000, tag: 'Hemat', original: 23000 }, { label: '50.000', value: 50000, tag: 'Populer', original: 55000 }, { label: '100.000', value: 100000 }],
    'Among Us': [{ label: '10.000', value: 10000 }, { label: '20.000', value: 20000, tag: 'Populer' }, { label: '50.000', value: 50000 }]
};

// Game yang butuh Zone ID / Server ID selain User ID
const gamesNeedServerId = ['Mobile Legends'];

// ===== STATE =====
let products = JSON.parse(localStorage.getItem('xrezzky_products')) || productData;
let cart = JSON.parse(localStorage.getItem('xrezzky_cart')) || [];
let transactions = JSON.parse(localStorage.getItem('xrezzky_transactions')) || [];
let depositHistory = JSON.parse(localStorage.getItem('xrezzky_deposits')) || [];
let depositTimer = null;
let depositTimeLeft = 300;
let currentQrData = null;

// ===== STATE TOP UP MODAL =====
let currentTopUpProduct = null;
let currentTopUpNominal = null;
let currentTopUpMethod = 'Saldo';
let idVerified = false;
let verifiedNickname = '';
let savedGameIds = JSON.parse(localStorage.getItem('xrezzky_game_ids')) || {};

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
const modal = document.getElementById('topupModal');
const modalClose = document.getElementById('modalClose');
const modalGameTitle = document.getElementById('modalGameTitle');
const modalGameImage = document.getElementById('modalGameImage');
const modalGameName = document.getElementById('modalGameName');
const nominalList = document.getElementById('nominalList');
const topupUserId = document.getElementById('topupUserId');
const topupServerId = document.getElementById('topupServerId');
const checkIdBtn = document.getElementById('checkIdBtn');
const idCheckResult = document.getElementById('idCheckResult');
const topupSummary = document.getElementById('topupSummary');
const summaryNominal = document.getElementById('summaryNominal');
const summaryTotal = document.getElementById('summaryTotal');
const paymentChipGroup = document.getElementById('paymentChipGroup');
const processTopupBtn = document.getElementById('processTopupBtn');

// ===== SAVE =====
function saveProducts() { localStorage.setItem('xrezzky_products', JSON.stringify(products)); }
function saveCart() { localStorage.setItem('xrezzky_cart', JSON.stringify(cart)); }
function saveTransactions() { localStorage.setItem('xrezzky_transactions', JSON.stringify(transactions)); }
function saveDeposits() { localStorage.setItem('xrezzky_deposits', JSON.stringify(depositHistory)); }
function getCartCount() { return cart.reduce((sum, item) => sum + item.qty, 0); }

// ===== RENDER PRODUK =====
function renderProducts() {
    const categoryOrder = ['Top Up', 'Akun', 'Voucher', 'Jasa'];
    let html = '';
    categoryOrder.forEach(cat => {
        const items = products.filter(p => p.category === cat);
        if (items.length === 0) return;
        html += `<div class="category-group">`;
        html += `<div class="category-title"><i class="fas fa-tag"></i> ${cat}</div>`;
        html += `<div class="product-grid">`;
        items.forEach(p => {
            html += `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300/14243b/00b4ff?text=${encodeURIComponent(p.name)}'">
                    </div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-category">${p.category}</div>
                    <div class="product-price">${p.isTopUp ? 'Pilih Nominal' : 'Rp ' + p.price.toLocaleString('id-ID')}</div>
                    <div class="product-actions">
                        <button class="btn-add" data-id="${p.id}"><i class="fas fa-plus"></i> ${p.isTopUp ? 'Beli' : 'Tambah'}</button>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
    });
    productGrid.innerHTML = html;
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) {
                if (product.isTopUp) openTopUpModal(product);
                else addToCart(product);
            }
        });
    });
    document.getElementById('totalProductsStat').textContent = products.length;
}

// ===== MODAL TOP UP =====
function openTopUpModal(product) {
    currentTopUpProduct = product;
    currentTopUpNominal = null;
    currentTopUpMethod = 'Saldo';
    idVerified = false;
    verifiedNickname = '';

    modalGameTitle.textContent = 'Top Up ' + product.game;
    modalGameImage.src = product.img;
    modalGameImage.onerror = function() { this.src = 'https://via.placeholder.com/60x60/14243b/00b4ff?text=' + product.game; };
    modalGameName.textContent = product.game;

    // Reset form ID
    const needsServer = gamesNeedServerId.includes(product.game);
    topupServerId.style.display = needsServer ? 'block' : 'none';
    topupUserId.placeholder = `User ID ${product.game}`;
    const saved = savedGameIds[product.game];
    topupUserId.value = saved ? saved.userId : '';
    topupServerId.value = saved && saved.serverId ? saved.serverId : '';
    idCheckResult.className = 'id-check-result';
    idCheckResult.innerHTML = '';
    checkIdBtn.disabled = false;
    checkIdBtn.innerHTML = '<i class="fas fa-magnifying-glass"></i> Cek ID';

    // Reset nominal & payment
    paymentChipGroup.querySelectorAll('.pay-chip').forEach(chip => chip.classList.toggle('active', chip.dataset.method === 'Saldo'));
    topupSummary.style.display = 'none';

    renderNominalList(product);
    modal.classList.add('active');
}

function renderNominalList(product) {
    const nominalData = topUpNominal[product.game] || [];
    nominalList.innerHTML = '';
    nominalData.forEach(nom => {
        const btn = document.createElement('button');
        btn.className = 'nominal-btn';
        btn.type = 'button';
        btn.innerHTML = `
            ${nom.tag ? `<span class="nominal-tag ${nom.tag === 'Hemat' ? 'hemat' : ''}">${nom.tag}</span>` : ''}
            ${nom.label}
            <span class="nominal-price">Rp ${nom.value.toLocaleString('id-ID')}</span>
            ${nom.original ? `<span class="nominal-original">Rp ${nom.original.toLocaleString('id-ID')}</span>` : ''}
        `;
        btn.addEventListener('click', () => {
            if (!idVerified) {
                showToast('Cek ID akun dulu sebelum pilih nominal');
                return;
            }
            currentTopUpNominal = nom;
            nominalList.querySelectorAll('.nominal-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            summaryNominal.textContent = `${nom.label} (${product.game})`;
            summaryTotal.textContent = `Rp ${nom.value.toLocaleString('id-ID')}`;
            topupSummary.style.display = 'block';
        });
        nominalList.appendChild(btn);
    });
}

// ===== CEK ID / NICKNAME =====
checkIdBtn.addEventListener('click', () => {
    const userId = topupUserId.value.trim();
    const needsServer = currentTopUpProduct && gamesNeedServerId.includes(currentTopUpProduct.game);
    const serverId = topupServerId.value.trim();

    if (!userId || (needsServer && !serverId)) {
        idCheckResult.className = 'id-check-result show error';
        idCheckResult.innerHTML = `<i class="fas fa-circle-exclamation"></i> ${needsServer ? 'User ID & Zone ID wajib diisi' : 'User ID wajib diisi'}`;
        idVerified = false;
        return;
    }

    idVerified = false;
    checkIdBtn.disabled = true;
    checkIdBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengecek...';
    idCheckResult.className = 'id-check-result show loading';
    idCheckResult.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memeriksa ID akun...';

    setTimeout(() => {
        // Simulasi hasil cek nickname (tidak ada API game resmi yang tersambung)
        const fakeNicknames = ['ShadowXR', 'NightRezzky', 'ProGamerID', 'XR_Legend', 'DarkKnight07', 'CyberBlade'];
        verifiedNickname = fakeNicknames[Math.floor(Math.random() * fakeNicknames.length)] + '_' + userId.slice(-3);
        idVerified = true;
        checkIdBtn.disabled = false;
        checkIdBtn.innerHTML = '<i class="fas fa-rotate"></i> Cek Ulang';
        idCheckResult.className = 'id-check-result show success';
        idCheckResult.innerHTML = `<i class="fas fa-circle-check"></i> ID ditemukan: <strong>${verifiedNickname}</strong>`;

        // Simpan ID untuk kemudahan berikutnya
        savedGameIds[currentTopUpProduct.game] = { userId, serverId: needsServer ? serverId : '' };
        localStorage.setItem('xrezzky_game_ids', JSON.stringify(savedGameIds));
    }, 900);
});

// ===== PILIH METODE BAYAR =====
paymentChipGroup.addEventListener('click', (e) => {
    const chip = e.target.closest('.pay-chip');
    if (!chip) return;
    paymentChipGroup.querySelectorAll('.pay-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentTopUpMethod = chip.dataset.method;
});

// ===== PROSES TOP UP =====
processTopupBtn.addEventListener('click', () => {
    if (!idVerified) { showToast('Cek ID akun dulu sebelum memproses'); return; }
    if (!currentTopUpNominal) { showToast('Pilih nominal top up dulu'); return; }

    const product = currentTopUpProduct;
    const nom = currentTopUpNominal;
    const needsServer = gamesNeedServerId.includes(product.game);
    const accountLabel = needsServer
        ? `${topupUserId.value.trim()} (${topupServerId.value.trim()})`
        : topupUserId.value.trim();

    const transaction = {
        id: Date.now(),
        type: 'Top Up',
        items: [{ name: `Top Up ${product.game} ${nom.label}`, qty: 1, price: nom.value }],
        total: nom.value,
        status: 'Sukses',
        date: new Date().toLocaleString('id-ID'),
        method: currentTopUpMethod,
        game: product.game,
        accountId: accountLabel,
        nickname: verifiedNickname
    };
    transactions.push(transaction);
    saveTransactions();

    showToast(`Top Up ${product.game} ${nom.label} untuk ${verifiedNickname} berhasil!`);
    updateHistory();
    updateCustomerStats();
    closeModal();
});

function closeModal() { modal.classList.remove('active'); }
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// ===== KERANJANG =====
function addToCart(product) {
    const existing = cart.find(item => item.name === product.name && item.price === product.price);
    if (existing) existing.qty += 1;
    else cart.push({ ...product });
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
            <img src="${item.img}" onerror="this.src='https://via.placeholder.com/50x50/14243b/00b4ff?text='">
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
    updateCustomerStats();
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
            showToast('Waktu deposit habis! Generate ulang.');
            currentQrData = null;
        }
    }, 1000);
}
function updateTimerDisplay() {
    const mins = String(Math.floor(depositTimeLeft / 60)).padStart(2, '0');
    const secs = String(depositTimeLeft % 60).padStart(2, '0');
    document.getElementById('qrTimer').textContent = `⏱️ ${mins}:${secs}`;
    document.getElementById('qrTimer').style.color = depositTimeLeft < 60 ? '#ff4d6d' : '#ffb347';
}
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
    depositHistory.push({ id: Date.now(), amount: dep.amount, method: dep.method, date: dep.date, status: 'Sukses' });
    saveDeposits();
    showToast(`Deposit Rp ${dep.amount.toLocaleString('id-ID')} berhasil!`);
    document.getElementById('qrResult').style.display = 'none';
    document.querySelector('.qr-placeholder').style.display = 'block';
    if (depositTimer) { clearInterval(depositTimer); depositTimer = null; }
    currentQrData = null;
    updateHistory();
    updateDepositHistory();
    updateCustomerStats();
});
document.getElementById('downloadQrBtn').addEventListener('click', () => {
    if (!currentQrData) { showToast('Tidak ada QRIS'); return; }
    const link = document.createElement('a');
    link.download = `QRIS_XREZZKY_${Date.now()}.png`;
    link.href = currentQrData.qrUrl;
    link.target = '_blank';
    link.click();
    showToast('Download QRIS dimulai');
});
document.getElementById('cancelDepositBtn').addEventListener('click', () => {
    if (depositTimer) { clearInterval(depositTimer); depositTimer = null; }
    document.getElementById('qrResult').style.display = 'none';
    document.querySelector('.qr-placeholder').style.display = 'block';
    currentQrData = null;
    showToast('Deposit dibatalkan');
});

// ===== RIWAYAT =====
function updateDepositHistory() {
    const container = document.getElementById('depositHistoryList');
    if (depositHistory.length === 0) {
        container.innerHTML = `<div class="history-empty">Belum ada riwayat deposit</div>`;
        return;
    }
    container.innerHTML = depositHistory.slice().reverse().map(d => `
        <div class="history-item">
            <div class="h-left"><span class="h-title">Deposit</span><span class="h-desc">${d.date} • ${d.method}</span></div>
            <div class="h-right"><span>Rp ${d.amount.toLocaleString('id-ID')}</span><span class="h-status">${d.status}</span></div>
        </div>
    `).join('');
}
function updateHistory() {
    const container = document.getElementById('historyList');
    if (transactions.length === 0) {
        container.innerHTML = `<div class="history-empty"><i class="fas fa-inbox"></i><p>Belum ada transaksi</p></div>`;
        return;
    }
    container.innerHTML = transactions.slice().reverse().map(t => `
        <div class="history-item">
            <div class="h-left">
                <span class="h-title">${t.type}</span>
                <span class="h-desc">${t.date} • ${t.method || 'Transfer'}</span>
                ${t.items ? t.items.map(i => `${i.name} (${i.qty})`).join(', ') : ''}
                ${t.type === 'Top Up' && t.accountId ? `<br><span class="h-desc">ID: ${t.accountId}${t.nickname ? ' • ' + t.nickname : ''}</span>` : ''}
            </div>
            <div class="h-right"><span>Rp ${t.total.toLocaleString('id-ID')}</span><span class="h-status">${t.status}</span></div>
        </div>
    `).join('');
}
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

// ===== HERO VIDEO BANNER (AUTOPLAY + IKUT RASIO ASLI VIDEO) =====
const heroSection = document.querySelector('.hero');
const heroVideo = document.querySelector('.hero-video');

function updateHeroHeight() {
    if (!heroSection || !heroVideo || !heroVideo.videoWidth || !heroVideo.videoHeight) return;
    const ratio = heroVideo.videoHeight / heroVideo.videoWidth;
    const width = heroSection.offsetWidth;
    let height = width * ratio;
    // batasi biar tetap enak dilihat, tapi ngikutin bentuk asli video (bukan dipaksa 100vh)
    height = Math.max(420, Math.min(height, window.innerHeight * 0.95));
    heroSection.style.minHeight = height + 'px';
}

function tryPlayHeroVideo() {
    if (!heroVideo) return;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Sebagian browser mobile blokir autoplay sampai ada interaksi user
            const resume = () => heroVideo.play();
            document.addEventListener('touchstart', resume, { once: true });
            document.addEventListener('click', resume, { once: true });
        });
    }
}

if (heroVideo) {
    if (heroVideo.readyState >= 1) updateHeroHeight();
    heroVideo.addEventListener('loadedmetadata', updateHeroHeight);
    window.addEventListener('resize', updateHeroHeight);
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) tryPlayHeroVideo();
    });
    tryPlayHeroVideo();
}

// ===== INIT =====
renderProducts();
updateCartUI();
updateHistory();
updateDepositHistory();
updateCustomerStats();