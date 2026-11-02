
import React from 'react';
import MyBorrowCard from '../components/borrow/myBorrowCard';
import { Borrow } from '../components/borrow/borrowbutton';
import NoBorrow from '../components/borrow/no-borrow';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyBorrows = async () => {

     const session = await auth.api.getSession({
        headers : await headers()
     });

     const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/borrows/${user?.email}`);
    const Data = await res.json();

    console.log(Data);
    
    const myBorrows = Data.myBoorows
    
    
    return (
 <div className=" ">
            <div className=" px-5 lg:px-20 py-10">
                {/* heading */}
                <div className="pt-20 flex flex-col items-center  gap-4">
                   <h1 className='font-light text-[#5f059f] text-5xl'>My Borrows</h1>
                   <p className='text-zinc-500 font-light'>Manage and view your morrowed books</p>
                </div>
                {/* content */}
                <div className="flex flex-col items-center justify-center">
                    {/* book card */}
                    
                     {myBorrows.length > 0 ? myBorrows.map((boorow : Borrow , index : number)=>{
                        return <MyBorrowCard key={boorow.book_Id} boorow={boorow}/>
                    }) : <NoBorrow/> } 
                   
                   {/* <MyBookCard/> */}
                     
                   {/* <MyBorrowCard/> */}
                </div>
            </div>
        </div>
    );
};

export default MyBorrows;