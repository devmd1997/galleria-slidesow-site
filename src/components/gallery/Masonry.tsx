"use client";
import { Galleria } from "@/models/galleria";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import { use } from "react";

interface MasonryGridProps {
  galleria: Promise<Galleria>;
}

export default function MasonryGrid(props: MasonryGridProps) {
  const galleria = use(props.galleria);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 768: 2, 1440: 3 }}>
      <Masonry gutter="40px" itemTag="section">
        {galleria.map((gallery, index) => (
          <GalleryCard
            key={`${gallery.images.gallery.alt}-${index}`}
            thmbnailImage={gallery.images.thumbnail}
            artist={gallery.artist.name}
            title={gallery.name}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
