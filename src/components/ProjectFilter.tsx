import { useLang } from "@/lib/language";
import { projectCategories, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export type FilterValue = "all" | ProjectCategory;

/* ===== LABEL FILTER (edit di sini) ===== */
const content = {
  id: {
    groupLabel: "Filter kategori project",
    filters: {
      all: "Semua",
      "information-system": "Information System",
      "web-development": "Web Development",
      "data-mining": "Data Mining",
      "machine-learning": "Machine Learning",
      database: "Database",
    },
  },
  en: {
    groupLabel: "Filter projects by category",
    filters: {
      all: "All",
      "information-system": "Information System",
      "web-development": "Web Development",
      "data-mining": "Data Mining",
      "machine-learning": "Machine Learning",
      database: "Database",
    },
  },
} as const;

export function ProjectFilter({
  active,
  onChange,
  counts,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
  counts: Record<string, number>;
}) {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <div role="group" aria-label={c.groupLabel} className="flex flex-wrap gap-2">
      {projectCategories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
            active === cat
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
          )}
        >
          {c.filters[cat]}
          <span className="ml-1.5 text-xs opacity-70">{counts[cat] ?? 0}</span>
        </button>
      ))}
    </div>
  );
}
