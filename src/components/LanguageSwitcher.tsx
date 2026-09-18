import { useLang, type Lang } from "@/lib/language";
import { cn } from "@/lib/utils";

const options: { value: Lang; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const label = lang === "id" ? "Ganti bahasa" : "Switch language";

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-md border border-border bg-card p-0.5"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={cn(
            "rounded px-2 py-1 text-xs font-semibold tracking-wide transition-colors",
            lang === o.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
