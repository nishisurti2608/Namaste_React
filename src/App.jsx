import Header from "./Components/Header"
import RestaurantCard from "./Components/RestaurantCard"


function App() {

  const restaurantData = {
  
  name:"Pizza Hut",
  cusine: ["Pizza","salad"],
  star: "4.6",
  price: "Items At ₹199",
  deliveryTime: "15 to 26 Minutes"

  
  }


  return (
    
    <>
    <Header/>

    <div className="mx-20 my-20">
      <h1 className="text-2xl text-white mb-12">Top Restaurant Chains In Ahmedabad</h1>
      <RestaurantCard data={restaurantData} />
    </div>
     
    </>
  )
}

export default App
