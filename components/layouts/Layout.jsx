import React from 'react';

const Layout = ({children}) => {
    return (
        <div className={`relative bg-bgImg  bg-[#00763b]/70 bg-fixed bg-center bg-contain  bg-no-repeat `}>
            <main>
                {children}
            </main>

        </div>
    );
};

export default Layout;
