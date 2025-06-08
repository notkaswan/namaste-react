import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null)
    // const [resMenuInfo, setResMenuInfo] = useState(null);
    const {resId} = useParams();
    
    const resData = useRestaurantMenu(resId);

    if (resData === null) return <Shimmer />;
    const resInfo = resData?.cards[2]?.card?.card?.info
    const resMenuInfo = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    console.log(resData)
    return (
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h2>{resInfo?.areaName}, {resInfo?.city}</h2>
            <h3>{resInfo?.costForTwoMessage}</h3>
            <h2>menu</h2>
            <ul>
                {resMenuInfo != null && resMenuInfo.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu