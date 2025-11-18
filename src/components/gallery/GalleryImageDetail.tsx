import "@styles/galleryDetails.css";
import { GalleryImageDetailProps } from "@/app/(root)/[detail_id]/page";
import { getGalleryById } from "@/lib/getGalleria";
import { GalleryDetailsHero } from "./GalleryDetailsHero";
import GalleryDetailsDescription from "./GalleryDetailsDescription";
import BackButtonIcon from "../../../public/shared/icon-back-button.svg";
import {
  StyledBackButtonIcon,
  StyledForwardButtonIcon,
} from "../icons/slideshow-buttons";

export async function GalleryImageDetail({ params }: GalleryImageDetailProps) {
  const { detail_id } = await params;
  console.log("Finding detail_id", detail_id);
  const galleryDetails = await getGalleryById(Number(detail_id));

  if (!galleryDetails) return <h1>No Details Found</h1>;

  return (
    <>
      <div className="gallery-details-content-layout">
        <GalleryDetailsHero
          heroImages={galleryDetails.images.hero}
          title={galleryDetails.name}
          artistDetails={galleryDetails.artist}
        />
        <GalleryDetailsDescription
          description={galleryDetails.description}
          year={galleryDetails.year}
        />
      </div>
      <GalleryFooter
        title={galleryDetails.name}
        artist={galleryDetails.artist.name}
      />
    </>
  );
}

interface GalleryFooterProps {
  title: string;
  artist: string;
}
function GalleryFooter(props: GalleryFooterProps) {
  return (
    <footer className="gallery-footer">
      <div className="gallery-footer-info-container">
        <h3>{props.title}</h3>
        <h4>{props.artist}</h4>
      </div>
      <div className="gallery-footer-slideshow-buttons">
        <button className="slideshow-button">
          <StyledBackButtonIcon />
        </button>
        <button className="slideshow-button">
          <StyledForwardButtonIcon />
        </button>
      </div>
    </footer>
  );
}
