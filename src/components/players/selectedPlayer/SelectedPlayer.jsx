{
  /* <PlayerCard

            key={player.id}

            player={player}

            handleSelectPlayer={handleSelectPlayer}

            isSelected={true}


          />


        )) */
}

import PlayerCard from "../PlayerCard";
import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayers, handleSelectPlayer }) => {
  if (selectedPlayers.length === 0) {
    return (
      <h2 className="text-2xl font-bold text-center h-[200px] mx-auto py-20">
        No Player Selected
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 w-[80%] mx-auto ">
      {selectedPlayers.map((player, index) => (
        <div key={index} className="flex w-[100%] h-20 my-auto justify-between border border-2 border-amber-50 my-auto rounded-xl p-2.5">
          <div className="flex">
            <div>
              <img src={player.playerImage} className="max-h-full"></img>
            </div>

            <div className="flex gap-2 my-auto">
              <FaUser />
              <h2>{player.playerName}</h2>
            </div>
          </div>
          <button className="pr-6">
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayer;
