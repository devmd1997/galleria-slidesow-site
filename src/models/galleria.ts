export interface ImageMeta {
    src: string;
    alt: string;
    height: number;
    width: number;
    blurredData?: string;
}

export interface ArtistDetails {
    name: string;
    image: ImageMeta;
}

export interface HeroImages {
    small: ImageMeta;
    large: ImageMeta;
}

export interface PhotoDetails {
    thumbnail: ImageMeta;
    hero: HeroImages;
    gallery: ImageMeta;
}

export interface Gallery {
    id: number;
    name: string;
    year: number;
    description: string;
    source: string;
    artist: ArtistDetails;
    images: PhotoDetails;
}

export type Galleria = Array<Gallery>;