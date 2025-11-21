# Portofolio Waqiat Tur Rachmat

Ini adalah proyek portofolio pribadi untuk menampilkan profil, keterampilan, pengalaman, proyek, dan sertifikat. Proyek ini dibangun menggunakan **PHP**, **HTML**, **CSS**, dan **JavaScript**.

## Fitur

- **Profil**: Informasi pribadi dan deskripsi singkat.
- **Keterampilan**: Daftar keterampilan teknis dan soft skills.
- **Proyek**: Portofolio proyek dengan deskripsi dan tautan demo.
- **Pengalaman**: Riwayat pengalaman kerja.
- **Sertifikat**: Galeri sertifikat yang dapat dilihat.
- **Formulir Kontak**: Formulir untuk mengirim pesan langsung melalui email.

## Struktur Proyek

```
.
├── contact.php          # Proses backend untuk formulir kontak
├── index.php            # Halaman utama portofolio
├── assets/
│   ├── css/
│   │   └── styles.css   # Gaya kustom untuk portofolio
│   ├── js/
│   │   └── main.js      # Interaksi dan animasi frontend
│   ├── icons/           # Ikon keterampilan
│   └── images/          # Gambar dan foto profil
```

## Cara Menjalankan

1. Pastikan Anda memiliki server lokal seperti **Laragon**, **XAMPP**, atau **WAMP**.
2. Salin semua file proyek ke direktori root server lokal Anda.
3. Buka browser dan akses `http://localhost/nama-folder-proyek`.

## Konfigurasi

### Email Formulir Kontak
- Buka file [`contact.php`](contact.php).
- Ganti nilai variabel `$to` dengan alamat email Anda:
  ```php
  $to = 'your.email@example.com';
  ```

### Sertifikat
- Tambahkan gambar sertifikat Anda ke folder `assets/images/`.
- Perbarui array `$certificates` di file [`index.php`](index.php) dengan path gambar sertifikat.

### Proyek
- Tambahkan proyek baru dengan memperbarui array `$projects` di file [`index.php`](index.php).

## Teknologi yang Digunakan

- **PHP**: Backend untuk memproses formulir kontak.
- **HTML5**: Struktur halaman.
- **CSS3**: Desain responsif dan animasi.
- **JavaScript**: Interaksi dan efek visual.
- **Tailwind CSS**: Framework CSS untuk desain modern.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Dibuat dengan oleh **Waqiat Tur Rachmat**.
