"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface SlideshowContextType {
  isSlideshowActive: boolean;
  isPaused: boolean;
  toggleSlideshow: () => void;
  stopSlideShow: () => void;
  pauseSlideshow: () => void;
  resumeSlideshow: () => void;
}

const initialSlideshowContext: SlideshowContextType = {
  isSlideshowActive: false,
  isPaused: false,
  toggleSlideshow: () => {},
  stopSlideShow: () => {},
  pauseSlideshow: () => {},
  resumeSlideshow: () => {},
};

const SlideshowContext = createContext<SlideshowContextType>(
  initialSlideshowContext
);

export default function SlideshowProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const toggleSlideshow = () => {
    setIsSlideshowActive(!isSlideshowActive);
    setIsPaused(false);
  };

  const stopSlideShow = () => {
    setIsSlideshowActive(false);
    setIsPaused(false);
  };

  const pauseSlideshow = () => setIsPaused(true);
  const resumeSlideshow = () => setIsPaused(false);

  return (
    <SlideshowContext.Provider
      value={{
        isSlideshowActive,
        isPaused,
        toggleSlideshow,
        stopSlideShow,
        pauseSlideshow,
        resumeSlideshow,
      }}
    >
      {children}
    </SlideshowContext.Provider>
  );
}

export function useSlideshow() {
  const context = useContext(SlideshowContext);
  if (!context) {
    throw new Error("useSlideshow must be used within a SlideshowProvider");
  }
  return context;
}
