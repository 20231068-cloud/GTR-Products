// ===== 产品数据 =====
const allProducts = [
  // 10系
  { id: 101, name: 'GTR 1050 Ti', type: 'gpu', tags: ['gaming'], price: 899, desc: '入门电竞 依旧能打', descDetail: '经典永不过时，畅玩主流网游。', specs: [{i:'fa-memory',t:'4GB GDDR5'}, {i:'fa-bolt',t:'75W'}] },
  { id: 102, name: 'GTR 1060', type: 'gpu', tags: ['gaming'], price: 1299, desc: '一代神卡 网吧标配', descDetail: '曾经的甜品之王，1080P依然够用。', specs: [{i:'fa-memory',t:'6GB GDDR5'}, {i:'fa-bolt',t:'120W'}] },
  { id: 103, name: 'GTR 1080 Ti', type: 'gpu', tags: ['flagship'], price: 2599, desc: '昔日卡皇 余威尚存', descDetail: '11GB大显存，战了这么多年依然能打。', specs: [{i:'fa-memory',t:'11GB GDDR5X'}, {i:'fa-bolt',t:'250W'}] },
  // 20系
  { id: 201, name: 'GTR 2060', type: 'gpu', tags: ['gaming'], price: 1899, desc: '光追入门 甜品新贵', descDetail: '初尝光线追踪的魅力，开启新视界。', specs: [{i:'fa-memory',t:'6GB GDDR6'}, {i:'fa-bolt',t:'160W'}] },
  { id: 202, name: 'GTR 2070 Super', type: 'gpu', tags: ['gaming', 'creator'], price: 2999, desc: '2K入门 实力均衡', descDetail: '高画质畅玩主流3A大作。', specs: [{i:'fa-memory',t:'8GB GDDR6'}, {i:'fa-bolt',t:'215W'}] },
  { id: 203, name: 'GTR 2080 Ti', type: 'gpu', tags: ['flagship'], price: 4999, desc: '图灵旗舰 4K入场券', descDetail: '曾是多少人的梦想神机。', specs: [{i:'fa-memory',t:'11GB GDDR6'}, {i:'fa-bolt',t:'260W'}] },
  // 30系
  { id: 301, name: 'GTR 3060', type: 'gpu', tags: ['gaming'], price: 2199, desc: '主流首选 大显存版', descDetail: '12GB超大显存，无惧爆显存。', specs: [{i:'fa-memory',t:'12GB GDDR6'}, {i:'fa-bolt',t:'170W'}] },
  { id: 302, name: 'GTR 3070', type: 'gpu', tags: ['gaming', 'creator'], price: 3499, desc: '2K甜点 性能猛兽', descDetail: '2K分辨率下流畅运行光追大作。', specs: [{i:'fa-memory',t:'8GB GDDR6'}, {i:'fa-bolt',t:'220W'}] },
  { id: 303, name: 'GTR 3080', type: 'gpu', tags: ['gaming', 'creator'], price: 5499, desc: '4K高帧 创作利器', descDetail: '视频渲染游戏双修。', specs: [{i:'fa-memory',t:'10GB GDDR6X'}, {i:'fa-bolt',t:'320W'}] },
  { id: 304, name: 'GTR 3090', type: 'gpu', tags: ['flagship'], price: 8999, desc: '24G大显存 生产力怪兽', descDetail: '深度学习、8K视频剪辑最爱。', specs: [{i:'fa-memory',t:'24GB GDDR6X'}, {i:'fa-bolt',t:'350W'}] },
  // 40系
  { id: 401, name: 'GTR 4060', type: 'gpu', tags: ['gaming'], price: 2399, desc: '能效比之王 1080P神卡', descDetail: 'DLSS 3 帧生成，功耗极低。', specs: [{i:'fa-memory',t:'8GB GDDR6'}, {i:'fa-bolt',t:'115W'}] },
  { id: 402, name: 'GTR 4070', type: 'gpu', tags: ['gaming', 'creator'], price: 4499, desc: '2K光追 完美平衡', descDetail: '性能与功耗的完美平衡。', specs: [{i:'fa-memory',t:'12GB GDDR6X'}, {i:'fa-bolt',t:'200W'}] },
  { id: 403, name: 'GTR 4080', type: 'gpu', tags: ['flagship'], price: 8999, desc: '4K极致 战未来', descDetail: '原生4K高画质沉浸体验。', specs: [{i:'fa-memory',t:'16GB GDDR6X'}, {i:'fa-bolt',t:'320W'}] },
  { id: 404, name: 'GTR 4090', type: 'gpu', tags: ['flagship'], price: 14999, desc: '地表最强 毫无争议', descDetail: '唯一的缺点就是贵。', specs: [{i:'fa-memory',t:'24GB GDDR6X'}, {i:'fa-bolt',t:'450W'}] },
  // 60系 & 70系
  { id: 601, name: 'GTR 6060', type: 'gpu', tags: ['gaming'], price: 2599, desc: '新一代甜品 告别卡顿', descDetail: '全新架构，1080P电竞神卡。', specs: [{i:'fa-memory',t:'12GB GDDR7'}, {i:'fa-bolt',t:'150W'}] },
  { id: 602, name: 'GTR 6070', type: 'gpu', tags: ['gaming'], price: 3999, desc: '2K高帧 稳如老狗', descDetail: '2K光追利器，团战不掉帧。', specs: [{i:'fa-memory',t:'16GB GDDR7'}, {i:'fa-bolt',t:'200W'}] },
  { id: 603, name: 'GTR 6090', type: 'gpu', tags: ['flagship'], price: 9999, desc: '次世代旗舰 降维打击', descDetail: '专治性能不足恐惧症。', specs: [{i:'fa-memory',t:'24GB GDDR7'}, {i:'fa-bolt',t:'400W'}] },
  { id: 701, name: 'GTR 7060', type: 'gpu', tags: ['gaming'], price: 3099, desc: '新生代性价比之王', descDetail: '学生党装机首选。', specs: [{i:'fa-memory',t:'12GB GDDR7'}, {i:'fa-bolt',t:'140W'}] },
  { id: 702, name: 'GTR 7070', type: 'gpu', tags: ['gaming', 'creator'], price: 4599, desc: '全能利器 告别偏科', descDetail: '游戏与创作兼顾。', specs: [{i:'fa-memory',t:'16GB GDDR7'}, {i:'fa-bolt',t:'180W'}] },
  { id: 703, name: 'GTR 7080', type: 'gpu', tags: ['gaming', 'creator'], price: 6999, desc: '高效渲染 告别加班', descDetail: '创意不卡顿。', specs: [{i:'fa-memory',t:'20GB GDDR7'}, {i:'fa-bolt',t:'280W'}] },
  { id: 704, name: 'GTR 7090', type: 'gpu', tags: ['flagship'], price: 12999, desc: '未来已来 极致体验', descDetail: '32GB超大显存。', specs: [{i:'fa-memory',t:'32GB GDDR7'}, {i:'fa-bolt',t:'450W'}] },
  // CPU
  { id: 901, name: 'G-5 100', type: 'cpu', tags: ['gaming'], price: 1599, desc: '入门神U 爽玩网游', descDetail: '6核12线程，主流电竞拉满。', specs: [{i:'fa-microchip',t:'6C/12T'}, {i:'fa-tachometer-alt',t:'4.8GHz'}] },
  { id: 902, name: 'G-6 100', type: 'cpu', tags: ['gaming', 'creator'], price: 2599, desc: '多核全能 告别卡死', descDetail: '游戏直播双开无压力。', specs: [{i:'fa-microchip',t:'12C/24T'}, {i:'fa-tachometer-alt',t:'5.2GHz'}] },
  { id: 903, name: 'G-7 100', type: 'cpu', tags: ['flagship'], price: 4599, desc: '极致性能 生产力怪兽', descDetail: '16核32线程，秒开大工程。', specs: [{i:'fa-microchip',t:'16C/32T'}, {i:'fa-tachometer-alt',t:'5.8GHz'}] },
  // 显示器
  { id: 1001, name: 'GTR M24', type: 'monitor', tags: ['gaming'], price: 899, desc: '24寸 1080P 165Hz IPS', descDetail: '黄金电竞尺寸，高刷防撕裂。', specs: [{i:'fa-tv',t:'1080P IPS'}, {i:'fa-bolt',t:'165Hz'}] },
  { id: 1002, name: 'GTR M27Q', type: 'monitor', tags: ['gaming', 'creator'], price: 1599, desc: '27寸 2K 170Hz IPS', descDetail: '2K细腻画质，色彩精准。', specs: [{i:'fa-tv',t:'2K IPS'}, {i:'fa-bolt',t:'170Hz'}] },
  { id: 1003, name: 'GTR M32U', type: 'monitor', tags: ['creator'], price: 2999, desc: '32寸 4K 144Hz IPS', descDetail: '大屏4K极致清晰。', specs: [{i:'fa-tv',t:'4K IPS'}, {i:'fa-bolt',t:'144Hz'}] },
  { id: 1004, name: 'GTR OLED 27', type: 'monitor', tags: ['gaming', 'flagship'], price: 5999, desc: '27寸 2K 240Hz OLED', descDetail: '0.03ms极速响应，无限对比度。', specs: [{i:'fa-tv',t:'2K OLED'}, {i:'fa-bolt',t:'240Hz'}] },
  { id: 1005, name: 'GTR OLED 34W', type: 'monitor', tags: ['gaming', 'flagship'], price: 8999, desc: '34寸 准4K 带鱼屏 OLED', descDetail: '沉浸式曲面带鱼屏。', specs: [{i:'fa-tv',t:'准4K OLED'}, {i:'fa-bolt',t:'175Hz'}] }
];

function getCart() { return JSON.parse(sessionStorage.getItem('gtrCart') || '[]'); }
function saveCart(cart) { sessionStorage.setItem('gtrCart', JSON.stringify(cart)); updateCartUI(); }

function updateCartUI() {
  const cart = getCart();
  const countEl = document.getElementById('cartCount');
  if(countEl) countEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  if(!cartItemsEl) return;
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-cart">购物车空空如也，快去挑选你的利器！</p>';
    if(cartTotalEl) cartTotalEl.textContent = '¥0';
    return;
  }
  let html = ''; let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    html += `<div class="cart-item"><div class="cart-item-info"><h4>${item.name} <span style="color:var(--text-muted);font-size:0.8rem;">x${item.qty}</span></h4><p>¥${item.price.toLocaleString()}</p></div><button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button></div>`;
  });
  cartItemsEl.innerHTML = html;
  if(cartTotalEl) cartTotalEl.textContent = `¥${total.toLocaleString()}`;
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.onclick = (e) => {
      const id = Number(e.currentTarget.dataset.id);
      let cart = getCart();
      const idx = cart.findIndex(item => item.id === id);
      if(idx > -1) {
        if(cart[idx].qty > 1) cart[idx].qty -= 1; else cart.splice(idx, 1);
        saveCart(cart);
      }
    };
  });
}

function getHardwareHTML(type) {
  if(type === 'gpu') return `<div class="hardware-visual"><div class="gpu-3d"><div class="gpu-fan"></div><div class="gpu-fan"></div><div class="gpu-bar"></div></div></div>`;
  else if(type === 'cpu') return `<div class="hardware-visual"><div class="cpu-3d"></div></div>`;
  else return `<div class="hardware-visual"><div class="monitor-3d"><div class="monitor-screen"></div><div class="monitor-neck"></div><div class="monitor-base"></div></div></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  if(cartBtn) cartBtn.onclick = () => { cartDrawer.classList.add('active'); cartOverlay.classList.add('active'); };
  const closeCart = () => { if(cartDrawer) cartDrawer.classList.remove('active'); if(cartOverlay) cartOverlay.classList.remove('active'); };
  if(cartClose) cartClose.onclick = closeCart;
  if(cartOverlay) cartOverlay.onclick = closeCart;

  const checkoutBtn = document.getElementById('checkoutBtn');
  if(checkoutBtn) checkoutBtn.onclick = () => { if(getCart().length === 0) window.showToast('购物车是空的哦'); else window.location.href = 'checkout.html'; };

  let toastTimeout;
  window.showToast = (msg) => {
    const toast = document.getElementById('toast');
    if(!toast) return;
    document.getElementById('toastMessage').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
  };

  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add') || e.target.closest('.btn-add-icon');
    if (btn) {
      e.preventDefault();
      const productId = Number(btn.dataset.id);
      const product = allProducts.find(p => p.id === productId);
      if (product) {
        let cart = getCart();
        const existing = cart.find(item => item.id === productId);
        if(existing) existing.qty += 1; else cart.push({ ...product, qty: 1 });
        saveCart(cart);
        window.showToast(`${product.name} 已加入购物车`);
      }
    }
  });

  const track = document.getElementById('carouselTrack');
  if (track) {
    const slides = track.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carouselDots');
    let idx = 0, timer;
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = `dot ${i === 0 ? 'active' : ''}`;
      dot.onclick = () => goTo(i);
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.dot');
    function goTo(i) {
      if(i < 0) i = slides.length - 1; if(i >= slides.length) i = 0;
      slides[idx].classList.remove('active'); dots[idx].classList.remove('active');
      idx = i;
      slides[idx].classList.add('active'); dots[idx].classList.add('active');
    }
    const reset = () => { clearInterval(timer); timer = setInterval(() => goTo(idx + 1), 5000); };
    if(document.getElementById('carouselNext')) document.getElementById('carouselNext').onclick = () => { goTo(idx + 1); reset(); };
    if(document.getElementById('carouselPrev')) document.getElementById('carouselPrev').onclick = () => { goTo(idx - 1); reset(); };
    reset();
  }

  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    const featuredIds = [404, 304, 1004, 903];
    const featuredList = allProducts.filter(p => featuredIds.includes(p.id)).sort((a,b)=> featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));
    featuredGrid.innerHTML = featuredList.map(p => `
      <div class="featured-card">
        ${getHardwareHTML(p.type)}
        <div class="card-title">${p.name}</div>
        <div class="card-sub"><i class="fas fa-bolt"></i> ${p.desc}</div>
        <div class="price-row"><div class="price">¥${p.price.toLocaleString()}</div></div>
        <div class="fc-overlay">
          <h4>${p.name}</h4>
          <p>${p.descDetail}</p>
          <button class="btn-add" data-id="${p.id}"><i class="fas fa-cart-plus"></i> 立即加购</button>
        </div>
      </div>`).join('');
  }

  const productGrid = document.getElementById('productGrid');
  const filterTabs = document.getElementById('filterTabs');
  if (productGrid && filterTabs) {
    const render = (filter) => {
      let list = allProducts;
      if (filter !== 'all') {
        if (filter === 'gpu' || filter === 'cpu' || filter === 'monitor') list = allProducts.filter(p => p.type === filter);
        else list = allProducts.filter(p => p.tags.includes(filter));
      }
      productGrid.innerHTML = list.map(p => `
        <div class="graphic-card">
          ${getHardwareHTML(p.type)}
          <div class="card-title">${p.name}</div>
          <div class="card-sub">${p.desc}</div>
          <div class="card-specs">${p.specs.map(s => `<span><i class="fas ${s.i}"></i> ${s.t}</span>`).join('')}</div>
          <div class="price-row">
            <div class="price">¥${p.price.toLocaleString()}</div>
            <button class="btn-add-icon" data-id="${p.id}"><i class="fas fa-cart-plus"></i></button>
          </div>
        </div>`).join('');
    };
    render('all');
    filterTabs.onclick = (e) => {
      if(!e.target.classList.contains('filter-btn')) return;
      filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      render(e.target.dataset.filter);
    };
  }

  const checkoutItemsList = document.getElementById('checkoutItemsList');
  if(checkoutItemsList) {
    const cart = getCart();
    if(cart.length === 0) { window.location.href = 'products.html'; return; }
    let html = '', total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      html += `<div class="order-summary-item"><span>${item.name} x${item.qty}</span> <span>¥${(item.price * item.qty).toLocaleString()}</span></div>`;
    });
    checkoutItemsList.innerHTML = html;
    document.getElementById('checkoutTotal').textContent = `¥${total.toLocaleString()}`;
    document.getElementById('payNowBtn').onclick = () => {
      const payBtn = document.getElementById('payNowBtn');
      payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 正在处理支付...';
      payBtn.style.opacity = '0.8';
      setTimeout(() => {
        sessionStorage.removeItem('gtrCart');
        payBtn.innerHTML = '<i class="fas fa-check"></i> 支付成功！';
        payBtn.style.background = '#10b981';
        payBtn.style.color = '#fff';
        window.showToast('🎉 支付成功！感谢您的购买。');
        setTimeout(() => window.location.href = 'index.html', 2000);
      }, 1500);
    };
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm) contactForm.onsubmit = (e) => { e.preventDefault(); window.showToast('消息已发送，GTR 专家将尽快联系您！'); contactForm.reset(); };
});