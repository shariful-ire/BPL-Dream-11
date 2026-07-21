import { FaUser, FaFlag } from "react-icons/fa";


const PlayerCard = ({ player, handleSelectPlayer, isSelected, coin,setCoin }) => {


  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">


      {/* Image */}
      <figure className="overflow-hidden">

        <img
          src={player.playerImage}
          alt={player.playerName}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />

      </figure>

      {/* Content */}
      <div className="p-5">


        {/* Name */}
        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800">

          <FaUser className="text-blue-600" />

          {player.playerName}

        </h2>

        {/* Country & Role */}
        <div className="flex justify-between items-center mt-4">


          <p className="flex items-center gap-2 text-gray-500">

            <FaFlag className="text-red-500" />

            {player.playerCountry}

          </p>

          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">

            {player.playerType}

          </span>

        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-5"></div>

        {/* Rating */}
        <h3 className="font-semibold text-lg text-gray-800 mb-3">

          Rating: ⭐ {player.rating}

        </h3>

        {/* Batting Bowling */}

        <div className="flex justify-between text-sm">


          <div>

            <p className="font-semibold text-gray-700">
              Batting
            </p>

            <p className="text-gray-500">
              {player.battingStyle}
            </p>

          </div>

          <div className="text-right">

            <p className="font-semibold text-gray-700">
              Bowling
            </p>

            <p className="text-gray-500">
              {player.bowlingStyle}
            </p>


          </div>


        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-6">


          <h2 className="text-xl font-bold text-green-600">

            ${player.price}

          </h2>

          <button


            onClick={ ()=>{handleSelectPlayer(player);
                      setCoin(coin-player.price);}}

            disabled={isSelected}

            className={`btn rounded-xl px-5 py-2 font-semibold

            ${
              isSelected
              ?
              "bg-gray-400 cursor-not-allowed"
              :
              "btn-primary bg-[#21f62f]"
            }

            `}
          >
            {
              isSelected?"Selected":"Choose Player"
              
            }

          </button>
        </div>
      </div>

    </div>
  );
};


export default PlayerCard;