/*
  ==========================================================================
  JUDUL FILE : js/images.js
  FUNGSI     : Pusat data URL gambar dan video untuk Ruparona Studio.
               Menggunakan URL file gambar langsung dari CDN Unsplash
               dan mencatat URL halaman sumber secara terpisah.
  ==========================================================================
*/

const RUParonaMedia = {
  slots: {
    "hero-utama": {
      slot: "hero-utama",
      kategori: "Interior & Suasana Studio",
      labelFallback: "Potret Ruang Utama",
      judulFallback: "Ruang Perawatan & Grooming Terpadu",
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1560066984-138dadb4c035",
      sumber: "Unsplash / Kirill Balobanov",
      alt: "Suasana interior studio salon dan perawatan dengan cermin besar dan pencahayaan hangat",
      aspekRasio: "4 / 5",
      prioritas: true,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto utama hero studio salon & grooming."
    },

    "tentang-studio": {
      slot: "tentang-studio",
      kategori: "Tentang Studio",
      labelFallback: "Sudut Studio",
      judulFallback: "Ruang Kerja Bersih & Terorganisasi",
      url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1527799820374-dcf8d9d4a388",
      sumber: "Unsplash / Adam Winger",
      alt: "Deretan kursi perawatan dan cermin di dalam Ruparona Studio",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto interior zona kursi tata rambut dan cermin."
    },

    "galeri-interior": {
      slot: "galeri-interior",
      kategori: "Suasana Studio",
      labelFallback: "Suasana Studio",
      judulFallback: "Area Tunggu & Resepsionis",
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1521590832167-7bcbfaa6381f",
      sumber: "Unsplash / Guille Alvarez",
      alt: "Area tunggu pelanggan dengan sofa hangat dan meja resepsionis kayu",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto lobi dan area ruang tunggu studio."
    },

    "galeri-hair": {
      slot: "galeri-hair",
      kategori: "Hair Salon",
      labelFallback: "Foto Layanan Hair Salon",
      judulFallback: "Penataan & Perawatan Rambut",
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1562322140-8baeececf3df",
      sumber: "Unsplash / Element5 Digital",
      alt: "Proses penataan rambut pelanggan di area Hair Salon Ruparona Studio",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto sesi penataan dan pemotongan rambut wanita."
    },

    "galeri-barber": {
      slot: "galeri-barber",
      kategori: "Barber & Grooming",
      labelFallback: "Foto Layanan Barber",
      judulFallback: "Potong Rambut Pria & Handuk Hangat",
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1503951914875-452162b0f3f1",
      sumber: "Unsplash / Hai Phung",
      alt: "Kursi barber klasik dan peralatan grooming yang tertata rapi",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto area kursi barber pria dan peralatan cukur."
    },

    "galeri-nail": {
      slot: "galeri-nail",
      kategori: "Nail Studio",
      labelFallback: "Foto Layanan Nail Studio",
      judulFallback: "Manicure, Pedicure & Gel Polish",
      url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1632345031435-8727f6897d53",
      sumber: "Unsplash / Krisztina Papp",
      alt: "Meja perawatan kuku dan deretan warna kuteks gel yang netral",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto perawatan manicure kuku tangan."
    },

    "galeri-lash-brow": {
      slot: "galeri-lash-brow",
      kategori: "Lash & Brow",
      labelFallback: "Foto Layanan Lash & Brow",
      judulFallback: "Brow Shaping & Lash Lift",
      url: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1583001931096-959e9a1a6223",
      sumber: "Unsplash / Maria Lupan",
      alt: "Area perawatan alis dan bulu mata yang tenang dan bersih",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto fokus pengerjaan lash & brow."
    },

    "galeri-makeup": {
      slot: "galeri-makeup",
      kategori: "Makeup & Relaksasi",
      labelFallback: "Foto Layanan Makeup",
      judulFallback: "Riasan Acara & Konsultasi Tampilan",
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
      halamanSumber: "https://unsplash.com/photos/1487412720507-e7ab37603c6f",
      sumber: "Unsplash / freestocks",
      alt: "Meja rias dengan kuas makeup bersih dan pencahayaan hangat",
      aspekRasio: "4 / 3",
      prioritas: false,
      statusPemeriksaan: "terverifikasi",
      catatan: "Foto peralatan makeup dan kuas kecantikan."
    }
  },

  videoOpsional: {
    slot: "video-suasana-studio",
    aktif: false,
    urlVideo: "",
    urlPoster: "",
    sumber: "Tidak digunakan (Opsional)",
    keterangan: "Video singkat suasana interior Ruparona Studio",
    statusPemeriksaan: "dinonaktifkan",
    catatan: "Biarkan aktif: false agar halaman tetap ringan."
  }
};