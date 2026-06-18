import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `OurServices`.
 */
export type OurServicesProps = SliceComponentProps<any>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices: FC<OurServicesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/40 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {slice.primary.section_title && (
          <div className="text-center max-w-3xl mx-auto mb-16
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-zinc-900 dark:[&>h2]:text-white sm:[&>h2]:text-4xl"
          >
            <PrismicRichText field={slice.primary.section_title} />
            <div className="mt-4 h-1.5 w-16 bg-blue-600 dark:bg-blue-550 mx-auto rounded-full" />
          </div>
        )}

        {/* Service Card */}
        <div className="max-w-xl mx-auto">
          <div className="group relative rounded-3xl border border-zinc-150 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Icon */}
            {slice.primary.service_icon?.url && (
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/50 p-4 shadow-sm border border-blue-100/30 dark:border-blue-900/20">
                <PrismicNextImage
                  field={slice.primary.service_icon}
                  fallbackAlt=""
                  className="h-full w-full object-contain"
                />
              </div>
            )}

            {/* Service Title */}
            {slice.primary.service_name && (
              <div className="mb-4 prose prose-zinc dark:prose-invert
                [&>h4]:text-2xl [&>h4]:font-semibold [&>h4]:text-zinc-900 dark:[&>h4]:text-white"
              >
                <PrismicRichText field={slice.primary.service_name} />
              </div>
            )}

            {/* Service Description */}
            {slice.primary.service_description && (
              <div className="prose prose-zinc dark:prose-invert
                [&>p]:text-zinc-600 dark:[&>p]:text-zinc-400 [&>p]:leading-relaxed"
              >
                <PrismicRichText field={slice.primary.service_description} />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;

