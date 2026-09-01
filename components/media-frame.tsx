import type { CSSProperties } from "react";
import type {
  CaseImage,
  MediaTreatment,
} from "../app/data/cases";

type MediaContext = "card" | "hero" | "gallery";

type MediaStyle = CSSProperties & {
  "--media-background": string;
  "--media-fit": "cover" | "contain";
  "--media-position": string;
  "--media-scale": string;
  "--media-inset": string;
  "--media-max-width": string;
  "--media-max-height": string;
  "--media-fit-mobile": "cover" | "contain";
  "--media-position-mobile": string;
  "--media-scale-mobile": string;
  "--media-inset-mobile": string;
  "--media-max-width-mobile": string;
  "--media-max-height-mobile": string;
};

type GalleryStyle = CSSProperties & {
  "--gallery-aspect": string;
  "--gallery-aspect-mobile": string;
  "--gallery-span": string;
};

const treatmentDefaults: Record<MediaContext, MediaTreatment> = {
  card: {
    fit: "cover",
    position: "center",
    scale: 1,
    background: "#101210",
    inset: "0px",
    frame: "bleed",
    overlay: "cinematic",
    motion: "subtle",
  },
  hero: {
    fit: "cover",
    position: "center",
    scale: 1,
    background: "#101210",
    inset: "0px",
    frame: "bleed",
    overlay: "cinematic",
    motion: "none",
  },
  gallery: {
    fit: "cover",
    position: "center",
    scale: 1,
    background: "#101210",
    inset: "0px",
    frame: "bleed",
    overlay: "none",
    motion: "subtle",
    layout: "half",
  },
};

function resolveTreatment(image: CaseImage, context: MediaContext) {
  const placement = image.placements?.[context] ?? {};
  const treatment = { ...treatmentDefaults[context], ...placement };
  const mobile = { ...treatment, ...(placement.mobile ?? {}) };

  return { treatment, mobile };
}

function getStyle(image: CaseImage, context: MediaContext): MediaStyle {
  const { treatment, mobile } = resolveTreatment(image, context);

  return {
    "--media-background": treatment.background ?? "#101210",
    "--media-fit": treatment.fit ?? "cover",
    "--media-position": treatment.position ?? "center",
    "--media-scale": String(treatment.scale ?? 1),
    "--media-inset": treatment.inset ?? "0px",
    "--media-max-width": treatment.maxWidth ?? "none",
    "--media-max-height": treatment.maxHeight ?? "none",
    "--media-fit-mobile": mobile.fit ?? treatment.fit ?? "cover",
    "--media-position-mobile": mobile.position ?? treatment.position ?? "center",
    "--media-scale-mobile": String(mobile.scale ?? treatment.scale ?? 1),
    "--media-inset-mobile": mobile.inset ?? treatment.inset ?? "0px",
    "--media-max-width-mobile": mobile.maxWidth ?? treatment.maxWidth ?? "none",
    "--media-max-height-mobile": mobile.maxHeight ?? treatment.maxHeight ?? "none",
  };
}

function BrowserBar() {
  return (
    <span className="editorial-media__browser" aria-hidden="true">
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}

export function getGalleryLayout(image: CaseImage) {
  return image.placements?.gallery?.layout ?? "half";
}

const galleryAspectDefaults: Record<NonNullable<MediaTreatment["layout"]>, string> = {
  feature: "16 / 9",
  wide: "8 / 5",
  half: "4 / 3",
  portrait: "4 / 5",
  square: "1 / 1",
  strip: "12 / 5",
  logo: "16 / 5",
};

const gallerySpanDefaults: Record<NonNullable<MediaTreatment["layout"]>, number> = {
  feature: 12,
  wide: 8,
  half: 6,
  portrait: 4,
  square: 4,
  strip: 12,
  logo: 12,
};

export function getGalleryStyle(image: CaseImage): GalleryStyle {
  const gallery = image.placements?.gallery;
  const layout = gallery?.layout ?? "half";

  return {
    "--gallery-aspect": gallery?.aspectRatio ?? galleryAspectDefaults[layout],
    "--gallery-aspect-mobile": gallery?.mobile?.aspectRatio
      ?? gallery?.aspectRatio
      ?? galleryAspectDefaults[layout],
    "--gallery-span": String(gallery?.span ?? gallerySpanDefaults[layout]),
  };
}

export function getGallerySizes(image: CaseImage) {
  const gallery = image.placements?.gallery;
  const layout = gallery?.layout ?? "half";
  const span = gallery?.span ?? gallerySpanDefaults[layout];
  const desktopWidth = span === 12 ? "100vw" : span === 8 ? "67vw" : span === 6 ? "50vw" : "33vw";

  return `(max-width: 760px) 100vw, ${desktopWidth}`;
}

function getVariantPath(src: string, width: number) {
  const extensionIndex = src.lastIndexOf(".");
  const stem = extensionIndex === -1 ? src : src.slice(0, extensionIndex);
  return `/media-responsive${stem}-${width}.webp`;
}

function getResponsiveSrcSet(src: string, width: number) {
  if (!src.startsWith("/") || src.toLowerCase().endsWith(".svg")) return undefined;

  const generatedWidths = [480, 800, 1200].filter((candidate) => candidate < width);
  const sources = generatedWidths.map((candidate) => `${getVariantPath(src, candidate)} ${candidate}w`);
  sources.push(`${src} ${width}w`);
  return sources.join(", ");
}

export default function MediaFrame({
  image,
  context,
  sizes,
  priority = false,
}: {
  image: CaseImage;
  context: MediaContext;
  sizes: string;
  priority?: boolean;
}) {
  const { treatment } = resolveTreatment(image, context);
  const frame = treatment.frame ?? "bleed";
  const overlay = treatment.overlay ?? "none";
  const mobileSource = treatment.mobile?.src;
  const mobileWidth = treatment.mobile?.width ?? image.width;
  const mobileHeight = treatment.mobile?.height ?? image.height;
  const desktopSrcSet = getResponsiveSrcSet(image.src, image.width);
  const mobileSrcSet = mobileSource
    ? getResponsiveSrcSet(mobileSource, mobileWidth)
    : undefined;

  return (
    <div
      className="editorial-media"
      data-frame={frame}
      data-overlay={overlay}
      data-motion={treatment.motion ?? "none"}
      data-kind={image.kind}
      style={getStyle(image, context)}
    >
      <div className="editorial-media__stage">
        {frame === "browser" ? <BrowserBar /> : null}
        <div className="editorial-media__viewport">
          <picture>
            {mobileSource ? (
              <source
                media="(max-width: 760px)"
                srcSet={mobileSrcSet ?? mobileSource}
                sizes={sizes}
                width={mobileWidth}
                height={mobileHeight}
              />
            ) : null}
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              srcSet={desktopSrcSet}
              sizes={sizes}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
