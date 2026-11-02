import React from "react";
import Image from "next/image";
import { Book } from "@/app/allBooks/page";
import Borrowbutton from "../borrow/borrowbutton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


/* Static content only — no handlers */
const BookDetailsSection = async ({book} : {book : Book}) => {

const session = await auth.api.getSession({
  headers : await headers()
});

const user = session?.user

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* two divs, flex: left = image, right = book info */}
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* left div — book image inside a bordered frame */}
        <div className="w-full lg:w-[45%]">
          <div className="relative border border-gray-200 p-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={book.bookImage}
                alt="Book cover"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* right div — title, author, category, description, added by */}
        <div className="w-full lg:w-[55%]">
          {/* title */}
          <h1 className="text-3xl font-bold text-gray-900">
            {book.booktitle}
          </h1>

          {/* author + category — label : value rows like the image */}
          <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
            <div className="flex gap-4 py-3">
              <span className="w-32 shrink-0 text-gray-500">Author :</span>
              <span className="text-gray-900">{book.authorName}</span>
            </div>
            <div className="flex gap-4 py-3">
              <span className="w-32 shrink-0 text-gray-500">Category : </span>
              <span className="text-gray-900">{book.category}</span>
            </div>
            <div className="flex gap-4 py-3">
              <span className="w-32 shrink-0 text-gray-500">Added By :</span>
              <span className="text-gray-900">{book.name}</span>
            </div>
             <div className="flex gap-4 py-3">
              <span className="w-32 shrink-0 text-gray-500">Copies Are Abailble :</span>
              <span className="text-gray-900">{book.copy}</span>
            </div>
          </div>

          {/* description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Description
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              {book.description}
            </p>
          </div>

        {/* brow button */}
        <div className="mt-10">
           <Borrowbutton 
           book={book}
           user={user}
           />
        </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsSection;
