import React from 'react';
import {XCircleIcon} from '@heroicons/react/24/solid'

const Logout = ({signOut}) => {
    const handleLogOut = () => {
        signOut({ callbackUrl: '/admin' })
    }
    return (
        <div className={`flex `}>
            <button
                className={`hidden lg:flex bg-white hover:bg-red-600 py-2 px-3 rounded leading-none text-black hover:text-white uppercase`}
            onClick={handleLogOut}
        >
            Logout
        </button>

            <button
                onClick={handleLogOut}
            >
                <XCircleIcon className={`h-8 w-8 text-white lg:hidden`}/>
            </button>
        </div>
    );
};

export default Logout;
