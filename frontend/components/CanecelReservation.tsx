"use client";
import { useRouter } from "next/navigation"; 
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const deleteData = async (url: string) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

const CanecelReservation = ({ reservation }: { reservation: any }) => {
  const router = useRouter();
  const canecelReservation = (id: number) => {
    deleteData(`http://127.0.0.1:1337/api/rezervacijes/${id}`);
    router.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Cancel Reservation</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription>
            This action can&apos;t be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction onClick={() => canecelReservation(reservation.id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CanecelReservation;
