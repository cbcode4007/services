import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI Backup Analyzer",
};

export default function AIBackupAnalyzer() {
  return (
    <ProjectTemplate
      title="AI Backup Analyzer"
      description="A small command-line program that analyzes backup files and reports on their status and completeness. An AI will read the tail of a log file it receives, and judge whether or not it proceeded smoothly; if not, it will send a notification to a specified device warning the user."
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