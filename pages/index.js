import React from 'react';
import Head from 'next/head'

const Index = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`hidden md:flex md:items-center md:justify-center h-screen w-full`}>
                hidden 3
            </div>
            <div className={`h-screen w-full md:hidden`}>
                hidden
            </div>

        </div>
    );
};

export default Index;
