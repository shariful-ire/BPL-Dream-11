import React from "react";
import { FaUser, FaFlag } from "react-icons/fa";

const PlayerCard = ({ player }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-3 shadow-sm hover:shadow-xl duration-300 w-[95%]">

      {/* Image */}
      <figure className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover"
          src={player.playerImage}
          alt={player.playerName}
        />
      </figure>

      {/* Name */}
      <h1 className="flex items-center gap-3 text-2xl font-bold mt-5 text-blue-800">
        <FaUser className="text-blue-800" />
        {player.playerName}
      </h1>

      {/* Country + Type */}
      <div className="flex justify-between items-center mt-2 text-blue-800">
        <p className="flex items-center gap-2 text-blue-800">
          <FaFlag />
          {player.playerCountry}
        </p>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-blue-800">
          {player.playerType}
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-5 text-blue-800"></div>

      {/* Rating */}
      <div className="space-y-3">
        <p className="font-bold text-lg text-blue-800">
          Rating: {player.rating}
        </p>

        <div className="flex justify-between">
          <p className="font-semibold text-amber-500 ">
            {player.battingStyle}
          </p>

          <p className="text-blue-800">
            {player.bowlingStyle}
          </p>
        </div>
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-6 text-blue-800">
        <h1 className="font-bold text-xl">
          Price: ${player.price}
        </h1>

        <button className="btn btn-outline rounded-xl text-blue-800">
          Choose Player
        </button>
      </div>

    </div>
  );
};

export default PlayerCard;