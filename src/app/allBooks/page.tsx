import React from "react";
import BookCard from "../components/allBooks/BookCard";
import AllBooksHeading from "../components/allBooks/AllBooksHeading";
// import { authClient } from "@/lib/auth-client";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

/* Static sample data — content only, no fetching yet */
// const books = [
//   {
//     id: 1,
//     image: "https://placehold.co/400x600/8B5E6B/ffffff?text=The+Big+Book+of+Science",
//     title: "The Big Book of Science",
//     author: "John Davidson",
//     category: "Science & Technology",
//   },
//   {
//     id: 2,
//     image: "https://placehold.co/400x600/2C3E6B/ffffff?text=The+Silent+Patient",
//     title: "The Silent Patient",
//     author: "Alex Michaelides",
//     category: "Mystery & Thriller",
//   },
//   {
//     id: 3,
//     image: "https://placehold.co/400x600/6B2C4F/ffffff?text=Atomic+Habits",
//     title: "Atomic Habits",
//     author: "James Clear",
//     category: "Self-Help & Personal Development",
//   },
//   {
//     id: 4,
//     image: "https://placehold.co/400x600/2C6B4F/ffffff?text=Dune",
//     title: "Dune",
//     author: "Frank Herbert",
//     category: "Science Fiction",
//   },
//   {
//     id: 5,
//     image: "https://placehold.co/400x600/6B5A2C/ffffff?text=The+History+of+Time",
//     title: "A Brief History of Time",
//     author: "Stephen Hawking",
//     category: "History",
//   },
//   {
//     id: 6,
//     image: "https://placehold.co/400x600/4F2C6B/ffffff?text=The+Hobbit",
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     category: "Fantasy",
//   },
// ];

export interface Book {
    authorName : string;
bookImage: string ;
booktitle: string ;
category: string ;
description: string ; 
email: string ;
name : string ;
_id : string;
copy : number;
}

const AllBooks = async () => {
 
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-all-books`);
    const data = await response.json()
    console.log(data)
    
    const books = data.allBooks


    return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-40 pb-10 sm:px-6 lg:px-8">
      {/* heading div */}
      <AllBooksHeading/>
      <div className="mb-10 flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">All Books</h1>
        <span className="h-1 w-12 rounded-full bg-[#740378]"></span>
      </div>

      {/* cards grid — responsive: 1 col on mobile, up to 4 cols on large screens */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5 xl:px-30">
        {books?.map((book : Book) => (
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
    </section>
  );
};

export default AllBooks;
