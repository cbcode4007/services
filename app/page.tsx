import HomeCarousel from "@/components/home-carousel";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-56px)] items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 text-center px-4">        
        <HomeCarousel />
      </main>
    </div>
  );
}

