/* =====================================================
   ZAZU v5.0 — JAVASCRIPT
   ===================================================== */

/* PAGE LOADER */
window.addEventListener('load', function () {
  setTimeout(function () {
    var loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 2100);
});
document.body.style.overflow = 'hidden';

/* INIT */
document.addEventListener('DOMContentLoaded', function () {
  console.log('%c ⚡ ZAZU v5.0 ', 'background:#006B3F;color:#FCD116;font-size:14px;font-weight:900;padding:8px 16px;border-radius:8px;');

  initDarkMode();
  initHeader();
  initMobileMenu();
  initSearch();
  initCartSidebar();
  initModalControls();
  initCategoryFilter();
  initScrollReveal();
  initStatsCounter();
  initLoadMore();
  initWishlist();
  initMomoInput();
  startCountdown();
  showChatTooltip();
});

/* DARK MODE */
function initDarkMode() {
  var btn   = document.getElementById('theme-toggle');
  var sun   = document.getElementById('icon-sun');
  var moon  = document.getElementById('icon-moon');
  var html  = document.documentElement;
  var saved = localStorage.getItem('zazuTheme') || 'light';
  apply(saved);
  btn.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('zazuTheme', next);
    showToast(next === 'dark' ? '🌙 Dark mode on!' : '☀️ Light mode on!', next === 'dark' ? '🌙' : '☀️');
  });
  function apply(theme) {
    html.setAttribute('data-theme', theme);
    sun.style.display  = theme === 'dark' ? 'none'  : 'block';
    moon.style.display = theme === 'dark' ? 'block' : 'none';
  }
}

/* COUNTDOWN */
function startCountdown() {
  var end = new Date().getTime() + (11 * 60 * 60 * 1000);
  var els = {
    hh: document.getElementById('h-hours'),
    hm: document.getElementById('h-mins'),
    hs: document.getElementById('h-secs'),
    fh: document.getElementById('fs-hours'),
    fm: document.getElementById('fs-mins'),
    fs: document.getElementById('fs-secs')
  };
  function tick() {
    var diff = end - new Date().getTime();
    if (diff <= 0) { end = new Date().getTime() + (11 * 60 * 60 * 1000); return; }
    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    var ph = h < 10 ? '0' + h : '' + h;
    var pm = m < 10 ? '0' + m : '' + m;
    var ps = s < 10 ? '0' + s : '' + s;
    if (els.hh) els.hh.textContent = ph;
    if (els.hm) els.hm.textContent = pm;
    if (els.hs) els.hs.textContent = ps;
    if (els.fh) els.fh.textContent = ph;
    if (els.fm) els.fm.textContent = pm;
    if (els.fs) els.fs.textContent = ps;
  }
  tick();
  setInterval(tick, 1000);
}

/* CART STATE */
var cart = [];
function g(id) { return document.getElementById(id); }

/* ADD TO CART */
function addToCart(id, name, price) {
  var found = cart.find(function (x) { return x.id === id; });
  if (found) {
    found.quantity += 1;
    showToast('🛒 ' + name + ' — qty updated!', '🛒');
  } else {
    cart.push({ id: id, name: name, price: price, quantity: 1 });
    showToast('✅ ' + name + ' added!', '✅');
  }
  refreshCartCount();
  renderCart();
  bounceCart();
  setTimeout(function () { openCart(); }, 420);
}

/* CART COUNT */
function refreshCartCount() {
  var n = cart.reduce(function (s, x) { return s + x.quantity; }, 0);
  g('cart-count').textContent = n;
  g('cart-header-count').textContent = n + ' item' + (n !== 1 ? 's' : '');
  g('cart-count').classList[n > 0 ? 'add' : 'remove']('visible');
  updateDeliveryBar();
}

/* DELIVERY BAR */
function updateDeliveryBar() {
  var threshold = 500;
  var sub = cart.reduce(function (s, x) { return s + x.price * x.quantity; }, 0);
  var pct = Math.min((sub / threshold) * 100, 100);
  var fill = g('cart-delivery-fill');
  var txt  = g('cart-delivery-text');
  if (fill) fill.style.width = pct + '%';
  if (txt) {
    txt.textContent = sub >= threshold
      ? '🎉 FREE delivery unlocked! Yɛ da wo ase!'
      : 'Add GH₵ ' + (threshold - sub).toLocaleString() + ' more for free delivery! 🚚';
    txt.style.color = sub >= threshold ? '#059669' : '';
  }
}

/* RENDER CART */
function renderCart() {
  var wrap   = g('cart-items');
  var footer = g('cart-footer');
  var empty  = g('cart-empty');
  wrap.querySelectorAll('.cart-item').forEach(function (el) { el.remove(); });
  if (cart.length === 0) {
    empty.style.display  = 'flex';
    footer.style.display = 'none';
    return;
  }
  empty.style.display  = 'none';
  footer.style.display = 'flex';
  var sub = cart.reduce(function (s, x) { return s + x.price * x.quantity; }, 0);
  if (g('cart-subtotal')) g('cart-subtotal').textContent = 'GH₵ ' + sub.toLocaleString();
  if (g('cart-total'))    g('cart-total').textContent    = 'GH₵ ' + sub.toLocaleString();
  cart.forEach(function (item) {
    var el = document.createElement('div');
    el.classList.add('cart-item');
    el.innerHTML =
      '<div class="cart-item__thumb">🛍️</div>' +
      '<div class="cart-item__info">' +
        '<p class="cart-item__name">' + item.name + '</p>' +
        '<p class="cart-item__price">GH₵ ' + (item.price * item.quantity).toLocaleString() + '</p>' +
        '<div class="cart-item__qty">' +
          '<button class="qty-btn" onclick="changeQty(' + item.id + ',-1)"><i class="fa-solid fa-minus"></i></button>' +
          '<span class="qty-num">' + item.quantity + '</span>' +
          '<button class="qty-btn" onclick="changeQty(' + item.id + ',1)"><i class="fa-solid fa-plus"></i></button>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item__rm" onclick="removeFromCart(' + item.id + ')" aria-label="Remove"><i class="fa-solid fa-trash-can"></i></button>';
    wrap.appendChild(el);
  });
}

/* QTY / REMOVE */
function changeQty(id, delta) {
  var item = cart.find(function (x) { return x.id === id; });
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(id); return; }
  refreshCartCount();
  renderCart();
}
function removeFromCart(id) {
  var item = cart.find(function (x) { return x.id === id; });
  cart = cart.filter(function (x) { return x.id !== id; });
  refreshCartCount();
  renderCart();
  if (item) showToast('🗑️ ' + item.name + ' removed', '🗑️');
}

/* WHATSAPP ORDER */
function orderViaWhatsApp() {
  if (!cart.length) { showToast('⚠️ Cart is empty!', '⚠️'); return; }
  var lines = cart.map(function (x) {
    return '• ' + x.name + ' x' + x.quantity + ' = GH₵ ' + (x.price * x.quantity).toLocaleString();
  });
  var total = cart.reduce(function (s, x) { return s + x.price * x.quantity; }, 0);
  var msg = 'Hi Zazu! 👋 I want to order:\n\n' + lines.join('\n') + '\n\nTotal: GH₵ ' + total.toLocaleString() + '\n\nPlease confirm. Medaase! 🙏';
  window.open('https://wa.me/233247221043?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
}

/* CART SIDEBAR */
function initCartSidebar() {
  g('cart-btn').addEventListener('click', openCart);
  g('cart-close-btn').addEventListener('click', closeCartPanel);
  g('cart-overlay').addEventListener('click', closeCartPanel);
  var shopLink = g('cart-shop-link');
  if (shopLink) shopLink.addEventListener('click', closeCartPanel);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeCartPanel(); closeModal(); }
  });
}
function openCart() {
  g('cart-sidebar').classList.add('open');
  g('cart-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function closeCartPanel() {
  g('cart-sidebar').classList.remove('open');
  g('cart-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}
function bounceCart() {
  var btn = g('cart-btn');
  btn.style.transform = 'scale(1.35)';
  setTimeout(function () { btn.style.transform = ''; }, 200);
}

/* MOMO MODAL */
var selectedNet = 'MTN MoMo';
function handleMoMoPayment(name, price) {
  g('modal-product-name').textContent = name;
  g('modal-price').textContent = 'GH₵ ' + price.toLocaleString();
  var inp = g('momo-number');
  if (inp) { inp.value = ''; inp.style.borderColor = ''; }
  document.querySelectorAll('.net-btn').forEach(function (b) { b.classList.remove('active'); });
  var mtn = document.querySelector('.net-btn--mtn');
  if (mtn) mtn.classList.add('active');
  selectedNet = 'MTN MoMo';
  g('modal-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function handleMoMoCheckout() {
  var total = cart.reduce(function (s, x) { return s + x.price * x.quantity; }, 0);
  if (!total) { showToast('⚠️ Your cart is empty!', '⚠️'); return; }
  closeCartPanel();
  handleMoMoPayment('Your Cart (' + cart.length + ' item' + (cart.length > 1 ? 's' : '') + ')', total);
}
function selectNetwork(name, btn) {
  document.querySelectorAll('.net-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  selectedNet = name;
}
function confirmMoMoPayment() {
  var inp = g('momo-number');
  if (!/^\d{10}$/.test(inp.value.trim())) {
    inp.style.borderColor = '#CE1126';
    inp.style.animation   = 'shake .5s ease';
    setTimeout(function () { inp.style.animation = ''; }, 500);
    showToast('⚠️ Enter a valid 10-digit number', '⚠️');
    return;
  }
  var btn  = document.querySelector('#momo-modal .btn--buy');
  var orig = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  btn.disabled  = true;
  setTimeout(function () {
    closeModal();
    btn.innerHTML = orig;
    btn.disabled  = false;
    showToast('🎉 ' + selectedNet + ' prompt sent! Check your phone.', '🎉');
    if (g('modal-product-name').textContent.includes('Cart')) {
      cart = [];
      refreshCartCount();
      renderCart();
    }
  }, 1800);
}
function closeModal() {
  g('modal-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}
function initModalControls() {
  var cl = g('modal-close');
  var ov = g('modal-overlay');
  if (cl) cl.addEventListener('click', closeModal);
  if (ov) ov.addEventListener('click', function (e) { if (e.target === ov) closeModal(); });
}

/* Shake keyframe */
(function () {
  var s = document.createElement('style');
  s.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}';
  document.head.appendChild(s);
})();

/* MOMO INPUT */
function initMomoInput() {
  var inp = g('momo-number');
  if (!inp) return;
  inp.addEventListener('input', function () {
    inp.value = inp.value.replace(/\D/g, '').slice(0, 10);
    inp.style.borderColor = inp.value.length === 10 ? '#006B3F' : '';
  });
}

/* SEARCH */
function initSearch() {
  var btn   = g('search-btn');
  var bar   = g('search-bar');
  var inp   = g('search-input');
  var close = g('search-close');
  if (!btn || !bar) return;
  btn.addEventListener('click', function () {
    bar.classList.toggle('open');
    if (bar.classList.contains('open')) setTimeout(function () { inp.focus(); }, 200);
  });
  close.addEventListener('click', function () {
    bar.classList.remove('open');
    inp.value = '';
    showAll();
  });
  inp.addEventListener('input', function () {
    var q = inp.value.toLowerCase().trim();
    if (!q) { showAll(); return; }
    var found = 0;
    document.querySelectorAll('.product-card').forEach(function (c) {
      var t = (c.querySelector('.p-title') || c).textContent.toLowerCase();
      if (t.includes(q)) { c.style.display = 'flex'; c.style.flexDirection = 'column'; found++; }
      else { c.style.display = 'none'; }
    });
    if (!found) showToast('😕 No results for "' + inp.value + '"', '😕');
  });
  inp.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { bar.classList.remove('open'); inp.value = ''; showAll(); }
  });
}
function showAll() {
  document.querySelectorAll('.product-card').forEach(function (c) {
    c.style.display = 'flex'; c.style.flexDirection = 'column';
  });
}

/* HEADER SCROLL */
function initHeader() {
  var h = g('header');
  window.addEventListener('scroll', function () {
    h.classList[window.scrollY > 50 ? 'add' : 'remove']('scrolled');
  });
}

/* MOBILE MENU */
function initMobileMenu() {
  var btn  = g('hamburger-btn');
  var menu = g('nav-menu');
  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    menu.classList.toggle('mobile-open');
    btn.setAttribute('aria-expanded', menu.classList.contains('mobile-open'));
  });
  document.querySelectorAll('.nav__link').forEach(function (l) {
    l.addEventListener('click', function () {
      btn.classList.remove('open');
      menu.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* CATEGORY FILTER */
function initCategoryFilter() {
  var pills = document.querySelectorAll('.cat-pill');
  var cards = document.querySelectorAll('.product-card');
  var grid  = g('products-grid');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      var filter = pill.getAttribute('data-filter');
      var count  = 0;
      cards.forEach(function (c) {
        if (filter === 'all' || c.getAttribute('data-category') === filter) {
          c.style.display       = 'flex';
          c.style.flexDirection = 'column';
          c.style.opacity       = '0';
          c.style.transform     = 'translateY(16px)';
          setTimeout(function () {
            c.style.transition = 'all .35s ease';
            c.style.opacity    = '1';
            c.style.transform  = 'translateY(0)';
          }, count * 55);
          count++;
        } else {
          c.style.display = 'none';
        }
      });
      var old = grid.querySelector('.no-products-msg');
      if (count === 0 && !old) {
        var m = document.createElement('div');
        m.classList.add('no-products-msg');
        m.innerHTML = '<i class="fa-solid fa-box-open"></i><p>No products in this category yet — coming soon! 👀</p>';
        grid.appendChild(m);
      } else if (count > 0 && old) {
        old.remove();
      }
    });
  });
}

/* SCROLL REVEAL */
function initScrollReveal() {
  var items = document.querySelectorAll(
    '.product-card,.section__header,.about__text-side,.about__img-side,' +
    '.about-stat,.momo-banner__inner,.footer__col,.tcard,' +
    '.delivery-card,.delivery__regions-panel,.region-chip,.flash-card,.flashsale__head,.stat__card'
  );
  items.forEach(function (el) { el.classList.add('reveal'); });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  items.forEach(function (el) { obs.observe(el); });
}

/* STATS COUNTER */
function initStatsCounter() {
  var nums = document.querySelectorAll('.about-stat__num');
  var obs  = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  nums.forEach(function (el) { obs.observe(el); });
}
function countUp(el) {
  var target = parseInt(el.getAttribute('data-target'), 10);
  var start  = performance.now();
  var dur    = 1500;
  (function step(now) {
    var p = Math.min((now - start) / dur, 1);
    var e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  })(start);
}

/* TOAST */
var toastTimer;
function showToast(msg, icon) {
  var t = g('toast'); var m = g('toast-message'); var i = g('toast-icon');
  m.textContent = msg;
  if (i && icon) i.textContent = icon;
  clearTimeout(toastTimer);
  t.classList.add('show');
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3000);
}

/* LOAD MORE */
function initLoadMore() {
  var btn = g('load-more-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
    btn.disabled  = true;
    setTimeout(function () {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> You\'ve seen it all! New drops every week.';
      btn.style.color = '#006B3F';
      btn.style.borderColor = '#006B3F';
      showToast('🎉 More drops every week! Stay tuned.', '🎉');
      setTimeout(function () {
        btn.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i> Load More Products';
        btn.style.color = ''; btn.style.borderColor = ''; btn.disabled = false;
      }, 5000);
    }, 1500);
  });
}

/* WISHLIST */
function initWishlist() {
  document.querySelectorAll('.wishlist-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      btn.classList.toggle('active');
      var ic = btn.querySelector('i');
      if (btn.classList.contains('active')) {
        ic.classList.replace('fa-regular', 'fa-solid');
        showToast('❤️ Saved to wishlist!', '❤️');
      } else {
        ic.classList.replace('fa-solid', 'fa-regular');
        showToast('💔 Removed from wishlist', '💔');
      }
    });
  });
}

/* CHAT TOOLTIP */
function showChatTooltip() {
  var t = g('chat-tooltip');
  if (!t) return;
  setTimeout(function () {
    t.style.opacity = '1'; t.style.transform = 'translateX(0)';
    setTimeout(function () {
      t.style.opacity = '0'; t.style.transform = 'translateX(8px)';
    }, 5000);
  }, 4000);
}

/* ACTIVE NAV */
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav__link');
  window.addEventListener('scroll', function () {
    var cur = '';
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= 100) cur = s.id; });
    links.forEach(function (l) {
      l.classList.remove('active-link');
      if (l.getAttribute('href') === '#' + cur) l.classList.add('active-link');
    });
  });
});