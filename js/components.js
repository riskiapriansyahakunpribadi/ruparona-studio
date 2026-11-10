/*
  ==========================================================================
  JUDUL FILE : js/components.js
  FUNGSI     : Komponen terpusat untuk Header dan Footer Ruparona Studio.
  ==========================================================================
*/

const RUParonaComponents = {
  /*
    1. HEADER WEBSITE
  */
  renderHeader: function (containerEl, data, onWaClick) {
    if (!containerEl || !data) return;

    const navItemsHtml = data.navigasi
      .map(function (item) {
        return (
          '<li><a class="nav-link" href="' +
          item.href +
          '">' +
          item.label +
          "</a></li>"
        );
      })
      .join("");

    containerEl.innerHTML =
      '<div class="container header-inner">' +
      '  <a href="#beranda" class="brand-logo" aria-label="' +
      data.identitas.namaStudio +
      ' — Beranda">' +
      '    <span class="brand-logo__name">' +
      data.identitas.namaStudio +
      "</span>" +
      '    <span class="brand-logo__sub">' +
      data.identitas.subJudulLogo +
      "</span>" +
      "  </a>" +
      '  <button type="button" id="mobile-nav-toggle" class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation">' +
      '    <span id="mobile-nav-label">Menu</span>' +
      "  </button>" +
      '  <nav id="primary-navigation" class="site-nav" aria-label="Navigasi utama">' +
      '    <ul class="nav-list">' +
      navItemsHtml +
      "    </ul>" +
      '    <div class="header-cta">' +
      '      <a href="#kontak" id="header-wa-btn" class="btn btn--primary btn--sm">Reservasi WhatsApp</a>' +
      "    </div>" +
      "  </nav>" +
      "</div>";

    const toggleBtn = containerEl.querySelector("#mobile-nav-toggle");
    const toggleLabel = containerEl.querySelector("#mobile-nav-label");
    const navEl = containerEl.querySelector("#primary-navigation");
    const navLinks = containerEl.querySelectorAll(".nav-link");
    const headerWaBtn = containerEl.querySelector("#header-wa-btn");

    function closeMobileMenu() {
      if (!navEl || !toggleBtn) return;
      navEl.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      if (toggleLabel) toggleLabel.textContent = "Menu";
    }

    function toggleMobileMenu() {
      if (!navEl || !toggleBtn) return;
      const isOpen = navEl.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (toggleLabel) toggleLabel.textContent = isOpen ? "Tutup" : "Menu";
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleMobileMenu);
    }

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navEl && navEl.classList.contains("is-open")) {
        closeMobileMenu();
        if (toggleBtn) toggleBtn.focus();
      }
    });

    if (headerWaBtn && typeof onWaClick === "function") {
      headerWaBtn.addEventListener("click", function (event) {
        event.preventDefault();
        closeMobileMenu();
        onWaClick(data.kontak.pesanDefaultWhatsApp);
      });
    }
  },

  /*
    2. FOOTER WEBSITE
  */
  renderFooter: function (containerEl, data) {
    if (!containerEl || !data) return;

    const tahunSekarang = new Date().getFullYear();
    const navLinksHtml = data.navigasi
      .map(function (item) {
        return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
      })
      .join("");

    containerEl.innerHTML =
      '<div class="container">' +
      '  <div class="footer-grid">' +
      '    <div class="footer-brand">' +
      '      <h2 class="footer-brand__title">' +
      data.identitas.namaStudio +
      "</h2>" +
      '      <p class="footer-brand__desc">' +
      (data.identitas.deskripsiFooter || data.identitas.deskripsiSingkat) +
      "</p>" +
      "    </div>" +
      "    <div>" +
      '      <h3 class="footer-heading">Navigasi Halaman</h3>' +
      '      <ul class="footer-links">' +
      navLinksHtml +
      "      </ul>" +
      "    </div>" +
      "    <div>" +
      '      <h3 class="footer-heading">Studio &amp; Kontak</h3>' +
      '      <ul class="footer-links">' +
      '        <li><span>' + data.kontak.alamatLengkap + "</span></li>" +
      '        <li><a href="tel:' + data.kontak.nomorWhatsApp + '">' + data.kontak.tampilanTelepon + "</a></li>" +
      '        <li><a href="mailto:' + (data.kontak.email || "halo@ruparonastudio.com") + '">' + (data.kontak.email || "halo@ruparonastudio.com") + "</a></li>" +
      '        <li><span>Instagram: ' + data.kontak.instagram + "</span></li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      '  <div class="footer-bottom">' +
      "    <p>&copy; " +
      tahunSekarang +
      " " +
      data.identitas.namaStudio +
      ". Seluruh hak cipta dilindungi.</p>" +
      "  </div>" +
      "</div>";
  }
};