// ── THINKLOCK SHARED NAV ──
(function () {
  var pages = [
    { label: 'Home',       href: 'index.html' },
    { label: 'About Us',   href: 'about.html' },
    { label: 'Meet Soma',  href: 'meet-soma.html' },
    { label: 'Challenges', href: 'challenges.html' },
    { label: 'Pricing',    href: 'pricing.html' },
    { label: 'FAQs',       href: 'faqs.html' },
  ];

  // Detect active page by matching the current filename
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';

  var linksHTML = pages.map(function (p) {
    var isActive = (p.href === currentFile) || (currentFile === '' && p.href === 'index.html');
    return '<li><a href="' + p.href + '" class="nav-link' + (isActive ? ' nav-active' : '') + '">' + p.label + '</a></li>';
  }).join('');

  var navHTML = '\
<nav id="tl-nav">\
  <a class="brand" href="index.html">\
    <div class="brand-icon">\
      <img src="thinklock.png" alt="ThinkLock" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" onerror="this.style.display=\'none\';this.parentElement.innerHTML=\'TL\';">\
    </div>\
    <span class="brand-name">ThinkLock</span>\
  </a>\
  <ul class="nav-links">' + linksHTML + '</ul>\
  <a href="https://apps.apple.com/us/app/thinklock/id6755414121" target="_blank" class="nav-btn">Get the app</a>\
</nav>\
<style>\
  #tl-nav{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:rgba(0,0,0,0.92);border-bottom:1px solid rgba(255,255,255,0.07);backdrop-filter:blur(16px);position:sticky;top:0;z-index:200;}\
  #tl-nav .brand{display:flex;align-items:center;gap:10px;text-decoration:none;}\
  #tl-nav .brand-icon{width:38px;height:38px;border-radius:10px;background:#1DB8A0;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:#000;overflow:hidden;flex-shrink:0;}\
  #tl-nav .brand-name{font-size:20px;font-weight:900;letter-spacing:-.5px;color:#fff;}\
  #tl-nav .nav-links{display:none;gap:24px;list-style:none;margin:0;padding:0;}\
  #tl-nav .nav-link{color:rgba(255,255,255,0.6);text-decoration:none;font-size:14px;font-weight:500;transition:color .2s;white-space:nowrap;}\
  #tl-nav .nav-link:hover{color:#1DB8A0;}\
  #tl-nav .nav-active{color:#22D3EE !important;font-weight:700;}\
  #tl-nav .nav-btn{padding:9px 18px;border-radius:50px;background:#3BB497;color:#fff;font-weight:800;font-size:13px;border:none;cursor:pointer;text-decoration:none;white-space:nowrap;flex-shrink:0;}\
  @media(min-width:700px){#tl-nav .nav-links{display:flex;}}\
</style>';

  // Inject into placeholder or prepend to body
  var placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
})();
