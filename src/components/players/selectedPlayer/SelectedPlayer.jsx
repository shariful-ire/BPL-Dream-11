import PlayerCard from "../PlayerCard";


const SelectedPlayer = ({
  selectedPlayers,
  handleSelectPlayer
}) => {



  if(selectedPlayers.length === 0){

    return (

      <h2 className="text-2xl font-bold text-center">

        No Player Selected

      </h2>

    );

  }





  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] mx-auto">


      {
        selectedPlayers.map((player)=>(


          <PlayerCard

            key={player.id}

            player={player}

            handleSelectPlayer={handleSelectPlayer}

            isSelected={true}


          />


        ))
      }



    </div>


  );

};


export default SelectedPlayer;