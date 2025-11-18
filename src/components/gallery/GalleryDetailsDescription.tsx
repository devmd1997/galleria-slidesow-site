import "@styles/galleryDetails.css";

interface GalleryDetailsDescriptionProps {
  description: string;
  year: number;
}

export default function GalleryDetailsDescription(
  props: GalleryDetailsDescriptionProps
) {
  return (
    <section className="gallery-detail-description-container">
      <div className="gallery-details-date">{props.year}</div>
      <div className="aditional-info-container">
        <p>{props.description}</p>
        <button className="source-button">Go to Source</button>
      </div>
    </section>
  );
}
