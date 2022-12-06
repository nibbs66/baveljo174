import {useState, useCallback, useEffect} from 'react';

import {GoogleMap, useLoadScript} from '@react-google-maps/api';
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import axios from "axios";



const containerStyle = {
    width: '700px',
    height: '400px'
};

const Map = ({zoomLevel, game,  club}) => {

    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY
    })

    const [map, setMap] = useState(null)
    const [res, setRes] = useState(null)
    const [mode, setMode] = useState('DRIVING')
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')

    //pull origin and destination from db


    const onLoad =  useCallback (async function callback(map) {
        const geocoder =  new google.maps.Geocoder()
        let address;
            if(game.thuis === "Uit"){
                address = `${game.address}`+`${game.city}`
            }else{
                address = `${club[0].address}`+`${club[0].city}`
            }
        //const bounds = new window.google.maps.LatLngBounds(center);
        await geocoder.geocode({'address': address}, function(res,status){
            if(status === 'OK'){
                // center = res[0].geometry.location
                map.setCenter(res[0].geometry.location)
            }
        })
        map.setZoom(zoomLevel)
        setMap(map)
    },[])

    const onUnmount = useCallback(function callback(){
        setMap(null)
        setRes(null)
        setOrigin('')
        setDestination('')
    }, [])
    if(!isLoaded){
        return <span>Loading...</span>
    }
    const directionsCallback = (res) => {


        if(res !==null){
            if(res.status === 'OK'){
                setRes(res)

            }
        }else{
            console.log('response', res)
        }
    }





    const handleClick = () => {

        if(origin !== '' || destination !== ''){
            setOrigin('')
            setDestination('')
        }
        setOrigin('Deken Dr. Dirckxweg 4 Bavel')
        setDestination('Sportparkweg 4 Rijen')

    }
    if(!isLoaded){
        return <span>Loading...</span>
    }
    console.log(game.time)
    return (
        <div className={` bg-[#00763b]/80 p-10 rounded-lg drop-shadow-2xl`}>
           <div className={`flex justify-center py-4`}>
               <Link href={`/`}>
                   <button className={`flex items-center space-x-2 text-white text-xl  leading-none rounded`}><ArrowLeftIcon className={`h-5 w-5`}/>Terug</button>
               </Link>
           </div>
                <div className={`bg-[ghostwhite] flex justify-center space-x-8 text-slate-500 rounded-md p-2 mb-2`}>
                    <div>
                        {game.thuis === 'Uit' ? <>
                            <div><span><span className={`font-bold`}>Locatie</span>: {game.naam}</span></div>
                            <div><span><span className={`font-bold`}>Adres</span>: {game.address}{' '}{game.city}</span>
                            </div>
                            <div><span><span className={`font-bold`}>Westrijd</span>: {game.time} uur</span></div>
                        </> :
                            <>
                                <div><span><span className={`font-bold`}>Locatie</span>: {club[0].naam}</span></div>
                                <div><span><span className={`font-bold`}>Adres</span>: {club[0].address}{' '}{club[0].city}</span></div>
                                <div><span><span className={`font-bold`}>Westrijd</span>: {game.time} uur</span></div>
                            </>
                        }

                    </div>
                    <div>

                        <div><span><span className={`font-bold`}>Verzamelen</span>: {game.verzamelen} uur</span></div>
                        <div><span><span className={`font-bold`}>Waar</span>: De Huif </span></div>
                    </div>
                    <div>
                        {game.vervoer?.length > 0 && <div><span className={`font-bold`}>Vervoer:</span> <span> {game.vervoer}</span></div>}
                        <div><span className={`font-bold`}>Vlaggen:</span> <span>{game.vlaggen}</span></div>
                    </div>
                </div>


                <GoogleMap
                    mapContainerStyle={containerStyle}

                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >

                </GoogleMap>


        </div>
    );
};

export default Map;
/* checked={selected === 'PostNL'}
                                           value='PostNL'
                                           onChange={handleChange}/>*/
//
