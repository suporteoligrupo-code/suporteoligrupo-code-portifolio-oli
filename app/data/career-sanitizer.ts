import type { CareerEntry, CareerLanguage } from "./career";
import { getCareerEditorial } from "./career-editorial";

type CareerTranslation = CareerEntry["translations"]["en"];
type SecondaryLanguage = Exclude<CareerLanguage, "pt">;

function sanitizeTranslation(
  item: CareerEntry,
  language: SecondaryLanguage,
  translation: CareerTranslation,
): CareerTranslation {
  const editorial = getCareerEditorial(item.slug, language);

  if (!editorial) return translation;

  return {
    ...translation,
    summary: editorial.summary ?? translation.summary,
    directActions: editorial.directActions ?? translation.directActions,
    initiatives: editorial.initiatives ?? translation.initiatives,
    highlights: editorial.highlights ?? translation.highlights,
  };
}

export function sanitizeCareerEntry(item: CareerEntry): CareerEntry {
  const editorial = getCareerEditorial(item.slug, "pt");

  return {
    ...item,
    summary: editorial?.summary ?? item.summary,
    directActions: editorial?.directActions ?? item.directActions,
    initiatives: editorial?.initiatives ?? item.initiatives,
    highlights: editorial?.highlights ?? item.highlights,
    translations: {
      en: sanitizeTranslation(item, "en", item.translations.en),
      ru: sanitizeTranslation(item, "ru", item.translations.ru),
    },
  };
}

export function sanitizeCareerEntries(entries: readonly CareerEntry[]) {
  return entries.map(sanitizeCareerEntry);
}
