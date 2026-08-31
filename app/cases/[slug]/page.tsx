import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyContent from "../../../components/case-study-content";
import { cases, getCase, getNextCase } from "../../data/cases";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) return {};

  const title = `${item.client} — Projeto de Lucas de Oliveira Andrade`;
  const url = `${siteUrl}/cases/${item.slug}/`;
  const image = new URL(item.cover.src, siteUrl).toString();

  return {
    title,
    description: item.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: item.summary,
      images: [{ url: image, alt: item.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.summary,
      images: [image],
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const next = getNextCase(item.slug);
  return <CaseStudyContent item={item} next={next} />;
}
