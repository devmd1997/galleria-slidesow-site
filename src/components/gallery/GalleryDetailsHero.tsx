"use client";

import "@styles/galleryDetails.css";
import { ArtistDetails, HeroImages } from "@/models/galleria";
import { VariableSizedImage } from "../utils/VariableSizedImage";
import Image from "next/image";
import ViewImageIcon from "../../../public/shared/icon-view-image.svg";
import ViewImageOverlay from "./ViewImageOverlay";
import { useState } from "react";
import { useSlideshow } from "@/context/SlideshowContext";

interface GalleryDetailsHeroProps {
  heroImages: HeroImages;
  title: string;
  artistDetails: ArtistDetails;
}

export function GalleryDetailsHero(props: GalleryDetailsHeroProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { pauseSlideshow, resumeSlideshow } = useSlideshow();
  const titleComponent = (
    <div className="gallery-detail-title-component">
      <h1>{props.title}</h1>
      <h2>{props.artistDetails.name}</h2>
    </div>
  );

  const artistImage = (
    <div className="gallery-detail-artist-image-component">
      <Image
        src={props.artistDetails.image.src}
        alt={props.artistDetails.image.alt}
        width={props.artistDetails.image.width}
        height={props.artistDetails.image.height}
        className="size-8 md:size-16"
      />
    </div>
  );
  return (
    <section className="gallery-details-hero-container">
      <button
        className="view-image-button"
        onClick={() => {
          setIsOverlayOpen(true);
          pauseSlideshow();
        }}
      >
        <ViewImageIcon />
        <p>View Image</p>
      </button>
      <VariableSizedImage
        desktopImage={props.heroImages.large}
        tabletImage={props.heroImages.large}
        mobileImage={props.heroImages.small}
      />
      <div className="gallery-info-container">
        {titleComponent}
        {artistImage}
      </div>
      <ViewImageOverlay
        isOpen={isOverlayOpen}
        onClose={() => {
          setIsOverlayOpen(false);
          resumeSlideshow();
        }}
        heroImages={props.heroImages}
      />
    </section>
  );
}
