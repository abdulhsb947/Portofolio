export function SkillCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="card-surface card-hover p-6">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
