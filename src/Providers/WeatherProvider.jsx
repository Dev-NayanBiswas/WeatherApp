import { WeatherContext } from '../Contexts'
import useWeather from "../Hooks/useWeather"

function WeatherProvider({children}){
    const {weatherData, error, loading} = useWeather()
  return (
    <WeatherContext.Provider value={{weatherData, error, loading}}>
        {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider