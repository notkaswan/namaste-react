import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null)
  // const [resMenuInfo, setResMenuInfo] = useState(null);
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resData === null) return <Shimmer />;
  const resInfo = resData?.cards[2]?.card?.card?.info;
  const resMenuInfo =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mt-10">{resInfo?.name}</h1>
      <h2 className="italic">
        {resInfo?.areaName}, {resInfo?.city}
      </h2>
      <h3 className="italic">{resInfo?.costForTwoMessage}</h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
