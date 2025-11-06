import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Galleria Slideshow",
  description:
    "This art gallery slideshow project will be a great test for your layout and JS skills. With the masonry layout, slideshow logic, and lightbox view there's a lot to build!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
