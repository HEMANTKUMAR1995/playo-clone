import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-white py-10 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        {/* Location Selector */}
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 w-fit shadow-sm">
          <FaMapMarkerAlt className="text-gray-600" />
          <span>Bangalore</span>
        </div>

        {/* Heading + Subtext */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          FIND PLAYERS & VENUES NEARBY
        </h1>
        <p className="text-gray-500">
          Seamlessly explore sports venues and play with sports enthusiasts just
          like you!
        </p>
      </div>

      {/* Right Image Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        <img
          src="https://playo-website.gumlet.io/playo-website-v3/hero/hero_left.png"
          alt="Basketball"
          className="rounded-lg h-40 w-full object-cover"
        />
        <img
          src="https://playo-website.gumlet.io/playo-website-v3/hero/hero_right_top.png"
          alt="Badminton"
          className="rounded-lg h-40 w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=60"
          alt="Soccer"
          className="rounded-lg h-40 w-full object-cover col-span-2"
        />
      </div>
    </section>
  );
};

export default Hero;
