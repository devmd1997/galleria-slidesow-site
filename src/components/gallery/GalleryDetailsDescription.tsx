import "@styles/galleryDetails.css";

interface GalleryDetailsDescriptionProps {
  description: string;
  year: number;
  source: string;
}

export default function GalleryDetailsDescription(
  props: GalleryDetailsDescriptionProps
) {
  return (
    <section className="gallery-detail-description-container">
      <div className="gallery-details-date">{props.year}</div>
      <div className="aditional-info-container">
        <p>{props.description}</p>
        <a href={props.source} target="_blank" className="source-button">
          Go to Source
        </a>
      </div>
    </section>
  );
}
