import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Chat Max",
};

export default function ChatMax() {
  return (
    <ProjectTemplate
      title="Chat Max"
      description="Created as a first foray into prompt engineering, Chat Max offers a basic Python Tkinter desktop interface through which users can assign and customize various personality traits of their conversation partner at any time. Each minute option is capable of changing the prompt such that it acts entirely differently, but the synthesis of different options is left up to the AI model."
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