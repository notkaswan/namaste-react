import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false)
    const handleClick = () => {
        setShowItems(!showItems)
        
    }
    return(
        <div>
            {/* Accordion Header */}

            <div className="mx-auto my-4 w-1/2 bg-gray-200 p-4 shadow-xl">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordion Body */}
            {showItems && <ItemList items= {data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory