import { ImageMeta } from "@/models/galleria";
import { getImageProps } from "next/image";

interface VariableSizedImageProps {
  desktopImage: ImageMeta;
  tabletImage: ImageMeta;
  mobileImage: ImageMeta;
  className?: string;
}

export function VariableSizedImage(props: VariableSizedImageProps) {
  const { desktopImage, tabletImage, mobileImage } = props;
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    src: desktopImage.src,
    alt: desktopImage.alt,
    width: desktopImage.width,
    height: desktopImage.height,
    quality: 80,
  });

  const {
    props: { srcSet: tablet },
  } = tabletImage
    ? getImageProps({
        src: tabletImage.src,
        alt: tabletImage.alt,
        width: tabletImage.width,
        height: tabletImage.height,
        quality: 70,
      })
    : { props: { srcSet: undefined } };

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    src: mobileImage.src,
    alt: mobileImage.alt,
    width: mobileImage.width,
    height: mobileImage.height,
    quality: 60,
  });

  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(min-width: 375px)" srcSet={mobile} />
      <img
        {...rest}
        style={{ height: "100%" }}
        className={props.className || "w-full md:w-[57%]"}
      />
    </picture>
  );
}
