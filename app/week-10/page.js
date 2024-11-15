"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const login = async () =>{
        await gitHubSignIn();
    };

    const logout = async () =>{
        await firebaseSignOut();
 
    };
    return(
        <main>
            <h1 className="text-3xl	">Shopping List App</h1>
            {user ? (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button onClick={logout} className="mr-2 p-2 border-2 text-black bg-white border-black rounded-lg w-36 hover:bg-sky-700">Logout</button>
                    <p>
                        <Link href={"/week-10/shopping-list"} className="hover:text-sky-700 hover:underline">
                            Continue to your Shopping List
                        </Link>
                    </p>
                </div>
            ) : (
                <button onClick={login} className="mr-2 p-2 border-2 text-black bg-white border-black rounded-lg w-36 hover:bg-sky-700 ">Login with Github</button>
            )}
            
        </main>
       
    );
}
