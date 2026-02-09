import { Metadata } from "next";
import DownloadClient from "./download-client";

export const metadata: Metadata = {
  title: "RustDesk",
};

export default function RustDesk() {
  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex flex-col w-full mx-auto gap-8">
          {/* Calls client-side function wrapper which also contains the bio text box for direct manipulation */}
          <DownloadClient />
      </main>
    </div>
  );
}
