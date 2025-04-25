import React from "react";
import { spotlightItems } from "../../assets/spolightImages/spotlight";

const Spotlight = () => {
  return (
    <section className="mt-10 px-4">
      <h2 className="text-xl font-semibold mb-4">Spotlight</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {spotlightItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] sm:min-w-[250px] bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
