import { MdStars, MdDeliveryDining } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { PiMoney } from "react-icons/pi";


const RestaurantCard = (props) => {


  const{name,areaName,avgRating,sla,costForTwo,cloudinaryImageId,aggregatedDiscountInfoV3,cuisines} = props.data.info
  const offer = aggregatedDiscountInfoV3?.header +" "+ aggregatedDiscountInfoV3?.subHeader
  const IMG_URL =  import.meta.env.VITE_IMG_URL;


  return (



    <div className="relative group w-80">
      {/* Top border animation */}
      <span className="absolute top-0 left-0 h-[2px] bg-orange-500 w-0 group-hover:w-full transition-all duration-500"></span>

      {/* Left border animation */}
      <span className="absolute top-0 left-0 w-[2px] bg-orange-500 h-0 group-hover:h-full transition-all duration-500"></span>

  

      {/* card design */}
      <div className="flex  flex-col text-white cursor-pointer hover:scale-95 transition-transform duration-300">
        <div className="max-w-sm w-80 rounded-xl overflow-hidden shadow-lg">
          <div className="relative">
            <img
              className="w-full h-54 object-cover shadow-xl"
              src={IMG_URL + cloudinaryImageId }
              alt="Restaurant"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#2D3250]/90 px-4 py-2">
              <h2 className="text-lg font-bold text-white uppercase">{offer ? offer : " "}</h2>
            </div>
          </div>

          <div className="px-6 py-4 bg-[#1e1e2f]">
            <h3 className="text-orange-500 font-bold text-xl capitalize">{name}</h3>

            <div className="gap-2 text-gray-400 text-base">
            {cuisines.slice(0, 3).join(", ")}{cuisines.length > 3 ? ", ..." : ""}
            </div>

            <div className="flex items-center gap-2 text-center mt-2 mb-2">
              <MdStars className="text-orange-500 size-5" />
              <span className="text-sm font-semibold mr-2">{avgRating}</span>
              <MdDeliveryDining className="text-orange-500 size-6" />
              <span className="text-sm font-semibold mr-2">{sla.deliveryTime} Minutes</span>
             
            </div>
            <div className="flex items-center gap-1 text-center mt-2 mb-2">
            <IoMdPin className="text-orange-500 size-6" />
              <span className="text-sm font-semibold mr-2">{areaName.split("&")[0].replace(/\s+/g, "").trim()}</span>
              <PiMoney className="text-orange-500 size-6 mr-2" />
              <span className="text-sm font-semibold">{costForTwo}</span>
            </div>

            <button className="mt-4 cursor-pointer border border-orange-500 hover:bg-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-full transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
