import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenuInfo, setResMenuInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4050436&lng=77.0962693&restaurantId=" + resId)
        const json = await data.json();

        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        setResMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        console.log(json.data);
        
    }

    if (resInfo === null) return <Shimmer />;

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