import DiscoverGames from "../components/games/DiscoverGames";
import PopularSports from "../components/popularSports/PopularSports";
import Spotlight from "../components/spotlight/SpotLight";
import VenueCarousel from "../components/venueCarousal/VenueCarousal";

const MainContent = () => {
  return (
    <>
      <div className="px-4 lg:px-20 py-10 bg-gray-100">
          <div className="max-w-7xl mx-auto mt-6 rounded-2xl bg-white shadow-sm p-4 space-y-6">
          <VenueCarousel />
          <DiscoverGames />
          <PopularSports />
        </div>
      </div>
      <Spotlight />
    </>
  );
};

export default MainContent;
