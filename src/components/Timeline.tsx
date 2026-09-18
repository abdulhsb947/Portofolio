import type { ReactNode } from "react";

export type TimelineItem = {
  title: string;
  meta?: string;
  period?: string;
  body?: ReactNode;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
          />
          {item.period ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {item.period}
            </p>
          ) : null}
          <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
          {item.meta ? (
            <p className="text-sm text-muted-foreground">{item.meta}</p>
          ) : null}
          {item.body ? <div className="mt-3">{item.body}</div> : null}
        </li>
      ))}
    </ol>
  );
}
