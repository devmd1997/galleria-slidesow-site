import "@styles/galleryDetails.css";
import { GalleryImageDetailProps } from "@/app/(root)/[detail_id]/page";
import { getGalleria, getGalleryById } from "@/lib/getGalleria";
import { GalleryDetailsHero } from "./GalleryDetailsHero";
import GalleryDetailsDescription from "./GalleryDetailsDescription";
import GalleryTransition from "./GalleryTransition";
import GalleryFooter from "./GalleryFooter";

export async function GalleryImageDetail({ params }: GalleryImageDetailProps) {
  const { detail_id } = await params;
  const currentId = Number(detail_id);
  const galleryDetails = await getGalleryById(currentId);
  const galleries = await getGalleria();

  if (!galleryDetails) return <h1>No Details Found</h1>;

  return (
    <GalleryTransition>
      <div className="gallery-details-content-layout">
        <GalleryDetailsHero
          heroImages={galleryDetails.images.hero}
          title={galleryDetails.name}
          artistDetails={galleryDetails.artist}
        />
        <GalleryDetailsDescription
          description={galleryDetails.description}
          year={galleryDetails.year}
          source={galleryDetails.source}
        />
      </div>
      <GalleryFooter
        title={galleryDetails.name}
        artist={galleryDetails.artist.name}
        currentId={currentId}
        totalCount={galleries.length}
      />
    </GalleryTransition>
  );
}
