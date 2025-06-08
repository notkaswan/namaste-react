import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log(items);
    
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 text-left border-gray-400 border-b-2">
                        <div className="flex justify-between">
                            <div className="w-9/12">
                    <div className="p-2 flex flex-col">
                            <span className="font-semibold">{item.card.info.name}</span>
                        <span className="text-sm">₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                    <p className="text-xs wrap-break-word">{item.card.info.description}</p>
                    </div>
                    <div className="w-4/12">
                    <div className="absolute">
                            <button className="mx-20 rounded-lg p-2 bg-white shadow-lg">Add +</button>
                    </div>
                            <img className="" src={CDN_URL+item.card.info.imageId} />
                    </div>
                </div>
                </div>
                ))}
        </div>
    )
}

export default ItemList;