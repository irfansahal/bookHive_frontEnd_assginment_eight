import React from "react";
import Image from "next/image";
import { CameraIcon, MapPinIcon, PencilIcon } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export interface User {
 id: string;
 createdAt: Date;
 updatedAt: Date;
 email: string;
 emailVerified: boolean;
 name: string;
 image?: string | null | undefined;
}  
/* Content only — no links, no handlers */
const ProfileSection = async() => {
   const session = await auth.api.getSession({
        headers : await headers()
     });

     const user : User | undefined = session?.user

  
  return (
    <section className="flex flex-col gap-8">
      {/* heading + subheading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-light text-zinc-900 md:text-5xl">
          My Profile
        </h1>
        <p className="text-sm text-zinc-500 md:text-base">
          Manage your account settings and travel preferences
        </p>
      </div>

      {/* profile card */}
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        {/* first div — avatar + header + subheader */}
        <div className="flex flex-col items-center gap-3">
          {/* avatar with camera badge */}
          <div className="relative">
            <Image
              src={user?.image || ""}
              alt="Profile photo"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover"
            />
            <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#5f059f] text-white">
              <CameraIcon className="h-4 w-4" />
            </span>
          </div>

          {/* header */}
          <h2 className="text-xl font-semibold text-zinc-900">
            {user?.name}
          </h2>

          {/* subheader */}
          <p className="flex items-center gap-1 text-sm text-zinc-500">
            {/* <EmailIcon className="h-4 w-4 text-zinc-400" /> */}
            <span className="h-4 w-4 text-zinc-400">@</span>
            {user?.email}
          </p>
        </div>

        {/* second div — two information + button */}
        <div className="flex flex-col gap-3">
          {/* information rows */}
          <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
            <span className="text-sm text-zinc-500">Member since</span>
            <span className="text-sm font-semibold text-zinc-900">{user?.createdAt.toLocaleDateString("en-US",{    
        day : "numeric",
        month : "long",
        year : "numeric"})}</span>
          </div>
          <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
            <span className="text-sm text-zinc-500">Nationality</span>
            <span className="text-sm font-semibold text-zinc-900">
              United States
            </span>
          </div>

          {/* edit profile button */}
          <button
            type="button"
            className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#5f059f] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#128a9c]"
          >
            <PencilIcon className="h-4 w-4" />
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
