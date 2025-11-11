"use client";
import { ImageMeta } from "@/models/galleria";
import Image from "next/image";

interface GalleryCardProps {
  thmbnailImage: ImageMeta;
  title: string;
  artist: string;
}

// const GAP_PX = 40; // exact horizontal & vertical gap
// const ROW_UNIT_PX = 2; // fine-grained base row height

// function computeSpanForItem(
//   columnWidth: number,
//   intrinsicW: number,
//   intrinsicH: number
// ) {
//   // predicted rendered height based on aspect ratio and actual column width
//   const desiredHeight = (intrinsicH / intrinsicW) * columnWidth;

//   // Convert desiredHeight into grid spans considering row unit + gap
//   // (gap applies between rows; adding it ensures consistent 40px vertical spacing)
//   const span = Math.ceil((desiredHeight + GAP_PX) / (ROW_UNIT_PX + GAP_PX));
//   return span;
// }

// function useGridSpan(ref: React.RefObject<HTMLDivElement>, item: ImageMeta) {
//   useEffect(() => {
//     if (!ref.current) return;
//     const el = ref.current;

//     const recompute = () => {
//       // Item width equals the current column width in CSS grid
//       const columnWidth = el.getBoundingClientRect().width || 1; // fallback to avoid 0
//       const span = computeSpanForItem(columnWidth, item.width, item.height);
//       el.style.gridRowEnd = `span ${span}`;
//     };

//     // Run now, on resize, and whenever fonts/layout change
//     recompute();
//     const ro = new ResizeObserver(recompute);
//     ro.observe(el);
//     window.addEventListener("resize", recompute, { passive: true });
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("resize", recompute);
//     };
//   }, [ref, item.width, item.height]);
// }

export default function GalleryCard(props: GalleryCardProps) {
  const { thmbnailImage: image } = props;

  const widthHeightRatio = image.height / image.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / (10 + 8)) + 1;
  console.log(image.src, image.height, photoSpans);
  return (
    <div
      className="w-max-[310px] relative overflow-hidden group justify-self-center break-inside-avoid w-full cursor-pointer"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        height={image.height}
        width={310}
        sizes="(min-width: 400px) 310px, calc(72.5vw + 35px)"
        className="justify-self-center group-hover:opacity-50"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 z-front w-full flex flex-col px-4 py-2 gap-1">
        <h1 className="text-preset-2-small text-white">{props.title}</h1>
        <h2 className="text-preset-5 text-white/75">{props.artist}</h2>
      </div>
    </div>
  );
}
