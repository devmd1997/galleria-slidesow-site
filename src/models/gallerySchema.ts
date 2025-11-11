import {z} from 'zod';

const BasicGallerySchema = z.object({
    name: z.string(),
    year: z.number(),
    description: z.string(),
    source: z.url(),
})

const BasicArtistSchema = z.object({
    image: z.string(),
    name: z.string(),
})

const BasicPhotoSchema = z.object({
    thumbnail: z.string(),
    hero: z.object({
        small: z.string(),
        large: z.string(),
    }),
    gallery: z.string(),
})

export const GallerySchemaWithArtistAndPhotos = BasicGallerySchema.extend({
    artist: BasicArtistSchema,
    images: BasicPhotoSchema,
});
export const GallerySchemaArray = z.array(GallerySchemaWithArtistAndPhotos);

export type GallerySchema = z.infer<typeof BasicGallerySchema>;
export type GalleryResult = z.infer<typeof GallerySchemaWithArtistAndPhotos>;
export type GalleryResults = z.infer<typeof GallerySchemaArray>;
export type Artist = z.infer<typeof BasicArtistSchema>;
export type Photo = z.infer<typeof BasicPhotoSchema>;