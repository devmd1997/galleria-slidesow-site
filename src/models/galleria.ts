export interface ImageMeta {
    src: string;
    alt: string;
    height: number;
    width: number;
    blurredData?: string;
}

interface ArtistDetails {
    name: string;
    image: ImageMeta;
}

interface HeroImages {
    small: ImageMeta;
    large: ImageMeta;
}

interface PhotoDetails {
    thumbnail: ImageMeta;
    hero: HeroImages;
    gallery: ImageMeta;
}

export interface Gallery {
    name: string;
    year: number;
    description: string;
    source: string;
    artist: ArtistDetails;
    images: PhotoDetails;
}

export type Galleria = Array<Gallery>;