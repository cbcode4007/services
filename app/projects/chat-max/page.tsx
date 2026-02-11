import { Metadata } from "next";
import ProjectCarousel from "@/components/project-carousel";

export const metadata: Metadata = {
  title: "Chat Max",
};

export default function ChatMax() {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center px-6">
      <main className="flex w-full max-w-6xl flex-col gap-8 pt-32">

        {/* Title + Description */}
        <section className="max-w-7xl flex flex-col gap-4 px-16 h-38">
          <h1 className="text-3xl text-zinc-50 tracking-tight">
            Chat Max
          </h1>          

          <p className="text-md leading-8 text-zinc-400 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent md:scroll-smooth">
            Created as a first foray into prompt engineering, Chat Max offers a basic Python Tkinter desktop interface through which users can assign and customize various personality traits of their conversation partner at any time. Each minute option is capable of changing the prompt such that it acts entirely differently, but the synthesis of different options is left up to the AI model.
          </p>

          {/* <hr className="border-gray-700 w-full"/> */}
        </section>

        {/* Media Carousel */}
        <ProjectCarousel
          media={[
            {
              type: "image",
              src: "/projects/airport-app/screen-1.png",
              alt: "Flight overview screen",
            },
            {
              type: "image",
              src: "/projects/airport-app/screen-2.png",
              alt: "Gate navigation view",
            },
            {
              type: "video",
              src: "/projects/airport-app/demo.mp4",
            },
          ]}
        />

      </main>
    </div>
  );
}
