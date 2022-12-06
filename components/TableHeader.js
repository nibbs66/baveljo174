import React from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th  className="px-2 border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1 `}>
                    Datum
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Tegenstander
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer  pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Naam
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Thuis/Uit
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer  pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Locatie
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer  pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Verzamelen
                </div>
            </th>

            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Veroever
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer  pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Vlaggen
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Veld
                </div>
            </th>
            <th  className="px-2 align-middle border-b border-solid border-gray-200  text-sm whitespace-nowrap cursor-pointer pt-8 pb-2">
                <div className={`flex justify-center items-center gap-1`}>
                    Informatie
                </div>
            </th>

        </tr>
        </thead>
    );
};

export default TableHeader;
