import { useLang } from "@/lib/language";

type GalleryItem = {
  image: string;
  caption: string;
};

const note = {
  id: "Tampilan screenshot aplikasi dari project yang dikembangkan.",
  en: "Application screenshots from the developed project.",
} as const;

export function ProjectGallery({
  items,
}: {
  items: readonly GalleryItem[];
}) {
  const { lang } = useLang();

  return (
    <div>
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
        {items.map((item, index) => (
          <figure
            key={`${item.caption}-${index}`}
            className="card-surface min-w-[16rem] shrink-0 snap-center overflow-hidden md:min-w-0"
          >
            <div className="aspect-[16/10] overflow-hidden bg-surface">
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <figcaption className="border-t border-border px-4 py-2.5 text-xs font-medium text-muted-foreground">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        {note[lang]}
      </p>
    </div>
  );
}