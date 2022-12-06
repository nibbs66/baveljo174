import React from 'react';
import Head from 'next/head'
import Schedule from "../components/Schedule"
import axios from 'axios'
import SmallSchedule from "../components/SmallSchedule";
const Index = ({games, club}) => {
    return (
        <div>
            <Head>
                <title>Bavel JO17-4</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`hidden md:flex md:items-center md:justify-center h-screen w-full`}>
               <Schedule  games={games} club={club}/>
            </div>
            <div className={`h-screen w-full md:hidden`}>
                <SmallSchedule  games={games} club={club}/>
            </div>

        </div>
    );
};

export default Index;
export async function getServerSideProps(ctx) {
    const host = ctx.req.headers.host;
    const res = await axios.get(`https://`+host+`/api/games`);
    const club = await axios.get(`https://`+host+`/api/club`);

    return {
        props: {
            games: res.data,
            club: club.data

        },
    }
}
