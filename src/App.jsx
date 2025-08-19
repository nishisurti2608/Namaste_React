import { useState, useEffect } from "react";
import Header from "./Components/Header";
import RestaurantCard from "./Components/RestaurantCard";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null); // track which filter is applied

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await res.json();
        const restaurants =
          data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setRestaurantData(restaurants);
        setFilteredData(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // Apply filters dynamically
  const applyFilter = (filterType) => {
    setActiveFilter(filterType);

    if (filterType === "rating") {
      setFilteredData(restaurantData.filter((res) => res.info.avgRating > 4.3));
    } else if (filterType === "veg") {
      setFilteredData(restaurantData.filter((res) => res.info.veg));
    }
  };

  // Remove filter
  const clearFilter = () => {
    setActiveFilter(null);
    setFilteredData(restaurantData);
  };

  return (
    <>
      <Header />
      <div className="mx-20 my-20">
        <h1 className="text-2xl text-white mb-12">
          Top Restaurant Chains In Ahmedabad
        </h1>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">
          {/* Ratings Filter */}
          {activeFilter === "rating" ? (
            <div className="flex items-center group">
              <button
                onClick={() => applyFilter("rating")}
                className="bg-orange-500 border border-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-l-full transition duration-300 group-hover:text-[#2D3250]"
              >
                Ratings 4.3+
              </button>
              <button
                onClick={clearFilter}
                className="bg-orange-500 border border-orange-500 text-white font-semibold px-3 py-1.5 rounded-r-full transition duration-300 group-hover:text-[#2D3250]"
              >
                ×
              </button>
            </div>
          ) : (
            <button
              onClick={() => applyFilter("rating")}
              className="border border-orange-500 text-white hover:bg-orange-500 font-semibold text-sm px-4 py-2 rounded-full transition duration-300"
            >
              Ratings 4.3+
            </button>
          )}

          {/* Veg Filter */}
          {activeFilter === "veg" ? (
            <div className="flex items-center group">
              <button
                onClick={() => applyFilter("veg")}
                className="bg-orange-500 border border-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-l-full transition duration-300 group-hover:text-[#2D3250]"
              >
                Pure Veg
              </button>
              <button
                onClick={clearFilter}
                className="bg-orange-500 border border-orange-500 text-white font-semibold px-3 py-1.5 rounded-r-full transition duration-300 group-hover:text-[#2D3250]"
              >
                ×
              </button>
            </div>
          ) : (
            <button
              onClick={() => applyFilter("veg")}
              className="border border-green-500 text-white hover:bg-green-500 font-semibold text-sm px-4 py-2 rounded-full transition duration-300"
            >
              Pure Veg
            </button>
          )}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredData.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} data={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
