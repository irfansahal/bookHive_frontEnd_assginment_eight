
import React from 'react';
import BookCard from '../components/allBooks/BookCard';
import { Book } from '../allBooks/page';
import Link from 'next/link';

const NewArrival = async () => {

     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-new-arrivals`);
     const Data = await res.json();
     console.log("newArrivalData",Data);
     const NewArrival = Data.sixNewArrivalsBooks
    return (
          <>
       <div className="mb-10 flex flex-col items-center gap-3 ">
        <h1 className="text-3xl font-bold text-gray-900">New Arrival Collection</h1>
        <span className="h-1 w-12 rounded-full bg-[#740378]"></span>
      </div>
          
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5  py-10 xl:px-50">
        {NewArrival?.map((book : Book) => (
          <BookCard
            key={book._id}
            bookId={book._id}
            image={book.bookImage}
            title={book.booktitle}
            author={book.authorName}
            category={book.category}
          />
        ))}
      </div>
      <Link href={'/allBooks'}>
      <div className='pb-10 flex justify-center'>
        <button className="btn btn-soft text-[#56108f]">See All Books</button>
      </div>
      </Link>
      </> 
    );
};

export default NewArrival;