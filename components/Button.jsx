import React from 'react';
import {XCircleIcon} from '@heroicons/react/24/solid'
import {useRouter} from 'next/router'
const Button = ({signOut, title}) => {
    const router = useRouter()
    const handleClick = () => {
        if(signOut){
            signOut({ callbackUrl: '/admin' })
        }else{
            router.push(`/admin/scheduling`)
        }

    }
    return (
        <div className={`flex `}>
            <button
                className={`hidden lg:flex bg-white hover:bg-red-600 py-2 px-3 rounded leading-none text-black hover:text-white uppercase`}
                onClick={handleClick}
            >
                {title}
            </button>

            <button
                onClick={handleClick}
            >
                <XCircleIcon className={`h-8 w-8 text-white lg:hidden`}/>
            </button>
        </div>
    );
};

export default Button;
