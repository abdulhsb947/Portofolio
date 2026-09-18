import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLang } from "@/lib/language";

/* ===== LABEL KARTU PROJECT (edit di sini) ===== */
const content = {
  id: { keyFeatures: "Fitur Utama", viewProject: "Lihat Project" },
  en: { keyFeatures: "Key Features", viewProject: "View Project" },
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const label = content[lang];
  const c = project.content[lang];

  return (
    <article className="card-surface card-hover group flex flex-col overflow-hidden">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={project.thumbnail}
          alt={project.thumbnailAlt[lang]}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-widest text-primary">
            {project.number}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {c.categoryLabel}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="transition-colors hover:text-primary"
          >
            {c.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {c.shortDescription}
        </p>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            {label.keyFeatures}
          </p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            {c.features.slice(0, 6).map((f) => (
              <li key={f} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <span aria-hidden="true" className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-2">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {label.viewProject}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
