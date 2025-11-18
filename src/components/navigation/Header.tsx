import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
          <span className="text-grey-400 hover:text-black cursor-pointer uppercase text-preset-5 md:text-preset-6">
            Start Slideshow
          </span>
        </div>
        <div className="header-baseline" />
      </div>
    </nav>
  );
}
