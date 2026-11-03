

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProfileModal from '../components/nav/profileModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

interface PageLinks {
     name : string  , label : string , href : string , isActive : boolean
}

const pageLinks : PageLinks[] = [
{ name :  "Home" , label : "home" , href : "/" , isActive : true },
{ name :  " All Books" , label : "allBooks" , href : "/allBooks" , isActive : false },
{ name :  "Add Book" , label : "addbook" , href : "/addBook" , isActive : false },
{ name :  "My Books" , label : "myBooks" , href : "/myBooks", isActive : false },
{ name :  "My Borrows" , label : "myBorrows" , href : "/myborrows" , isActive : false}
]


const Navbar = async () => {
  
  const session = await auth.api.getSession({
    headers : await headers()
  })
  
   const user = session?.user

  return (
        
            <div className="max-lg:collapse fixed left-0 top-0 w-full z-50 h-[100px] bg-white lg:mb-0 shadow-sm w-full pt-5">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    <Image src="/BookHiveBeeandBookLogo.png" alt='logo' width={190} height={180} className='w-[170px] h-[60px]'/>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {pageLinks.map((link : PageLinks, index)=>{
           return <li key={index} className={link.isActive === true ? "underline" : "text-[#5f059f]"}><Link href={link.href} className='font-extrabold text-[16px]'>{link.name}</Link></li>
        })}
        {/* <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2 bg-base-100 w-40 z-1">
              <li><button>Submenu 1</button></li>
              <li><button>Submenu 2</button></li>
            </ul>
          </details>
        </li> */}
        {/* <li><button>Item 3</button></li> */}
      </ul>
    </div>
    <div className="navbar-end gap-3">
      {/* <input type="text" placeholder="Search" className="input w-64 lg:w-auto" /> */}
       <div className='flex gap-2'>
         {user ? <>
           <ProfileModal userImage={user.image}/> 
         </>: <>
         <button className="btn btn-neutral bg-[#5f059f] border-0"><Link href={'/sign-up'}>Sgin Up</Link></button>
        <button className="btn btn-outline btn-secondary"><Link href={'/sign-in'}>Sgin In</Link></button>
         </>}
       </div>
    </div>
  </div>

  <div className="collapse-content bg-white w-[300px] lg:hidden z-1">
    <ul className="menu">
      {pageLinks.map((link : PageLinks, index)=>{
           return <li key={index} className={link.isActive === true ? "underline" : "text-[#5f059f]"}><Link href={link.href} className='font-extrabold text-[16px]'>{link.name}</Link></li>
        })}
      {/* <li><button>Item 1</button></li> */}
      {/* <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li> */}
      {/* <li><button>Item 3</button></li> */}
    </ul>
  </div>
</div>
    );
};

export default Navbar;