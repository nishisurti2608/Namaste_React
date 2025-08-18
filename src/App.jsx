
import {useState,useEffect} from "react"
import Header from "./Components/Header"
import RestaurantCard from "./Components/RestaurantCard"



function App() {

  const[restaurantData,setRestaurantData] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
  
    fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   
    .then(res => res.json())
    .then (data => {
      const restaurants = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantData(restaurants);
      setFilteredData(restaurants); // initially we are showing all restaurants
    });
}, []);



function applyFilter() {
  const topRated = restaurantData.filter((res) => res.info.avgRating > 4.3);
  setFilteredData(topRated);
}
function removeFilter() {
  setFilteredData(restaurantData);
}



  return (
    
    <>
    <Header/>
    <div className="mx-20 my-20">
      <h1 className="text-2xl  text-white mb-12">Top Restaurant Chains In Ahmedabad</h1>
          {/* filter buttons */}
          <div className="flex mb-6">
  {filteredData.length === restaurantData.length ? (
    // Filter not applied
    <button
      onClick={applyFilter}
      className="mt-4 cursor-pointer border border-orange-500 text-white hover:bg-orange-500 font-semibold text-sm px-4 py-2 rounded-full transition duration-300"
    >
      Ratings 4.0+
    </button>
  ) : (
    // Filter applied
<div className="flex items-center mt-4 group ">
  <button
    className="bg-orange-500 border border-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-l-full transition duration-300 group-hover:text-[#2D3250] hover:cursor-pointer"
  >
    Ratings 4.0+
  </button>
  <button
    onClick={removeFilter}
    className="bg-orange-500 border border-orange-500 text-white font-semibold pr-3 py-1.5 rounded-r-full transition duration-300 group-hover:text-[#2D3250] hover:cursor-pointer"
  >
    ×
  </button>
</div>

  )}
</div>

       <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

  
   
      {filteredData.map((restaurant) =><RestaurantCard key={restaurant.info.id} data={restaurant} /> )}
    </div>

    </div>
   
     
    </>
  )
}

export default App
