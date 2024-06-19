import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Image {
  src: string;
  alt: string;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images: Image[] = [
    { src: "/assets/cover/Carousel1.jpg", alt: "Slide 1" },
    { src: "/assets/cover/Carousel2.jpg", alt: "Slide 2" },
    { src: "/assets/cover/Carousel3.jpg", alt: "Slide 3" },
  ];

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);

  return (
    <div className="carousel">
      <div className="carousel__inner flex w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__item relative w-full h-[750px] overflow-hidden transition duration-500 ease-in-out ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <img
              className="carousel__image w-full h-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel__arrow absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-secondary hover:text-gray-900 focus:outline-none"
        onClick={handlePrevious}
      >
        <div className="flex items-center justify-center w-9 h-20 rounded-full bg-accent hover:bg-secondary">
          <ChevronLeft className="w-12 h-12" />
        </div>
      </button>
      <button
        type="button"
        className="carousel__arrow absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-secondary hover:text-gray-900 focus:outline-none"
        onClick={handleNext}
      >
        <div className="flex items-center justify-center w-9 h-20 rounded-full  bg-accent hover:bg-secondary">
          <ChevronRight className="w-12 h-12" />
        </div>
      </button>
    </div>
  );
};

export default Carousel;
