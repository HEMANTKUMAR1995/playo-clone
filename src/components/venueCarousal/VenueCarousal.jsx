import { FaStar } from "react-icons/fa";

const venues = [
  {
    id: 1,
    title: "Nisha Millets Swimming",
    location: "Sports Block (behind F...)",
    rating: 5.0,
    reviews: 2,
    distance: "1.62 Kms",
    image:
      "https://images.unsplash.com/photo-1603262110263-3f2b1e64beaa?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Depot18 - Sports",
    location: "Chamundi Hotel Compound...",
    rating: 5.0,
    reviews: 9,
    distance: "2.84 Kms",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Game Theory - Joseph’s",
    location: "Vittal Mallya Rd...",
    rating: 5.0,
    reviews: 8,
    distance: "0.13 Kms",
    image:
      "https://images.unsplash.com/photo-1584466977779-bf8e5c55a1c4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Wellness Sports Inc",
    location: "Bhavya Plaza",
    rating: 5.0,
    reviews: 4,
    distance: "0.47 Kms",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60",
  },
];

const VenueCarousel = () => {
  return (
    <section>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Book Venues</h2>
        <a href="#" className="text-green-600 text-sm hover:underline">
          SEE ALL VENUES
        </a>
      </div>

      {/* Scrollable Card Row */}
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={venue.image}
              alt={venue.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-3 space-y-1">
              <h3 className="font-medium text-sm truncate">{venue.title}</h3>
              <p className="text-xs text-gray-500 truncate">{venue.location}</p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <FaStar className="text-yellow-500 mr-1 text-xs" />
                {venue.rating.toFixed(1)} ({venue.reviews})
                <span className="text-gray-400 ml-auto text-xs">
                  ~ {venue.distance}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VenueCarousel;
