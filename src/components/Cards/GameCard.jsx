// src/components/GameCard.jsx
const GameCard = ({ game }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 space-y-2">
      <div className="text-sm text-gray-500">{game.title}</div>
      <div className="font-medium text-lg">{game.players}</div>
      <div className="text-sm text-gray-600">
        {game.name} | <span className="text-green-500">{game.karma}</span>
      </div>
      <div className="text-sm">{game.datetime}</div>
      <div className="text-sm text-gray-600">
        {game.location} – {game.distance}
      </div>
      <div className="text-xs mt-1 bg-gray-100 inline-block px-2 py-1 rounded-full">
        {game.skill}
      </div>

      {game.status && (
        <div
          className={`text-xs px-2 py-1 rounded-full w-fit mt-1 ${
            game.status === "BOOKED"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {game.status}
        </div>
      )}
    </div>
  );
};

export default GameCard;
