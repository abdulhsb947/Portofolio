# Panduan Edit Manual

Website ini **frontend-only** (tanpa backend). Semua teks ada di dalam file halamannya masing-masing, jadi edit cukup dilakukan di satu file per halaman.

## Cara ganti bahasa aktif
- Pengatur bahasa ada di `src/lib/language.tsx`.
- File ini **tidak berisi teks** — hanya mengatur apakah tampilan memakai Indonesia (`id`) atau Inggris (`en`).
- Pengunjung mengganti bahasa lewat tombol di navbar; pilihan tersimpan di browser (localStorage key `portfolio-lang`).

## Struktur file halaman (kerangka mirip Next.js)
Setiap halaman = satu file route. Teks dua bahasa diletakkan di bagian bawah file yang sama, di dalam `const content = { id: {...}, en: {...} }`.

| Halaman        | File route                    | Letak teks        |
|----------------|-------------------------------|-------------------|
| Beranda        | `src/routes/index.tsx`        | `const content`   |
| Tentang Saya   | `src/routes/about.tsx`        | `const content`   |
| Keahlian       | `src/routes/skills.tsx`       | `const content`   |
| Pendidikan     | `src/routes/education.tsx`    | `const content`   |
| Kontak         | `src/routes/contact.tsx`      | `const content`   |
| Daftar Project | `src/routes/projects.index.tsx` | `const content`|
| Detail Project | `src/routes/projects.$slug.tsx` | dari `src/data/projects.ts` |

## Cara edit teks sebuah halaman
1. Buka file route halaman tersebut (lihat tabel di atas).
2. Cari komentar `/* ====== ISI HALAMAN ... (edit di sini) ====== */`.
3. Ubah teks di bagian `id:` (Indonesia) dan `en:` (Inggris).
4. Simpan. Tampilan langsung berubah — tidak perlu ubah file lain.

Contoh — mengubah judul halaman About:
```tsx
// src/routes/about.tsx
const content = {
  id: {
    about: {
      heading: "Tentang Saya",   // <- ubah di sini
      ...
    },
  },
  en: {
    about: {
      heading: "About Me",        // <- dan di sini
      ...
    },
  },
}
```

## Data yang dipakai bersama (bukan per halaman)
Beberapa data dipakai di banyak halaman sekaligus, jadi disimpan terpisah:

- **Data pribadi & kontak** → `src/data/profile.ts`
  - `profile.name` — nama Anda
  - `profile.initials` — inisial (untuk avatar)
  - `profile.title` — jabatan dua bahasa
  - `socialLinks` — GitHub, LinkedIn, Email, WhatsApp, CV
    - `url: null` berarti link belum diisi → tidak ditampilkan sebagai tautan.
    - Untuk menampilkan, isi `value` (teks) dan `url` (tautan).

- **Data project** → `src/data/projects.ts`
  - Dipakai bersama oleh kartu project (halaman daftar) dan halaman detail.
  - Tiap project punya `content: { id, en }` berisi judul, deskripsi, fitur, proses, tantangan/solusi, dll.
  - Link project (GitHub/demo/Colab/dokumentasi) ada di `links`, muncul hanya jika diisi.

## Komponen yang dipakai ulang
- `src/components/Navbar.tsx` — menu & label nav (bilingual di file ini)
- `src/components/Footer.tsx` — teks footer (bilingual di file ini)
- `src/components/ContactForm.tsx` — label & pesan form
- `src/components/ProjectCard.tsx`, `ProjectFilter.tsx`, `ProjectGallery.tsx` — label project
- `src/components/LanguageSwitcher.tsx`, `ThemeToggle.tsx` — tombol
- `src/components/SectionHeader.tsx`, `SkillCard.tsx`, `Timeline.tsx` — pola tampilan

## Mengganti foto profil
Foto profil dipakai dari `src/assets/profile-photo.jpg.asset.json` (sama dengan project Data Insight Hub).
Untuk mengganti foto: timpa file gambar di `src/assets/` dengan foto Anda sendiri, lalu sesuaikan `alt` di `src/data/profile.ts` (`profile.photoAlt`).

## Tema (gelap/terang) & warna
- Warna diatur lewat token di `src/styles.css` (jangan hardcode warna di komponen).
- Tombol tema ada di navbar; pilihan tersimpan di browser (localStorage key `portfolio-theme`).

## Sebelum publish — cek ini
1. Ganti semua placeholder `[...]` di `src/data/profile.ts` dan `src/data/projects.ts`.
2. Isi `socialLinks` yang ingin ditampilkan (isi `url`-nya).
3. Jika ada link project nyata (GitHub/demo/Colab), isi di `links` pada `src/data/projects.ts`.
4. Ganti foto profil bila perlu.
5. Coba ganti bahasa & tema, lalu lihat di tampilan desktop dan mobile.
