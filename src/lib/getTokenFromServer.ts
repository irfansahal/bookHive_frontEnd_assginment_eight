import { headers } from "next/headers";
import { auth } from "./auth";

export const getTokenFromServer = async ( ) => {
 const JWTToken = await auth.api.getToken({
     headers : await headers(),
    })
      
   
     const token = JWTToken?.token;
     
     console.log(token);  
     return token 
}
 
