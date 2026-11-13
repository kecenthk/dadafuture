import Link from "next/link";

const SITE = "https://www.dadafuture.com";

/** 内页统一 Hero（浅底青字）+ 面包屑 */
export default function PageHero({
  title,
  subtitle,
  description,
  image,
  parent,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  parent?: { href: string; label: string };
}) {
  const crumbs = [
    { name: "首页", url: `${SITE}/` },
    ...(parent ? [{ name: parent.label, url: `${SITE}${parent.href}` }] : []),
    { name: title, url: "" },
  ];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: c.url } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F3FAFB] via-[#F3FAFB] to-[#E6F3F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3FAFB] via-[#F3FAFB]/85 to-[#E6F3F5]/70" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-10 pb-12 sm:px-8 lg:px-10 lg:pt-14 lg:pb-16">
        <nav aria-label="面包屑" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-sub">
          <Link href="/" className="transition hover:text-brand-700">
            首页
          </Link>
          {parent && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={parent.href} className="transition hover:text-brand-700">
                {parent.label}
              </Link>
            </>
          )}
          <span aria-hidden="true">/</span>
          <span className="text-brand-800">{title}</span>
        </nav>
        <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg font-medium text-brand-700 md:text-xl">{subtitle}</p>
        )}
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sub md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
