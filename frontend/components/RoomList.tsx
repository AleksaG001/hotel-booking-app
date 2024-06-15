"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  cena: number;
  naziv: string;
  tekst: string;
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
  const [roomType, setRoomType] = useState("all");
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);

  useEffect(() => {
    if (rooms.data) {
      const filtered = rooms.data.filter((room) =>
        roomType === "all" ? true : roomType === room.attributes.tekst
      );
      setFilteredRooms(filtered);
    }
  }, [roomType, rooms.data]);
  

  return (
    <section className="py-16 min-h-[90vh]">
      <div className="flex flex-col items-center">
        <div className="relative w-[300px] h-[50px]">
          <Image
            src={"/assets/headingimg.png"}
            fill
            alt=""
            className="object-cover"
            loading="eager"
          />
        </div>
        <h2 className="mb-8 primary-font text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5.5xl">
          Our rooms
        </h2>
      </div>
      <div>
        <Tabs
          defaultValue="all"
          className="w-[240px] lg:w-[540px] h-[200px] lg:h-auto mb-8 mx-auto"
        >
          <TabsList className="w-full h-full lg:h-[46px] flex flex-col lg:flex-row">
            <TabsTrigger
              className="w-full h-full"
              value="all"
              onClick={() => setRoomType("all")}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              className="w-full h-full"
              value="single"
              onClick={() => setRoomType("single")}
            >
              Single
            </TabsTrigger>
            <TabsTrigger
              className="w-full h-full"
              value="double"
              onClick={() => setRoomType("double")}
            >
              Double
            </TabsTrigger>
            <TabsTrigger
              className="w-full h-full"
              value="extended"
              onClick={() => setRoomType("extended")}
            >
              Extended
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 gap-6">
        {filteredRooms.map((room) => {
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
                  <div className="secondary-font">
                    Capacity - {room.attributes.kapacitet} guest
                    {room.attributes.kapacitet !== 1 ? "s" : ""}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(fullStars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {hasHalfStar && <FaStarHalf />}
                    {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                      (_, i) => (
                        <FaStar
                          key={i + fullStars + 1}
                          className=" text-accent"
                        />
                      )
                    )}
                  </div>
                </div>
                <Link href={`/room/${room.id}`}>
                  <h3 className="h3 primary-font">{room.attributes.naziv}</h3>
                  <p className="cena h3 mb-4 text-secondary">
                    ${room.attributes.cena}{" "}
                    <span className="text-black ">/ night</span>
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomList;
