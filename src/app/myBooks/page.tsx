
import React from 'react';
import Image from 'next/image';
import MyBookCard from '../components/myBooks/myBookCard';
import { auth } from '@/lib/auth';
import { headers } from "next/headers";


export interface MyBook {
    authorName: string ;
    bookImage : string ;
    booktitle : string ;
    category : string ;
    description : string ;
    email : string;  
    name : string ;
    _id : string;
    createdAt? : string ; 
    copy : string
}

const MyBooks = async () => {

    const session = await auth.api.getSession({
        headers : await headers()
    });

    const user = session?.user;

     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-my-books/${user?.email}`);
     const data = await res.json();

     
     const myBooks = data.myBooks;
     console.log(data, myBooks)
    return (
        <div className=" ">
            <div className=" px-5 lg:px-20 pt-20 pb-10">
                {/* heading */}
                <div className="pt-20 flex flex-col items-center  gap-4">
                   <h1 className='font-light text-[#5f059f] text-5xl'>My Books</h1>
                   <p className='text-zinc-500 font-light'>Manage and view your added books</p>
                </div>
                {/* content */}
                <div >
                    {/* book card */}
                    {/* {myBooks.map((book : MyBook , index : number)=>{
                        return <MyBookCard key={book._id} book={book}/>
                    })} */}
                   
                   <MyBookCard/>
                </div>
            </div>
        </div>
    );
};

export default MyBooks;