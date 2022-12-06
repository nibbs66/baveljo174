import {useState} from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Schedule({games, club}) {

    const [showModal, setShowModal] = useState(false)
    return (
        <div className="px-4 sm:px-6 lg:px-8  ">


            <div >
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block w-screen py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-slate-500 bg-white/90">
                                <TableHeader/>
                                <TableRow  games={games} club={club}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
