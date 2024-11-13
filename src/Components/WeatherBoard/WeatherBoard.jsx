import { useContext } from "react"
import AddFavorite from "./AddFavorite"
import WeatherCondition from "./WeatherCondition"
import WeatherHeadline from "./WeatherHeadline"
import { WeatherContext } from "../../Contexts"

function WeatherBoard() {
    const {weatherData, error, loading} = useContext(WeatherContext);

  return (
    <>
        <div className="container">
				<div
					className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					
						{
							loading.state ? (<p className="w-full h-full text-red-400 text-5xl font-bold text-center">{loading.message}</p>) :

							<div className="grid md:grid-cols-2 gap-10 md:gap-6"><AddFavorite/>
								<WeatherHeadline/>
								<WeatherCondition/>
							</div>
						}
					
				</div>
				
			</div>
    </>
  )
}

export default WeatherBoard