import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ScreenshotSlideshow = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle the case where slides are empty
  if (slides.length === 0) {
    return (
      <div className="p-6 bg-gray-100 text-center text-gray-600 rounded-lg">
        <h3 className="text-xl font-bold mb-4">No Screenshots Available</h3>
        <p className="text-md">Please add slides to display the slideshow.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Description Section */}
      <div className="p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          {slides[currentSlide]?.title}
        </h3>
        <p className="text-lg">{slides[currentSlide]?.description || ""}</p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="my-4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <div className="relative max-w-full">
                <Image
                  src={slide.image}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg shadow-lg mx-auto"
                  height={600}
                  width={500}
                  loading="lazy"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenshotSlideshow;
