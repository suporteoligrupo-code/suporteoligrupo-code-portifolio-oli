import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerEntryContent from "../../../components/career-entry-content";
import {
  localizeCareerEntry,
  publishedCareerEntries,
} from "../../data/career";
import { reviewCareerEntry } from "../../data/career-editorial";
import { sortCareerEntries } from "../../data/career-order";
import { sanitizeCareerEntry } from "../../data/career-sanitizer";

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

  const safeItem = sanitizeCareerEntry(item);
  const localized = reviewCareerEntry(localizeCareerEntry(safeItem, "pt"), "pt");
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
  const orderedEntries = sortCareerEntries(publishedCareerEntries);
  const currentIndex = orderedEntries.findIndex((entry) => entry.slug === slug);
  const item = orderedEntries[currentIndex];

  if (!item) notFound();

  const nextEntry = orderedEntries.length > 1
    ? orderedEntries[(currentIndex + 1) % orderedEntries.length]
    : undefined;

  return (
    <CareerEntryContent
      item={sanitizeCareerEntry(item)}
      nextEntry={nextEntry ? sanitizeCareerEntry(nextEntry) : undefined}
    />
  );
}
