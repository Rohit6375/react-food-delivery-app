
export const ItemList = ({items}) => {
    // console.log(items);
  return (
    <div>
        {items.map(item=> (<div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
         
            <div className="w-9/12">
          <div className='py-2'>
            <span>{item.card.info.name}</span>
            <span> -  ₹{item.card.info.price/100 || item.card.info.defaultPrice/100 || item.card.info.finalprice/100}</span>
          </div>
          <p className='text-sm'>{item.card.info.description}</p>
          </div>
           <div className='w-3/12 p-4'> 
           
            <div className="absolute">
            <button className="p-2 bg-black text-white shadow-lg  mx-14 my-32">
                Add +
            </button>
            </div>
             <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} className="w-full" >
            </img>
            </div>
          </div>
        ))}
    </div>
  );
};

