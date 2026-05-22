import React, { use } from "react";
import { FaUser } from "react-icons/fa";

const Players = ({ playerPromise }) => {
  const playerData = use(playerPromise);

  return (
    <div>
      <h1>Total players : {playerData.length}</h1>

      {playerData.map((player) => (
        <div key={player.id}>
          <div className="$$card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={player.playerImage} alt="Player Image" />
            </figure>
            <h1 className="flex gap-2 items-center text-center m-1.5 my-auto">
              <FaUser />
              {player.playerName}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
