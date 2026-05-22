import React, { use } from 'react';

const Players = ({ playerPromise }) => {

    const playerData = use(playerPromise);

    return (
        <div>

            <h1>Total players : {playerData.length}</h1>

            {
                playerData.map(player => (
                    <div key={player.id}>
                        <img src={player.playerImage}></img>
                        <h1>Name: {player.playerName}</h1>
                        
                        
                    </div>
                ))
            }

        </div>
    );
};

export default Players;