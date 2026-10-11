// Scene and gallery images live in src/assets/images so Vite fingerprints them:
// a changed file gets a new URL, which lets them be cached forever.
const urls = import.meta.glob<string>("../assets/images/**/*.{webp,svg,png,jpg,jpeg,gif}", {
  eager: true,
  query: "?url",
  import: "default",
});

/** Resolve a path relative to src/assets/images (e.g. "wardrobe/coat_blue.webp") to its built URL. */
export const img = (path: string): string => {
  const url = urls[`../assets/images/${path}`];
  if (!url && import.meta.env.DEV) console.warn(`Missing image: src/assets/images/${path}`);
  return url ?? "";
};

/** Warm the browser cache for images a visitor is likely to need next. */
export const preloadImages = (paths: string[]) => {
  const load = () =>
    paths.forEach((path) => {
      const image = new Image();
      image.decoding = "async";
      image.src = img(path);
    });
  if ("requestIdleCallback" in window) window.requestIdleCallback(load);
  else setTimeout(load, 1500);
};
