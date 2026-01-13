"use client";
import { useSlideshow } from "@/context/SlideshowContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { isSlideshowActive, toggleSlideshow } = useSlideshow();
  const router = useRouter();
  const pathname = usePathname();

  const handleSlideshowToggle = () => {
    if (!isSlideshowActive && pathname === "/") {
      router.push("/1");
    }
    toggleSlideshow();
  };
  return (
    <nav>
      <div className="header-layout">
        <div className="header-content">
          <Link className="cursor-pointer" href="/" prefetch>
            <Image
              src="/shared/logo.svg"
              alt="Galleria logo"
              width={113}
              height={32}
            />
          </Link>
          <button
            className="text-grey-400 hover:text-black cursor-pointer uppercase text-preset-5 md:text-preset-6"
            onClick={handleSlideshowToggle}
          >
            {isSlideshowActive ? "Stop Slideshow" : "Start Slideshow"}
          </button>
        </div>
        <div className="header-baseline" />
      </div>
    </nav>
  );
}
