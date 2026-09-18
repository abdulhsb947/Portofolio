import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { useLang } from "@/lib/language";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Bachelor of Information Systems" },
      {
        name: "description",
        content:
          "Academic background in Information Systems, relevant coursework, and areas of professional interest.",
      },
      { property: "og:title", content: "Education — Bachelor of Information Systems" },
      {
        property: "og:description",
        content: "Academic background, relevant coursework, and career interests.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="container-page py-14 lg:py-20">
      <SectionHeader title={t.education.heading} subtitle={t.education.sub} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Timeline
          items={[
            {
              period: t.education.years,
              title: t.education.degree,
              meta: t.education.university,
              body: (
                <div className="card-surface p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <GraduationCap aria-hidden="true" className="h-4 w-4" />
                    {t.education.courseworkHeading}
                  </p>
                  <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                    {t.education.coursework.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
          ]}
        />

        <div className="card-surface h-fit p-6">
          <h2 className="text-base font-semibold text-foreground">
            {t.education.interestsHeading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t.education.interestsDesc}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.education.interests.map((i) => (
              <span
                key={i}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====== ISI HALAMAN PENDIDIKAN (edit di sini) ====== */
const content = {
  id: {
    education: {
      heading: "Pendidikan",
      sub: "Latar belakang akademik dan mata kuliah relevan.",
      university: "[NAMA UNIVERSITAS]",
      degree: "Sarjana Sistem Informasi",
      years: "[TAHUN MASUK] — [TAHUN LULUS]",
      courseworkHeading: "Relevant Coursework",
      coursework: [
        "System Analysis & Design",
        "Database Management",
        "Data Mining",
        "Web Programming",
        "Software Engineering",
        "Information Systems",
        "Business Process Management",
      ],
      interestsHeading: "Bidang yang Saya Minati",
      interestsDesc:
        "Terbuka terhadap kesempatan untuk berkembang dan berkontribusi di bidang teknologi informasi, khususnya pengembangan sistem, analisis data, dan solusi digital.",
      interests: [
        "System Analyst",
        "Business Analyst",
        "Web Developer",
        "Full-Stack Developer",
        "Data Analyst",
        "Data Mining / Machine Learning",
        "IT Specialist",
        "Database Management",
      ],
    },
  },
  en: {
    education: {
      heading: "Education",
      sub: "Academic background and relevant coursework.",
      university: "[NAMA UNIVERSITAS]",
      degree: "Bachelor of Information Systems",
      years: "[TAHUN MASUK] — [TAHUN LULUS]",
      courseworkHeading: "Relevant Coursework",
      coursework: [
        "System Analysis & Design",
        "Database Management",
        "Data Mining",
        "Web Programming",
        "Software Engineering",
        "Information Systems",
        "Business Process Management",
      ],
      interestsHeading: "Career Interests",
      interestsDesc:
        "Open to opportunities to grow and contribute in information technology, particularly in system development, data analysis, and digital solutions.",
      interests: [
        "System Analyst",
        "Business Analyst",
        "Web Developer",
        "Full-Stack Developer",
        "Data Analyst",
        "Data Mining / Machine Learning",
        "IT Specialist",
        "Database Management",
      ],
    },
  },
} as const;
