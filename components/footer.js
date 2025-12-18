class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="bg-[#0f1c2e] text-gray-300 text-xs">
  <div class="w-full px-4 py-3">

    <!-- Single compact row: logo, name, copyright, and all links -->
    <div class="flex flex-wrap items-center gap-2 text-gray-400">
      <span class="font-semibold text-gray-200 text-sm md:text-base">Mindful Horizons Initiative</span>
      <span class="text-gray-500">© 2025 Mindful Horizons Initiative. All rights reserved.</span>

      <span>|</span>
      <a href="privacy.html" class="hover:text-white transition">Privacy Policy</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Legal</a>
      <span>|</span>
      <a href="accessibility.html" class="hover:text-white transition">Accessibility</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">User Agreement</a>
      <span>|</span>
      <a href="resources.html" class="hover:text-white transition">Support & Resources</a>
      <span>|</span>
      <a href="works-cited.html" class="hover:text-white transition">Works Cited</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Cookies</a>
      <span>|</span>
      <a href="about.html" class="hover:text-white transition">About Us</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Our Mission</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Get Involved</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Donate</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Volunteer</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Facebook</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">Instagram</a>
      <span>|</span>
      <a href="#" class="hover:text-white transition">X / Twitter</a>
      <span>|</span>
      <span class="text-gray-500">Search:</span>
      <a href="https://www.google.com" target="_blank" rel="noopener" class="hover:text-white transition">Google</a>
      <span>|</span>
      <a href="https://www.bing.com" target="_blank" rel="noopener" class="hover:text-white transition">Bing</a>
      <span>|</span>
      <a href="https://duckduckgo.com" target="_blank" rel="noopener" class="hover:text-white transition">DuckDuckGo</a>
    </div>

    <div class="mt-2 text-gray-400 text-[11px]">
      This website has been tested on Chrome, Edge, and Firefox on Windows and macOS.
    </div>

  </div>
</footer>`;

    const isNested = /\/(blog|disorders)\//.test(window.location.pathname);
    const baseHref = isNested ? '../' : './';
    const localLinks = this.querySelectorAll('a[href$=".html"]');
    localLinks.forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('/')) {
        const normalized = href.replace(/^(\.\/|\.{2}\/)+/, '');
        a.setAttribute('href', `${baseHref}${normalized}`);
      }
    });
  }
}

customElements.define('custom-footer', CustomFooter);
