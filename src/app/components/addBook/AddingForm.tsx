"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import getTokenFromServer from "@/lib/getTokenFromServer";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { redirect, useRouter } from "next/navigation";

const bookCategories: string[] = [
  "Fiction",
  "Science Fiction",
  "Fantasy",
  "Mystery & Thriller",
  "Romance",
  "Biography & Autobiography",
  "History",
  "Self-Help & Personal Development",
  "Science & Technology",
];

const AddingForm = () => {
  const { data: session, error } = authClient.useSession();

  const user = session?.user;
  
  // const [ formValue , setFormValue ] = useState({ email : user?.email , name : user?.name })
  
  const router = useRouter()
  
  const submitHandler = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const { data : tokenData , error } = await  authClient.token()
    // const token = tokenData?.token


     const token = await getTokenFromClient()

    // if (!user) {
    //   return toast.error("You must be logged in to add a book");
    // }

    const formData = new FormData(e.target);
    const bookData = Object.fromEntries(formData.entries()) as {
      booktitle: string;
      authorName: string;
      category: string;
      bookImage: string;
      description: string;
    };

    console.log(bookData);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/add-book`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           authorization : `Bearer ${token}`
        },
        body: JSON.stringify({
          ...bookData,
          // ...formValue
        }),
      },
    );
    const data = await response.json();

    if (data) {
      toast("Book added successfully");
       router.refresh()
        redirect("/allBooks")
    }
  };

  return (
    <div className="">
      <fieldset className="fieldset bg-[#e3d3ee] border-base-300 rounded-box w-full max-w-[500px] border p-4">
        {/* <legend className="fieldset-legend">Login</legend> */}

        <form onSubmit={submitHandler}>
          <label className="label">Book Tilte</label>
          <input
            type="text"
            className="input w-full"
            placeholder="booktitle"
            name="booktitle"
          />

          <label className="label ">Author Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Author Name"
            name="authorName"
          />

          <label className="label">Category</label>
          <select className="select select-bordered w-full" name="category">
            {bookCategories.map((category: string, index: number) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>

          <label className="label">Book Image</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Book Image"
            name="bookImage"
          />

          <label className="label">Short Description</label>
          <textarea  className="border-0 w-full p-2 bg-white" name="description" rows={4} cols={50} />
         
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            defaultValue={user?.name}
            // onChange={(event) => setFormValue({...formValue, name : event.target.value})}
            readOnly
            name="name"
          />

          <label className="label ">Email</label>
          <input
            type="email"
            className="input w-full"
            defaultValue={user?.email}
            // onChange={(event)=>setFormValue({...formValue, email : event.target.value})}
            readOnly
            name="email"
          />

          <button className="btn btn-neutral  bg-[#5f059f] mt-4" type="submit">
            Add Book
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddingForm;
