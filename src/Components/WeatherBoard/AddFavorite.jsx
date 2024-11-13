import heart from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../Contexts";

function AddFavorite() {
	const [isFavorite, toggleFavorite] = useState(false)
	const {favorites, addToFavorite, removeFromFavorites} = useContext(FavoriteContext);
	const {weatherData} = useContext(WeatherContext);
	const {location, longitude,latitude} = weatherData;

	useEffect(()=>{
		const found = favorites.find(fav=> fav.location === location);
		toggleFavorite(found);
	},[])

	function handleFavorite(){
		const found = favorites.find((fav)=> fav.location === location);
		if(!found){
			addToFavorite(latitude,longitude,location)
		}else{
			removeFromFavorites(location)
		}
		toggleFavorite(!isFavorite)
	}
  return (
    <section className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        <button onClick={()=>handleFavorite()} className='text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'>
          <span>Add to Favourite</span>
          <img src={isFavorite? redHeart : heart} alt='' />
        </button>
      </div>
    </section>
  );
}

export default AddFavorite;
