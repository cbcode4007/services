"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
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
                <p className="p-4 text-left">Call us, and receive guided remote or full physical hardware examination of your PC!</p>
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
                <p className="p-4 text-left">Whether you're an individual or a small business, and no matter what kind of platform you're working with, we'll have a tailored software solution just for you!</p>
              </div>

            </Link>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
