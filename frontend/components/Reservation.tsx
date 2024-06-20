"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Calendar as CalendarIcon, LogIn } from "lucide-react";
import { format, isPast } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import AlertMessage from "./AlertMessage";
import { useRouter } from "next/navigation";

const postData = async (url: string, data: object) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Reservation = ({
  reservations,
  room,
  isUserAuthenticated,
  userData,
}: {
  reservations: any;
  room: any;
  isUserAuthenticated: boolean;
  userData: any;
}) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    type: "error" | "success" | "null";
  } | null>(null);

  const router = useRouter();

  const formatDateForStrapi = (date: Date) => {
    return format(date, "yyyy-MM-dd");
  };

  // Tajmer za error message
  useEffect(() => {
    const timer = setTimeout(() => {
      return setAlertMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alertMessage]);

  const saveReservation = () => {
    if (!checkInDate || !checkOutDate) {
      return setAlertMessage({
        message: "Please select check-in and check-out dates.",
        type: "error",
      });
    }
    if (checkInDate.getTime() === checkOutDate.getTime()) {
      return setAlertMessage({
        message: "Check-in and check-out dates can't be the same.",
        type: "error",
      });
    }

    // filter za podatke, kako se ne bi preklapali datumi za iste rezervisane sobe
    const isReserved = reservations.data
      .filter((item: any) => item.attributes.sobe.data.id === room.data.id)
      .some((item: any) => {
        const existingCheckIn = new Date(item.attributes.checkIn).setHours(
          0,
          0,
          0,
          0
        );
        const existingCheckOut = new Date(item.attributes.checkOut).setHours(
          0,
          0,
          0,
          0
        );
        const checkInTime = checkInDate.setHours(0, 0, 0, 0);
        const checkOutTime = checkOutDate.setHours(0, 0, 0, 0);

        const isReservedBetweenDates =
          (checkInTime >= existingCheckIn && checkInTime < existingCheckOut) ||
          (checkOutTime > existingCheckIn &&
            checkOutTime <= existingCheckOut) ||
          (existingCheckIn > checkInTime && existingCheckIn < checkOutTime) ||
          (existingCheckOut > checkInTime && existingCheckOut <= checkOutTime);
        return isReservedBetweenDates;
      });

    if (isReserved) {
      setAlertMessage({
        message: "This room is already booked for selected dates.",
        type: "error",
      });
    } else {
      const data = {
        data: {
          Ime: userData.given_name,
          Prezime: userData.family_name,
          email: userData.email,
          checkIn: checkInDate ? formatDateForStrapi(checkInDate) : null,
          checkOut: checkOutDate ? formatDateForStrapi(checkOutDate) : null,
          sobe: room.data.id,
        },
      };
      postData("http://127.0.0.1:1337/api/rezervacijes", data);
      setAlertMessage({
        message:
          "Your reservation has been successful! We are looking forward to welcome you to our paradise.",
        type: "success",
      });
      router.refresh();
    }
  };

  return (
    <div>
      <div className="bg-gray-100 h-[320px] mb-4 shadow-md">
        <div className="bg-accent py-4 text-center relative mb-2">
          <h4 className="text-xl text-white">Book your room</h4>

          <div
            className="absolute -bottom-[8px] 
          left-[calc(50%_-_10px)] 
          w-0 h-0 border-l-[10px] 
          border-l-transparent 
          border-t-[8px] border-t-accent border-r-[10px] border-r-transparent"
          ></div>
        </div>
        <div className="flex flex-col gap-4 w-full py-6 px-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkInDate && "text-secondary"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? (
                  format(checkInDate, "PPP")
                ) : (
                  <span>Check in</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>
          {/* check in, check out */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkOutDate && "text-secondary"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? (
                  format(checkOutDate, "PPP")
                ) : (
                  <span>Check out</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>
          {/* uslovno renderovanje rezervazija za ulogovane korisnike */}
          {isUserAuthenticated ? (
            <Button onClick={() => saveReservation()} size="default">
              Book now
            </Button>
          ) : (
            <LoginLink>
              <Button className="w-full" size="default">
                Book now
              </Button>
            </LoginLink>
          )}
        </div>
      </div>
      {alertMessage && (
        <AlertMessage message={alertMessage.message} type={alertMessage.type} />
      )}
    </div>
  );
};

export default Reservation;
