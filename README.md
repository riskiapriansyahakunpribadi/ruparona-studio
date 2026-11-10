# Ruparona Studio — kerangka proyek

Folder ini berisi kerangka file website demo Ruparona Studio untuk dibuka dan diedit di Visual Studio Code.

## Struktur folder

```text
ruparona-studio/
├── index.html
├── halaman-audit-gambar.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── components.js
    ├── data.js
    ├── images.js
    └── main.js
```

## Cara mulai

1. Ekstrak ZIP ke folder yang mudah ditemukan.
2. Buka Visual Studio Code.
3. Pilih **File > Open Folder** lalu pilih folder `ruparona-studio`.
4. Buka file yang sesuai dan tempelkan kode dari Gemini Argon.
5. Simpan perubahan, lalu buka `index.html` dengan browser untuk melihat hasilnya.

Website akhir dirancang agar dapat dibuka langsung dengan klik dua kali `index.html`, tanpa npm, framework, backend, atau server.

## File mana yang diisi?

- `index.html`: kerangka halaman utama dan tautan CSS/JavaScript.
- `css/style.css`: seluruh aturan desain dan tampilan responsif.
- `js/components.js`: komponen header dan footer bersama.
- `js/data.js`: teks, daftar layanan, harga contoh, kontak, lokasi, jadwal, dan data demo lain.
- `js/images.js`: daftar URL gambar dan video beserta sumber, alt text, dan statusnya.
- `js/main.js`: kode yang menghubungkan data dan komponen serta interaksi halaman.
- `halaman-audit-gambar.html`: halaman untuk mengecek aset gambar dan video.

Setiap file kode sudah diberi judul dan petunjuk awal. Ganti bagian `TODO` dengan kode lengkap yang diberikan Gemini Argon. Jangan biarkan file data atau JavaScript kosong setelah website selesai dibuat.

## Urutan tempel kode yang disarankan

1. `js/data.js`
2. `js/images.js`
3. `js/components.js`
4. `index.html`
5. `css/style.css`
6. `js/main.js`
7. `halaman-audit-gambar.html`

Ikuti urutan lain jika Gemini memberikan instruksi yang berbeda, tetapi pastikan urutan pemanggilan script pada `index.html` tetap sesuai dependensinya.

## Catatan aset

Semua alamat gambar dan video harus terdaftar di `js/images.js`. Jika sebuah gambar tidak muncul, buka `halaman-audit-gambar.html`, cari slot yang gagal, lalu ganti URL pada `js/images.js`. Pastikan aset berasal dari sumber yang mengizinkan penggunaan sesuai kebutuhan portofolio.

## Catatan demo

Ruparona Studio adalah brand dan usaha fiktif untuk contoh portofolio. Sebelum website disesuaikan untuk usaha nyata, ganti seluruh harga, alamat, jam buka, kontak, nomor WhatsApp, foto, video, dan testimoni contoh. Jangan gunakan nomor kontak dummy untuk menghubungi siapa pun.
