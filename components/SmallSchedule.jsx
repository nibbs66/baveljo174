import {useState} from 'react';
import Image from 'next/image'
import {format, nextSaturday} from "date-fns";
import Link from "next/link";
const SmallSchedule = ({games}) => {

    return (
        <div className={`flex items-center justify-center h-screen pt-24`}>
           <table className={`bg-white/90 rounded table-auto border-separate`}>
               <thead className={`text-xs`}>
               <tr >
                   <th>Datum</th>
                   <th>Tegen</th>
                   <th>Thuis/Uit</th>
                   <th>Westrijd</th>
                   <th>Vervoer</th>
                   <th>Vlaggen</th>
                   <th>Informatie</th>
               </tr>
               </thead>
               <tbody className={`text-xs`}>
               {games.map((game)=>(
                   <tr key={game._id}>
                       <td>{format(new Date(game.datum), 'dd/M/yy')}</td>
                       <td className={`text-center`}>
                           <div>
                               <Image className="flex items-center justify-center h-8 w-8 rounded-full object-contain" src={game.img} height={30} width={30} alt="" />
                           </div>

                       </td>
                       <td className={`text-center`}>
                           {game.thuis}
                       </td>
                       <td className={`text-center`}>
                           {game.time}
                       </td>
                       <td className={`text-center`}>
                           {game.vervoer.length > 0 ? game.vervoer.map((ver, idx)=>(
                               <span key={idx}>
                                {ver},{' '}
                            </span>
                           )) : game.thuis === 'Thuis' ? 'NVT' :  'Fiets'}
                       </td>
                       <td className={`text-center`}>
                           {game.vlaggen}
                       </td>
                       <td className={`text-center`}>
                           <Link href={`/westrijd/${game._id}`}>
                           <button
                                   type="button"
                                   className=" items-center justify-center rounded-md border border-transparent bg-[#00763b]/80 hover:bg-[#00763b] px-2 py-0.5 text-xs font-medium text-white shadow-xs focus:outline-none "
                           >
                               Meer
                           </button>
                           </Link>
                       </td>
                   </tr>
               ))}
               </tbody >



           </table>
        </div>
    );
};

export default SmallSchedule;
