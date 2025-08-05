import Header from "./Components/Header"
import RestaurantCard from "./Components/RestaurantCard"


function App() {


  return (
    
    <>
    <Header/>

    <div className="mx-20 my-20">
      <h1 className="text-2xl text-white mb-20">Top Restaurant Chains In Ahmedabad</h1>
      <RestaurantCard/>
    </div>
     
    </>
  )
}

export default App
