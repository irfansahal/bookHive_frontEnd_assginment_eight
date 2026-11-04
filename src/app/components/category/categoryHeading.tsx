import React from "react";
import Image from "next/image";
import { Categories } from "@/app/home/AboutOurLibrary";

/* Content only — no links, no handlers */
const CategoryBooksHeading = ({currentCategory} : { currentCategory : Categories}) => {
  return (
    <div className="mb-10 flex flex-col gap-10 lg:flex-row ">
      {/* left div — heading + subheading */}
      <div className="flex w-full lg:pr-20 flex-col gap-10 lg:w-1/2 items-start justify-center">
        <h1 className="text-5xl font-light uppercase ">
          {currentCategory.title}
        </h1>
        <p className="text-gray-600 ">
          Discover your next favorite read from our collection of <span className="text-[#4a1072] text-2xl">{currentCategory.title}</span>,
          gain knowledge, and be inspired.
        </p>
      </div>

      {/* right div — image only */}
      <div className="flex w-full justify-center lg:w-1/2 shadow-lg shadow-[#dfbcf9]  pb-30 mb-20">
        <Image
          src={currentCategory?.imageurl}
          alt="Book collection"
          width={350}
          height={350}
          className="h-auto w-full max-w-[350px]"
        />
      </div>
    </div>
  );
};

export default CategoryBooksHeading;
