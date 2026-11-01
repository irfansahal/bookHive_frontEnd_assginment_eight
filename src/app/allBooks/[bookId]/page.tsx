
import React from 'react';

const BookDetails = async ({params} : {params : {bookId : string}} ) => {

    const { bookId} = await params;
     
    return (
        <div>
           <h1>This is Book Details page {bookId}</h1> 
        </div>
    );
};

export default BookDetails;