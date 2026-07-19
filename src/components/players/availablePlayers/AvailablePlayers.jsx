import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players, handleSelectPlayer }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] mx-auto">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          handleSelectPlayer={handleSelectPlayer}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;