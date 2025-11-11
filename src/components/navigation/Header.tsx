import Image from "next/image";

export default function Header() {
  return (
    <nav>
      <div className="header-layout">
        <div className="header-content">
          <Image
            src="/shared/logo.svg"
            alt="Galleria logo"
            width={113}
            height={32}
          />
          <span className="text-grey-400 uppercase text-preset-5 md:text-preset-6">
            Start Slideshow
          </span>
        </div>
        <div className="header-baseline" />
      </div>
    </nav>
  );
}
