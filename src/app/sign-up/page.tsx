"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {

  const submitHandler = async (e : React.SubmitEvent<HTMLElement>) => {
     e.preventDefault();
     const formData = new FormData(e.target)
     const userData = Object.fromEntries(formData.entries())as { name : string , email : string , password : string , image : string };

       const hasUppercase = /[A-Z]/.test(userData.password)
          const hasLowercase = /[a-b]/.test(userData.password) 
          const hasMinimumLength = userData.password.length >= 6
          console.log(hasLowercase, hasUppercase, hasMinimumLength);
         
          if(!hasUppercase || !hasLowercase || !hasMinimumLength ){
            return toast.error("Your password has't an Uppercase or Lowercase or Minimum six cherecter")
          }
          
        
     console.log(userData);
     
     const { data , error } = await authClient.signUp.email({
       ...userData
     });

     if(data){
         toast("You successfully registared")
       redirect('/sign-in')
     }
     if(error){
        console.log(error);
        toast.error("some thing went wrong ")
     }
  }

  const googleHandler = async  () => {
    const data = await authClient.signIn.social({
        provider : "google"
    });

   if(data){
             toast("You sccessfully logged in")
             redirect("/")
         }
         if(!data){
           toast.error("something want wrong")
         }
  }
    
  const githubHandler = async () => {
     const data = await authClient.signIn.social({
         provider: "github"
     });

     if(data){
               toast("You sccessfully logged in")
               redirect("/")
           }
           if(!data){
             toast.error("something want wrong")
           }
  }
    return (
        <div>
            <div className="flex justify-center px-4 pt-5 pb-10 ">
                <div className="w-full max-w-[500px] flex flex-col items-center justify-center gap-3">
                    <h1 className='text-4xl text-[#5f059f] font-bold'>Create Account</h1>
                    <p className='font-bold'>Start Your Readin With BookHive</p>
                    <fieldset className="fieldset bg-[#e3d3ee] border-base-300 rounded-box w-full max-w-[500px] border p-4">
  {/* <legend className="fieldset-legend">Login</legend> */}

  <form onSubmit={submitHandler}>
    <label className="label">Name</label>
  <input type="text" className="input w-full" placeholder="Name" name='name'/>

  <label className="label ">Email</label>
  <input type="email" className="input w-full" placeholder="Email" name='email'/>

  <label className="label">Password</label>
  <input type="password" className="input w-full" placeholder="Password" name='password'/>

  <label className="label">Photo URL</label>
  <input type="type" className="input w-full" placeholder="Your Iamge Url" name="image"/>

  <button className="btn btn-neutral w-full bg-[#5f059f] mt-4" type='submit'>Sgin Up</button>
  </form>

  <div className="divider mt-4">Other option</div>

  <button className="btn btn-outline w-full border-2 border-[#5f059f] text-[#5f059f]" onClick={googleHandler}>Sign up with Google</button>
  <button className="btn btn-outline w-full border-2 border-[#5f059f] text-[#5f059f]"  onClick={githubHandler}>Sign up with GitHub</button>

  <div className='flex items-center justify-center py-3'>
   <h1 className='font-bold text-[16px] text-zinc-500'> Already have an account ? <span className='font-bold text-[#5f059f]'><Link href={'/sign-in'}>Sign In</Link></span></h1>
  </div>
</fieldset>
                </div>
            </div>
        </div>
    );
};

export default SignUp;