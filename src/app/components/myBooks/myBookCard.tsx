// "use client"
import { MyBook } from '@/app/myBooks/page';
import Image from 'next/image';
import React from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Dialog } from '@base-ui/react';
import Dailog from './dailog';
import DeletingButton from './deletingButton';
import NoBooks from './no-book';

const MyBookCard = async  () => {
    
    const session = await auth.api.getSession({
        headers : await headers()
    })
    
        const user = session?.user;
        console.log(user)


         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-my-books/${user?.email}`);
         const data = await res.json();
        
         const myBooks = data.myBooks;
         console.log(data);
         
        
    return (
        
           <div className="flex flex-col items-center justify-center">
            {myBooks.length > 0 ? myBooks.map((book : MyBook, index:number)=>{
                return   <div key={book._id}  className="mt-8 flex flex-col gap-5 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm w-[80%] lg:w-[70%] sm:flex-row">
                        {/* left div — image */}
                        <div>
                            <Image
                                src={book?.bookImage || "/image_992be07a.jpg"}
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
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold text-zinc-800">{book?.booktitle}</h2>
                                <p className="text-sm text-zinc-500">Author: {book?.authorName}</p>
                                <p className="text-sm text-zinc-500">Category: {book?.category}</p>
                                <p className="text-sm text-zinc-500">Created: {book?.createdAt}</p>
                            </div>

                            {/* right side — edit & delete buttons */}
                    
                             <div className="flex gap-2 ">

                                 {/* editing button  */}
                              
                                <Dailog book={book}/>
                                
                                <DeletingButton id={book._id}/>
                                {/* <button
                                    type="button"
                                  className="btn btn-outline text-red-500  border-red-500"
                               >
                                    Delete
                                </button> */}
                            </div>
                          
                        </div>
                    </div>
            }): <NoBooks/>}
           </div> 
        
    );
};

export default MyBookCard; 

// {/* <div className="mt-8 flex flex-col gap-5 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm w-[80%] lg:w-[70%] sm:flex-row">
//                         {/* left div — image */}
//                         <div>
//                             <Image
//                                 src="https://placehold.co/120x160/6B2C4F/ffffff?text=BOOK"
//                                 alt="Book cover"
//                                 width={112}
//                                 height={160}
//                                 className="h-40 w-28 rounded object-cover"
//                                 unoptimized
//                             />
//                         </div>

//                         {/* right div — info + buttons */}
//                         <div className="flex flex-1 flex-col items-start justify-between gap-4 sm:flex-row">
//                             {/* left side — static fields */}
//                             <div className="flex flex-col gap-1">
//                                 <h2 className="text-lg font-semibold text-zinc-800">The Big Book of Science</h2>
//                                 <p className="text-sm text-zinc-500">Author: John Davidson</p>
//                                 <p className="text-sm text-zinc-500">Category: Science &amp; Technology</p>
//                                 <p className="text-sm text-zinc-500">Created: Nov 1, 2026</p>
//                             </div>

//                             {/* right side — edit & delete buttons */}
//                             <div className="flex gap-2">
//                                 <button
//                                     type="button"
//                                     className="cursor-pointer rounded border border-[#5f059f] px-4 py-2 text-sm font-medium text-[#5f059f] transition-colors hover:bg-[#5f059f] hover:text-white"
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="cursor-pointer rounded border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div> */}