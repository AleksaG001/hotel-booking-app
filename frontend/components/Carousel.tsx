import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageType {
  src: string;
  alt: string;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images: ImageType[] = [
    { src: "/assets/cover/Carousel1.jpg", alt: "Slide 1" },
    { src: "/assets/cover/Carousel2.jpg", alt: "Slide 2" },
    { src: "/assets/cover/Carousel3.jpg", alt: "Slide 3" },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className="carousel relative w-full h-[750px] overflow-hidden">
      <div className="carousel__inner relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__item absolute inset-0 transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              className="carousel__image object-cover"
              src={image.src}
              alt={image.alt}
              layout="fill"
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-8 font-primary">
        Experience the best life has to offer
        </h1>
        <Link href="#rooms">
          <button className="shadow-md text-3xl smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-accent after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white font-bold">
            Discover More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
