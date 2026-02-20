import ProjectCarousel from "@/components/project-carousel";

interface ProjectTemplateProps {
  title: string;
  description: string;
  media: Array<{
    type: "image" | "video";
    src: string;
    alt?: string;
  }>;
}

export default function ProjectTemplate({
  title,
  description,
  media,
}: ProjectTemplateProps) {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col justify-center items-center px-6">
      <main className="flex w-full flex-col gap-4 md:items-center md:pt-6">
        {/* Title + Description */}
        <section className="flex flex-col gap-4 h-38 md:max-w-5xl justify-center">
          <h1 className="text-3xl text-zinc-50 tracking-tight">
            {title}
          </h1>

          <p className="text-md leading-8 text-zinc-400 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent md:scroll-smooth">
            {description}
          </p>
        </section>

        {/* Media Carousel */}
        <ProjectCarousel media={media} />
      </main>
    </div>
  );
}
