import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI Weather Report",
};

export default function AIWeatherReport() {
  return (
    <ProjectTemplate
      title="AI Weather Report"
      description="A small command-line program that delivers accurate weather information from Environment Canada upon request, tailored to the exact contents of the question. It is mainly meant to be used as part of the AI Operator framework, which will call it to defer any weather-related queries."
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