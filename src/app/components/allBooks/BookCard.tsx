import React from "react";
import Image from "next/image";
import Link from "next/link";

/* Card only — no handlers, no navigation */
type BookCardProps = {
  image: string;
  title: string;
  author: string;
  category: string;
  bookId : string;
};

const BookCard = ({bookId , image, title, author, category }: BookCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      {/* div 1 — book image */}
      <div className="border-b border-gray-100 p-4">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* div 2 — title, author, category, button (one under another) */}
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-2xl font-light text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">by {author}</p>
        <span className="w-fit rounded-full bg-[#e3d3ee] px-3 py-1 text-xs font-medium text-[#740378]">
          {category}
        </span>
        <button
          type="button"
          className="mt-3 w-full cursor-pointer rounded-lg bg-[#740378] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5c0260]"
        >
          <Link href={`/allBooks/${bookId}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
