import { Metadata } from "next";
import ProjectCarousel from "@/components/project-carousel";

export const metadata: Metadata = {
  title: "Airport Travel App",
};

export default function AirportTravelApp() {
  return (
    <div className="flex md:h-[calc(100vh-56px)] h-auto flex-col items-center px-6">
      <main className="flex w-full max-w-6xl flex-col gap-4 md:pt-32 pt-20">

        {/* Title + Description */}
        <section className="max-w-7xl flex flex-col gap-4 md:px-16 px-0 md:h-38 h-auto">
          <h1 className="md:text-3xl text-xl text-zinc-50 tracking-tight">
            Airport Travel App
          </h1>          

          <p className="md:text-md text-sm leading-6 md:leading-8 text-zinc-400 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent md:scroll-smooth">
            Developed for IxIxI Creator Lab, this mobile application was designed with Flutter Dart to streamline airport travel by
            centralizing flight details, navigation, and real-time updates
            in a single, intuitive interface.
            Additionally features potential integration with airports to
            file passengers of certain flights by priority 
            using simple colour-coded backgrounds.
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
