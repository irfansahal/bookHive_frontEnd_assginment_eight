"use client";
import React, { InputEvent, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
// import { uploadFile } from "@/lib/upload";

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
  // const [selectedFile, setSelectedFile] = useState(null);
//  const [previewUrl, setPreviewUrl] = useState(null);

  const user = session?.user;

  // const [ formValue , setFormValue ] = useState({ email : user?.email , name : user?.name })

  const router = useRouter();

  const submitHandler = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const { data: tokenData, error } = await authClient.token();
    // const token = tokenData?.token

    const token = await getTokenFromClient();

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
      copy: string;
    };
    // if (selectedFile) {
    //   const uploadedImage = await uploadFile(selectedFile);

    //   if (uploadedImage?.url) {
    //     bookData.bookImage = uploadedImage.url;
    //   }
    // }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/add-book`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...bookData,
          copy: Number(bookData.copy),
        }),
      },
    );
    const data = await response.json();

    if (data) {
      toast("Book added successfully");
      router.refresh();
      redirect("/allBooks");
    }
  };

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setSelectedFile(file);
  //     // Create a temporary local URL for previewing the image
  //     setPreviewUrl(URL.createObjectURL(file));
  //   }
  // };

  return (
    <div className="">
      <fieldset className="fieldset bg-[#e3d3ee] border-base-300 rounded-box  w-full max-w-[500px] border p-4">
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

          {/* {previewUrl && (
            <Image alt="Image " src={previewUrl} width={100} height={100} />
          )}

          <input
            type="file"
            accept="image/*" // Restricts file picker to images
            onChange={handleFileChange}
          /> */}

          {/* <input
            type="file"
            className="input w-full"
            placeholder="Book Image"
            name="image"
            accept="image"
          /> */}

          <label className="label">Short Description</label>
          <textarea
            className="border-0 w-full p-2 bg-white"
            name="description"
            rows={4}
            cols={50}
          />

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

          <label className="label ">Copies :</label>
          <input
            type="number"
            className="input w-full"
            defaultValue={0}
            // onChange={(event)=>setFormValue({...formValue, email : event.target.value})}

            name="copy"
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
