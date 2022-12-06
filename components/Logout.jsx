import React from 'react';


const Logout = ({signOut}) => {
    const handleLogOut = () => {
        signOut({ callbackUrl: '/admin' })
    }
    return (
        <div>
            <button
                className={`bg-white hover:bg-red-600 py-2 px-3 rounded leading-none text-black hover:text-white uppercase`}
            onClick={handleLogOut}
        >
            Logout
        </button>
        </div>
    );
};

export default Logout;
