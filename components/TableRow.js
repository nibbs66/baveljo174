import React from 'react';
import Image from "next/image";

import Link from "next/link";
import { format, } from "date-fns";
const TableRow = ({club, games}) => {
console.log(games)


    return (
        <tbody className="divide-y divide-gray-200 ">
        {games.map((game, idx) => (
                <tr key={game._id}>


                    <td className={` align-middle text-center space-y-1 font-normal text-sm whitespace-nowrap px-2`}>
                        <div className="text-slate-700 font-semibold">{format(new Date(game.datum), 'dd MMM yyyy')}</div>
                        <div className="text-slate-700 font-semibold">{game.time} uur</div>

                    </td>
                    <td key={games._id} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="h-12 w-full flex-shrink-0 flex flex-col align-middle items-center whitespace-nowrap">
                            <div className={` h-12 w-12`}>
                                <Image className={` rounded-full object-contain `} src={game.img} height={50} width={50}  alt="" />
                            </div>

                        </div>
                    </td>
                    <td className={` align-middle text-center  space-y-1 text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>
                                <div>{game.naam}</div>
                                <div>{game.team}</div>
                        {/*game.naam+' '+game.team*/}

                    </td>
                    <td className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>
                        <span className="inline-flex text-center rounded-full px-2 text-sm font-semibold leading-5 ">
                          {game.thuis}
                        </span>
                    </td>
                    <td className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>{game.thuis ==='Thuis' ? club[0].club : game.club}</td>
                    <td className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>

                            {game.verzamelen} uur<span className="sr-only"></span>

                    </td>
                    <td  className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>
                        {game.thuis ? 'NA' : game.vervoer.length === 0 ? 'Fiets' : game.vervoer}
                    </td>

                    <td  className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>{game.vlaggen}</td>
                    <td  className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>{game.field}</td>
                    <td>
                        <div key={idx} className={` align-middle text-center  text-slate-700 font-semibold text-sm whitespace-nowrap px-2`}>
                            <Link href={`/westrijd/${game._id}`}>
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#00763b]/80 hover:bg-[#00763b] uppercase px-4 py-2 text-sm font-medium text-white shadow-xs  focus:outline-none  xs:w-auto"
                                >
                                    Meer
                                </button>
                            </Link>
                        </div>
                    </td>
                </tr>

            ))}





        </tbody>
    );
};

export default TableRow;
