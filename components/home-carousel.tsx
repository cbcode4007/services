"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeCarousel() {
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
        navigation
        className="mx-auto w-full rounded-xl relative overflow-hidden"
      >
        <SwiperSlide>
          <div className="group relative h-128 w-full overflow-hidden rounded-xl">
            <Link href="/support">
              {/* Background image */}
              <Image
                src="/how-to-start-a-remote-it-support-business.png"
                alt="IT Support Stock Photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 
                bg-linear-to-t from-black/80 via-black/40 to-transparent
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100"
              />

              {/* Hover text */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6
                opacity-0 pb-8 transition-all duration-300
                translate-y-4 group-hover:translate-y-0
                group-hover:opacity-100">
                <h2 className="flex flex-col text-2xl font-semibold leading-10 tracking-wide text-zinc-50">
                  IT SUPPORT
                </h2>
                <p className="p-4 text-left">Professional IT support focused on security, stability, and fast, dependable help.</p>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group relative h-128 w-full overflow-hidden rounded-xl">
            <Link href="/solutions">
              {/* Background image */}
              <Image
                src="/programming-coding---study-online-banner.png"
                alt="IT Solutions Stock Photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 
                bg-linear-to-t from-black/80 via-black/40 to-transparent
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100"
              />

              {/* Hover text */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6
                opacity-0 pb-8 transition-all duration-300
                translate-y-4 group-hover:translate-y-0
                group-hover:opacity-100">
                <h2 className="flex flex-col text-2xl font-semibold leading-10 tracking-wide text-zinc-50">
                  IT SOLUTIONS
                </h2>
                <p className="p-4 text-left">Custom software solutions purpose-built to solve real problems, efficiently and scalably.</p>
              </div>

            </Link>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
