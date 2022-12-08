import {useState} from 'react';
import Header from "../Header";
import AdminButtons from "../AdminButtons";

const Layout = ({children}) => {
    const [open, setOpen] = useState(false)
    return (
      <div className={`relative`}>
          <AdminButtons open={open} setOpen={setOpen}/>
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
