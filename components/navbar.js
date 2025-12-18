class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav class="sticky top-0 w-full z-50 border-b shadow-sm bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur">
  <div class="max-w-7xl mx-auto px-4 md:px-6 py-3">
    <div class="flex items-center justify-between gap-4">
      <a href="index.html" class="flex items-center font-extrabold text-accent tracking-tight hover:text-primary transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">
        <span class="text-xl md:text-2xl">Mindful Horizons</span>
      </a>
      <div class="flex items-center gap-3">
        <button aria-label="Toggle menu" aria-expanded="false" id="navToggle" class="md:hidden px-3 py-2 rounded border text-accent hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-primary/40">Menu</button>
        <div class="hidden md:flex items-center">
          <!-- Primary nav -->
          <ul id="navPrimary" class="flex items-center gap-3 lg:gap-4 text-sm md:text-[0.95rem]">
            <li><a href="disorders.html" class="px-3 py-2 rounded hover:bg-primary/10 hover:text-primary hover:underline underline-offset-4 decoration-2 transition">Disorders</a></li>
            <li><a href="resources.html" class="px-3 py-2 rounded hover:bg-primary/10 hover:text-primary hover:underline underline-offset-4 decoration-2 transition">Resources</a></li>
            <li><a href="community.html" class="px-3 py-2 rounded hover:bg-primary/10 hover:text-primary hover:underline underline-offset-4 decoration-2 transition">Community</a></li>
            <li><a href="counseling.html" class="px-3 py-2 rounded hover:bg-primary/10 hover:text-primary hover:underline underline-offset-4 decoration-2 transition">Counseling</a></li>
            <li><a href="blog.html" class="px-3 py-2 rounded hover:bg-primary/10 hover:text-primary hover:underline underline-offset-4 decoration-2 transition">Blog</a></li>
          </ul>
          <!-- Secondary nav -->
          <ul id="navSecondary" class="flex items-center gap-2 ml-4 pl-4 border-l text-xs md:text-sm text-secondary/90">
            <li><a href="about.html" class="px-2 py-2 rounded hover:text-secondary hover:bg-secondary/5 hover:underline underline-offset-4 decoration-2 transition">About</a></li>
            <li><a href="accessibility.html" class="px-2 py-2 rounded hover:text-secondary hover:bg-secondary/5 hover:underline underline-offset-4 decoration-2 transition">Accessibility</a></li>
            <li><a href="works-cited.html" class="px-2 py-2 rounded hover:text-secondary hover:bg-secondary/5 hover:underline underline-offset-4 decoration-2 transition">Works Cited</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id="mobileMenu" class="md:hidden hidden border-t transition-all duration-200">
    <div class="px-4 py-3 space-y-3">
      <div>
        <p class="text-xs uppercase tracking-wide text-gray-500 mb-1">Main</p>
        <ul class="space-y-1 text-sm">
          <li><a href="disorders.html" class="block px-3 py-2 rounded hover:bg-primary/10">Disorders</a></li>
          <li><a href="resources.html" class="block px-3 py-2 rounded hover:bg-primary/10">Resources</a></li>
          <li><a href="community.html" class="block px-3 py-2 rounded hover:bg-primary/10">Community</a></li>
          <li><a href="counseling.html" class="block px-3 py-2 rounded hover:bg-primary/10">Counseling</a></li>
          <li><a href="blog.html" class="block px-3 py-2 rounded hover:bg-primary/10">Blog</a></li>
        </ul>
      </div>
      <div class="pt-2 border-t">
        <p class="text-xs uppercase tracking-wide text-gray-500 mb-1">More</p>
        <ul class="space-y-1 text-sm">
          <li><a href="about.html" class="block px-3 py-2 rounded hover:bg-secondary/10">About</a></li>
          <li><a href="accessibility.html" class="block px-3 py-2 rounded hover:bg-secondary/10">Accessibility</a></li>
          <li><a href="works-cited.html" class="block px-3 py-2 rounded hover:bg-secondary/10">Works Cited</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>`;

    // Compute base so links work from root and nested subpages (blog/, disorders/)
    const isNested = /\/(blog|disorders)\//.test(window.location.pathname);
    const baseHref = isNested ? '../' : './';

    const btn = this.querySelector('#navToggle');
    const mobile = this.querySelector('#mobileMenu');
    if (btn) {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', (!expanded).toString());
        mobile.classList.toggle('hidden');
      });
    }
    // Prefix all internal nav links relative to site root
    const navLinks = this.querySelectorAll('a[href$=".html"]');
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('/')) {
        // Normalize potential leading ../
        const normalized = href.replace(/^(\.\/|\.{2}\/)+/, '');
        a.setAttribute('href', `${baseHref}${normalized}`);
      }
    });

    // Highlight active link based on current path
    const current = location.pathname.split('/').pop() || 'index.html';
    const allLinks = this.querySelectorAll('a[href]');
    allLinks.forEach(a => {
      const href = a.getAttribute('href');
      const hrefFile = href ? href.split('?')[0].split('#')[0].split('/').pop() : '';
      if (hrefFile === current) {
        a.classList.add('text-primary');
        a.classList.add('font-semibold');
        a.classList.add('bg-primary/10');
        a.classList.add('rounded');
      }
    });
    // Close mobile menu when clicking a link
    mobile?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobile.classList.add('hidden');
        btn?.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
