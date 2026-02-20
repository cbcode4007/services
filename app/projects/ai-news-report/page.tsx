import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI News Report",
};

export default function AINewsReport() {
  return (
    <ProjectTemplate
      title="AI News Report"
      description="A small command-line program that delivers accurate news information from Global News upon request, tailored to the exact contents of the question. It is mainly meant to be used as part of the AI Operator framework, which will call it to defer any news-related queries."
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
  );
}