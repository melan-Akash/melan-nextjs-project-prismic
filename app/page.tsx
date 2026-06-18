import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  try {
    const page = await client.getSingle("homepage");
    return {
      title: page.data.meta_title || "Melan Care",
      description: page.data.meta_description || "Compassionate Care, Advanced Medicine",
      openGraph: {
        images: page.data.meta_image?.url ? [{ url: page.data.meta_image.url }] : [],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Melan Care",
      description: "Compassionate Care, Advanced Medicine",
    };
  }
}

export default async function Home() {
  const client = createClient();
  let page;
  try {
    page = await client.getSingle("homepage");
  } catch (error) {
    console.error("Failed to fetch Prismic homepage document:", error);
  }

  if (!page) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 text-center font-sans dark:bg-black">
        <div className="max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Welcome to Melan Care
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Please publish your Homepage in your Prismic repository to get started.
          </p>
          <a
            href="https://melan-nextjs-project.prismic.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-6 font-medium text-white transition-all hover:bg-zinc-850 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-100 shadow-md hover:shadow-lg"
          >
            Go to Prismic
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

