import ProjectCarousel from "@/components/project-carousel";

interface ProjectTemplateProps {
  title: string;
  description: string;
  media: Array<{
    type: "image" | "video";
    src: string;
    alt?: string;
  }>;
  tech?: string[];
}

export default function ProjectTemplate({
  title,
  description,
  media,
  tech = [],
}: ProjectTemplateProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Fixed Title Section */}
      <section className="shrink-0 flex flex-col items-center justify-center pt-8 pb-12">
        <h1 className="text-4xl md:text-5xl tracking-tight text-center pt-20">
          {title}
        </h1>
      </section>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-56px-16rem)] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <main className="flex flex-col items-center w-full max-w-6xl mx-auto gap-18 pb-16">

          {/* Description */}
          <section className="flex flex-col items-center justify-center space-y-6">
            <p className="text-lg text-zinc-400 max-w-5xl leading-relaxed text-center">
              {description}
            </p>

            {/* Tech Stack Tags */}
            {/* {tech.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-zinc-800 rounded-full border border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )} */}
          </section>

          {/* MEDIA SHOWCASE */}
          <section className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <ProjectCarousel media={media} />
          </section>

          {/* OPTIONAL STRUCTURED SECTION PLACEHOLDER */}
          <section className="w-full flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="flex-1 flex flex-col items-center md:items-center">
              <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
              <p className="text-zinc-400 leading-relaxed">
                Describe the real-world problem this project aimed to solve.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center md:items-center">
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-zinc-400 leading-relaxed">
                Explain your technical approach and architecture decisions.
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}