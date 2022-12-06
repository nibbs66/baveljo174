import React from 'react';
import {useRouter} from 'next/router'
import Map from '../../components/Map'
import SmallMap from "../../components/SmallMap";
import axios from "axios";
const Game = ({game, club}) => {

    return (
      <main >
          <div className={`hidden lg:flex h-screen  justify-center items-center py-10`}>
              <Map zoomLevel={17} game={game}  club={club}/>
          </div>
          <div className={` flex min-h-screen  justify-center items-center py-10 lg:hidden `}>
             <SmallMap zoomLevel={17} game={game} club={club}/>
          </div>
      </main>
    );
};

    export default Game;
export const getServerSideProps = async (ctx) =>{

    const host = ctx.req.headers.host;
console.log(ctx.params.id)
            const res = await axios.get(`http://`+host+`/api/games?game=${ctx.params.id}`)
            const club = await axios.get(`http://`+host+`/api/club`)
        return{
            props:{
                game: res.data,
                club: club.data

            }
        }

    }
