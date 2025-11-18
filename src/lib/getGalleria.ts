import path from "path";
import {promises as fs} from 'fs';
import { GallerySchemaArray } from "@/models/gallerySchema";
import { mapResultsToGalleria } from "./fetchImageData";

export async function fetchGalleria() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'data.json');
        const raw = await fs.readFile(filePath, 'utf-8');
        const parsed = GallerySchemaArray.parse(JSON.parse(raw));

        const results = await mapResultsToGalleria(parsed);
        return results;
    } catch (e) {
        console.error("❌ [fetchGalleria] Failed to read or parse data.json:", e);
        return [];
    }
}

export async function getGalleria() {
    const results = await fetchGalleria();
    return results;
}

export async function getGalleryById(id: number) {
    const results = await getGalleria();
    const gallery = results.find(g => g.id === id);
    if (!gallery) return null;
    return gallery;
}
