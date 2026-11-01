"use client"
import { MyBook } from "@/app/myBooks/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { toast } from "react-toastify"


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

const Dailog = ({book } : { book : MyBook }) => {

const [ formValue , setFormValue ] = useState<MyBook>({
       authorName: book.authorName,
    bookImage : book.bookImage ,
    booktitle : book.booktitle ,
    category : book.category ,
    description : book.description ,
    email : book.email ,  
    name : book.name, 
    _id : book._id,
    createdAt : book.createdAt
     })


      const submitHandler = async (e :React.SubmitEvent<HTMLElement>) => {
       e.preventDefault()  
      console.log("jlkflsdfj")

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
              `${process.env.NEXT_PUBLIC_API_URL}/update-book/${book._id}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
              },
            );
            const data = await response.json();
        
            if (data) {
              toast("Book added successfully");
            }
    }



    return (
      
 <Dialog >
        <DialogTrigger render={<button  className="cursor-pointer rounded border border-[#5f059f] px-4 py-2 text-sm font-medium text-[#5f059f] transition-colors hover:bg-[#5f059f] hover:text-white"> Edit </button>} />
        <DialogContent className="sm:max-w-sm  max-h-[85vh] overflow-y-auto bg-white text-black border border-zinc-200">
          <DialogHeader >
            <DialogTitle className="text-[#5f059f] font-bold">Update Book Information</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>
           <form onSubmit={submitHandler}>
          <FieldGroup >
             <Field>
              <Label htmlFor="name-1">Book Title</Label>
              <Input id="bookTitle" name="bookTitle" defaultValue="Pedro Duarte" 
              value={formValue.booktitle}
             onChange={(event  )=>setFormValue({...formValue , booktitle : event.target.value})}
              />
            </Field>
            <Field>
              <Label htmlFor="authorName">AuthorName</Label>
              <Input id="authorName" name="authorName" defaultValue="Pedro Duarte" 
              value={formValue.authorName}
           onChange={(event  )=>setFormValue({...formValue , authorName : event.target.value})}
              />
            </Field>

             <Field>
                <Label htmlFor="category" >
                  Category
                </Label>
                <Select  name="category"
                //  defaultValue="beach"
                  value={formValue.category}
                  onValueChange={(value )=> setFormValue({...book, category : value ?  value : ""})}
                >
                  <SelectTrigger
                    id="category"
                    className={``}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {bookCategories.map((item , index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            <Field>
              <Label htmlFor="bookImage">Book Image</Label>
              <Input id="bookImage" name="bookImage" defaultValue="Pedro Duarte" 
              value={formValue.bookImage}
           onChange={(event  )=>setFormValue({...formValue , bookImage : event.target.value})}
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" defaultValue="@peduarte" 
              value={formValue.email}
           onChange={(event  )=>setFormValue({...formValue , email : event.target.value})}
              />
            </Field>

             <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue="@peduarte" 
              value={formValue.name}
           onChange={(event  )=>setFormValue({...formValue , name : event.target.value})}
              />
            </Field>
          </FieldGroup>
            <Button type="submit" className="mt-5">Save changes</Button>
           </form>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
          </DialogFooter>
        </DialogContent>
      
    </Dialog>
    );
};


export default Dailog;




  
  // className="btn btn btn-outline border-[#5f059f] text-[#5f059f]"

       