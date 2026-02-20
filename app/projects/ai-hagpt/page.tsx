import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI HAGPT",
};

export default function AIHAGPT() {
  return (
    <ProjectTemplate
      title="AI HAGPT"
      description="A small command-line program that uses AI to determine if an incoming message is a command or chat and responds in kind. It will attempt to carry out the commands according to the entities (devices/services) it is aware of, which requires some existing infrastructure, or carry the conversation for chat messages."
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