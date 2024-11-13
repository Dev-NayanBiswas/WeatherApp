import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../Contexts";

function Modal(){
  const {favorites} = useContext(FavoriteContext);
  const {setSelectedLocation} = useContext(LocationContext);
  return (
    <div className="transition-all duration-200 max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
      <h3 className='text-lg font-bold px-4'>Favourite Locations</h3>
      <ul className='space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer'>
        {
          favorites.length? favorites.map((fav, index)=><li key={index} className='hover:bg-gray-200'>
            <a onClick={()=>setSelectedLocation({...fav})}>
            {fav.location}
            </a>
          </li>) 
          : <p className="text-red-400 font-semibold text-xs text-center">Nothing Added</p>
        }
      </ul>
    </div>
  );
}

export default Modal;
