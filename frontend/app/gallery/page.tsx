import React from "react";
import Image from "next/image";

const Gallery = () => {
  const galleryItems = [
    {
      src: "/assets/gallery/bazen.jpg",
      alt: "Beautiful Pool",
      title: "Relaxing Pool",
      description:
        "Enjoy a day at our beautiful, serene pool with crystal clear water and comfortable lounging areas.",
    },
    {
      src: "/assets/gallery/sauna.jpg",
      alt: "Luxury Spa",
      title: "Luxury Spa",
      description:
        "Indulge in our luxury spa treatments designed to rejuvenate your body and soul.",
    },

    {
      src: "/assets/gallery/Teretana.jpg",
      alt: "Modern Gym",
      title: "Modern Gym",
      description:
        "Stay fit during your stay with our state-of-the-art gym facilities, available 24/7.",
    },
    {
      src: "/assets/gallery/Plaza.jpg",
      alt: "Private Beach",
      title: "Private Beach",
      description:
        "Relax on our private beach, with golden sands and calm waters perfect for swimming and sunbathing.",
    },
  ];

  return (
    <div className="gallery-container max-w-6xl mx-auto p-4 space-y-8 mt-5 mb-10">
      <div className="p-8 flex flex-col items-center mt-7">
        <h1 className="text-4xl font-bold  font-primary">Our amenities</h1>
        <hr className="my-8 w-1/2 border-t-4 border-accent" />
      </div>
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className={`gallery-item flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } space-y-4 md:space-y-0 md:space-x-4`}
        >
          <div className="image-container w-full md:w-1/2 relative h-64 md:h-96">
            <Image
              className="object-cover rounded-lg shadow-lg"
              src={item.src}
              alt={item.alt}
              layout="fill"
            />
          </div>
          <div className="description-container w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
