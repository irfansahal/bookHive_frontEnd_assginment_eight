"use client"
import React from 'react';
import { Borrow } from './borrowbutton';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const MyBorrowCard = ({boorow } : { boorow : Borrow }) => {
    

     const router = useRouter()

    const deletingHandeler = async () => {
      console.log("you successfully hit");

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/borrow/${boorow._id}`, {
        method : "DELETE"
      });
      const data = await res.json();
      console.log("delete",data);
      
      if(data){
        toast("You successfully returned the item");
        router.refresh()
      }
    }

    return (
        <>
            <div   className="mt-8 flex flex-col gap-5 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm w-[80%] lg:w-[70%] sm:flex-row">
                                    {/* left div — image */}
                                    <div>
                                        <Image
                                            src={boorow ?.bookImage || "/image_992be07a.jpg"}
                                            alt="Book cover"
                                            width={112}
                                            height={160}
                                            className="h-40 w-28 rounded object-cover"
                                            unoptimized
                                        />
                                    </div>
            
                                    {/* right div — info + buttons */}
                                    <div className="flex flex-1 flex-col items-start justify-between gap-4 sm:flex-row">
                                        {/* left side — static fields */}
                                        <div className="flex flex-col gap-16">
                                            <div>
                                                <h2 className="text-lg font-semibold text-zinc-800">{boorow?.booktitle}</h2>
                                            <p className="text-sm text-zinc-500">User Eamil : {boorow?.userEmail}</p>
                                            </div>
                                           <div>
                                            <p className="text-sm text-zinc-500">Borrow Date: {boorow.borrowDate}</p>
                                            <p className="text-sm text-zinc-500">Return Date : {boorow.returnDate}</p>
                                            </div> 
                                        </div>
            
                                        {/* right side — edit & delete buttons */}
                                
                                         <div className="flex gap-2 ">
            
                                             {/* editing button  */}
                                          
                                            <button
                                                type="button"
                                              className="btn btn-outline text-red-500  border-red-500"
                                              onClick={deletingHandeler}
                                              >
                                                Return 
                                            </button>
                                        </div>
                                      
                                    </div>
                                </div>
        </>
    );
};

export default MyBorrowCard;