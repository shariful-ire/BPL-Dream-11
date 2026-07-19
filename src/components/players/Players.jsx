import  { use, useState } from "react";
import PlayerCard from "./PlayerCard";


const Players = ({ playerPromise }) => {

  
const [selectedType, setSelectedType]= useState("available");
console.log(selectedType, "selectedType");

  const playerData = use(playerPromise);

  return (
    <>
    <div className="flex my-5 border-8 w-[80%] mx-auto  justify-between">
      <h2 className="font-bold text-4xl">Avaiable Players</h2>
      <div  className="flex gap-4">
        <button 
        onClick={()=> setSelectedType("available")}

        className={`btn btn-active btn-primary ${selectedType==="available"? "bg-[#E7FE29] text-black":"bg-gray-500"} `}>
        Available</button>

        <button 
        onClick={()=> setSelectedType("selected")}
        className={`btn btn-active btn-primary ${selectedType==="selected"? "bg-[#E7FE29] text-black":"bg-gray-500"} `}>
        SelecTed</button>
      </div>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-[80%] mx-auto">


    

      {playerData.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}

    </div>

    </>
  );
};

export default Players;