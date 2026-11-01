"use client"
import React from 'react';
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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const DeletingButton = ({id}:{id : string}) => {
    
    const router = useRouter()

    const deletingHandler = async () => {
        console.log("successfully hit");
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-book/${id}`,{
            method : "DELETE"
        })
        const data = await res.json();
        if(data){
            toast("you successfully deleted the book")
            router.refresh()
        }
    }

    return (
        <>
         <AlertDialog>
      <AlertDialogTrigger render={<button  className="btn btn-outline text-red-500  border-red-500">Show Dialog</button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete from the database of our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deletingHandler}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> 
        </>
    );
};

export default DeletingButton;