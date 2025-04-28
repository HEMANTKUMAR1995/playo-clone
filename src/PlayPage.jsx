// src/pages/PlayPage.jsx
import GameCard from "../components/Cards/GameCard";

const games = [
  {
    id: 1,
    title: "10K | Regular",
    players: "1 Going",
    name: "ANAND",
    karma: "890 Karma",
    datetime: "Sun, 27 Apr 2025, 06:00 AM - 07:00 AM",
    location: "Cubbon Park Metro En...",
    distance: "~1.07 Kms",
    skill: "Beginner - Professional",
    status: "",
  },
  {
    id: 2,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 3,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 4,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 5,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 6,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 7,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 8,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 9,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  {
    id: 10,
    title: "9 A Side | Regular",
    players: "3/7 Going",
    name: "OUTPLAY",
    karma: "6556 Karma",
    datetime: "Fri, 25 Apr 2025, 11:00 PM - 12:00 AM",
    location: "Bangalore Football S...",
    distance: "~1.87 Kms",
    skill: "Beginner - Professional",
    status: "BOOKED",
  },
  // add more game objects here...
];

const PlayPage = () => {
  return (
    <div className="pt-24 px-6 bg-gray-200">
      <div className="flex ml-64
      +6- gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg w-96">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Play Store"
          className="h-10"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-10"
        />
      </div>
      <div className="flex flex-wrap gap-3 items-center mb-6 justify-center">
        <h1 className="grid grid-cols-1 text-2xl font-semibold mb-4">
          Games in Bangalore
        </h1>
        <button className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg">
          GameTime by Playo
        </button>
        <button className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg">
          Filter & Sort By
        </button>
        <button className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg">
          🏅 Sports
        </button>
        <button className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg">
          📅 Date
        </button>
        <button className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg">
          💳 Pay & Join Game
        </button>
      </div>

      {/* Game Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default PlayPage;
