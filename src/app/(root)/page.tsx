import GalleryGrid from "@/components/gallery/GalleryGrid";
import Spinner from "@/components/utils/Spinner";
import { getGalleria } from "@/lib/getGalleria";
import { Suspense } from "react";

export default function Home() {
  const galleria = getGalleria();
  return (
    <main className="home-layout">
      <Suspense fallback={<Spinner />}>
        <GalleryGrid galleria={galleria} />
      </Suspense>
    </main>
  );
}
