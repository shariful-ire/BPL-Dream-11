import  { use } from "react";
import PlayerCard from "./PlayerCard";

const Players = ({ playerPromise }) => {

  const playerData = use(playerPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-[80%] mx-auto">

      {playerData.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}

    </div>
  );
};

export default Players;