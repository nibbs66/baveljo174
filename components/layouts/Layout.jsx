import React from 'react';
import Header from "../Header";

const Layout = ({children}) => {
    return (
        <div className={`relative bg-bgImg  bg-[#00763b]/70 bg-fixed bg-center bg-contain  bg-no-repeat `}>
            <Header/>
            <main>
                {children}
            </main>

        </div>
    );
};

export default Layout;
