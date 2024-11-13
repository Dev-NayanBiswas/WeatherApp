import { useContext, useEffect, useState } from "react"
import Header from "./Components/Header/Header"
import WeatherBoard from "./Components/WeatherBoard/WeatherBoard"
import { WeatherContext } from "./Contexts"
import clearSkyImage from "./assets/backgrounds/clear-sky.jpg"
import fewCloudImage from "./assets/backgrounds/few-clouds.jpg"
import mist from "./assets/backgrounds/mist.jpeg"
import scatteredClouds from "./assets/backgrounds/scattered-clouds.jpg"
import shower from "./assets/backgrounds/shower-rain.jpg"
import snow from "./assets/backgrounds/snow.jpg"
import sunny from "./assets/backgrounds/sunny.jpg"
import thunderStorm from "./assets/backgrounds/thunderstorm.jpg"
import winter from "./assets/backgrounds/winter.jpg"

function WeatherApp() {
  const {weatherData} = useContext(WeatherContext);
  const [climateImage, setClimateImage]= useState("");


  function getBackgroundImage(climate){
    switch(climate){
      case "Rain":
        return shower;
      case "Clouds":
        return scatteredClouds;
      case "Clear":
        return clearSkyImage;
      case "Snow":
        return snow;
      case "Thunder":
        return thunderStorm;
      case "Fog":
        return winter
      case "Haze":
        return fewCloudImage;
      case "Mist":
        return mist;
      default:
        return sunny;
    }
  }

  useEffect(()=>{
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage)
  },[weatherData.climate])

  return (
    <>
        <section 
        style={{backgroundImage:`url('${climateImage}')`}}  
        className="grid place-items-center h-screen bg-no-repeat bg-cover">
        <section className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <Header/>
        </section>
        <main>
          <section>
            <WeatherBoard/>
          </section>
        </main>
        </section>
    </>
  )
}

export default WeatherApp