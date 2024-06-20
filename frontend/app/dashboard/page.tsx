import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";
const getUserReservations = async (userEmail: any) => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/rezervacijes?[filters][email][$eq]=${userEmail}&populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return await res.json();
};
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CanecelReservation from "@/components/CanecelReservation";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userReservations = await getUserReservations(user?.email);

  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8 h-full">
        <h3 className="text-2xl font-semibold  font-primary  mb-12 text-center lg:text-left">
          My Reservations
        </h3>
        <hr className="my-8 border-t-2 border-accent" />
        <div className="flex flex-col gap-8 h-full">
          {userReservations.data.length < 1 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] shadow-md">
              <p className="text-xl text-center text-gray-500 mb-4">
                You don&apos;t have any reservations.
              </p>
              <Link href="/">
                <Button>Go to homepage</Button>
              </Link>
            </div>
          ) : (
            userReservations.data.map((reservation: any) => {
              return (
                <div
                  key={reservation.id}
                  className="bg-gray-50 py-8 px-12 shadow-md border-l-4 border-r-4 border-accent"
                >
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <h3 className="text-xl font-medium w-[200px] text-center lg:text-left">
                      {reservation.attributes.sobe.data.attributes.naziv}
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-2 lg:w-[380px]">
                      <div className="flex items-center gap-1 flex-1">
                        <span className="text-accent  uppercase tracking-[2px]">
                          From:
                        </span>
                        <span className="font-semibold">
                          {format(reservation.attributes.checkIn, "PPP")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <span className="text-accent  uppercase tracking-[2px]">
                          To:
                        </span>
                        <span className="font-semibold">
                          {format(reservation.attributes.checkOut, "PPP")}
                        </span>
                      </div>
                    </div>
                    <CanecelReservation reservation={reservation} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
