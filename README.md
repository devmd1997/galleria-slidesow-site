# Galleria Slideshow Site

This project is an interactive art gallery application built with Next.js. It features a masonry grid layout for browsing art pieces and a fully functional slideshow mode with automated navigation, looping, and pause/resume capabilities.

## 🚀 Features

- **Masonry Gallery Grid**: A responsive grid layout that optimally arranges vertical and horizontal images using a custom masonry algorithm.
- **Slideshow Mode**:
  - **Auto-Play**: Automatically advances to the next image every 5 seconds.
  - **Looping**: Cycles back to the first image after reaching the end.
  - **Global Controls**: Start/Stop toggle accessible from the header.
  - **Smart Pausing**: The slideshow automatically pauses when the user opens the "View Image" overlay and resumes when closed.
  - **Progress Bar**: Visual indicator in the footer showing the current position in the gallery.
- **Image Details**: Dedicated pages for each art piece featuring artist details, descriptions, and source links.
- **Lightbox Overlay**: Full-screen modal to view high-resolution images with a black backdrop.
- **Smooth Transitions**: Fade-in animations when navigating between gallery items.

## 🛠️ Tech Stack & Tools

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - **CSS Modules**: For layout and component-specific styles.
  - **Styled Components**: For dynamic styling of icons and transition wrappers.
- **State Management**: **React Context API** (`SlideshowContext`) to manage global slideshow state (active, paused, stopped).
- **Data Fetching**: React Server Components (RSC) for efficient server-side data retrieval.

## 🧩 Algorithms & Implementation Details

### 1. Slideshow Logic & State Management
The slideshow functionality is decoupled from individual components using the **Context API**.
- **`SlideshowContext`**: Holds the state for `isSlideshowActive` and `isPaused`.
- **Timer Logic**: The `GalleryFooter` component consumes this context. It uses a `useEffect` hook with `setTimeout` to trigger navigation.
  - If `isSlideshowActive` is true and `isPaused` is false, the timer starts.
  - Navigation logic handles the incrementing of IDs and loops back to `1` when the end is reached.

### 2. Custom Masonry Layout
Instead of using a heavy external library, the grid uses a custom hook `useMasonry`. This likely calculates the height of columns dynamically or uses CSS Grid row-spanning techniques to ensure images fit neatly without vertical gaps, regardless of their aspect ratio.

### 3. Soft Navigation & Suspense
To provide a native-app-like feel:
- **`GalleryTransition`**: Wraps page content in a client component that triggers a CSS keyframe fade-in animation on mount.
- **Suspense Strategy**: The detail page uses a `Suspense` boundary with a `null` fallback. This leverages Next.js "soft navigation," allowing the browser to fetch the next route's data in the background while keeping the current view visible, preventing jarring loading spinners during slide transitions.

### 4. Responsive Images
A `VariableSizedImage` component is used to serve different image sources based on the device viewport (Mobile, Tablet, Desktop), optimizing performance and visual fidelity.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── gallery/         # Gallery-specific components (Grid, Detail, Footer, Overlay)
│   ├── icons/           # SVG Icons (some wrapped in styled-components)
│   ├── navigation/      # Header and navigation components
│   └── utils/           # Utility components (VariableSizedImage)
├── context/             # React Context providers (SlideshowContext)
├── lib/                 # Data fetching logic
├── models/              # TypeScript interfaces
└── styles/              # CSS files
```

## 🏃‍♂️ Running the Project

Run `npm run dev` to start the development server.