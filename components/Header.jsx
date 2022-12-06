import React from 'react';
import useGames from '../pages/api/swr/useGames'
import {format} from "date-fns";
import { useSession, signOut } from "next-auth/react"
import Button from "./Button";

const Header = () => {
    const {data: session} = useSession()
    const {isValidating, nextGame} =  useGames()


    if(isValidating){
        return <span>Loading...</span>
    }

    return (
        <header className={`fixed flex py-5 px-5 items-center justify-center space-x-16 w-full  text-white bg-[#00763b]/80`}>
            {session?.user && <Button title={`Schedule`}  />}
            <span
                className={`lg:text-4xl text-center`}>Volgende Westrijd vs {nextGame[0]?.naam} {nextGame[0]?.team}</span>
                <span className={`lg:text-4xl text-center`}> {format(new Date(nextGame[0]?.datum), 'dd MMM yyyy')} {nextGame[0]?.time} uur!!</span>
            {session?.user && <Button title={`Logout`} signOut={signOut} />}
        </header>
    );
};

export default Header;
