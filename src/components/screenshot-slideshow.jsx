"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="relative w-full max-w-4xl mx-auto">
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
            <div className="relative flex justify-center items-center h-full">
              {/* Image */}
              <img
                src={slide.image}
                alt={`Screenshot ${index + 1}`}
                className="shadow-lg w-full h-auto object-contain"
                style={{
                  display: "block",
                }}
              />
              {/* Description Section */}
              {index === currentSlide && (
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-lg">{slide.description || ""}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenshotSlideshow;
