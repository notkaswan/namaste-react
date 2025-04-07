import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked filter");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
