"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSlideshow } from "@/context/SlideshowContext";
import {
  StyledBackButtonIcon,
  StyledForwardButtonIcon,
} from "../icons/slideshow-buttons";

interface GalleryFooterProps {
  title: string;
  artist: string;
  currentId: number;
  totalCount: number;
}

export default function GalleryFooter(props: GalleryFooterProps) {
  const { isSlideshowActive, isPaused } = useSlideshow();
  const router = useRouter();

  useEffect(() => {
    if (isSlideshowActive && !isPaused) {
      const timer = setTimeout(() => {
        if (props.currentId < props.totalCount) {
          router.push(`/${props.currentId + 1}`);
        } else {
          // Loop back to the start
          router.push("/1");
        }
      }, 5000); // 5 seconds interval

      return () => clearTimeout(timer);
    }
  }, [isSlideshowActive, isPaused, props.currentId, props.totalCount, router]);

  return (
    <footer className="gallery-footer">
      <div className="gallery-progress-bar-container">
        <div
          className="gallery-progress-bar"
          style={{
            width: `${(props.currentId / props.totalCount) * 100}%`,
          }}
        />
      </div>
      <div className="gallery-footer-info-container">
        <h3>{props.title}</h3>
        <h4>{props.artist}</h4>
      </div>
      <div className="gallery-footer-slideshow-buttons">
        {props.currentId > 1 ? (
          <Link
            href={`/${props.currentId - 1}`}
            className="slideshow-button"
            prefetch={false}
          >
            <StyledBackButtonIcon />
          </Link>
        ) : (
          <button className="slideshow-button" disabled>
            <StyledBackButtonIcon />
          </button>
        )}
        {props.currentId < props.totalCount ? (
          <Link
            href={`/${props.currentId + 1}`}
            className="slideshow-button"
            prefetch={false}
          >
            <StyledForwardButtonIcon />
          </Link>
        ) : (
          <button className="slideshow-button" disabled>
            <StyledForwardButtonIcon />
          </button>
        )}
      </div>
    </footer>
  );
}
