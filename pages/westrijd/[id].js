import React from 'react';
import {useRouter} from 'next/router'
import Map from '../../components/Map'
import SmallMap from "../../components/SmallMap";
import axios from "axios";
const Game = ({ game }) => {

    return (
      <main >
          <div className={`hidden lg:flex h-screen  justify-center items-center pt-24 `}>
              <Map zoomLevel={17} game={game} />
          </div>
          <div className={` flex min-h-screen  justify-center items-center py-10 lg:hidden `}>
             <SmallMap zoomLevel={17} game={game} />
          </div>
      </main>
    );
};

    export default Game;
export const getServerSideProps = async (ctx) =>{

    const host = ctx.req.headers.host;
console.log(ctx.params.id)
            const res = await axios.get(`http://`+host+`/api/games?game=${ctx.params.id}`)

        return{
            props:{
                game: res.data,


            }
        }

    }
