import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/language";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Information Systems Graduate Portfolio" },
      {
        name: "description",
        content:
          "Background, professional summary, skills overview, and career direction of an Information Systems graduate.",
      },
      { property: "og:title", content: "About — Information Systems Graduate Portfolio" },
      {
        property: "og:description",
        content:
          "Background, professional summary, skills overview, and career direction.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="container-page py-14 lg:py-20">
      <SectionHeader title={t.about.heading} subtitle={t.about.sub} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="card-surface h-fit p-6">
          <h2 className="text-base font-semibold text-foreground">
            {t.about.summaryHeading}
          </h2>
          <ul className="mt-4 space-y-2">
            {t.about.summaryItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-16">
        <SectionHeader title={t.skills.heading} subtitle={t.skills.sub} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((g) => (
            <SkillCard key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          title={t.education.interestsHeading}
          subtitle={t.education.interestsDesc}
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {t.education.interests.map((i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {i}
            </span>
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t.featured.viewAll}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}

/* ====== ISI HALAMAN TENTANG (edit di sini) ====== */
const content = {
  id: {
    about: {
      heading: "Tentang Saya",
      sub: "Latar belakang, fokus, dan pengalaman project saya.",
      paragraphs: [
        "Saya merupakan lulusan Sistem Informasi yang memiliki ketertarikan pada pengembangan sistem informasi, analisis data, data mining, dan aplikasi berbasis web. Selama masa studi, saya mengerjakan beberapa project yang menggabungkan analisis kebutuhan, perancangan database, pengolahan data, hingga pengembangan aplikasi.",
        "Salah satu project utama yang saya kerjakan adalah sistem pemesanan dan pengelolaan layanan scaffolding yang dirancang untuk membantu proses pengelolaan produk, pelanggan, pemesanan, transaksi, pembayaran, stok, dan operasional secara lebih terstruktur.",
        "Saya juga memiliki pengalaman mengerjakan project klasifikasi menggunakan teknik data mining, mulai dari persiapan data, preprocessing, analisis, pemodelan, hingga evaluasi hasil.",
      ],
      summaryHeading: "Ringkasan Profesional",
      summaryItems: [
        "Information Systems",
        "Software Engineering",
        "System Analysis",
        "Web Development",
        "Database",
        "Data Mining",
      ],
    },
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
        {
          title: "Database",
          items: ["MySQL", "SQL", "Database Design", "Relational Database"],
        },
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
    education: {
      interestsHeading: "Bidang yang Saya Minati",
      interestsDesc:
        "Terbuka terhadap kesempatan untuk berkembang dan berkontribusi di bidang teknologi informasi, khususnya pengembangan sistem, analisis data, dan solusi digital.",
      interests: [
        "System Analyst",
        "Software Engineering",
        "Business Analyst",
        "Web Developer",
        "Full-Stack Developer",
        "Data Analyst",
        "Data Mining / Machine Learning",
        "IT Specialist",
        "Database Management",
      ],
    },
    featured: { viewAll: "Lihat Semua Project" },
  },
  en: {
    about: {
      heading: "About Me",
      sub: "My background, focus, and project experience.",
      paragraphs: [
        "I am an Information Systems graduate with an interest in information systems development, system analysis, data analysis, data mining, and web application development. During my studies, I worked on projects involving requirements analysis, database design, data processing, and application development.",
        "One of my main projects is a scaffolding ordering and service management system designed to support product, customer, order, transaction, payment, inventory, and operational management in a more structured way.",
        "I also have experience working on a classification project using data mining techniques, covering data preparation, preprocessing, analysis, modeling, and result evaluation.",
      ],
      summaryHeading: "Professional Summary",
      summaryItems: [
        "Information Systems",
        "System Analysis",
        "Web Development",
        "Database",
        "Data Mining",
      ],
    },
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
        {
          title: "Database",
          items: ["MySQL", "SQL", "Database Design", "Relational Database"],
        },
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
    education: {
      interestsHeading: "Career Interests",
      interestsDesc:
        "Open to opportunities to grow and contribute in information technology, particularly in system development, data analysis, and digital solutions.",
      interests: [
        "System Analyst",
        "Software Engineering",
        "Business Analyst",
        "Web Developer",
        "Full-Stack Developer",
        "Data Analyst",
        "Data Mining / Machine Learning",
        "IT Specialist",
        "Database Management",
      ],
    },
    featured: { viewAll: "View All Projects" },
  },
} as const;
