import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerEntryContent from "../../../components/career-entry-content";
import { publishedCareerEntries } from "../../data/career";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export function generateStaticParams() {
  return publishedCareerEntries.map((entry) => ({ slug: entry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = publishedCareerEntries.find((entry) => entry.slug === slug);

  if (!item) return {};

  const title = `${item.company} — Trajetória de Lucas de Oliveira Andrade`;
  const url = `${siteUrl}/career/${item.slug}/`;
  const cover = item.cover ?? item.hero ?? item.media[0];
  const image = cover ? new URL(cover.src, siteUrl).toString() : undefined;

  return {
    title,
    description: item.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: item.summary,
      images: image ? [{ url: image, alt: cover?.alt ?? item.company }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: item.summary,
      images: image ? [image] : undefined,
    },
  };
}

export default async function CareerEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = publishedCareerEntries.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return <CareerEntryContent item={item} />;
}
