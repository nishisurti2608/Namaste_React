
import {useState,useEffect} from "react"
import Header from "./Components/Header"
import RestaurantCard from "./Components/RestaurantCard"



function App() {

  const[restaurantData,setRestaurantData] = useState([])

  useEffect(()=>{
  
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    .then(res => res.json())
    .then (data => setRestaurantData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
  },[])



  return (
    
    <>
    <Header/>

    <h1 className="text-2xl text-white mb-12">Top Restaurant Chains In Ahmedabad</h1>
    <div className="mx-20 my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

   
      {restaurantData.map((restaurant) =><RestaurantCard key={restaurant.info.id} data={restaurant} /> )}
    </div>
     
    </>
  )
}

export default App
