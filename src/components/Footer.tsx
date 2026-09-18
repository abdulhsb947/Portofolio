import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/language";
import { profile, socialLinks } from "@/data/profile";

/* ===== KONTEN FOOTER (edit di sini) ===== */
const content = {
  id: {
    role: "Lulusan Sistem Informasi | Data & Website Aplikasi ",
    navHeading: "Navigasi",
    socialHeading: "Sosial",
    rights: "Seluruh hak cipta dilindungi.",
    links: [
      { to: "/", label: "Beranda" },
      { to: "/about", label: "Tentang Saya" },
      { to: "/skills", label: "Keahlian" },
      { to: "/projects", label: "Proyek" },
      { to: "/education", label: "Pendidikan" },
      { to: "/contact", label: "Kontak" },
    ],
  },
  en: {
    role: "Information Systems Graduate | Data & Web Application Enthusiast",
    navHeading: "Navigation",
    socialHeading: "Social",
    rights: "All rights reserved.",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/skills", label: "Skills" },
      { to: "/projects", label: "Projects" },
      { to: "/education", label: "Education" },
      { to: "/contact", label: "Contact" },
    ],
  },
} as const;

export function Footer() {
  const { lang } = useLang();
  const c = content[lang];
  const year = new Date().getFullYear();
  const socials = Object.values(socialLinks).filter((s) => s.url !== null);

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-base font-bold text-foreground">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.role}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            {c.navHeading}
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-1.5">
            {c.links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            {c.socialHeading}
          </p>
          {socials.length > 0 ? (
            <ul className="mt-3 space-y-1.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url ?? undefined}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-3 space-y-1.5">
              {Object.values(socialLinks).map((s) => (
                <li key={s.label} className="text-sm text-muted-foreground">
                  {s.label}: <span className="text-muted-foreground/70">{s.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {year} {profile.name}. {c.rights}
        </div>
      </div>
    </footer>
  );
}
