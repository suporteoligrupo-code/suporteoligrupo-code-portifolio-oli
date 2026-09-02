import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyContent from "../../../components/case-study-content";
import { getCase, getNextCase, publicCases } from "../../data/cases";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export function generateStaticParams() {
  return publicCases.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) return {};

  if (!item.visible) return {};

  const title = `${item.client} — Trabalho de Lucas de Oliveira Andrade`;
  const url = `${siteUrl}/cases/${item.slug}/`;
  const image = new URL(item.cover.src, siteUrl).toString();

  return {
    title,
    description: `${item.personalRole} ${item.built}`,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: `${item.personalRole} ${item.built}`,
      images: [{ url: image, alt: item.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `${item.personalRole} ${item.built}`,
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
  if (!item?.visible) notFound();

  const next = getNextCase(item.slug);
  return <CaseStudyContent item={item} next={next} />;
}
