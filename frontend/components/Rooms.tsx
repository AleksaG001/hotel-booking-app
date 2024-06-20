"use client";
import { useEffect, useState } from "react";
import RoomList from "./RoomList";
import Carousel from "./Carousel";

const getRooms = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:1337/api/rooms?populate=*`, {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch rooms data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return null;
  }
};

// Sobe
const Rooms = () => {
  const [rooms, setRooms] = useState<any>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const roomsData = await getRooms();
      setRooms(roomsData);
    };

    fetchRooms();
  }, []);

  if (!rooms) {
    return (
      <section>
        <div className="container mx-auto">
          <p>Error loading rooms.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <Carousel />
      <div className="container mx-auto">
        <RoomList rooms={rooms} />
      </div>
    </section>
  );
};

export default Rooms;
