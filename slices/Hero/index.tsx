import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 md:py-32"
    >
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left column: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {slice.primary.title && (
              <div className="prose prose-zinc dark:prose-invert max-w-none 
                [&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:tracking-tight [&>h1]:text-zinc-900 dark:[&>h1]:text-white sm:[&>h1]:text-6xl [&>h1]:leading-tight
                [&>h1>strong]:bg-gradient-to-r [&>h1>strong]:from-blue-600 [&>h1>strong]:to-indigo-600 dark:[&>h1>strong]:from-blue-400 dark:[&>h1>strong]:to-indigo-400 [&>h1>strong]:bg-clip-text [&>h1>strong]:text-transparent"
              >
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            
            {slice.primary.description && (
              <div className="mt-6 prose prose-zinc dark:prose-invert max-w-xl
                [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-zinc-600 dark:[&>p]:text-zinc-400"
              >
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}

            {slice.primary.button_text && (
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <div className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 dark:bg-blue-500 dark:hover:bg-blue-400 cursor-pointer">
                  <PrismicRichText field={slice.primary.button_text} />
                </div>
              </div>
            )}
          </div>

          {/* Right column: Image */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
            {slice.primary.image?.url ? (
              <PrismicNextImage
                field={slice.primary.image}
                fallbackAlt=""
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-zinc-800 dark:to-zinc-700">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium text-sm">No image provided</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

