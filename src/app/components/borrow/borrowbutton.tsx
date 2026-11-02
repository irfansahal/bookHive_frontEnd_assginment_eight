"use client"
import { Book } from "@/app/allBooks/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { User } from "lucide-react"
import React, { useState } from 'react';
import { toast } from "react-toastify"

type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
} | undefined;

export interface Borrow { 
     _id? : string ; 
     book_Id : string;  
      bookImage : string ;
      booktitle : string ; 
      userEmail : string ;
      borrowDate : string ;
      returnDate : string ; 

}
const Borrowbutton = ({book , user } : {book :Book ; user : User }) => {
    
    
    const borrowHandeler = async (e : React.SubmitEvent<HTMLElement>) => {
      e.preventDefault()
      const { data : session , error } = await authClient.getSession()
       
        const user = session?.user;
        console.log(user , book);
        
     const formData = new FormData(e.target);
     const userData = Object.fromEntries(formData.entries())as{
      email : string ;
      name : string;
    } ;

      const currentDate = new Date()
      const borrowDate = currentDate.toLocaleDateString("en-Us", {
         day : "numeric",
         month : "long",
        year : "numeric"
      }) 
        const futureDate = new Date(currentDate)
         futureDate.setDate(futureDate.getDate() + 7);
       const returnDate = futureDate.toLocaleDateString("en-US", {
        day : "numeric",
         month : "long",
        year : "numeric"
       })

     console.log({ 
      book_Id : book._id , 
      bookImage : book.bookImage , 
      booktitle : book.booktitle , 
      userEmail : userData.email ,
      borrowDate,
      returnDate  
    });

      const borrowBody :Borrow= { 
        book_Id : book._id , 
      bookImage : book.bookImage , 
      booktitle : book.booktitle , 
      userEmail : userData.email ,
      borrowDate,
      returnDate  
    }
       
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-brrow`, {
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(borrowBody)
      });
      const borrowData = await res.json()

      if(borrowData){
        toast("You borrowed one item")
      }
      if(!borrowBody){
        toast.error("Some thing went wrong")
      }

    }

    return (
        <div>
              <Dialog>
      <>
        <DialogTrigger render={<button className="btn btn-outline btn-primary hover:bg-[#5f059f]">Borrow This Book</button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
         <form onSubmit={borrowHandeler}>
           <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name-1" name="name" defaultValue={user?.name} readOnly />
            </Field>
            <Field>
              <Label htmlFor="email">User Email</Label>
              <Input id="email" name="email" defaultValue={user?.email} readOnly />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit" className="bg-[#5f059f]">Confirm Borrow</Button>
          </DialogFooter>
         </form>
        </DialogContent>
      </>
    </Dialog>
        </div>
    );
};

export default Borrowbutton;