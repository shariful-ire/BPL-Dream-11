import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayers, handleDeleteSelectedPlayer }) => {
  if (selectedPlayers.length === 0) {
    return (
      <h2 className="text-2xl font-bold text-center h-[200px] mx-auto py-20">
        No Player Selected
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 w-[80%] mx-auto">
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className="flex w-full h-20 justify-between border-2 border-amber-50 rounded-xl p-2.5"
        >
          <div className="flex gap-4">
            <img src={player.playerImage} className="h-full rounded-lg" />

            <div className="flex justify-center flex-col">
              <div className="flex gap-2 items-center">
                <FaUser />

                <h2>{player.playerName}</h2>
              </div>

              <h2>{player.playerType}</h2>
            </div>
          </div>

          <button
            className="btn text-red-500 text-3xl"
            onClick={() => handleDeleteSelectedPlayer(player)}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayer;
