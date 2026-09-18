import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/language";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter, type FilterValue } from "@/components/ProjectFilter";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Information Systems Graduate Portfolio" },
      {
        name: "description",
        content:
          "Selected projects in information systems, web development, database design, data mining, and machine learning.",
      },
      { property: "og:title", content: "Projects — Information Systems Graduate Portfolio" },
      {
        property: "og:description",
        content:
          "Selected projects in information systems, web development, database design, and data mining.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { lang } = useLang();
  const t = content[lang];
  const [active, setActive] = useState<FilterValue>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const cat of projectCategories) {
      map[cat] =
        cat === "all"
          ? projects.length
          : projects.filter((p) => p.categories.includes(cat)).length;
    }
    return map;
  }, []);

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <div className="container-page py-14 lg:py-20">
      <SectionHeader title={t.projects.heading} subtitle={t.projects.sub} />

      <div className="mt-8">
        <ProjectFilter active={active} onChange={setActive} counts={counts} />
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <p className="card-surface mt-10 p-8 text-center text-sm text-muted-foreground">
          {t.projects.empty}
        </p>
      )}
    </div>
  );
}

/* ====== ISI HALAMAN DAFTAR PROJECT (edit di sini) ====== */
const content = {
  id: {
    projects: {
      heading: "Project yang Telah Saya Kerjakan",
      sub: "Kumpulan project yang menunjukkan pengalaman saya dalam pengembangan sistem informasi, web development, database, data mining, dan machine learning.",
      empty: "Belum ada project pada kategori ini.",
    },
  },
  en: {
    projects: {
      heading: "Projects I've Worked On",
      sub: "A collection of projects showcasing my experience in information systems, web development, databases, data mining, and machine learning.",
      empty: "No projects in this category yet.",
    },
  },
} as const;
