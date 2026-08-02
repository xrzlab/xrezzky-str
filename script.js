// ===== DATA PRODUK =====
const productData = [
    { id: 1, name: 'Top Up Free Fire', category: 'Top Up', price: 0, img: 'IMAGES/topup_ff.jpg', isTopUp: true, game: 'Free Fire' },
    { id: 2, name: 'Top Up Mobile Legends', category: 'Top Up', price: 0, img: 'IMAGES/topup_ml.jpg', isTopUp: true, game: 'Mobile Legends' },
    { id: 3, name: 'Top Up Blood Strike', category: 'Top Up', price: 0, img: 'IMAGES/topup_bs.jpg', isTopUp: true, game: 'Blood Strike' },
    { id: 4, name: 'Top Up PUBG Mobile', category: 'Top Up', price: 0, img: 'IMAGES/topup_pubg.jpg', isTopUp: true, game: 'PUBG Mobile' },
    { id: 5, name: 'Top Up Roblox', category: 'Top Up', price: 0, img: 'IMAGES/topup_roblox.jpg', isTopUp: true, game: 'Roblox' },
    { id: 6, name: 'Top Up Among Us (SUS)', category: 'Top Up', price: 0, img: 'IMAGES/topup_sus.jpg', isTopUp: true, game: 'Among Us' },
    { id: 7, name: 'Top Up PUBG New State', category: 'Top Up', price: 0, img: 'IMAGES/topup_pubgns.jpg', isTopUp: true, game: 'PUBG New State' },
    { id: 8, name: 'Akun Valorant Tier 3', category: 'Akun', price: 180000, img: 'IMAGES/akunvalorant.jpg', isTopUp: false },
    { id: 12, name: 'Akun Free Fire', category: 'Akun', price: 250000, img: 'IMAGES/akun_ff.jpg', isTopUp: false },
    { id: 13, name: 'Akun Mobile Legends', category: 'Akun', price: 200000, img: 'IMAGES/akun_ml.jpg', isTopUp: false },
    { id: 14, name: 'Akun Roblox', category: 'Akun', price: 90000, img: 'IMAGES/akun_roblox.jpg', isTopUp: false },
    { id: 15, name: 'Akun Blood Strike', category: 'Akun', price: 75000, img: 'IMAGES/akun_bs.jpg', isTopUp: false },
    { id: 16, name: 'Akun Super Sus (SUS)', category: 'Akun', price: 60000, img: 'IMAGES/akun_sus.jpg', isTopUp: false },
    { id: 9, name: 'Voucher Shopee 100K', category: 'Voucher', price: 95000, img: 'IMAGES/vouchersg.jpg', isTopUp: false },
    { id: 17, name: 'Voucher GoFood 25K', category: 'Voucher', price: 24000, img: 'IMAGES/voucher_gofood.jpg', isTopUp: false },
    { id: 18, name: 'Voucher Alfamart 50K', category: 'Voucher', price: 49000, img: 'IMAGES/voucher_alfamart.jpg', isTopUp: false },
    { id: 19, name: 'Voucher Indomaret 50K', category: 'Voucher', price: 49000, img: 'IMAGES/voucher_indomaret.jpg', isTopUp: false },
    { id: 20, name: 'Voucher Tokopedia 50K', category: 'Voucher', price: 49500, img: 'IMAGES/voucher_tokopedia.jpg', isTopUp: false },
    { id: 10, name: 'Jasa Desain Logo', category: 'Jasa', price: 150000, img: 'IMAGES/jasadisain.jpg', isTopUp: false },
    { id: 11, name: 'Jasa Pembuatan Website', category: 'Jasa', price: 450000, img: 'IMAGES/jasaweb.jpg', isTopUp: false },
    { id: 21, name: 'Jasa Setup Panel Pterodactyl', category: 'Jasa', price: 100000, img: 'IMAGES/jasa_pterodactyl.jpg', isTopUp: false },
    { id: 22, name: 'Jasa Install & Setup Bot WhatsApp', category: 'Jasa', price: 75000, img: 'IMAGES/jasa_botwa.jpg', isTopUp: false }
];

// ===== KATALOG TOP UP LENGKAP (harga sudah +500 markup dari harga supplier) =====
const topUpCatalog = {
    'Mobile Legends': {
        needsServer: true,
        categories: {
            'Diamond': [
                { label: '5 Diamond', value: 2009 },
                { label: '12 Diamond', value: 3926 },
                { label: '14 Diamond (13+1)', value: 4430 },
                { label: '19 Diamond (17+2)', value: 5853 },
                { label: '28 Diamond (26+2)', value: 8226 },
                { label: '36 Diamond (33+3)', value: 10214 },
                { label: '45 Diamond (41+4)', value: 13318 },
                { label: '50 Diamond (46+4)', value: 14024 },
                { label: '59 Diamond (53+6)', value: 16093 },
                { label: '67 Diamond (62+5)', value: 18262 },
                { label: '70 Diamond (64+7)', value: 19184 },
                { label: '85 Diamond (77+8)', value: 22480 },
                { label: '100 Diamond (92+8)', value: 26726 },
                { label: '112 Diamond (102+10)', value: 30059 },
                { label: '140 Diamond (127+13)', value: 37095 },
                { label: '145 Diamond (131+14)', value: 39044 },
                { label: '170 Diamond (154+16)', value: 44410 },
                { label: '185 Diamond (169+16)', value: 48636 },
                { label: '222 Diamond (200+22)', value: 57593 },
                { label: '240 Diamond (217+23)', value: 62342 },
                { label: '257 Diamond (234+23)', value: 67004 },
                { label: '284 Diamond (254+30)', value: 73754 },
                { label: '296 Diamond (256+40)', value: 75920 },
                { label: '344 Diamond (312+32)', value: 89459 },
                { label: '355 Diamond (317+38)', value: 91771 },
                { label: '408 Diamond (367+41)', value: 105332 },
                { label: '429 Diamond (390+39)', value: 110877 },
                { label: '460 Diamond (414+46)', value: 119066 },
                { label: '514 Diamond (468+46)', value: 132710 },
                { label: '568 Diamond (503+65)', value: 143465 },
                { label: '600 Diamond (546+55)', value: 151989 },
                { label: '706 Diamond (625+81)', value: 178999 },
                { label: '875 Diamond (774+101)', value: 219676 },
                { label: '963 Diamond (859+104)', value: 238546 },
                { label: '1.050 Diamond (937+113)', value: 260564 },
                { label: '1.136 Diamond (990+146)', value: 282017 },
                { label: '1.220 Diamond (1093+127)', value: 303707 },
                { label: '1.412 Diamond (1250+162)', value: 352870 },
                { label: '2.010 Diamond (1780+302)', value: 475296 },
                { label: '2.195 Diamond (1860+335)', value: 523181 },
                { label: '2.901 Diamond (2485+416)', value: 698839 },
                { label: '3.688 Diamond (3099+589)', value: 893326 },
                { label: '4.394 Diamond (3724+670)', value: 1046963 },
                { label: '5.532 Diamond (4649+883)', value: 1316954 },
                { label: '7.720 Diamond (6509+1218)', value: 1836200 },
                { label: '9.288 Diamond (7740+1548)', value: 2200417 },
                { label: '12.976 Diamond (10877+2099)', value: 3068001 },
                { label: '16.080 Diamond (13664+2416)', value: 3795378 },
                { label: '27.864 Diamond (23232+4632)', value: 6587085 }
            ],
            'Weekly': [
                { label: 'Weekly Elite Bundle', value: 14250 },
                { label: 'Weekly Diamond Pass', value: 27900, tag: 'Populer' },
                { label: 'Weekly 2x (440 Diamond)', value: 55967 },
                { label: 'Weekly 3x (660 Diamond)', value: 83654 },
                { label: 'Weekly 4x (880 Diamond)', value: 111339 },
                { label: 'Weekly 5x (1.100 Diamond)', value: 139026 }
            ],
            'First TopUp': [
                { label: 'First TopUp 50 Diamond', value: 15638, tag: 'Hemat' },
                { label: 'First TopUp 150 Diamond', value: 45478 },
                { label: 'First TopUp 250 Diamond', value: 75422 },
                { label: 'First TopUp 500 Diamond', value: 150897 }
            ]
        }
    },
    'Free Fire': {
        needsServer: false,
        categories: {
            'Diamond': [
                { label: '5 Diamond', value: 1370 },
                { label: '10 Diamond', value: 2165 },
                { label: '20 Diamond', value: 3756 },
                { label: '25 Diamond', value: 4551 },
                { label: '30 Diamond', value: 5345 },
                { label: '50 Diamond', value: 6900, tag: 'Populer' },
                { label: '55 Diamond', value: 7698 },
                { label: '60 Diamond', value: 8495 },
                { label: '70 Diamond', value: 9089 },
                { label: '75 Diamond', value: 9868 },
                { label: '80 Diamond', value: 10706 },
                { label: '100 Diamond', value: 13296 },
                { label: '120 Diamond', value: 15465 },
                { label: '140 Diamond', value: 17607 },
                { label: '145 Diamond', value: 18460 },
                { label: '150 Diamond', value: 19167 },
                { label: '160 Diamond', value: 21143 },
                { label: '190 Diamond', value: 24024 },
                { label: '210 Diamond', value: 26137 },
                { label: '250 Diamond', value: 31747 },
                { label: '280 Diamond', value: 34970 },
                { label: '355 Diamond', value: 43165 },
                { label: '375 Diamond', value: 46486 },
                { label: '400 Diamond', value: 49513 },
                { label: '425 Diamond', value: 51605 },
                { label: '475 Diamond', value: 58035 },
                { label: '500 Diamond', value: 61024, tag: 'Hemat' },
                { label: '635 Diamond', value: 77938 },
                { label: '720 Diamond', value: 86531 },
                { label: '800 Diamond', value: 95911 },
                { label: '1.000 Diamond', value: 120906 },
                { label: '1.450 Diamond', value: 170883 },
                { label: '1.800 Diamond', value: 214165 },
                { label: '2.000 Diamond', value: 237804 },
                { label: '2.140 Diamond', value: 254849 },
                { label: '2.720 Diamond', value: 322672 },
                { label: '4.000 Diamond', value: 471243 },
                { label: '7.290 Diamond', value: 856463 }
            ],
            'Membership': [
                { label: 'Membership Mingguan', value: 27099 },
                { label: 'Boyah Pass', value: 41048, tag: 'Populer' },
                { label: 'Membership Bulanan', value: 79649 }
            ],
            'Level Up Pass': [
                { label: 'Level 6', value: 5635 },
                { label: 'Level 10', value: 8997 },
                { label: 'Level 15', value: 8997 },
                { label: 'Level 20', value: 8997 },
                { label: 'Level 25', value: 9105 },
                { label: 'Level 30', value: 14054 }
            ]
        }
    },
    'PUBG Mobile': {
        needsServer: false,
        categories: {
            'UC': [
                { label: '60 UC', value: 15538 },
                { label: '120 UC', value: 30496 },
                { label: '240 UC', value: 60428 },
                { label: '300 UC', value: 73870, tag: 'Populer' },
                { label: '385 UC', value: 90693 },
                { label: '445 UC', value: 105651 },
                { label: '505 UC', value: 120609 },
                { label: '565 UC', value: 135568 },
                { label: '600 UC', value: 147168 },
                { label: '720 UC', value: 165831 },
                { label: '840 UC', value: 195926 },
                { label: '900 UC', value: 210706 },
                { label: '1.500 UC', value: 346025 },
                { label: '1.800 UC', value: 376636 },
                { label: '2.125 UC', value: 451776 },
                { label: '2.460 UC', value: 526914 },
                { label: '3.850 UC', value: 752678 },
                { label: '4.030 UC', value: 798547 },
                { label: '4.175 UC', value: 827817 },
                { label: '4.510 UC', value: 903950 },
                { label: '4.835 UC', value: 979089 },
                { label: '5.170 UC', value: 1054227 },
                { label: '5.650 UC', value: 1129714 },
                { label: '5.975 UC', value: 1204853 },
                { label: '6.310 UC', value: 1279991 },
                { label: '6.635 UC', value: 1319958 },
                { label: '6.970 UC', value: 1393256 },
                { label: '8.100 UC', value: 1469487 },
                { label: '32.400 UC', value: 5953095 },
                { label: '89.100 UC', value: 14689743 }
            ]
        }
    },
    'Among Us': {
        needsServer: false,
        categories: {
            'Golden': [
                { label: '100 Golden', value: 11620 },
                { label: '310 Golden', value: 32323, tag: 'Populer' },
                { label: '520 Golden', value: 53651 },
                { label: '1.060 Golden', value: 106675 },
                { label: '2.180 Golden', value: 270704 },
                { label: '5.600 Golden', value: 693165 }
            ],
            'Membership': [
                { label: 'Weekly Card', value: 14454, tag: 'Hemat' },
                { label: 'Super Pass', value: 65442 },
                { label: 'Super Pass Bundle', value: 132040 },
                { label: 'Monthly Card', value: 171884 },
                { label: 'Super VIP Card', value: 187419 }
            ]
        }
    },
    'Blood Strike': {
        needsServer: false,
        categories: {
            'Gold': [
                { label: '100 Gold', value: 13464 },
                { label: '300 Gold', value: 41200, tag: 'Populer' },
                { label: '500 Gold', value: 69069 },
                { label: '1.000 Gold', value: 129510 },
                { label: '2.000 Gold', value: 258495 },
                { label: '5.000 Gold', value: 645238 }
            ]
        }
    },
    'PUBG New State': {
        needsServer: false,
        categories: {
            'NC': [
                { label: '300 NC', value: 16725 },
                { label: '1.500 + 80 NC', value: 80414, tag: 'Populer' },
                { label: '3.600 + 250 NC', value: 190365 },
                { label: '9.300 + 930 NC', value: 490056 },
                { label: '15.000 + 1.800 NC', value: 791176 },
                { label: '30.000 + 5.000 NC', value: 1610593 }
            ]
        }
    },
    'Roblox': {
        needsServer: false,
        categories: {
            'Robux': [
                { label: '10.000', value: 10500 },
                { label: '20.000', value: 20500, tag: 'Hemat', original: 23000 },
                { label: '50.000', value: 50500, tag: 'Populer', original: 55000 },
                { label: '100.000', value: 100500 }
            ]
        }
    }
};

// Game yang butuh Zone ID / Server ID selain User ID
const gamesNeedServerId = Object.keys(topUpCatalog).filter(g => topUpCatalog[g].needsServer);

// ===== STATE =====
let products = JSON.parse(localStorage.getItem('xrezzky_products')) || productData;
let cart = JSON.parse(localStorage.getItem('xrezzky_cart')) || [];
let transactions = JSON.parse(localStorage.getItem('xrezzky_transactions')) || [];
let depositHistory = JSON.parse(localStorage.getItem('xrezzky_deposits')) || [];
let depositTimer = null;
let depositTimeLeft = 300;
let currentQrData = null;

// ===== STATE AUTH / AKUN =====
let users = JSON.parse(localStorage.getItem('xrezzky_users')) || {};
let currentUserEmail = localStorage.getItem('xrezzky_current_user') || null;

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
const nominalCategoryTabs = document.getElementById('nominalCategoryTabs');
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
                <div class="product-card"${!p.isTopUp ? ` data-detail-id="${p.id}"` : ''}>
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
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) {
                if (product.isTopUp) openTopUpModal(product);
                else addToCart(product);
            }
        });
    });
    document.querySelectorAll('.product-card[data-detail-id]').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.detailId);
            const product = products.find(p => p.id === id);
            if (product) openProductPage(product);
        });
    });
    document.getElementById('totalProductsStat').textContent = products.length;
}

// ===== VIEWER GAMBAR FULL SCREEN (khusus foto akun) =====
const imgViewer = document.getElementById('imgViewer');
const imgViewerImage = document.getElementById('imgViewerImage');
function openImgViewer(src, alt) {
    imgViewerImage.src = src;
    imgViewerImage.alt = alt || '';
    imgViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeImgViewer() {
    imgViewer.classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('imgViewerClose').addEventListener('click', closeImgViewer);
imgViewer.addEventListener('click', (e) => { if (e.target === imgViewer) closeImgViewer(); });

// ===== HALAMAN DETAIL PRODUK (Akun / Voucher / Jasa) =====
const productPage = document.getElementById('productPage');

function getProductDescription(product) {
    if (product.category === 'Akun') {
        return `Akun ${product.name.replace('Akun ', '')} siap pakai. Data akun (login & detail) dikirim otomatis ke Riwayat Transaksi setelah pembayaran berhasil dikonfirmasi. Ada kendala? Hubungi Layanan Bantuan sebelum order ya.`;
    }
    if (product.category === 'Voucher') {
        return `Kode voucher digital untuk ${product.name} dikirim otomatis setelah pembayaran sukses. Pastikan cek syarat & ketentuan dari pihak penerbit voucher sebelum digunakan.`;
    }
    if (product.category === 'Jasa') {
        return `${product.name} dikerjakan langsung oleh tim XREZZKY STORE. Estimasi waktu pengerjaan & detail teknis akan dikonfirmasi lewat WhatsApp setelah order kamu masuk.`;
    }
    return 'Produk digital dari XREZZKY STORE — aman, cepat, dan terpercaya.';
}

function openProductPage(product) {
    document.getElementById('ppName').textContent = product.name;
    document.getElementById('ppNameBig').textContent = product.name;
    document.getElementById('ppCategory').textContent = product.category;
    document.getElementById('ppPrice').textContent = 'Rp ' + product.price.toLocaleString('id-ID');
    document.getElementById('ppDesc').textContent = getProductDescription(product);

    const img = document.getElementById('ppImage');
    img.src = product.img;
    img.alt = product.name;
    img.onerror = function() { this.src = 'https://via.placeholder.com/500x500/14243b/00b4ff?text=' + encodeURIComponent(product.name); };

    document.getElementById('ppAddBtn').onclick = () => {
        addToCart(product);
        showToast(`${product.name} ditambahkan ke keranjang`);
    };

    productPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}
document.getElementById('productPageBack').addEventListener('click', () => {
    productPage.classList.remove('active');
    document.body.style.overflow = '';
});
document.getElementById('ppImageFrame').addEventListener('click', () => {
    const img = document.getElementById('ppImage');
    openImgViewer(img.src, img.alt);
});

// ===== MODAL TOP UP =====
let currentTopUpCategory = null;

function openTopUpModal(product) {
    currentTopUpProduct = product;
    currentTopUpNominal = null;
    currentTopUpMethod = 'Saldo';
    idVerified = false;
    verifiedNickname = '';

    modalGameTitle.textContent = 'Top Up ' + product.game;
    modalGameImage.src = product.img;
    modalGameImage.onerror = function() { this.src = 'https://via.placeholder.com/60x60/14243b/00b4ff?text=' + product.game; };
    document.getElementById('tpBannerBg').style.backgroundImage = `url('${product.img}')`;
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

    const catalog = topUpCatalog[product.game];
    const categories = catalog ? Object.keys(catalog.categories) : [];
    currentTopUpCategory = categories[0] || null;
    renderCategoryTabs(product, categories);
    renderNominalList(product);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderCategoryTabs(product, categories) {
    if (categories.length <= 1) {
        nominalCategoryTabs.style.display = 'none';
        nominalCategoryTabs.innerHTML = '';
        return;
    }
    nominalCategoryTabs.style.display = 'flex';
    nominalCategoryTabs.innerHTML = categories.map(cat =>
        `<button type="button" class="cat-tab ${cat === currentTopUpCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
    ).join('');
    nominalCategoryTabs.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentTopUpCategory = tab.dataset.cat;
            nominalCategoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTopUpNominal = null;
            topupSummary.style.display = 'none';
            renderNominalList(product);
        });
    });
}

function renderNominalList(product) {
    const catalog = topUpCatalog[product.game];
    const nominalData = (catalog && currentTopUpCategory) ? (catalog.categories[currentTopUpCategory] || []) : [];
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

    // Kalau bayar pakai Saldo, wajib login dan saldo harus cukup
    let user = null;
    if (currentTopUpMethod === 'Saldo') {
        if (!isLoggedIn()) { showToast('Masuk / daftar dulu untuk bayar pakai Saldo'); openAuthModal('login'); return; }
        user = getCurrentUser();
        if (user.saldo < nom.value) { showToast(`Saldo tidak cukup. Saldo kamu Rp ${user.saldo.toLocaleString('id-ID')}`); return; }
    }

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

    if (currentTopUpMethod === 'Saldo' && user) {
        user.saldo -= nom.value;
        saveUsers();
        updateAuthUI();
    }

    showToast(`Top Up ${product.game} ${nom.label} untuk ${verifiedNickname} berhasil!`);
    updateHistory();
    updateCustomerStats();
    closeModal();
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);

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
    if (!isLoggedIn()) { showToast('Masuk / daftar dulu untuk deposit'); openAuthModal('login'); return; }
    let amount = parseInt(document.getElementById('depositAmount').value);
    if (isNaN(amount) || amount < 10000) { showToast('Deposit minimal Rp 10.000'); return; }
    if (amount > 5000000) { showToast('Deposit maksimal Rp 5.000.000 per transaksi'); return; }
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
document.getElementById('confirmDepositBtn').addEventListener('click', (e) => {
    if (!isLoggedIn()) { showToast('Masuk / daftar dulu untuk deposit'); openAuthModal('login'); return; }
    if (!currentQrData) { showToast('Tidak ada deposit aktif'); return; }
    if (depositTimeLeft <= 0) { showToast('Waktu deposit habis! Generate ulang.'); return; }

    const btn = e.currentTarget;
    const statusEl = document.getElementById('qrCheckingStatus');
    btn.disabled = true;
    document.getElementById('downloadQrBtn').disabled = true;
    document.getElementById('cancelDepositBtn').disabled = true;
    statusEl.style.display = 'block';

    // Simulasi jeda pengecekan status pembayaran (bukan verifikasi asli — lihat catatan di README/summary)
    setTimeout(() => {
        statusEl.style.display = 'none';
        btn.disabled = false;
        document.getElementById('downloadQrBtn').disabled = false;
        document.getElementById('cancelDepositBtn').disabled = false;

        if (!currentQrData) return; // dibatalkan / expired selagi nunggu
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

        // Tambahkan ke saldo akun yang sedang login
        const user = getCurrentUser();
        user.saldo += dep.amount;
        saveUsers();
        updateAuthUI();

        showToast(`Deposit Rp ${dep.amount.toLocaleString('id-ID')} berhasil! Saldo sekarang Rp ${user.saldo.toLocaleString('id-ID')}`);
        document.getElementById('qrResult').style.display = 'none';
        document.querySelector('.qr-placeholder').style.display = 'block';
        if (depositTimer) { clearInterval(depositTimer); depositTimer = null; }
        currentQrData = null;
        updateHistory();
        updateDepositHistory();
        updateCustomerStats();
    }, 2200);
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
    if (!depositHistory || depositHistory.length === 0) {
        container.innerHTML = `<div class="history-empty">Belum ada riwayat deposit</div>`;
        return;
    }
    container.innerHTML = depositHistory.slice().reverse().map(d => `
        <div class="history-item">
            <div class="h-left"><span class="h-title">Deposit</span><span class="h-desc">${d.date || '-'} • ${d.method || '-'}</span></div>
            <div class="h-right"><span>Rp ${(d.amount || 0).toLocaleString('id-ID')}</span><span class="h-status">${d.status || 'Sukses'}</span></div>
        </div>
    `).join('');
}
function updateHistory() {
    const container = document.getElementById('historyList');
    if (!transactions || transactions.length === 0) {
        container.innerHTML = `<div class="history-empty"><i class="fas fa-inbox"></i><p>Belum ada transaksi</p></div>`;
        return;
    }
    container.innerHTML = transactions.slice().reverse().map(t => `
        <div class="history-item">
            <div class="h-left">
                <span class="h-title">${t.type || 'Transaksi'}</span>
                <span class="h-desc">${t.date || '-'} • ${t.method || 'Transfer'}</span>
                ${Array.isArray(t.items) ? t.items.map(i => `${i.name || ''} (${i.qty || 1})`).join(', ') : ''}
                ${t.type === 'Top Up' && t.accountId ? `<br><span class="h-desc">ID: ${t.accountId}${t.nickname ? ' • ' + t.nickname : ''}</span>` : ''}
            </div>
            <div class="h-right"><span>Rp ${(t.total || 0).toLocaleString('id-ID')}</span><span class="h-status">${t.status || 'Sukses'}</span></div>
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

// ===== AUTH / AKUN (disimpan di localStorage, front-end only) =====
function saveUsers() { localStorage.setItem('xrezzky_users', JSON.stringify(users)); }
function setCurrentUser(email) {
    currentUserEmail = email;
    if (email) localStorage.setItem('xrezzky_current_user', email);
    else localStorage.removeItem('xrezzky_current_user');
}
function getCurrentUser() { return currentUserEmail ? users[currentUserEmail] : null; }
function isLoggedIn() { return !!getCurrentUser(); }
function initialOf(name) { return (name || '?').trim().charAt(0).toUpperCase(); }

// Hash sederhana buat ngaburin password di localStorage.
// CATATAN: ini BUKAN enkripsi aman — semua tersimpan di browser (front-end only, tanpa server).
// Untuk produksi beneran, password harus divalidasi & di-hash di backend, bukan di browser.
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0; }
    return 'h' + Math.abs(hash).toString(36) + str.length;
}

function updateAuthUI() {
    const user = getCurrentUser();
    const authBtn = document.getElementById('authBtn');
    const profileChip = document.getElementById('profileChip');
    if (user) {
        authBtn.style.display = 'none';
        profileChip.style.display = 'flex';
        document.getElementById('profileAvatar').textContent = initialOf(user.name);
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileBalance').textContent = 'Rp ' + user.saldo.toLocaleString('id-ID');
    } else {
        authBtn.style.display = 'flex';
        profileChip.style.display = 'none';
    }
    updateDepositGate();
}

function updateDepositGate() {
    const wrapper = document.getElementById('depositWrapper');
    const gate = document.getElementById('depositLoginGate');
    if (isLoggedIn()) { wrapper.style.display = 'grid'; gate.style.display = 'none'; }
    else { wrapper.style.display = 'none'; gate.style.display = 'flex'; }
}

// ===== MODAL AUTH =====
const authModal = document.getElementById('authModal');
const profileModal = document.getElementById('profileModal');

function openAuthModal(tab) {
    switchAuthTab(tab || 'login');
    document.getElementById('loginError').textContent = '';
    document.getElementById('registerError').textContent = '';
    authModal.classList.add('active');
}
function closeAuthModal() { authModal.classList.remove('active'); }
document.getElementById('authModalClose').addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => { if (e.target === authModal) closeAuthModal(); });

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
});

document.getElementById('authBtn').addEventListener('click', () => openAuthModal('login'));
document.getElementById('depositLoginBtn').addEventListener('click', () => openAuthModal('register'));

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const password = document.getElementById('registerPassword').value;
    const errorEl = document.getElementById('registerError');
    errorEl.textContent = '';

    if (!name || !email || !password) { errorEl.textContent = 'Semua field wajib diisi'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errorEl.textContent = 'Format email tidak valid'; return; }
    if (password.length < 6) { errorEl.textContent = 'Password minimal 6 karakter'; return; }
    if (users[email]) { errorEl.textContent = 'Email sudah terdaftar, silakan masuk'; return; }

    users[email] = { name, email, password: simpleHash(password), saldo: 0, createdAt: new Date().toLocaleString('id-ID') };
    saveUsers();
    setCurrentUser(email);
    closeAuthModal();
    showToast(`Selamat datang, ${name}!`);
    updateAuthUI();
    e.target.reset();
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const errorEl = document.getElementById('loginError');
    errorEl.textContent = '';

    const user = users[email];
    if (!user || user.password !== simpleHash(password)) { errorEl.textContent = 'Email atau password salah'; return; }

    setCurrentUser(email);
    closeAuthModal();
    showToast(`Selamat datang kembali, ${user.name}!`);
    updateAuthUI();
    e.target.reset();
});

// ===== MODAL PROFIL =====
document.getElementById('profileChip').addEventListener('click', () => {
    const user = getCurrentUser();
    if (!user) return;
    document.getElementById('profileAvatarBig').textContent = initialOf(user.name);
    document.getElementById('profileNameBig').textContent = user.name;
    document.getElementById('profileEmailBig').textContent = user.email;
    document.getElementById('profileBalanceBig').textContent = 'Rp ' + user.saldo.toLocaleString('id-ID');
    profileModal.classList.add('active');
});
document.getElementById('profileModalClose').addEventListener('click', () => profileModal.classList.remove('active'));
profileModal.addEventListener('click', (e) => { if (e.target === profileModal) profileModal.classList.remove('active'); });
document.getElementById('profileDepositBtn').addEventListener('click', () => profileModal.classList.remove('active'));

document.getElementById('logoutBtn').addEventListener('click', () => {
    setCurrentUser(null);
    profileModal.classList.remove('active');
    updateAuthUI();
    showToast('Berhasil keluar');
});

// ===== INIT =====
renderProducts();
updateCartUI();
updateHistory();
updateDepositHistory();
updateCustomerStats();
updateAuthUI();