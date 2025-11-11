import { imageSizeFromFile } from "image-size/fromFile";
import path from "path";
import { altFromPath, normalizeSrcPath } from "./utlis";

const PUBLIC_DIR = path.join(process.cwd(), "public");

export async function buildImageMeta(rawSrc: string, opts?: {blur?: (srcFsPath: string) => Promise<string | undefined>}) {
    const src = normalizeSrcPath(rawSrc);
    const alt = altFromPath(src);
      // Skip non-local images (http/https). You can add a remote handler if needed.
    if (/^https?:\/\//i.test(src)) {
        return { src, alt, width: 0, height: 0 };
    }

    const fsPath = path.join(PUBLIC_DIR, src);
    try {
    const {width, height} = await imageSizeFromFile(fsPath);
    const blurredData = opts?.blur ? await opts.blur(fsPath) : undefined;

    return {src, alt, width, height, blurredData};
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
        return {src, alt, width: 0, height: 0}
    }
}