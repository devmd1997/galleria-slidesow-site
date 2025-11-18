import { GalleryResult, GalleryResults } from "@/models/gallerySchema";
import { buildImageMeta } from "./getImageMeta";
import { Gallery, ImageMeta } from "@/models/galleria";

type BlurFn = (fsPath: string) => Promise<string | undefined>;

async function safeBuildImage(src: string, opts?: {blur?: (srcFsPath: string) => Promise<string | undefined>}): Promise<ImageMeta> {
    try {
        return await buildImageMeta(src, opts);
    } catch (e) {
        console.error(`⚠️ [safeBuildImage] Failed to process ${src}`, e);
        return { src, alt: "unavailable", width: 0, height: 0 };
    }
}

async function buildSet(photo: GalleryResult['images'], blur?: BlurFn) {
    try {
    const [thumbnail, small, large, gallery] = await Promise.all([
        safeBuildImage(photo.thumbnail, blur ? {blur} : undefined),
        safeBuildImage(photo.hero.small, blur ? {blur} : undefined),
        safeBuildImage(photo.hero.large, blur ? {blur} : undefined),
        safeBuildImage(photo.gallery, blur ? {blur} : undefined),
    ])


    return {
        thumbnail,
        hero: {
            small,
            large,
        },
        gallery,
    }
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
        // fallback to empty images if something critical fails
        const fallback: ImageMeta = { src: "", alt: "missing", width: 0, height: 0 };
        return { thumbnail: fallback, hero: { small: fallback, large: fallback }, gallery: fallback };
    }
}

export async function mapResultToGallery(item: GalleryResult, id: number): Promise<Gallery> {
    try {
        const [artistImage, photoDetails] = await Promise.all([
            safeBuildImage(item.artist.image),
            buildSet(item.images)
        ])

        return {
            id,
            name: item.name,
            year: item.year,
            description: item.description,
            source: item.source,
            artist: {
                name: item.artist.name,
                image: artistImage,
            },
            images: photoDetails
        }
    } catch (e) {
        console.error(`❌ [mapResultToGallery] Failed for ${item.name}:`, e);
        throw e;
    }
}

export async function mapResultsToGalleria(results: GalleryResults) {
    try {
    return await Promise.all(results.map((res, index) => mapResultToGallery(res, index + 1)));
  } catch (err) {
    console.error("❌ [mapResultsToGalleria] Failed to map all galleries:", err);
    return [];
  }
}