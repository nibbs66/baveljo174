import {useState} from 'react';
import Header from "../Header";
import AdminButtons from "../AdminButtons";
import { useSession, signOut } from "next-auth/react"
const Layout = ({children}) => {
    const {data: session} = useSession()
    return (
      <div className={`relative`}>
          {session?.user && <AdminButtons signOut={signOut}/>}
          <div className={` bg-bgImg  bg-[#00763b]/70 bg-fixed bg-center bg-contain  bg-no-repeat `}>
             <div className={`relative z-20`}>
                 <Header/>
             </div>
              <main>
                  {children}
              </main>

          </div>
      </div>
    );
};

export default Layout;
