import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI Operator",
};

export default function AIOperator() {
  return (
    <ProjectTemplate
      title="AI Operator"
      description="A command-line program which can take message input, and then decide using AI which 'plugin', similarly AI-based programs who have more specialized information, should be used to provide the best answer."
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