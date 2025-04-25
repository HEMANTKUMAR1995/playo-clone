import React from "react";

const Cities = () => {
  const cities = [
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Mumbai",
    "Delhi NCR",
    "Kochi",
    "Gurugram",
    "Dubai",
    "Austin",
    "Vizag",
    "Doha",
  ];
  return (
    <div>
      {/* App Download */}
      <section className="bg-green-600 text-white mt-10 px-4 py-6 text-center rounded-xl mx-4">
        <h2 className="text-lg font-semibold">
          Get the Playo app for a seamless experience!
        </h2>
        <div className="mt-4 flex justify-center gap-4">
          <img src="/images/google-play.png" className="h-10" />
          <img src="/images/app-store.png" className="h-10" />
        </div>
      </section>

      {/* City Dropdowns */}
      <section className="mt-10 px-4">
        <h2 className="text-lg font-semibold mb-3">
          Top Sports Complexes in Cities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city, idx) => (
            <select key={idx} className="p-2 border rounded w-full text-sm">
              <option>{city}</option>
              <option>Venue 1</option>
              <option>Venue 2</option>
            </select>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cities;
