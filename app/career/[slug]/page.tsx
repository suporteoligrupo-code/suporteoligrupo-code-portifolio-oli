import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerEntryContent from "../../../components/career-entry-content";
import {
  localizeCareerEntry,
  publishedCareerEntries,
} from "../../data/career";
import { reviewCareerEntry } from "../../data/career-editorial";

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

  const localized = reviewCareerEntry(localizeCareerEntry(item, "pt"), "pt");
  const title = `${localized.company} — Trajetória de Lucas de Oliveira Andrade`;
  const url = `${siteUrl}/career/${localized.slug}/`;
  const cover = localized.cover ?? localized.hero ?? localized.media[0];
  const image = cover ? new URL(cover.src, siteUrl).toString() : undefined;

  return {
    title,
    description: localized.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: localized.summary,
      images: image ? [{ url: image, alt: cover?.alt ?? localized.company }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: localized.summary,
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
