import {useEffect, useState} from 'react';
import {format, nextSaturday} from "date-fns";
import useGames from "../pages/api/swr/useGames";
import Loader from "./Loader";
import Image from "next/image";
const GameView = () => {
    const [game, setGame] = useState({})

    //console.log(nextGame)
    const { nextGame, isValidating} =  useGames()
console.log(nextGame)

    if( isValidating){
        return (
            <div className={`flex max-h-[calc(100vh - 128px)] w-screen bg-white items-center justify-center`}>
                <span><Loader/></span>
            </div>
        )
    }
    return (
       <div className={`w-full bg-white rounded-md drop-shadow-xl  m-auto py-2 px-4`}>
           <h1 className={`text-center text-lg md:text-xl`}>Volgende Westrijd: {format(new Date(nextGame[0]?.datum), 'dd MMM yyyy')} {nextGame[0]?.time} uur</h1>

           <div className={`flex justify-around text-sm md:text-base`}>
               <span>Verzamelen: {nextGame[0].verzamelen}</span>
               <span>Waar: {nextGame[0].thuis === "Uit" ? "De Huif" : "VV Bavel"}</span>
           </div>
           <div className={` flex items-center  justify-around`}>

               <div className={` p-4 grid`}>
                   <div className={`flex flex-col md:flex-row whitespace-nowrap items-center space-x-2`}>
                       <Image className={` rounded-full object-contain `} src={nextGame[0].img} height={40} width={40}  alt="" />
                       <span>{nextGame[0].naam} {nextGame[0].team}</span>
                   </div>
               </div>
               <div className={` p-4 text-center grid`}>
                   <span>Vs</span>
               </div>
               <div className={` p-4 grid`}>
                   <div className={`flex flex-col md:flex-row whitespace-nowrap items-center space-x-2`}>
                   <Image className={` rounded-full object-contain `} src={'https://www.vvbavel.nl/wp-content/uploads/vvbavel/2018/05/logo-512.png'} height={40} width={40}  alt="" />
                   <span>VV Bavel JO17-4</span>
                   </div>
               </div>
           </div>
           <div className={`flex justify-around text-sm md:text-base`}>
               <span>Veld: {nextGame[0].field}</span>
               <span>Vlaggen: {nextGame[0].vlaggen}</span>
               <span>Vervoer: {nextGame[0].vervoer.length > 0 ? nextGame[0].vervoer.map((ver, idx)=>(
                   <span key={idx}>
                                {ver},{' '}
                            </span>
               )) : nextGame[0].thuis === 'Thuis' ? 'NVT' :  'Fiets'}</span>
           </div>
           <div className={`flex flex-col items-center text-sm md:text-base`}>
               <span>Locatie: {nextGame[0].club}</span>
               <span>Adres: {nextGame[0].address} {nextGame[0].city}</span>

           </div>


       </div>
    );
};

export default GameView;
