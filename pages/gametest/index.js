import React from 'react';
import GameView from "../../components/GameView";

const Index = () => {
    return (
        <div className={`h-screen w-full flex items-center justify-center`}>
            <div className={`md:w-1/2`}>
                <GameView/>
            </div>

        </div>
    );
};

export default Index;
