type Props = {
  eyebrow: string;
  index?: string;
  title: string;
  lede?: string;
  image?: string;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, lede, image, align = "left" }: Props) {
  // Strip any leading serial indicator like "A/01 — " or "P — "
  const cleanEyebrow = eyebrow.replace(/^[A-Z0-9.\/]+\s*—\s*/i, "");

  return (
    <section className="relative bg-bg pt-[72px]">
      {image && (
        <div className="relative h-[58vh] w-full overflow-hidden md:h-[68vh]">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-bg" />
        </div>
      )}
      <div className="container-editorial relative grid grid-cols-12 gap-8 py-16 md:py-24">
        <div className="col-span-12 flex items-baseline justify-between border-t border-rule pt-6">
          <span className="eyebrow">{cleanEyebrow}</span>
        </div>
        <div
          className={`col-span-12 ${align === "center" ? "md:col-span-10 md:col-start-2 text-center" : "md:col-span-10"}`}
        >
          <h1 className="reveal-mask display-clamp font-light text-ink">
            <span>{title}</span>
          </h1>
          {lede && (
            <p
              className={`mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl ${align === "center" ? "mx-auto" : ""}`}
            >
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
