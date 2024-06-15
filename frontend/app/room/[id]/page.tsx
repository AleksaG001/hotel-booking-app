import Image from "next/image";
import { TbArrowsMaximize, TbUsers } from "react-icons/tb";

type RoomAttributes = {
  naziv: string;
  cena: number;
  velicina: number;
  kapacitet: number;
  opis: string;
  slika: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

type RoomData = {
  data: {
    attributes: RoomAttributes;
  };
};

const getRoomData = async ({ params }: { params: any }): Promise<RoomData> => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/rooms/${params.id}?populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  return res.json();
};

const RoomDetails = async ({ params }: { params: any }) => {
  try {
    const room = await getRoomData({ params });

    if (!room || !room.data || !room.data.attributes) {
      throw new Error("Room data is incomplete or undefined.");
    }

    const { attributes } = room.data;

    if (
      !attributes.slika ||
      !attributes.slika.data ||
      !attributes.slika.data.attributes
    ) {
      throw new Error("Image data is incomplete or undefined.");
    }

    const imgURL = `http://127.0.0.1:1337${attributes.slika.data.attributes.url}`;
    console.log(imgURL);

    return (
      <section className="min-h-[80vh]">
        <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row lg:gap-12 h-full">
            <div className="flex-1 ">
              <div className="relative h-[360px] lg:h-[420] mb-8">
                <Image src={imgURL} fill className="object-cover" alt="" />
              </div>
              <div className="flex flex-1 flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="h3 primary-font">{attributes.naziv}</h3>
                  <p className="cena h3 mb-4 text-secondary">
                    ${attributes.cena}{" "}
                    <span className="text-black">/ night</span>
                  </p>
                </div>
                <div className="flex items-center gap-8 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-accent text-2xl">
                      <TbArrowsMaximize />
                    </div>
                    <p>
                      {attributes.velicina} m<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-accent text-2xl">
                      <TbUsers />
                    </div>
                    <p>
                      {attributes.kapacitet} Guest
                      {attributes.kapacitet !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <p>{attributes.opis}</p>
              </div>
            </div>
            <div className="w-full lg:max-w-[360px] h-max bg-slate-600">
              reservation
            </div>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    return <p>Error loading room details. Please try again later.</p>;
  }
};

export default RoomDetails;
