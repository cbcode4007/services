"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string };

interface ProjectCarouselProps {
  media: MediaItem[];
}

export default function ProjectCarousel({
  media,
}: ProjectCarouselProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full rounded-xl overflow-hidden"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full overflow-hidden rounded-xl bg-black h-48 md:h-132">

              {item.type === "image" && (
                <Image
                  src={item.src}
                  alt={item.alt ?? "Project screenshot"}
                  fill
                  className="object-cover"
                />
              )}

              {item.type === "video" && (
                <video
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
