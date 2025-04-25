import { FaMapMarkerAlt } from "react-icons/fa";

const games = [
  {
    id: 1,
    title: "Only 2 slots",
    type: "Singles · Regular",
    host: "Vikay | 219 Karma",
    date: "Wed, 24 Apr 2025",
    time: "10:00 AM – 12:00 AM",
    venue: "Girinagar, Basavanak",
    distance: "6.18 Kms",
    level: "Intermediate - Advance",
  },
  {
    id: 2,
    title: "Pro Going",
    type: "Half Court · Regular",
    host: "Syed | 104 Karma",
    date: "Wed, 24 Apr 2025",
    time: "06:00 PM – 07:00 PM",
    venue: "Shanti Nagar",
    distance: "1.62 Kms",
    level: "Beginner - Professional",
  },
  {
    id: 3,
    title: "4 Going",
    type: "Doubles · Regular",
    host: "Sattma | 23100 Karma",
    date: "Wed, 24 Apr 2025",
    time: "07:00 PM – 08:00 PM",
    venue: "Krishna Premier",
    distance: "4.89 Kms",
    level: "Beginner - Professional",
  },
];

const DiscoverGames = () => {
  return (
    <section className="px-4 lg:px-20 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Discover Games</h2>
        <a href="#" className="text-green-600 text-sm hover:underline">
          SEE ALL GAMES
        </a>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {games.map((game) => (
          <div
            key={game.id}
            className="min-w-[300px] bg-white border rounded-xl p-4 shadow-sm"
          >
            <div className="text-xs text-gray-600 mb-1">{game.type}</div>
            <div className="text-sm font-semibold text-yellow-600 mb-2">
              {game.title}
            </div>
            <p className="text-sm text-gray-700 mb-1">{game.host}</p>
            <p className="text-xs text-gray-500">
              {game.date}, {game.time}
            </p>
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <FaMapMarkerAlt className="mr-1" />
              {game.venue} • {game.distance}
            </div>
            <div className="mt-2 inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              {game.level}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverGames;
