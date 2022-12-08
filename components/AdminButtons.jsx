import React from 'react';
import {XCircleIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
const AdminButtons = ({open, setOpen}) => {
    const {data: session} = useSession()
    const handleClick = () => {

            signOut({ callbackUrl: '/admin' })
    }
    //       {session?.user &&
    return (
        <>
            {session?.user && <div className={`container fixed left-4 bottom-6 flex space-x-2`}>
                <Link href={`/admin/scheduling`}>
                    <div    className={` flex text-white font-bold uppercase items-center justify-center  h-12 w-12 border-4 border-[ghostwhite] rounded-full bg-blue-500 hover:bg-indigo-700 drop-shadow-lg cursor-pointer z-50`}>
                        S
                    </div>
                </Link>
                <button  onClick={handleClick}  className={` flex items-center justify-center  h-12 w-12 border-4 border-[ghostwhite] rounded-full bg-blue-500 hover:bg-indigo-700 drop-shadow-lg cursor-pointer z-50`}>
                    <XCircleIcon className={`h-12 w-12 text-white `}/>
                </button>

            </div> }
        </>
    );
};

export default AdminButtons;
/*<div className={`fixed flex items-center justify-center left-4 bottom-10 h-12 w-12 border border-[ghostwhite] rounded-full bg-blue-500 drop-shadow-lg cursor-pointer z-50`}>
                   <Cookie className={`text-slate-400 z-50`}/>
               </div>*/
