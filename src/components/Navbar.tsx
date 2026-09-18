import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/language";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

/* ===== KONTEN MENU (edit di sini) ===== */
const content = {
  id: {
    menu: "Buka menu navigasi",
    cta: "Hubungi Saya",
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
    menu: "Open navigation menu",
    cta: "Contact Me",
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

export function Navbar() {
  const { lang } = useLang();
  const c = content[lang];
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-foreground sm:block">
            {profile.name}
          </span>
        </Link>

        <nav aria-label={c.menu} className="hidden items-center gap-1 lg:flex">
          {c.links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex"
          >
            {c.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={c.menu}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label={c.menu} className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {c.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-2 py-2.5 text-sm font-medium transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
