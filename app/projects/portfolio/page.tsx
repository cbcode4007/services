import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Project: Web Portfolio",
};

export default function WebPortFolio() {
  return (
    <ProjectTemplate
      title="Web Portfolio"
      description="This web portfolio is a high-quality site made using the Next.js framework which describes and highlights various skills and projects, as well as providing users the ability to contact without revealing sensitive client information."
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