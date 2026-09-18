import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/language";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectCard } from "@/components/ProjectCard";


export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const project = getProjectBySlug(loaderData.slug)!;
    const c = project.content.en;
    return {
      meta: [
        { title: `${c.title} — Project Case Study` },
        { name: "description", content: c.shortDescription },
        { property: "og:title", content: `${c.title} — Project Case Study` },
        { property: "og:description", content: c.shortDescription },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-foreground sm:text-xl">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function ProjectDetailPage() {
  const { slug } = Route.useLoaderData();
  const { lang } = useLang();
  const t = content[lang];
  const project = getProjectBySlug(slug)!;
  const c = project.content[lang];
  const related = projects.filter((p) => p.id !== project.id);
  const realLinks = project.links.filter((l) => l.url);

  return (
    <div className="container-page py-14 lg:py-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        {t.projects.back}
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {project.number} · {c.categoryLabel}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {c.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.summary}</p>
      </header>

      <img
        src={project.thumbnail}
        alt={project.thumbnailAlt[lang]}
        className="mt-8 aspect-[16/7] w-full rounded-lg border border-border object-cover"
      />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Block title={t.detail.overview}>
            <p>{c.overview}</p>
          </Block>
          <Block title={t.detail.background}>
            <p>{c.background}</p>
          </Block>
          <Block title={t.detail.problem}>
            <p>{c.problem}</p>
          </Block>
          <Block title={t.detail.objective}>
            <p>{c.objective}</p>
          </Block>
          <Block title={t.detail.role}>
            <p>{c.role}</p>
          </Block>

          <Block title={t.detail.process}>
            <ol className="space-y-2">
              {c.process.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block title={t.detail.features}>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {c.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          {c.extra?.map((section) => (
            <Block key={section.heading} title={section.heading}>
              <p>{section.body}</p>
              {section.items ? (
                <ul className="mt-2 space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Block>
          ))}

          <Block title={c.galleryHeading || t.detail.screenshots}>
            <ProjectGallery items={c.gallery} />
          </Block>

          <Block title={t.detail.testing}>
            <p>{c.testing}</p>
          </Block>
          <Block title={t.detail.result}>
            <p>{c.result}</p>
          </Block>

          <Block title={t.detail.challenges}>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.challenges.map((ch, i) => (
                <div key={i} className="card-surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {t.detail.challenge}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground">{ch.challenge}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                    {t.detail.solution}
                  </p>
                  <p className="mt-1.5 text-sm">{ch.solution}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>

        <aside className="mt-10 space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <div className="card-surface p-6">
            <h2 className="text-base font-semibold text-foreground">{t.detail.tech}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="text-base font-semibold text-foreground">{t.detail.links}</h2>
            {realLinks.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {realLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.url ?? undefined}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-primary hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">{t.detail.linksEmpty}</p>
            )}
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-lg font-bold text-foreground sm:text-xl">
            {t.projects.related}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

/* ====== LABEL HALAMAN DETAIL PROJECT (edit di sini) ====== */
const content = {
  id: {
    projects: { back: "Kembali ke Project", related: "Project Terkait" },
    detail: {
      overview: "Project Overview",
      background: "Background",
      problem: "Problem",
      objective: "Objective",
      role: "My Role",
      process: "Development Process",
      features: "System Features",
      tech: "Technology Stack",
      screenshots: "Screenshots",
      testing: "Testing & Evaluation",
      result: "Results",
      challenges: "Challenges & Solutions",
      links: "Project Links",
      linksEmpty: "Link project belum tersedia.",
      challenge: "Tantangan",
      solution: "Solusi",
    },
  },
  en: {
    projects: { back: "Back to Projects", related: "Related Projects" },
    detail: {
      overview: "Project Overview",
      background: "Background",
      problem: "Problem",
      objective: "Objective",
      role: "My Role",
      process: "Development Process",
      features: "System Features",
      tech: "Technology Stack",
      screenshots: "Screenshots",
      testing: "Testing & Evaluation",
      result: "Results",
      challenges: "Challenges & Solutions",
      links: "Project Links",
      linksEmpty: "No project links available yet. Add real links once provided.",
      challenge: "Challenge",
      solution: "Solution",
    },
  },
} as const;
