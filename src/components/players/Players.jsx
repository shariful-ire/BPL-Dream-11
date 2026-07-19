import { use, useState } from "react";
import PlayerCard from "./PlayerCard";

const Players = ({ playerPromise }) => {
  const playerData = use(playerPromise);

  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectPlayer = (player) => {
    // একই player বারবার add হবে না
    const exists = selectedPlayers.find((p) => p.id === player.id);

    if (!exists) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <>
      {/* Heading */}
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

      {/* Player Cards */}

      {selectedType === "available" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] mx-auto">
          {playerData.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              handleSelectPlayer={handleSelectPlayer}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] mx-auto">
          {selectedPlayers.length === 0 ? (
            <h2 className="text-2xl font-bold">
              No Player Selected
            </h2>
          ) : (
            selectedPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                handleSelectPlayer={handleSelectPlayer}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Players;