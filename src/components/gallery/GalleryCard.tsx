"use client";
import { ImageMeta } from "@/models/galleria";
import Image from "next/image";
import Link from "next/link";

interface GalleryCardProps {
  id: number;
  thmbnailImage: ImageMeta;
  title: string;
  artist: string;
}

export default function GalleryCard(props: GalleryCardProps) {
  const { thmbnailImage: image } = props;

  const widthHeightRatio = image.height / image.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / (10 + 8)) + 1;
  console.log(image.src, image.height, photoSpans);
  return (
    <Link
      href={`/${props.id}`}
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
    </Link>
  );
}
