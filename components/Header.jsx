import React from 'react';
import useGames from '../pages/api/swr/useGames'
import {format} from "date-fns";

const Header = () => {

    const {isValidating, nextGame} =  useGames()
   console.log(nextGame)

    if(isValidating){
        return <span>Loading...</span>
    }
    return (
        <header className={`fixed flex py-5 px-5 justify-center space-x-16 w-full  text-white bg-[#00763b]/80`}>
            <span
                className={`lg:text-4xl text-center`}>Volgende Westrijd vs {nextGame[0]?.naam} {nextGame[0]?.team}</span>
            <span className={`lg:text-4xl text-center`}> {format(new Date(nextGame[0]?.datum), 'dd MMM yyyy')} {nextGame[0]?.time} uur!!</span>
        </header>
    );
};

export default Header;
