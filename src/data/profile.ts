import profilePhoto from "@/assets/foto.jpeg";
import cvFile from "@/assets/CV_Web_en.pdf";

/**
 * Data pribadi & kontak.
 * Dipakai bersama oleh navbar, footer, dan halaman kontak.
 */

export const profile = {
  name: "Abdul Mutholib Hsb",
  initials: "AM",

  title: {
    id: "Information Systems Graduate",
    en: "Information Systems Graduate",
  },

  photo: profilePhoto,

  photoAlt: {
    id: "Foto profil profesional Abdul Mutholib",
    en: "Professional profile photo of Abdul Mutholib",
  },
};

/**
 * Social media & kontak
 *
 * Tinggal ganti bagian `url` dengan link Anda.
 * Contoh:
 * github: "https://github.com/username"
 */
export const socialLinks = {
  github: {
    label: "GitHub",
    value: "GitHub",
    url: "https://github.com/abdulhsb947",
  },

  linkedin: {
    label: "LinkedIn",
    value: "LinkedIn",
    url: "https://www.linkedin.com/in/abdul-mutholib-432790295",
  },

  email: {
    label: "Email",
    value: "abdulhsb947@gmail.com",
    url: "mailto:abdulhsb947gmail.com",
  },

  whatsapp: {
    label: "WhatsApp",
    value: "WhatsApp",
    url: "https://wa.me/6285358228495",
  },

  cv: {
    label: "CV",
    value: "Download CV",
    url: cvFile,
  },
};