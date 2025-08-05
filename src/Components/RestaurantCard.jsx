import { MdStars,MdDeliveryDining } from "react-icons/md";




const RestaurantCard = (props) => {

    const {name,cusine,star,price,deliveryTime}=props.data
    return (
      <div className="flex flex-col w-80 text-white cursor-pointer hover:scale-95 duration-120">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
          <div className="relative">
            <img
              className="w-full h-54 object-cover shadow-xl"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/468d7ec1-400c-45e1-8fe2-67237a3174cf_47589.JPG"
              alt="Restaurant"
            />
   
            <div className="absolute bottom-0 left-0 w-full bg-[#2D3250]/90 px-4 py-2">
              <h2 className="text-lg font-bold text-white uppercase">{price}</h2>
            </div>
          </div>
  
          <div className="px-6 py-4">
            <h3 className="text-orange-500 font-bold text-xl">{name}</h3>
           
            <div className="flex flex-wrap gap-1 text-gray-500 text-base">
             {cusine.join(", ")}
            </div>
            
            <div className="flex items-center gap-2 text-center mt-2 mb-2">
                <MdStars className="text-orange-500 size-5 " />
                <span className="text-sm font-semibold mr-2">{star}</span>
                <MdDeliveryDining className="text-orange-500 size-6" />
                <span className="text-sm font-semibold mr-2">{deliveryTime}</span>
            </div>
            <button className="mt-4 cursor-pointer border border-orange-500 hover:bg-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-full transition duration-300">
                 Order Now
            </button>
          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;
  