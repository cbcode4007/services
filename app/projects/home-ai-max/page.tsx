import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Home AI Max",
};

export default function HomeAIMax() {
  return (
    <ProjectTemplate
      title="Home AI Max"
      description="Home AI Max is a Flutter Dart app that sends text queries to a configured webhook and reads server replies out loud. It also accepts incoming POST notifications from a local server and can request/receive TTS audio from a companion Flask service. The central orb visually animates while the app is speaking. It was made before Alexa Plus to essentially allow home users to interact with their smart assistant as an AI model, but is still being updated and used alongside Plus to cover certain things the service does not do as well."
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