/** 内页统一 Hero（浅底青字） */
export default function PageHero({
  title,
  subtitle,
  description,
  image,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F3FAFB] via-[#F3FAFB] to-[#E6F3F5]">
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
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-14 pb-12 sm:px-8 lg:px-10 lg:pt-20 lg:pb-16">
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
