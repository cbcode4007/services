import Carousel from "@/components/home-carousel";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">

        <Carousel/>

      </main>
    </div>
  );
}
