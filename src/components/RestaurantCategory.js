import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    
    return(
        <div>
            {/* Accordion Header */}

            <div className="mx-auto my-4 w-1/2 bg-gray-200 p-4 shadow-xl">
            <div className="flex justify-between">
                <span className="text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordion Body */}
            <ItemList items= {data.itemCards} />
            </div>
        </div>
    )
}

export default RestaurantCategory