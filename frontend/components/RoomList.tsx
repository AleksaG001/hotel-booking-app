"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

type RoomAttributes = {
  kapacitet: number;
  slika: {
    data?: {
      attributes: {
        url: string;
      };
    };
  };
  rating?: number;
};

type Room = {
  id: number;
  attributes: RoomAttributes;
};

type RoomListProps = {
  rooms: {
    data: Room[];
  };
};

const RoomList = ({ rooms }: RoomListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 gap-6">
      {rooms.data.map((room) => {
        const imgURL = `http://127.0.0.1:1337${
          room.attributes.slika.data?.attributes.url || ""
        }`;
        const rating = room.attributes.rating || 0;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
          <div key={room.id}>
            <Link href={`/room/${room.id}`}>
              <div className="relative w-full h-[300px] overflow-hidden mb-6">
                <Image
                  src={imgURL}
                  fill
                  priority
                  alt="Room Image"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="h-[134px]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  Capacity - {room.attributes.kapacitet} person
                  {room.attributes.kapacitet !== 1 ? "s" : ""}
                </div>
                <div className="flex gap-1">
                  {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {hasHalfStar && <FaStarHalf />}
                  {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                    (_, i) => (
                      <FaStar key={i + fullStars + 1} className="text-black" />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomList;
