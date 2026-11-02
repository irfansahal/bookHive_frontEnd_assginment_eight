
import React from 'react';
import AddingForm from '../components/addBook/AddingForm';

const AddBook = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className="py-10 px-3">
            <h1 className='text-2xl font-extrabold pb-5'>Add New Book</h1>
            <AddingForm/>
        </div>
        </div>
    );
};

export default AddBook;