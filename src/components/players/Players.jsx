import { use, useState } from "react";

import { toast } from "react-toastify";

import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayer from "./selectedPlayer/SelectedPlayer";

const Players = ({ playerPromise, setCoin, coin }) => {
  const playerData = use(playerPromise);

  const [selectedType, setSelectedType] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectPlayer = (player) => {
    const exists = selectedPlayers.find((p) => p.id === player.id);

    if (exists) {
      toast.warning("Player already selected!");

      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
  };

  const handleDeleteSelectedPlayer = (player) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id !== player.id);

    setSelectedPlayers(remainingPlayers);

    // refund coin
    setCoin(coin + player.price);

    toast.warning(`${player.playerName} Removed Successfully!`);
  };

  return (
    <>
      <div className="flex my-5 w-[80%] mx-auto justify-between items-center">
        <h2 className="font-bold text-4xl">
          {selectedType === "available"
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length})`}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${
              selectedType === "available"
                ? "bg-[#E7FE29] text-black"
                : "bg-gray-300"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${
              selectedType === "selected"
                ? "bg-[#E7FE29] text-black"
                : "bg-gray-300"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          players={playerData}
          handleSelectPlayer={handleSelectPlayer}
          selectedPlayers={selectedPlayers}
          setCoin={setCoin}
          coin={coin}
        />
      ) : (
        <SelectedPlayer
          selectedPlayers={selectedPlayers}
          handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
          setSelectedType={setSelectedType}
        />
      )}
    </>
  );
};

export default Players;
