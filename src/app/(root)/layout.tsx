import type { Metadata } from "next";
import "@styles/globals.css";
import Header from "../../components/navigation/Header";
import SlideshowProvider from "@/context/SlideshowContext";

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
      <body>
        <SlideshowProvider>
          <Header />
          {children}
        </SlideshowProvider>
      </body>
    </html>
  );
}
