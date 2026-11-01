
import React from 'react';
import BookDetailsSection from '../../components/allBooks/BookDetailsSection';

const BookDetails = async ({params} : {params : {bookId : string}} ) => {

    const { bookId} = await params;
     
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-book/${bookId}`)
      const data = await response.json()
      console.log(data.book);
     
      const book = data.book
    return (
        <div>
           <div>
             {/* details hero */}
            <div className="h-[700px] bg-cover bg-center w-full" style={{backgroundImage : 'url("/BooksOpenNewWorlds.png")'}}> 
               <div className="flex  items-center justify-center ">
                <div className='w-[90%] pt-70 lg:w-[1000px]'><h1 className='text-6xl font-extrabold text-amber-50 text-center text-shadow-sm text-shadow-[#e4c2e8]'>A Universe of Stories at Your Fingertips. </h1></div>
               </div>
            </div>
            {/* details section */}
            <div>
              <BookDetailsSection book={book}/>
            </div>
            </div> 
        </div>
    );
};

export default BookDetails;