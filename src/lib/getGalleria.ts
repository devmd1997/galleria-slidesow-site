import path from "path";
import {promises as fs} from 'fs';
import { GallerySchemaArray } from "@/models/gallerySchema";
import { mapResultsToGalleria } from "./fetchImageData";

export async function getGalleria() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'data.json');
        const raw = await fs.readFile(filePath, 'utf-8');
        const parsed = GallerySchemaArray.parse(JSON.parse(raw));

        const results = await mapResultsToGalleria(parsed);
        return results;
    } catch (e) {
        console.error("❌ [getGalleria] Failed to read or parse data.json:", e);
        return [];
    }
}