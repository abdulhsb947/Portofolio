import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/language";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — System Analysis, Web, Database & Data Mining" },
      {
        name: "description",
        content:
          "Technical skills across system analysis, web development, database design, data mining, machine learning, and development tools.",
      },
      {
        property: "og:title",
        content: "Skills — System Analysis, Web, Database & Data Mining",
      },
      {
        property: "og:description",
        content:
          "Technical skills across system analysis, web development, databases, and data mining.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="container-page py-14 lg:py-20">
      <SectionHeader title={t.skills.heading} subtitle={t.skills.sub} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((g) => (
          <SkillCard key={g.title} title={g.title} items={g.items} />
        ))}
      </div>

      <section className="mt-16">
        <SectionHeader title={t.approach.heading} subtitle={t.approach.sub} />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.approach.steps.map((s) => (
            <li key={s.n} className="card-surface p-6">
              <span className="text-xs font-bold tracking-widest text-primary">{s.n}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

/* ====== ISI HALAMAN KEAHLIAN (edit di sini) ====== */
const content = {
  id: {
    skills: {
      heading: "Keahlian",
      sub: "Teknologi dan kemampuan teknis yang saya gunakan.",
      groups: [
        {
          title: "System Analysis",
          items: [
            "Requirements Analysis",
            "System Design",
            "UML",
            "Use Case Diagram",
            "Activity Diagram",
            "ERD",
            "Business Process Analysis",
          ],
        },
        {
          title: "Web Development",
          items: ["Laravel", "PHP", "JavaScript", "HTML", "Tailwind CSS", "CRUD", "REST API"],
        },
        { title: "Database", items: ["MySQL", "SQL", "Database Design", "Relational Database"] },
        {
          title: "Data & Machine Learning",
          items: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Data Mining",
            "Data Preprocessing",
            "Classification",
            "Data Analysis",
            "Data Visualization",
            "Machine Learning",
          ],
        },
        {
          title: "Tools",
          items: [
            "Git",
            "GitHub",
            "Visual Studio Code",
            "XAMPP",
            "Google Colab",
            "Jupyter Notebook",
          ],
        },
      ],
    },
    approach: {
      heading: "Cara Saya Mengerjakan Project",
      sub: "Pendekatan terstruktur dari kebutuhan hingga evaluasi.",
      steps: [
        { n: "01", title: "Understand", desc: "Memahami kebutuhan dan permasalahan." },
        { n: "02", title: "Analyze", desc: "Menganalisis kebutuhan sistem, proses bisnis, dan data." },
        { n: "03", title: "Design", desc: "Merancang sistem, database, dan user flow." },
        { n: "04", title: "Develop", desc: "Mengembangkan solusi berbasis web atau data." },
        { n: "05", title: "Test", desc: "Melakukan pengujian dan evaluasi." },
        { n: "06", title: "Improve", desc: "Melakukan perbaikan berdasarkan hasil pengujian." },
      ],
    },
  },
  en: {
    skills: {
      heading: "Skills",
      sub: "Technologies and technical capabilities I work with.",
      groups: [
        {
          title: "System Analysis",
          items: [
            "Requirements Analysis",
            "System Design",
            "UML",
            "Use Case Diagram",
            "Activity Diagram",
            "ERD",
            "Business Process Analysis",
          ],
        },
        {
          title: "Web Development",
          items: ["Laravel", "PHP", "JavaScript", "HTML", "Tailwind CSS", "CRUD", "REST API"],
        },
        { title: "Database", items: ["MySQL", "SQL", "Database Design", "Relational Database"] },
        {
          title: "Data & Machine Learning",
          items: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Data Mining",
            "Data Preprocessing",
            "Classification",
            "Data Analysis",
            "Data Visualization",
            "Machine Learning",
          ],
        },
        {
          title: "Tools",
          items: [
            "Git",
            "GitHub",
            "Visual Studio Code",
            "XAMPP",
            "Google Colab",
            "Jupyter Notebook",
          ],
        },
      ],
    },
    approach: {
      heading: "My Development Approach",
      sub: "A structured path from requirements to evaluation.",
      steps: [
        { n: "01", title: "Understand", desc: "Understanding requirements and problems." },
        { n: "02", title: "Analyze", desc: "Analyzing system requirements, business processes, and data." },
        { n: "03", title: "Design", desc: "Designing systems, databases, and user flows." },
        { n: "04", title: "Develop", desc: "Developing web or data-based solutions." },
        { n: "05", title: "Test", desc: "Testing and evaluating the solution." },
        { n: "06", title: "Improve", desc: "Improving the solution based on evaluation results." },
      ],
    },
  },
} as const;
