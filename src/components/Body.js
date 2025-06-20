import RestaurantCard, { withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4621359&lng=77.0463719&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)    
  };
  
  // if (listOfRestaurants.length === 0) {
    //   return <Shimmer />;
    // }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>You are offline!!!Kindly check your network connection.</h1>

  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
          <button className="px-4 py-1 bg-green-200 m-4 rounded-lg" onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurants(filteredRestaurants)
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
          className="px-4 py-1 bg-gray-400 rounded-lg"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
            { 
              restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
            }
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
