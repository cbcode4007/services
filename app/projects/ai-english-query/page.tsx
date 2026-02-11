import { Metadata } from "next";
import ProjectCarousel from "@/components/project-carousel";

export const metadata: Metadata = {
  title: "AI English Query",
};

export default function AIEnglishQuery() {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center px-6">
      <main className="flex w-full max-w-6xl flex-col gap-8 pt-32">

        {/* Title + Description */}
        <section className="max-w-7xl flex flex-col gap-4 px-16 h-38">
          <h1 className="text-3xl text-zinc-50 tracking-tight">
            AI English Query
          </h1>          

          <p className="text-md leading-8 text-zinc-400 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent md:scroll-smooth">
            A proof-of-concept desktop application which connects directly to a database so that users can make requests in plain English, typed or spoken, for an AI to translate to SQL and execute automatically, returning the results in-app. This could prove crucial for business workflows, greatly improving efficiency by reducing ad-hoc SQL query generation time, as well as easily and securely operating on databases without the need to copy-paste from the web or an account that has any permissions other than SELECT. In future, the AI itself will also be locally hosted, ensuring no sensitive information leaves the user's network.
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
