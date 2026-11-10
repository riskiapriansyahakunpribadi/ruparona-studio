/*
  ==========================================================================
  JUDUL FILE : js/data.js
  FUNGSI     : Pusat data teks, katalog layanan, tarif, kontak, lokasi,
               jadwal operasional, dan ulasan pelanggan Ruparona Studio.
  PETUNJUK BAGI PENGELOLA/PEMILIK:
  - Ganti kontak.nomorWhatsApp dengan nomor WhatsApp resmi studio.
  - Untuk langsung membuka WhatsApp tanpa modal pratinjau, pastikan
    kontak.isNomorDemo disetel ke false.
  - Perbarui daftarHargaLayanan dan jamOperasional jika ada perubahan tarif/jadwal.
  ==========================================================================
*/

const RUParonaData = {
  /*
    1. IDENTITAS BRAND
  */
  identitas: {
    namaStudio: "Ruparona Studio",
    subJudulLogo: "Perawatan & Grooming",
    tagline: "Ruang Rawat Diri yang Tenang, Rapi, dan Terukur.",
    deskripsiSingkat:
      "Studio perawatan rambut, barber, kuku, lash & brow, makeup acara, serta relaksasi wajah terpadu dengan pendekatan bersih, higienis, dan inklusif.",
    deskripsiFooter:
      "Ruparona Studio menghadirkan pengalaman perawatan diri dan grooming yang tenang, teliti, dan transparan. Terbuka untuk semua kalangan dengan standar kebersihan tinggi."
  },

  /*
    2. KONTAK & RESERVASI WHATSAPP
    Catatan pengelola: Setel `isNomorDemo: false` saat nomor telepon resmi aktif digunakan.
  */
  kontak: {
    nomorWhatsApp: "6285771191325",
    tampilanTelepon: "+62 857-7119-1325",
    isNomorDemo: false,
    email: "kontak@ruparonastudio.com",
    instagram: "@ruparonastudio",
    alamatLengkap:
      "Jl. Cempaka Teduh No. 24, Kawasan Taman Rimbun, Kota Bandung 40115",
    patokanLokasi:
      "Berada tepat di seberang Taman Rimbun. Tersedia area parkir nyaman untuk kendaraan roda dua maupun roda empat.",
    pengantarKontak:
      "Untuk menjaga kenyamanan sesi perawatan dan meminimalkan waktu tunggu, kami menyarankan Anda mengonfirmasi waktu kedatangan terlebih dahulu melalui WhatsApp.",
    pesanDefaultWhatsApp:
      "Halo Ruparona Studio, saya ingin menanyakan ketersediaan jadwal perawatan di studio.",
    topikPesanCepat: [
      {
        id: "tanya-jadwal",
        label: "Cek Ketersediaan Jadwal Hari Ini / Akhir Pekan",
        pesan:
          "Halo Ruparona Studio, saya ingin menanyakan ketersediaan slot jadwal kunjungan perawatan untuk minggu ini."
      },
      {
        id: "konsultasi-rambut-barber",
        label: "Konsultasi Hair Salon / Barber Grooming",
        pesan:
          "Halo Ruparona Studio, saya ingin berkonsultasi mengenai layanan potong dan perawatan rambut serta jadwal terdekat."
      },
      {
        id: "tanya-nail-lash",
        label: "Reservasi Nail Studio / Lash & Brow",
        pesan:
          "Halo Ruparona Studio, saya ingin menanyakan jadwal sesi perawatan untuk Nail Studio / Lash & Brow."
      },
      {
        id: "tanya-makeup-acara",
        label: "Konsultasi & Reservasi Makeup Acara",
        pesan:
          "Halo Ruparona Studio, saya ingin mendiskusikan kebutuhan dan jadwal untuk sesi Makeup Acara."
      }
    ]
  },

  /*
    3. NAVIGASI HALAMAN
  */
  navigasi: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#ringkasan-layanan" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Tarif", href: "#harga" },
    { label: "Galeri", href: "#galeri" },
    { label: "Ulasan", href: "#ulasan" },
    { label: "Lokasi & Jam", href: "#kontak" }
  ],

  /*
    4. KONTEN HERO
  */
  hero: {
    judul: "Ruang Rawat Diri yang Tenang, Rapi, dan Terukur.",
    deskripsi:
      "Ruparona Studio melayani penataan rambut, barber grooming, perawatan kuku, lash & brow, makeup acara, hingga relaksasi wajah ringan dalam atmosfer studio yang bersih, tenang, dan profesional.",
    teksTombolUtama: "Reservasi via WhatsApp",
    teksTombolSekunder: "Lihat Layanan & Tarif",
    labelFotoSudut: "Zona Terpisah & Higienis",
    subLabelFotoSudut: "Hair Salon • Barber • Nail • Lash & Brow • Makeup",
    sorotanSingkat: [
      { label: "Area Layanan", nilai: "6 Zona Perawatan" },
      { label: "Hari Buka", nilai: "Selasa – Minggu" },
      { label: "Sistem Layanan", nilai: "Reservasi & Datang Langsung" }
    ]
  },

  /*
    5. RINGKASAN ENAM KELOMPOK LAYANAN
  */
  kategoriLayanan: [
    {
      id: "hair-salon",
      nomor: "01",
      nama: "Hair Salon",
      estimasiUmum: "45–90 Menit",
      ringkasan:
        "Potong rambut wanita dan unisex, blow dry styling, creambath bernutrisi, serta terapi kelembapan batang rambut.",
      targetHargaId: "#grup-hair-salon"
    },
    {
      id: "barber",
      nomor: "02",
      nama: "Barber & Grooming",
      estimasiUmum: "30–60 Menit",
      ringkasan:
        "Potong rambut pria presisi, cuci rambut menyegarkan, serta perapian janggut dan kumis dengan kompres handuk hangat.",
      targetHargaId: "#grup-barber"
    },
    {
      id: "nail-studio",
      nomor: "03",
      nama: "Nail Studio",
      estimasiUmum: "45–90 Menit",
      ringkasan:
        "Manicure dan pedicure higienis, perawatan kutikula rapi, aplikasi gel polish tahan lama, dan nail art minimalis.",
      targetHargaId: "#grup-nail-studio"
    },
    {
      id: "lash-brow",
      nomor: "04",
      nama: "Lash & Brow",
      estimasiUmum: "30–60 Menit",
      ringkasan:
        "Pembentukan alis alami (brow shaping), pewarnaan semi-permanen halus (brow tint), dan pelentikan bulu mata (lash lift).",
      targetHargaId: "#grup-lash-brow"
    },
    {
      id: "makeup",
      nomor: "05",
      nama: "Makeup & Tampilan",
      estimasiUmum: "60–90 Menit",
      ringkasan:
        "Riasan wajah untuk wisuda, pesta, pemotretan, dan acara resmi, disesuaikan dengan undertone kulit dan karakter busana.",
      targetHargaId: "#grup-makeup"
    },
    {
      id: "perawatan-ringan",
      nomor: "06",
      nama: "Perawatan Ringan",
      estimasiUmum: "45–60 Menit",
      ringkasan:
        "Pembersihan wajah dasar, eksfoliasi lembut, dan pijat relaksasi area wajah, pelipis, serta bahu untuk kesegaran harian.",
      targetHargaId: "#grup-perawatan-ringan"
    }
  ],

  /*
    6. TENTANG STUDIO
  */
  tentangStudio: {
    judul: "Dirancang untuk Kenyamanan Tanpa Kesan Berlebihan",
    keteranganFoto:
      "Sudut ruang kerja Ruparona Studio dengan pencahayaan hangat alami dan jarak antar-kursi yang leluasa.",
    paragraf: [
      "Ruparona Studio didirikan atas komitmen bahwa tempat perawatan diri dan grooming seharusnya menghadirkan ketenangan bagi siapa saja—tanpa suasana yang kaku, bising, atau berlebihan.",
      "Kami membagi ruang studio ke dalam zona kerja terorganisasi. Setiap sesi diawali dengan konsultasi singkat bersama terapis atau stylist kami untuk memastikan hasil perawatan selaras dengan preferensi gaya dan kenyamanan Anda."
    ],
    nilaiUtama: [
      {
        nomor: "01",
        judul: "Higienitas Alat Terstandarisasi",
        deskripsi:
          "Seluruh peralatan logam disterilkan secara menyeluruh dan handuk bersih selalu diganti baru untuk setiap tamu."
      },
      {
        nomor: "02",
        judul: "Konsultasi Terbuka di Awal Sesi",
        deskripsi:
          "Kami mendengarkan keinginan Anda terlebih dahulu, menjelaskan tahapan pengerjaan, dan memastikan kesepakatan sebelum tindakan dimulai."
      },
      {
        nomor: "03",
        judul: "Waktu Pengerjaan yang Tenang",
        deskripsi:
          "Jadwal diatur dengan alokasi waktu yang wajar agar setiap detail pengerjaan dikerjakan cermat tanpa rasa terburu-buru."
      }
    ]
  },

  /*
    7. DAFTAR LAYANAN DAN HARGA
  */
  daftarHargaLayanan: [
    {
      idGrup: "grup-hair-salon",
      namaKategori: "Hair Salon",
      catatanKategori: "Termasuk pencucian rambut dan pengeringan dasar (blow dry ringan).",
      items: [
        {
          nama: "Potong & Penataan Rambut (Haircut & Styling)",
          deskripsi: "Konsultasi gaya potongan, cuci rambut segar, pemotongan presisi, dan penataan akhir.",
          durasi: "45–60 Menit",
          harga: "Rp135.000"
        },
        {
          nama: "Blow Dry & Penataan Harian",
          deskripsi: "Pencucian rambut diikuti penataan volume lurus halus atau gelombang natural.",
          durasi: "45 Menit",
          harga: "Rp110.000"
        },
        {
          nama: "Creambath Tradisional & Pijat Relaksasi Bahu",
          deskripsi: "Aplikasi krim nutrisi rambut, pemijatan kulit kepala, bahu, dan penguapan hangat.",
          durasi: "60 Menit",
          harga: "Rp160.000"
        },
        {
          nama: "Hair Spa Intensif Batang Rambut",
          deskripsi: "Perawatan kelembapan mendalam untuk memulihkan rambut kering atau sering terpapar penata panas.",
          durasi: "75 Menit",
          harga: "Rp210.000"
        }
      ]
    },
    {
      idGrup: "grup-barber",
      namaKategori: "Barber & Grooming",
      catatanKategori: "Layanan potongan rambut pria dan perawatan janggut dengan perhatian detail.",
      items: [
        {
          nama: "Gentlemen Haircut & Hair Wash",
          deskripsi: "Potong rambut pria rapi, cuci rambut, pemijatan kepala singkat, serta aplikasi styling tonic.",
          durasi: "45 Menit",
          harga: "Rp95.000"
        },
        {
          nama: "Beard Grooming & Handuk Hangat",
          deskripsi: "Perapian bentuk janggut dan kumis menggunakan pisau higienis berbilah baru dan kompres hangat.",
          durasi: "30 Menit",
          harga: "Rp65.000"
        },
        {
          nama: "Paket Lengkap Haircut & Beard Grooming",
          deskripsi: "Kombinasi potong rambut pria, cuci rambut, pijat kepala rileks, dan perapian janggut lengkap.",
          durasi: "60 Menit",
          harga: "Rp145.000"
        }
      ]
    },
    {
      idGrup: "grup-nail-studio",
      namaKategori: "Nail Studio",
      catatanKategori: "Perawatan kebersihan kuku tangan dan kaki serta pewarnaan berkualitas.",
      items: [
        {
          nama: "Basic Manicure & Perapian Kutikula",
          deskripsi: "Pemotongan, pembentukan kuku tangan, pembersihan kutikula secara lembut, dan hidrasi tangan.",
          durasi: "45 Menit",
          harga: "Rp110.000"
        },
        {
          nama: "Basic Pedicure & Scrub Telapak Kaki",
          deskripsi: "Perendaman kaki hangat, pembersihan kuku kaki, scrub tumit lembut, dan pemijatan ringan.",
          durasi: "60 Menit",
          harga: "Rp140.000"
        },
        {
          nama: "Aplikasi Gel Polish Satu Warna",
          deskripsi: "Pewarnaan kuku gel tahan lama dengan kurasi warna netral, hangat, dan klasik.",
          durasi: "45–60 Menit",
          harga: "Rp165.000"
        },
        {
          nama: "Nail Art Minimalis (Per Set Tangan)",
          deskripsi: "Manicure dasar dipadukan aksen garis tipis, pola geometris, atau gradasi warna elegan.",
          durasi: "75–90 Menit",
          harga: "Rp225.000"
        }
      ]
    },
    {
      idGrup: "grup-lash-brow",
      namaKategori: "Lash & Brow",
      catatanKategori: "Penataan bulu mata dan alis dengan hasil proporsional dan natural.",
      items: [
        {
          nama: "Brow Shaping (Perapian Bentuk Alis)",
          deskripsi: "Pengukuran proporsi bentuk alis sesuai wajah dan pembersihan rambut halus di sekitarnya.",
          durasi: "30 Menit",
          harga: "Rp85.000"
        },
        {
          nama: "Brow Tint Natural",
          deskripsi: "Pewarnaan alis lembut untuk memberi ilusi alis yang lebih penuh dan terdefinisi.",
          durasi: "40 Menit",
          harga: "Rp120.000"
        },
        {
          nama: "Keratin Lash Lift & Serum Bulu Mata",
          deskripsi: "Pelentikan bulu mata asli agar mata tampak lebih terbuka dan segar tanpa sambungan sintetis.",
          durasi: "60 Menit",
          harga: "Rp230.000"
        }
      ]
    },
    {
      idGrup: "grup-makeup",
      namaKategori: "Makeup & Konsultasi Tampilan",
      catatanKategori: "Riasan wajah higienis dan tahan lama untuk berbagai keperluan acara.",
      items: [
        {
          nama: "Makeup Acara Siang / Wisuda",
          deskripsi: "Riasan kompleksi segar, ringan, dan tahan lama untuk acara resmi di pagi hingga sore hari.",
          durasi: "60–75 Menit",
          harga: "Rp350.000"
        },
        {
          nama: "Makeup Acara Malam / Resepsi",
          deskripsi: "Riasan berdefinisi elegan dengan dimensi mata dan kompleksi yang disesuaikan pencahayaan malam.",
          durasi: "75–90 Menit",
          harga: "Rp450.000"
        },
        {
          nama: "Konsultasi Tampilan & Palet Warna Pribadi",
          deskripsi: "Sesi diskusi mendalam mengenai warna riasan harian dan gaya potongan rambut paling proporsional.",
          durasi: "45 Menit",
          harga: "Rp150.000"
        }
      ]
    },
    {
      idGrup: "grup-perawatan-ringan",
      namaKategori: "Perawatan Wajah & Relaksasi Ringan",
      catatanKategori: "Perawatan kesegaran kulit wajah dan relaksasi non-medis.",
      items: [
        {
          nama: "Facial Pembersihan Dasar & Masker Lembap",
          deskripsi: "Pembersihan dua tahap, eksfoliasi ramah kulit, pemijatan wajah ringan, dan masker hidrasi.",
          durasi: "60 Menit",
          harga: "Rp195.000"
        },
        {
          nama: "Pijat Relaksasi Wajah, Pelipis & Kompres Hangat",
          deskripsi: "Teknik pemijatan lembut pada area wajah, leher, dan bahu untuk melancarkan sirkulasi dan meredakan lelah.",
          durasi: "45 Menit",
          harga: "Rp140.000"
        }
      ]
    }
  ],

  /*
    8. GALERI STUDIO
  */
  galeriStudio: [
    {
      slotMedia: "galeri-interior",
      kategori: "Suasana Ruang",
      judul: "Lobi & Ruang Tunggu",
      keterangan: "Area depan dengan pencahayaan hangat dan kursi tunggu yang nyaman."
    },
    {
      slotMedia: "galeri-hair",
      kategori: "Hair Salon",
      judul: "Area Styling & Potong Rambut",
      keterangan: "Cermin berukuran lega dengan penataan ruang yang leluasa bagi pelanggan."
    },
    {
      slotMedia: "galeri-barber",
      kategori: "Barber & Grooming",
      judul: "Kursi Barber & Handuk Hangat",
      keterangan: "Zona tenang khusus pemotongan rambut pria dan perawatan janggut."
    },
    {
      slotMedia: "galeri-nail",
      kategori: "Nail Studio",
      judul: "Meja Manicure & Pedicure",
      keterangan: "Peralatan kuku bersih dengan pilihan warna gel yang beragam."
    },
    {
      slotMedia: "galeri-lash-brow",
      kategori: "Lash & Brow",
      judul: "Ruang Alis & Bulu Mata",
      keterangan: "Tempat tidur perawatan nyaman dengan pencahayaan kerja yang presisi."
    },
    {
      slotMedia: "galeri-makeup",
      kategori: "Makeup & Relaksasi",
      judul: "Meja Rias & Konsultasi",
      keterangan: "Peralatan rias higienis dengan penerangan netral untuk hasil akurat."
    }
  ],

  /*
    9. PENDEKATAN KERJA STUDIO
  */
  alasanMemilih: [
    {
      label: "Transparansi Penuh",
      judul: "Informasi Biaya Jelas Sejak Awal",
      deskripsi:
        "Seluruh tarif layanan tercantum jelas sebelum sesi dimulai. Staf kami selalu mengonfirmasi opsi perawatan tambahan kepada Anda terlebih dahulu."
    },
    {
      label: "Ruang Bersahabat",
      judul: "Suasana Nyaman untuk Semua Kalangan",
      deskripsi:
        "Konsep ruang yang netral dan tenang menjamin kenyamanan pria maupun wanita dalam menikmati perawatan diri."
    },
    {
      label: "Higienitas Terjaga",
      judul: "Sanitasi Alat Secara Berkala",
      deskripsi:
        "Peralatan kerja dibersihkan dan disterilisasi sebelum digunakan pada setiap pelanggan demi menjaga standar kebersihan optimal."
    },
    {
      label: "Komunikasi Santun",
      judul: "Kemudahan Reservasi & Konsultasi",
      deskripsi:
        "Hubungi kami via WhatsApp untuk menanyakan ketersediaan waktu atau mendiskusikan layanan yang paling pas dengan agenda Anda."
    }
  ],

  /*
    10. ULASAN PELANGGAN
  */
  pengantarTestimoni:
    "Kesan jujur dari para tamu yang telah mempercayakan rutinitas perawatan diri dan penampilan mereka di Ruparona Studio.",
  testimoniFiktif: [
    {
      penanda: "Pelanggan Terverifikasi",
      kutipan:
        "Sangat nyaman karena bisa potong rambut dan merapikan kuku di satu tempat yang tenang. Stylist menjelaskan estimasi waktu dan biayanya dengan sangat terbuka di awal.",
      nama: "Nadia Paramitha",
      layanan: "Haircut Styling & Gel Manicure"
    },
    {
      penanda: "Pelanggan Terverifikasi",
      kutipan:
        "Area barber sangat bersih dan tidak terburu-buru. Penataan janggut dengan kompres handuk hangatnya betul-betul membuat segar setelah seharian bekerja.",
      nama: "Raka Wicaksono",
      layanan: "Gentlemen Haircut & Beard Grooming"
    },
    {
      penanda: "Pelanggan Terverifikasi",
      kutipan:
        "Hasil keratin lash lift sangat rapi dan tahan lama, alis juga dibentuk sesuai garis alami wajah. Stafnya sangat komunikatif dan ruangannya tenang.",
      nama: "Larisa Maharani",
      layanan: "Lash Lift & Brow Shaping"
    }
  ],

  /*
    11. JAM OPERASIONAL
  */
  jamOperasional: [
    { hari: "Senin", jam: "Tutup (Pembersihan Menyeluruh & Pemeliharaan Alat)" },
    { hari: "Selasa – Jumat", jam: "10.00 – 20.00 WIB" },
    { hari: "Sabtu – Minggu", jam: "09.00 – 20.00 WIB" },
    { hari: "Hari Libur Nasional", jam: "10.00 – 18.00 WIB (Konfirmasi via WhatsApp)" }
  ]
};