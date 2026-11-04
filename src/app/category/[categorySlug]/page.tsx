
import { Book } from '@/app/allBooks/page';
import AllBooksHeading from '@/app/components/allBooks/AllBooksHeading';
import BookCard from '@/app/components/allBooks/BookCard';
import CategoryBooksHeading from '@/app/components/category/categoryHeading';
import { Categories } from '@/app/home/AboutOurLibrary';
import React from 'react';

const CurrentCategory = async ({params} : {params : { categorySlug : string }}) => {
     const { categorySlug } = await params
      console.log("categorySlug",categorySlug);
      
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books-by-category/${categorySlug}`);
     const data = await res.json()
    
     console.log("category",data);
     
     const currentCategory : Categories = data.currentCategory

     const books = data.currentCategoryBooks

     return (
         <section className="mx-auto w-full max-w-7xl px-4 pt-40 pb-10 sm:px-6 lg:px-8">
      {/* heading div */}
      <CategoryBooksHeading currentCategory={currentCategory}/>
      <div className="mb-10 flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold text-[#9210ef]">Collection Of {currentCategory.title}</h1>
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

export default CurrentCategory;