import React from 'react';
import {useRouter} from 'next/router'
import Map from '../../components/Map'
import SmallMap from "../../components/SmallMap";
import axios from "axios";
const Game = ({game, club}) => {

    return (
      <>
          <div className={`hidden md:flex h-screen  justify-center items-center py-10`}>
             <Map zoomLevel={17} game={game}  club={club}/>
          </div>
          <div className={` flex h-screen  justify-center items-center py-10 md:hidden`}>
             <SmallMap zoomLevel={17} game={game} club={club}/>
          </div>
      </>
    );
};

    export default Game;
export const getServerSideProps = async (ctx) =>{

    const host = ctx.req.headers.host;
console.log(ctx.params.id)
            const res = await axios.get(`https://`+host+`/api/games?game=${ctx.params.id}`)
            const club = await axios.get(`https://`+host+`/api/club`)
        return{
            props:{
                game: res.data,
                club: club.data

            }
        }

    }
