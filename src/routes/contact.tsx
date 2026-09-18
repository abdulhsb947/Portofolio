import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/language";
import { socialLinks } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Information Systems Graduate Portfolio" },
      {
        name: "description",
        content:
          "Get in touch about job opportunities, collaborations, and information technology projects.",
      },
      { property: "og:title", content: "Contact — Information Systems Graduate Portfolio" },
      {
        property: "og:description",
        content: "Get in touch about opportunities, collaborations, and IT projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="container-page py-14 lg:py-20">
      <SectionHeader title={t.contact.heading} subtitle={t.contact.sub} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <div className="card-surface h-fit p-6">
          <h2 className="text-base font-semibold text-foreground">
            {t.contact.infoHeading}
          </h2>
          <ul className="mt-4 space-y-3">
            {Object.values(socialLinks).map((s) => (
              <li key={s.label} className="text-sm">
                <span className="font-medium text-foreground">{s.label}</span>
                <br />
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary transition-colors hover:underline"
                  >
                    {s.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{s.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ====== ISI HALAMAN KONTAK (edit di sini) ====== */
const content = {
  id: {
    contact: {
      heading: "Mari Terhubung",
      sub: "Saya terbuka untuk peluang kerja, kolaborasi, dan project di bidang teknologi informasi.",
      infoHeading: "Informasi Kontak",
    },
  },
  en: {
    contact: {
      heading: "Let's Connect",
      sub: "I am open to job opportunities, collaborations, and projects in information technology.",
      infoHeading: "Contact Information",
    },
  },
} as const;
