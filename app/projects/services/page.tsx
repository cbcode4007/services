import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Project: Web IT Services",
};

export default function WebServices() {
  return (
    <ProjectTemplate
      title="Web IT Services Landing Page"
      description="This landing page is a high-quality site made using the Next.js framework which showcases various IT services and capabilities, as well as providing users the ability to contact without revealing sensitive client information."
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