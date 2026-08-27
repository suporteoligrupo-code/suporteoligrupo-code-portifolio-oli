import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyContent from "../../../components/case-study-content";
import { cases, getCase, getNextCase } from "../../data/cases";

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

  return {
    title: `${item.client} — Projeto OLI`,
    description: item.summary,
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
