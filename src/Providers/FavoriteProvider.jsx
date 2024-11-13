import { FavoriteContext } from "../Contexts"
import { useLocalStorage } from "../Hooks"

function FavoriteProvider({children}){
    const [favorites, setFavorites] = useLocalStorage("favorites",[]);


    function addToFavorite(latitude, longitude, location){
        setFavorites(
            [...favorites,
            {
                latitude:latitude,
                longitude:longitude,
                location:location
            }]
        )
    }

    function removeFromFavorites(location){
        const restFavorites = favorites.filter(fav=> fav.location !== location);
        setFavorites(restFavorites);
    }

    const favObj = {
        favorites, addToFavorite, removeFromFavorites
    }

  return (
    <FavoriteContext.Provider value={favObj}>
            {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider