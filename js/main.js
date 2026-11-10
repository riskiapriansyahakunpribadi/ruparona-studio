/*
  ==========================================================================
  JUDUL FILE : js/main.js
  FUNGSI     : Menghubungkan data, merender tata letak studio, dan mengelola
               interaksi reservasi WhatsApp secara profesional.
  ==========================================================================
*/

(function () {
  "use strict";

  /*
    1. DETEKSI MODE DEBUG (?debug=1)
    Hanya aktif jika sengaja dipanggil untuk keperluan audit teknis internal.
  */
  function isDebugModeActive() {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get("debug") === "1";
    } catch (e) {
      return window.location.search.indexOf("debug=1") !== -1;
    }
  }

  var DEBUG_ACTIVE = isDebugModeActive();

  /*
    2. PEMBUAT TAUTAN WHATSAPP & MODAL PENGAMAN
  */
  function buildWhatsAppUrl(nomor, pesan) {
    var nomorBersih = String(nomor || "").replace(/[^0-9]/g, "");
    var pesanAman = encodeURIComponent(pesan || "");
    return "https://wa.me/" + nomorBersih + "?text=" + pesanAman;
  }

  function openWhatsAppOrDemoModal(pesan) {
    var kontak = (typeof RUParonaData !== "undefined" && RUParonaData.kontak) ? RUParonaData.kontak : {};
    var urlTujuan = buildWhatsAppUrl(kontak.nomorWhatsApp, pesan);

    // Jika mode pengaman aktif pada data studio
    if (kontak.isNomorDemo) {
      var modalEl = document.getElementById("wa-demo-dialog");
      var msgPreviewEl = document.getElementById("wa-modal-message-preview");
      var urlPreviewEl = document.getElementById("wa-modal-url-preview");
      var openLinkEl = document.getElementById("wa-modal-open-link");
      var closeBtnEl = document.getElementById("wa-modal-close-btn");

      if (modalEl && msgPreviewEl && urlPreviewEl) {
        msgPreviewEl.textContent = pesan;
        urlPreviewEl.textContent = urlTujuan;
        if (openLinkEl) {
          openLinkEl.href = urlTujuan;
        }
        modalEl.hidden = false;
        if (closeBtnEl) closeBtnEl.focus();
        return;
      }
    }

    // Default: langsung membuka WhatsApp
    window.open(urlTujuan, "_blank", "noopener,noreferrer");
  }

  function setupDemoModalEvents() {
    var modalEl = document.getElementById("wa-demo-dialog");
    var closeBtnEl = document.getElementById("wa-modal-close-btn");
    var openLinkEl = document.getElementById("wa-modal-open-link");
    if (!modalEl) return;

    function closeModal() {
      modalEl.hidden = true;
    }

    if (closeBtnEl) {
      closeBtnEl.addEventListener("click", closeModal);
    }

    if (openLinkEl) {
      openLinkEl.addEventListener("click", function () {
        closeModal();
      });
    }

    modalEl.addEventListener("click", function (event) {
      if (event.target && event.target.getAttribute("data-close-modal") === "true") {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modalEl.hidden) {
        closeModal();
      }
    });
  }

  /*
    3. PERENDER SLOT GAMBAR
  */
  function createHeroCaptionOverlay() {
    var heroData = (typeof RUParonaData !== "undefined" && RUParonaData.hero) ? RUParonaData.hero : {};
    var title = heroData.labelFotoSudut || "Zona Terpisah & Higienis";
    var sub = heroData.subLabelFotoSudut || "Hair Salon • Barber • Nail • Lash & Brow • Makeup";

    var overlay = document.createElement("div");
    overlay.className = "hero-photo-caption-card";
    overlay.innerHTML =
      "<div>" +
      '<p class="hero-photo-caption-card__title">' + title + "</p>" +
      '<p class="hero-photo-caption-card__sub">' + sub + "</p>" +
      "</div>" +
      '<span class="hero-photo-caption-card__pill">Studio Terpadu</span>';
    return overlay;
  }

  function renderMediaSlot(containerEl, slotKey) {
    if (!containerEl) return;

    var slotObj = (typeof RUParonaMedia !== "undefined" && RUParonaMedia.slots) ? RUParonaMedia.slots[slotKey] : null;
    var cleanUrl = slotObj ? String(slotObj.url || "").trim() : "";
    var isHero = slotKey === "hero-utama";

    containerEl.innerHTML = "";

    if (DEBUG_ACTIVE) {
      var badge = document.createElement("div");
      badge.className = "debug-slot-badge " + (cleanUrl ? "debug-slot-badge--ok" : "debug-slot-badge--empty");
      badge.textContent = "slot: " + slotKey;
      containerEl.appendChild(badge);
    }

    if (cleanUrl) {
      var img = document.createElement("img");
      img.className = "media-frame__img";
      img.src = cleanUrl;
      img.alt = (slotObj && slotObj.alt) ? slotObj.alt : "Dokumentasi Ruparona Studio";
      img.setAttribute("referrerpolicy", "no-referrer");

      img.onerror = function () {
        if (!containerEl.querySelector(".media-fallback")) {
          var fb = document.createElement("div");
          fb.className = "media-fallback";
          fb.innerHTML =
            '<span class="media-fallback__tag">' + (slotObj.labelFallback || slotObj.kategori) + "</span>" +
            '<p class="media-fallback__title">' + (slotObj.judulFallback || "Ruparona Studio") + "</p>" +
            '<p class="media-fallback__desc">Dokumentasi layanan perawatan studio.</p>';
          img.style.display = "none";
          containerEl.appendChild(fb);
        }
      };

      containerEl.appendChild(img);
    } else {
      var fallback = document.createElement("div");
      fallback.className = "media-fallback";
      var label = slotObj ? (slotObj.labelFallback || slotObj.kategori) : "Layanan Studio";
      var title = slotObj ? (slotObj.judulFallback || "Ruparona Studio") : "Ruparona Studio";
      fallback.innerHTML =
        '<span class="media-fallback__tag">' + label + "</span>" +
        '<p class="media-fallback__title">' + title + "</p>" +
        '<p class="media-fallback__desc">Dokumentasi layanan perawatan studio.</p>';
      containerEl.appendChild(fallback);
    }

    if (isHero) {
      containerEl.appendChild(createHeroCaptionOverlay());
    }
  }

  /*
    4. PERENDER BAGIAN-BAGIAN HALAMAN
  */
  function renderHeroSection() {
    var hero = (typeof RUParonaData !== "undefined" && RUParonaData.hero) ? RUParonaData.hero : {};
    var eyebrowEl = document.getElementById("hero-eyebrow");
    var titleEl = document.getElementById("hero-title");
    var subtitleEl = document.getElementById("hero-subtitle");
    var primaryCtaEl = document.getElementById("hero-cta-primary");
    var secondaryCtaEl = document.getElementById("hero-cta-secondary");
    var highlightsEl = document.getElementById("hero-highlights");
    var mediaSlotEl = document.getElementById("hero-media-slot");

    if (eyebrowEl && hero.eyebrow) eyebrowEl.textContent = hero.eyebrow;
    if (titleEl && hero.judul) titleEl.textContent = hero.judul;
    if (subtitleEl && hero.deskripsi) subtitleEl.textContent = hero.deskripsi;

    if (primaryCtaEl && hero.teksTombolUtama) {
      primaryCtaEl.textContent = hero.teksTombolUtama;
      primaryCtaEl.onclick = function (e) {
        e.preventDefault();
        openWhatsAppOrDemoModal(RUParonaData.kontak.pesanDefaultWhatsApp);
      };
    }

    if (secondaryCtaEl && hero.teksTombolSekunder) {
      secondaryCtaEl.textContent = hero.teksTombolSekunder;
    }

    if (highlightsEl) {
      if (Array.isArray(hero.sorotanSingkat) && hero.sorotanSingkat.length > 0) {
        highlightsEl.style.display = "grid";
        highlightsEl.innerHTML = hero.sorotanSingkat
          .map(function (item) {
            return (
              '<div class="hero-highlight-item">' +
              "<dt>" + item.label + "</dt>" +
              "<dd>" + item.nilai + "</dd>" +
              "</div>"
            );
          })
          .join("");
      } else {
        highlightsEl.style.display = "none";
      }
    }

    renderMediaSlot(mediaSlotEl, "hero-utama");
  }

  function renderServiceSummarySection() {
    var gridEl = document.getElementById("service-summary-grid");
    if (!gridEl || !Array.isArray(RUParonaData.kategoriLayanan)) return;

    gridEl.innerHTML = RUParonaData.kategoriLayanan
      .map(function (kat) {
        return (
          '<article class="summary-card">' +
          "<div>" +
          '<div class="summary-card__meta">' +
          '<span class="summary-card__num">' + kat.nomor + "</span>" +
          '<span class="summary-card__badge">' + kat.estimasiUmum + "</span>" +
          "</div>" +
          '<h3 class="summary-card__title">' + kat.nama + "</h3>" +
          '<p class="summary-card__desc">' + kat.ringkasan + "</p>" +
          "</div>" +
          '<a class="summary-card__link" href="' + kat.targetHargaId + '">Lihat rincian &amp; tarif ' + kat.nama + "</a>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderAboutSection() {
    var tentang = (typeof RUParonaData !== "undefined" && RUParonaData.tentangStudio) ? RUParonaData.tentangStudio : {};
    var titleEl = document.getElementById("about-title");
    var paragraphsEl = document.getElementById("about-paragraphs");
    var valuesEl = document.getElementById("about-values");
    var mediaSlotEl = document.getElementById("about-media-slot");
    var captionEl = document.getElementById("about-media-caption");

    if (titleEl && tentang.judul) titleEl.textContent = tentang.judul;
    if (captionEl && tentang.keteranganFoto) captionEl.textContent = tentang.keteranganFoto;

    if (paragraphsEl && Array.isArray(tentang.paragraf)) {
      paragraphsEl.innerHTML = tentang.paragraf
        .map(function (p) {
          return "<p>" + p + "</p>";
        })
        .join("");
    }

    if (valuesEl && Array.isArray(tentang.nilaiUtama)) {
      valuesEl.innerHTML = tentang.nilaiUtama
        .map(function (val) {
          return (
            '<div class="value-item">' +
            '<span class="value-item__index">' + val.nomor + "</span>" +
            "<div>" +
            '<h3 class="value-item__title">' + val.judul + "</h3>" +
            '<p class="value-item__desc">' + val.deskripsi + "</p>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    renderMediaSlot(mediaSlotEl, "tentang-studio");
  }

  function renderPricingSection() {
    var navEl = document.getElementById("pricing-category-nav");
    var containerEl = document.getElementById("pricing-groups-container");
    if (!containerEl || !Array.isArray(RUParonaData.daftarHargaLayanan)) return;

    var daftarGrup = RUParonaData.daftarHargaLayanan;

    if (navEl) {
      navEl.innerHTML = daftarGrup
        .map(function (grup) {
          return '<a class="category-pill" href="#' + grup.idGrup + '">' + grup.namaKategori + "</a>";
        })
        .join("");
    }

    containerEl.innerHTML = daftarGrup
      .map(function (grup) {
        var itemsHtml = grup.items
          .map(function (item) {
            var pesanLayanan =
              "Halo Ruparona Studio, saya ingin menanyakan jadwal untuk layanan " +
              item.nama +
              " (" + grup.namaKategori + " - tarif " + item.harga + ").";

            return (
              '<li class="pricing-item">' +
              '<div class="pricing-item__info">' +
              '<h4 class="pricing-item__name">' + item.nama + "</h4>" +
              '<p class="pricing-item__desc">' + item.deskripsi + "</p>" +
              '<span class="pricing-item__duration">Durasi pengerjaan: ' + item.durasi + "</span>" +
              "</div>" +
              '<div class="pricing-item__action">' +
              '<span class="pricing-item__price">' + item.harga + "</span>" +
              '<button type="button" class="btn btn--secondary btn--sm js-service-wa-btn" data-wa-message="' +
              pesanLayanan.replace(/"/g, "&quot;") +
              '">Tanya Jadwal Sesi</button>' +
              "</div>" +
              "</li>"
            );
          })
          .join("");

        return (
          '<article id="' + grup.idGrup + '" class="pricing-group">' +
          '<header class="pricing-group__header">' +
          '<h3 class="pricing-group__title">' + grup.namaKategori + "</h3>" +
          '<p class="pricing-group__subtitle">' + grup.catatanKategori + "</p>" +
          "</header>" +
          '<ul class="pricing-list">' + itemsHtml + "</ul>" +
          "</article>"
        );
      })
      .join("");

    var serviceButtons = containerEl.querySelectorAll(".js-service-wa-btn");
    serviceButtons.forEach(function (btn) {
      btn.onclick = function () {
        var pesan = btn.getAttribute("data-wa-message");
        openWhatsAppOrDemoModal(pesan);
      };
    });
  }

  function renderGallerySection() {
    var gridEl = document.getElementById("gallery-grid");
    if (!gridEl || !Array.isArray(RUParonaData.galeriStudio)) return;

    gridEl.innerHTML = RUParonaData.galeriStudio
      .map(function (item, idx) {
        var frameId = "gallery-slot-frame-" + idx;
        return (
          '<figure class="gallery-card">' +
          '<div id="' + frameId + '" class="media-frame media-frame--landscape"></div>' +
          '<figcaption class="gallery-card__body">' +
          '<p class="gallery-card__category">' + item.kategori + "</p>" +
          '<h3 class="gallery-card__title">' + item.judul + "</h3>" +
          '<p class="gallery-card__caption">' + item.keterangan + "</p>" +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("");

    RUParonaData.galeriStudio.forEach(function (item, idx) {
      var frameEl = document.getElementById("gallery-slot-frame-" + idx);
      renderMediaSlot(frameEl, item.slotMedia);
    });
  }

  function renderReasonsSection() {
    var gridEl = document.getElementById("reasons-grid");
    if (!gridEl || !Array.isArray(RUParonaData.alasanMemilih)) return;

    gridEl.innerHTML = RUParonaData.alasanMemilih
      .map(function (item) {
        return (
          '<article class="reason-card">' +
          '<p class="reason-card__label">' + item.label + "</p>" +
          '<h3 class="reason-card__title">' + item.judul + "</h3>" +
          '<p class="reason-card__desc">' + item.deskripsi + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderTestimonialsSection() {
    var disclaimerEl = document.getElementById("testimonials-disclaimer");
    var gridEl = document.getElementById("testimonials-grid");

    if (disclaimerEl && RUParonaData.pengantarTestimoni) {
      disclaimerEl.textContent = RUParonaData.pengantarTestimoni;
    }

    if (!gridEl || !Array.isArray(RUParonaData.testimoniFiktif)) return;

    gridEl.innerHTML = RUParonaData.testimoniFiktif
      .map(function (ulasan) {
        return (
          '<article class="testimonial-card">' +
          "<div>" +
          '<span class="testimonial-card__badge">' + ulasan.penanda + "</span>" +
          '<blockquote class="testimonial-card__quote">“' + ulasan.kutipan + "”</blockquote>" +
          "</div>" +
          "<footer>" +
          '<p class="testimonial-card__author">' + ulasan.nama + "</p>" +
          '<p class="testimonial-card__service">' + ulasan.layanan + "</p>" +
          "</footer>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderContactSection() {
    var kontak = (typeof RUParonaData !== "undefined" && RUParonaData.kontak) ? RUParonaData.kontak : {};
    var introEl = document.getElementById("contact-intro");
    var addressEl = document.getElementById("contact-address");
    var landmarkEl = document.getElementById("contact-landmark");
    var hoursListEl = document.getElementById("operating-hours-list");
    var channelsListEl = document.getElementById("contact-channels-list");
    var topicContainerEl = document.getElementById("whatsapp-topic-buttons");
    var mainWaBtnEl = document.getElementById("contact-wa-main-btn");
    var statusNoteEl = document.getElementById("contact-wa-status-note");

    if (introEl && kontak.pengantarKontak) introEl.textContent = kontak.pengantarKontak;
    if (addressEl && kontak.alamatLengkap) addressEl.textContent = kontak.alamatLengkap;
    if (landmarkEl && kontak.patokanLokasi) landmarkEl.textContent = kontak.patokanLokasi;

    if (hoursListEl && Array.isArray(RUParonaData.jamOperasional)) {
      hoursListEl.innerHTML = RUParonaData.jamOperasional
        .map(function (row) {
          return (
            '<div class="hours-row">' +
            "<dt>" + row.hari + "</dt>" +
            "<dd>" + row.jam + "</dd>" +
            "</div>"
          );
        })
        .join("");
    }

    if (channelsListEl) {
      channelsListEl.innerHTML =
        "<li><strong>WhatsApp:</strong> " + (kontak.tampilanTelepon || kontak.nomorWhatsApp || "-") + "</li>" +
        "<li><strong>Email:</strong> " + (kontak.email || "-") + "</li>" +
        "<li><strong>Instagram:</strong> " + (kontak.instagram || "-") + "</li>";
    }

    var pesanTerpilih = kontak.pesanDefaultWhatsApp || "";

    if (topicContainerEl && Array.isArray(kontak.topikPesanCepat)) {
      topicContainerEl.innerHTML = kontak.topikPesanCepat
        .map(function (topik, index) {
          var activeClass = index === 0 ? " is-active" : "";
          if (index === 0) {
            pesanTerpilih = topik.pesan;
          }
          return (
            '<button type="button" class="wa-topic-btn' + activeClass + '" data-topic-msg="' +
            topik.pesan.replace(/"/g, "&quot;") + '">' + topik.label + "</button>"
          );
        })
        .join("");

      var topicBtns = topicContainerEl.querySelectorAll(".wa-topic-btn");
      topicBtns.forEach(function (btn) {
        btn.onclick = function () {
          topicBtns.forEach(function (b) {
            b.classList.remove("is-active");
          });
          btn.classList.add("is-active");
          pesanTerpilih = btn.getAttribute("data-topic-msg");
        };
      });
    }

    if (mainWaBtnEl) {
      mainWaBtnEl.onclick = function (e) {
        e.preventDefault();
        openWhatsAppOrDemoModal(pesanTerpilih);
      };
    }

    if (statusNoteEl) {
      statusNoteEl.textContent = "Pesan otomatis akan dibuka langsung di aplikasi WhatsApp Anda.";
    }
  }

  /*
    5. INISIALISASI HALAMAN
  */
  function initApp() {
    if (typeof RUParonaData === "undefined" || typeof RUParonaComponents === "undefined") {
      return;
    }

    var headerEl = document.getElementById("site-header");
    var footerEl = document.getElementById("site-footer");

    RUParonaComponents.renderHeader(headerEl, RUParonaData, openWhatsAppOrDemoModal);
    RUParonaComponents.renderFooter(footerEl, RUParonaData);

    setupDemoModalEvents();
    renderHeroSection();
    renderServiceSummarySection();
    renderAboutSection();
    renderPricingSection();
    renderGallerySection();
    renderReasonsSection();
    renderTestimonialsSection();
    renderContactSection();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();