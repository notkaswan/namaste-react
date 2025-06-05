import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4050436&lng=77.0962693&restaurantId=" + resId)
        const json = await data.json();
        setResInfo(json.data)
        // setResInfo(json?.data?.cards[2]?.card?.card?.info);
        // setResMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        // console.log(json.data );
        
    }

    return resInfo;
}

export default useRestaurantMenu;