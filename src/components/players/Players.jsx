import { use, useState } from "react";


import AvailablePlayers 
from "./availablePlayers/AvailablePlayers";


import SelectedPlayer 
from "./selectedPlayer/SelectedPlayer";



const Players = ({ playerPromise }) => {


  const playerData = use(playerPromise);



  const [selectedType,setSelectedType] = useState("available");



  const [selectedPlayers,setSelectedPlayers] = useState([]);






  const handleSelectPlayer = (player)=>{


    const exists = selectedPlayers.find(
      (p)=>p.id === player.id
    );



    if(exists){

      return;

    }



    setSelectedPlayers([
      ...selectedPlayers,
      player
    ]);


  };







  return (

    <>


      {/* Heading */}

      <div className="flex my-5 w-[80%] mx-auto justify-between items-center">


        <h2 className="font-bold text-4xl">


          {
            selectedType === "available"
            ?
            "Available Players"
            :
            `Selected Players (${selectedPlayers.length})`
          }


        </h2>





        <div className="flex gap-4">



          <button

            onClick={()=>setSelectedType("available")}

            className={`btn ${
              selectedType==="available"
              ?
              "bg-[#E7FE29] text-black"
              :
              "bg-gray-300"
            }`}

          >

            Available

          </button>





          <button

            onClick={()=>setSelectedType("selected")}

            className={`btn ${
              selectedType==="selected"
              ?
              "bg-[#E7FE29] text-black"
              :
              "bg-gray-300"
            }`}

          >

            Selected ({selectedPlayers.length})

          </button>



        </div>


      </div>








      {
        selectedType === "available"


        ?

        <AvailablePlayers


          players={playerData}


          handleSelectPlayer={handleSelectPlayer}


          selectedPlayers={selectedPlayers}


        />



        :


        <SelectedPlayer


          selectedPlayers={selectedPlayers}


          handleSelectPlayer={handleSelectPlayer}


        />



      }



    </>

  );
};



export default Players;