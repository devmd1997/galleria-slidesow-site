import { GalleryImageDetail } from "@/components/gallery/GalleryImageDetail";
import Spinner from "@/components/utils/Spinner";
import { Suspense } from "react";

export interface GalleryImageDetailProps {
  params: { detail_id: Promise<string> };
}

export default function GalleryImageDetailsPage(
  props: GalleryImageDetailProps
) {
  return (
    <main className="detail-page-layout">
      <Suspense fallback={<Spinner />}>
        <GalleryImageDetail params={props.params} />
      </Suspense>
    </main>
  );
}
