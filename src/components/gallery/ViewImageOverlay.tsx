"use client";

import { HeroImages } from "@/models/galleria";
import { useEffect } from "react";
import "@styles/galleryDetails.css";
import { VariableSizedImage } from "../utils/VariableSizedImage";

interface ViewImageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  heroImages: HeroImages;
}

export default function ViewImageOverlay(props: ViewImageOverlayProps) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return (
    <>
      <div className="overlay-backdrop" onClick={props.onClose}>
        <div className="expanded-image-container">
          <button className="close-expanded-button" onClick={props.onClose}>
            Close
          </button>
          <div className="expanded-image-wrapper">
            <VariableSizedImage
              desktopImage={props.heroImages.large}
              tabletImage={props.heroImages.large}
              mobileImage={props.heroImages.small}
              className="w-full justify-self-end"
            />
          </div>
        </div>
      </div>
    </>
  );
}
