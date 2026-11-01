import React from "react";
import Image from "next/image";

/* Content only — no links, no handlers */
const AllBooksHeading = () => {
  return (
    <div className="mb-10 flex  gap-10">
      {/* left div — heading + subheading */}
      <div className="flex w-full flex-col gap-10 lg:w-1/2 items-start justify-center">
        <h1 className="text-5xl font-light uppercase text-gray-900">
          Get All Book Collections
        </h1>
        <p className="text-gray-600">
          Discover your next favorite read from our collection of stories,
          knowledge, and inspiration.
        </p>
      </div>

      {/* right div — image only */}
      <div className="flex w-full justify-center lg:w-1/2">
        <Image
          src="/image_992be07a.jpg"
          alt="Book collection"
          width={350}
          height={350}
          className="h-auto w-full max-w-[350px]"
        />
      </div>
    </div>
  );
};

export default AllBooksHeading;
