const sports = [
  { id: 1, name: "Badminton", image: "/sports/badminton.jpg" },
  { id: 2, name: "Football", image: "/sports/football.jpg" },
  { id: 3, name: "Cricket", image: "/sports/cricket.jpg" },
  { id: 4, name: "Swimming", image: "/sports/swimming.jpg" },
  { id: 5, name: "Tennis", image: "/sports/tennis.jpg" },
  { id: 6, name: "Table Tennis", image: "/sports/tabletennis.jpg" },
];

const PopularSports = () => {
  return (
    <section className="px-4 lg:px-20 py-10 bg-white">
      <h2 className="text-xl font-semibold mb-6">Popular Sports</h2>

      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {sports.map((sport) => (
          <div
            key={sport.id}
            className="min-w-[100px] flex-shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={sport.image}
              alt={sport.name}
              className="h-28 w-full object-cover"
            />
            <div className="text-sm text-center py-2 bg-gray-50 font-medium">
              {sport.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSports;
