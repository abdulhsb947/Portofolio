# Penyederhanaan Struktur Portfolio

## Tujuan
- Mempertahankan tampilan website yang sudah ada.
- Memindahkan konten bilingual setiap halaman ke file halamannya sendiri.
- Menjaga data project bersama agar daftar dan detail project tetap konsisten.
- Menggunakan foto profil yang sama dengan project Data Insight Hub.

## Perubahan
1. Hubungkan seluruh halaman ke pengatur bahasa sederhana.
2. Letakkan isi Beranda, Tentang, Keahlian, Pendidikan, Kontak, dan label halaman project di file masing-masing.
3. Pindahkan data kontak ke satu file profil yang mudah diedit.
4. Hapus file terjemahan lama setelah tidak dipakai.
5. Tambahkan panduan edit manual dan uji bahasa, tema, navigasi, filter, serta tampilan desktop/mobile.

## Catatan Teknis
- Tetap memakai struktur route TanStack yang setara konsepnya dengan folder halaman pada Next.js.
- Tidak menambah backend atau mengubah desain visual.
- Data detail project tetap di satu file karena dipakai oleh kartu dan halaman detail.
