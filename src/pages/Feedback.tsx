"use client";

import img1 from "@/assets/Sneha.png";
import InfiniteGallery from "../components/3d-gallery-photography";


export default function Feedback() {
const sampleImages = [
		{ src: img1, alt: "Image 1" },
		{ src: img1, alt: "Image 1" },
    { src: img1, alt: "Image 1" },
    { src: img1, alt: "Image 1" },
    { src: img1, alt: "Image 1" },
    { src: img1, alt: "Image 1" },
    { src: img1, alt: "Image 1" },
    { src: img1, alt: "Image 1" },
	];

  return (
    <main className="min-h-screen h-full w-full">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none fixed flex items-start justify-center pt-20 text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">FeedBack</span>
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>
		</main>
	);
}