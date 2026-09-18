import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/language";
import { projects } from "@/data/projects";
import { profile, socialLinks } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "My Portfolio" },
    { name: "description", content: "Portfolio of an Information Systems graduate working across system analysis, web development, database design, and data mining." },
    { property: "og:title", content: "Information Systems Graduate | System Analysis & Data Portfolio" },
    { property: "og:description", content: "Projects in information systems, web development, database design, data mining, and machine learning." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

/* ===== KONTEN BERANDA (edit tulisan halaman Beranda di sini) ===== */
const content = {
  id: {
    title: "Information Systems Graduate", specialization: "System Analysis • Web Development • Data Mining",
    headline: "Lulusan Sistem Informasi yang Membangun Solusi Digital Berbasis Data dan Teknologi",
    support: "Berfokus pada System Analysis, Web Development, Database, Data Mining, dan pengembangan Sistem Informasi.",
    viewProjects: "Lihat Project", contact: "Hubungi Saya", downloadCV: "Download CV",
    tagline: "Membangun Solusi Digital melalui Data dan Teknologi",
    capabilities: { heading: "Apa yang Saya Kerjakan", sub: "Kemampuan utama yang saya terapkan dalam setiap project.", items: [
      { n: "01", title: "System Analysis", desc: "Menganalisis kebutuhan pengguna dan proses bisnis untuk merancang solusi sistem yang sesuai." },
      { n: "02", title: "Web Development", desc: "Mengembangkan aplikasi web yang responsif dan terstruktur sesuai kebutuhan sistem." },
      { n: "03", title: "Database Design", desc: "Merancang database, ERD, relasi tabel, dan struktur data untuk mendukung sistem." },
      { n: "04", title: "Data Mining", desc: "Mengolah data dan menerapkan teknik data mining untuk menemukan pola serta menghasilkan klasifikasi atau prediksi." },
      { n: "05", title: "Problem Solving", desc: "Menggabungkan analisis bisnis dan teknologi untuk menghasilkan solusi yang efektif dan terstruktur." },
    ]},
    featured: { heading: "Project Pilihan", sub: "Dua project utama yang menunjukkan pengalaman teknis saya.", viewAll: "Lihat Semua Project" },
    approach: { heading: "Cara Saya Mengerjakan Project", sub: "Pendekatan terstruktur dari kebutuhan hingga evaluasi.", steps: [
      { n: "01", title: "Understand", desc: "Memahami kebutuhan dan permasalahan." }, { n: "02", title: "Analyze", desc: "Menganalisis kebutuhan sistem, proses bisnis, dan data." },
      { n: "03", title: "Design", desc: "Merancang sistem, database, dan user flow." }, { n: "04", title: "Develop", desc: "Mengembangkan solusi berbasis web atau data." },
      { n: "05", title: "Test", desc: "Melakukan pengujian dan evaluasi." }, { n: "06", title: "Improve", desc: "Melakukan perbaikan berdasarkan hasil pengujian." },
    ]},
    value: { heading: "Why Work With Me?", sub: "Nilai profesional yang saya bawa dalam setiap pekerjaan.", items: [
      { title: "Analytical", desc: "Mampu memahami kebutuhan dan menganalisis permasalahan secara terstruktur." },
      { title: "Technical", desc: "Memiliki dasar pengembangan web, database, data mining, dan sistem informasi." },
      { title: "Problem Solver", desc: "Mampu mengubah permasalahan menjadi solusi berbasis teknologi." },
      { title: "Continuous Learner", desc: "Memiliki kemauan untuk terus mempelajari teknologi dan pendekatan baru." },
    ]},
    connect: { heading: "Mari Terhubung", sub: "Saya terbuka untuk peluang kerja, kolaborasi, dan project di bidang teknologi informasi.", cta: "Hubungi Saya" },
  },
  en: {
    title: "Information Systems Graduate", specialization: "System Analysis • Web Development • Data Mining",
    headline: "Information Systems Graduate Building Data-Driven Digital Solutions",
    support: "Focused on System Analysis, Web Development, Database Management, Data Mining, and Information Systems Development.",
    viewProjects: "View Projects", contact: "Contact Me", downloadCV: "Download CV",
    tagline: "Building Digital Solutions Through Data & Technology",
    capabilities: { heading: "What I Can Do", sub: "Core capabilities I apply to every project.", items: [
      { n: "01", title: "System Analysis", desc: "Analyze user requirements and business processes to design suitable information system solutions." },
      { n: "02", title: "Web Development", desc: "Develop structured and responsive web applications based on system requirements." },
      { n: "03", title: "Database Design", desc: "Design databases, ERDs, table relationships, and data structures to support applications." },
      { n: "04", title: "Data Mining", desc: "Process data and apply data mining techniques to identify patterns and generate classification or prediction results." },
      { n: "05", title: "Problem Solving", desc: "Combine business analysis and technology to develop effective and structured solutions." },
    ]},
    featured: { heading: "Featured Projects", sub: "Two main projects that demonstrate my technical experience.", viewAll: "View All Projects" },
    approach: { heading: "My Development Approach", sub: "A structured path from requirements to evaluation.", steps: [
      { n: "01", title: "Understand", desc: "Understanding requirements and problems." }, { n: "02", title: "Analyze", desc: "Analyzing system requirements, business processes, and data." },
      { n: "03", title: "Design", desc: "Designing systems, databases, and user flows." }, { n: "04", title: "Develop", desc: "Developing web or data-based solutions." },
      { n: "05", title: "Test", desc: "Testing and evaluating the solution." }, { n: "06", title: "Improve", desc: "Improving the solution based on evaluation results." },
    ]},
    value: { heading: "Why Work With Me?", sub: "The professional value I bring to every engagement.", items: [
      { title: "Analytical", desc: "Able to understand requirements and analyze problems systematically." },
      { title: "Technical", desc: "Experienced with web development, databases, data mining, and information systems fundamentals." },
      { title: "Problem Solver", desc: "Able to transform problems into technology-based solutions." },
      { title: "Continuous Learner", desc: "Continuously willing to learn new technologies and approaches." },
    ]},
    connect: { heading: "Let's Connect", sub: "I am open to job opportunities, collaborations, and projects in information technology.", cta: "Contact Me" },
  },
} as const;

function Index() {
  const { lang } = useLang(); const c = content[lang];
  const featured = projects.filter((project) => project.featured);
  return <div>
    <section className="border-b border-border bg-surface"><div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.35fr_1fr] lg:py-24">
      <div className="animate-rise"><p className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{c.title}</p>
        <h1 className="mt-5 text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">{c.headline}</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{c.support}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">{c.viewProjects}<ArrowRight className="h-4 w-4" /></Link><Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent">{c.contact}</Link>{socialLinks.cv.url ? <a href={socialLinks.cv.url} className="inline-flex items-center rounded-md border border-input bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent">{c.downloadCV}</a> : null}</div>
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{c.specialization}</p>
      </div>
      <div className="relative mx-auto w-full max-w-sm pb-5 pl-3 pr-3 pt-3"><div className="absolute left-0 top-0 h-[calc(100%-1.25rem)] w-[calc(100%-0.75rem)] rounded-lg border-2 border-primary/25" /><div className="absolute bottom-2 right-0 h-[calc(100%-1.25rem)] w-[calc(100%-0.75rem)] rounded-lg bg-accent" /><div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg"><img src={profile.photo} alt={profile.photoAlt[lang]} className="h-full w-full object-cover object-top" /></div><div className="absolute bottom-0 left-0 rounded-md bg-card px-5 py-3 shadow-lg"><p className="text-sm font-bold text-foreground">{profile.name}</p><p className="text-xs text-muted-foreground">{profile.title[lang]}</p></div></div>
    </div></section>
    <section className="container-page py-16 lg:py-20"><SectionHeader eyebrow={c.tagline} title={c.capabilities.heading} subtitle={c.capabilities.sub} /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{c.capabilities.items.map((item) => <div key={item.n} className="card-surface card-hover p-6"><span className="text-xs font-bold tracking-widest text-primary">{item.n}</span><h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p></div>)}</div></section>
    <section className="border-y border-border bg-surface py-16 lg:py-20"><div className="container-page"><SectionHeader title={c.featured.heading} subtitle={c.featured.sub} /><div className="mt-10 grid gap-6 lg:grid-cols-2">{featured.map((project) => <ProjectCard key={project.id} project={project} />)}</div><Link to="/projects" className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">{c.featured.viewAll}<ArrowRight className="h-4 w-4" /></Link></div></section>
    <section className="container-page py-16 lg:py-20"><SectionHeader title={c.approach.heading} subtitle={c.approach.sub} /><ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{c.approach.steps.map((step) => <li key={step.n} className="card-surface p-6"><span className="text-xs font-bold tracking-widest text-primary">{step.n}</span><h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p></li>)}</ol></section>
    <section className="border-t border-border bg-surface py-16 lg:py-20"><div className="container-page"><SectionHeader title={c.value.heading} subtitle={c.value.sub} /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{c.value.items.map((item) => <div key={item.title} className="card-surface card-hover p-6"><h3 className="text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p></div>)}</div></div></section>
    <section className="container-page py-16 lg:py-20"><div className="card-surface flex flex-col items-start gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-xl"><h2 className="text-2xl font-bold text-foreground">{c.connect.heading}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.connect.sub}</p></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">{c.connect.cta}<ArrowRight className="h-4 w-4" /></Link></div></section>
  </div>;
}
