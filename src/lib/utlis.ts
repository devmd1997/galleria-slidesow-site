import path from "path";

export function normalizeSrcPath(src: string) {
    if (!src) return src;
    // remove leading "./" if present
  let clean = src.replace(/^\.\//, '');

    // Remove "assets/" prefix if present
  clean = clean.replace(/^assets\//, '');

  // ensure it starts with a single leading slash
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  
  return clean;
}

export function altFromPath(src: string): string {
    if(!src) return '';
    const filename = path.basename(src);
    const base = filename.replace(/\.[^/.]+$/, ''); // remove extension
    return base;
}