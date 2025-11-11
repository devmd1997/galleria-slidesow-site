"use client";
import { Galleria } from "@/models/galleria";
import "@styles/gallery.css";
import GalleryCard from "./GalleryCard";
import { use } from "react";
import { useMasonry } from "@/lib/useMasonry";

interface GalleryGridProps {
  galleria: Promise<Galleria>;
}

export default function GalleryGrid(props: GalleryGridProps) {
  const galleria = use(props.galleria);
  const masonryContainer = useMasonry();

  if (!galleria)
    return <h2 className="text-preset-1 text-grey-400">No Images Found</h2>;

  return (
    <section ref={masonryContainer} className="gallery-layout">
      {galleria.map((gallery, index) => (
        <GalleryCard
          key={`${gallery.images.gallery.alt}-${index}`}
          thmbnailImage={gallery.images.thumbnail}
          artist={gallery.artist.name}
          title={gallery.name}
        />
      ))}
    </section>
  );
}
