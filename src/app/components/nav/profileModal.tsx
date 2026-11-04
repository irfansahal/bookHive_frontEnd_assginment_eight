"use client"
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProfileModal = ({userImage , userName } : { userImage : string | undefined | null , userName : string}) => {
    console.log(userImage);
    console.log("profile",userName);
    
    const router = useRouter()

    const logoutHandeler = async () => {
      console.log("You currectly hit the button ");
      await authClient.signOut();
      router.refresh()
    }

    return (
        <div>
             <DropdownMenu>
      <DropdownMenuTrigger render={
           <button className="avatar avatar-placeholder cursor-pointer">
        <div className="avatar avatar-placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <Image src={userImage || "/image_992be07a.jpg"} alt="avater" width={100} height={100}  unoptimized
  className="rounded-full object-cover"/>
  </div>
</div>
</button>
} />
      <DropdownMenuContent>
        <Link href={'/myProfile'}>
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <span className="text-blue-600">{userName}</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={logoutHandeler}>
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
    );
};

export default ProfileModal;