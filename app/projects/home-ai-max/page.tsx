import { Metadata } from "next";
import ProjectCarousel from "@/components/project-carousel";

export const metadata: Metadata = {
  title: "Home AI Max",
};

export default function HomeAIMax() {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center px-6">
      <main className="flex w-full max-w-6xl flex-col gap-8 pt-32">

        {/* Title + Description */}
        <section className="max-w-7xl flex flex-col gap-4 px-16 h-38">
          <h1 className="text-3xl text-zinc-50 tracking-tight">
            Home AI Max
          </h1>          

          <p className="text-md leading-8 text-zinc-400 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent md:scroll-smooth">
            Home AI Max is a Flutter Dart app that sends text queries to a configured webhook and reads server replies out loud. It also accepts incoming POST notifications from a local server and can request/receive TTS audio from a companion Flask service. The central orb visually animates while the app is speaking. It was made before Alexa Plus to essentially allow home users to interact with their smart assistant as an AI model, but is still being updated and used alongside Plus to cover certain things the service does not do as well.
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
